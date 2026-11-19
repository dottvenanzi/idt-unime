/* Revision layer for Chapter 9 — Urinary tract infections. Source: chapters/09-uti.md */
window.REVISION = window.REVISION || {};
window.REVISION[9] = {
  sections: {
    "1": {
      summary: [
        "<b><i>E. coli</i> (UPEC)</b> is the leading cause in every setting.",
        "<i>S. saprophyticus</i>: second cause of cystitis in <b>young sexually active women</b>.",
        "Complicated / catheter UTI: <i>Klebsiella</i>, <i>Proteus</i>, <i>Enterococcus</i>, <i>Pseudomonas</i>, <i>Candida</i> (candiduria usually colonization).",
        "<b><i>S. aureus</i> in urine without a catheter</b> → think of bacteremia.",
        "<b>Type 1 fimbriae (FimH)</b> → cystitis; <b>P fimbriae</b> → pyelonephritis. <b>Urease</b> (<i>Proteus</i>) → alkaline urine → <b>struvite stones</b>.",
        "High <i>E. coli</i> resistance to aminopenicillins and TMP-SMX; ESBL common, KPC endemic in Italy. Fosfomycin, nitrofurantoin, mecillinam breakpoints apply <b>only to uncomplicated UTI</b>."
      ],
      visuals: [
        { type: "cards", title: "Uropathogens by setting", items: [
          { h: "<i>E. coli</i>", p: "Cystitis and pyelonephritis", tag: "Leading cause", tone: "warn" },
          { h: "<i>S. saprophyticus</i>", p: "Young sexually active women", tag: "Nitrite-negative" },
          { h: "<i>Klebsiella</i>, <i>Proteus</i>, <i>Enterobacter</i>", p: "Complicated UTI", tag: "ESBL, carbapenemases" },
          { h: "<i>Enterococcus</i>", p: "Catheters, instrumentation", tag: "Nitrite-negative" },
          { h: "<i>Pseudomonas</i>", p: "Catheters, obstruction, prior antibiotics", tag: "Healthcare" },
          { h: "<i>S. aureus</i>", p: "Uncommon ascending pathogen", tag: "Think bacteremia", tone: "warn" },
          { h: "<i>Candida</i>", p: "Catheters, diabetes, antibiotics", tag: "Usually colonization" }
        ]},
        { type: "table", title: "Virulence factors", head: ["Factor", "Role"], rows: [
          ["Type 1 fimbriae (FimH)", "Bind bladder uroplakins → <b>cystitis</b>"],
          ["P fimbriae (PapG)", "Bind kidney glycolipids → <b>pyelonephritis</b>, urosepsis"],
          ["Urease (<i>Proteus</i>, <i>Klebsiella</i>)", "Alkaline urine → <b>struvite stones</b>"],
          ["Swarming (<i>Proteus</i>)", "Ascent along tract and catheters"],
          ["Biofilm", "Catheter colonization, antibiotic tolerance"]
        ]}
      ]
    },
    "2": {
      summary: [
        "<b>Cystitis</b>: bladder, no systemic signs. <b>Pyelonephritis</b>: fever, flank pain, CVA tenderness.",
        "Two frameworks: <b>EAU by host factors</b> (men, pregnancy, obstruction, catheter…); <b>IDSA 2025 by extent</b> (fever, flank pain, prostatitis = complicated).",
        "<b>Recurrent</b>: ≥2 in 6 months or ≥3 in 12 months.",
        "<b>ASB</b>: significant bacteriuria without symptoms. <b>CAUTI</b>: catheter in place or removed ≤48 h.",
        "Half of women have a UTI in their lifetime. Almost <b>all long-term catheters are bacteriuric</b>."
      ],
      visuals: [
        { type: "compare", title: "What makes a UTI \"complicated\"?", cols: [
          { h: "EAU: host factors", tone: "accent", items: ["Men", "Pregnancy", "Obstruction, stones", "Catheter, neurogenic bladder", "Immunosuppression, transplant", "Poorly controlled diabetes"] },
          { h: "IDSA 2025: beyond the bladder", tone: "warn", items: ["Fever / sepsis", "Flank pain, CVA tenderness", "Pelvic / perineal pain (prostatitis)", "Febrile CAUTI"] }
        ]},
        { type: "bars", title: "ASB prevalence (upper estimate)", unit: "%", max: 100, rows: [
          { label: "Premenopausal women", v: 6, t: "1–6%" },
          { label: "Pregnant women", v: 10, t: "2–10%" },
          { label: "Long-term catheter", v: 100, t: "≈ all", tone: "warn" }
        ]},
        { type: "table", title: "Risk factors", head: ["Setting", "Risk factors"], rows: [
          ["Young women", "Intercourse, spermicides, new partner, previous UTI"],
          ["Postmenopausal women", "Estrogen deficiency, incontinence, cystocele, residual urine"],
          ["Men", "Prostatic hypertrophy, instrumentation"],
          ["All", "Obstruction, catheter, neurogenic bladder, diabetes, pregnancy, immunosuppression"]
        ]}
      ]
    },
    "3": {
      summary: [
        "<b>Ascending route &gt;95%</b>: gut flora → periurethral area → bladder → kidney. Short female urethra.",
        "Hematogenous route is rare (<i>S. aureus</i>, <i>Candida</i>).",
        "UPEC forms <b>intracellular bacterial communities</b> and quiescent reservoirs → same-strain recurrences.",
        "Defenses: urine flow and emptying, uromodulin, vesicoureteral valve, vaginal lactobacilli.",
        "<b>Pregnancy</b>: ureteral dilation → ASB progresses to pyelonephritis more often.",
        "Catheter: bypasses defenses, residual urine, <b>biofilm</b>; entry extraluminal or intraluminal."
      ],
      visuals: [
        { type: "flow", title: "From colonization to pyelonephritis", steps: [
          { h: "Periurethral colonization", p: "Gut flora at the introitus" },
          { h: "Adhesion in the bladder", p: "Type 1 fimbriae bind uroplakins" },
          { h: "Invasion of umbrella cells", p: "Intracellular communities, shielded from antibiotics" },
          { h: "Neutrophil recruitment", p: "Pyuria, exfoliation" },
          { h: "Ascent to the kidney", p: "P fimbriae → fever, flank pain", tone: "warn" }
        ]},
        { type: "compare", title: "Defenses and what breaks them", cols: [
          { h: "Defenses", tone: "good", items: ["Urine flow, complete emptying", "Urine pH, osmolality", "Uromodulin", "Vesicoureteral valve", "Vaginal lactobacilli"] },
          { h: "Breakers", tone: "warn", items: ["Obstruction, stones, prostate", "Neurogenic bladder", "Pregnancy", "Estrogen deficiency", "Catheter"] }
        ]}
      ]
    },
    "4": {
      summary: [
        "<b>Cystitis</b>: dysuria, frequency, urgency, suprapubic pain, <b>no fever</b>.",
        "<b>Pyelonephritis</b>: fever, chills, flank pain, CVA tenderness, nausea; cystitis symptoms may be absent.",
        "<b>Acute prostatitis</b>: fever, perineal pain, tender prostate. <b>No prostatic massage</b>.",
        "CAUTI is often non-specific.",
        "Older adults: <b>bacteriuria + confusion ≠ UTI</b>. Look for other causes.",
        "Complications: <b>obstructive pyelonephritis (drain!)</b>, abscess, emphysematous pyelonephritis (diabetes, CT)."
      ],
      visuals: [
        { type: "compare", title: "Bladder or kidney?", cols: [
          { h: "Cystitis", tone: "accent", items: ["Dysuria", "Frequency, urgency", "Suprapubic pain", "Hematuria possible", "<b>No fever</b>"] },
          { h: "Pyelonephritis", tone: "warn", items: ["<b>Fever</b>, chills", "Flank pain", "CVA tenderness", "Nausea, vomiting", "± cystitis symptoms"] },
          { h: "Prostatitis", items: ["Fever", "Perineal / pelvic pain", "Obstructive voiding", "Tender prostate"] }
        ]},
        { type: "cards", title: "Complications", items: [
          { h: "Obstructive pyelonephritis", p: "Stone, stricture, tumor", tag: "Emergency drainage", tone: "warn" },
          { h: "Renal / perinephric abscess", p: "Fever persists on therapy", tag: "CT" },
          { h: "Emphysematous pyelonephritis", p: "Gas-forming, poorly controlled diabetes", tag: "CT", tone: "warn" },
          { h: "Papillary necrosis", p: "Diabetes, analgesics, sickle cell", tag: "" },
          { h: "Xanthogranulomatous", p: "Chronic obstruction, <i>Proteus</i>", tag: "" }
        ]}
      ]
    },
    "5": {
      summary: [
        "Typical cystitis in a woman without discharge: <b>clinical diagnosis</b>.",
        "Leukocyte esterase = pyuria. <b>Nitrite</b>: specific, not sensitive; <b>negative with <i>Enterococcus</i>, <i>S. saprophyticus</i></b>.",
        "<b>Sterile pyuria</b>: recent antibiotics, chlamydia/gonorrhea, <b>urinary TB</b>, stones.",
        "Culture in: pyelonephritis, complicated UTI, men, pregnancy, recurrence, failure.",
        "Catheter &gt;2 weeks → <b>replace it</b> and sample the new one, never the bag.",
        "Thresholds: <b>lower with symptoms</b>, higher (and repeated) without.",
        "Imaging: ultrasound for obstruction; <b>CT if fever &gt;72 h</b> or deterioration."
      ],
      visuals: [
        { type: "ladder", title: "Culture thresholds (cfu/mL)", steps: [
          { h: "Symptomatic cystitis (women), CAUTI", p: "≥10³", tone: "warn" },
          { h: "Pyelonephritis", p: "≥10⁴" },
          { h: "ASB", p: "≥10⁵ (women: same organism in 2 specimens; men: 1)" }
        ], caption: "Symptoms raise pre-test probability, so a lower count is enough." },
        { type: "compare", title: "Dipstick", cols: [
          { h: "Leukocyte esterase", items: ["Detects pyuria", "Also present in ASB", "Pyuria alone is not a reason to treat"] },
          { h: "Nitrite", tone: "accent", items: ["Enterobacterales reduce nitrate", "Specific, not sensitive", "Negative: <i>Enterococcus</i>, <i>S. saprophyticus</i>, <i>Pseudomonas</i>"] }
        ]},
        { type: "chips", title: "Sterile pyuria", groups: [
          { h: "", items: ["Recent antibiotics", "<i>Chlamydia</i> / gonococcal urethritis", "Urinary tuberculosis", "Stones", "Interstitial nephritis"] }
        ]}
      ]
    },
    "6": {
      summary: [
        "<b>Cystitis first-line: nitrofurantoin, fosfomycin trometamol, pivmecillinam</b>. Short courses.",
        "<b>No fluoroquinolones</b> for cystitis (collateral damage, EMA restrictions). TMP-SMX only if local resistance &lt;20%.",
        "<b>Nitrofurantoin and oral fosfomycin never for pyelonephritis</b> (no tissue/blood levels).",
        "cUTI: 4 steps: <b>severity → resistance risk → patient factors → antibiogram in sepsis</b>. ESBL + severe → carbapenem.",
        "<b>Drain obstruction</b>. Oral step-down when improving, <b>even with bacteremia</b>.",
        "Duration: <b>5–7 d FQ or 7 d other</b>; <b>10–14 d if prostatitis</b>. CAUTI: replace catheter &gt;2 weeks, ~7 days.",
        "<b>Treat ASB only in pregnancy and before mucosa-breaching urological procedures</b>."
      ],
      visuals: [
        { type: "table", title: "Uncomplicated cystitis", head: ["Category", "Agents"], rows: [
          ["<b>First-line</b>", "Nitrofurantoin, fosfomycin trometamol, pivmecillinam"],
          ["Alternatives", "TMP-SMX (if local resistance &lt;20%), oral cephalosporins"],
          ["Not recommended", "Fluoroquinolones, aminopenicillins alone"]
        ]},
        { type: "flow", title: "Empiric therapy in complicated UTI", steps: [
          { h: "1 · Severity", p: "Sepsis / septic shock or not" },
          { h: "2 · Resistance risk", p: "Previous isolates, recent antibiotics, healthcare, travel" },
          { h: "3 · Patient factors", p: "Allergies, renal function, interactions" },
          { h: "4 · Antibiogram", p: "Especially in sepsis", tone: "accent" }
        ]},
        { type: "ranges", title: "Treatment duration", max: 14, ticks: [0, 3, 5, 7, 10, 14], rows: [
          { label: "Cystitis", from: 1, to: 5, tone: "good", txt: "Single dose to a few days" },
          { label: "Afebrile man", from: 7, to: 7, txt: "7 d" },
          { label: "cUTI, fluoroquinolone", from: 5, to: 7, txt: "5–7 d, even if bacteremic" },
          { label: "cUTI, other agent", from: 7, to: 7, txt: "7 d" },
          { label: "Suspected prostatitis", from: 10, to: 14, tone: "warn", txt: "10–14 d" }
        ]},
        { type: "compare", title: "Asymptomatic bacteriuria", cols: [
          { h: "Screen and treat", tone: "good", items: ["Pregnancy", "Before mucosa-breaching urological procedures"] },
          { h: "Do NOT screen or treat", tone: "warn", items: ["Healthy non-pregnant women", "Older adults, long-term care", "Diabetes", "Catheters, spinal cord injury", "Kidney transplant &gt;1 month", "Non-urological surgery", "Delirium / falls without urinary signs"] }
        ], caption: "Treating ASB causes adverse effects, <i>C. difficile</i> and resistance, with no benefit." }
      ]
    },
    "7": {
      summary: [
        "Cystitis improves in <b>1–3 days</b>; pyelonephritis defervesces in <b>48–72 h</b>.",
        "<b>No test of cure</b> except in pregnancy.",
        "Persistence or relapse within 4 weeks → culture, <b>switch class</b>.",
        "Fever &gt;72 h → culture review + <b>CT</b> (obstruction, abscess).",
        "Recurrent UTI in young women: no extensive work-up. Investigate men, recurrent pyelonephritis, hematuria, stones, urease producers."
      ],
      visuals: [
        { type: "timeline", title: "Expected course", points: [
          { at: "1–3 days", h: "Cystitis improves", p: "No control culture" },
          { at: "48–72 h", h: "Pyelonephritis defervesces", p: "", tone: "good" },
          { at: "&gt; 72 h fever", h: "Image the kidneys", p: "Obstruction, abscess, emphysematous", tone: "warn" },
          { at: "≤ 4 weeks", h: "Recurrence", p: "Culture, different class" }
        ]}
      ]
    },
    "8": {
      summary: [
        "No licensed vaccine. <b>Non-antimicrobial measures first</b>.",
        "Recurrent UTI: fluids, no spermicides, <b>vaginal estrogen</b> (postmenopausal), immunoactive prophylaxis, <b>methenamine</b>, cranberry; antibiotic prophylaxis last.",
        "CAUTI: <b>avoid unnecessary catheters, remove early</b>; aseptic insertion, closed system, bag below bladder.",
        "Not recommended: routine antibiotic prophylaxis, scheduled catheter changes, bladder irrigation, ASB screening in catheterized patients."
      ],
      visuals: [
        { type: "ladder", title: "Recurrent UTI in women: stepwise", steps: [
          { h: "Counseling", p: "Fluids, avoid spermicides, post-coital voiding" },
          { h: "Vaginal estrogen", p: "Postmenopausal women" },
          { h: "Immunoactive prophylaxis", p: "Bacterial lysate, sublingual inactivated bacteria" },
          { h: "Methenamine hippurate", p: "Formaldehyde in acidic urine, not an antibiotic" },
          { h: "Cranberry (± D-mannose)", p: "Anti-adhesion; D-mannose evidence weak" },
          { h: "Antimicrobial prophylaxis", p: "Continuous or post-coital", tone: "warn" }
        ], caption: "Self-start therapy is an alternative for adherent women with documented recurrences." },
        { type: "compare", title: "Preventing CAUTI", cols: [
          { h: "Do", tone: "good", items: ["Catheter only for real indications", "Remove as soon as possible", "Intermittent / external catheters", "Aseptic insertion, closed drainage", "Bag below bladder", "Nurse-driven removal"] },
          { h: "Don't", tone: "warn", items: ["Catheter for incontinence or convenience", "Routine antibiotic prophylaxis", "Scheduled catheter changes", "Antimicrobial bladder irrigation", "Screening for ASB"] }
        ]}
      ]
    }
  }
};
