/* Livello di ripasso per il Capitolo 21 — Arbovirosi. Fonte: chapters-it/21-*.md */
window.REVISION = window.REVISION || {};
window.REVISION[21] = {
  sections: {
    "1": {
      summary: [
        "Sono tutti <b>virus a RNA con envelope</b>: <b>flavivirus</b> (dengue, Zika, West Nile, febbre gialla, JE), <b>alphavirus</b> (chikungunya), <b>bunyavirus</b> (Toscana, Oropouche).",
        "<b>Proteina E</b> dei flavivirus → anticorpi neutralizzanti e <b>reattività crociata</b>; <b>NS1</b> secreta → antigene diagnostico.",
        "Dengue: <b>4 sierotipi</b>; immunità permanente solo verso lo stesso sierotipo.",
        "La mutazione <b>E1-A226V</b> ha adattato chikungunya ad <i>Ae. albopictus</i>.",
        "<i>Aedes</i> (diurne): dengue, chikungunya, Zika, febbre gialla urbana. <i>Culex</i> (notturne): <b>West Nile</b>, JE. <b>Flebotomi</b>: Toscana.",
        "L’uomo è un <b>ospite a fondo cieco</b> per WNV, JEV, Toscana; <b>ospite amplificatore</b> per dengue, chikungunya, Zika (un viaggiatore viremico può innescare un focolaio locale)."
      ],
      visuals: [
        { type: "table", title: "Virus e vettori", head: ["Virus", "Vettore", "Serbatoio", "Uomo"], rows: [
          ["Dengue", "<i>Ae. aegypti</i>, <i>Ae. albopictus</i>", "Uomo", "Amplificatore"],
          ["Chikungunya", "<i>Aedes</i>", "Uomo", "Amplificatore"],
          ["Zika", "<i>Aedes</i> (+ sessuale, verticale)", "Uomo", "Amplificatore"],
          ["Febbre gialla", "<i>Aedes</i>, <i>Haemagogus</i>", "Primati", "Amplificatore (urbana)"],
          ["West Nile", "<i>Culex pipiens</i>", "<b>Uccelli</b>", "<b>Fondo cieco</b>"],
          ["Encefalite giapponese", "<i>Culex</i> (risaie)", "Suini, uccelli trampolieri", "Fondo cieco"],
          ["Toscana", "<b>Flebotomi</b>", "Non chiaro", "Fondo cieco"],
          ["Oropouche", "Culicoidi", "Bradipi, primati", "Amplificatore"]
        ]},
        { type: "compare", title: "Quando pungono", cols: [
          { h: "Giorno", tone: "accent", items: ["<i>Aedes</i> (zanzara tigre)", "Picchi dopo l’alba e prima del tramonto", "Si riproduce in piccoli contenitori"] },
          { h: "Crepuscolo e notte", items: ["<i>Culex</i>", "Flebotomi (passano attraverso le zanzariere comuni)"] }
        ]}
      ]
    },
    "2": {
      summary: [
        "<b>Dengue</b> = l’arbovirosi più frequente: ~390 milioni di infezioni/anno; <b>record 2024 &gt;14 milioni di casi</b>.",
        "Febbre gialla: Africa e Sud America, <b>non Asia</b>. JE: Asia rurale, bambini.",
        "Fattori: cambiamento climatico, urbanizzazione, viaggi; <i>Ae. albopictus</i> stabilmente presente in Italia.",
        "<b>Italia 2025</b>: chikungunya 384 autoctoni; <b>West Nile 779 casi autoctoni, 72 morti</b> (Lazio, Campania); Toscana 113; dengue per lo più importata.",
        "Primo focolaio di chikungunya in un Paese temperato: <b>Italia 2007</b>.",
        "Stagione a rischio in Italia: <b>giugno–novembre</b>. Viaggiatore febbrile: <b>escludere prima la malaria</b>."
      ],
      visuals: [
        { type: "bars", title: "Italia 2025: casi autoctoni", max: 779, rows: [
          { label: "West Nile", v: 779, t: "779 (72 morti)", tone: "warn" },
          { label: "Chikungunya", v: 384, t: "384" },
          { label: "Virus Toscana", v: 112, t: "112" },
          { label: "Dengue", v: 4, t: "4 (213 importati)" }
        ]},
        { type: "stats", items: [
          { v: "&gt;14 mln", l: "casi di dengue segnalati, 2024" },
          { v: "giu–nov", l: "stagione di trasmissione locale in Italia" },
          { v: "2007", l: "primo focolaio di chikungunya in Italia" }
        ]}
      ]
    },
    "3": {
      summary: [
        "Puntura → cellule dendritiche cutanee → linfonodi → <b>viremia</b> → organo in base al <b>tropismo</b>.",
        "Dengue: <b>potenziamento anticorpo-dipendente</b> in una <b>seconda infezione da sierotipo diverso</b> → più virus, citochine.",
        "<b>Perdita di plasma</b> (NS1 e citochine danneggiano il glicocalice): transitoria 24–48 h, <b>intorno allo sfebbramento</b>.",
        "Chikungunya: il virus persiste nei macrofagi sinoviali → <b>artrite cronica</b>.",
        "Zika: <b>progenitori neurali</b> fetali → microcefalia; persiste nello sperma.",
        "West Nile, JE: neuroni comprese le <b>corna anteriori</b> → paralisi flaccida. Febbre gialla: <b>necrosi epatica medio-zonale</b> (corpi di Councilman)."
      ],
      visuals: [
        { type: "flow", title: "Perché la dengue secondaria è più pericolosa", steps: [
          { h: "Prima infezione (ad es. DENV-1)", p: "Immunità permanente solo verso DENV-1" },
          { h: "Seconda infezione (DENV-2)", p: "I vecchi anticorpi legano ma non neutralizzano" },
          { h: "Potenziamento anticorpo-dipendente", p: "I complessi entrano nei monociti tramite i recettori Fc" },
          { h: "Più virus, tempesta citochinica", p: "Perdita di plasma, shock", tone: "warn" }
        ]},
        { type: "table", title: "Tropismo", head: ["Virus", "Bersaglio", "Risultato"], rows: [
          ["Dengue", "Endotelio, sangue", "Perdita capillare, piastrinopenia"],
          ["Chikungunya", "Articolazioni, tendini, muscoli", "Artrite invalidante, cronica"],
          ["Zika", "Encefalo fetale, nervi", "Microcefalia, Guillain-Barré"],
          ["West Nile, JE", "Neuroni, corna anteriori", "Encefalite, paralisi flaccida"],
          ["Febbre gialla", "Fegato (zona 2)", "Ittero, emorragie, insufficienza renale"]
        ]}
      ]
    },
    "4": {
      summary: [
        "<b>Dengue</b>: febbre, <b>dolore retro-orbitario</b>, mialgie, esantema, leucopenia, piastrinopenia.",
        "Fasi: <b>febbrile → critica (intorno allo sfebbramento, 24–48 h) → recupero</b>.",
        "<b>Segni d’allarme</b>: dolore addominale, vomito persistente, accumulo di liquidi, sanguinamento mucoso, letargia, fegato &gt;2 cm, <b>ematocrito in aumento + piastrine in calo</b>.",
        "Lo shock può iniziare con <b>PA normale</b>: pressione differenziale ridotta, tachicardia.",
        "<b>Chikungunya</b>: febbre alta improvvisa + <b>poliartralgia simmetrica invalidante</b>; cronica nel 30–60%.",
        "<b>Zika</b>: lieve, esantema pruriginoso, <b>congiuntivite</b>; sindrome congenita, GBS.",
        "<b>West Nile</b>: 80% silente; &lt;1% neuroinvasiva (anziani, immunocompromessi). Febbre gialla: segno di Faget, fase tossica. <b>Toscana</b>: meningite estiva nell’Italia centrale."
      ],
      visuals: [
        { type: "timeline", title: "Dengue: tre fasi", points: [
          { at: "Giorni 1–3 (–7)", h: "Febbrile", p: "Febbre alta, esantema, leucopenia" },
          { at: "Sfebbramento, 24–48 h", h: "Critica", p: "Perdita di plasma, rischio di shock", tone: "warn" },
          { at: "Successive 48–72 h", h: "Recupero", p: "Riassorbimento dei liquidi; sovraccarico se si continuano i liquidi e.v.", tone: "good" }
        ]},
        { type: "chips", title: "Segni d’allarme della dengue (uno qualsiasi → ospedale)", groups: [
          { h: "", items: ["Dolore addominale", "Vomito persistente", "Accumulo di liquidi", "Sanguinamento mucoso", "Letargia, irrequietezza", "Fegato &gt;2 cm", "Ematocrito in aumento + piastrine in calo"] }
        ]},
        { type: "table", title: "Viaggiatore febbrile", head: ["", "Dengue", "Chikungunya", "Zika", "Malaria"], rows: [
          ["Febbre", "Alta", "Molto alta", "Bassa / assente", "Alta"],
          ["Dolori articolari", "Moderati", "<b>Invalidanti</b>", "Lievi", "No"],
          ["Esantema", "Frequente", "Frequente", "<b>Pruriginoso</b>", "Raro"],
          ["Congiuntivite", "Rara", "Rara", "<b>Frequente</b>", "No"],
          ["Piastrine", "<b>Molto basse</b>", "Lievemente basse", "Normali", "Basse"],
          ["Rischio principale", "Perdita di plasma", "Artrite cronica", "Gravidanza", "Morte se non riconosciuta"]
        ]}
      ]
    },
    "5": {
      summary: [
        "Sospettare: febbre dopo un viaggio ai tropici (dopo la <b>malaria</b>), febbre + esantema/artralgie nell’estate italiana, <b>meningite/encefalite estiva</b> (WNV, Toscana).",
        "<b>Prima settimana: RT-PCR</b> (+ <b>NS1</b> per la dengue); <b>dal giorno 4–5: IgM</b>.",
        "La sierologia dei flavivirus <b>dà reazioni crociate</b> (anche dopo vaccinazione) → confermare con <b>PRNT</b>.",
        "<b>Le IgM liquorali diagnosticano la malattia neuroinvasiva da WNV/JE</b>.",
        "Dengue: leucopenia, piastrinopenia, <b>aumento dell’ematocrito ≥20%</b>, prova del laccio.",
        "Notificare: un caso viremico in estate attiva il <b>controllo dei vettori</b> attorno all’abitazione."
      ],
      visuals: [
        { type: "ranges", title: "Quale esame, quando (giorni di malattia)", max: 21, ticks: [0, 5, 7, 14, 21], rows: [
          { label: "RT-PCR (sangue)", from: 1, to: 7, tone: "warn", txt: "Giorni 1–7" },
          { label: "Antigene NS1 della dengue", from: 1, to: 7, txt: "Giorni 1–7" },
          { label: "IgM", from: 4, to: 21, txt: "Dal giorno 4–5" },
          { label: "IgG / sieri appaiati, PRNT", from: 7, to: 21, txt: "Dalla 2ª settimana" }
        ]},
        { type: "note", h: "Reattività crociata", p: "Gli anticorpi dopo dengue, Zika, West Nile, TBE, o dopo vaccinazione contro febbre gialla / JE / TBE / dengue possono dare una sierologia per flavivirus falsamente positiva. Registrare viaggi e vaccini; confermare con la neutralizzazione (PRNT)." }
      ]
    },
    "6": {
      summary: [
        "<b>Nessun antivirale</b>: terapia di supporto.",
        "<b>Paracetamolo</b>; <b>niente FANS né aspirina</b> (finché la dengue non è esclusa). <b>Niente paracetamolo nell’insufficienza epatica</b> da febbre gialla.",
        "<b>Niente corticosteroidi, niente trasfusioni profilattiche di piastrine</b>; cristalloidi, non colloidi.",
        "Gruppi della dengue: <b>A domicilio</b> (liquidi per os), <b>B ospedale</b> (segni d’allarme, comorbidità), <b>C emergenza</b> (grave).",
        "Liquidi per mantenere la perfusione; <b>ridurli quando la perdita si esaurisce</b> (sovraccarico nel recupero). Ematocrito in calo + instabilità → emorragia → trasfondere.",
        "Artrite cronica da chikungunya: FANS, brevi cicli di corticosteroidi, <b>metotrexato</b>."
      ],
      visuals: [
        { type: "compare", title: "OMS 2025: cosa fare e cosa non fare", cols: [
          { h: "Sì", tone: "good", items: ["Paracetamolo (non nella febbre gialla)", "Liquidi per os secondo protocollo", "Cristalloidi per i liquidi e.v.", "Refill capillare, lattato per guidare i liquidi", "N-acetilcisteina e.v. nell’insufficienza epatica da febbre gialla"] },
          { h: "No", tone: "warn", items: ["FANS, aspirina", "Corticosteroidi sistemici", "Trasfusione profilattica di piastrine", "Colloidi", "Immunoglobuline (eccetto GBS)"] }
        ]},
        { type: "ladder", title: "Gruppi di gestione della dengue", steps: [
          { h: "Gruppo A · domicilio", p: "Nessun segno d’allarme, beve, urina: liquidi per os, paracetamolo, rivalutazione quotidiana", tone: "good" },
          { h: "Gruppo B · ospedale", p: "Segni d’allarme o comorbidità / rischio sociale: cristalloidi e.v. se necessario, monitoraggio dell’ematocrito" },
          { h: "Gruppo C · emergenza", p: "Dengue grave: terapia intensiva, boli di cristalloidi, trasfusione per le emorragie", tone: "warn" }
        ]}
      ]
    },
    "7": {
      summary: [
        "Dengue: ematocrito e piastrine ogni giorno <b>fino a 48 h dopo lo sfebbramento</b>; dimissione se apiretico da 24–48 h, piastrine in aumento.",
        "Counseling: un <b>secondo sierotipo è più pericoloso</b>.",
        "Chikungunya: rivalutare le articolazioni a 3 settimane e a 3 mesi; reumatologo se persistente.",
        "Zika: ecografie fetali seriate; nel lattante circonferenza cranica, encefalo, occhi, udito. <b>Preservativo per 3 mesi (uomini), 2 mesi (donne)</b>.",
        "I pazienti viremici con dengue/chikungunya/Zika devono <b>evitare le punture di zanzara</b>; nessun isolamento necessario."
      ],
      visuals: [
        { type: "cards", title: "Dopo la malattia acuta", items: [
          { h: "Dengue", p: "Monitorare fino a 48 h dalla fine della febbre", tag: "Secondo sierotipo più pericoloso", tone: "warn" },
          { h: "Chikungunya", p: "Articolazioni a 3 settimane e 3 mesi", tag: "Reumatologia" },
          { h: "Zika", p: "Follow-up della gravidanza, sesso sicuro", tag: "3 / 2 mesi" },
          { h: "West Nile, JE", p: "Riabilitazione", tag: "Sequele" },
          { h: "Paziente viremico in Italia", p: "Repellenti, zanzariere, schermature", tag: "Prevenire la diffusione locale" }
        ]}
      ]
    },
    "8": {
      summary: [
        "Prevenzione delle punture: <b>DEET</b>, icaridina, IR3535; abiti lunghi; permetrina; zanzariere. <i>Aedes</i> di giorno; <i>Culex</i> e flebotomi di notte.",
        "Controllo dei vettori: <b>eliminare l’acqua stagnante</b>, larvicidi; <i>Wolbachia</i> riduce la dengue.",
        "Vaccini: <b>febbre gialla</b> (vivo, una dose per la vita), <b>JE</b> (inattivato, 2 dosi), <b>dengue TAK-003</b> (vivo, dai 4 anni), <b>chikungunya</b> (VLP Vimkunya; il vivo Ixchiq è soggetto a restrizioni).",
        "<b>Dengvaxia solo per i sieropositivi</b>.",
        "Vaccino antiamarillico controindicato: lattanti &lt;6 mesi, malattie del timo, immunosoppressione grave.",
        "Nessun vaccino per Zika, West Nile, Toscana, Oropouche."
      ],
      visuals: [
        { type: "table", title: "Vaccini", head: ["Vaccino", "Tipo", "Punto chiave"], rows: [
          ["Febbre gialla 17D", "Vivo", "Una dose per la vita; non nell’immunosoppressione grave"],
          ["Encefalite giapponese", "Inattivato", "2 dosi; viaggiatori nell’Asia rurale"],
          ["Dengue TAK-003", "Vivo, tetravalente", "UE dai 4 anni, 2 dosi"],
          ["Dengue CYD-TDV", "Vivo", "<b>Solo se dengue pregressa</b>"],
          ["Chikungunya VLP", "Non vivo", "Dose singola dai 12 anni"],
          ["Zika, WNV, Toscana, Oropouche", "—", "Nessuno"]
        ]},
        { type: "compare", title: "Prevenzione delle punture", cols: [
          { h: "Personale", tone: "good", items: ["Repellenti (DEET, icaridina)", "Abiti lunghi e chiari", "Permetrina su abiti e zanzariere", "Zanzariere alle finestre, aria condizionata"] },
          { h: "Comunità", tone: "accent", items: ["Eliminare l’acqua stagnante", "Larvicidi nei tombini", "Adulticidi attorno ai casi", "Zanzare con <i>Wolbachia</i>"] }
        ]}
      ]
    }
  }
};
