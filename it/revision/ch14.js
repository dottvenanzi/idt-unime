/* Livello di ripasso per il Capitolo 14 — Malaria.
   Scritto da /chapters-it/14-malaria.md; il testo completo è mostrato sotto ogni scheda. */
window.REVISION = window.REVISION || {};
window.REVISION[14] = {
  sections: {
    "1": {
      summary: [
        "Protozoi del genere <b><i>Plasmodium</i></b>, trasmessi dalla zanzara <b>femmina di <i>Anopheles</i></b>, soprattutto <b>dal tramonto all’alba</b>.",
        "<b><i>P. falciparum</i></b> causa quasi tutte le forme gravi e i decessi; invade globuli rossi di ogni età.",
        "<b><i>P. vivax</i> e <i>P. ovale</i></b> lasciano nel fegato <b>ipnozoiti</b> quiescenti → recidive.",
        "<b>Fase epatica</b> = asintomatica, corrisponde all’incubazione. <b>Fase ematica</b> = sintomi. <b>Gametociti</b> = trasmissione."
      ],
      visuals: [
        { type: "lifecycle" },
        { type: "cards", title: "Le cinque specie", items: [
          { h: "<i>P. falciparum</i>", p: "Africa subsahariana. Globuli rossi di ogni età, parassitemia elevata. Nessun ipnozoite.", tag: "Forme gravi, decessi", tone: "warn" },
          { h: "<i>P. vivax</i>", p: "Asia, America Latina. Può essere anche grave.", tag: "Ipnozoiti → recidiva" },
          { h: "<i>P. ovale</i>", p: "Soprattutto Africa occidentale. Di solito lieve.", tag: "Ipnozoiti → recidiva" },
          { h: "<i>P. malariae</i>", p: "Parassitemia di basso grado che persiste per anni. Nessun ipnozoite.", tag: "Cronica" },
          { h: "<i>P. knowlesi</i>", p: "Malaria delle scimmie del Sud-Est asiatico (zoonosi). Replicazione rapida.", tag: "Può essere grave" }
        ]}
      ]
    },
    "2": {
      summary: [
        "La maggior parte dei casi e dei decessi: <b>Africa subsahariana</b>, <b>bambini sotto i 5 anni</b> e <b>donne in gravidanza</b>.",
        "Le infezioni ripetute conferiscono un’<b>immunità parziale</b>: gli adulti nelle aree endemiche hanno sintomi lievi o assenti.",
        "I <b>viaggiatori</b> non hanno immunità e sono a rischio molto elevato di malaria grave da falciparum.",
        "In Italia: <b>malaria d’importazione</b>, soprattutto migranti che <b>tornano a visitare amici e parenti</b> (VFR) e non fanno la profilassi.",
        "L’immunità parziale o una profilassi inadeguata possono <b>prolungare l’incubazione</b>."
      ],
      visuals: [
        { type: "stats", items: [
          { v: "≈ 250 mln", l: "casi all’anno (stima OMS)" },
          { v: "≈ 600.000", l: "morti all’anno" },
          { v: "< 5 anni", l: "i bambini sopportano la maggior parte delle forme gravi" }
        ]},
        { type: "compare", title: "Chi sviluppa forme gravi", cols: [
          { h: "Chi vive in area endemica", items: ["Immunità parziale dopo infezioni ripetute", "Adulti: sintomi lievi o assenti", "Bambini piccoli e donne in gravidanza i più a rischio"] },
          { h: "Viaggiatore / VFR", tone: "warn", items: ["Nessuna immunità", "Rischio molto elevato di <i>P. falciparum</i> grave", "I viaggiatori VFR spesso non fanno la profilassi"] }
        ]},
        { type: "chips", title: "Vie senza zanzara (rare)", groups: [
          { h: "", items: ["Trasfusione di sangue", "Trapianto d’organo", "Scambio di aghi", "Congenita"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "<b>Febbre</b>: la rottura degli schizonti libera prodotti parassitari → citochine (TNF). La periodicità <b>non è affidabile</b> per la diagnosi.",
        "<b>Citoaderenza</b> (<i>P. falciparum</i>): PfEMP1 sulle protuberanze (knobs) dei globuli rossi lega l’endotelio → <b>sequestro</b> in cervello, rene, polmone, intestino, placenta.",
        "I parassiti sequestrati sfuggono alla milza, quindi lo <b>striscio periferico può sottostimare</b> la carica parassitaria.",
        "<b>Anemia</b>: distruzione di globuli rossi infetti e non infetti, clearance splenica, ridotta produzione midollare. Emolisi massiva → <b>febbre emoglobinurica</b>.",
        "<b>Ipoglicemia</b>: consumo da parte del parassita, gluconeogenesi compromessa, liberazione di insulina con il chinino."
      ],
      visuals: [
        { type: "flow", title: "Citoaderenza: da una proteina all’insufficienza d’organo", steps: [
          { h: "PfEMP1 sulle protuberanze del globulo rosso", p: "Proteina del parassita sulla superficie della cellula infetta" },
          { h: "Legame all’endotelio dei piccoli vasi", p: "ICAM-1 (cervello), CD36, condroitin solfato A (placenta)" },
          { h: "Sequestro + rosetting", p: "I parassiti maturi restano nel microcircolo e sfuggono alla milza" },
          { h: "Ostruzione microvascolare", p: "Ipossia, attivazione endoteliale, infiammazione" },
          { h: "Danno d’organo", p: "Coma, acidosi, insufficienza renale, ARDS, malaria placentare", tone: "warn" }
        ]},
        { type: "compare", title: "Tre conseguenze metaboliche", cols: [
          { h: "Febbre", items: ["Rottura degli schizonti", "Citochine (TNF)", "Brividi, rigor, sudorazioni"] },
          { h: "Anemia", items: ["Emolisi di globuli rossi infetti e non infetti", "Clearance splenica", "Ridotta produzione midollare", "Febbre emoglobinurica = emoglobinuria"] },
          { h: "Ipoglicemia", tone: "warn", items: ["Consumo di glucosio da parte del parassita", "Gluconeogenesi compromessa", "Chinino → liberazione di insulina"] }
        ]}
      ]
    },
    "4": {
      summary: [
        "Incubazione di <i>P. falciparum</i>: <b>12–14 giorni</b> (intervallo 7–30). <i>Vivax</i>/<i>ovale</i> possono presentarsi <b>settimane o mesi</b> dopo.",
        "I sintomi sono <b>aspecifici</b>: febbre con brividi e sudorazioni, cefalea, mialgie, sintomi gastrointestinali. L’<b>anamnesi di viaggio</b> è la chiave.",
        "Laboratorio: <b>piastrinopenia</b>, anemia, aumento di bilirubina e transaminasi. La splenomegalia è frequente.",
        "<b>Non complicata</b>: può deglutire, test positivo, parassitemia &lt;4%, nessun criterio di gravità.",
        "<b>Malaria grave</b> = disfunzione d’organo e/o iperparassitemia (≥4–10%). Richiede terapia immediata."
      ],
      visuals: [
        { type: "incubation" },
        { type: "grid", title: "Malaria grave: riconoscerla subito", items: [
          { h: "Neurologica", p: "Alterazione dello stato di coscienza, coma, convulsioni" },
          { h: "Ematologica", p: "Anemia grave, coagulopatia" },
          { h: "Metabolica", p: "Ipoglicemia, acidosi metabolica" },
          { h: "Respiratoria", p: "Distress respiratorio, ARDS" },
          { h: "Cardiovascolare", p: "Collasso circolatorio" },
          { h: "Renale", p: "Insufficienza renale, emoglobinuria" },
          { h: "Epatica", p: "Insufficienza epatica, ittero" },
          { h: "Parassitologica", p: "Iperparassitemia ≥4–10%" }
        ]},
        { type: "compare", title: "Bambini vs adulti", cols: [
          { h: "Più nei bambini", items: ["Convulsioni", "Anemia grave"] },
          { h: "A ogni età", tone: "accent", items: ["Coma", "Shock", "Acidosi", "Compromissione renale"] },
          { h: "Più negli adulti", items: ["Iperparassitemia", "ARDS", "Ittero"] }
        ]}
      ]
    },
    "5": {
      summary: [
        "Sospettare la malaria con <b>febbre ≥37,5 °C + residenza o viaggio in area endemica</b>, anche settimane o mesi dopo il rientro.",
        "Diagnosi definitiva = sintomi compatibili <b>+ test positivo</b>. Confermare i parassiti ogni volta che è possibile.",
        "La <b>microscopia</b> è lo standard: la goccia spessa rileva, lo striscio sottile identifica la specie e conta la parassitemia.",
        "<b>Test rapidi (RDT)</b> (HRP2, pLDH, aldolasi): 15–20 min, semplici, ma <b>nessuna quantificazione</b>. I test HRP2 non rilevano i parassiti con delezione di <i>pfhrp2/3</i> (Amazzonia peruviana, Eritrea).",
        "Negativo ma ancora sospetto → <b>ripetere ogni giorno per altri due giorni</b>. La PCR è soprattutto per laboratori di riferimento e ricerca."
      ],
      visuals: [
        { type: "algo", title: "Febbre dopo un viaggio", nodes: [
          { q: "Febbre ≥37,5 °C + esposizione in area endemica?", opts: [{ when: "Sì", to: "Sospettare la malaria, anche in corso di profilassi", next: true }] },
          { q: "Testare subito", opts: [{ when: "Strumenti", to: "Microscopia (goccia spessa + striscio sottile) o RDT se non è disponibile una microscopia di qualità", next: true }] },
          { q: "Risultato?", opts: [
            { when: "Positivo", to: "Specie + parassitemia → grave o non complicata?", tone: "warn" },
            { when: "Negativo, il sospetto persiste", to: "Ripetere ogni giorno per altri 2 giorni", tone: "accent" }
          ]}
        ]},
        { type: "table", title: "Microscopia vs RDT", head: ["", "Microscopia", "RDT"], rows: [
          ["Ruolo", "Strumento standard", "Quando non è disponibile una microscopia di qualità"],
          ["Specie", "Sì", "Limitata, dipende dal test"],
          ["Parassitemia", "<b>Sì</b>", "<b>No</b>"],
          ["Rapidità / competenza", "Più lenta; personale esperto", "15–20 min; semplice"],
          ["Insidia", "Non rileva parassitemie molto basse (&lt;5–10/µl)", "Falsi negativi con delezioni di <i>pfhrp2/3</i>"]
        ]},
        { type: "compare", title: "Due preparati, due compiti", cols: [
          { h: "Goccia spessa", items: ["Concentra il sangue", "<b>Rileva</b> i parassiti"] },
          { h: "Striscio sottile", items: ["Identifica la <b>specie</b>", "Conta la <b>parassitemia</b> (% di globuli rossi infetti)"] }
        ]}
      ]
    },
    "6": {
      summary: [
        "<b>Falciparum non complicata</b> → <b>ACT</b> (terapia combinata a base di artemisinina).",
        "Malaria in corso di profilassi → trattare con un <b>farmaco diverso</b>.",
        "<b>Malaria grave</b> → terapia parenterale: <b>artesunato e.v.</b> piuttosto che chinino e.v.",
        "La malaria grave richiede anche <b>emocolture + ceftriaxone empirico</b> (gram-negativi compresa <i>Salmonella</i>) e terapia di supporto intensiva.",
        "<b>Vivax/ovale</b>: aggiungere <b>primachina o tafenochina</b> (cura radicale) dopo aver escluso il <b>deficit di G6PD</b> e la gravidanza."
      ],
      visuals: [
        { type: "algo", title: "Decisione terapeutica", nodes: [
          { q: "Qualche criterio di gravità, o incapacità di deglutire?", opts: [
            { when: "No", to: "ACT per os (non il farmaco della profilassi)", tone: "good" },
            { when: "Sì", to: "Artesunato e.v. subito + emocolture + ceftriaxone + terapia di supporto", tone: "warn", next: true }
          ]},
          { q: "Passare ad ACT orale quando TUTTE sono presenti", opts: [
            { when: "1", to: "≥24 h di terapia parenterale" },
            { when: "2", to: "Tollera i farmaci per os" },
            { when: "3", to: "Parassitemia ≤1%" }
          ]}
        ]},
        { type: "chips", title: "Terapia di supporto nella malaria grave (la morte può sopraggiungere in poche ore)", groups: [
          { h: "", items: ["Supporto respiratorio", "Valutazione del coma", "Trattare l’ipoglicemia", "Gestire anemia e coagulopatia", "Liquidi con cautela (rischio di edema polmonare)"] }
        ]},
        { type: "note", h: "Perché gli antibiotici nella malaria grave?", p: "Un’infezione batterica invasiva, soprattutto la batteriemia da <i>Salmonella</i> non tifoidea, coesiste spesso con la malaria grave, soprattutto nei bambini, e non è distinguibile clinicamente." },
        { type: "note", h: "Malaria recidivante", p: "I farmaci attivi sulla fase ematica non uccidono gli ipnozoiti. La cura radicale con un’8-aminochinolina richiede prima un test G6PD normale: il deficit comporta un rischio di emolisi grave." }
      ]
    },
    "7": {
      summary: [
        "Gli strisci di controllo devono mostrare una <b>parassitemia in calo</b>, di solito negativizzata in <b>48–72 h</b>.",
        "<b>Striscio positivo al giorno 3</b> → sospettare una <b>resistenza parziale all’artemisinina</b>: parere esperto, terapia più lunga, strisci quotidiani.",
        "Dopo artesunato e.v.: controllare l’<b>emoglobina a 7, 14 e 30 giorni</b> (emolisi tardiva post-artesunato).",
        "Dopo vivax/ovale: avvisare del rischio di <b>recidive</b> se non è stata fatta la cura radicale."
      ],
      visuals: [
        { type: "timeline", title: "Dopo l’inizio della terapia", points: [
          { at: "Giorno 0", h: "Inizio della terapia", p: "" },
          { at: "48 – 72 h", h: "Striscio negativo", p: "Clearance attesa", tone: "good" },
          { at: "Giorno 3", h: "Ancora positivo?", p: "Sospettare resistenza all’artemisinina", tone: "warn" },
          { at: "Giorni 7, 14, 30", h: "Emoglobina", p: "Dopo artesunato e.v.: emolisi tardiva" },
          { at: "Settimane – mesi", h: "Recidiva?", p: "Vivax / ovale senza cura radicale" }
        ]}
      ]
    },
    "8": {
      summary: [
        "A livello di popolazione: <b>controllo dei vettori, chemioprevenzione, vaccinazione</b>, oltre a diagnosi e terapia precoci (che riducono anche la trasmissione).",
        "Vaccini <b>RTS,S/AS01</b> e <b>R21/Matrix-M</b>: per i <b>bambini nelle aree endemiche</b>, parzialmente protettivi, <b>non per i viaggiatori</b>.",
        "Viaggiatori: <b>prevenzione delle punture</b> per tutti, <b>chemioprofilassi</b> per chi è a rischio (farmaco scelto in base a itinerario e paziente).",
        "<b>La febbre durante o dopo un viaggio richiede una valutazione urgente, anche se è stata fatta la profilassi.</b>"
      ],
      visuals: [
        { type: "compare", title: "Due livelli di prevenzione", cols: [
          { h: "Popolazione (aree endemiche)", items: ["Controllo dei vettori (attenzione alla resistenza agli insetticidi)", "Chemioprevenzione, soprattutto in gravidanza", "Vaccinazione dei bambini", "Diagnosi e terapia precoci", "Sorveglianza"] },
          { h: "Viaggiatore", tone: "accent", items: ["Evitare l’esposizione dal tramonto all’alba", "Stanze con zanzariere o aria condizionata", "Abbigliamento protettivo", "Repellenti per insetti", "Chemioprofilassi se a rischio"] }
        ]}
      ]
    }
  }
};
