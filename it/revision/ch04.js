/* Livello di ripasso per il Capitolo 4 — Polmonite comunitaria.
   Scritto da /chapters-it/04-community-acquired-pneumonia.md; il testo completo è mostrato sotto ogni scheda. */
window.REVISION = window.REVISION || {};
window.REVISION[4] = {
  sections: {
    "1": {
      summary: [
        "In circa la <b>metà</b> dei pazienti ricoverati <b>non si identifica alcun patogeno</b>, anche con indagini estese.",
        "<b><i>S. pneumoniae</i></b> è la causa batterica più frequente.",
        "I <b>batteri atipici</b> (<i>Mycoplasma</i>, <i>Chlamydia</i>, <i>Legionella</i>) non si vedono alla colorazione di Gram e <b>non sono coperti dai β-lattamici</b>.",
        "I <b>virus respiratori</b> si trovano in circa un quarto-un terzo dei casi e possono essere seguiti da una sovrainfezione batterica.",
        "<i>S. aureus</i> (compreso CA-MRSA) segue tipicamente l'<b>influenza</b> e causa polmonite <b>necrotizzante/escavata</b>."
      ],
      visuals: [
        { type: "stats", items: [
          { v: "≈ 1/2", l: "CAP ricoverate senza patogeno identificato" },
          { v: "1/4 – 1/3", l: "casi con un virus respiratorio" },
          { v: "N. 1", l: "<i>S. pneumoniae</i>: causa batterica più frequente" }
        ]},
        { type: "cards", title: "Gruppi di patogeni e l'indizio che orienta verso ciascuno", items: [
          { h: "Batteri tipici", p: "<i>S. pneumoniae</i>, <i>H. influenzae</i>, <i>M. catarrhalis</i>", tag: "BPCO, fumatori" },
          { h: "Batteri atipici", p: "<i>Mycoplasma</i>, <i>Chlamydia pneumoniae</i>, <i>Legionella</i>", tag: "Nessuna copertura con β-lattamici" },
          { h: "<i>Legionella</i>", p: "Fonti idriche (torri di raffreddamento, vasche idromassaggio); malattia grave", tag: "Iponatremia, diarrea" },
          { h: "<i>S. aureus</i> (MSSA, CA-MRSA)", p: "Spesso dopo l'influenza", tag: "Escavazione, empiema" },
          { h: "Bacilli gram-negativi", p: "<i>Klebsiella</i>, Enterobacterales; <i>Pseudomonas</i>", tag: "Alcol, bronchiectasie" },
          { h: "Anaerobi / flora orale", p: "Aspirazione: disfagia, ridotto stato di coscienza", tag: "Ascesso polmonare" }
        ]},
        { type: "chips", title: "Indizi dall'esposizione", groups: [
          { h: "Uccelli", items: ["<i>Chlamydia psittaci</i>"] },
          { h: "Fattorie / animali partorienti", items: ["<i>Coxiella burnetii</i> (febbre Q)"] },
          { h: "Aree endemiche", items: ["Tubercolosi", "Funghi endemici"] }
        ]}
      ]
    },
    "2": {
      summary: [
        "La CAP è acquisita <b>fuori dall'ospedale</b>. La polmonite che inizia <b>≥48 h dopo il ricovero</b> è una HAP, con più gram-negativi resistenti e MRSA.",
        "Tra le principali cause di ricovero e di morte per infezione; incidenza e mortalità <b>aumentano con l'età</b>.",
        "La CAP virale ha il picco in <b>inverno</b>; <i>Legionella</i> in <b>estate</b> e nei <b>focolai</b> legati all'acqua."
      ],
      visuals: [
        { type: "timeline", title: "Dove è iniziata la polmonite decide la categoria", points: [
          { at: "Comunità", h: "CAP", p: "Patogeni tipici, atipici, virali" },
          { at: "Ricovero", h: "0 h", p: "" , tone: "muted"},
          { at: "≥ 48 h in ospedale", h: "HAP", p: "Gram-negativi resistenti, MRSA (Capitolo 5)", tone: "warn" }
        ]},
        { type: "chips", title: "Fattori di rischio", groups: [
          { h: "Ospite", items: ["Età ≥65", "BPCO", "Malattie croniche cardiache, epatiche, renali", "Diabete", "Immunodepressione (compreso HIV)"] },
          { h: "Abitudini ed esposizioni", items: ["Fumo", "Disturbo da uso di alcol", "Disfagia / rischio di aspirazione", "Recente infezione respiratoria virale"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "Difese: <b>riflesso della tosse</b>, <b>clearance mucociliare</b>, IgA secretorie, <b>macrofagi alveolari</b>.",
        "La <b>microaspirazione</b> della flora orofaringea è la via più frequente; le altre sono l'inalazione e la diffusione ematogena.",
        "L'essudato infiammatorio che riempie gli alveoli produce il <b>consolidamento</b> all'imaging e i <b>segni sistemici</b>.",
        "CAP grave = risposta dell'ospite non controllata: <b>sepsi, shock settico, ARDS</b>."
      ],
      visuals: [
        { type: "compare", title: "Tre vie di ingresso", cols: [
          { h: "Microaspirazione", tag: "La più frequente", tone: "accent", items: ["Flora orofaringea", "<i>S. pneumoniae</i>, <i>H. influenzae</i>"] },
          { h: "Inalazione", items: ["Aerosol", "<i>Legionella</i>, virus, <i>M. tuberculosis</i>"] },
          { h: "Ematogena", items: ["Da un focus a distanza", "<i>S. aureus</i>: endocardite destra, uso di droghe per via iniettiva"] }
        ]},
        { type: "flow", title: "Dall'inoculo alla malattia", steps: [
          { h: "Inoculo elevato o difese deboli", p: "Fumo, alcol, danno virale alle ciglia, immunodepressione" },
          { h: "Moltiplicazione negli alveoli", p: "" },
          { h: "Risposta infiammatoria", p: "Neutrofili, citochine, essudato" },
          { h: "Consolidamento + segni sistemici", p: "Opacità all'imaging; febbre, leucocitosi" },
          { h: "Se non controllata", p: "Sepsi, shock settico, ARDS", tone: "warn" }
        ]},
        { type: "flow", dir: "row", title: "Polmonite lobare classica (pneumococcica)", steps: [
          { h: "Congestione" }, { h: "Epatizzazione rossa" }, { h: "Epatizzazione grigia" }, { h: "Risoluzione", tone: "good" }
        ], caption: "La broncopolmonite invece è a chiazze e centrata sulle vie aeree." }
      ]
    },
    "4": {
      summary: [
        "Sindrome compatibile: <b>febbre, dispnea, tosse, espettorato</b>; anche dolore pleuritico, brividi, mialgie.",
        "Sopra il consolidamento: <b>crepitii, soffio bronchiale, ottusità, aumento del fremito vocale tattile, egofonia</b>.",
        "Gli <b>anziani</b> possono presentarsi con confusione, cadute o declino funzionale, talvolta <b>senza febbre</b>.",
        "Le presentazioni \"tipiche\" e \"atipiche\" si <b>sovrappongono troppo</b> per predire il patogeno."
      ],
      visuals: [
        { type: "compare", title: "Insegnamento classico vs realtà", cols: [
          { h: "Quadro \"tipico\"", items: ["Esordio brusco", "Febbre alta, brividi scuotenti", "Tosse produttiva", "Associato al pneumococco"] },
          { h: "Quadro \"atipico\"", items: ["Esordio graduale", "Tosse secca", "Cefalea, mialgie", "Associato ai patogeni atipici"] },
          { h: "Messaggio per l'esame", tone: "warn", items: ["I quadri si sovrappongono", "Né i sintomi né la radiografia predicono l'eziologia"] }
        ]},
        { type: "chips", title: "Complicanze", groups: [
          { h: "Locali", items: ["Versamento parapneumonico / empiema", "Ascesso polmonare", "Polmonite necrotizzante"] },
          { h: "Sistemiche", items: ["Batteriemia, infezione metastatica", "Sepsi / shock settico", "Insufficienza respiratoria / ARDS", "Eventi cardiaci negli anziani"] }
        ]}
      ]
    },
    "5": {
      summary: [
        "Diagnosi = <b>opacità all'imaging del torace</b> + <b>sindrome clinica compatibile</b>. L'imaging non identifica il patogeno.",
        "Passo successivo: <b>gravità e luogo di cura</b>. Giudizio clinico, supportato da <b>PSI (preferito)</b> o CURB-65.",
        "Una nuova <b>SpO₂ &lt;92% in aria ambiente</b> (senza malattia polmonare di base) depone per il ricovero.",
        "Terapia intensiva: <b>1 criterio maggiore</b> (ventilazione meccanica o vasopressori) o <b>≥3 criteri minori</b>.",
        "Le indagini microbiologiche sono <b>graduate per gravità</b>: quasi nessuna per i pazienti ambulatoriali, colture e antigeni in reparto e in terapia intensiva.",
        "<b>Escavazione</b> → ricercare anche TB (isolamento per via aerea), funghi, <i>Nocardia</i>."
      ],
      visuals: [
        { type: "algo", title: "Percorso diagnostico e di triage", nodes: [
          { q: "Febbre, dispnea, tosse, espettorato?", opts: [{ when: "Sì", to: "Radiografia del torace, PA + laterale", next: true }] },
          { q: "Opacità alla radiografia?", opts: [
            { when: "Sì", to: "Diagnosi di CAP", tone: "good", next: true },
            { when: "No, ma sospetto alto o radiografia non diagnostica", to: "TC del torace" }
          ]},
          { q: "Quanto è grave? Dove trattarla?", opts: [
            { when: "Strumenti", to: "Giudizio clinico + PSI (preferito) o CURB-65 + SpO₂", next: true }
          ]},
          { q: "Qualche criterio per la terapia intensiva?", opts: [
            { when: "1 maggiore o ≥3 minori", to: "Terapia intensiva", tone: "warn" },
            { when: "Nessuno", to: "Reparto o domicilio, in base allo score e a fattori pratici", tone: "good" }
          ]}
        ]},
        { type: "curb65" },
        { type: "table", title: "Classi PSI e luogo di cura", head: ["Classe PSI", "Luogo di cura"], rows: [
          ["I – II", "In genere ambulatoriale"],
          ["III", "Ambulatoriale o breve osservazione, secondo le circostanze"],
          ["IV – V", "Ricovero ospedaliero; valutare la terapia intensiva"]
        ], caption: "Il PSI usa 20 variabili (età, comorbidità, esame obiettivo, esami di laboratorio, imaging): più accurato e meglio validato. Il CURB-65 è più semplice al letto del paziente." },
        { type: "compare", title: "Criteri IDSA/ATS per la terapia intensiva", cols: [
          { h: "Maggiori", tag: "Ne basta uno", tone: "warn", items: ["Insufficienza respiratoria che richiede ventilazione meccanica", "Shock settico che richiede vasopressori"] },
          { h: "Minori", tag: "Ne servono ≥ 3", items: ["FR ≥30/min", "PaO₂/FiO₂ ≤250", "Infiltrati multilobari", "Confusione", "BUN ≥20 mg/dl", "Leucociti &lt;4.000/µl", "Piastrine &lt;100.000/µl", "Temperatura centrale &lt;36 °C", "Ipotensione che richiede fluidi aggressivi"] }
        ]},
        { type: "chips", title: "Ricoverare qualunque sia lo score se", groups: [
          { h: "", items: ["Nuova SpO₂ &lt;92% in aria ambiente", "Impossibilità di assumere farmaci per bocca", "Deficit cognitivo o funzionale", "Ostacoli sociali (senza fissa dimora, uso di sostanze, distanza)"] }
        ]},
        { type: "compare", title: "Indagini microbiologiche graduate", cols: [
          { h: "Ambulatoriale", tag: "Lieve", tone: "good", items: ["In genere nessuna", "Test per virus respiratori solo se cambia la gestione (influenza, SARS-CoV-2)"] },
          { h: "Reparto", tag: "Moderata", items: ["Emocolture", "Gram + coltura dell'espettorato", "Antigene urinario pneumococcico", "PCR per <i>Legionella</i> (o antigene urinario)", "PCR virale in stagione", "PCR nasale per MRSA se a rischio", "Screening HIV"] },
          { h: "Terapia intensiva", tag: "Grave", tone: "warn", items: ["Come in reparto", "Valutare campioni broncoscopici", "Se la terapia fallisce: funghi, virus, <i>Pneumocystis</i> se immunocompromesso"] }
        ]}
      ]
    },
    "6": {
      summary: [
        "La terapia ambulatoriale è mirata a <b><i>S. pneumoniae</i>, <i>H. influenzae</i> e atipici</b>.",
        "<b>Comorbidità o antibiotici recenti</b> → ampliare ad alcuni gram-negativi e MSSA.",
        "Ricoverati: <b>β-lattamico + macrolide</b> o un <b>fluorochinolone respiratorio</b>; i β-lattamici da soli non coprono gli atipici.",
        "Aggiungere farmaci <b>anti-MRSA</b> o <b>antipseudomonas</b> solo con fattori di rischio; <b>oseltamivir</b> per l'influenza.",
        "Almeno <b>5 giorni</b> e fino alla <b>stabilità clinica</b>; passaggio e.v. → orale quando stabile.",
        "<b>Idrocortisone</b> in casi selezionati di CAP <b>grave</b>; non nella CAP non grave né nell'influenza."
      ],
      visuals: [
        { type: "ladder", title: "Schemi empirici per contesto (da adattare alle resistenze locali)", steps: [
          { h: "Ambulatoriale, senza comorbidità", p: "Amoxicillina, o doxiciclina, o un macrolide (solo dove la resistenza pneumococcica ai macrolidi è bassa)" },
          { h: "Ambulatoriale con comorbidità", p: "Amoxicillina-clavulanato o una cefalosporina + macrolide (o doxiciclina), o un fluorochinolone respiratorio da solo" },
          { h: "Reparto", p: "β-lattamico (ad es. ceftriaxone) + macrolide, o un fluorochinolone respiratorio da solo" },
          { h: "Terapia intensiva", p: "β-lattamico + macrolide, o β-lattamico + fluorochinolone respiratorio", tone: "warn" }
        ], caption: "Aggiunte solo con fattori di rischio: vancomicina o linezolid (MRSA), copertura antipseudomonas; oseltamivir per l'influenza." },
        { type: "note", h: "Perché β-lattamico + macrolide?", p: "I patogeni atipici non hanno una parete di peptidoglicano (<i>Mycoplasma</i>) o vivono dentro le cellule (<i>Legionella</i>, <i>Chlamydia</i>), quindi i β-lattamici non li raggiungono." },
        { type: "compare", title: "Quando sospettare MRSA", cols: [
          { h: "Fattori di rischio più forti", tone: "warn", items: ["Colonizzazione nota da MRSA", "Precedente infezione da MRSA", "Cocchi gram-positivi a grappolo in un espettorato di buona qualità"] },
          { h: "Aumentano il sospetto", items: ["Ricovero recente o antibiotici e.v. (3 mesi)", "ESKD, uso di droghe per via iniettiva, sovraffollamento, detenzione", "Recente sindrome simil-influenzale", "Polmonite necrotizzante/escavata", "Empiema"] },
          { h: "Sospenderla quando", tone: "good", items: ["PCR nasale per MRSA negativa: alto valore predittivo negativo → de-escalation"] }
        ]}
      ]
    },
    "7": {
      summary: [
        "La maggior parte dei pazienti migliora entro <b>48–72 h</b>.",
        "La stabilità clinica guida <b>passaggio e.v.-orale, dimissione e durata</b>.",
        "Nessuna risposta → pensare a <b>patogeno resistente, complicanza o diagnosi errata</b>; rivalutare, non limitarsi ad aggiungere antibiotici.",
        "<b>Nessuna radiografia del torace di controllo di routine</b>: la risoluzione radiologica è più lenta (6 settimane o più). Eseguire imaging solo nei pazienti che soddisfano i criteri di screening per il tumore polmonare."
      ],
      visuals: [
        { type: "timeline", title: "Decorso atteso", points: [
          { at: "Giorno 0", h: "Inizio degli antibiotici", p: "" },
          { at: "48 – 72 h", h: "Miglioramento atteso", p: "Altrimenti: rivalutare", tone: "warn" },
          { at: "≥ 5 giorni", h: "Sospendere quando stabile", p: "E.v. → orale quando stabile e in grado di deglutire", tone: "good" },
          { at: "≥ 6 settimane", h: "La radiografia si normalizza", p: "Più tardi negli anziani" }
        ]},
        { type: "chips", title: "Criteri di stabilità clinica", groups: [
          { h: "", items: ["T ≤37,8 °C", "FC ≤100/min", "FR ≤24/min", "PAS ≥90 mmHg", "SpO₂ ≥90% in aria ambiente", "Stato mentale normale", "In grado di alimentarsi"] }
        ]},
        { type: "compare", title: "Nessun miglioramento a 48–72 h: tre cause", cols: [
          { h: "Patogeno resistente o non coperto", items: ["MRSA, <i>Pseudomonas</i>", "Atipici con il solo β-lattamico", "TB, funghi"] },
          { h: "Complicanza", items: ["Empiema, ascesso polmonare", "Infezione metastatica (endocardite, meningite)", "Febbre da farmaci"] },
          { h: "Diagnosi errata", items: ["Scompenso cardiaco", "Embolia polmonare", "Tumore polmonare", "Polmonite organizzativa, vasculite"] }
        ], caption: "Accertamenti: ripetere le colture, TC del torace, toracentesi se versamento, broncoscopia." }
      ]
    },
    "8": {
      summary: [
        "La vaccinazione riduce il rischio di polmonite: <b>influenza, COVID-19, pneumococco, RSV</b>.",
        "La vaccinazione antinfluenzale previene anche la <b>polmonite batterica post-influenzale</b> (pneumococco, <i>S. aureus</i>).",
        "Altra prevenzione: smettere di fumare, limitare l'alcol, precauzioni contro l'aspirazione nella disfagia."
      ],
      visuals: [
        { type: "table", title: "Vaccini dell'adulto contro la CAP", head: ["Vaccino", "Chi"], rows: [
          ["Influenza", "Raccomandato, ogni anno"],
          ["COVID-19", "Raccomandato"],
          ["Pneumococco", "Adulti ≥50 anni, e adulti più giovani con condizioni di rischio"],
          ["RSV", "Adulti ≥60 anni"]
        ]}
      ]
    }
  }
};
