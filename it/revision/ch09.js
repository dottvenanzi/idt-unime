/* Livello di ripasso per il Capitolo 9 — Infezioni delle vie urinarie. Fonte: chapters-it/09-uti.md */
window.REVISION = window.REVISION || {};
window.REVISION[9] = {
  sections: {
    "1": {
      summary: [
        "<b><i>E. coli</i> (UPEC)</b> è la causa principale in ogni contesto.",
        "<i>S. saprophyticus</i>: seconda causa di cistite nelle <b>giovani donne sessualmente attive</b>.",
        "IVU complicate / da catetere: <i>Klebsiella</i>, <i>Proteus</i>, <i>Enterococcus</i>, <i>Pseudomonas</i>, <i>Candida</i> (la candiduria è di solito colonizzazione).",
        "<b><i>S. aureus</i> nelle urine senza catetere</b> → pensare a una batteriemia.",
        "<b>Fimbrie di tipo 1 (FimH)</b> → cistite; <b>fimbrie P</b> → pielonefrite. <b>Ureasi</b> (<i>Proteus</i>) → urine alcaline → <b>calcoli di struvite</b>.",
        "Elevata resistenza di <i>E. coli</i> ad aminopenicilline e cotrimossazolo; ESBL frequenti, KPC endemiche in Italia. I breakpoint di fosfomicina, nitrofurantoina e mecillinam valgono <b>solo per le IVU non complicate</b>."
      ],
      visuals: [
        { type: "cards", title: "Uropatogeni per contesto", items: [
          { h: "<i>E. coli</i>", p: "Cistite e pielonefrite", tag: "Causa principale", tone: "warn" },
          { h: "<i>S. saprophyticus</i>", p: "Giovani donne sessualmente attive", tag: "Nitriti negativi" },
          { h: "<i>Klebsiella</i>, <i>Proteus</i>, <i>Enterobacter</i>", p: "IVU complicate", tag: "ESBL, carbapenemasi" },
          { h: "<i>Enterococcus</i>", p: "Cateteri, manovre strumentali", tag: "Nitriti negativi" },
          { h: "<i>Pseudomonas</i>", p: "Cateteri, ostruzione, antibiotici pregressi", tag: "Assistenza sanitaria" },
          { h: "<i>S. aureus</i>", p: "Raro patogeno ascendente", tag: "Pensare alla batteriemia", tone: "warn" },
          { h: "<i>Candida</i>", p: "Cateteri, diabete, antibiotici", tag: "Di solito colonizzazione" }
        ]},
        { type: "table", title: "Fattori di virulenza", head: ["Fattore", "Ruolo"], rows: [
          ["Fimbrie di tipo 1 (FimH)", "Legano le uroplachine vescicali → <b>cistite</b>"],
          ["Fimbrie P (PapG)", "Legano i glicolipidi renali → <b>pielonefrite</b>, urosepsi"],
          ["Ureasi (<i>Proteus</i>, <i>Klebsiella</i>)", "Urine alcaline → <b>calcoli di struvite</b>"],
          ["Swarming (<i>Proteus</i>)", "Risalita lungo le vie urinarie e i cateteri"],
          ["Biofilm", "Colonizzazione del catetere, tolleranza agli antibiotici"]
        ]}
      ]
    },
    "2": {
      summary: [
        "<b>Cistite</b>: vescica, nessun segno sistemico. <b>Pielonefrite</b>: febbre, dolore al fianco, dolorabilità dell’angolo costovertebrale.",
        "Due schemi: <b>EAU per fattori dell’ospite</b> (uomini, gravidanza, ostruzione, catetere…); <b>IDSA 2025 per estensione</b> (febbre, dolore al fianco, prostatite = complicata).",
        "<b>Ricorrenti</b>: ≥2 in 6 mesi o ≥3 in 12 mesi.",
        "<b>Batteriuria asintomatica</b>: batteriuria significativa senza sintomi. <b>CAUTI</b>: catetere in sede o rimosso da ≤48 h.",
        "Metà delle donne ha un’IVU nel corso della vita. Quasi <b>tutti i cateteri a lungo termine sono batteriurici</b>."
      ],
      visuals: [
        { type: "compare", title: "Che cosa rende un’IVU \"complicata\"?", cols: [
          { h: "EAU: fattori dell’ospite", tone: "accent", items: ["Uomini", "Gravidanza", "Ostruzione, calcoli", "Catetere, vescica neurologica", "Immunosoppressione, trapianto", "Diabete scompensato"] },
          { h: "IDSA 2025: oltre la vescica", tone: "warn", items: ["Febbre / sepsi", "Dolore al fianco, dolorabilità costovertebrale", "Dolore pelvico / perineale (prostatite)", "CAUTI febbrile"] }
        ]},
        { type: "bars", title: "Prevalenza della batteriuria asintomatica (stima superiore)", unit: "%", max: 100, rows: [
          { label: "Donne in premenopausa", v: 6, t: "1–6%" },
          { label: "Donne in gravidanza", v: 10, t: "2–10%" },
          { label: "Catetere a lungo termine", v: 100, t: "≈ tutti", tone: "warn" }
        ]},
        { type: "table", title: "Fattori di rischio", head: ["Contesto", "Fattori di rischio"], rows: [
          ["Giovani donne", "Rapporti sessuali, spermicidi, nuovo partner, IVU pregressa"],
          ["Donne in postmenopausa", "Carenza estrogenica, incontinenza, cistocele, residuo urinario"],
          ["Uomini", "Ipertrofia prostatica, manovre strumentali"],
          ["Tutti", "Ostruzione, catetere, vescica neurologica, diabete, gravidanza, immunosoppressione"]
        ]}
      ]
    },
    "3": {
      summary: [
        "<b>Via ascendente &gt;95%</b>: flora intestinale → regione periuretrale → vescica → rene. Uretra femminile corta.",
        "La via ematogena è rara (<i>S. aureus</i>, <i>Candida</i>).",
        "UPEC forma <b>comunità batteriche intracellulari</b> e serbatoi quiescenti → recidive dallo stesso ceppo.",
        "Difese: flusso urinario e svuotamento, uromodulina, valvola vescico-ureterale, lattobacilli vaginali.",
        "<b>Gravidanza</b>: dilatazione ureterale → la batteriuria asintomatica evolve più spesso in pielonefrite.",
        "Catetere: aggira le difese, residuo urinario, <b>biofilm</b>; ingresso extraluminale o intraluminale."
      ],
      visuals: [
        { type: "flow", title: "Dalla colonizzazione alla pielonefrite", steps: [
          { h: "Colonizzazione periuretrale", p: "Flora intestinale all’introito" },
          { h: "Adesione in vescica", p: "Le fimbrie di tipo 1 legano le uroplachine" },
          { h: "Invasione delle cellule ombrello", p: "Comunità intracellulari, protette dagli antibiotici" },
          { h: "Richiamo dei neutrofili", p: "Piuria, esfoliazione" },
          { h: "Risalita al rene", p: "Fimbrie P → febbre, dolore al fianco", tone: "warn" }
        ]},
        { type: "compare", title: "Le difese e ciò che le compromette", cols: [
          { h: "Difese", tone: "good", items: ["Flusso urinario, svuotamento completo", "pH e osmolalità urinari", "Uromodulina", "Valvola vescico-ureterale", "Lattobacilli vaginali"] },
          { h: "Cosa le compromette", tone: "warn", items: ["Ostruzione, calcoli, prostata", "Vescica neurologica", "Gravidanza", "Carenza estrogenica", "Catetere"] }
        ]}
      ]
    },
    "4": {
      summary: [
        "<b>Cistite</b>: disuria, pollachiuria, urgenza, dolore sovrapubico, <b>senza febbre</b>.",
        "<b>Pielonefrite</b>: febbre, brividi, dolore al fianco, dolorabilità costovertebrale, nausea; i sintomi di cistite possono mancare.",
        "<b>Prostatite acuta</b>: febbre, dolore perineale, prostata dolente. <b>Nessun massaggio prostatico</b>.",
        "La CAUTI è spesso aspecifica.",
        "Anziani: <b>batteriuria + confusione ≠ IVU</b>. Cercare altre cause.",
        "Complicanze: <b>pielonefrite ostruttiva (drenare!)</b>, ascesso, pielonefrite enfisematosa (diabete, TC)."
      ],
      visuals: [
        { type: "compare", title: "Vescica o rene?", cols: [
          { h: "Cistite", tone: "accent", items: ["Disuria", "Pollachiuria, urgenza", "Dolore sovrapubico", "Possibile ematuria", "<b>Senza febbre</b>"] },
          { h: "Pielonefrite", tone: "warn", items: ["<b>Febbre</b>, brividi", "Dolore al fianco", "Dolorabilità costovertebrale", "Nausea, vomito", "± sintomi di cistite"] },
          { h: "Prostatite", items: ["Febbre", "Dolore perineale / pelvico", "Sintomi minzionali ostruttivi", "Prostata dolente"] }
        ]},
        { type: "cards", title: "Complicanze", items: [
          { h: "Pielonefrite ostruttiva", p: "Calcolo, stenosi, tumore", tag: "Drenaggio urgente", tone: "warn" },
          { h: "Ascesso renale / perinefrico", p: "Febbre persistente in terapia", tag: "TC" },
          { h: "Pielonefrite enfisematosa", p: "Gas-produttori, diabete scompensato", tag: "TC", tone: "warn" },
          { h: "Necrosi papillare", p: "Diabete, analgesici, anemia falciforme", tag: "" },
          { h: "Xantogranulomatosa", p: "Ostruzione cronica, <i>Proteus</i>", tag: "" }
        ]}
      ]
    },
    "5": {
      summary: [
        "Cistite tipica in una donna senza perdite vaginali: <b>diagnosi clinica</b>.",
        "Esterasi leucocitaria = piuria. <b>Nitriti</b>: specifici, non sensibili; <b>negativi con <i>Enterococcus</i>, <i>S. saprophyticus</i></b>.",
        "<b>Piuria sterile</b>: antibiotici recenti, clamidia/gonorrea, <b>TB urinaria</b>, calcoli.",
        "Urinocoltura in: pielonefrite, IVU complicata, uomini, gravidanza, recidiva, fallimento.",
        "Catetere da &gt;2 settimane → <b>sostituirlo</b> e prelevare dal nuovo, mai dalla sacca.",
        "Soglie: <b>più basse con sintomi</b>, più alte (e ripetute) senza.",
        "Imaging: ecografia per l’ostruzione; <b>TC se febbre &gt;72 h</b> o peggioramento."
      ],
      visuals: [
        { type: "ladder", title: "Soglie dell’urinocoltura (UFC/ml)", steps: [
          { h: "Cistite sintomatica (donne), CAUTI", p: "≥10³", tone: "warn" },
          { h: "Pielonefrite", p: "≥10⁴" },
          { h: "Batteriuria asintomatica", p: "≥10⁵ (donne: stesso microrganismo in 2 campioni; uomini: 1)" }
        ], caption: "I sintomi aumentano la probabilità pre-test, quindi basta una carica più bassa." },
        { type: "compare", title: "Stick urinario", cols: [
          { h: "Esterasi leucocitaria", items: ["Rileva la piuria", "Presente anche nella batteriuria asintomatica", "La sola piuria non è un motivo per trattare"] },
          { h: "Nitriti", tone: "accent", items: ["Gli Enterobacterales riducono i nitrati", "Specifici, non sensibili", "Negativi: <i>Enterococcus</i>, <i>S. saprophyticus</i>, <i>Pseudomonas</i>"] }
        ]},
        { type: "chips", title: "Piuria sterile", groups: [
          { h: "", items: ["Antibiotici recenti", "Uretrite da <i>Chlamydia</i> / gonococco", "Tubercolosi urinaria", "Calcoli", "Nefrite interstiziale"] }
        ]}
      ]
    },
    "6": {
      summary: [
        "<b>Cistite, prima linea: nitrofurantoina, fosfomicina trometamolo, pivmecillinam</b>. Cicli brevi.",
        "<b>No fluorochinoloni</b> nella cistite (danno collaterale, restrizioni EMA). Cotrimossazolo solo se resistenza locale &lt;20%.",
        "<b>Nitrofurantoina e fosfomicina orale mai nella pielonefrite</b> (livelli tissutali/ematici insufficienti).",
        "IVU complicata: 4 passaggi: <b>gravità → rischio di resistenza → fattori del paziente → antibiogramma locale nella sepsi</b>. ESBL + grave → carbapenemico.",
        "<b>Drenare l’ostruzione</b>. Passaggio alla via orale quando migliora, <b>anche con batteriemia</b>.",
        "Durata: <b>5–7 gg FQ o 7 gg altri</b>; <b>10–14 gg se prostatite</b>. CAUTI: sostituire il catetere se &gt;2 settimane, ~7 giorni.",
        "<b>Trattare la batteriuria asintomatica solo in gravidanza e prima di procedure urologiche con lesione della mucosa</b>."
      ],
      visuals: [
        { type: "table", title: "Cistite non complicata", head: ["Categoria", "Farmaci"], rows: [
          ["<b>Prima linea</b>", "Nitrofurantoina, fosfomicina trometamolo, pivmecillinam"],
          ["Alternative", "Cotrimossazolo (se resistenza locale &lt;20%), cefalosporine orali"],
          ["Non raccomandati", "Fluorochinoloni, aminopenicilline da sole"]
        ]},
        { type: "flow", title: "Terapia empirica nelle IVU complicate", steps: [
          { h: "1 · Gravità", p: "Sepsi / shock settico o no" },
          { h: "2 · Rischio di resistenza", p: "Isolati precedenti, antibiotici recenti, assistenza sanitaria, viaggi" },
          { h: "3 · Fattori del paziente", p: "Allergie, funzione renale, interazioni" },
          { h: "4 · Antibiogramma locale", p: "Soprattutto nella sepsi", tone: "accent" }
        ]},
        { type: "ranges", title: "Durata della terapia", max: 14, ticks: [0, 3, 5, 7, 10, 14], rows: [
          { label: "Cistite", from: 1, to: 5, tone: "good", txt: "Da dose singola a pochi giorni" },
          { label: "Uomo apiretico", from: 7, to: 7, txt: "7 gg" },
          { label: "IVU complicata, fluorochinolone", from: 5, to: 7, txt: "5–7 gg, anche se batteriemica" },
          { label: "IVU complicata, altro farmaco", from: 7, to: 7, txt: "7 gg" },
          { label: "Sospetta prostatite", from: 10, to: 14, tone: "warn", txt: "10–14 gg" }
        ]},
        { type: "compare", title: "Batteriuria asintomatica", cols: [
          { h: "Screening e terapia", tone: "good", items: ["Gravidanza", "Prima di procedure urologiche con lesione della mucosa"] },
          { h: "NON fare screening né terapia", tone: "warn", items: ["Donne sane non gravide", "Anziani, lungodegenza", "Diabete", "Cateteri, lesioni midollari", "Trapianto di rene &gt;1 mese", "Chirurgia non urologica", "Delirium / cadute senza segni urinari"] }
        ], caption: "Trattare la batteriuria asintomatica causa effetti avversi, <i>C. difficile</i> e resistenze, senza alcun beneficio." }
      ]
    },
    "7": {
      summary: [
        "La cistite migliora in <b>1–3 giorni</b>; la pielonefrite sfebbra in <b>48–72 h</b>.",
        "<b>Nessun test di guarigione</b>, tranne in gravidanza.",
        "Persistenza o recidiva entro 4 settimane → urinocoltura, <b>cambiare classe</b>.",
        "Febbre &gt;72 h → rivalutare la coltura + <b>TC</b> (ostruzione, ascesso).",
        "IVU ricorrenti nelle giovani donne: nessun approfondimento esteso. Indagare uomini, pielonefriti ricorrenti, ematuria, calcoli, produttori di ureasi."
      ],
      visuals: [
        { type: "timeline", title: "Decorso atteso", points: [
          { at: "1–3 giorni", h: "La cistite migliora", p: "Nessuna coltura di controllo" },
          { at: "48–72 h", h: "La pielonefrite sfebbra", p: "", tone: "good" },
          { at: "Febbre &gt; 72 h", h: "Imaging renale", p: "Ostruzione, ascesso, forma enfisematosa", tone: "warn" },
          { at: "≤ 4 settimane", h: "Recidiva", p: "Urinocoltura, classe diversa" }
        ]}
      ]
    },
    "8": {
      summary: [
        "Nessun vaccino autorizzato. <b>Prima le misure non antimicrobiche</b>.",
        "IVU ricorrenti: liquidi, niente spermicidi, <b>estrogeni vaginali</b> (postmenopausa), profilassi immunoattiva, <b>metenamina</b>, mirtillo rosso; profilassi antibiotica per ultima.",
        "CAUTI: <b>evitare cateteri non necessari, rimuoverli presto</b>; inserimento asettico, sistema chiuso, sacca sotto la vescica.",
        "Non raccomandati: profilassi antibiotica di routine, sostituzioni programmate del catetere, irrigazioni vescicali, screening della batteriuria asintomatica nei pazienti cateterizzati."
      ],
      visuals: [
        { type: "ladder", title: "IVU ricorrenti nella donna: approccio a gradini", steps: [
          { h: "Counseling", p: "Liquidi, evitare spermicidi, minzione post-coitale" },
          { h: "Estrogeni vaginali", p: "Donne in postmenopausa" },
          { h: "Profilassi immunoattiva", p: "Lisato batterico, batteri inattivati sublinguali" },
          { h: "Metenamina ippurato", p: "Formaldeide in urine acide, non è un antibiotico" },
          { h: "Mirtillo rosso (± D-mannosio)", p: "Anti-adesione; prove sul D-mannosio deboli" },
          { h: "Profilassi antimicrobica", p: "Continua o post-coitale", tone: "warn" }
        ], caption: "L’autoterapia è un’alternativa per le donne aderenti con recidive documentate." },
        { type: "compare", title: "Prevenire la CAUTI", cols: [
          { h: "Sì", tone: "good", items: ["Catetere solo per indicazioni reali", "Rimuoverlo il prima possibile", "Cateteri intermittenti / esterni", "Inserimento asettico, drenaggio chiuso", "Sacca sotto la vescica", "Rimozione gestita dagli infermieri"] },
          { h: "No", tone: "warn", items: ["Catetere per incontinenza o comodità", "Profilassi antibiotica di routine", "Sostituzioni programmate del catetere", "Irrigazione vescicale antimicrobica", "Screening della batteriuria asintomatica"] }
        ]}
      ]
    }
  }
};
