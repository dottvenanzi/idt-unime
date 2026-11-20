/* Livello di ripasso per il Capitolo 12 — Brucellosi. Fonte: chapters-it/12-brucellosis.md */
window.REVISION = window.REVISION || {};
window.REVISION[12] = {
  sections: {
    "1": {
      summary: [
        "Piccoli <b>coccobacilli gram-negativi</b>, <b>intracellulari facoltativi</b>.",
        "Ogni specie ha il suo ospite animale; <b><i>B. melitensis</i></b> (capre, pecore) è la più frequente e la più virulenta nell’uomo.",
        "<b>L’infezione acquisita in laboratorio più frequente</b>: le colture richiedono <b>BSL-3</b>. Avvisare il laboratorio."
      ],
      visuals: [
        { type: "cards", title: "Specie e ospiti animali", items: [
          { h: "<i>B. melitensis</i>", p: "Capre, pecore, cammelli", tag: "La più frequente, la più virulenta", tone: "warn" },
          { h: "<i>B. abortus</i>", p: "Bovini", tag: "" },
          { h: "<i>B. suis</i>", p: "Suini", tag: "" },
          { h: "<i>B. canis</i>", p: "Cani", tag: "" }
        ]}
      ]
    },
    "2": {
      summary: [
        "<b>La zoonosi più frequente al mondo</b>; 1,6–2,1 milioni di casi all’anno.",
        "Endemica: <b>Mediterraneo</b>, Medio Oriente, Asia centrale, Africa, America Latina.",
        "Via principale: <b>latticini non pastorizzati</b> (latte crudo, formaggi freschi). Anche contatto con placenta / prodotti abortivi, aerosol.",
        "Professionale: pastori, addetti ai macelli, veterinari, lavoratori caseari, <b>personale di laboratorio</b>.",
        "La trasmissione interumana è rara (trasfusione, trapianto, allattamento, rapporti sessuali, congenita)."
      ],
      visuals: [
        { type: "compare", title: "Come ci si infetta", cols: [
          { h: "Ingestione", tone: "warn", tag: "La più frequente", items: ["Latte crudo", "Formaggi freschi da latte non pastorizzato"] },
          { h: "Contatto", items: ["Placenta, prodotti abortivi", "Sangue, urine, latte degli animali"] },
          { h: "Inalazione", items: ["Aerosol (macello, laboratorio)"] }
        ]},
        { type: "chips", title: "Professioni a rischio", groups: [
          { h: "", items: ["Pastori", "Addetti ai macelli", "Veterinari", "Industria casearia", "Personale di laboratorio"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "Fagocitata, <b>sopravvive e si replica all’interno dei fagociti</b>, si diffonde al <b>sistema reticoloendoteliale</b>.",
        "Questo spiega l’<b>epatosplenomegalia e la linfoadenopatia</b>, perché la <b>coltura del midollo osseo</b> è più sensibile, e perché la terapia richiede <b>farmaci attivi intracellularmente, in associazione, a lungo</b>.",
        "Forme focali in circa il 30%; recidiva di solito entro 6 mesi."
      ],
      visuals: [
        { type: "flow", title: "La vita intracellulare spiega la malattia", steps: [
          { h: "Ingresso", p: "Intestino, cute, mucose, vie aeree" },
          { h: "Sopravvivenza nei fagociti", p: "Intracellulare facoltativa" },
          { h: "Diffusione reticoloendoteliale", p: "Fegato, milza, linfonodi, midollo osseo" },
          { h: "Forme focali, recidiva", p: "Qualsiasi organo; ~30% focali", tone: "warn" }
        ]}
      ]
    },
    "4": {
      summary: [
        "Incubazione <b>2–4 settimane</b> (fino a mesi).",
        "<b>Febbre, malessere, sudorazioni notturne</b> insidiosi (odore \"di muffa\"), <b>artralgie</b>.",
        "Laboratorio: transaminasi aumentate, anemia, leucopenia con <b>linfocitosi relativa</b>, piastrinopenia.",
        "<b>Osteoarticolare</b> = forma focale più frequente: <b>sacroileite</b> (giovani, unilaterale), <b>spondilite</b> (anziani, lombare).",
        "Epididimo-orchite, neurobrucellosi.",
        "<b>Endocardite</b> (0,3–2%, aortica) = <b>principale causa di morte</b>. Mortalità complessiva &lt;0,5%.",
        "Cronica: sintomi &gt;1 anno dopo la diagnosi."
      ],
      visuals: [
        { type: "bars", title: "Forme focali (quota delle forme focali, stima superiore)", unit: "%", max: 70, rows: [
          { label: "Osteoarticolari", v: 70, t: "fino al 70%" },
          { label: "Genitourinarie", v: 10, t: "fino al 10%" },
          { label: "Neurologiche", v: 10, t: "fino al 10%" },
          { label: "Cardiovascolari (endocardite)", v: 3, t: "fino al 3%", tone: "warn" }
        ]},
        { type: "compare", title: "Forme osteoarticolari", cols: [
          { h: "Sacroileite", items: ["Giovani adulti", "Spesso unilaterale"] },
          { h: "Spondilite", tone: "warn", items: ["Pazienti più anziani, malattia prolungata", "Lombare (L4–L5)", "Ascesso paravertebrale, epidurale, dello psoas", "Danno residuo"] },
          { h: "Artrite periferica", items: ["Grandi articolazioni"] }
        ]}
      ]
    },
    "5": {
      summary: [
        "Sospettare: <b>febbre prolungata + sudorazioni + artralgie + esposizione</b> (latticini, animali, lavoro).",
        "Richiedere <b>emocolture + sierologia</b>, emocromo, test di funzionalità epatica.",
        "<b>Definitiva</b>: coltura, o <b>aumento del titolo ≥4 volte</b> a distanza di ≥2 settimane. <b>Presuntiva</b>: <b>SAT ≥1:160</b> o PCR.",
        "La <b>coltura del midollo osseo</b> è più sensibile e meno influenzata dagli antibiotici.",
        "Usare <b>due test sierologici</b>. La SAT può essere <b>falsamente negativa nella malattia cronica</b> (anticorpi non agglutinanti): Coombs, 2-ME, ELISA IgG."
      ],
      visuals: [
        { type: "compare", title: "Diagnosi", cols: [
          { h: "Definitiva", tone: "good", items: ["Coltura (sangue, liquidi, tessuto)", "Aumento del titolo ≥4 volte, a ≥2 settimane"] },
          { h: "Presuntiva", tone: "accent", items: ["SAT ≥1:160", "PCR positiva"] }
        ]},
        { type: "ladder", title: "Sensibilità della coltura", steps: [
          { h: "Emocoltura", p: "Spesso negativa nella malattia cronica" },
          { h: "Coltura del midollo osseo", p: "Più sensibile, meno influenzata dagli antibiotici precedenti", tone: "good" }
        ], caption: "Avvisare il laboratorio: BSL-3." }
      ]
    },
    "6": {
      summary: [
        "Tre regole: <b>associazione</b>, <b>attività intracellulare</b>, <b>lunga durata</b>.",
        "<b>Mai monoterapia, mai &lt;6 settimane</b>: recidive.",
        "Non complicata: <b>doxiciclina + aminoglicoside</b> (meno recidive) o doxiciclina + rifampicina; <b>6 settimane</b>.",
        "Spondilite: doxiciclina + rifampicina + aminoglicoside, <b>≥12 settimane</b>. Neurobrucellosi: <b>ceftriaxone</b> + rifampicina + doxiciclina. Endocardite: + aminoglicoside nel primo mese; <b>consulenza cardiochirurgica per tutti</b>."
      ],
      visuals: [
        { type: "table", title: "Schemi", head: ["Forma", "Schema", "Durata"], rows: [
          ["Non complicata", "Doxiciclina + aminoglicoside (o + rifampicina)", "6 settimane"],
          ["Spondilite", "Doxiciclina + rifampicina + aminoglicoside", "≥12 settimane"],
          ["Neurobrucellosi", "Ceftriaxone + rifampicina + doxiciclina", "≥12 settimane (spesso 4–6 mesi)"],
          ["Endocardite", "Aminoglicoside (1° mese) + rifampicina + doxiciclina + chirurgia", "≥12 settimane (spesso 4–6 mesi)"]
        ]},
        { type: "ranges", title: "Durata minima (settimane)", max: 26, unit: " sett.", ticks: [0, 6, 12, 26], rows: [
          { label: "Non complicata", from: 6, to: 6, tone: "good", txt: "6 sett." },
          { label: "Spondilite", from: 12, to: 12, txt: "≥12 sett." },
          { label: "Neurobrucellosi, endocardite", from: 12, to: 26, tone: "warn", txt: "12 sett. – 6 mesi" }
        ]}
      ]
    },
    "7": {
      summary: [
        "<b>Recidiva entro 6 mesi</b> (fino a 12): cercare forme focali; la resistenza è rara.",
        "<b>La sierologia di controllo non è utile</b> per decidere la durata.",
        "Guidare la durata in base a decorso clinico, imaging, liquor, ecocardiogramma."
      ],
      visuals: [
        { type: "timeline", title: "Dopo la terapia", points: [
          { at: "Fine terapia", h: "Rivalutazione clinica", p: "Non la sierologia" },
          { at: "≤ 6 mesi", h: "Finestra di recidiva", p: "Cercare forme focali", tone: "warn" },
          { at: "&gt; 1 anno", h: "Brucellosi cronica", p: "Se i sintomi persistono" }
        ]}
      ]
    },
    "8": {
      summary: [
        "<b>Nessun vaccino per l’uomo</b>.",
        "<b>Pastorizzare o bollire il latte</b>; precauzioni professionali; controllo della malattia negli animali.",
        "Pazienti: niente rapporti sessuali non protetti, niente allattamento fino alla fine della terapia.",
        "Esposizione in laboratorio: PEP con <b>doxiciclina + rifampicina per 3 settimane</b> e monitoraggio sierologico."
      ],
      visuals: [
        { type: "compare", title: "Prevenzione", cols: [
          { h: "Alimenti", tone: "good", items: ["Pastorizzare o bollire il latte", "Evitare i formaggi a latte crudo"] },
          { h: "Lavoro", tone: "accent", items: ["Protezione con i tessuti animali", "BSL-3 in laboratorio", "PEP dopo esposizione in laboratorio"] },
          { h: "Animali", items: ["Programmi di controllo veterinario"] }
        ]}
      ]
    }
  }
};
