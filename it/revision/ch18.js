/* Livello di ripasso per il Capitolo 18 — Infezioni sessualmente trasmesse. Fonte: chapters-it/18-*.md */
window.REVISION = window.REVISION || {};
window.REVISION[18] = {
  sections: {
    "1": {
      summary: [
        "<b><i>T. pallidum</i></b>: spirocheta, <b>non coltivabile</b>, non visibile alla colorazione di Gram.",
        "<b><i>N. gonorrhoeae</i></b>: diplococchi gram-negativi intracellulari; abilissimo ad acquisire <b>resistenze</b>.",
        "<b><i>C. trachomatis</i></b>: intracellulare obbligata; sierovar D–K genitali, <b>L1–L3 LGV</b>.",
        "<b><i>M. genitalium</i></b>: <b>senza parete cellulare</b> (β-lattamici inutili), solo NAAT, resistenza ai macrolidi.",
        "<b><i>T. vaginalis</i></b>: l’IST curabile più frequente.",
        "HPV: tipi 6/11 condilomi; <b>16/18</b> tumori. Mpox: orthopoxvirus (clade IIb 2022)."
      ],
      visuals: [
        { type: "cards", title: "Agenti", items: [
          { h: "<i>Treponema pallidum</i>", p: "Spirocheta, non coltivabile", tag: "Sifilide" },
          { h: "<i>Neisseria gonorrhoeae</i>", p: "Diplococco gram-negativo", tag: "Resistenze", tone: "warn" },
          { h: "<i>Chlamydia trachomatis</i>", p: "Intracellulare obbligata; L1–L3 = LGV", tag: "Spesso silente" },
          { h: "<i>Mycoplasma genitalium</i>", p: "Senza parete cellulare", tag: "Resistenza ai macrolidi", tone: "warn" },
          { h: "<i>Trichomonas vaginalis</i>", p: "Protozoo flagellato", tag: "La curabile più frequente" },
          { h: "HPV", p: "6/11 condilomi; 16/18 tumori", tag: "Vaccino" },
          { h: "Mpox", p: "Orthopoxvirus", tag: "Vaccino" }
        ]}
      ]
    },
    "2": {
      summary: [
        "OMS 2020: <b>374 milioni</b> di nuove IST curabili (tricomoniasi &gt; clamidia &gt; gonorrea &gt; sifilide).",
        "Sifilide in gravidanza: &gt;390.000 esiti avversi della gravidanza all’anno.",
        "UE/SEE 2023: gonorrea ~100.000 (<b>+31%</b>), sifilide 41.051 (<b>+13%</b>), clamidia &gt;230.000.",
        "Rischio: età 15–24 anni, nuovi partner, MSM, lavoro sessuale, IST pregressa, HIV o PrEP, chemsex.",
        "<b>Resistenza gonococcica</b>: ceppi sporadici resistenti al ceftriaxone."
      ],
      visuals: [
        { type: "bars", title: "Nuove IST curabili nel mondo, 2020 (milioni)", unit: " mln", max: 156, rows: [
          { label: "Tricomoniasi", v: 156 },
          { label: "Clamidia", v: 129 },
          { label: "Gonorrea", v: 82, tone: "warn" },
          { label: "Sifilide", v: 7.1, tone: "warn" }
        ]},
        { type: "stats", items: [
          { v: "+31%", l: "gonorrea in UE/SEE, 2023 vs 2022" },
          { v: "+13%", l: "sifilide in UE/SEE, 2023 vs 2022" },
          { v: "374 mln", l: "nuove IST curabili, 2020" }
        ]}
      ]
    },
    "3": {
      summary: [
        "<i>T. pallidum</i> si dissemina in poche ore; <b>sifiloma dopo ~3 settimane</b>; endoarterite.",
        "<b>Neurosifilide in qualsiasi stadio</b>; trasmissione verticale massima nella sifilide materna precoce.",
        "Gonococco: pili, Opa, <b>variazione antigenica</b> → nessuna immunità, reinfezioni. Intensa risposta neutrofila.",
        "Clamidia: infiammazione più lieve → <b>silente</b> → cicatrici tubariche (infertilità, gravidanza ectopica).",
        "Entrambe risalgono: <b>MIP</b>, Fitz-Hugh–Curtis, epididimite. Il LGV invade i linfonodi.",
        "HPV: persistenza dei tipi ad alto rischio; <b>E6/E7 inattivano p53/Rb</b>.",
        "Qualsiasi ulcera o infiammazione genitale <b>aumenta la trasmissione dell’HIV</b>."
      ],
      visuals: [
        { type: "timeline", title: "Sifilide non trattata", points: [
          { at: "~3 settimane", h: "Primaria", p: "Sifiloma, guarisce in 3–6 settimane" },
          { at: "Settimane–mesi", h: "Secondaria", p: "Esantema anche palmo-plantare, condilomi piani", tone: "warn" },
          { at: "≤ 12 mesi", h: "Latente precoce", p: "Solo sierologia" },
          { at: "&gt; 12 mesi", h: "Latente tardiva", p: "" },
          { at: "Anni–decenni", h: "Terziaria", p: "Gomme, aortite, neurosifilide tardiva", tone: "warn" }
        ]},
        { type: "note", h: "Neurosifilide", p: "Può comparire in qualsiasi stadio. Precoce: meningite, paralisi dei nervi cranici, sifilide oculare e otologica. Tardiva: paralisi progressiva, tabe dorsale, pupille di Argyll Robertson." }
      ]
    },
    "4": {
      summary: [
        "Sindromi: uretrite, cervicite, vaginite, <b>MIP</b>, epididimite, proctite, ulcera genitale.",
        "<b>Ulcera indurita indolente = sifilide</b> fino a prova contraria; dolorose e multiple = herpes.",
        "<b>Esantema palmo-plantare</b> → sifilide secondaria.",
        "Gonorrea: secrezione purulenta nell’uomo; <b>forme rettali e faringee per lo più silenti</b>; DGI (artrite-dermatite).",
        "Clamidia: per lo più silente; LGV: <b>bubboni</b>, <b>proctite</b> emorragica negli MSM.",
        "Tricomoniasi: secrezione schiumosa giallo-verde, cervice a fragola, pH &gt;4,5.",
        "Condilomi da HPV vs <b>condilomi piani</b> (sifilide). Mpox: pustole ombelicate, proctite dolorosa."
      ],
      visuals: [
        { type: "table", title: "Ulcere genitali", head: ["", "Lesione", "Dolore", "Linfonodi"], rows: [
          ["<b>Sifilide</b>", "Singola, <b>indurita</b>, pulita", "<b>Indolente</b>", "Duri, indolenti"],
          ["<b>Herpes</b>", "Vescicole multiple → ulcere superficiali", "<b>Dolorosa</b>", "Dolenti"],
          ["Ulcera molle", "Profonda, irregolare, purulenta", "Dolorosa", "Dolenti, suppurano"],
          ["LGV", "Piccola, transitoria", "Indolente", "<b>Bubboni dolorosi</b>"],
          ["Mpox", "Pustole ombelicate, croste", "Spesso dolorosa", "Dolenti"]
        ], caption: "Il quadro clinico non è affidabile: testare ogni ulcera." },
        { type: "table", title: "Sindromi", head: ["Sindrome", "Cause"], rows: [
          ["Uretrite", "Gonorrea, clamidia, <i>M. genitalium</i>, <i>Trichomonas</i>"],
          ["Cervicite", "Clamidia, gonorrea, <i>M. genitalium</i>"],
          ["MIP", "Clamidia, gonorrea, <i>M. genitalium</i>, anaerobi"],
          ["Proctite", "Gonorrea, clamidia (LGV), sifilide, HSV, mpox"]
        ]}
      ]
    },
    "5": {
      summary: [
        "Testare i sintomatici e i partner; screening in base al rischio (donne &lt;25 anni, MSM ogni 3–6 mesi, <b>tutte le gravidanze</b>: sifilide, HIV, HBV).",
        "<b>Una IST → testare HIV e sifilide</b>.",
        "<b>NAAT</b> per gonorrea, clamidia, trichomonas, <i>M. genitalium</i>; <b>in ogni sede esposta</b>.",
        "Gram del pus uretrale: diplococchi intracellulari. <b>Coltura + antibiogramma</b> in caso di fallimento.",
        "Sifilide: test <b>treponemici</b> (positivi a vita) + <b>non treponemici</b> (titolo RPR/VDRL = attività).",
        "Rachicentesi se segni neurologici; <b>un VDRL liquorale negativo non esclude</b>. Oculare/otologica = neurosifilide.",
        "La MIP è una <b>diagnosi clinica</b>: soglia bassa per trattare."
      ],
      visuals: [
        { type: "compare", title: "Sierologia della sifilide", cols: [
          { h: "Treponemici", tone: "accent", items: ["TPPA, TPHA, EIA/CLIA, FTA-ABS", "Positivi precocemente", "<b>Positivi a vita</b>", "Confermano l’esposizione"] },
          { h: "Non treponemici", tone: "good", items: ["RPR, VDRL", "Titolo quantitativo", "Calano dopo la terapia", "<b>Monitorano la risposta</b>"] }
        ], caption: "Falsi negativi dei non treponemici: primaria molto precoce, effetto prozona." },
        { type: "chips", title: "Chi sottoporre a screening", groups: [
          { h: "", items: ["Donne sessualmente attive &lt;25 anni", "MSM (ogni 3–6 mesi se ad alto rischio / PrEP)", "Ogni gravidanza", "Persone con HIV", "Partner", "Qualsiasi nuova IST → HIV + sifilide"] }
        ]}
      ]
    },
    "6": {
      summary: [
        "Trattare lo stesso giorno; empiricamente se sintomatici; astinenza ≥7 giorni; trattare i partner.",
        "<b>Gonorrea: ceftriaxone i.m.</b> (+ doxiciclina se la clamidia non è esclusa). <b>Niente FQ né tetracicline empiriche</b>.",
        "<b>Clamidia: doxiciclina 7 giorni</b> (azitromicina in gravidanza). <b>LGV: 21 giorni</b>.",
        "<b>Sifilide: penicillina benzatina</b>: 1 dose nella precoce, 3 dosi settimanali nella tardiva; neurosifilide penicillina e.v. 10–14 gg.",
        "<b>Gravidanza + allergia → desensibilizzare</b>. L’azitromicina non si usa più per la sifilide.",
        "Jarisch–Herxheimer entro 24 h: <b>non è un’allergia</b>.",
        "Trichomonas: metronidazolo (7 gg nelle donne). <i>M. genitalium</i>: <b>guidata dalla resistenza</b> (doxiciclina → azitromicina o moxifloxacina). MIP: ceftriaxone + doxiciclina + metronidazolo."
      ],
      visuals: [
        { type: "table", title: "Terapia in sintesi", head: ["Infezione", "Terapia"], rows: [
          ["Gonorrea", "Ceftriaxone i.m. dose singola"],
          ["Clamidia", "Doxiciclina 7 giorni"],
          ["LGV", "Doxiciclina 21 giorni"],
          ["Sifilide precoce", "Penicillina G benzatina × 1"],
          ["Sifilide latente tardiva", "Penicillina G benzatina settimanale × 3"],
          ["Neurosifilide, oculare, otologica", "Penicillina G acquosa e.v. 10–14 giorni"],
          ["Tricomoniasi", "Metronidazolo (7 giorni nelle donne)"],
          ["<i>M. genitalium</i>", "Doxiciclina → azitromicina o moxifloxacina in base alla resistenza"],
          ["MIP", "Ceftriaxone + doxiciclina + metronidazolo"]
        ]},
        { type: "note", h: "Reazione di Jarisch–Herxheimer", p: "Febbre, cefalea, mialgie entro 24 ore dall’inizio della terapia, soprattutto nella sifilide precoce. Liberazione di prodotti treponemici, non allergia; non ritardare la terapia, nemmeno in gravidanza." }
      ]
    },
    "7": {
      summary: [
        "Gonorrea: test di guarigione (faringeo negli USA, tutti in Europa); ritestare a <b>3 mesi</b>. Clamidia: test di guarigione solo in gravidanza.",
        "Non usare il NAAT per il test di guarigione troppo presto (DNA di microrganismi morti).",
        "Sifilide: <b>stesso RPR/VDRL</b> a 6 e 12 mesi; adeguata = <b>calo di quattro volte</b>. Aumento di quattro volte = fallimento/reinfezione. Serofast ≠ fallimento.",
        "Partner: 60 giorni (gonorrea, clamidia); sifilide in base allo stadio; trattare presuntivamente i partner della sifilide precoce."
      ],
      visuals: [
        { type: "compare", title: "Titolo della sifilide dopo la terapia", cols: [
          { h: "Adeguata", tone: "good", items: ["Calo di quattro volte (ad es. 1:32 → 1:8)", "Entro 6–12 mesi (precoce)"] },
          { h: "Fallimento / reinfezione", tone: "warn", items: ["Aumento di quattro volte persistente", "Segni persistenti", "Verificare HIV, liquor, ritrattare"] },
          { h: "Serofast", items: ["Titolo basso stabile", "Follow-up, non ritrattamento"] }
        ]}
      ]
    },
    "8": {
      summary: [
        "<b>Vaccino anti-HPV</b> (9-valente) per tutti gli adolescenti prima dell’inizio dell’attività sessuale (Italia 11–12 anni).",
        "Vaccini anti-HBV, anti-HAV, <b>anti-mpox</b> (MVA-BN); PrEP per HIV; preservativo.",
        "Il 4CMenB dà solo una protezione crociata parziale contro la gonorrea.",
        "<b>Doxi-PEP</b>: una dose entro 72 h dopo un rapporto non protetto; per <b>MSM e donne transgender con un’IST batterica nell’ultimo anno</b>; riduce clamidia e sifilide molto più della gonorrea; preoccupazione: <b>resistenze</b>."
      ],
      visuals: [
        { type: "bars", title: "Doxi-PEP: riduzione negli utenti di PrEP", unit: "%", max: 100, rows: [
          { label: "Clamidia", v: 88, tone: "good" },
          { label: "Sifilide", v: 87, tone: "good" },
          { label: "Gonorrea", v: 55, tone: "warn" }
        ]},
        { type: "table", title: "Vaccini contro le IST", head: ["Vaccino", "Chi"], rows: [
          ["HPV 9-valente", "Adolescenti di tutti i sessi; recupero per MSM, HIV"],
          ["Epatite B", "Tutti i non vaccinati a rischio sessuale"],
          ["Epatite A", "MSM, persone che usano droghe"],
          ["Mpox (MVA-BN)", "Pre-esposizione ad alto rischio; post-esposizione ≤4 giorni"]
        ]}
      ]
    }
  }
};
