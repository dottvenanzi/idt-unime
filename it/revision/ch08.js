/* Livello di ripasso per il Capitolo 8 — Gastroenteriti e infezione da C. difficile. Fonte: chapters-it/08-gastroenteritis-cdi.md */
window.REVISION = window.REVISION || {};
window.REVISION[8] = {
  sections: {
    "1": {
      summary: [
        "La maggior parte delle gastroenteriti acute è <b>virale</b>: <b>norovirus</b> a tutte le età, <b>rotavirus</b> nei lattanti non vaccinati.",
        "Batteri: <i>Campylobacter</i>, <i>Salmonella</i> non tifoidea, <i>Shigella</i>, <b>STEC</b>, ETEC (diarrea del viaggiatore), <i>Vibrio</i>.",
        "Tossine preformate: <i>S. aureus</i>, <i>B. cereus</i> (vomito entro poche ore), <i>C. perfringens</i>.",
        "Parassiti: <i>Giardia</i>, <i>Cryptosporidium</i>, <i>Cyclospora</i>, <i>E. histolytica</i>: pensarci quando la diarrea dura &gt;1–2 settimane.",
        "<b><i>C. difficile</i></b>: bacillo gram-positivo anaerobio sporigeno; la malattia è causata dalle <b>tossine A e B</b>; le spore resistono all’alcol."
      ],
      visuals: [
        { type: "cards", title: "Chi causa la diarrea", items: [
          { h: "Virus", p: "Norovirus, rotavirus, adenovirus 40/41, astrovirus", tag: "I più frequenti" },
          { h: "Batteri invasivi", p: "<i>Campylobacter</i>, <i>Salmonella</i>, <i>Shigella</i>", tag: "Febbre, sangue" },
          { h: "STEC (ad es. O157:H7)", p: "Shiga-tossina", tag: "Rischio di SEU", tone: "warn" },
          { h: "Da tossine", p: "<i>S. aureus</i>, <i>B. cereus</i>, <i>C. perfringens</i>, ETEC, <i>V. cholerae</i>", tag: "Acquosa" },
          { h: "Parassiti", p: "<i>Giardia</i>, <i>Cryptosporidium</i>, <i>Cyclospora</i>, <i>E. histolytica</i>", tag: "Persistente" },
          { h: "<i>C. difficile</i>", p: "Spore + tossine A/B", tag: "Associata ad antibiotici", tone: "warn" }
        ]}
      ]
    },
    "2": {
      summary: [
        "L’anamnesi espositiva orienta verso il patogeno: cibo, viaggi, animali, asilo nido, antibiotici, ospedale.",
        "CDI per esordio: <b>a esordio in struttura sanitaria</b> (&gt;3 giorni dopo il ricovero), <b>a esordio comunitario associata all’assistenza</b> (entro 12 settimane dalla dimissione), <b>comunitaria</b>.",
        "<b>Recidiva</b> = nuovo episodio entro <b>8 settimane</b> dal precedente; colpisce circa <b>1 paziente su 4</b>.",
        "Principali fattori di rischio per CDI: <b>antibiotici</b> (clindamicina, fluorochinoloni, cefalosporine, carbapenemi), <b>età &gt;65 anni</b>, ospedalizzazione, IPP, immunosoppressione, MICI."
      ],
      visuals: [
        { type: "table", title: "Indizi dall’esposizione", head: ["Esposizione", "Pensare a"], rows: [
          ["Pollame, latte non pastorizzato", "<i>Campylobacter</i>, <i>Salmonella</i>"],
          ["Carne macinata poco cotta, verdure crude", "STEC"],
          ["Uova, rettili, pollame domestico", "<i>Salmonella</i>"],
          ["Molluschi crudi", "Norovirus, <i>Vibrio</i>"],
          ["Riso fritto, cibo riscaldato", "<i>B. cereus</i>"],
          ["Focolaio su nave da crociera o in RSA", "Norovirus"],
          ["Asilo nido", "<i>Shigella</i>, <i>Giardia</i>, rotavirus, <i>Cryptosporidium</i>"],
          ["Viaggio in Paese a basso reddito", "ETEC, <i>Campylobacter</i>, <i>Shigella</i>, parassiti"],
          ["Antibiotici recenti / ospedale", "<i>C. difficile</i>"]
        ]},
        { type: "timeline", title: "Classificazione della CDI per esordio", points: [
          { at: "&gt; 3 giorni dopo il ricovero", h: "Esordio in struttura sanitaria", p: "", tone: "warn" },
          { at: "≤ 12 settimane dalla dimissione", h: "Esordio comunitario, associata all’assistenza", p: "" },
          { at: "Nessun contatto sanitario recente", h: "Comunitaria", p: "" },
          { at: "≤ 8 settimane da un episodio", h: "Recidiva", p: "Circa 1 su 4", tone: "warn" }
        ]},
        { type: "chips", title: "Fattori di rischio per CDI", groups: [
          { h: "", items: ["Antibiotici (clindamicina, FQ, cefalosporine, carbapenemi)", "Età &gt; 65 anni", "Ospedale / lungodegenza", "IPP", "Immunosoppressione", "MICI", "Chemioterapia"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "<b>Secretoria</b> (tossine, intestino tenue): feci acquose abbondanti, senza febbre. <b>Infiammatoria</b> (invasione del colon): febbre, sangue, scariche piccole. <b>Penetrante</b> (<i>S.</i> Typhi, <i>Yersinia</i>): malattia sistemica.",
        "<b>SEU</b> dopo STEC: <b>anemia emolitica + piastrinopenia + danno renale acuto</b>, 5–10 giorni dopo l’inizio della diarrea, soprattutto nei bambini.",
        "La sindrome di Guillain-Barré può seguire <i>Campylobacter</i>; l’artrite reattiva segue le enteriti invasive.",
        "CDI: gli antibiotici alterano il microbiota → le spore germinano → le <b>tossine A/B</b> danneggiano il colon → colite, pseudomembrane."
      ],
      visuals: [
        { type: "compare", title: "Tre meccanismi", cols: [
          { h: "Secretoria", items: ["Intestino tenue, tossine", "Acquosa, grande volume", "Né febbre né sangue", "Colera, ETEC, norovirus"] },
          { h: "Infiammatoria", tone: "warn", items: ["Colon, invasione / citotossina", "Scariche piccole, frequenti, ematiche", "Febbre, tenesmo", "<i>Shigella</i>, <i>Campylobacter</i>, STEC, <i>C. difficile</i>"] },
          { h: "Penetrante", tone: "accent", items: ["Attraversa la mucosa verso linfatici / sangue", "Febbre, malattia sistemica", "La diarrea può mancare", "<i>S.</i> Typhi, <i>Yersinia</i>"] }
        ]},
        { type: "flow", title: "Come <i>C. difficile</i> causa malattia", steps: [
          { h: "Gli antibiotici alterano il microbiota", p: "Perdita della resistenza alla colonizzazione, acidi biliari alterati" },
          { h: "Spore ingerite o già presenti", p: "Germinano nel colon" },
          { h: "Tossine A e B", p: "Danno epiteliale, infiammazione" },
          { h: "Colite", p: "Diarrea, pseudomembrane, megacolon tossico", tone: "warn" }
        ]},
        { type: "note", h: "Triade della SEU", p: "Anemia emolitica microangiopatica, piastrinopenia e danno renale acuto, tipicamente 5–10 giorni dopo l’inizio della diarrea da STEC." }
      ]
    },
    "4": {
      summary: [
        "Il <b>periodo di incubazione</b> suggerisce la causa: vomito entro 1–6 h = <b>tossina preformata</b>.",
        "Diarrea ematica con febbre scarsa o assente: pensare a <b>STEC</b>.",
        "Valutare la <b>disidratazione</b>: sete, mucose secche, riduzione della diuresi, tachicardia, ipotensione.",
        "CDI: diarrea acquosa, dolore addominale, febbre, leucocitosi. <b>L’ileo può mascherare la diarrea</b> nei casi gravi."
      ],
      visuals: [
        { type: "ranges", title: "Periodi di incubazione (ore)", max: 240, unit: " h", ticks: [0, 48, 96, 168, 240], rows: [
          { label: "<i>S. aureus</i>, <i>B. cereus</i> (emetico)", from: 1, to: 6, tone: "warn", txt: "1–6 h" },
          { label: "<i>C. perfringens</i>", from: 8, to: 16, txt: "8–16 h" },
          { label: "Norovirus", from: 12, to: 48, txt: "12–48 h" },
          { label: "ETEC", from: 24, to: 72, txt: "1–3 gg" },
          { label: "<i>Salmonella</i>, <i>Shigella</i>", from: 24, to: 72, txt: "1–3 gg" },
          { label: "<i>Campylobacter</i>", from: 48, to: 120, txt: "2–5 gg" },
          { label: "STEC", from: 72, to: 96, tone: "warn", txt: "3–4 gg (1–10)" },
          { label: "<i>Giardia</i>, <i>Cryptosporidium</i>, <i>Cyclospora</i>", from: 168, to: 240, txt: "1–2 settimane" }
        ]},
        { type: "compare", title: "Indizi al letto del paziente", cols: [
          { h: "Tratto GI superiore / tossina", items: ["Prevale il vomito", "Esordio entro poche ore", "Più persone dopo lo stesso pasto"] },
          { h: "Colite", tone: "warn", items: ["Febbre", "Sangue o muco", "Tenesmo", "Dolore addominale basso"] },
          { h: "CDI grave", tone: "warn", items: ["Leucocitosi", "Creatinina in aumento", "Ileo (la diarrea può cessare)", "Megacolon, shock"] }
        ]}
      ]
    },
    "5": {
      summary: [
        "La maggior parte delle diarree acquose acute <b>non richiede esami delle feci</b>.",
        "Testare se: <b>feci ematiche, febbre, malattia grave, immunocompromissione, focolaio, diarrea &gt;7 giorni</b>, alimentaristi.",
        "Test per CDI solo se <b>≥3 scariche non formate in 24 h</b> e <b>nessun lassativo nelle ultime 48 h</b>.",
        "In due fasi: <b>GDH o NAAT</b> (sensibile) → <b>EIA per le tossine</b> (specifico). Nessun <b>test di guarigione</b>; non testare i lattanti &lt;1 anno.",
        "CDI grave: <b>GB ≥15 × 10⁹/l</b> o <b>creatinina &gt;1,5 mg/dl</b>. Fulminante: ipotensione, shock, ileo, megacolon."
      ],
      visuals: [
        { type: "algo", title: "Test per <i>C. difficile</i>", nodes: [
          { q: "≥3 scariche non formate in 24 h, nessun lassativo in 48 h?", opts: [
            { when: "No", to: "Non testare (la colonizzazione è frequente)", tone: "good" },
            { when: "Sì", to: "GDH o NAAT", next: 1 }
          ]},
          { q: "GDH / NAAT positivo?", opts: [
            { when: "Negativo", to: "CDI improbabile", tone: "good" },
            { when: "Positivo", to: "EIA per le tossine", next: 2 }
          ]},
          { q: "Tossine positive?", opts: [
            { when: "Sì", to: "CDI: trattare", tone: "warn" },
            { when: "No", to: "Possibile colonizzazione: giudizio clinico" }
          ]}
        ]},
        { type: "chips", title: "Gli esami delle feci nella gastroenterite sono indicati se…", groups: [
          { h: "", items: ["Diarrea ematica", "Febbre", "Disidratazione grave / sepsi", "Immunocompromissione", "Diarrea &gt; 7 giorni", "Focolaio", "Alimentarista, asilo nido"] }
        ]},
        { type: "ladder", title: "Gravità della CDI", steps: [
          { h: "Non grave", p: "GB &lt;15 × 10⁹/l e creatinina &lt;1,5 mg/dl", tone: "good" },
          { h: "Grave", p: "GB ≥15 × 10⁹/l o creatinina &gt;1,5 mg/dl" },
          { h: "Fulminante", p: "Ipotensione o shock, ileo, megacolon", tone: "warn" }
        ]}
      ]
    },
    "6": {
      summary: [
        "Pilastro: la <b>reidratazione</b>, idealmente con <b>soluzione reidratante orale</b>; zinco nei bambini nei contesti a basso reddito.",
        "Loperamide: solo negli adulti <b>senza febbre né sangue</b>.",
        "Antibiotici non di routine. <b>Mai nelle STEC</b> (più SEU). <i>Salmonella</i> non tifoidea: solo ad alto rischio. Trattare <i>Shigella</i>, febbre enterica, <i>Campylobacter</i> grave (azitromicina).",
        "CDI: <b>sospendere l’antibiotico scatenante</b>. Primo episodio: <b>fidaxomicina</b> (alternativa vancomicina orale). Metronidazolo solo per forme non gravi se non c’è altro.",
        "Fulminante: <b>vancomicina orale + metronidazolo e.v.</b> ± vancomicina per via rettale, consulenza chirurgica. <b>La vancomicina e.v. non raggiunge il colon</b>.",
        "Recidiva: fidaxomicina o vancomicina a scalare/pulsata. <b>≥2 recidive: trapianto di microbiota fecale</b>."
      ],
      visuals: [
        { type: "table", title: "Antibiotici nella gastroenterite", head: ["Patogeno", "Antibiotico?"], rows: [
          ["STEC", "<b>No</b>: aumenta il rischio di SEU"],
          ["<i>Salmonella</i> non tifoidea", "Solo se ad alto rischio (lattanti, &gt;50 anni con vasculopatia, immunocompromessi)"],
          ["<i>Shigella</i>", "Sì (secondo antibiogramma)"],
          ["<i>Campylobacter</i>", "Se grave o ad alto rischio: azitromicina"],
          ["<i>V. cholerae</i>", "Prima i liquidi; l’antibiotico accorcia la malattia"],
          ["Febbre enterica (<i>S.</i> Typhi / Paratyphi)", "Sempre"],
          ["<i>Giardia</i>", "Metronidazolo o tinidazolo"],
          ["<i>E. histolytica</i>", "Metronidazolo, poi paromomicina (luminale)"],
          ["<i>Cryptosporidium</i>", "Nitazoxanide; ART nell’HIV"]
        ]},
        { type: "ladder", title: "Terapia della CDI per episodio", steps: [
          { h: "Primo episodio", p: "Fidaxomicina; alternativa vancomicina orale" },
          { h: "Fulminante", p: "Vancomicina orale (± rettale) + metronidazolo e.v., consulenza chirurgica", tone: "warn" },
          { h: "Prima recidiva", p: "Fidaxomicina, o vancomicina a scalare / pulsata" },
          { h: "≥ 2ª recidiva", p: "Trapianto di microbiota fecale", tone: "good" }
        ]}
      ]
    },
    "7": {
      summary: [
        "La maggior parte delle gastroenteriti si risolve in pochi giorni; diarrea &gt;2 settimane → cercare parassiti o cause non infettive.",
        "Dopo STEC: sorvegliare la <b>SEU</b> (emocromo, creatinina, diuresi).",
        "CDI: risposta in <b>3–5 giorni</b>; <b>nessun test di guarigione</b>; la recidiva entro <b>8 settimane</b> è frequente."
      ],
      visuals: [
        { type: "timeline", title: "Dopo la terapia", points: [
          { at: "3–5 giorni", h: "Risposta clinica", p: "Meno scariche, GB in calo" },
          { at: "5–10 giorni dopo la diarrea da STEC", h: "Finestra della SEU", p: "Emocromo, creatinina", tone: "warn" },
          { at: "≤ 8 settimane", h: "Finestra di recidiva della CDI", p: "Non ritestare se asintomatico", tone: "warn" }
        ]}
      ]
    },
    "8": {
      summary: [
        "Vaccini: <b>rotavirus</b> (lattanti), <b>antitifico coniugato</b>, <b>anticolerico orale</b>.",
        "<b>WASH</b>: acqua sicura, servizi igienici, igiene delle mani, sicurezza alimentare.",
        "Norovirus e spore di <i>C. difficile</i> <b>non sono uccisi dall’alcol</b>: lavare con <b>acqua e sapone</b>, pulire con <b>cloro</b>.",
        "Gli alimentaristi restano a casa fino a <b>48 h</b> dalla risoluzione dei sintomi.",
        "CDI: <b>antimicrobial stewardship</b>, precauzioni da contatto fino a ≥48 h dalla risoluzione della diarrea, disinfezione sporicida."
      ],
      visuals: [
        { type: "compare", title: "Prevenzione", cols: [
          { h: "Vaccini", tone: "good", items: ["Rotavirus", "Antitifico coniugato", "Anticolerico orale"] },
          { h: "Comunità", tone: "accent", items: ["Acqua sicura, servizi igienici", "Sicurezza alimentare", "Allontanare gli alimentaristi per 48 h"] },
          { h: "Ospedale (CDI)", tone: "warn", items: ["Antimicrobial stewardship", "Precauzioni da contatto", "Acqua e sapone, non alcol", "Pulizia con prodotti a base di cloro"] }
        ]}
      ]
    }
  }
};
