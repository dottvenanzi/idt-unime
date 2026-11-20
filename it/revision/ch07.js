/* Livello di ripasso per il Capitolo 7 — Tubercolosi polmonare. Fonte: chapters-it/07-tuberculosis.md */
window.REVISION = window.REVISION || {};
window.REVISION[7] = {
  sections: {
    "1": {
      summary: [
        "Complesso <b><i>M. tuberculosis</i></b> (anche <i>M. bovis</i>, da latte non pastorizzato, e BCG).",
        "Bacillo aerobio, immobile; <b>acidi micolici</b> → <b>alcol-acido resistente</b> (Ziehl-Neelsen, auramina).",
        "<b>Crescita molto lenta</b> (tempo di duplicazione 15–20 h): coltura liquida 1–3 settimane, solida 3–8 settimane.",
        "Patogeno umano obbligato. <b>I BAAR all’esame diretto possono essere NTM</b>: confermare con coltura o NAAT.",
        "<b>MDR</b> = resistenza a isoniazide + rifampicina; pre-XDR + fluorochinolone; XDR + bedaquilina o linezolid."
      ],
      visuals: [
        { type: "ladder", title: "Livelli di resistenza", steps: [
          { h: "TB-MDR", p: "Isoniazide + rifampicina" },
          { h: "Pre-XDR", p: "MDR + fluorochinolone" },
          { h: "XDR", p: "Pre-XDR + bedaquilina o linezolid", tone: "warn" }
        ]},
        { type: "ranges", title: "Tempo alla positività colturale (settimane, in scala)", max: 8, unit: " sett.", ticks: [0, 2, 4, 6, 8], rows: [
          { label: "Terreni liquidi", from: 1, to: 3 },
          { label: "Terreni solidi (Löwenstein-Jensen)", from: 3, to: 8 }
        ]}
      ]
    },
    "2": {
      summary: [
        "Trasmissione tramite <b>droplet nuclei</b> da TB polmonare o delle vie aeree.",
        "Circa <b>¼ della popolazione mondiale</b> infetta; <b>&gt;10 milioni</b> di casi e <b>&gt;1 milione</b> di morti all’anno.",
        "La maggior parte dei casi: Sud-Est asiatico, Africa, Pacifico occidentale. Italia &lt;10/100.000: spesso persone nate in Paesi ad alta incidenza e gruppi vulnerabili.",
        "Più contagiosa: TB <b>polmonare o laringea</b> non trattata, <b>cavitaria</b>, <b>con esame diretto positivo</b>. Anche i pazienti con diretto negativo e coltura positiva possono trasmettere.",
        "Rischio di progressione: <b>HIV, anti-TNF, corticosteroidi, trapianto</b>, età estreme, infezione recente (&lt;2 anni), diabete, silicosi, MRC, malnutrizione."
      ],
      visuals: [
        { type: "stats", items: [
          { v: "≈ 1/4", l: "della popolazione mondiale con infezione tubercolare" },
          { v: "&gt; 10 mln", l: "nuovi casi di malattia tubercolare all’anno" },
          { v: "&gt; 1 mln", l: "morti all’anno" }
        ]},
        { type: "compare", title: "Due rischi diversi", cols: [
          { h: "Rischio di nuova infezione", items: ["Contatti di TB respiratoria non trattata", "Viaggi o residenza in aree endemiche", "Ambito sanitario, carceri, dormitori"] },
          { h: "Rischio di progressione a malattia", tone: "warn", items: ["HIV", "Anti-TNF, corticosteroidi, farmaci anti-rigetto", "Bambini piccoli, anziani", "Infezione negli ultimi 2 anni", "Diabete, silicosi, MRC, malnutrizione"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "Dopo l’inalazione: <b>nessuna infezione</b>, <b>infezione tubercolare</b> (TST/IGRA positivi, asintomatica), <b>malattia primaria</b> (&lt;2 anni) o <b>riattivazione</b> (anni dopo).",
        "Rischio di riattivazione nel corso della vita <b>5–10%</b> senza fattori di rischio; molto più alto in caso di immunosoppressione.",
        "Macrofagi alveolari → linfonodi ilari → piccola disseminazione ematogena (base della TB extrapolmonare).",
        "A 2–8 settimane: <b>Th1 + IFN-γ</b> attivano i macrofagi; il <b>TNF</b> costruisce il <b>granuloma</b> (necrosi caseosa). TST/IGRA si positivizzano.",
        "La riattivazione predilige i <b>lobi superiori</b> (alta O₂). Le caverne contengono enormi quantità di bacilli → altamente contagiose."
      ],
      visuals: [
        { type: "flow", title: "Storia naturale dopo l’esposizione", steps: [
          { h: "Inalazione di droplet nuclei", p: "Fagocitati dai macrofagi alveolari" },
          { h: "Diffusione ai linfonodi ilari e al sangue", p: "Disseminazione ad altri organi" },
          { h: "Immunità cellulo-mediata a 2–8 settimane", p: "Th1, IFN-γ, TNF → granuloma; complesso di Ghon. TST/IGRA positivi" },
          { h: "Infezione tubercolare (contenuta)", p: "Asintomatica", tone: "good" },
          { h: "Riattivazione se l’immunità cede", p: "HIV, anti-TNF, invecchiamento → caverne nei lobi superiori", tone: "warn" }
        ]},
        { type: "table", title: "Quattro esiti possibili", head: ["Esito", "Significato"], rows: [
          ["Nessuna infezione", "Eliminato; TST/IGRA negativi"],
          ["Infezione tubercolare", "TST e/o IGRA positivi, <b>nessun sintomo</b>"],
          ["Malattia tubercolare primaria", "Entro 2 anni; bambini piccoli, immunocompromessi"],
          ["Malattia tubercolare da riattivazione", "Anni dopo; rischio nel corso della vita 5–10%"]
        ]}
      ]
    },
    "4": {
      summary: [
        "<b>Riattivazione</b>: segmenti apicali/posteriori dei lobi superiori, esordio <b>insidioso</b>: tosse &gt;2–3 settimane, calo ponderale, febbre, <b>sudorazioni notturne</b>, emottisi; cavitazione.",
        "<b>Primaria</b>: febbre, dolore toracico, esame obiettivo spesso normale; <b>linfoadenopatia ilare</b>, versamento.",
        "TB endobronchiale: tosse abbaiante.",
        "HIV: più forme extrapolmonari e disseminate; <b>IRIS</b> dopo ART = peggioramento paradosso.",
        "Alcuni pazienti sono <b>asintomatici</b> (reperto radiografico occasionale)."
      ],
      visuals: [
        { type: "compare", title: "Primaria vs riattivazione", cols: [
          { h: "TB primaria", items: ["Entro 2 anni", "Bambini piccoli, immunocompromessi", "Febbre, dolore toracico; esame obiettivo spesso normale", "<b>Linfonodi ilari</b>, versamento pleurico"] },
          { h: "TB da riattivazione", tone: "warn", items: ["Anni dopo", "Adulti", "Insidiosa: tosse, calo ponderale, sudorazioni notturne, emottisi", "<b>Segmenti apicali/posteriori dei lobi superiori, caverne</b>"] }
        ]}
      ]
    },
    "5": {
      summary: [
        "Sospettare: <b>tosse &gt;2–3 settimane + febbre, sudorazioni notturne, calo ponderale + rischio epidemiologico</b>.",
        "Prima la radiografia del torace, poi <b>3 campioni di espettorato a ≥8 h di distanza</b> (uno al mattino presto) per <b>esame diretto, coltura, NAAT</b>. Broncoscopia/BAL se necessario.",
        "Definitiva: la <b>coltura</b>. Un <b>NAAT</b> positivo in un paziente a rischio non trattato è sufficiente. Xpert MTB/RIF rileva anche la <b>resistenza alla rifampicina</b>.",
        "L’esame diretto richiede ~10.000 bacilli/ml; non distingue <i>M. tuberculosis</i> dai NTM.",
        "<b>IGRA/TST non possono né confermare né escludere una TB attiva</b>.",
        "Infezione tubercolare: testare solo le persone a rischio che ne trarrebbero beneficio; <b>IGRA preferibile</b> dopo BCG. <b>Escludere sempre la malattia prima della terapia preventiva</b>."
      ],
      visuals: [
        { type: "algo", title: "Sospetta TB polmonare", nodes: [
          { q: "Sintomi + rischio epidemiologico", opts: [{ when: "Prima", to: "Radiografia del torace", next: true }] },
          { q: "Imaging suggestivo di TB", opts: [{ when: "Poi", to: "3 espettorati a ≥8 h di distanza (uno al mattino presto): diretto + coltura + NAAT; isolamento respiratorio subito", tone: "warn", next: true }] },
          { q: "Risultato", opts: [
            { when: "NAAT o coltura positivi", to: "Malattia tubercolare; antibiogramma", tone: "good" },
            { when: "Negativi, sospetto elevato", to: "Broncoscopia con BAL ± biopsia; terapia empirica se sospetto elevato" }
          ]}
        ]},
        { type: "table", title: "Tre esami", head: ["Esame", "Punto di forza", "Limite"], rows: [
          ["Esame diretto per BAAR", "Rapido; positivo = più contagioso", "Servono ~10.000 bacilli/ml; non esclude NTM"],
          ["NAAT", "Identificazione rapida; resistenza alla rifampicina", "Rileva bacilli morti: non per il follow-up"],
          ["Coltura", "<b>Definitiva</b>; specie; sensibilità", "Settimane"]
        ]},
        { type: "compare", title: "IGRA vs TST", cols: [
          { h: "IGRA", tone: "accent", items: ["ESAT-6, CFP-10: assenti nel BCG e nella maggior parte dei NTM", "Preferibile dopo BCG o se il paziente potrebbe non tornare", "Una sola visita"] },
          { h: "TST", items: ["Antigeni condivisi con BCG e NTM", "Falsi positivi dopo BCG", "Richiede una visita per la lettura"] },
          { h: "Entrambi", tone: "warn", items: ["Diagnosticano l’infezione, non la malattia", "Un risultato negativo non esclude la TB attiva"] }
        ]}
      ]
    },
    "6": {
      summary: [
        "<b>2 mesi HRZE</b> (isoniazide, rifampicina, pirazinamide, etambutolo), poi <b>≥4 mesi HR</b>.",
        "Schema di 4 mesi <b>rifapentina-moxifloxacina</b> per pazienti selezionati.",
        "<b>DOT</b> e case management per garantire l’aderenza e prevenire le resistenze.",
        "<b>Più farmaci</b> perché una popolazione numerosa (caverna) contiene sempre mutanti resistenti.",
        "Epatotossicità: H, R, Z (Z la peggiore) → sospendere, poi reintrodurre gradualmente.",
        "HIV: iniziare l’ART durante la terapia antitubercolare (2–8 settimane); attenzione a IRIS e interazioni della rifampicina. TB farmacoresistente: bedaquilina, pretomanid, linezolid, moxifloxacina."
      ],
      visuals: [
        { type: "ranges", title: "Schema standard (mesi, in scala)", max: 6, unit: " mesi", ticks: [0, 2, 4, 6], rows: [
          { label: "Isoniazide", from: 0, to: 6 },
          { label: "Rifampicina", from: 0, to: 6 },
          { label: "Pirazinamide", from: 0, to: 2, tone: "warn" },
          { label: "Etambutolo", from: 0, to: 2, tone: "warn" }
        ], caption: "Fase intensiva 2 mesi (HRZE), fase di continuazione ≥4 mesi (HR). Prolungare a 9 mesi totali se cavitaria e coltura ancora positiva a 2 mesi." },
        { type: "table", title: "Effetti collaterali da conoscere", head: ["Farmaco", "Attenzione a"], rows: [
          ["Isoniazide", "Epatite; <b>neuropatia periferica</b> → piridossina"],
          ["Rifampicina", "Epatite; <b>liquidi biologici arancioni</b>; <b>induttore enzimatico</b> (pillola, anticoagulanti, ART)"],
          ["Pirazinamide", "<b>La più epatotossica</b>; iperuricemia, gotta"],
          ["Etambutolo", "<b>Neurite ottica</b>: acuità visiva, visione rosso-verde"]
        ]}
      ]
    },
    "7": {
      summary: [
        "DOT per tutta la durata; <b>esame diretto e coltura dell’espettorato mensili</b> fino a due colture negative consecutive.",
        "<b>Coltura positiva dopo 2 mesi</b> → mancata aderenza o resistenza; in presenza di caverne, prolungare la continuazione a 7 mesi (9 in totale).",
        "Test di funzionalità epatica (basale e nei gruppi a rischio); <b>controllo mensile della vista</b> in corso di etambutolo.",
        "La TB è <b>a notifica obbligatoria</b>: indagine sui contatti. Radiografia di fine terapia come riferimento."
      ],
      visuals: [
        { type: "timeline", title: "Monitoraggio", points: [
          { at: "Basale", h: "Funzionalità epatica, vista", p: "Test HIV" },
          { at: "Mensile", h: "Esame diretto + coltura dell’espettorato", p: "Fino a 2 colture negative; vista se etambutolo" },
          { at: "Mese 2", h: "Coltura ancora positiva?", p: "Aderenza? Resistenza? Prolungare se cavitaria", tone: "warn" },
          { at: "Fine", h: "Radiografia del torace", p: "Nuovo riferimento" }
        ]}
      ]
    },
    "8": {
      summary: [
        "Il <b>BCG</b> protegge i bambini piccoli da <b>TB miliare e meningite tubercolare</b>; scarsa protezione contro la TB polmonare dell’adulto. Non di routine in Italia; vivo → non negli immunocompromessi.",
        "Terapia preventiva dopo aver escluso la malattia: <b>3HP</b> (isoniazide + rifapentina settimanali per 3 mesi), <b>4R</b>, <b>3HR</b>; oppure isoniazide per 6–9 mesi.",
        "Sospetta TB in ospedale: <b>stanza di isolamento respiratorio</b> (pressione negativa), <b>N95/FFP2-3 per il personale</b>, <b>mascherina chirurgica per il paziente</b> fuori dalla stanza.",
        "Sospendere l’isolamento quando la TB è esclusa, oppure dopo <b>≥2 settimane di terapia efficace + risposta clinica + 3 esami diretti negativi</b>."
      ],
      visuals: [
        { type: "compare", title: "Mascherine", cols: [
          { h: "Personale e visitatori", tone: "warn", items: ["Respiratore N95 / FFP2–FFP3"] },
          { h: "Paziente fuori dalla stanza", tone: "accent", items: ["Mascherina chirurgica"] }
        ]},
        { type: "table", title: "Terapia preventiva dell’infezione tubercolare", head: ["Schema", "Cosa"], rows: [
          ["3HP", "Isoniazide + rifapentina settimanali, 3 mesi"],
          ["4R", "Rifampicina giornaliera, 4 mesi"],
          ["3HR", "Isoniazide + rifampicina giornaliere, 3 mesi"],
          ["6–9H", "Isoniazide da sola (alternativa)"]
        ]}
      ]
    },
    "sedi-extrapolmonari-della-tubercolosi": {
      summary: [
        "La TB extrapolmonare rappresenta il <b>15–20%</b> di tutte le TB, di più nell’HIV e nei bambini.",
        "Più frequenti: <b>linfonodi</b> (indolenti, fissi, cervicali), poi <b>pleura</b>, poi <b>osso/articolazioni</b> (vertebrale: gibbo)."
      ],
      visuals: [
        { type: "bars", title: "Quota della TB extrapolmonare (approssimativa)", unit: "%", max: 40, rows: [
          { label: "Linfonodi", v: 38, t: "35–40%" },
          { label: "Pleura", v: 18, t: "15–20%" },
          { label: "Osso / articolazioni", v: 10, t: "≈10%" },
          { label: "Urogenitale", v: 8, t: "5–10%" },
          { label: "SNC", v: 5, t: "≈5%" },
          { label: "Addome", v: 5, t: "≈5%" },
          { label: "Pericardio", v: 1.5, t: "1–2%" }
        ]},
        { type: "table", title: "Indizi ad alto rendimento", head: ["Sede", "Indizio"], rows: [
          ["Linfonodi", "Indolenti, fissi, cervicali, fistolizzazione"],
          ["Osso (colonna)", "Dolore dorsale, gibbo"],
          ["Urogenitale", "<b>Piuria sterile</b>, ematuria"],
          ["SNC", "Paralisi dei nervi cranici, confusione"],
          ["Addome", "Ascite, diarrea cronica"],
          ["Cute", "Lupus vulgaris; eritema nodoso"]
        ]}
      ]
    }
  }
};
