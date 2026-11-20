/* Livello di ripasso per il Capitolo 19 — Infezioni fungine invasive. Fonte: chapters-it/19-*.md */
window.REVISION = window.REVISION || {};
window.REVISION[19] = {
  sections: {
    "1": {
      summary: [
        "<b><i>Aspergillus</i></b>: <b>muffa</b> ambientale; conidi inalati (2–3 µm); <b>ife sottili settate, ramificazione a 45°</b>.",
        "<i>A. fumigatus</i> il più frequente; <b><i>A. terreus</i> resistente all’amfotericina B</b>; le specie criptiche sono spesso resistenti agli azoli.",
        "Stesso fungo, malattie diverse: <b>ABPA</b> (asma), <b>aspergilloma</b> (cavità), <b>IPA</b> (immunocompromessi).",
        "<b>Mucorales</b>: ife larghe, nastriformi, pauci-settate, ramificazione a 90°; <b>voriconazolo inattivo</b>.",
        "<b><i>Candida</i></b>: lieviti della nostra flora. <i>C. albicans</i> la più frequente.",
        "<i>C. glabrata</i> ridotta sensibilità al fluconazolo; <b><i>C. krusei</i> resistente al fluconazolo</b>; <i>C. parapsilosis</i> cateteri; <b><i>C. auris</i> MDR, focolai</b>."
      ],
      visuals: [
        { type: "compare", title: "Le ife al microscopio", cols: [
          { h: "<i>Aspergillus</i>", tone: "accent", items: ["Sottili (3–6 µm)", "Settate regolarmente", "Ramificazione ad angolo acuto (45°)"] },
          { h: "Mucorales", tone: "warn", items: ["Larghe, nastriformi", "Pauci-settate", "Ramificazione ad angolo retto", "Voriconazolo inattivo"] }
        ]},
        { type: "table", title: "Specie di <i>Candida</i>", head: ["Specie", "Da ricordare"], rows: [
          ["<i>C. albicans</i>", "La più frequente; di solito sensibile al fluconazolo"],
          ["<i>C. glabrata</i>", "Ridotta sensibilità al fluconazolo; pazienti anziani"],
          ["<i>C. parapsilosis</i>", "Cute, mani, cateteri, NPT, neonati"],
          ["<i>C. tropicalis</i>", "Neutropenia"],
          ["<i>C. krusei</i>", "<b>Intrinsecamente resistente al fluconazolo</b>"],
          ["<i>C. auris</i>", "<b>Multiresistente</b>, superfici, focolai"]
        ]},
        { type: "compare", title: "<i>Aspergillus</i>: un fungo, tre malattie", cols: [
          { h: "ABPA", items: ["Asma, fibrosi cistica", "Ipersensibilità"] },
          { h: "Aspergilloma / cronica", items: ["Cavità preesistente", "Colonizzazione, invasione lenta"] },
          { h: "Invasiva (IPA)", tone: "warn", items: ["Immunocompromessi, terapia intensiva", "Invasione dei tessuti e dei vasi"] }
        ]}
      ]
    },
    "2": {
      summary: [
        "Ospiti dell’IPA: <b>neutropenia prolungata</b> (&gt;10 giorni), LAM/SMD, <b>HSCT allogenico + GVHD</b>, corticosteroidi, inibitori di BTK, trapianto di polmone, CGD.",
        "Terapia intensiva senza fattori classici: <b>BPCO in terapia steroidea, cirrosi, influenza grave, COVID-19</b>.",
        "<i>A. fumigatus</i> resistente agli azoli (<b>TR34/L98H</b>) selezionato dai fungicidi agricoli → presente in pazienti mai trattati con azoli.",
        "<i>Candida</i>: tra le prime cause di infezione ematica ospedaliera; mortalità ~30–40%; spostamento verso le non-<i>albicans</i>.",
        "Rischio di candidosi invasiva: <b>CVC, antibiotici ad ampio spettro, NPT, chirurgia addominale/deiscenza</b>, lunga degenza in terapia intensiva, colonizzazione multifocale.",
        "<b>Candida score</b>: NPT 1, chirurgia 1, colonizzazione multifocale 1, sepsi grave 2; &gt;2,5 = alto rischio."
      ],
      visuals: [
        { type: "compare", title: "Chi sviluppa cosa", cols: [
          { h: "Aspergillosi invasiva", tone: "warn", items: ["Neutropenia prolungata", "HSCT allogenico, GVHD", "Corticosteroidi ad alte dosi", "Trapianto di polmone", "Influenza grave, COVID-19", "BPCO in terapia steroidea, cirrosi"] },
          { h: "Candidosi invasiva", tone: "accent", items: ["Catetere venoso centrale", "Antibiotici ad ampio spettro", "Nutrizione parenterale", "Chirurgia addominale, deiscenza", "Lunga degenza in terapia intensiva, dialisi", "Colonizzazione multifocale"] }
        ]},
        { type: "table", title: "Candida score", head: ["Voce", "Punti"], rows: [
          ["Nutrizione parenterale totale", "1"],
          ["Chirurgia", "1"],
          ["Colonizzazione multifocale", "1"],
          ["Sepsi grave", "2"]
        ], caption: "&gt;2,5 = rischio più alto; un punteggio basso ha un alto valore predittivo negativo." }
      ]
    },
    "3": {
      summary: [
        "IPA: <b>i macrofagi uccidono i conidi, i neutrofili uccidono le ife</b>.",
        "Neutropenia → <b>angioinvasione</b> → infarto = nodulo + emorragia = <b>segno dell’alone</b>; ripresa dei neutrofili → <b>segno della falce d’aria</b>.",
        "Non neutropenici: invasione delle vie aeree, meno angioinvasiva → <b>GM sierico spesso negativo</b>.",
        "Influenza/COVID-19 danneggiano l’epitelio delle vie aeree → tracheobronchite.",
        "<i>Candida</i> entra nel sangue dall’<b>intestino</b> (mucosa danneggiata) o dalla <b>cute attraverso il catetere</b> (biofilm).",
        "I neutrofili proteggono dalla candidosi invasiva; i Th17 da quella mucosa (mughetto nei deficit dei linfociti T).",
        "Localizzazioni secondarie: <b>occhio</b>, rene, fegato/milza, valvole, ossa."
      ],
      visuals: [
        { type: "flow", title: "IPA nell’ospite neutropenico", steps: [
          { h: "Conidi inalati", p: "Raggiungono gli alveoli" },
          { h: "Germinano in ife", p: "Nessun neutrofilo per ucciderle" },
          { h: "Angioinvasione", p: "Trombosi, infarto emorragico → segno dell’alone", tone: "warn" },
          { h: "Ripresa dei neutrofili", p: "La necrosi si separa → falce d’aria, emottisi" }
        ]},
        { type: "compare", title: "Come <i>Candida</i> raggiunge il sangue", cols: [
          { h: "Dall’intestino", items: ["Antibiotici → sovracrescita", "Mucosa danneggiata (chirurgia, mucosite)"] },
          { h: "Dalla cute", tone: "warn", items: ["Colonizzazione del catetere", "Biofilm", "<i>C. parapsilosis</i>, mani"] }
        ]}
      ]
    },
    "4": {
      summary: [
        "IPA: <b>febbre neutropenica persistente nonostante gli antibiotici</b>; tosse, dolore pleuritico, emottisi.",
        "I corticosteroidi attenuano la febbre; in terapia intensiva: <b>peggioramento respiratorio nonostante gli antibiotici</b>.",
        "Altre forme: tracheobronchite, sinusite invasiva (necrosi nera), cervello.",
        "Candidemia = <b>sepsi che non risponde agli antibiotici</b>; simile alla sepsi batterica.",
        "Occhio (spesso silente all’inizio), addome, <b>epatosplenica</b> (febbre alla ripresa dei neutrofili, lesioni a occhio di bue), endocardite, osso.",
        "<b>Colonizzazione non è infezione</b>: <i>Candida</i> nell’espettorato/BAL, candiduria asintomatica → non trattare."
      ],
      visuals: [
        { type: "cards", title: "Forme di candidosi invasiva", items: [
          { h: "Candidemia", p: "Sepsi che non risponde agli antibiotici", tag: "Mai un contaminante", tone: "warn" },
          { h: "Oculare", p: "Lesioni retiniche bianche cotonose", tag: "Fondo dell’occhio" },
          { h: "Intra-addominale", p: "Dopo chirurgia, perforazione, deiscenza", tag: "Drenare" },
          { h: "Epatosplenica", p: "Febbre alla ripresa dei neutrofili, lesioni a occhio di bue", tag: "Mesi di terapia" },
          { h: "Endocardite", p: "Protesi valvolari, uso di droghe e.v.; grandi vegetazioni", tag: "Chirurgia" },
          { h: "Osteoarticolare", p: "Spondilodiscite settimane–mesi dopo", tag: "" }
        ]},
        { type: "note", h: "Non trattare la colonizzazione", p: "<i>Candida</i> nell’espettorato o nel BAL non significa quasi mai polmonite; la candiduria asintomatica è di solito colonizzazione del catetere." }
      ]
    },
    "5": {
      summary: [
        "IPA: <b>fattore dell’ospite + TC + micologia</b> → accertata / probabile / possibile.",
        "<b>TC del torace</b>, non radiografia. <b>Alone precoce, falce d’aria tardiva; alone invertito → mucormicosi</b>.",
        "<b>Galattomannano</b>: il sierico rende meglio nella neutropenia; <b>GM su BAL più sensibile</b>; la profilassi riduce la sensibilità.",
        "Il β-D-glucano è panfungino: non è un criterio per l’IPA.",
        "Candidosi invasiva: le emocolture rilevano solo il <b>~50%</b>; <b>il β-D-glucano ha alto VPN</b> (falsi + con dialisi, albumina, IVIG, garze); T2Candida.",
        "Identificazione di specie + antimicogramma per ogni isolato ematico."
      ],
      visuals: [
        { type: "ladder", title: "Categorie EORTC/MSGERC", steps: [
          { h: "Possibile", p: "Fattore dell’ospite + criterio clinico (TC)" },
          { h: "Probabile", p: "Fattore dell’ospite + criterio clinico + micologia (GM, PCR, coltura)", tone: "accent" },
          { h: "Accertata", p: "Istologia con danno tissutale, o coltura da sito sterile", tone: "warn" }
        ]},
        { type: "table", title: "Segni TC", head: ["Segno", "Significato"], rows: [
          ["<b>Alone</b>", "Nodulo + vetro smerigliato; precoce, neutropenico"],
          ["<b>Falce d’aria</b>", "Tardiva, alla ripresa dei neutrofili"],
          ["<b>Alone invertito</b>", "Pensare alla <b>mucormicosi</b>"]
        ]},
        { type: "compare", title: "Biomarcatori fungini", cols: [
          { h: "Galattomannano", tone: "accent", items: ["Specifico per <i>Aspergillus</i>", "Siero: pazienti neutropenici", "BAL: più sensibile, terapia intensiva", "Meno sensibile in profilassi"] },
          { h: "β-D-glucano", items: ["Panfungino (non Mucorales)", "Alto VPN per la candidosi", "Falsi + dialisi, albumina, IVIG, garze"] }
        ]}
      ]
    },
    "6": {
      summary: [
        "<b>IPA, prima linea: voriconazolo, isavuconazolo o posaconazolo</b>; alternativa <b>amfotericina B liposomiale</b>.",
        "<b>TDM</b> per voriconazolo e posaconazolo; molte interazioni CYP3A4. <b>Il fluconazolo non ha attività anti-<i>Aspergillus</i></b>.",
        "Ridurre l’immunosoppressione; la ripresa dei neutrofili è il predittore più forte. Durata ≥6–12 settimane.",
        "<b>Candidemia, prima linea: echinocandina</b>; de-escalation a <b>fluconazolo dopo 5–7 giorni</b> se stabile, sensibile, colture negative.",
        "<b>Rimuovere il CVC</b>; drenare le raccolte. <b>14 giorni dalla prima emocoltura negativa</b>.",
        "<b>Le echinocandine non raggiungono occhio e urine</b> → fluconazolo per endoftalmite e cistite.",
        "Nessun antifungino empirico di routine in terapia intensiva."
      ],
      visuals: [
        { type: "compare", title: "Terapia di prima linea", cols: [
          { h: "Aspergillosi invasiva", tone: "warn", items: ["Voriconazolo / isavuconazolo / posaconazolo", "Alternativa: amfotericina B liposomiale", "TDM (vori, posa)", "≥6–12 settimane"] },
          { h: "Candidemia", tone: "accent", items: ["Echinocandina", "De-escalation a fluconazolo a 5–7 gg", "Rimuovere il catetere", "14 gg dalla prima emocoltura negativa"] }
        ]},
        { type: "table", title: "Classi di antifungini", head: ["Classe", "Farmaci", "Da ricordare"], rows: [
          ["Triazoli attivi sulle muffe", "Voriconazolo, isavuconazolo, posaconazolo", "Interazioni CYP3A4; vori: vista, fegato, cute"],
          ["Fluconazolo", "", "Solo lieviti; <b>niente <i>Aspergillus</i></b>"],
          ["Polieni", "Amfotericina B liposomiale", "Anche Mucorales; reni, K⁺, Mg²⁺"],
          ["Echinocandine", "Caspofungin, micafungin, anidulafungin, rezafungin", "Candidemia; scarsa penetrazione in occhio/urine"]
        ]},
        { type: "table", title: "Quando la scelta cambia", head: ["Situazione", "Approccio"], rows: [
          ["<i>C. krusei</i>", "Mai fluconazolo"],
          ["<i>C. glabrata</i>", "Echinocandina; fluconazolo solo se sensibile"],
          ["<i>C. auris</i>", "Echinocandina + precauzioni da contatto"],
          ["Endoftalmite", "Fluconazolo / voriconazolo ± intravitreale, ≥4–6 settimane"],
          ["Cistite sintomatica", "Fluconazolo"]
        ]}
      ]
    },
    "7": {
      summary: [
        "IPA: TC a ~2 settimane; <b>le lesioni possono crescere nei primi 7–10 giorni</b> (non è fallimento); GM seriati; TDM, fegato, QT.",
        "Fallimento: verificare i livelli, le resistenze, i <b>Mucorales</b>; cambiare classe.",
        "Profilassi secondaria prima di ulteriore immunosoppressione.",
        "Candidemia: <b>emocolture fino alla negativizzazione</b>; persistente → catetere, ascesso, tromboflebite, endocardite.",
        "<b>Fondo dell’occhio in midriasi</b> (prima settimana; dopo la ripresa se neutropenico); ecocardiogramma se possibile endocardite."
      ],
      visuals: [
        { type: "chips", title: "Checklist della candidemia", groups: [
          { h: "", items: ["Rimuovere il catetere", "Ripetere le emocolture fino alla negativizzazione", "Fondo dell’occhio in midriasi", "Ecocardiogramma se necessario", "Specie + antimicogramma", "De-escalation a 5–7 giorni", "14 giorni dalla prima emocoltura negativa"] }
        ]}
      ]
    },
    "8": {
      summary: [
        "<b>Nessun vaccino</b>.",
        "Profilassi: <b>posaconazolo</b> nell’induzione di LAM/SMD e nell’HSCT con GVHD; fluconazolo pre-attecchimento; non di routine in terapia intensiva.",
        "Infezione breakthrough in profilassi attiva sulle muffe → pensare ai Mucorales.",
        "<i>Aspergillus</i>: stanze HEPA, protezione durante i lavori edili. <i>Candida</i>: bundle per i cateteri, igiene delle mani.",
        "<i>C. auris</i>: screening, precauzioni da contatto, pulizia ambientale, notifica."
      ],
      visuals: [
        { type: "table", title: "Profilassi antifungina", head: ["Popolazione", "Farmaco"], rows: [
          ["Induzione di LAM/SMD", "Posaconazolo"],
          ["HSCT allogenico con GVHD", "Posaconazolo"],
          ["HSCT allogenico, pre-attecchimento", "Fluconazolo (nessuna copertura sulle muffe)"],
          ["Trapianto di polmone", "Amfotericina B inalatoria o triazolo"],
          ["Terapia intensiva", "Non di routine"]
        ]}
      ]
    }
  }
};
