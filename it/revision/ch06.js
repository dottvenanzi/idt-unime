/* Livello di ripasso per il Capitolo 6 — Polmoniti virali (influenza, COVID-19, RSV). Fonte: chapters-it/06-viral-pneumonia.md */
window.REVISION = window.REVISION || {};
window.REVISION[6] = {
  sections: {
    "1": {
      summary: [
        "Sono tutti e tre <b>virus a RNA con envelope</b> con epidemie invernali.",
        "<b>Influenza</b>: −ssRNA, <b>8 segmenti</b>; l'HA lega l'acido sialico, la NA libera i virioni. <b>Drift</b> (mutazioni puntiformi) → epidemie annuali; <b>shift</b> (riassortimento, solo influenza A) → pandemie.",
        "<b>SARS-CoV-2</b>: +ssRNA, ≈30 kb; la spike lega <b>ACE2</b>, attivata da <b>TMPRSS2</b>. I discendenti di Omicron sfuggono agli anticorpi.",
        "<b>RSV</b>: −ssRNA; la <b>proteina F</b> (conformazione di prefusione) è il bersaglio di tutti i vaccini e anticorpi monoclonali; G media l'attacco.",
        "Influenza aviaria A(H5N1) 2.3.4.4b: uccelli, mammiferi, bovini da latte negli USA; rari casi umani, nessuna trasmissione sostenuta."
      ],
      visuals: [
        { type: "table", title: "Tre virus a confronto", head: ["", "Influenza", "SARS-CoV-2", "RSV"], rows: [
          ["Famiglia", "<i>Orthomyxoviridae</i>", "<i>Coronaviridae</i>", "<i>Pneumoviridae</i>"],
          ["Genoma", "−ssRNA, 8 segmenti", "+ssRNA, ≈30 kb", "−ssRNA"],
          ["Proteina chiave", "HA (acido sialico), NA", "Spike → ACE2", "F (fusione, sincizi), G"],
          ["Evoluzione", "Drift + shift", "Mutazione, ricombinazione, evasione immunitaria", "Poche variazioni in F"],
          ["Bersagli dei farmaci", "NA (oseltamivir), endonucleasi PA (baloxavir)", "Mpro (nirmatrelvir), RdRp (remdesivir)", "F (nirsevimab: prevenzione)"]
        ]},
        { type: "compare", title: "Drift vs shift", cols: [
          { h: "Drift antigenico", tone: "accent", items: ["Mutazioni puntiformi in HA/NA (nessuna correzione di bozze)", "Influenza A e B", "Epidemie annuali", "Vaccino aggiornato ogni anno"] },
          { h: "Shift antigenico", tone: "warn", items: ["Riassortimento di segmenti in una stessa cellula (ad es. suino)", "Solo influenza A", "Nuova HA: nessuna immunità nella popolazione", "Pandemie: 1957, 1968, 2009"] }
        ]}
      ]
    },
    "2": {
      summary: [
        "I virus causano <b>¼–⅓ delle CAP dell'adulto</b>.",
        "Influenza: ≈<b>290.000–650.000</b> decessi respiratori all'anno. COVID-19: &gt;7 milioni di decessi notificati; ora endemico. RSV: ≈100.000 decessi nei bambini &lt;5 anni (2019).",
        "Incubazione: influenza <b>1–4 giorni</b>, SARS-CoV-2 <b>2–14 (≈3 con Omicron)</b>, RSV <b>2–8</b>.",
        "Italia: influenza dicembre–marzo; <b>RSV ottobre/novembre–marzo, con picco più precoce</b>; ondate di COVID-19 tutto l'anno.",
        "Negli anziani e negli adulti ad alto rischio l'RSV pesa all'incirca quanto l'influenza non pandemica."
      ],
      visuals: [
        { type: "ranges", title: "Periodo di incubazione (giorni, in scala)", max: 14, ticks: [0, 2, 4, 6, 8, 10, 12, 14], rows: [
          { label: "Influenza", from: 1, to: 4 },
          { label: "RSV", from: 2, to: 8 },
          { label: "SARS-CoV-2", from: 2, to: 14, note: "≈3 con Omicron;" }
        ]},
        { type: "table", title: "Trasmissione e stagionalità", head: ["", "Influenza", "SARS-CoV-2", "RSV"], rows: [
          ["Via", "Droplet, aerosol", "Aerosol (in ambienti chiusi)", "Grandi droplet, mani, superfici"],
          ["Contagiosità", "Da 1 giorno prima → 5–7 giorni dopo l'esordio", "Attorno all'esordio", "3–8 giorni; fino a 4 settimane nei lattanti"],
          ["Stagione (Italia)", "Dic – mar", "Tutto l'anno", "Ott/nov – mar (picco più precoce)"]
        ]},
        { type: "compare", title: "Chi sviluppa malattia grave", cols: [
          { h: "Influenza", items: ["≥65 anni, &lt;5 anni", "Gravidanza (+2 settimane dopo il parto)", "Malattie croniche, BMI ≥40", "Bambini in terapia con aspirina"] },
          { h: "COVID-19", items: ["Età avanzata (il fattore più forte)", "Immunodepressione (anti-CD20, trapianto)", "Non vaccinati", "Obesità, diabete"] },
          { h: "RSV", items: ["Lattanti &lt;6 mesi, prematuri", "Cardiopatie congenite, BPD", "Adulti ≥60, BPCO, scompenso cardiaco", "HSCT, trapianto di polmone"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "L'<b>influenza umana</b> lega l'acido sialico α2,6 (vie aeree superiori: si diffonde bene); quella <b>aviaria</b> lega l'α2,3 (vie aeree inferiori: rara ma grave).",
        "<b>Cap-snatching</b> da parte della polimerasi virale (bersaglio del baloxavir); la NA libera i virioni (bersaglio dell'oseltamivir).",
        "<b>Il COVID-19 ha due fasi</b>: virale (1ª settimana, antivirali) → infiammatoria (2ª settimana, steroidi e immunomodulatori). Danno endoteliale → trombosi.",
        "<b>Ipossiemia silente</b>: misurare la saturazione.",
        "<b>RSV</b>: sincizi; bronchiolite da necrosi, tappi di muco e vie aeree strette del lattante. Reinfezioni per tutta la vita.",
        "L'influenza danneggia l'epitelio → <b>polmonite batterica secondaria</b> (pneumococco, <i>S. aureus</i>/MRSA). Terapia intensiva: <b>IAPA/CAPA</b>."
      ],
      visuals: [
        { type: "flow", dir: "row", title: "COVID-19: due fasi, due tipi di farmaci", steps: [
          { h: "Fase virale", p: "1ª settimana: replicazione elevata → antivirali" },
          { h: "Fase infiammatoria", p: "2ª settimana: IL-6, ARDS → steroidi, anti-IL-6R, baricitinib", tone: "warn" }
        ]},
        { type: "compare", title: "Influenza: recettore umano vs aviario", cols: [
          { h: "Virus umani", items: ["Acido sialico α2,6", "Vie aeree superiori", "Efficiente trasmissione interumana"] },
          { h: "Virus aviari (H5N1)", tone: "warn", items: ["Acido sialico α2,3", "Vie aeree inferiori, congiuntiva", "Rari, poco trasmissibili, gravi"] }
        ]},
        { type: "cards", title: "Coinfezioni da ricordare", items: [
          { h: "Batterica post-influenzale", p: "Pneumococco, <i>S. aureus</i> (CA-MRSA: necrotizzante), <i>S. pyogenes</i>", tag: "Decorso bifasico", tone: "warn" },
          { h: "COVID-19", p: "Coinfezione batterica all'ingresso poco frequente; VAP frequente nei ventilati", tag: "Niente antibiotici di routine" },
          { h: "IAPA / CAPA", p: "Pazienti in terapia intensiva, anche senza neutropenia; gli steroidi aumentano il rischio", tag: "Galattomannano su BAL" }
        ]}
      ]
    },
    "4": {
      summary: [
        "Influenza: febbre alta a esordio <b>brusco</b>, mialgie, prostrazione, tosse secca. COVID-19: esordio graduale o brusco; polmonite nella <b>seconda settimana</b>. RSV: rinorrea, tosse, <b>respiro sibilante</b>.",
        "Polmonite influenzale: <b>virale primaria</b> (primi giorni, ARDS), <b>batterica secondaria</b> (bifasica, giorni 4–14), o mista.",
        "Rischio di IMA ≈<b>6×</b> nei primi 7 giorni dopo l'influenza.",
        "Gravità del COVID-19 (OMS): <b>grave = SpO₂ &lt;90%, FR &gt;30 o distress respiratorio</b>; critico = ARDS, sepsi, ventilazione.",
        "Bambini: MIS-C 2–6 settimane dopo il COVID-19. Lattanti con RSV: bronchiolite, l'<b>apnea</b> può essere il primo segno."
      ],
      visuals: [
        { type: "timeline", title: "Polmonite influenzale: quando compare", points: [
          { at: "Giorni 1–3", h: "Virale primaria", p: "Dispnea progressiva, infiltrati bilaterali, ARDS" },
          { at: "Giorni 4–14", h: "Batterica secondaria", p: "Miglioramento, poi nuova febbre, espettorato purulento, consolidamento lobare", tone: "warn" },
          { at: "Primi 7 giorni", h: "Infarto miocardico", p: "Rischio ≈ 6×" }
        ]},
        { type: "table", title: "Gravità del COVID-19 secondo l'OMS", head: ["Categoria", "Definizione"], rows: [
          ["Non grave", "Nessuna delle condizioni sotto (può includere polmonite senza ipossiemia)"],
          ["<b>Grave</b>", "SpO₂ &lt;90% in aria ambiente, o FR &gt;30, o distress respiratorio grave"],
          ["<b>Critico</b>", "ARDS, sepsi, shock, ventilazione (invasiva o non invasiva), vasopressori"]
        ]}
      ]
    },
    "5": {
      summary: [
        "Sospettare: stagione epidemica, ILI poi ipossiemia, <b>vetro smerigliato bilaterale</b>, linfopenia, cluster.",
        "<b>RT-PCR / NAAT</b> (multiplex) è il test di scelta; campioni delle basse vie respiratorie nei pazienti intubati.",
        "Test antigenici rapidi: veloci, ma <b>un negativo non esclude</b> l'infezione.",
        "<b>Non aspettare i risultati</b> per iniziare l'oseltamivir nei pazienti ricoverati o ad alto rischio.",
        "TC nel COVID-19: <b>GGO bilaterali, periferiche, basali</b>, crazy paving. Influenza: nuovo consolidamento lobare o cavitazione → batterica (MRSA).",
        "Esposizione aviaria (uccelli, bovini da latte): notificare alle autorità sanitarie, precauzioni per via aerea + da contatto."
      ],
      visuals: [
        { type: "compare", title: "Test", cols: [
          { h: "RT-PCR / NAAT", tone: "good", items: ["Test di scelta", "Alta sensibilità e specificità", "Può restare positiva per settimane (SARS-CoV-2)"] },
          { h: "Antigenico rapido", tone: "warn", items: ["Veloce, al letto del paziente", "Sensibilità più bassa", "Negativo ≠ escluso"] },
          { h: "Non per la diagnosi acuta", items: ["Coltura virale", "Sierologia"] }
        ]},
        { type: "table", title: "Imaging tipico", head: ["", "Quadro"], rows: [
          ["COVID-19", "Vetro smerigliato bilaterale periferico e basale, crazy paving; TC più sensibile"],
          ["Influenza", "GGO bilaterali, consolidamenti a chiazze; cavitazione → MRSA"],
          ["RSV (lattante)", "Iperinsufflazione, ispessimento peribronchiale; radiografia non di routine"],
          ["IAPA / CAPA", "Noduli, cavitazioni, tracheobronchite; galattomannano su BAL"]
        ]}
      ]
    },
    "6": {
      summary: [
        "Ossigeno, HFNO/NIV, pronazione da sveglio (COVID-19), ventilazione protettiva. Antibiotici solo se si sospetta una coinfezione batterica. <b>Niente aspirina nei bambini</b>.",
        "<b>Influenza → oseltamivir il prima possibile</b>, senza aspettare i test; ricoverati e gravi <b>indipendentemente dal tempo dall'esordio</b>. Baloxavir per le forme non gravi. <b>Niente corticosteroidi</b>.",
        "<b>COVID-19 non grave ad alto rischio → nirmatrelvir-ritonavir entro 5 giorni</b> (controllare le interazioni!); remdesivir per 3 giorni come alternativa.",
        "<b>COVID-19 grave/critico → desametasone + tocilizumab/sarilumab o baricitinib</b>. Niente steroidi senza necessità di ossigeno.",
        "RSV: <b>terapia di supporto</b>. Bronchiolite del lattante: niente salbutamolo, adrenalina, steroidi né antibiotici. Palivizumab e nirsevimab prevengono, non curano."
      ],
      visuals: [
        { type: "ladder", title: "Terapia del COVID-19 per gravità (OMS)", steps: [
          { h: "Non grave, basso rischio", p: "Solo sintomatica; niente steroidi" },
          { h: "Non grave, alto rischio", p: "Nirmatrelvir-ritonavir ≤5 giorni; alternative remdesivir (≤7 giorni), molnupiravir (non nell'UE)" },
          { h: "Grave", p: "Desametasone + anti-IL-6R o baricitinib; remdesivir (condizionale)" },
          { h: "Critico", p: "Desametasone + anti-IL-6R o baricitinib", tone: "warn" }
        ], caption: "Tromboprofilassi in tutti i ricoverati; anticoagulazione terapeutica solo per trombosi confermata." },
        { type: "chips", title: "Nirmatrelvir-ritonavir: controllare le interazioni (CYP3A4)", groups: [
          { h: "Aumentati dal ritonavir", items: ["Tacrolimus, ciclosporina, everolimus", "Amiodarone", "Simvastatina, lovastatina", "Rivaroxaban, ticagrelor", "Alcuni antiepilettici, sedativi"] },
          { h: "Ne causano il fallimento", items: ["Rifampicina", "Carbamazepina", "Iperico"] }
        ]},
        { type: "compare", title: "Influenza vs COVID-19: steroidi", cols: [
          { h: "Polmonite influenzale", tone: "warn", items: ["Niente corticosteroidi (mortalità più alta, IAPA)", "Oseltamivir sempre in ospedale"] },
          { h: "COVID-19", tone: "accent", items: ["Niente steroidi se non serve ossigeno", "Desametasone se in ossigenoterapia o ventilato"] }
        ]}
      ]
    },
    "7": {
      summary: [
        "Febbre persistente o ricorrente → <b>sovrainfezione batterica, tromboembolia, IAPA/CAPA</b>.",
        "La radiologia è in ritardo; dopo COVID-19 grave/ARDS: PFR, DLCO, test del cammino in 6 minuti, riabilitazione.",
        "<b>Long COVID</b> (OMS): inizia entro 3 mesi, dura ≥2 mesi, nessun'altra spiegazione. Astenia, malessere post-sforzo, nebbia mentale, POTS. La vaccinazione riduce il rischio.",
        "Dopo bronchiolite da RSV: respiro sibilante ricorrente; la tosse può durare 2–4 settimane.",
        "Sfruttare il follow-up per vaccinare e far smettere di fumare."
      ],
      visuals: [
        { type: "compare", title: "Condizione post-COVID-19", cols: [
          { h: "Definizione", tone: "accent", items: ["Inizia ≤3 mesi dopo l'infezione", "Dura ≥2 mesi", "Nessuna diagnosi alternativa"] },
          { h: "Sintomi", items: ["Astenia, malessere post-sforzo", "Dispnea", "Nebbia mentale", "Palpitazioni, POTS", "Sonno, umore"] },
          { h: "Gestione", items: ["Basata sui sintomi, multidisciplinare", "Dosare le energie (pacing)", "Nessun farmaco di efficacia dimostrata"] }
        ]}
      ]
    },
    "8": {
      summary: [
        "Isolamento: <b>influenza droplet</b>; <b>SARS-CoV-2 per via aerea + da contatto</b>; <b>RSV da contatto + droplet</b>; aviaria: per via aerea + da contatto + occhi.",
        "Vaccino antinfluenzale <b>ogni anno</b> (drift); ora <b>trivalente</b> (B/Yamagata scomparso). Il LAIV è vivo: non in gravidanza o immunodepressione. <b>L'allergia all'uovo non è una controindicazione</b>.",
        "Chemioprofilassi (oseltamivir/baloxavir) per i contatti ad altissimo rischio e per <b>tutti gli ospiti</b> nei focolai nelle RSA.",
        "COVID-19: richiamo annuale aggiornato per ≥60 anni e alto rischio; protegge soprattutto dalla malattia grave.",
        "RSV: vaccini per gli adulti <b>≥60 anni</b>; <b>vaccino materno</b> a 24–36 settimane; <b>nirsevimab, una dose per tutti i lattanti</b> nella loro prima stagione."
      ],
      visuals: [
        { type: "table", title: "Precauzioni in ospedale", head: ["Virus", "Precauzioni"], rows: [
          ["Influenza", "Droplet (mascherina chirurgica); FFP2 per le procedure che generano aerosol"],
          ["SARS-CoV-2", "<b>Per via aerea + da contatto</b>: FFP2, protezione oculare, camice, guanti"],
          ["RSV", "Da contatto + droplet; igiene delle mani; coorte dei lattanti"],
          ["Influenza aviaria / nuova", "Per via aerea + da contatto + protezione oculare; notifica"]
        ]},
        { type: "compare", title: "Proteggere i lattanti dall'RSV (di solito basta una strategia)", cols: [
          { h: "Vaccino materno", tone: "accent", items: ["Abrysvo in gravidanza", "UE: 24–36 settimane (USA 32–36)", "Gli anticorpi attraversano la placenta"] },
          { h: "Nirsevimab", tone: "good", items: ["Un'iniezione i.m.", "Alla nascita o prima della stagione", "Protezione ≥5 mesi", "Se la madre non è stata vaccinata ≥2 settimane prima del parto"] },
          { h: "Palivizumab", items: ["Mensile", "Solo lattanti ad alto rischio", "In via di sostituzione"] }
        ]},
        { type: "table", title: "Tipi di vaccino antinfluenzale", head: ["Tipo", "Per"], rows: [
          ["Inattivato standard", "Tutti da ≥6 mesi, compresa la gravidanza"],
          ["Adiuvato / ad alto dosaggio", "Anziani"],
          ["HA ricombinante", "Adulti; senza uova"],
          ["Vivo attenuato (nasale)", "Bambini ≥2 anni; <b>non</b> immunocompromessi, gravide, in terapia con aspirina"]
        ]}
      ]
    }
  }
};
