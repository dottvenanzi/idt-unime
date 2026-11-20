/* Livello di ripasso per il Capitolo 0 — Principi di terapia antibiotica. Fonte: chapters-it/00-antibiotic-therapy-principles.md */
window.REVISION = window.REVISION || {};
window.REVISION[0] = {
  sections: {
    "1": {
      summary: [
        "Ogni prescrizione risponde alle stesse domande: <b>infezione? batterica? dove? quali patogeni? quanto è grave? rischio MDR? fattori dell'ospite? controllo della fonte? quale farmaco, come, per quanto tempo?</b>",
        "La terapia <b>empirica</b> inizia prima che il patogeno sia noto; la terapia <b>mirata</b> segue identificazione e antibiogramma; la terapia <b>definitiva</b> è lo schema più ristretto, idealmente orale.",
        "<b>Colture prima della prima dose</b>: almeno <b>due set di emocolture</b> più campioni dalla sede. Una sola dose può sterilizzare sangue e liquor in poche ore.",
        "Nello <b>shock settico</b> o nella <b>meningite</b>, le colture non devono <b>mai ritardare</b> l'antibiotico.",
        "<b>Diagnostic stewardship</b>: non eseguire colture in pazienti senza sintomi (ad es. urine di pazienti asintomatici)."
      ],
      visuals: [
        { type: "flow", title: "Le nove domande, in ordine", steps: [
          { h: "1 · È un'infezione, ed è batterica?", p: "Febbre e proteina C reattiva non sono specifiche; le infezioni virali non richiedono antibiotici" },
          { h: "2–3 · Dove si trova, e quali patogeni sono probabili?", p: "Sede + contesto + ospite + esposizioni" },
          { h: "4 · Quanto è grave il paziente?", p: "La gravità decide quanto in fretta e quanto ampio" },
          { h: "5–6 · Rischio di resistenza? Fattori dell'ospite?", p: "Colonizzazione da MDR, antibiotici recenti; allergia, rene, fegato, gravidanza" },
          { h: "7 · Serve il controllo della fonte?", p: "Drenare, rimuovere, sbrigliare", tone: "warn" },
          { h: "8 · Quale farmaco, quale esposizione e quale via?", p: "Spettro, PK/PD, penetrazione, biodisponibilità" },
          { h: "9 · Quando rivaluto e quando sospendo?", p: "48–72 h: de-escalation, passaggio all'orale, definire la durata", tone: "good" }
        ]},
        { type: "timeline", title: "La vita di una prescrizione", points: [
          { at: "Prima della dose 1", h: "Colture", p: "2 set di emocolture + campione dalla sede" },
          { at: "Giorno 0", h: "Empirica", p: "Sede, contesto, gravità, rischio MDR" },
          { at: "48 – 72 h", h: "Mirata", p: "Patogeno + antibiogramma noti" },
          { at: "Data di sospensione", h: "Definitiva", p: "La più ristretta, la meno tossica, orale se possibile", tone: "good" }
        ]}
      ]
    },
    "2": {
      summary: [
        "Bersagli: <b>parete cellulare</b> (β-lattamici, glicopeptidi, fosfomicina), <b>membrana</b> (daptomicina, polimixine), <b>30S</b> (aminoglicosidi, tetracicline), <b>50S</b> (macrolidi, clindamicina, linezolid), <b>acidi nucleici</b> (fluorochinoloni, rifamicine, metronidazolo), <b>folati</b> (cotrimossazolo).",
        "La distinzione battericida/batteriostatico conta soprattutto dove le difese sono deboli: <b>endocardite, meningite, neutropenia febbrile</b>.",
        "Impara i <b>buchi</b> di ogni classe: spiegano la maggior parte dei fallimenti terapeutici.",
        "La <b>resistenza intrinseca</b> (fenotipi attesi EUCAST) viene refertata come R senza eseguire il test.",
        "EUCAST <b>\"I\" = sensibile, esposizione aumentata</b>, non \"intermedio\". Confronta ogni MIC con il <b>proprio breakpoint</b>.",
        "<b>AWaRe</b> dell'OMS: Access, Watch, Reserve. Obiettivo: ≥70% dell'uso dal gruppo Access entro il 2030."
      ],
      visuals: [
        { type: "compare", title: "Dove agisce ciascuna classe", cols: [
          { h: "Parete cellulare", tone: "accent", items: ["β-lattamici → PBP", "Glicopeptidi → D-Ala-D-Ala", "Fosfomicina → MurA"] },
          { h: "Membrana", items: ["Daptomicina (gram +)", "Polimixine (gram −)"] },
          { h: "Ribosoma", items: ["30S: aminoglicosidi, tetracicline, tigeciclina", "50S: macrolidi, clindamicina, linezolid"] },
          { h: "DNA / RNA / folati", items: ["Fluorochinoloni (girasi, topo IV)", "Rifampicina (RNA polimerasi)", "Metronidazolo (anaerobi)", "Cotrimossazolo (folati)"] }
        ]},
        { type: "cards", title: "Buchi di spettro da sapere", items: [
          { h: "Cefalosporine", p: "Niente <i>Enterococcus</i>, niente <i>Listeria</i>", tag: "Aggiungere ampicillina nella meningite", tone: "warn" },
          { h: "β-lattamici", p: "Niente patogeni atipici o intracellulari (<i>Legionella</i>, <i>Mycoplasma</i>, <i>Brucella</i>, <i>Rickettsia</i>)", tag: "Usare macrolide, tetraciclina, FQ" },
          { h: "Ertapenem", p: "Niente <i>Pseudomonas</i>, <i>Acinetobacter</i>, enterococchi", tag: "Non per la HAP" },
          { h: "Daptomicina", p: "Inattivata dal surfattante", tag: "Mai per la polmonite", tone: "warn" },
          { h: "Tigeciclina", p: "Niente <i>Pseudomonas</i>, <i>Proteus</i>, <i>Providencia</i>; bassi livelli sierici", tag: "Evitare nella batteriemia" },
          { h: "Nitrofurantoina, fosfomicina orali", p: "Nessun livello tissutale o ematico", tag: "Solo cistite" },
          { h: "Carbapenemi", p: "Niente MRSA, <i>E. faecium</i>, <i>Stenotrophomonas</i>", tag: "Non \"coprono tutto\"" },
          { h: "Aztreonam", p: "Solo gram-negativi; stabile alle MBL", tag: "Niente gram +, niente anaerobi" },
          { h: "Rifampicina", p: "Biofilm, micobatteri", tag: "Mai da sola", tone: "warn" }
        ]},
        { type: "table", title: "Resistenze intrinseche classiche", head: ["Microrganismo", "Sempre resistente a"], rows: [
          ["<i>Klebsiella pneumoniae</i>", "Ampicillina, amoxicillina"],
          ["<i>Enterobacter cloacae</i>, <i>K. aerogenes</i>, <i>C. freundii</i>", "Aminopenicilline ± clavulanato, cefalosporine di 1ª/2ª generazione (AmpC inducibile)"],
          ["<i>Proteus mirabilis</i>", "Colistina, nitrofurantoina, tigeciclina"],
          ["<i>Pseudomonas aeruginosa</i>", "Ceftriaxone, ertapenem, tigeciclina, cotrimossazolo"],
          ["<i>Stenotrophomonas</i>", "Carbapenemi"],
          ["<i>Enterococcus</i>", "Tutte le cefalosporine"],
          ["Anaerobi", "Aminoglicosidi"],
          ["<i>Mycoplasma</i>, <i>Chlamydia</i>", "Tutti i β-lattamici"]
        ]},
        { type: "compare", title: "Leggere un antibiogramma EUCAST", cols: [
          { h: "S", tag: "Dose standard", tone: "good", items: ["Alta probabilità di successo con il dosaggio standard"] },
          { h: "I", tag: "Esposizione aumentata", tone: "accent", items: ["Ancora sensibile: dose più alta, infusione prolungata o concentrazione nella sede", "NON \"intermedio\""] },
          { h: "R", tag: "Resistente", tone: "warn", items: ["Fallimento probabile anche con esposizione aumentata"] }
        ]},
        { type: "compare", title: "AWaRe dell'OMS", cols: [
          { h: "Access", tone: "good", items: ["Prima/seconda scelta per le infezioni comuni", "Amoxicillina (± clavulanato), cefazolina, doxiciclina, nitrofurantoina, cotrimossazolo"] },
          { h: "Watch", tone: "accent", items: ["Maggiore potenziale di resistenza: obiettivi della stewardship", "Ceftriaxone, fluorochinoloni, macrolidi, piperacillina-tazobactam, carbapenemi, vancomicina"] },
          { h: "Reserve", tone: "warn", items: ["Ultima risorsa per gli MDR", "Colistina, ceftazidime-avibactam, cefiderocol, linezolid, tigeciclina"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "La <b>sede</b> predice i patogeni e decide quali farmaci raggiungono livelli adeguati.",
        "Un farmaco attivo <i>in vitro</i> fallisce se non raggiunge la sede: <b>liquor, polmone, urine, prostata, osso, compartimento intracellulare, biofilm, ascesso</b> hanno ciascuno i propri vincitori e perdenti.",
        "Biodisponibilità orale eccellente (≥90%): <b>fluorochinoloni, linezolid, cotrimossazolo, metronidazolo, doxiciclina, clindamicina, rifampicina</b> → il passaggio precoce all'orale è facile.",
        "<b>Non assorbiti</b>: vancomicina orale, fidaxomicina, aminoglicosidi, colistina (solo lume intestinale)."
      ],
      visuals: [
        { type: "table", title: "Patogeni più probabili per sede", head: ["Sede", "Pensare a"], rows: [
          ["CAP", "<i>S. pneumoniae</i>, <i>H. influenzae</i>, atipici, virus"],
          ["HAP / VAP", "<i>P. aeruginosa</i>, Enterobacterales, <i>S. aureus</i>, <i>A. baumannii</i>"],
          ["Meningite", "<i>S. pneumoniae</i>, <i>N. meningitidis</i>; + <i>Listeria</i> se &gt;50 anni, gravidanza, immunodepressione"],
          ["Cistite / pielonefrite", "<i>E. coli</i> (la maggior parte), <i>Klebsiella</i>, <i>Proteus</i>"],
          ["Intra-addominale", "Polimicrobica: Enterobacterales + anaerobi (<i>B. fragilis</i>)"],
          ["Cellulite", "Streptococchi β-emolitici"],
          ["Ascesso", "<i>S. aureus</i> (compreso CA-MRSA)"],
          ["Endocardite su valvola nativa", "<i>S. aureus</i>, streptococchi viridanti, enterococchi"],
          ["Infezione del torrente ematico da catetere", "CoNS, <i>S. aureus</i>, <i>Candida</i>"],
          ["Uretrite", "<i>N. gonorrhoeae</i>, <i>C. trachomatis</i>"]
        ]},
        { type: "compare", title: "Penetrazione tissutale: vincitori e perdenti", cols: [
          { h: "Liquor", items: ["Buona: ceftriaxone, cefepime, meropenem, ampicillina, cotrimossazolo, linezolid, metronidazolo", "Scarsa: cefazolina, aminoglicosidi, clindamicina, daptomicina"] },
          { h: "Polmone", items: ["Buona: FQ, macrolidi, linezolid, β-lattamici", "Scarsa: <b>daptomicina</b>, aminoglicosidi"] },
          { h: "Urine / prostata", items: ["Prostata: FQ, cotrimossazolo", "Bassi livelli urinari: moxifloxacina, tigeciclina, echinocandine"] },
          { h: "Intracellulare", items: ["Buona: macrolidi, tetracicline, FQ, rifampicina", "Scarsa: β-lattamici, aminoglicosidi"] },
          { h: "Ascesso / biofilm", tone: "warn", items: ["Il drenaggio o la rimozione del dispositivo è il trattamento principale", "Aminoglicosidi inattivi nel pus acido", "Rifampicina per il biofilm stafilococcico, sempre con un partner"] }
        ]},
        { type: "compare", title: "Biodisponibilità orale", cols: [
          { h: "Eccellente ≥90%", tone: "good", items: ["Fluorochinoloni, linezolid, cotrimossazolo", "Metronidazolo, doxiciclina, clindamicina, rifampicina", "Livelli orali ≈ e.v."] },
          { h: "Da buona a moderata", items: ["Amoxicillina ± clavulanato", "Cefalexina, cefadroxil"] },
          { h: "Bassa", items: ["Cefuroxima axetil, cefixima, cefpodoxima", "Fosfomicina orale"] },
          { h: "Non assorbiti", tone: "accent", items: ["Vancomicina orale, fidaxomicina", "Aminoglicosidi, colistina", "Solo lume intestinale (<i>C. difficile</i>)"] }
        ]}
      ]
    },
    "4": {
      summary: [
        "<b>La gravità decide tempi e ampiezza</b>: shock settico o sepsi probabile → terapia ad ampio spettro <b>entro 1 ora</b>; sepsi possibile senza shock → valutazione rapida, antibiotici entro 3 h se il sospetto persiste.",
        "Infezione localizzata e paziente stabile → c'è <b>tempo</b> per campionare e scegliere un farmaco a spettro ristretto.",
        "Fattori dell'ospite: età, immunodepressione, <b>antibiotici negli ultimi 90 giorni</b> (scegliere un'altra classe), funzione renale ed epatica, gravidanza, allergia, QT, interazioni, dispositivi.",
        "<b>Non ridurre mai la dose di carico</b> per l'insufficienza renale.",
        "L'etichetta di allergia alla penicillina è <b>di solito errata</b> (&gt;90% non allergici); reattività crociata con i carbapenemi &lt;1%.",
        "<b>Controllo della fonte</b> (idealmente entro 6 h nella sepsi): gli antibiotici non possono sterilizzare un ascesso non drenato.",
        "Terapia di combinazione: ampliare la copertura empirica, sinergia, prevenire le resistenze, sopprimere le tossine, infezioni polimicrobiche, biofilm. Non è migliore per la terapia definitiva dei gram-negativi sensibili."
      ],
      visuals: [
        { type: "ladder", title: "La gravità regola l'orologio", steps: [
          { h: "Lieve, probabilmente virale", p: "Nessun antibiotico, o prescrizione differita" },
          { h: "Stabile, localizzata", p: "Tempo per confermare, campionare, scegliere a spettro ristretto; talvolta attendere le colture" },
          { h: "Sepsi possibile, senza shock", p: "Valutazione rapida; antibiotici entro 3 h se il sospetto di infezione persiste" },
          { h: "Shock settico / sepsi probabile, neutropenia, meningite", p: "Terapia empirica ad ampio spettro subito, idealmente entro 1 h", tone: "warn" }
        ]},
        { type: "compare", title: "Gravidanza", cols: [
          { h: "Sicuri", tone: "good", items: ["Penicilline", "Cefalosporine", "Azitromicina", "Nitrofurantoina (non a termine)", "Fosfomicina"] },
          { h: "Da evitare", tone: "warn", items: ["Tetracicline (denti, osso)", "Aminoglicosidi (ototossicità fetale)", "Fluorochinoloni", "Cotrimossazolo: 1° trimestre e a termine"] }
        ]},
        { type: "table", title: "Perché associare due farmaci", head: ["Motivo", "Esempio"], rows: [
          ["Ampliare la copertura empirica", "β-lattamico + aminoglicoside o farmaco anti-MRSA fino all'esito delle colture"],
          ["Sinergia", "Endocardite da <i>E. faecalis</i>: ampicillina + ceftriaxone"],
          ["Prevenire le resistenze", "TB, rifampicina, HIV"],
          ["Sopprimere le tossine", "Clindamicina + β-lattamico nella fascite necrotizzante, nella sindrome da shock tossico"],
          ["Polimicrobica", "Ceftriaxone + metronidazolo (intra-addominale)"],
          ["Biofilm", "Associazioni con rifampicina nelle infezioni protesiche"]
        ]}
      ]
    },
    "5": {
      summary: [
        "<b>MDR</b> = non sensibile ad ≥1 farmaco in ≥3 categorie; <b>XDR</b> = a tutte tranne ≤2; <b>PDR</b> = a tutte; <b>DTR</b> = resistente a tutti i β-lattamici e fluorochinoloni di prima linea.",
        "Il più forte predittore di un'infezione da MDR: <b>precedente colonizzazione o infezione da quel microrganismo</b>. Inoltre antibiotici negli ultimi 90 giorni, contatti con l'assistenza sanitaria, dispositivi, prevalenza locale.",
        "<b>Italia</b>: tra i tassi più alti in UE di <i>K. pneumoniae</i> e <i>A. baumannii</i> resistenti ai carbapenemi.",
        "Batteriemia da ESBL → <b>carbapenemico</b> (piperacillina-tazobactam non preferita).",
        "Produttori di AmpC (<i>E. cloacae</i>, <i>K. aerogenes</i>, <i>C. freundii</i>) → <b>cefepime</b> o carbapenemico; evitare il ceftriaxone nelle infezioni gravi.",
        "La classe di carbapenemasi decide il farmaco: <b>KPC / OXA-48 vs MBL</b>."
      ],
      visuals: [
        { type: "table", title: "Resistenza nei gram-negativi: meccanismo → farmaco", head: ["Meccanismo", "Batterio tipico", "Funziona ancora"], rows: [
          ["ESBL (CTX-M)", "<i>E. coli</i>, <i>K. pneumoniae</i>", "Carbapenemi"],
          ["AmpC inducibile", "<i>E. cloacae</i>, <i>K. aerogenes</i>, <i>C. freundii</i>", "Cefepime, carbapenemi"],
          ["KPC", "<i>K. pneumoniae</i> (endemica in Italia)", "Ceftazidime-avibactam, meropenem-vaborbactam, imipenem-relebactam, cefiderocol"],
          ["OXA-48-simili", "<i>K. pneumoniae</i>, <i>E. coli</i>", "Ceftazidime-avibactam, cefiderocol"],
          ["MBL (NDM, VIM, IMP)", "Enterobacterales, <i>P. aeruginosa</i>", "Ceftazidime-avibactam + aztreonam, aztreonam-avibactam, cefiderocol"],
          ["Perdita di porine, efflusso", "<i>P. aeruginosa</i> (DTR)", "Ceftolozane-tazobactam e altri nuovi farmaci in base all'antibiogramma"],
          ["OXA-23/24/58", "<i>A. baumannii</i> (CRAB)", "Terapia a base di sulbactam, colistina, cefiderocol"]
        ], caption: "Gram-positivi: MRSA = <i>mecA</i> → PBP2a; VRE = <i>vanA/vanB</i> → D-Ala-D-Lac." },
        { type: "algo", title: "Enterobacterales resistenti ai carbapenemi: quale carbapenemasi?", nodes: [
          { q: "Test rapido per la classe di carbapenemasi", opts: [
            { when: "KPC", to: "Meropenem-vaborbactam o ceftazidime-avibactam" },
            { when: "OXA-48-simili", to: "Ceftazidime-avibactam" },
            { when: "MBL (NDM, VIM)", to: "Ceftazidime-avibactam + aztreonam, aztreonam-avibactam o cefiderocol", tone: "warn" }
          ]}
        ], caption: "L'avibactam non inibisce le MBL; l'aztreonam è stabile alle MBL. Farmaci Reserve con il parere dell'infettivologo." },
        { type: "chips", title: "Fattori di rischio per microrganismi MDR", groups: [
          { h: "Tutti", items: ["Colonizzazione/infezione nota", "Antibiotici negli ultimi 90 giorni", "Contatti con l'assistenza sanitaria", "Dispositivi invasivi", "Prevalenza locale"] },
          { h: "ESBL", items: ["Viaggi in Asia meridionale, Medio Oriente, Nord Africa", "Lungodegenza", "IVU ricorrenti"] },
          { h: "CRE / CRAB", items: ["Terapia intensiva, ventilazione", "Carbapenemi in precedenza", "Ustioni, traumi", "Trasferimento da aree endemiche"] },
          { h: "MRSA", items: ["Emodialisi", "Uso di droghe per via iniettiva", "Polmonite necrotizzante dopo influenza"] }
        ]}
      ]
    },
    "6": {
      summary: [
        "<b>PK</b>: ciò che l'organismo fa al farmaco. <b>PD</b>: ciò che il farmaco fa al batterio, in rapporto alla <b>MIC</b>.",
        "Solo la <b>frazione libera</b> è attiva. I farmaci idrofili (β-lattamici, aminoglicosidi, glicopeptidi) restano extracellulari e sono eliminati per via renale; i farmaci lipofili entrano nelle cellule.",
        "<b>β-lattamici: tempo-dipendenti</b> (%fT&gt;MIC) → dosi frequenti, <b>infusione prolungata</b>.",
        "<b>Aminoglicosidi, fluorochinoloni: concentrazione-dipendenti</b> (Cmax/MIC, AUC/MIC) → dose elevata una volta al giorno.",
        "<b>Vancomicina: AUC/MIC</b> 400–600 → TDM guidato dall'AUC.",
        "Nella sepsi: <b>↑ volume di distribuzione</b> e <b>aumentata clearance renale</b> → sottodosaggio. Somministrare una dose di carico piena."
      ],
      visuals: [
        { type: "pkpd" },
        { type: "table", title: "Indice PK/PD → strategia di dosaggio", head: ["Indice", "Farmaci", "Strategia"], rows: [
          ["%fT&gt;MIC", "β-lattamici", "Dosi frequenti, infusione prolungata o continua; obiettivo in terapia intensiva 100% fT&gt;MIC"],
          ["Cmax/MIC, AUC/MIC", "Aminoglicosidi, fluorochinoloni", "Dose elevata, una volta al giorno; l'intervallo lungo riduce la nefrotossicità"],
          ["AUC<sub>24</sub>/MIC", "Vancomicina, linezolid, tigeciclina, colistina", "Ottimizzare l'esposizione giornaliera totale; AUC della vancomicina 400–600"]
        ]},
        { type: "compare", title: "Il paziente critico", cols: [
          { h: "↑ Volume di distribuzione", tone: "warn", items: ["Capillary leak, fluidi, edema, ECMO", "Bassi livelli dei farmaci idrofili", "Dose di carico piena indipendentemente dalla funzione renale"] },
          { h: "Aumentata clearance renale", tone: "warn", items: ["CrCl &gt;130 ml/min", "Giovani, traumi, ustioni, sepsi", "β-lattamici e vancomicina sotto i livelli terapeutici"] },
          { h: "AKI / CRRT", items: ["Accumulo o sottodosaggio"] },
          { h: "Ipoalbuminemia", items: ["Clearance più rapida di ceftriaxone, ertapenem, teicoplanina"] }
        ]},
        { type: "table", title: "Monitoraggio terapeutico dei farmaci", head: ["Farmaco", "Perché", "Cosa misurare"], rows: [
          ["Aminoglicosidi", "Nefro- e ototossicità", "Picco (efficacia) + valle (tossicità)"],
          ["Vancomicina", "La nefrotossicità aumenta con l'esposizione", "Guidato dall'AUC (bayesiano), non solo la valle"],
          ["β-lattamici (terapia intensiva)", "Elevata variabilità PK", "fT&gt;MIC"],
          ["Linezolid, voriconazolo", "Tossicità, PK variabile", "Valle"]
        ]}
      ]
    },
    "7": {
      summary: [
        "<b>Antibiotic time-out a 48–72 h</b>: confermare la diagnosi, mirare la terapia sul patogeno, de-escalation, passaggio all'orale, fissare una data di sospensione, verificare il controllo della fonte.",
        "<b>La de-escalation è sicura</b>: nessun aumento della mortalità.",
        "<b>E.v. → orale</b> quando il paziente migliora, è apiretico, stabile, l'intestino funziona ed esiste un farmaco attivo biodisponibile.",
        "<b>Più breve è di solito meglio</b>: ogni giorno in più aggiunge eventi avversi.",
        "Cicli lunghi servono ancora per <b>endocardite, batteriemia da <i>S. aureus</i>, infezioni osteoarticolari, infezioni protesiche, TB, brucellosi</b>, ascessi non drenati.",
        "La <b>procalcitonina</b> aiuta a <b>sospendere</b> gli antibiotici, non a decidere di iniziarli nella sepsi sospetta.",
        "Danni collaterali: eventi avversi in ~20% dei ricoverati in terapia antibiotica, <i>C. difficile</i>, selezione di resistenze, <i>Candida</i>."
      ],
      visuals: [
        { type: "flow", title: "Il time-out a 48–72 h", steps: [
          { h: "Infezione batterica confermata?", p: "Se no → sospendere", tone: "warn" },
          { h: "Patogeno identificato?", p: "Passare alla terapia mirata" },
          { h: "Restringere lo spettro o eliminare un farmaco?", p: "ad es. meropenem → ceftriaxone; sospendere la vancomicina se non c'è MRSA" },
          { h: "Passaggio all'orale possibile?", p: "" },
          { h: "Data di sospensione scritta in cartella?", p: "", tone: "good" },
          { h: "Nessun miglioramento?", p: "Focus non drenato, patogeno resistente, causa non infettiva, febbre da farmaci" }
        ]},
        { type: "ranges", title: "Durate basate sulle evidenze (giorni, in scala)", max: 42, ticks: [0, 7, 14, 21, 28, 35, 42], rows: [
          { label: "Cistite non complicata", from: 1, to: 5 },
          { label: "Infezione intra-addominale complicata (fonte controllata)", from: 4, to: 4 },
          { label: "CAP", from: 5, to: 5, note: "almeno" },
          { label: "Cellulite", from: 5, to: 6 },
          { label: "Pielonefrite / IVU complicata", from: 5, to: 7 },
          { label: "HAP / VAP", from: 7, to: 7 },
          { label: "Batteriemia da gram-negativi (non complicata)", from: 7, to: 7 },
          { label: "Batteriemia da <i>S. aureus</i>, non complicata", from: 14, to: 14, tone: "warn", note: "≥" },
          { label: "Endocardite infettiva", from: 28, to: 42, tone: "warn" },
          { label: "Osteomielite vertebrale", from: 42, to: 42, tone: "warn" }
        ]},
        { type: "chips", title: "Gli strumenti della stewardship", groups: [
          { h: "", items: ["Audit prospettico con feedback", "Autorizzazione preventiva dei farmaci soggetti a restrizione", "Linee guida locali basate sull'antibiogramma locale", "Diagnostica rapida", "Promemoria per passaggio e.v.-orale e data di sospensione", "Rimozione delle false etichette di allergia", "Formazione", "Prevenzione e controllo delle infezioni"] }
        ]}
      ]
    }
  }
};
