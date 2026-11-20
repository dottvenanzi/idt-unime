/* Livello di ripasso per il Capitolo 5 — HAP e VAP. Fonte: chapters-it/05-hap-vap.md */
window.REVISION = window.REVISION || {};
window.REVISION[5] = {
  sections: {
    "1": {
      summary: [
        "I più frequenti: <b><i>S. aureus</i> (compreso MRSA)</b> e <b><i>P. aeruginosa</i></b>.",
        "Altri gram-negativi: <i>E. coli</i>, <i>Klebsiella</i>, <i>Enterobacter</i>, <i>Acinetobacter</i>: fonti di ESBL e carbapenemasi.",
        "Spesso <b>polimicrobiche</b> e da <b>MDR</b>.",
        "All'inizio del ricovero, senza rischio di MDR: flora simile alla CAP (pneumococco, <i>H. influenzae</i>, MSSA). <b>Più lungo il ricovero, più MDR</b>.",
        "I virus contano nei reparti di degenza ordinaria; virus e funghi negli immunocompromessi."
      ],
      visuals: [
        { type: "timeline", title: "La flora cambia con il tempo in ospedale", points: [
          { at: "Precoce, senza rischio MDR", h: "Simile alla CAP", p: "<i>S. pneumoniae</i>, <i>H. influenzae</i>, MSSA" },
          { at: "≥ 5 giorni", h: "Flora ospedaliera", p: "MRSA, <i>Pseudomonas</i>, <i>Klebsiella</i>, <i>Acinetobacter</i>", tone: "warn" }
        ]},
        { type: "cards", title: "Gruppi di patogeni", items: [
          { h: "<i>S. aureus</i> compreso MRSA", p: "Il più frequente", tag: "Guida la scelta empirica", tone: "warn" },
          { h: "<i>P. aeruginosa</i>", p: "Il più frequente", tag: "Guida la scelta empirica", tone: "warn" },
          { h: "Enterobacterales, <i>Acinetobacter</i>", p: "<i>E. coli</i>, <i>Klebsiella</i>, <i>Enterobacter</i>", tag: "ESBL, carbapenemasi" },
          { h: "Streptococchi", p: "Compreso il pneumococco", tag: "Esordio precoce" },
          { h: "Virus / funghi", p: "Virus nei reparti ordinari; funghi negli immunocompromessi", tag: "Da non dimenticare" }
        ]}
      ]
    },
    "2": {
      summary: [
        "<b>HAP</b>: ≥48 h dopo il ricovero, non in incubazione al momento del ricovero. <b>VAP</b>: ventilato da &gt;48 h, <b>o entro 48 h dall'estubazione</b>.",
        "<b>NV-HAP</b>: paziente non ventilato. <b>VHAP</b>: NV-HAP che poi richiede ventilazione (esiti peggiori).",
        "&lt;48 h dopo il ricovero = <b>CAP</b>.",
        "Tre fattori di rischio per MDR: <b>colonizzazione nota da MDR, ricovero ≥5 giorni, antibiotici negli ultimi 90 giorni</b>.",
        "VAP nel 5–15% dei pazienti ventilati, rischio massimo nei primi giorni. La NV-HAP è più frequente in numeri assoluti."
      ],
      visuals: [
        { type: "timeline", title: "La tempistica definisce l'entità", points: [
          { at: "&lt; 48 h dopo il ricovero", h: "CAP", p: "Capitolo 4" },
          { at: "≥ 48 h, non ventilato", h: "NV-HAP", p: "Se poi ventilato: VHAP", tone: "warn" },
          { at: "Ventilato da &gt; 48 h", h: "VAP", p: "" , tone: "warn"},
          { at: "≤ 48 h dopo l'estubazione", h: "Ancora VAP", p: "" }
        ]},
        { type: "compare", title: "I tre fattori di rischio per MDR", cols: [
          { h: "1 · Colonizzazione nota", tone: "warn", items: ["Precedente coltura positiva per MDR"] },
          { h: "2 · Ricovero lungo", tone: "warn", items: ["Ricoverato da ≥5 giorni"] },
          { h: "3 · Antibiotici recenti", tone: "warn", items: ["Nei 90 giorni precedenti"] }
        ]},
        { type: "chips", title: "Fattori di rischio per NV-HAP", groups: [
          { h: "", items: ["Età avanzata", "Disfagia", "Sedazione, ridotto stato di coscienza", "Chirurgia toracica / addominale", "Immobilità", "Malattia polmonare cronica"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "Via principale: <b>microaspirazione</b> della flora orofaringea (e gastrointestinale).",
        "In ospedale l'orofaringe viene rapidamente <b>colonizzato da gram-negativi e <i>S. aureus</i></b>.",
        "Sedazione, disfagia e <b>posizione supina</b> favoriscono l'aspirazione.",
        "<b>Tubo endotracheale</b>: bypassa le difese, le secrezioni filtrano attorno alla cuffia, il <b>biofilm</b> sul tubo è un serbatoio."
      ],
      visuals: [
        { type: "flow", title: "Perché i pazienti ventilati sviluppano polmonite", steps: [
          { h: "Orofaringe colonizzato dalla flora ospedaliera", p: "Malattia, antibiotici, bocca secca, scarsa igiene orale" },
          { h: "Difese bypassate", p: "Il tubo compromette tosse e clearance mucociliare" },
          { h: "Le secrezioni ristagnano sopra la cuffia e filtrano", p: "Posizione supina, distensione gastrica" },
          { h: "Biofilm sul tubo", p: "Serbatoio di batteri" },
          { h: "Polmonite", p: "Dipende da inoculo, virulenza, risposta dell'ospite", tone: "warn" }
        ]}
      ]
    },
    "4": {
      summary: [
        "Nuovo infiltrato + caratteristiche infettive: <b>febbre di nuova insorgenza, secrezioni purulente, leucocitosi, peggioramento dell'ossigenazione</b>.",
        "<b>Nessun segno o combinazione</b> è altamente sensibile o specifico.",
        "Ventilati: più secrezioni, <b>aumento di FiO₂/PEEP</b>. Possibili leucopenia o ipotermia.",
        "Pazienti anziani e sedati: forse solo peggioramento dell'ossigenazione, confusione o instabilità."
      ],
      visuals: [
        { type: "compare", title: "Indizi clinici", cols: [
          { h: "Caratteristiche infettive", tone: "accent", items: ["Febbre di nuova insorgenza (o ipotermia)", "Espettorato / secrezioni tracheali purulente", "Leucocitosi (o leucopenia)", "Peggioramento dell'ossigenazione"] },
          { h: "Al ventilatore", items: ["Più secrezioni", "FiO₂ / PEEP più alte", "Meccanica respiratoria peggiore"] }
        ]}
      ]
    },
    "5": {
      summary: [
        "IDSA/ATS: <b>diagnosi clinica</b> = nuovo infiltrato + caratteristiche infettive, più la microbiologia.",
        "Molte condizioni simili: atelettasia, ARDS, edema, embolia polmonare, reazioni a farmaci.",
        "La VAP si conferma <b>retrospettivamente</b> (colture in 2–3 giorni): prima trattare empiricamente.",
        "<b>Coltura positiva + radiografia normale = tracheobronchite</b>.",
        "VAC/IVAC sono definizioni solo per la <b>sorveglianza</b>.",
        "Colture quantitative: le soglie si abbassano quanto più il campionamento è distale: <b>ETA 10⁶, BAL 10⁴, PSB 10³ UFC/ml</b>. Neutrofili nel BAL &lt;50% aiutano a escludere la VAP."
      ],
      visuals: [
        { type: "ladder", title: "Soglie delle colture quantitative (più distale → soglia più bassa)", steps: [
          { h: "Aspirato endotracheale", p: "≥10⁶ UFC/ml · campiona le vie aeree prossimali colonizzate" },
          { h: "BAL / mini-BAL", p: "≥10⁴ UFC/ml" },
          { h: "Spazzolato protetto", p: "≥10³ UFC/ml · campione distale piccolo e non contaminato", tone: "warn" }
        ]},
        { type: "compare", title: "Polmonite o no?", cols: [
          { h: "VAP / HAP", tone: "accent", items: ["Nuovo infiltrato", "Caratteristiche infettive", "Patogeno nel campione respiratorio"] },
          { h: "Tracheobronchite", items: ["Coltura positiva", "<b>Radiografia del torace normale</b>"] },
          { h: "Condizioni simili", tone: "warn", items: ["Atelettasia", "ARDS", "Edema polmonare", "Embolia polmonare", "Reazione a farmaci"] }
        ]},
        { type: "note", h: "PCR multiplex sul BAL", p: "Adattamento più rapido della terapia e cicli più brevi, ma non distingue la colonizzazione dall'infezione, e un RCT non ha mostrato effetti su mortalità o durata della degenza." }
      ]
    },
    "6": {
      summary: [
        "Scegliere la terapia empirica in base a: <b>colture precedenti, antibiotici recenti (usare un'altra classe), antibiogramma locale</b>, gravità, colorazione di Gram, rischio di MDR, tossicità.",
        "<b>Malattia grave</b> = shock settico di nuova insorgenza (VAP o NV-HAP) o nuovo supporto ventilatorio (NV-HAP) → <b>coprire MRSA + gram-negativi MDR</b>.",
        "MRSA: <b>vancomicina o linezolid</b>. Gram-negativi: <b>β-lattamico antipseudomonas</b>; aggiungere una seconda classe (FQ o aminoglicoside) se grave o ad alto rischio di MDR.",
        "Resistenti ai carbapenemi: nuovi farmaci con test di sensibilità e parere dell'infettivologo.",
        "<b>7 giorni</b> per la maggior parte; più a lungo per <i>S. aureus</i> batteriemico, ascesso, empiema, risposta lenta, immunocompromissione."
      ],
      visuals: [
        { type: "algo", title: "Ampiezza della terapia empirica", nodes: [
          { q: "Grave? (shock settico di nuova insorgenza, o nuovo supporto ventilatorio nella NV-HAP)", opts: [
            { when: "Sì", to: "Anti-MRSA + β-lattamico antipseudomonas ± seconda classe antipseudomonas", tone: "warn" },
            { when: "No", to: "Adattare a fattori di rischio per MDR, antibiogramma locale, colorazione di Gram", tone: "good" }
          ]}
        ]},
        { type: "table", title: "Classi di farmaci", head: ["Bersaglio", "Esempi"], rows: [
          ["MRSA", "Vancomicina, linezolid"],
          ["<i>Pseudomonas</i> / gram-negativi", "Piperacillina-tazobactam, cefepime, ceftazidime, meropenem, imipenem"],
          ["Secondo antipseudomonas (classe diversa)", "Ciprofloxacina, levofloxacina, o un aminoglicoside"],
          ["Resistenti ai carbapenemi", "Ceftazidime-avibactam, meropenem-vaborbactam (in base alla sensibilità)"]
        ]}
      ]
    },
    "7": {
      summary: [
        "<b>Rivalutare a 48–72 h</b>: de-escalation o sospensione in base a colture e risposta. Sicuro e riduce le resistenze.",
        "<b>PCR nasale per MRSA negativa</b> (alto VPN) → sospendere la terapia anti-MRSA: meno insufficienza renale.",
        "Nessun miglioramento → patogeno resistente o insolito, empiema o ascesso, condizione non infettiva simile."
      ],
      visuals: [
        { type: "timeline", title: "La revisione al 2°–3° giorno", points: [
          { at: "Giorno 0", h: "Empirica", p: "Ampia se grave" },
          { at: "48 – 72 h", h: "Colture + risposta", p: "Restringere, sospendere l'anti-MRSA se PCR nasale negativa", tone: "good" },
          { at: "Giorno 7", h: "Sospendere", p: "Per la maggior parte dei pazienti" }
        ]}
      ]
    },
    "8": {
      summary: [
        "Nessun vaccino: <b>controllo delle infezioni</b>.",
        "Tutti i pazienti: evitare intubazione e reintubazione, mobilizzazione precoce, <b>testata del letto a 30–45°</b>, <b>spazzolamento dei denti senza clorexidina</b>.",
        "Ventilati: <b>ridurre al minimo la sedazione</b>, interruzione quotidiana della sedazione + prove di respiro spontaneo, sostituire i circuiti solo se sporchi.",
        "Principio: <b>ridurre l'esposizione al tubo</b> e <b>ridurre l'aspirazione</b>."
      ],
      visuals: [
        { type: "compare", title: "Bundle di prevenzione", cols: [
          { h: "Tutti", tone: "good", items: ["Evitare intubazione / reintubazione", "Mobilizzazione precoce", "Testata del letto a 30–45°", "Igiene orale con spazzolino"] },
          { h: "Ventilati", tone: "accent", items: ["Ridurre al minimo la sedazione", "Interruzione quotidiana della sedazione", "Prove di respiro spontaneo", "Sostituire il circuito solo se sporco"] },
          { h: "Non più", tone: "warn", items: ["Igiene orale con clorexidina"] }
        ]}
      ]
    }
  }
};
