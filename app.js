/* IDT UniMe — static app. Data: data/index.js (CHAPTERS), data/questions.js (QBANK),
   data/chapters/chNN.js (full text, loaded on demand), revision/chNN.js (revision schemes). */
(function () {
  "use strict";
  var CH = window.CHAPTERS || [], QB = window.QBANK || [], REV = window.REVISION || {};
  var QUIZ_SIZE = 31, PASS = 18;
  var SC = document.getElementById("scroller"), view = document.getElementById("view"), navSlot = document.getElementById("secnav-slot");
  var L = ["A", "B", "C", "D"];
  var chByNum = {}; CH.forEach(function (c) { chByNum[c.num] = c; });

  /* ---------- storage (optional, per device) ---------- */
  function sget(store, k, d) { try { var v = window[store].getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function sset(store, k, v) { try { window[store].setItem(k, JSON.stringify(v)); } catch (e) {} }

  /* ---------- helpers ---------- */
  function h(html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function strip(s) { var d = document.createElement("div"); d.innerHTML = s; return d.textContent; }
  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  var loaded = {};
  function loadScript(src) {
    if (loaded[src]) return loaded[src];
    loaded[src] = new Promise(function (res, rej) {
      var s = document.createElement("script"); s.src = src; s.onload = res;
      s.onerror = function () { delete loaded[src]; rej(new Error("Could not load " + src)); };
      document.head.appendChild(s);
    });
    return loaded[src];
  }
  function loadChapter(n) {
    window.CHDATA = window.CHDATA || {};
    if (window.CHDATA[n]) return Promise.resolve(window.CHDATA[n]);
    return loadScript("data/chapters/ch" + pad(n) + ".js").then(function () { return window.CHDATA[n]; });
  }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function gradeOf(correct) {
    if (correct === QUIZ_SIZE) return { label: "30 e lode", cls: "lode", note: "Every answer correct." };
    if (correct >= PASS) return { label: correct + "/30", cls: "", note: "Passed." };
    return { label: "Insufficient", cls: "fail", note: "At least " + PASS + " correct answers are needed to pass." };
  }
  function secLabel(id) { return /^\d/.test(id) ? "§" + id : id; }
  function sectionMatches(qsec, secId) {
    return qsec.some(function (s) {
      s = s.replace(/–.*/, "");
      return s === secId || s.split(".")[0] === secId;
    });
  }
  function sectionHtml(data, id) {
    id = id.replace(/–.*/, "");
    for (var i = 0; i < data.sections.length; i++) {
      var s = data.sections[i];
      if (s.id === id) return s.html + s.subs.map(function (u) { return "<h3>" + u.id + " " + u.title + "</h3>" + u.html; }).join("");
      for (var j = 0; j < s.subs.length; j++) if (s.subs[j].id === id) return "<h3>" + s.subs[j].id + " " + s.subs[j].title + "</h3>" + s.subs[j].html;
    }
    return "";
  }

  /* ---------- visual components for revision schemes ---------- */
  var ARROW_D = '<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2v11M3 8l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  function title(v) { return v.title ? '<p class="vtitle">' + v.title + "</p>" : ""; }
  function cap(v) { return v.caption ? '<p class="vcap">' + v.caption + "</p>" : ""; }
  var VIS = {
    stats: function (v) { return '<div class="stats">' + v.items.map(function (i) { return '<div class="stat"><b>' + i.v + "</b><span>" + i.l + "</span></div>"; }).join("") + "</div>"; },
    cards: function (v) { return title(v) + '<div class="cards">' + v.items.map(function (i) { return '<div class="card ' + (i.tone || "") + '"><h4>' + i.h + "</h4><p>" + i.p + "</p>" + (i.tag ? '<span class="pill">' + i.tag + "</span>" : "") + "</div>"; }).join("") + "</div>" + cap(v); },
    grid: function (v) { return title(v) + '<div class="grid8">' + v.items.map(function (i) { return '<div class="card"><h4>' + i.h + "</h4><p>" + i.p + "</p></div>"; }).join("") + "</div>" + cap(v); },
    chips: function (v) { return title(v) + '<div class="chips">' + v.groups.map(function (g) { return '<div class="chipgrp">' + (g.h ? "<b>" + g.h + "</b>" : "") + g.items.map(function (i) { return '<span class="chip">' + i + "</span>"; }).join("") + "</div>"; }).join("") + "</div>" + cap(v); },
    compare: function (v) { return title(v) + '<div class="compare">' + v.cols.map(function (c) { return '<div class="col ' + (c.tone || "") + '"><h4>' + c.h + (c.tag ? ' <span class="pill">' + c.tag + "</span>" : "") + "</h4><ul>" + c.items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul></div>"; }).join("") + "</div>" + cap(v); },
    flow: function (v) {
      var steps = v.steps.map(function (s) { return '<div class="fstep ' + (s.tone || "") + '"><b>' + s.h + "</b>" + (s.p ? "<span>" + s.p + "</span>" : "") + "</div>"; });
      return title(v) + '<div class="flow ' + (v.dir === "row" ? "row" : "") + '">' + (v.dir === "row" ? steps.join("") : steps.join('<div class="farrow">' + ARROW_D + "</div>")) + "</div>" + cap(v);
    },
    timeline: function (v) { return title(v) + '<div class="timeline">' + v.points.map(function (p) { return '<div class="tpt ' + (p.tone || "") + '"><div class="at">' + p.at + "</div><b>" + p.h + "</b>" + (p.p ? "<span>" + p.p + "</span>" : "") + "</div>"; }).join("") + "</div>" + cap(v); },
    algo: function (v) {
      return title(v) + '<div class="algo">' + v.nodes.map(function (n) {
        return '<div class="anode"><div class="q">' + n.q + '</div><div class="opts">' + n.opts.map(function (o) {
          return '<div class="aopt ' + (o.tone || "") + '"><span class="w">' + o.when + "</span><b>" + o.to + "</b>" + (o.next ? '<span class="nx">continue below</span>' : "") + "</div>";
        }).join("") + "</div></div>";
      }).join('<div class="farrow">' + ARROW_D + "</div>") + "</div>" + cap(v);
    },
    table: function (v) { return title(v) + '<div class="tbl"><table><thead><tr>' + v.head.map(function (x) { return "<th>" + x + "</th>"; }).join("") + "</tr></thead><tbody>" + v.rows.map(function (r) { return "<tr>" + r.map(function (x, i) { return (i === 0 ? "<th scope=\"row\">" : "<td>") + x + (i === 0 ? "</th>" : "</td>"); }).join("") + "</tr>"; }).join("") + "</tbody></table></div>" + cap(v); },
    ladder: function (v) { return title(v) + '<div class="ladder">' + v.steps.map(function (s) { return '<div class="rung ' + (s.tone || "") + '"><b>' + s.h + "</b><span>" + s.p + "</span></div>"; }).join("") + "</div>" + cap(v); },
    note: function (v) { return '<div class="note"><b>' + v.h + "</b><p>" + v.p + "</p></div>"; },
    curb65: function () {
      var items = [["C", "Confusion"], ["U", "Urea &gt;7 mmol/L (BUN &gt;19 mg/dL)"], ["R", "Respiratory rate ≥30/min"], ["B", "SBP &lt;90 or DBP ≤60 mmHg"], ["65", "Age ≥65 years"]];
      return '<div class="calc" data-calc="curb65"><h4>Try it: CURB-65</h4>' + items.map(function (it, i) {
        return '<label><input type="checkbox" id="curb-' + i + '"><b>' + it[0] + "</b><span>" + it[1] + "</span></label>";
      }).join("") + '<div class="out"><span class="sc">0</span><span class="res"></span></div><p class="vcap" style="margin:0">One point each. The score supports clinical judgment; it does not replace it.</p></div>';
    },
    lifecycle: function () {
      return '<p class="vtitle">The <i>Plasmodium</i> life cycle</p><div class="cycle" role="img" aria-label="Life cycle: mosquito bite, liver stage, blood stage, gametocytes, back to the mosquito">' +
        '<div class="cnode"><span class="eyebrow">1 · Mosquito bite</span><b>Sporozoites</b><span>Female <i>Anopheles</i>, dusk to dawn</span></div>' +
        '<div class="carr">→</div>' +
        '<div class="cnode"><span class="eyebrow">2 · Liver</span><b>Hepatocyte schizont</b><span>Silent. This stage is the <b>incubation</b>.</span><div class="sub"><b>Hypnozoites</b> (<i>vivax</i>, <i>ovale</i>): dormant, relapse weeks–months later</div></div>' +
        '<div class="carr">↑</div><div class="ccenter">Human<br>host</div><div class="carr">↓</div>' +
        '<div class="cnode"><span class="eyebrow">4 · Transmission</span><b>Gametocytes</b><span>Taken up by the mosquito; sexual cycle in its gut</span></div>' +
        '<div class="carr">←</div>' +
        '<div class="cnode blood"><span class="eyebrow">3 · Red blood cells</span><b>Blood stage = symptoms</b><div class="ring"><i>ring</i>→<i>trophozoite</i>→<i>schizont</i>→<i>rupture</i></div><span>Merozoites invade new red cells</span></div>' +
        "</div>";
    },
    ranges: function (v) {
      var max = v.max; function x(d) { return (d / max * 100).toFixed(2) + "%"; }
      return title(v) + '<div class="incub ranges">' + v.rows.map(function (r) {
        var w = Math.max(r.to - r.from, max / 30);
        var val = r.txt || (r.note ? r.note + " " : "") + (r.from === r.to ? r.from : r.from + "–" + r.to) + (v.unit || " d");
        return '<div class="irow"><b>' + r.label + ' <span class="val">' + val + '</span></b><div class="track"><span class="typ' + (r.tone === "warn" ? " w" : "") + '" style="left:' + x(Math.min(r.from, max - w)) + ";width:" + x(w) + '"></span></div></div>';
      }).join("") + '<div class="axis">' + v.ticks.map(function (d) { return d === max ? '<span class="end">' + d + '</span>' : '<span style="left:' + x(d) + '">' + d + '</span>'; }).join("") + "</div></div>" + cap(v);
    },
    bars: function (v) {
      var max = v.max || Math.max.apply(null, v.rows.map(function (r) { return r.v; }));
      return title(v) + '<div class="incub ranges bars">' + v.rows.map(function (r) {
        return '<div class="irow"><b>' + r.label + '</b><div class="track"><span class="typ' + (r.tone === "warn" ? " w" : "") + '" style="left:0;width:' + (r.v / max * 100).toFixed(1) + '%"></span><span class="bv">' + (r.t || r.v + (v.unit || "")) + "</span></div></div>";
      }).join("") + "</div>" + cap(v);
    },
    pkpd: function () {
      var W = 360, H = 200, x0 = 34, y0 = 170, xs = 300, ys = 140, pts = [], mic = 0.32, cross = [];
      function c(t) { return 1.55 * (Math.exp(-0.45 * t) - Math.exp(-3 * t)); }
      var prev = null;
      for (var i = 0; i <= 120; i++) { var t = i / 120 * 8, v = c(t); pts.push([x0 + t / 8 * xs, y0 - v * ys]); if (prev !== null && (prev - mic) * (v - mic) < 0) cross.push(x0 + t / 8 * xs); prev = v; }
      var peak = pts.reduce(function (a, b) { return b[1] < a[1] ? b : a; });
      var line = pts.map(function (p, i) { return (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1); }).join(" ");
      var my = y0 - mic * ys;
      return '<p class="vtitle">The three PK/PD indices on one concentration curve</p><div class="pkpd"><svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Concentration-time curve with MIC line, Cmax, time above MIC and AUC">' +
        '<path d="' + line + " L" + (x0 + xs) + " " + y0 + " L" + x0 + " " + y0 + ' Z" class="auc"/>' +
        '<path d="' + line + '" class="curve"/>' +
        '<line x1="' + x0 + '" y1="' + my + '" x2="' + (x0 + xs) + '" y2="' + my + '" class="mic"/>' +
        '<text x="' + (x0 + xs) + '" y="' + (my - 6) + '" text-anchor="end" class="lbl warnt">MIC</text>' +
        '<line x1="' + cross[0] + '" y1="' + (y0 + 8) + '" x2="' + cross[1] + '" y2="' + (y0 + 8) + '" class="tmic"/>' +
        '<line x1="' + cross[0] + '" y1="' + my + '" x2="' + cross[0] + '" y2="' + (y0 + 8) + '" class="guide"/><line x1="' + cross[1] + '" y1="' + my + '" x2="' + cross[1] + '" y2="' + (y0 + 8) + '" class="guide"/>' +
        '<text x="' + ((cross[0] + cross[1]) / 2) + '" y="' + (y0 + 24) + '" text-anchor="middle" class="lbl">T &gt; MIC</text>' +
        '<circle cx="' + peak[0] + '" cy="' + peak[1] + '" r="4" class="pk"/><text x="' + (peak[0] + 8) + '" y="' + (peak[1] + 4) + '" class="lbl">Cmax</text>' +
        '<text x="' + (x0 + 70) + '" y="' + (y0 - 30) + '" class="lbl soft">AUC</text>' +
        '<line x1="' + x0 + '" y1="10" x2="' + x0 + '" y2="' + y0 + '" class="ax"/><line x1="' + x0 + '" y1="' + y0 + '" x2="' + (x0 + xs) + '" y2="' + y0 + '" class="ax"/>' +
        '<text x="' + (x0 + xs) + '" y="' + (y0 + 24) + '" text-anchor="end" class="lbl soft">time</text>' +
        '<text x="12" y="' + (y0 / 2 + 10) + '" transform="rotate(-90 12 ' + (y0 / 2 + 10) + ')" text-anchor="middle" class="lbl soft">concentration</text>' +
        '</svg></div><div class="compare" style="margin-top:10px">' +
        '<div class="col accent"><h4>T &gt; MIC</h4><ul><li>β-lactams</li><li>Keep levels above the MIC: prolonged infusion</li></ul></div>' +
        '<div class="col"><h4>Cmax / MIC</h4><ul><li>Aminoglycosides</li><li>High peak: once daily</li></ul></div>' +
        '<div class="col"><h4>AUC / MIC</h4><ul><li>Vancomycin, fluoroquinolones, linezolid</li><li>Total daily exposure</li></ul></div></div>';
    },
    incubation: function () {
      var max = 42; function x(d) { return (d / max * 100).toFixed(2) + "%"; }
      return '<p class="vtitle">Incubation after the bite (days, to scale)</p><div class="incub">' +
        '<div class="irow"><b><i>P. falciparum</i></b><div class="track"><span class="rng" style="left:' + x(7) + ";width:" + x(23) + '"></span><span class="typ" style="left:' + x(12) + ";width:" + x(2) + '"></span></div></div>' +
        '<div class="irow"><b><i>P. vivax</i>, <i>P. ovale</i></b><div class="track"><span class="late" style="left:' + x(21) + ';right:0"></span></div></div>' +
        '<div class="axis">' + [0, 7, 14, 21, 28].map(function (d) { return '<span style="left:' + x(d) + '">' + d + "</span>"; }).join("") + '<span class="end">→ months</span></div>' +
        '<div class="ilegend"><span><i style="background:var(--accent)"></i>typical 12–14 d</span><span><i style="background:color-mix(in srgb,var(--accent) 40%,var(--surface))"></i>range 7–30 d</span><span><i style="background:repeating-linear-gradient(90deg,var(--warn) 0 6px,transparent 6px 10px)"></i>may present weeks to months later (hypnozoites)</span></div>' +
        '<p class="vcap" style="margin:0">Partial immunity or inadequate prophylaxis can prolong the incubation.</p></div>';
    }
  };
  function wireCalc(root) {
    root.querySelectorAll('[data-calc="curb65"]').forEach(function (c) {
      function upd() {
        var boxes = c.querySelectorAll("input"), n = 0; boxes.forEach(function (b) { if (b.checked) n++; });
        var onlyAge = n === 1 && boxes[4].checked;
        c.querySelector(".sc").textContent = n;
        c.querySelector(".res").innerHTML = n === 0 ? "<b>Outpatient</b>" : n <= 2 ? "<b>Generally ward admission</b>" + (onlyAge ? "<br>A score of 1 for age alone may not need admission." : "") : "<b>Hospital; consider ICU</b>";
      }
      c.addEventListener("change", upd); upd();
    });
  }

  /* ---------- practice questions (inline, per section) ---------- */
  function practiceBlock(qs, keyPrefix) {
    return qs.map(function (q, qi) {
      return '<div class="mcq" data-a="' + q.a + '"><div class="stem">' + q.stem + '</div><div class="opts">' + q.opts.map(function (o, i) {
        return '<button class="opt" data-i="' + i + '"><span class="L">' + L[i] + "</span><span>" + o + "</span></button>";
      }).join("") + "</div></div>";
    }).join("");
  }
  function wirePractice(root) {
    root.addEventListener("click", function (e) {
      var b = e.target.closest(".mcq .opt"); if (!b || b.disabled) return;
      var m = b.closest(".mcq"), a = +m.dataset.a, i = +b.dataset.i;
      m.querySelectorAll(".opt").forEach(function (o, k) { o.disabled = true; if (k === a) o.classList.add("right"); });
      if (i !== a) b.classList.add("wrong");
    });
  }

  /* ---------- views ---------- */
  function setNav(which) {
    document.querySelectorAll("[data-nav]").forEach(function (a) { if (a.dataset.nav === which) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
  }

  function renderHome() {
    setNav("home"); navSlot.innerHTML = "";
    var hist = sget("localStorage", "itd-history", []);
    var curated = CH.filter(function (c) { return REV[c.num]; }).length;
    view.innerHTML = "";
    view.appendChild(h(
      '<section class="hero"><span class="eyebrow">Infectious &amp; Tropical Diseases · Medicine and Surgery</span>' +
      "<h1>Revise the handout, then test yourself.</h1>" +
      "<p>" + CH.length + " chapters split by section, with key points, schemes and practice questions. The exam quiz draws " + QUIZ_SIZE + " questions from all " + QB.length + ".</p>" +
      '<div class="examcard"><div><h2>Exam simulation</h2><p>' + QUIZ_SIZE + " random questions · grade out of 30 · pass with " + PASS + " correct</p></div>" +
      '<a class="btn" href="#quiz">Start the quiz</a></div>' +
      (hist.length ? '<div class="history"><span>Your recent results:</span>' + hist.slice(-5).reverse().map(function (r) { return '<span class="pill ' + (r.correct >= PASS ? "on" : "") + '">' + esc(r.grade) + "</span>"; }).join("") + "</div>" : "") +
      "</section>" +
      '<div class="h-row"><h2>Chapters</h2><span class="muted" style="font-size:14px">' + curated + " of " + CH.length + " with revision schemes so far</span></div>" +
      '<ul class="chlist">' + CH.map(function (c) {
        return '<li><a href="#ch-' + c.num + '"><span class="chnum">' + c.num + '</span><span><span class="t">' + c.title + '</span><span class="s">' +
          (REV[c.num] ? '<span class="pill on">Revision schemes</span>' : '<span class="pill">Full text</span>') + "</span></span></a></li>";
      }).join("") + "</ul>"
    ));
  }

  var pendingScroll = null, spy = null;
  function renderChapter(n) {
    setNav("home");
    var meta = chByNum[n];
    if (!meta) { location.hash = "home"; return; }
    view.innerHTML = '<p class="loading">Loading chapter…</p>'; navSlot.innerHTML = "";
    loadChapter(n).then(function (d) {
      var rev = REV[n];
      var secs = d.sections;
      navSlot.innerHTML = '<nav class="secnav" aria-label="Sections"><div class="wrap">' +
        (d.keyPoints ? '<button data-go="kp">Key points</button>' : "") +
        secs.map(function (s) { return '<button data-go="s-' + s.id + '">' + strip(s.title) + "</button>"; }).join("") +
        (d.redFlags ? '<button data-go="rf">Red flags</button>' : "") +
        (d.open.length ? '<button data-go="oq">Open questions</button>' : "") + "</div></nav>";
      var html = '<header class="chhead"><span class="eyebrow">Chapter ' + n + (rev ? " · revision schemes" : " · full text") + "</span><h1>" + d.title + "</h1>" +
        (rev ? "" : '<p class="muted" style="margin:0">Revision schemes for this chapter are not ready yet. The full handout text is shown, section by section.</p>') + "</header>";
      html += '<div class="stack">';
      if (d.keyPoints) html += '<section class="box keypts sec" id="kp"><h2>Key points</h2>' + d.keyPoints + "</section>";
      if (d.intro && !rev) html += '<div class="prose">' + d.intro + "</div>";
      secs.forEach(function (s) {
        var r = rev && rev.sections[s.id];
        var full = s.html + s.subs.map(function (u) { return '<h3><span class="muted">' + u.id + "</span> " + u.title + "</h3>" + u.html; }).join("");
        var qs = QB.filter(function (q) { return q.ch === n && sectionMatches(q.sec, s.id); });
        html += '<section class="sec" id="s-' + s.id + '"><div class="sechead">' + (/^\d+$/.test(s.id) ? '<span class="secno">' + s.id + "</span>" : "") + "<h2>" + s.title + "</h2></div>";
        if (r) {
          html += '<ul class="summary">' + r.summary.map(function (b) { return "<li>" + b + "</li>"; }).join("") + "</ul>";
          (r.visuals || []).forEach(function (v) { html += "<div>" + (VIS[v.type] ? VIS[v.type](v) : "") + "</div>"; });
          html += '<details class="more"><summary>Full text from the handout</summary><div class="inner prose">' + full + "</div></details>";
        } else {
          html += '<div class="prose">' + full + "</div>";
        }
        if (qs.length) html += '<details class="more"><summary>Practice: ' + qs.length + " question" + (qs.length > 1 ? "s" : "") + ' on this section</summary><div class="inner">' + practiceBlock(qs) + "</div></details>";
        html += "</section>";
      });
      if (d.redFlags) html += '<section class="box flags sec" id="rf"><h2>Exam red flags and common pitfalls</h2>' + d.redFlags + "</section>";
      if (d.open.length) html += '<section class="box sec" id="oq"><h2 style="font-size:18px;margin-bottom:8px">Open questions</h2><ol class="openq">' + d.open.map(function (o) { return "<li>" + o + "</li>"; }).join("") + "</ol></section>";
      if (d.refs) html += '<details class="more"><summary>References</summary><div class="inner prose" style="font-size:14px">' + d.refs + "</div></details>";
      html += "</div>";
      view.innerHTML = html;
      wireCalc(view); wirePractice(view);
      navSlot.querySelectorAll("[data-go]").forEach(function (b) {
        b.addEventListener("click", function () { var t = document.getElementById(b.dataset.go); if (t) t.scrollIntoView({ behavior: "smooth", block: "start" }); });
      });
      // highlight current section chip
      if (spy) spy.disconnect();
      if ("IntersectionObserver" in window) {
        spy = new IntersectionObserver(function (entries) {
          entries.forEach(function (en) {
            if (!en.isIntersecting) return;
            navSlot.querySelectorAll("[data-go]").forEach(function (b) {
              var on = b.dataset.go === en.target.id; b.classList.toggle("active", on);
              if (on) b.scrollIntoView({ block: "nearest", inline: "center" });
            });
          });
        }, { rootMargin: "-130px 0px -65% 0px" });
        view.querySelectorAll(".sec").forEach(function (s) { spy.observe(s); });
      }
      if (pendingScroll) { var t = document.getElementById("s-" + pendingScroll.split(".")[0]); pendingScroll = null; if (t) setTimeout(function () { t.scrollIntoView({ block: "start" }); }, 30); }
      else SC.scrollTo(0, 0);
    }).catch(function (e) { view.innerHTML = '<p class="loading">' + esc(e.message) + "</p>"; });
  }

  /* ---------- quiz ---------- */
  var quiz = sget("sessionStorage", "itd-quiz", null);
  function saveQuiz() { sset("sessionStorage", "itd-quiz", quiz); }
  function newQuiz() {
    quiz = { ids: shuffle(QB).slice(0, QUIZ_SIZE).map(function (q) { return q.id; }), ans: {}, cur: 0, done: false, started: Date.now() };
    saveQuiz();
  }
  var qById = {}; QB.forEach(function (q) { qById[q.id] = q; });

  function renderQuiz() {
    setNav("quiz"); navSlot.innerHTML = "";
    if (!quiz || !quiz.ids.every(function (id) { return qById[id]; })) quiz = null;
    if (!quiz) {
      view.innerHTML = "";
      view.appendChild(h('<section class="hero"><span class="eyebrow">Exam simulation</span><h1>' + QUIZ_SIZE + " questions, one grade.</h1>" +
        "<p>Questions are drawn at random from all " + QB.length + " multiple-choice questions in the handout, so every attempt is different. Answer, move freely between questions, and submit when you are ready.</p>" +
        '<div class="tbl"><table><thead><tr><th>Correct answers</th><th>Grade</th></tr></thead><tbody><tr><th scope="row">31 of 31</th><td><b>30 e lode</b></td></tr><tr><th scope="row">18 – 30</th><td>That number, out of 30</td></tr><tr><th scope="row">0 – 17</th><td>Insufficient</td></tr></tbody></table></div>' +
        '<div><button class="btn" id="go">Start the quiz</button></div></section>'));
      document.getElementById("go").onclick = function () { newQuiz(); renderQuiz(); };
      return;
    }
    if (quiz.done) { location.hash = "results"; return; }
    var q = qById[quiz.ids[quiz.cur]], answered = Object.keys(quiz.ans).length, chosen = quiz.ans[q.id];
    view.innerHTML = "";
    view.appendChild(h('<div class="quiztop"><div class="qmeta"><b>Question ' + (quiz.cur + 1) + " of " + QUIZ_SIZE + '</b><span class="muted" style="font-size:14px">' + answered + " answered</span></div>" +
      '<div class="prog"><i style="width:' + (answered / QUIZ_SIZE * 100) + '%"></i></div></div>' +
      '<div class="qcard"><div class="stem">' + q.stem + '</div><div class="opts" role="radiogroup">' + q.opts.map(function (o, i) {
        return '<button class="opt' + (chosen === i ? " sel" : "") + '" role="radio" aria-checked="' + (chosen === i) + '" data-i="' + i + '"><span class="L">' + L[i] + "</span><span>" + o + "</span></button>";
      }).join("") + '</div><div class="qnav"><button class="btn ghost" id="prev"' + (quiz.cur === 0 ? " disabled" : "") + ">Previous</button>" +
      (quiz.cur < QUIZ_SIZE - 1 ? '<button class="btn" id="next">Next</button>' : '<button class="btn" id="finish">Submit answers</button>') + "</div></div>" +
      '<div id="confirm-slot"></div>' +
      '<div class="dots" aria-label="Jump to question">' + quiz.ids.map(function (id, i) { return '<button class="' + (quiz.ans[id] !== undefined ? "done " : "") + (i === quiz.cur ? "cur" : "") + '" data-j="' + i + '">' + (i + 1) + "</button>"; }).join("") + "</div>" +
      '<div style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap"><button class="btn ghost" id="finish2">Submit now</button></div>'));
    view.querySelectorAll(".opts .opt").forEach(function (b) {
      b.onclick = function () { quiz.ans[q.id] = +b.dataset.i; saveQuiz(); renderQuiz(); };
    });
    var go = function (i) { quiz.cur = i; saveQuiz(); renderQuiz(); SC.scrollTo(0, 0); };
    var p = document.getElementById("prev"); if (p) p.onclick = function () { go(quiz.cur - 1); };
    var nx = document.getElementById("next"); if (nx) nx.onclick = function () { go(quiz.cur + 1); };
    view.querySelectorAll("[data-j]").forEach(function (b) { b.onclick = function () { go(+b.dataset.j); }; });
    function finish() {
      var missing = QUIZ_SIZE - Object.keys(quiz.ans).length;
      if (missing > 0) {
        var slot = document.getElementById("confirm-slot");
        slot.innerHTML = '<div class="confirm"><span><b>' + missing + " unanswered.</b> They will count as wrong.</span><span style=\"display:flex;gap:8px\"><button class=\"btn ghost\" id=\"keep\">Keep answering</button><button class=\"btn\" id=\"sure\">Submit anyway</button></span></div>";
        document.getElementById("keep").onclick = function () { slot.innerHTML = ""; };
        document.getElementById("sure").onclick = submit;
        slot.scrollIntoView({ block: "center" });
      } else submit();
    }
    function submit() {
      quiz.done = true; quiz.finished = Date.now();
      var correct = quiz.ids.filter(function (id) { return quiz.ans[id] === qById[id].a; }).length;
      var hist = sget("localStorage", "itd-history", []); hist.push({ t: quiz.finished, correct: correct, grade: gradeOf(correct).label }); sset("localStorage", "itd-history", hist.slice(-20));
      saveQuiz(); location.hash = "results";
    }
    var f = document.getElementById("finish"); if (f) f.onclick = finish;
    document.getElementById("finish2").onclick = finish;
  }

  var resFilter = "wrong";
  function renderResults() {
    setNav("quiz"); navSlot.innerHTML = "";
    if (!quiz || !quiz.done) { location.hash = "quiz"; return; }
    var items = quiz.ids.map(function (id) { var q = qById[id]; return { q: q, a: quiz.ans[id], ok: quiz.ans[id] === q.a }; });
    var correct = items.filter(function (i) { return i.ok; }).length, g = gradeOf(correct);
    var mins = Math.max(1, Math.round((quiz.finished - quiz.started) / 60000));
    var weak = {}; items.forEach(function (i) { if (!i.ok) weak[i.q.ch] = (weak[i.q.ch] || 0) + 1; });
    var weakList = Object.keys(weak).sort(function (a, b) { return weak[b] - weak[a] || a - b; });
    var list = items.filter(function (i) { return resFilter === "all" || !i.ok; });
    view.innerHTML = "";
    view.appendChild(h('<div class="stack"><div class="grade ' + g.cls + '"><div class="g">' + g.label + "</div><div><b>" + correct + " of " + QUIZ_SIZE + " correct</b><p>" + g.note + " Time: about " + mins + " min.</p>" +
      '<div class="scale" aria-hidden="true"><i style="width:' + (correct / QUIZ_SIZE * 100) + '%;background:' + (correct >= PASS ? "var(--good)" : "var(--bad)") + '"></i></div>' +
      '<p style="font-size:13px">Pass mark: ' + PASS + " of " + QUIZ_SIZE + "</p></div></div>" +
      (weakList.length ? '<div><p class="vtitle">Chapters to revise (wrong answers)</p><div class="weak">' + weakList.map(function (c) { return '<a href="#ch-' + c + '">Ch ' + c + " · " + chByNum[c].title + " (" + weak[c] + ")</a>"; }).join("") + "</div></div>" : "") +
      '<div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn" id="again">New quiz</button></div>' +
      '<div class="h-row" style="margin:12px 0 0"><h2>Review</h2><div class="filter"><button data-f="wrong" class="' + (resFilter === "wrong" ? "active" : "") + '">Wrong (' + (QUIZ_SIZE - correct) + ')</button><button data-f="all" class="' + (resFilter === "all" ? "active" : "") + '">All (' + QUIZ_SIZE + ")</button></div></div>" +
      (list.length ? list.map(function (it) {
        var q = it.q, c = chByNum[q.ch];
        return '<article class="rev ' + (it.ok ? "" : "ko") + '"><div class="stem" style="font-weight:600">' + q.stem + '</div><div class="opts">' + q.opts.map(function (o, i) {
          var cls = i === q.a ? "right" : (i === it.a ? "wrong" : "");
          return '<button class="opt ' + cls + '" disabled><span class="L">' + L[i] + "</span><span>" + o + (i === it.a && !it.ok ? ' <span class="muted">(your answer)</span>' : "") + "</span></button>";
        }).join("") + "</div>" + (it.a === undefined ? '<p class="muted" style="margin:0">Not answered.</p>' : "") +
          '<div class="src">Ch ' + q.ch + " · " + c.title + " · " + q.sec.map(secLabel).join(", ") +
          ' <a href="#ch-' + q.ch + '" data-sec="' + q.sec[0] + '">Open in chapter</a></div>' +
          '<details class="more" data-why="' + q.ch + "|" + esc(q.sec[0]) + '"><summary>Why: the handout section</summary><div class="inner"><div class="why prose">Loading…</div></div></details></article>';
      }).join("") : '<p class="muted">No wrong answers to review.</p>') + "</div>"));
    document.getElementById("again").onclick = function () { newQuiz(); location.hash = "quiz"; };
    view.querySelectorAll("[data-f]").forEach(function (b) { b.onclick = function () { resFilter = b.dataset.f; renderResults(); }; });
    view.querySelectorAll("[data-sec]").forEach(function (a) { a.addEventListener("click", function () { pendingScroll = a.dataset.sec; }); });
    view.querySelectorAll("[data-why]").forEach(function (d) {
      d.addEventListener("toggle", function () {
        if (!d.open || d.dataset.ld) return; d.dataset.ld = 1;
        var p = d.dataset.why.split("|"), box = d.querySelector(".why");
        loadChapter(+p[0]).then(function (data) { box.innerHTML = sectionHtml(data, p[1]) || "Section not found."; wireCalc(box); })
          .catch(function () { box.textContent = "Could not load the chapter."; });
      });
    });
    SC.scrollTo(0, 0);
  }

  /* ---------- router ---------- */
  function route() {
    var r = (location.hash || "").replace(/^#/, "");
    var m = /^ch-(\d+)$/.exec(r);
    if (m) renderChapter(+m[1]);
    else if (r === "quiz") renderQuiz();
    else if (r === "results") renderResults();
    else renderHome();
    if (!m) SC.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  route();
})();
