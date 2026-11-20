/* Livello di ripasso per il Capitolo 1 — Sepsi e shock settico. Fonte: chapters-it/01-sepsis-septic-shock.md */
window.REVISION = window.REVISION || {};
window.REVISION[1] = {
  sections: {
    "1": {
      summary: [
        "La sepsi è una <b>sindrome, non una malattia</b>: batteri, funghi, virus e parassiti possono tutti causarla. È la risposta dell'ospite a definirla.",
        "Tra le infezioni in terapia intensiva con coltura positiva: <b>gram-negativi 67%</b>, gram-positivi 37%, funghi 16%.",
        "Circa <b>un terzo</b> delle sepsi è <b>a coltura negativa</b>.",
        "Fonte più frequente: <b>polmone</b>, poi <b>addome</b> e <b>vie urinarie</b>.",
        "Ospite ed esposizione orientano verso patogeni specifici: <b>asplenia</b> → batteri capsulati; <b>neutropenia</b> → <i>P. aeruginosa</i>; <b>viaggio</b> → prima di tutto la malaria."
      ],
      visuals: [
        { type: "bars", title: "Microrganismi nei pazienti di terapia intensiva con coltura positiva (EPIC III; più di uno possibile)", unit: "%", max: 100, rows: [
          { label: "Gram-negativi", v: 67 }, { label: "Gram-positivi", v: 37 }, { label: "Funghi", v: 16 }
        ]},
        { type: "ladder", title: "Fonti, dalla più frequente", steps: [
          { h: "Polmone", p: "<i>S. pneumoniae</i>, <i>S. aureus</i>, <i>Legionella</i>, virus; in ospedale <i>Pseudomonas</i>, <i>Klebsiella</i>, MRSA" },
          { h: "Addome", p: "Enterobacterales, anaerobi, enterococchi, <i>Candida</i>: spesso polimicrobica" },
          { h: "Vie urinarie", p: "<i>E. coli</i>, enterococchi, <i>P. aeruginosa</i>" },
          { h: "Catetere / torrente ematico", p: "CoNS, <i>S. aureus</i>, gram-negativi, <i>Candida</i>" },
          { h: "Cute e tessuti molli", p: "<i>S. pyogenes</i>, <i>S. aureus</i>, <i>Clostridium</i>" },
          { h: "SNC", p: "<i>N. meningitidis</i>, <i>S. pneumoniae</i>, <i>Listeria</i>" }
        ]},
        { type: "cards", title: "Ospite o esposizione → patogeno da ricordare", items: [
          { h: "Asplenia", p: "Capsulati: pneumococco, meningococco, Hib", tag: "Morso di cane → <i>Capnocytophaga</i>" },
          { h: "Neutropenia", p: "Gram-negativi compreso <i>P. aeruginosa</i>, streptococchi viridanti, <i>Candida</i>, muffe", tag: "Coprire <i>Pseudomonas</i>" },
          { h: "Cirrosi + frutti di mare / acqua di mare", p: "<i>Vibrio vulnificus</i>", tag: "Bolle, shock" },
          { h: "Assistenza sanitaria, antibiotici precedenti, terapia intensiva", p: "ESBL, CRE, <i>Pseudomonas</i> MDR, CRAB, MRSA, VRE", tag: "Mortalità più alta", tone: "warn" },
          { h: "Mediata da tossine", p: "Superantigeni di <i>S. aureus</i>, <i>S. pyogenes</i>", tag: "Shock tossico" },
          { h: "Viaggiatore di ritorno", p: "<i>P. falciparum</i>, dengue, febbre tifoide, leptospirosi, rickettsiosi, melioidosi", tag: "Prima la malaria", tone: "warn" }
        ]}
      ]
    },
    "2": {
      summary: [
        "<b>Sepsis-1 (1991)</b>: SIRS + infezione. <b>Sepsis-3 (2016)</b>: infezione + disfunzione d'organo (ΔSOFA ≥2). La \"sepsi grave\" non esiste più.",
        "La SIRS è stata abbandonata: <b>né sensibile né specifica</b>.",
        "<b>Phoenix (2024)</b>: prima definizione pediatrica basata sui dati.",
        "≈ <b>49 milioni di casi, 11 milioni di decessi</b> all'anno: circa <b>1 decesso su 5</b> nel mondo, soprattutto nei Paesi a basso e medio reddito.",
        "Fattori di rischio: età estreme, sesso maschile, comorbidità, immunodepressione, asplenia, dispositivi, chirurgia o ricovero recenti, povertà."
      ],
      visuals: [
        { type: "timeline", title: "Come è cambiata la definizione", points: [
          { at: "1991", h: "Sepsis-1", p: "SIRS + infezione; sepsi grave = + disfunzione d'organo" },
          { at: "2016", h: "Sepsis-3", p: "Infezione + ΔSOFA ≥2; la sepsi grave scompare", tone: "good" },
          { at: "2024", h: "Phoenix", p: "Bambini: punteggio Phoenix ≥2" },
          { at: "2025", h: "SOFA-2", p: "Stessi 6 organi, nuove soglie" }
        ]},
        { type: "stats", items: [
          { v: "≈ 49 mln", l: "casi di sepsi all'anno (2017)" },
          { v: "≈ 11 mln", l: "decessi all'anno: 19,7% di tutti i decessi" },
          { v: "≈ 42%", l: "mortalità ospedaliera della sepsi trattata in terapia intensiva (Paesi ad alto reddito)" }
        ]}
      ]
    },
    "3": {
      summary: [
        "La sepsi è una risposta <b>disregolata</b>: <b>iperinfiammazione e immunosoppressione coesistono</b>.",
        "<b>PAMP</b> (LPS) e <b>DAMP</b> si legano ai <b>recettori Toll-like</b> → NF-κB, inflammasoma → TNF-α, IL-1β, IL-6, complemento, NET.",
        "I <b>superantigeni</b> attivano contemporaneamente molti linfociti T → tempesta citochinica (shock tossico).",
        "<b>Immunoparalisi</b>: apoptosi linfocitaria, bassa espressione di HLA-DR sui monociti, IL-10, esaurimento dei linfociti T → infezioni secondarie, riattivazioni virali, decessi tardivi.",
        "<b>Endotelio</b>: perdita del glicocalice, capillary leak. <b>Immunotrombosi</b> → microtrombi, CID.",
        "<b>Shock distributivo</b>: vasodilatazione mediata da NO, deficit relativo di vasopressina, cardiomiopatia settica, insufficienza surrenalica relativa.",
        "Il <b>lattato</b> aumenta per ipossia ma anche per glicolisi β2-adrenergica e ridotta clearance epatica."
      ],
      visuals: [
        { type: "flow", title: "Dal microrganismo all'insufficienza d'organo", steps: [
          { h: "Riconoscimento", p: "PAMP / DAMP → recettori Toll-like" },
          { h: "Infiammazione", p: "TNF-α, IL-1β, IL-6, complemento C5a, neutrofili, NET" },
          { h: "Endotelio e coagulazione", p: "Capillary leak, immunotrombosi, CID" },
          { h: "Circolo e cellule", p: "Vasodilatazione, cardiomiopatia, disfunzione mitocondriale" },
          { h: "Disfunzione d'organo", p: "Cervello, polmone, rene, fegato, coagulazione, intestino", tone: "warn" }
        ]},
        { type: "compare", title: "Due facce nello stesso momento", cols: [
          { h: "Iperinfiammazione", tone: "warn", items: ["Rilascio di citochine", "Febbre, shock", "Danno tissutale"] },
          { h: "Immunosoppressione", tone: "accent", items: ["Apoptosi linfocitaria", "↓ HLA-DR sui monociti, ↑ IL-10", "Infezioni secondarie, riattivazione di CMV/HSV", "Decessi tardivi"] }
        ]},
        { type: "grid", title: "Disfunzione d'organo", items: [
          { h: "Cervello", p: "Encefalopatia: delirium, coma" },
          { h: "Polmone", p: "ARDS" },
          { h: "Circolo", p: "Shock, cardiomiopatia settica" },
          { h: "Rene", p: "AKI, oliguria" },
          { h: "Fegato", p: "Colestasi, epatite ipossica" },
          { h: "Coagulazione", p: "Piastrinopenia, CID" },
          { h: "Intestino", p: "Ileo, perdita della barriera" },
          { h: "Metabolismo", p: "Iperglicemia, acidosi lattica, insufficienza surrenalica" }
        ]}
      ]
    },
    "4": {
      summary: [
        "Nessun quadro tipico unico: <b>segni della fonte + disfunzione d'organo + ipoperfusione</b>.",
        "La <b>tachipnea</b> è spesso il segno più precoce; una <b>confusione di nuova insorgenza</b> è spesso il primo segno nell'anziano.",
        "L'<b>ipotermia</b> si associa a una prognosi peggiore. Anziani, immunocompromessi e neutropenici possono non avere febbre.",
        "Una pressione arteriosa normale <b>non</b> esclude l'ipoperfusione: lattato, refill capillare &gt;3 s, marezzatura cutanea, diuresi &lt;0,5 ml/kg/h."
      ],
      visuals: [
        { type: "compare", title: "Shock caldo vs freddo", cols: [
          { h: "Precoce (caldo)", items: ["Cute calda", "Polsi scoccanti", "Pressione differenziale ampia"] },
          { h: "Tardivo (freddo)", tone: "warn", items: ["Estremità fredde e marezzate (prima le ginocchia)", "Pressione differenziale ridotta", "Refill capillare &gt;3 s"] }
        ]},
        { type: "table", title: "Indizio al letto del paziente → pensare a", head: ["Indizio", "Pensare a"], rows: [
          ["Petecchie, purpura fulminans", "<i>N. meningitidis</i> (pneumococco nell'asplenia)"],
          ["Eritrodermia diffusa + ipotensione", "Sindrome da shock tossico: cercare tampone vaginale, ferita, tamponamento nasale"],
          ["Dolore sproporzionato, crepitio, bolle", "Fascite necrotizzante"],
          ["Ectima gangrenoso nella neutropenia", "<i>P. aeruginosa</i>"],
          ["Dolore al fianco, dolorabilità dell'angolo costovertebrale", "Pielonefrite ostruttiva"],
          ["Ittero, dolore all'ipocondrio destro", "Colangite"],
          ["Soffio di nuova insorgenza, emboli", "Endocardite"],
          ["Febbre dopo un viaggio", "Prima la malaria"]
        ]}
      ]
    },
    "5": {
      summary: [
        "<b>Sepsi</b> = infezione + <b>ΔSOFA acuto ≥2</b> (mortalità &gt;10%).",
        "<b>Shock settico</b> = sepsi + <b>vasopressori per PAM ≥65</b> + <b>lattato &gt;2 mmol/l</b> nonostante i fluidi (mortalità &gt;40%).",
        "<b>qSOFA</b> (FR ≥22, alterazione dello stato mentale, PAS ≤100): uno spunto prognostico, <b>non una definizione e non uno strumento di screening</b>.",
        "Screening: la SSC 2026 preferisce <b>NEWS/NEWS2, MEWS o SIRS</b> al qSOFA.",
        "Accertamenti: ≥2 set di emocolture (senza ritardare gli antibiotici), colture dalla fonte, <b>lattato</b>, esami per il SOFA, imaging/POCUS per cercare una raccolta.",
        "Bambini: <b>punteggio Phoenix ≥2</b>; shock settico = ≥1 punto cardiovascolare."
      ],
      visuals: [
        { type: "compare", title: "Sepsis-3 in due righe", cols: [
          { h: "Sepsi", tone: "accent", items: ["Infezione sospetta o documentata", "+ ΔSOFA acuto ≥2 rispetto al basale"] },
          { h: "Shock settico", tone: "warn", items: ["Sepsi", "+ vasopressori per mantenere PAM ≥65 mmHg", "+ lattato &gt;2 mmol/l", "nonostante fluidi adeguati"] },
          { h: "qSOFA (≥2 = alto rischio)", items: ["FR ≥22/min", "Alterazione dello stato mentale", "PAS ≤100 mmHg", "Solo prognostico"] }
        ]},
        { type: "table", title: "SOFA: i sei sistemi (punti 1 → 4)", head: ["Sistema", "Misura", "Peggiora con"], rows: [
          ["Respiratorio", "PaO₂/FiO₂", "&lt;400 → &lt;100 con supporto"],
          ["Coagulazione", "Piastrine ×10³/µl", "&lt;150 → &lt;20"],
          ["Fegato", "Bilirubina mg/dl", "1,2 → ≥12"],
          ["Cardiovascolare", "PAM / vasopressori", "PAM &lt;70 → catecolamine ad alte dosi"],
          ["SNC", "Glasgow Coma Scale", "13–14 → &lt;6"],
          ["Renale", "Creatinina / diuresi", "1,2 → ≥5 mg/dl o &lt;200 ml/die"]
        ]},
        { type: "chips", title: "Condizioni simili da escludere", groups: [
          { h: "", items: ["Shock ipovolemico, cardiogeno, ostruttivo", "Pancreatite", "Crisi surrenalica", "Anafilassi", "Reazioni a farmaci", "HLH"] }
        ]}
      ]
    },
    "6": {
      summary: [
        "Lavorare in parallelo: <b>riconoscere → colture + lattato → antimicrobici → fluidi → vasopressori → controllo della fonte → rivalutare</b>.",
        "Antimicrobici: <b>shock o sepsi probabile → entro 1 h</b>; sepsi possibile senza shock → valutazione rapida, <b>entro 3 h</b>.",
        "Coprire i patogeni MDR <b>solo quando il loro rischio è alto</b>; anaerobi e antifungini non di routine.",
        "<b>Infusione prolungata</b> dei β-lattamici dopo una dose di carico.",
        "<b>Controllo della fonte entro 6 h</b>.",
        "<b>≥30 ml/kg di cristalloidi bilanciati</b> in 3 h per l'ipoperfusione; niente amidi. Poi misure dinamiche di risposta ai fluidi.",
        "<b>Noradrenalina</b> per prima, <b>PAM 65</b>; aggiungere <b>vasopressina</b>; niente dopamina. L'avvio in vena periferica è accettabile.",
        "<b>Idrocortisone nello shock settico</b>, non nella sepsi senza shock. Niente vitamina C. L'early goal-directed therapy non è più raccomandata."
      ],
      visuals: [
        { type: "flow", title: "Bundle della prima ora (iniziare entro 1 ora)", steps: [
          { h: "1 · Misurare il lattato", p: "Ripetere se &gt;2 mmol/l" },
          { h: "2 · Emocolture", p: "Prima degli antimicrobici, senza ritardarli" },
          { h: "3 · Antimicrobici ad ampio spettro", p: "", tone: "warn" },
          { h: "4 · Cristalloidi 30 ml/kg", p: "Per ipotensione o lattato ≥4" },
          { h: "5 · Vasopressori", p: "Se ancora ipoteso: PAM ≥65 mmHg" }
        ]},
        { type: "table", title: "Quando iniziare gli antimicrobici (SSC 2026)", head: ["Situazione", "Tempistica"], rows: [
          ["Shock settico (possibile, probabile, certo)", "<b>Subito, idealmente &lt;1 h</b>"],
          ["Sepsi probabile o certa, senza shock", "<b>Subito, idealmente &lt;1 h</b>"],
          ["Sepsi possibile, senza shock", "Valutazione rapida; <b>entro 3 h</b> se il sospetto di infezione persiste"],
          ["Bassa probabilità, senza shock", "Rinviare e monitorare"]
        ], caption: "La procalcitonina non si usa per decidere se iniziare." },
        { type: "ladder", title: "La scala dei vasopressori", steps: [
          { h: "Noradrenalina", p: "Prima linea; obiettivo PAM 65 mmHg (60–65 se ≥65 anni)" },
          { h: "+ Vasopressina", p: "Se PAM inadeguata con noradrenalina in aumento" },
          { h: "+ Adrenalina", p: "Se ancora inadeguata" },
          { h: "+ Dobutamina", p: "Ipoperfusione persistente con disfunzione cardiaca", tone: "warn" }
        ], caption: "Dopamina non raccomandata (aritmie). Levosimendan non raccomandato." },
        { type: "compare", title: "Fluidi", cols: [
          { h: "Sì", tone: "good", items: ["Prima i cristalloidi", "Bilanciati (Ringer lattato, Plasma-Lyte) piuttosto che fisiologica", "Misure dinamiche: sollevamento passivo delle gambe, variazione di SV/PP", "Lattato seriato + refill capillare"] },
          { h: "No", tone: "warn", items: ["Idrossietilamidi (AKI, morte)", "Gelatine", "Albumina di routine aggiunta ai cristalloidi", "Sovraccarico di fluidi dopo la rianimazione"] }
        ]},
        { type: "chips", title: "Terapia di supporto", groups: [
          { h: "Da fare", items: ["Insulina se glicemia ≥180 mg/dl", "Profilassi con EBPM", "IPP se rischio di sanguinamento GI", "Trasfusione restrittiva", "ARDS: 6 ml/kg, plateau ≤30, pronazione", "Obiettivi di cura entro 72 h"] },
          { h: "Da non fare", items: ["Vitamina C", "Bicarbonato per l'emodinamica", "Depurazione ematica"] }
        ]}
      ]
    },
    "7": {
      summary: [
        "Rivalutare spesso: PAM, frequenza cardiaca, stato mentale, refill capillare, diuresi, <b>lattato fino alla normalizzazione</b>.",
        "<b>Rivedere ogni giorno gli antimicrobici</b>: de-escalation quando il patogeno è noto (raccomandazione forte); sospendere se la causa non è infettiva.",
        "Con il controllo della fonte, <b>cicli più brevi</b>: 7 giorni non inferiori a 14 per le infezioni del torrente ematico.",
        "<b>Procalcitonina + valutazione clinica</b> per decidere quando sospendere.",
        "Febbre o shock persistenti a 48–72 h → fonte non controllata, patogeno resistente o insolito, nuova infezione, febbre da farmaci, catetere, causa non infettiva.",
        "<b>Sindrome post-sepsi</b>: sequele fisiche, cognitive, psicologiche, immunitarie; frequenti riammissioni (per lo più per infezioni)."
      ],
      visuals: [
        { type: "compare", title: "Sindrome post-sepsi", cols: [
          { h: "Fisica", items: ["Debolezza, debolezza acquisita in terapia intensiva", "Astenia"] },
          { h: "Cognitiva", items: ["Deficit cognitivo moderato-grave", "Nuove limitazioni funzionali"] },
          { h: "Psicologica", items: ["Ansia, depressione", "PTSD"] },
          { h: "Immunitaria", tone: "warn", items: ["Infezioni ricorrenti", "Riammissione", "Eventi cardiovascolari"] }
        ]},
        { type: "chips", title: "Alla dimissione", groups: [
          { h: "", items: ["Educazione sulla sepsi scritta e orale", "Follow-up dei nuovi deficit", "Riabilitazione", "Supporto psicologico", "Riconciliazione terapeutica", "Aggiornamento vaccinale"] }
        ]}
      ]
    },
    "8": {
      summary: [
        "Nessun vaccino contro la sepsi in sé: prevenire le <b>infezioni</b> che la causano.",
        "Vaccini: <b>pneumococco, meningococco ACWY e B, Hib, influenza, COVID-19</b>; vaccinazioni dell'infanzia e materne.",
        "<b>Asplenia</b>: vaccini + educazione + antibiotico di riserva o profilassi in casi selezionati.",
        "Controllo delle infezioni: igiene delle mani, WASH, <b>bundle per i dispositivi</b>, rimozione precoce dei dispositivi. SDD solo nelle terapie intensive a bassa resistenza.",
        "La stewardship riduce le resistenze e <i>C. difficile</i>, e quindi le sepsi future. Risoluzione OMS WHA70.7 (2017): la sepsi è una priorità globale."
      ],
      visuals: [
        { type: "compare", title: "Tre livelli di prevenzione", cols: [
          { h: "Vaccinazione", tone: "good", items: ["Pneumococco, meningococco, Hib", "Influenza, COVID-19", "Asplenia: tutti questi + educazione"] },
          { h: "Controllo delle infezioni", items: ["Igiene delle mani, WASH", "Bundle per catetere venoso centrale, catetere urinario, ventilatore", "Rimuovere precocemente i dispositivi"] },
          { h: "Sistema sanitario", tone: "accent", items: ["Stewardship", "Programmi di riconoscimento precoce", "Piani nazionali per la sepsi"] }
        ]}
      ]
    }
  }
};
