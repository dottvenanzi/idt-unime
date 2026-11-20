/* Livello di ripasso per il Capitolo 10 — ABSSSI. Fonte: chapters-it/10-*.md */
window.REVISION = window.REVISION || {};
window.REVISION[10] = {
  sections: {
    "1": {
      summary: [
        "Prima domanda: <b>purulenta o non purulenta?</b>",
        "<b>Non purulenta</b> (erisipela, cellulite): <b>streptococchi β-emolitici</b> (A, B, C, G).",
        "<b>Purulenta</b> (ascesso, foruncolo, favo): <b><i>S. aureus</i></b>, compreso CA-MRSA (spesso PVL+).",
        "NSTI <b>tipo I</b>: polimicrobica (anaerobi + Enterobacterales), diabetici, perineo (Fournier). <b>Tipo II</b>: SBEA ± <i>S. aureus</i>, ospiti sani.",
        "Gangrena gassosa: <i>C. perfringens</i> (traumi); <b><i>C. septicum</i> → pensare a cancro del colon, neutropenia</b>.",
        "Indizi espositivi: acqua di mare + cirrosi → <i>Vibrio vulnificus</i>; morso di cane + asplenia → <i>Capnocytophaga</i>."
      ],
      visuals: [
        { type: "compare", title: "Pus = stafilococco, niente pus = streptococco", cols: [
          { h: "Non purulenta", tone: "accent", items: ["Erisipela, cellulite", "Streptococchi β-emolitici", "Colture di solito negative"] },
          { h: "Purulenta", tone: "warn", items: ["Ascesso, foruncolo, favo", "<i>S. aureus</i> compreso MRSA", "PVL nel CA-MRSA"] }
        ]},
        { type: "compare", title: "Infezione necrotizzante dei tessuti molli", cols: [
          { h: "Tipo I · polimicrobica", items: ["Anaerobi + Enterobacterales + streptococchi", "Anziani, diabetici, post-operatori", "Perineo: gangrena di Fournier"] },
          { h: "Tipo II · monomicrobica", tone: "warn", items: ["<i>Streptococcus</i> di gruppo A ± <i>S. aureus</i>", "Ogni età, ospiti sani", "Traumi minori", "Sindrome da shock tossico"] },
          { h: "Mionecrosi clostridica", tone: "warn", items: ["<i>C. perfringens</i>: traumi", "<i>C. septicum</i>: cancro del colon, neutropenia"] }
        ]},
        { type: "table", title: "Indizi dall’esposizione", head: ["Esposizione", "Patogeno"], rows: [
          ["Acqua di mare, molluschi + epatopatia", "<i>Vibrio vulnificus</i> (bolle emorragiche)"],
          ["Acqua dolce, sanguisughe", "<i>Aeromonas hydrophila</i>"],
          ["Morso di cane / gatto", "<i>Pasteurella</i>; <i>Capnocytophaga</i> (asplenia)"],
          ["Morso umano, pugno chiuso", "<i>Eikenella corrodens</i>"],
          ["Manipolazione di pesce, carne", "<i>Erysipelothrix</i>"],
          ["Vasca idromassaggio", "Follicolite da <i>Pseudomonas</i>"],
          ["Neutropenia", "<i>P. aeruginosa</i> (ectima gangrenoso)"]
        ]}
      ]
    },
    "2": {
      summary: [
        "<b>ABSSSI</b> è una definizione regolatoria (lesione ≥75 cm²): cellulite/erisipela, infezione di ferita, ascesso maggiore.",
        "Esclude piede diabetico, morsi, ustioni, osteomielite, NSTI.",
        "Gravità: <b>lieve</b> (nessun segno sistemico), <b>moderata</b> (segni sistemici), <b>grave</b> (ipotensione, disfunzione d’organo, immunocompromissione, infezione più profonda, fallimento di incisione e drenaggio).",
        "Fattori di rischio per cellulite: <b>tinea pedis / intertrigine</b>, linfedema, insufficienza venosa, obesità, cellulite pregressa.",
        "CA-MRSA epidemico negli USA; in Italia l’MRSA è per lo più associato all’assistenza sanitaria.",
        "La recidiva è frequente: circa <b>1 su 3 entro un anno</b> dopo ≥2 episodi."
      ],
      visuals: [
        { type: "ladder", title: "Gravità", steps: [
          { h: "Lieve", p: "Nessun segno sistemico", tone: "good" },
          { h: "Moderata", p: "Segni sistemici di infezione" },
          { h: "Grave", p: "Ipotensione / disfunzione d’organo, immunocompromissione, bolle o rapida progressione, fallimento di incisione e drenaggio + antibiotici orali", tone: "warn" }
        ]},
        { type: "chips", title: "Fattori di rischio", groups: [
          { h: "Cellulite", items: ["Tinea pedis, intertrigine interdigitale", "Linfedema", "Insufficienza venosa", "Prelievo di vena safena", "Obesità", "Cellulite pregressa"] },
          { h: "NSTI", items: ["Diabete", "Uso di droghe per via iniettiva", "Arteriopatia periferica", "Immunosoppressione", "Chirurgia / trauma recenti", "Varicella (bambini)"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "Ingresso attraverso una <b>soluzione di continuo della cute</b>, spesso invisibile (ragadi interdigitali).",
        "<b>La profondità definisce la sindrome</b>: erisipela = derma superficiale + linfatici (margine netto); cellulite = derma profondo + tessuto adiposo.",
        "Ascesso: delimitato dalla fibrina → gli antibiotici penetrano male → <b>drenare</b>.",
        "SBEA: proteina M, <b>superantigeni</b> → shock tossico.",
        "La NSTI si diffonde lungo la fascia, <b>trombosi dei vasi perforanti</b> → cute ischemica, bolle, <b>anestesia</b>; i tessuti profondi sono peggio di quanto suggerisca la cute.",
        "Clostridi: tossina α → mionecrosi, emolisi, gas."
      ],
      visuals: [
        { type: "ladder", title: "La profondità definisce l’infezione", steps: [
          { h: "Epidermide", p: "Impetigine" },
          { h: "Follicolo pilifero", p: "Follicolite → foruncolo → favo" },
          { h: "Derma superficiale + linfatici", p: "Erisipela (margine netto, rilevato)" },
          { h: "Derma profondo + sottocute", p: "Cellulite; ascesso se si raccoglie pus" },
          { h: "Fascia superficiale", p: "Fascite necrotizzante", tone: "warn" },
          { h: "Muscolo", p: "Mionecrosi, piomiosite", tone: "warn" }
        ]},
        { type: "flow", title: "Perché la NSTI inganna", steps: [
          { h: "Diffusione lungo i piani fasciali", p: "Tossine, enzimi" },
          { h: "Trombosi dei vasi perforanti", p: "La cute diventa ischemica" },
          { h: "Cute violacea, bolle, necrosi", p: "Segni tardivi" },
          { h: "Distruzione dei nervi", p: "Dolore → anestesia", tone: "warn" }
        ]}
      ]
    },
    "4": {
      summary: [
        "<b>Erisipela</b>: margine rilevato e netto, rosso vivo, esordio brusco con febbre alta. <b>Cellulite</b>: piana, mal delimitata.",
        "Cercare la <b>porta d’ingresso</b> (tra le dita dei piedi).",
        "Ascesso: nodulo fluttuante; ascessi ricorrenti in famiglia → CA-MRSA.",
        "<b>Indizio precoce di NSTI: dolore sproporzionato</b>, edema teso oltre l’eritema, rapida progressione, tossicità sistemica.",
        "<b>La \"cellulite\" bilaterale è rara</b>: circa 1 cellulite ricoverata su 3 è una simulatrice (dermatite da stasi, TVP, gotta, dermatite da contatto)."
      ],
      visuals: [
        { type: "compare", title: "Erisipela vs cellulite", cols: [
          { h: "Erisipela", tone: "accent", items: ["Rilevata, nettamente delimitata", "Rosso vivo, a buccia d’arancia", "Gamba o volto", "Esordio brusco, febbre alta"] },
          { h: "Cellulite", items: ["Piana, mal delimitata", "Rosa-rossa", "Gamba, unilaterale", "Esordio graduale"] }
        ]},
        { type: "compare", title: "Quando sospettare una NSTI", cols: [
          { h: "Precoce (sfumata)", tone: "warn", items: ["<b>Dolore sproporzionato</b>", "Edema teso oltre l’eritema", "Rapida progressione in terapia antibiotica", "Tossicità sistemica"] },
          { h: "Tardiva (evidente)", tone: "warn", items: ["Bolle emorragiche", "Necrosi, cute violacea", "Crepitio", "Anestesia", "Shock, sindrome da shock tossico"] }
        ]},
        { type: "table", title: "Simulatrici (pseudocellulite)", head: ["Simulatrice", "Indizio"], rows: [
          ["Dermatite da stasi", "<b>Bilaterale</b>, cronica, pruriginosa, senza febbre"],
          ["Trombosi venosa profonda", "Edema di tutto l’arto; ecografia"],
          ["Gotta", "Centrata sull’articolazione, molto dolorosa"],
          ["Dermatite da contatto", "Prurito, vescicole, forma geometrica"]
        ]}
      ]
    },
    "5": {
      summary: [
        "La diagnosi è <b>clinica</b>. <b>Segnare il margine</b> con data e ora.",
        "<b>Coltura del pus</b> degli ascessi. <b>Emocolture non di routine</b> nella cellulite tipica.",
        "Emocolture in: chemioterapia, neutropenia, immunodeficienza, lesioni da immersione, morsi di animale, sepsi, NSTI.",
        "L’ecografia individua gli ascessi occulti. TC/RM per le infezioni profonde, ma <b>l’imaging non deve mai ritardare la chirurgia</b>.",
        "NSTI: <b>l’esplorazione chirurgica è il gold standard</b>. LRINEC ≥6 è suggestivo; <b>un punteggio basso non esclude</b>."
      ],
      visuals: [
        { type: "table", title: "Quale esame, quando", head: ["Esame", "Quando"], rows: [
          ["Colorazione di Gram + coltura del pus", "Ascesso, infezione purulenta"],
          ["Emocolture", "Non di routine; sì in immunocompromissione, morsi, immersione, sepsi, NSTI"],
          ["Tampone di cute integra / superficie", "No: cresce la flora colonizzante"],
          ["Ecografia", "Ascesso occulto"],
          ["TC / RM", "Infezione profonda, gas, raccolte"],
          ["Colture di tessuto intraoperatorie", "NSTI (compresi anaerobi)"]
        ]},
        { type: "note", h: "Reperti chirurgici della NSTI", p: "Fascia grigia necrotica, nessuna resistenza alla dissezione smussa, liquido sottile \"ad acqua di lavastoviglie\", tessuti che non sanguinano." }
      ]
    },
    "6": {
      summary: [
        "<b>Prima il controllo della fonte</b>: drenare gli ascessi, sbrigliare la NSTI. Sollevare l’arto, trattare tinea ed edema.",
        "<b>Ascesso: incisione e drenaggio</b>; aggiungere un antistafilococcico orale dà un beneficio modesto.",
        "<b>Non purulenta: β-lattamico antistreptococcico</b> (penicillina, amoxicillina, cefalexina, flucloxacillina). <b>Nessuna copertura di routine per MRSA</b>.",
        "Coprire l’MRSA nelle forme non purulente solo con trauma penetrante, uso di droghe e.v., colonizzazione da MRSA, malattia grave.",
        "Cotrimossazolo e doxiciclina sono deboli sugli streptococchi.",
        "<b>5–6 giorni</b> se migliora; più a lungo nelle forme gravi.",
        "<b>NSTI: sbrigliamento urgente</b> + anti-MRSA + piperacillina-tazobactam/carbapenemico + <b>clindamicina</b> (soppressione delle tossine, effetto Eagle)."
      ],
      visuals: [
        { type: "algo", title: "Scelta dell’antibiotico", nodes: [
          { q: "Purulenta?", opts: [
            { when: "Sì", to: "Incisione e drenaggio ± antibiotico orale anti-<i>S. aureus</i>; anti-MRSA e.v. se grave", tone: "warn" },
            { when: "No", to: "β-lattamico antistreptococcico (orale se lieve, e.v. se moderata)", tone: "good" }
          ]},
          { q: "Sospetta NSTI?", opts: [
            { when: "Sì", to: "Chirurgia subito + anti-MRSA + piperacillina-tazobactam o carbapenemico + clindamicina", tone: "warn" }
          ]}
        ]},
        { type: "table", title: "Farmaci anti-MRSA", head: ["Via", "Farmaci"], rows: [
          ["Orale", "Cotrimossazolo, doxiciclina, clindamicina, linezolid, tedizolid"],
          ["E.v.", "Vancomicina, daptomicina, linezolid, ceftarolina"],
          ["A lunga durata d’azione", "Dalbavancina, oritavancina (1–2 infusioni, evitano il ricovero)"]
        ]},
        { type: "table", title: "Situazioni particolari", head: ["Situazione", "Punto chiave"], rows: [
          ["Morso animale / umano", "Irrigare, amoxicillina-clavulanato, tetano + rabbia"],
          ["NSTI da SBEA confermata, gangrena gassosa", "Penicillina + clindamicina"],
          ["<i>Vibrio vulnificus</i>", "Doxiciclina + ceftazidime"],
          ["Infezione del sito chirurgico", "Aprire e drenare l’incisione"],
          ["Piede diabetico", "Non trattare le ulcere non infette; probe-to-bone"]
        ]}
      ]
    },
    "7": {
      summary: [
        "Rivalutare a <b>48–72 h</b>.",
        "<b>L’arrossamento può estendersi nelle prime 24–48 h</b> anche con terapia efficace: non è un fallimento se il paziente è stabile.",
        "Fallimento: ascesso non drenato, NSTI, microrganismo resistente, <b>diagnosi sbagliata</b>, fattore predisponente non trattato.",
        "Dopo la guarigione: trattare tinea, edema, obesità per prevenire le recidive."
      ],
      visuals: [
        { type: "timeline", title: "Decorso atteso", points: [
          { at: "0–48 h", h: "L’eritema può ancora estendersi", p: "Usare il segno a penna" },
          { at: "48–72 h", h: "Rivalutare", p: "Febbre e dolore si riducono per primi", tone: "good" },
          { at: "Giorno 5–6", h: "Sospendere se migliora", p: "L’edema si risolve più tardi" }
        ]},
        { type: "table", title: "Non migliora?", head: ["Causa", "Azione"], rows: [
          ["Ascesso non drenato", "Ecografia, drenaggio"],
          ["NSTI / infezione profonda", "Chirurgo, TC/RM"],
          ["Microrganismo resistente o insolito", "Colture, allargare lo spettro in base all’esposizione"],
          ["Pseudocellulite", "Rivalutare, dermatologo"]
        ]}
      ]
    },
    "8": {
      summary: [
        "<b>Nessun vaccino</b> per SBEA o <i>S. aureus</i>. Verificare il <b>tetano</b>; rabbia dopo morsi di animale.",
        "Cellulite ricorrente: trattare la tinea, <b>compressione</b> per l’edema, <b>profilassi con penicillina</b> (il beneficio svanisce dopo la sospensione).",
        "Ascessi ricorrenti: <b>decolonizzazione</b> (mupirocina nasale, clorexidina), igiene, conviventi."
      ],
      visuals: [
        { type: "bars", title: "Cellulite ricorrente dell’arto inferiore: tasso di recidiva", unit: "%", max: 40, rows: [
          { label: "Senza compressione", v: 40, tone: "warn" },
          { label: "Compressione", v: 15 },
          { label: "Placebo (12 mesi)", v: 37, tone: "warn" },
          { label: "Profilassi con penicillina", v: 22 }
        ]}
      ]
    }
  }
};
