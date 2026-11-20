/* Livello di ripasso per il Capitolo 20 — Infezioni trasmesse da zecche. Fonte: chapters-it/20-*.md */
window.REVISION = window.REVISION || {};
window.REVISION[20] = {
  sections: {
    "1": {
      summary: [
        "Le zecche sono <b>aracnidi</b>: larva → ninfa → adulto, un pasto di sangue per stadio. Le <b>ninfe</b> (1–2 mm) trasmettono la maggior parte dei casi di Lyme.",
        "Le zecche dure si nutrono per giorni; quelle molli per pochi minuti di notte (puntura inavvertita).",
        "<b>Tempo alla trasmissione</b>: <i>Borrelia</i> dopo 36–48 h; rickettsie ore; <b>virus TBE minuti</b>.",
        "Vettori: <i>Ixodes ricinus</i> (Lyme, TBE, <i>Anaplasma</i>) in Europa; <b>zecca bruna del cane → <i>R. conorii</i></b>; <i>Hyalomma</i> → CCHF.",
        "<i>B. afzelii</i> → cute; <b><i>B. garinii</i> → sistema nervoso</b>; <i>B. burgdorferi</i> s.s. → artrite (USA).",
        "La maggior parte degli agenti non cresce nelle colture di routine: PCR, sierologia, strisci."
      ],
      visuals: [
        { type: "ranges", title: "Tempo di attacco necessario per la trasmissione (ore)", max: 48, unit: " h", ticks: [0, 12, 24, 36, 48], rows: [
          { label: "Virus TBE (ghiandole salivari)", from: 0, to: 0.5, tone: "warn", txt: "Minuti" },
          { label: "<i>Rickettsia rickettsii</i>", from: 2, to: 10, txt: "Ore" },
          { label: "<i>Borrelia burgdorferi</i> (intestino medio)", from: 36, to: 48, txt: "Aumenta dopo 36–48 h" }
        ], caption: "La rimozione precoce della zecca protegge dalla malattia di Lyme, non dalla TBE." },
        { type: "table", title: "Patogeni", head: ["Malattia", "Agente", "Tipo"], rows: [
          ["Borreliosi di Lyme", "<i>B. burgdorferi</i> s.l.", "Spirocheta"],
          ["Febbri maculose", "<i>R. conorii</i>, <i>R. rickettsii</i>, <i>R. africae</i>", "Intracellulari, endotelio"],
          ["Anaplasmosi", "<i>A. phagocytophilum</i>", "Neutrofili"],
          ["Ehrlichiosi", "<i>E. chaffeensis</i>", "Monociti"],
          ["Tularemia", "<i>Francisella tularensis</i>", "Coccobacillo gram-negativo"],
          ["Babesiosi", "<i>B. microti</i>, <i>B. divergens</i>", "Protozoi eritrocitari"],
          ["Febbre ricorrente", "<i>Borrelia</i> spp., <i>B. miyamotoi</i>", "Spirochete"],
          ["TBE", "Virus TBE", "Flavivirus"],
          ["CCHF", "Virus CCHF", "Nairovirus"]
        ]},
        { type: "compare", title: "Genospecie di <i>Borrelia</i> e tropismo", cols: [
          { h: "<i>B. afzelii</i>", items: ["Europa, la più frequente", "Cute: EM, linfocitoma, ACA"] },
          { h: "<i>B. garinii</i>", tone: "warn", items: ["Europa", "Neuroborreliosi"] },
          { h: "<i>B. burgdorferi</i> s.s.", tone: "accent", items: ["Nord America", "Artrite"] }
        ]}
      ]
    },
    "2": {
      summary: [
        "<b>Lyme</b>: la malattia trasmessa da vettori più frequente della zona temperata settentrionale; Italia: <b>Nord-Est</b>; picco giugno–agosto.",
        "<b>Febbre bottonosa del Mediterraneo</b>: endemica nel <b>Sud Italia e nelle isole</b> (Sicilia, Sardegna, Calabria), estate, cani.",
        "<i>R. africae</i>: viaggiatori dall’Africa subsahariana. La RMSF (Americhe) è la più letale.",
        "Tularemia: lepri, roditori, acqua, aerosol; <b>nessuna trasmissione interumana</b>; agente di bioterrorismo.",
        "Babesiosi in Europa: <i>B. divergens</i> nei pazienti <b>splenectomizzati</b>.",
        "<b>TBE</b>: Europa centrale/settentrionale fino all’Asia; Italia Nord-Est; anche <b>latte crudo</b>.",
        "<b>CCHF</b>: Africa, Balcani, Turchia, <b>Spagna</b>; sangue del bestiame; <b>nosocomiale</b>; letalità 10–40%."
      ],
      visuals: [
        { type: "compare", title: "Infezioni da zecche in Italia", cols: [
          { h: "Nord-Est", tone: "accent", items: ["Borreliosi di Lyme", "Encefalite da zecche", "(Friuli, Veneto, Trentino)"] },
          { h: "Sud e isole", tone: "warn", items: ["Febbre bottonosa del Mediterraneo", "Zecca bruna del cane", "(Sicilia, Sardegna, Calabria)"] }
        ]},
        { type: "cards", title: "Chi, dove", items: [
          { h: "Tularemia", p: "Cacciatori, lepri, acqua, fienagione", tag: "Nessuna trasmissione interumana" },
          { h: "Babesiosi", p: "Asplenici (Europa); Nord-Est degli USA; trasfusioni", tag: "Fulminante se asplenico", tone: "warn" },
          { h: "Febbre ricorrente", p: "Africa, penisola iberica, Medio Oriente; <i>B. miyamotoi</i> con <i>Ixodes</i>", tag: "Viaggi" },
          { h: "CCHF", p: "Balcani, Turchia, Spagna; allevatori", tag: "Nosocomiale", tone: "warn" }
        ]}
      ]
    },
    "3": {
      summary: [
        "<i>Borrelia</i> passa da <b>OspA → OspC</b>; si diffonde in modo centrifugo (EM), poi a nervi, cuore, articolazioni. <b>Nessuna tossina</b>: infiammazione dell’ospite.",
        "L’artrite di Lyme refrattaria è <b>immunomediata</b>.",
        "Rickettsie: <b>escara</b> nel sito della puntura, poi <b>vasculite endoteliale</b> → perdita capillare, iponatriemia, danno d’organo.",
        "<i>Anaplasma</i> (neutrofili), <i>Ehrlichia</i> (monociti) formano <b>morule</b>.",
        "<i>Babesia</i>: globuli rossi, emolisi; <b>la milza la elimina</b>; nessuna fase epatica, nessun pigmento.",
        "Febbre ricorrente: <b>variazione antigenica</b> → recidive.",
        "TBE: tronco encefalico, cervelletto, talamo, <b>corna anteriori</b>. CCHF: tempesta citochinica, CID."
      ],
      visuals: [
        { type: "cards", title: "Il meccanismo in una riga", items: [
          { h: "Lyme", p: "OspA → OspC; infiammazione, nessuna tossina", tag: "Disseminazione" },
          { h: "Rickettsiosi", p: "Infezione endoteliale → vasculite", tag: "Escara", tone: "warn" },
          { h: "Anaplasma / Ehrlichia", p: "Morule nei fagociti", tag: "Leucopenia" },
          { h: "Babesiosi", p: "Intraeritrocitaria; la milza la elimina", tag: "Asplenia", tone: "warn" },
          { h: "Febbre ricorrente", p: "Cambio delle proteine di superficie", tag: "Recidive" },
          { h: "TBE", p: "Neuroni, comprese le corna anteriori", tag: "Paralisi flaccida" },
          { h: "CCHF", p: "Tempesta citochinica, fegato, CID", tag: "Emorragie", tone: "warn" }
        ]}
      ]
    },
    "4": {
      summary: [
        "<b>EM</b>: eritema in espansione <b>≥5 cm</b>, 3–30 giorni. Disseminata: EM multipli, <b>paralisi facciale (bilaterale)</b>, Bannwarth, <b>blocco AV</b>. Tardiva: artrite del ginocchio, ACA.",
        "<b>Febbre bottonosa</b>: febbre alta + <b>tache noire</b> + esantema maculopapulare anche <b>palmo-plantare</b>.",
        "RMSF: esantema petecchiale da polsi e caviglie; spesso senza escara; fatale se non trattata.",
        "Anaplasmosi/ehrlichiosi: febbre + <b>leucopenia, piastrinopenia, transaminasi aumentate</b>.",
        "Tularemia: <b>ulcera + linfonodo suppurato</b>; orofaringea dopo acqua contaminata.",
        "Babesiosi: simil-malarica, <b>emolisi</b>, grave se asplenico.",
        "TBE: <b>bifasica</b> → meningite/encefalite/paralisi flaccida. CCHF: febbre → <b>emorragie</b> dal giorno 3–5."
      ],
      visuals: [
        { type: "timeline", title: "Stadi della borreliosi di Lyme", points: [
          { at: "3–30 giorni", h: "Precoce localizzata", p: "Eritema migrante ≥5 cm" },
          { at: "Settimane–mesi", h: "Precoce disseminata", p: "EM multipli, paralisi facciale, Bannwarth, blocco AV", tone: "warn" },
          { at: "Mesi–anni", h: "Tardiva", p: "Artrite del ginocchio, acrodermatite cronica atrofica" }
        ]},
        { type: "table", title: "Indizi tra le infezioni da zecche", head: ["Indizio", "Pensare a"], rows: [
          ["Eritema in espansione ≥5 cm", "Lyme (EM)"],
          ["Escara + esantema palmo-plantare", "Febbre bottonosa del Mediterraneo"],
          ["Febbre + leucopenia + piastrinopenia + transaminasi elevate", "Anaplasmosi / ehrlichiosi, TBE precoce"],
          ["Febbre + emolisi, asplenico", "Babesiosi"],
          ["Ulcera + linfonodo suppurato, contatto con lepri", "Tularemia"],
          ["Febbre che ricorre ogni settimana", "Febbre ricorrente"],
          ["Malattia bifasica → meningoencefalite", "TBE"],
          ["Febbre + emorragie, bestiame", "CCHF"],
          ["Paralisi facciale bilaterale, blocco AV", "Lyme disseminata"]
        ]},
        { type: "flow", title: "Encefalite da zecche: bifasica", dir: "row", steps: [
          { h: "Fase viremica", p: "Simil-influenzale, 2–7 giorni" },
          { h: "Intervallo libero", p: "~1 settimana" },
          { h: "Fase neurologica", p: "Meningite, encefalite, paralisi flaccida", tone: "warn" }
        ]}
      ]
    },
    "5": {
      summary: [
        "<b>EM tipico = diagnosi clinica, nessuna sierologia</b>.",
        "Sierologia per Lyme: <b>a due livelli</b>, solo per la malattia extracutanea; IgM affidabili solo nelle prime 4 settimane; gli anticorpi persistono.",
        "Neuroborreliosi: <b>pleiocitosi liquorale + anticorpi intratecali</b> (CXCL13 di supporto).",
        "<b>Non testare</b> sintomi aspecifici, punture asintomatiche o la zecca.",
        "Febbri maculose: <b>trattare sul sospetto</b>; PCR sull’escara precocemente; sierologia IFA appaiata più tardi.",
        "Anaplasma/Ehrlichia: <b>PCR su sangue</b>, morule. Tularemia: sierologia, PCR; <b>avvisare il laboratorio</b>.",
        "Babesiosi: striscio (<b>croce di Malta</b>, nessun pigmento) + PCR + parassitemia. TBE: IgM su siero/liquor (reazioni crociate tra flavivirus). CCHF: <b>isolamento</b>, RT-PCR."
      ],
      visuals: [
        { type: "table", title: "Esami preferiti", head: ["Malattia", "Precocemente", "Più tardi"], rows: [
          ["Lyme (EM)", "<b>Clinica</b>", "Non necessari"],
          ["Lyme (disseminata)", "—", "Sierologia a due livelli; indice liquorale"],
          ["Febbri maculose", "PCR sull’escara", "IFA appaiata"],
          ["Anaplasmosi / ehrlichiosi", "PCR su sangue, morule", "IFA appaiata"],
          ["Tularemia", "PCR su ulcera / linfonodo", "Sierologia dalla 2ª settimana"],
          ["Babesiosi", "Striscio + PCR", "—"],
          ["Febbre ricorrente", "Striscio durante la febbre, PCR", "—"],
          ["TBE", "RT-PCR (fase viremica)", "IgM/IgG su siero e liquor"],
          ["CCHF", "RT-PCR", "IgM/IgG"]
        ]},
        { type: "compare", title: "Babesia vs <i>P. falciparum</i> allo striscio", cols: [
          { h: "<i>Babesia</i>", tone: "accent", items: ["Tetradi a croce di Malta", "Nessun pigmento", "Né schizonti né gametociti", "Merozoiti extracellulari"] },
          { h: "<i>P. falciparum</i>", items: ["Anelli, gametociti a banana", "Pigmento emozoina", "Viaggio ai tropici"] }
        ]}
      ]
    },
    "6": {
      summary: [
        "<b>La doxiciclina è il farmaco chiave</b>: Lyme, <b>tutte le rickettsiosi</b>, anaplasmosi/ehrlichiosi, <b>a ogni età</b>.",
        "EM: doxiciclina 10 gg (amoxicillina/cefuroxima 14 gg). Neuro: doxiciclina orale o ceftriaxone e.v. 14–21 gg. Artrite 28 gg.",
        "Cardite di Lyme: PR ≥300 ms → ricovero, pacing temporaneo; <b>nessun pacemaker definitivo</b>.",
        "PTLDS: <b>nessuna antibioticoterapia prolungata</b>.",
        "Febbre bottonosa: doxiciclina empirica; <b>evitare i fluorochinoloni</b>; β-lattamici inattivi.",
        "Tularemia: <b>ciprofloxacina</b> (lieve), <b>gentamicina</b> (grave). Babesiosi: <b>atovaquone + azitromicina</b>; exsanguinotrasfusione se &gt;10%.",
        "Febbre ricorrente: attendersi la <b>Jarisch-Herxheimer</b>. TBE: supporto. CCHF: supporto, controllo delle infezioni."
      ],
      visuals: [
        { type: "table", title: "Quale farmaco", head: ["Infezione", "Prima linea"], rows: [
          ["Borreliosi di Lyme", "Doxiciclina / amoxicillina / cefuroxima; ceftriaxone se grave"],
          ["Rickettsiosi", "<b>Doxiciclina</b> (tutte le età)"],
          ["Anaplasmosi / ehrlichiosi", "<b>Doxiciclina</b> (tutte le età)"],
          ["Tularemia", "Ciprofloxacina (lieve) / gentamicina (grave)"],
          ["Babesiosi", "Atovaquone + azitromicina"],
          ["Febbre ricorrente", "Doxiciclina / penicillina / ceftriaxone"],
          ["TBE", "Solo supporto"],
          ["CCHF", "Supporto; ribavirina incerta"]
        ]},
        { type: "ranges", title: "Borreliosi di Lyme: durata", max: 28, ticks: [0, 10, 14, 21, 28], rows: [
          { label: "EM, doxiciclina", from: 10, to: 10, tone: "good", txt: "10 gg" },
          { label: "EM, amoxicillina / cefuroxima", from: 14, to: 14, txt: "14 gg" },
          { label: "Neuroborreliosi, cardite", from: 14, to: 21, txt: "14–21 gg" },
          { label: "ACA", from: 21, to: 28, txt: "21–28 gg" },
          { label: "Artrite", from: 28, to: 28, tone: "warn", txt: "28 gg" }
        ]}
      ]
    },
    "7": {
      summary: [
        "Lyme: <b>nessuna sierologia di controllo</b>; la paralisi facciale recupera in settimane–mesi; ECG fino alla risoluzione del blocco AV; un nuovo EM = nuova infezione.",
        "Rickettsiosi, anaplasmosi: <b>sfebbramento in 24–72 h</b>; altrimenti ripensare (coinfezione con <i>Babesia</i>).",
        "Tularemia: i linfonodi possono suppurare per settimane; recidive dopo doxiciclina.",
        "Babesiosi: parassitemia quotidiana; niente donazioni di sangue.",
        "TBE: riabilitazione; immunità permanente. CCHF: sorvegliare i contatti per <b>14 giorni</b>."
      ],
      visuals: [
        { type: "cards", title: "Risposta attesa", items: [
          { h: "Rickettsiosi / anaplasmosi trattata con doxiciclina", p: "Apiressia in 24–72 h", tag: "Altrimenti ripensare", tone: "warn" },
          { h: "Eritema migrante", p: "Sbiadisce in giorni–settimane", tag: "Niente altri antibiotici" },
          { h: "Tularemia", p: "I linfonodi possono suppurare", tag: "Non è fallimento" },
          { h: "Contatti di CCHF", p: "Sorveglianza della febbre", tag: "14 giorni" }
        ]}
      ]
    },
    "8": {
      summary: [
        "Evitare le punture: sentieri, pantaloni lunghi nei calzini, abiti chiari, <b>DEET / icaridina</b>, permetrina sugli indumenti, <b>controllo quotidiano delle zecche</b>.",
        "Rimuovere con <b>pinzette a punta sottile</b>, trazione costante verso l’alto; niente olio, alcol, calore; osservare il sito per 30 giorni.",
        "PEP per Lyme (USA): dose singola di doxiciclina entro 72 h solo se <i>Ixodes</i> + area endemica + <b>attaccata da ≥36 h</b>. Europa: osservare.",
        "Nessun vaccino autorizzato per Lyme (candidato OspA in fase 3).",
        "<b>Vaccino anti-TBE</b>: inattivato, 3 dosi, richiami ogni 3–5 anni; raccomandato per le persone a rischio.",
        "Nessuna PEP per rickettsiosi, anaplasmosi o TBE."
      ],
      visuals: [
        { type: "flow", title: "Rimuovere una zecca", steps: [
          { h: "Pinzette a punta sottile", p: "Afferrare vicino alla cute" },
          { h: "Tirare dritto verso l’alto, in modo costante", p: "Senza ruotare, senza schiacciare" },
          { h: "Disinfettare, lavarsi le mani", p: "Niente olio, alcol, calore" },
          { h: "Osservare per 30 giorni", p: "EM nel sito, febbre", tone: "accent" }
        ]},
        { type: "note", h: "Profilassi post-puntura per Lyme (indicazioni USA)", p: "Una dose di doxiciclina entro 72 h dalla rimozione solo quando sono presenti tutte e tre le condizioni: zecca <i>Ixodes</i>, area ad alta endemia, attaccata da ≥36 h. In Europa, osservare il sito." }
      ]
    }
  }
};
