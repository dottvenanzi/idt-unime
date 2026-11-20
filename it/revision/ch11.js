/* Livello di ripasso per il Capitolo 11 — Osteomielite, spondilodiscite e PJI. Fonte: chapters-it/11-osteomyelitis-spondylodiscitis.md */
window.REVISION = window.REVISION || {};
window.REVISION[11] = {
  sections: {
    "1": {
      summary: [
        "<b><i>S. aureus</i></b> è la causa principale a ogni età e in ogni sede (circa metà delle infezioni vertebrali).",
        "Bambini &lt;4 anni: <b><i>Kingella kingae</i></b> (PCR, flaconi per emocoltura). Anemia falciforme: <b><i>Salmonella</i></b>.",
        "PWID, cateteri: <i>Pseudomonas</i>, <i>Candida</i>. Chiodo attraverso la scarpa: <b><i>P. aeruginosa</i></b>.",
        "Piede diabetico: polimicrobico. Spondilodiscite granulomatosa: <b>TB, <i>Brucella</i></b>.",
        "CoNS e <i>C. acnes</i> sono significativi se presenti in <b>più campioni profondi</b> vicino a un impianto. <i>S. lugdunensis</i> si comporta come <i>S. aureus</i>.",
        "PJI: stafilococchi &gt;50%; il microrganismo dipende dal <b>momento</b> (precoce virulento, ritardata a bassa virulenza, tardiva ematogena)."
      ],
      visuals: [
        { type: "table", title: "Microrganismo per contesto", head: ["Contesto", "Pensare a"], rows: [
          ["Ematogena, adulto (vertebrale)", "<i>S. aureus</i>, streptococchi, enterococchi, <i>E. coli</i>"],
          ["Ematogena, bambino", "<i>S. aureus</i>; <i>K. kingae</i> se &lt;4 anni"],
          ["Anemia falciforme", "<i>Salmonella</i>, <i>S. aureus</i>"],
          ["Uso di droghe per via iniettiva, cateteri", "<i>S. aureus</i>, <i>P. aeruginosa</i>, <i>Candida</i>"],
          ["Impianti, mezzi di sintesi", "<i>S. aureus</i>, CoNS, <i>C. acnes</i>"],
          ["Puntura attraverso la scarpa", "<i>P. aeruginosa</i>"],
          ["Piede diabetico", "Polimicrobico, compresi anaerobi"],
          ["Spondilodiscite cronica", "<i>M. tuberculosis</i>, <i>Brucella</i>"]
        ]},
        { type: "timeline", title: "PJI: il momento predice il microrganismo", points: [
          { at: "&lt; 3 mesi", h: "Precoce", p: "Acquisita in sala operatoria; <i>S. aureus</i>, gram-negativi", tone: "warn" },
          { at: "3–12 mesi", h: "Ritardata", p: "Bassa virulenza: CoNS, <i>C. acnes</i> (spalla)" },
          { at: "&gt; 12 mesi", h: "Tardiva", p: "Ematogena: <i>S. aureus</i>, streptococchi, gram-negativi", tone: "warn" }
        ]}
      ]
    },
    "2": {
      summary: [
        "Incidenza circa 22/100.000 all’anno, più alta negli uomini, <b>in aumento con l’età e il diabete</b>.",
        "Bambini: ossa lunghe. <b>Adulti &gt;50 anni: vertebre</b> (lombari &gt; toraciche &gt; cervicali).",
        "Focolaio contiguo: fratture esposte, impianti, sternotomia, lesioni da pressione. Insufficienza vascolare: <b>piede diabetico</b>.",
        "La PJI complica l’1–2% delle protesi primarie d’anca/ginocchio; la batteriemia da <i>S. aureus</i> può infettare fino a un terzo delle protesi.",
        "Rischio di osteomielite vertebrale: <b>endocardite</b>, IVU, cateteri, uso di droghe e.v., diabete, emodialisi, procedure spinali."
      ],
      visuals: [
        { type: "stats", items: [
          { v: "22", l: "per 100.000 anni-persona" },
          { v: "&gt;50 anni", l: "fascia d’età della forma vertebrale" },
          { v: "1–2%", l: "protesi primarie d’anca / ginocchio infette" }
        ]},
        { type: "chips", title: "Fattori di rischio per osteomielite vertebrale", groups: [
          { h: "Fonte della batteriemia", items: ["Endocardite", "IVU", "Infezione cutanea", "Cateteri venosi", "Uso di droghe per via iniettiva"] },
          { h: "Ospite", items: ["Diabete", "Età avanzata", "Emodialisi", "Immunosoppressione", "Neoplasia", "Cirrosi"] },
          { h: "Iatrogeni", items: ["Chirurgia spinale", "Infiltrazioni epidurali", "Discografia"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "Tre vie: <b>ematogena, focolaio contiguo, contigua con insufficienza vascolare</b>.",
        "Il pus aumenta la pressione nell’osso rigido → ischemia → <b>sequestro</b> (osso morto con biofilm) + <b>involucro</b> + tramite fistoloso.",
        "→ <b>L’osteomielite cronica richiede la chirurgia</b>; i soli antibiotici raramente la guariscono.",
        "Bambini: flusso lento nella <b>metafisi</b>; lattanti: estensione all’articolazione.",
        "Adulti: un’arteria segmentaria irrora <b>due piatti vertebrali adiacenti</b> → due vertebre + il disco avascolare.",
        "<b>La TB risparmia il disco</b>, più livelli toracici, ascesso freddo, gibbo.",
        "PJI: bastano pochi batteri; <b>il biofilm giovane si può sbrigliare, quello maturo richiede la rimozione dell’impianto</b>."
      ],
      visuals: [
        { type: "compare", title: "Tre vie", cols: [
          { h: "Ematogena", tone: "accent", items: ["La batteriemia colonizza l’osso", "Bambini: metafisi delle ossa lunghe", "Adulti &gt;50 anni: vertebre"] },
          { h: "Focolaio contiguo", items: ["Traumi, chirurgia, impianti", "Fratture esposte, sternotomia", "Lesioni da pressione"] },
          { h: "Con insufficienza vascolare", tone: "warn", items: ["Piede diabetico", "Arteriopatia periferica"] }
        ]},
        { type: "flow", title: "Dalla forma acuta alla cronica", steps: [
          { h: "Adesione", p: "Matrice ossea, impianto; sopravvivenza negli osteoblasti" },
          { h: "Infiammazione, alta pressione", p: "Vasi compressi → necrosi ischemica" },
          { h: "Sequestro", p: "Osso morto + biofilm, irraggiungibile dagli antibiotici", tone: "warn" },
          { h: "Involucro, tramite fistoloso", p: "Osso neoformato attorno; il pus drena alla cute" }
        ]},
        { type: "flow", title: "Perché due vertebre e un disco", dir: "row", steps: [
          { h: "Arteria segmentaria", p: "Irrora due piatti adiacenti" },
          { h: "Colonizzazione del piatto", p: "Osso subcondrale" },
          { h: "Disco distrutto", p: "Avascolare nell’adulto" },
          { h: "Estensione", p: "Ascesso epidurale, dello psoas", tone: "warn" }
        ]}
      ]
    },
    "4": {
      summary: [
        "Bambini: febbre, dolore osseo, <b>zoppia o rifiuto del carico</b>, pseudoparalisi nei lattanti.",
        "Spondilodiscite: <b>dolore dorsale localizzato</b>, peggiore di notte; <b>febbre spesso assente</b>; dolorabilità alla percussione.",
        "<b>Deficit neurologico = emergenza</b> (ascesso epidurale). Ascesso dello psoas: dolore all’anca / all’inguine.",
        "Cronica: tramite fistoloso, secrezione, pseudoartrosi, pochi segni sistemici.",
        "Piede diabetico: ulcera profonda e di lunga durata, <b>dito a salsicciotto</b>, osso visibile o palpabile.",
        "PJI: precoce (ferita, febbre), ritardata (<b>dolore persistente</b>, simile alla mobilizzazione), tardiva (acuta in un’articolazione che funzionava). <b>Tramite fistoloso = PJI</b>."
      ],
      visuals: [
        { type: "table", title: "Spondilite piogenica vs tubercolare vs brucellare", head: ["", "Piogenica", "Tubercolare", "Brucellare"], rows: [
          ["Esordio", "Giorni–settimane", "<b>Mesi</b>", "Settimane–mesi"],
          ["Livello", "<b>Lombare</b>", "<b>Toracico</b>", "Lombare (L4–L5)"],
          ["Disco", "Distrutto precocemente", "<b>Risparmiato fino a tardi</b>", "Variabile"],
          ["Ascesso", "Piccolo", "<b>Grande, freddo</b>", "Raro"],
          ["Deformità", "Rara", "<b>Gibbo</b>", "Rara"],
          ["Esame chiave", "Emocolture, biopsia", "Biopsia (istologia, coltura, NAAT)", "Sierologia, emocolture"]
        ]},
        { type: "compare", title: "Infezione di protesi articolare", cols: [
          { h: "Precoce", tone: "warn", items: ["Arrossamento della ferita, secrezione", "Febbre, versamento"] },
          { h: "Ritardata", items: ["Dolore persistente dall’intervento", "Spesso senza febbre", "Scambiata per mobilizzazione asettica"] },
          { h: "Tardiva ematogena", tone: "warn", items: ["Dolore acuto, tumefazione, febbre", "In un’articolazione che funzionava bene", "Durante una batteriemia"] }
        ]}
      ]
    },
    "5": {
      summary: [
        "Sospettare una spondilodiscite: <b>dolore dorsale + febbre, VES/PCR elevate, batteriemia o endocardite</b>.",
        "Emocolture ×2 e VES/PCR in tutti; sierologia per <i>Brucella</i>, test per TB in base all’esposizione; <b>ecocardiogramma</b> se rischio di endocardite.",
        "<b>RM con gadolinio</b> = esame di scelta. La radiografia è in ritardo di ~2 settimane. TC per i sequestri e per guidare la biopsia.",
        "Campionare <b>prima degli antibiotici</b> se stabile e neurologicamente integro.",
        "Emocolture con <i>S. aureus</i>, <i>S. lugdunensis</i> o <i>Brucella</i> + RM compatibile → biopsia non necessaria. Altrimenti <b>biopsia guidata dall’imaging</b>.",
        "<b>I tamponi del tramite fistoloso non sono affidabili</b>. Piede diabetico: <b>probe-to-bone + VES + radiografia</b>, poi RM o biopsia ossea.",
        "PJI: <b>artrocentesi</b> (senza antibiotici da ~2 settimane); 3–5 campioni intraoperatori; sonicazione."
      ],
      visuals: [
        { type: "algo", title: "Identificare il patogeno nella spondilodiscite", nodes: [
          { q: "Emocolture positive per <i>S. aureus</i>, <i>S. lugdunensis</i> o <i>Brucella</i>, RM compatibile?", opts: [
            { when: "Sì", to: "Biopsia non necessaria: trattare", tone: "good" },
            { when: "No", to: "Biopsia TC-guidata: coltura, istologia ± micobatteri / funghi", next: 1 }
          ]},
          { q: "Biopsia diagnostica?", opts: [
            { when: "Sì", to: "Terapia mirata sul patogeno", tone: "good" },
            { when: "No", to: "Ripetere o biopsia a cielo aperto; considerare anaerobi, funghi, TB", tone: "warn" }
          ]}
        ]},
        { type: "table", title: "Imaging", head: ["Esame", "Ruolo"], rows: [
          ["Radiografia standard", "Basale; alterazioni in ritardo di ~2 settimane"],
          ["<b>RM con gadolinio</b>", "<b>Esame di scelta</b>: edema midollare, disco, ascessi"],
          ["TC", "Sequestri; guida la biopsia"],
          ["PET/TC con FDG, scintigrafia con leucociti marcati", "RM non eseguibile, mezzi metallici"]
        ]},
        { type: "compare", title: "La PJI è confermata da uno qualsiasi di", cols: [
          { h: "Clinici", tone: "warn", items: ["Tramite fistoloso verso la protesi", "Protesi visibile"] },
          { h: "Liquido sinoviale", items: ["Leucociti &gt;3.000/µl", "Neutrofili &gt;80%", "Alfa-defensina positiva"] },
          { h: "Microbiologia / istologia", tone: "accent", items: ["Stesso microrganismo in ≥2 campioni", "Sonicazione positiva", "Neutrofili o microrganismi all’istologia"] }
        ]}
      ]
    },
    "6": {
      summary: [
        "<b>Prima la microbiologia</b>; terapia empirica immediata solo in caso di sepsi o compromissione neurologica (coprire stafilococchi compreso MRSA + gram-negativi).",
        "Chirurgia: rimuovere osso morto e corpi estranei, drenare, stabilizzare. Durata in <b>settimane</b>.",
        "Il <b>passaggio precoce alla via orale</b> con farmaci ben assorbiti è non inferiore all’e.v.",
        "Vertebrale: <b>6 settimane</b> (≥8 se MRSA, ascesso non drenato, IRC terminale). Chirurgia per deficit neurologico, instabilità, fallimento.",
        "Bambini: breve e.v. poi orale, <b>3–4 settimane</b> in totale.",
        "Piede diabetico: ~6 settimane se nessuna resezione; ~3 settimane se margine osseo positivo.",
        "PJI: <b>DAIR</b> se precoce / acuta con impianto stabile; altrimenti revisione in uno o due tempi. <b>Rifampicina</b> (stafilococchi, mai da sola), <b>fluorochinoloni</b> (gram-negativi); <b>~12 settimane</b>."
      ],
      visuals: [
        { type: "table", title: "Terapia mirata sul patogeno", head: ["Patogeno", "Classi di esempio"], rows: [
          ["MSSA", "Cefazolina, flucloxacillina"],
          ["MRSA", "Vancomicina, daptomicina; per os linezolid, cotrimossazolo"],
          ["Streptococchi", "Penicillina, ceftriaxone"],
          ["Bacilli gram-negativi", "β-lattamico; fluorochinolone orale"],
          ["Stafilococchi su impianto", "<b>+ rifampicina</b> (biofilm; mai da sola)"]
        ]},
        { type: "ranges", title: "Durata della terapia antibiotica (settimane)", max: 12, unit: " sett.", ticks: [0, 3, 6, 8, 12], rows: [
          { label: "Piede diabetico, margine osseo positivo", from: 3, to: 3, txt: "~3 sett." },
          { label: "Bambini, non complicata", from: 3, to: 4, tone: "good", txt: "3–4 sett." },
          { label: "Osteomielite vertebrale", from: 6, to: 6, txt: "6 sett." },
          { label: "Piede diabetico, nessuna resezione", from: 6, to: 6, txt: "~6 sett." },
          { label: "Vertebrale, alto rischio (MRSA, ascesso, IRC terminale)", from: 8, to: 12, tone: "warn", txt: "≥8 sett." },
          { label: "PJI dopo DAIR / revisione in un tempo", from: 12, to: 12, tone: "warn", txt: "~12 sett." }
        ]},
        { type: "algo", title: "PJI: quale intervento?", nodes: [
          { q: "Precoce (&lt;30 gg) o acuta ematogena (sintomi &lt;3 sett.), impianto stabile, nessun tramite fistoloso, microrganismo sensibile?", opts: [
            { when: "Sì", to: "DAIR (sbrigliamento, antibiotici, ritenzione dell’impianto)", tone: "good" },
            { when: "No", to: "PJI cronica: sostituzione dell’impianto", next: 1 }
          ]},
          { q: "Microrganismo noto e sensibile, buoni tessuti molli, nessun tramite fistoloso?", opts: [
            { when: "Sì", to: "Revisione in un tempo" },
            { when: "No", to: "Revisione in due tempi con spaziatore", tone: "warn" }
          ]}
        ], caption: "Chirurgia non possibile: terapia antibiotica soppressiva a vita." }
      ]
    },
    "7": {
      summary: [
        "La valutazione clinica è lo strumento principale; <b>PCR ogni poche settimane</b>.",
        "<b>Nessuna RM di controllo di routine</b> se migliora: le immagini sono in ritardo.",
        "Fallimento: dolore, secrezione, PCR in aumento, nuovi segni neurologici → RM, nuova biopsia, ripensare (TB, <i>Brucella</i>, impianto ritenuto).",
        "Follow-up per <b>≥1 anno</b> (PJI ≥2 anni). Piede diabetico: \"remissione\", ≥6 mesi."
      ],
      visuals: [
        { type: "compare", title: "Risposta o fallimento?", cols: [
          { h: "Risponde", tone: "good", items: ["Meno dolore, migliore funzione", "PCR in calo", "La RM può sembrare peggiorata: ignorarla"] },
          { h: "Fallisce", tone: "warn", items: ["Dolore persistente o in peggioramento", "Secrezione", "PCR in aumento", "Nuovi segni neurologici"] }
        ]}
      ]
    },
    "8": {
      summary: [
        "Nessun vaccino; i vaccini coniugati anti-Hib e antipneumococcico le hanno rese rare nei bambini.",
        "Trattare correttamente la batteriemia da <i>S. aureus</i>; gestione dei cateteri; riduzione del danno.",
        "Fratture esposte: antibiotici precoci + sbrigliamento.",
        "PJI: <b>cefazolina entro 60 minuti prima dell’incisione</b>, non prolungata; <b>decolonizzazione da <i>S. aureus</i></b>; ottimizzare glicemia, peso, fumo.",
        "Piede diabetico: ispezione quotidiana, calzature, cura precoce delle ulcere."
      ],
      visuals: [
        { type: "compare", title: "Prevenzione", cols: [
          { h: "Ematogena", items: ["Gestire la batteriemia da <i>S. aureus</i>", "Cura dei cateteri", "Riduzione del danno"] },
          { h: "Chirurgia / impianti", tone: "accent", items: ["Cefazolina ≤60 minuti prima dell’incisione", "Non prolungare la profilassi", "Decolonizzare i portatori di <i>S. aureus</i>", "Ottimizzare il paziente"] },
          { h: "Piede diabetico", tone: "good", items: ["Ispezione quotidiana del piede", "Calzature", "Cura precoce delle ulcere", "Controllo glicemico"] }
        ]}
      ]
    }
  }
};
