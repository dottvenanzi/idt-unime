/* Livello di ripasso per il Capitolo 13 — Leishmaniosi. Fonte: chapters-it/13-leishmaniasis.md */
window.REVISION = window.REVISION || {};
window.REVISION[13] = {
  sections: {
    "1": {
      summary: [
        "Protozoi del genere <i>Leishmania</i>, trasmessi dalla <b>femmina di flebotomo</b>.",
        "Serbatoi: roditori e <b>cani</b>.",
        "<b>Promastigote</b> (extracellulare, nell’insetto) → <b>amastigote</b> (intracellulare, nei fagolisosomi dei macrofagi).",
        "Amastigoti: 1,5–4 µm, nucleo + <b>cinetoplasto a bastoncello</b>, Giemsa: <b>corpi di Leishman-Donovan</b>.",
        "Viscerale: <i>L. donovani</i>, <i>L. infantum</i>. Mucosa: <i>Viannia</i> (<i>L. braziliensis</i>). Cutanea urbana: <i>L. tropica</i>."
      ],
      visuals: [
        { type: "flow", title: "Ciclo vitale", steps: [
          { h: "Il flebotomo punge un ospite infetto", p: "Ingerisce amastigoti" },
          { h: "Promastigoti nell’insetto", p: "Extracellulari, 4–14 giorni" },
          { h: "Inoculazione nella cute", p: "Al pasto di sangue successivo" },
          { h: "Fagocitosi", p: "Promastigote → amastigote nel fagolisosoma" },
          { h: "Replicazione intracellulare", p: "Parassita obbligato dei macrofagi", tone: "warn" }
        ]},
        { type: "table", title: "Specie e sindromi", head: ["Sindrome", "Specie"], rows: [
          ["Viscerale", "<i>L. donovani</i>, <i>L. infantum</i>"],
          ["Mucosa", "<i>L. (Viannia) braziliensis</i>, <i>guyanensis</i>, <i>panamensis</i>"],
          ["Cutanea urbana", "<i>L. tropica</i>"]
        ]}
      ]
    },
    "2": {
      summary: [
        "Endemica in <b>&gt;98 Paesi</b>; forma cutanea ~0,7–1 milione di casi all’anno.",
        "Per lo più una <b>zoonosi</b>; l’uomo è infettato occasionalmente. Alcune forme antroponotiche (<i>L. tropica</i>, <i>L. donovani</i>).",
        "Forma mucosa: soprattutto nelle <b>Americhe</b>.",
        "<b><i>L. infantum</i></b>: Mediterraneo (Italia), <b>cani</b>, bambini e immunodepressi. <b><i>L. donovani</i></b>: Asia meridionale, Africa orientale, tutte le età.",
        "Vie rare: uso di droghe e.v., trasfusione, trapianto, congenita."
      ],
      visuals: [
        { type: "compare", title: "Leishmaniosi viscerale: due modelli", cols: [
          { h: "<i>L. donovani</i>", items: ["Asia meridionale, Corno d’Africa", "Tutte le età, adulti sani", "Antroponotica (l’uomo è il serbatoio)"] },
          { h: "<i>L. infantum</i>", tone: "accent", items: ["Mediterraneo, Medio Oriente, Brasile", "Bambini, adulti immunodepressi", "Zoonotica: <b>cani</b>"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "Vive e si replica <b>all’interno dei macrofagi</b>.",
        "Cutanea: resta nel sito della puntura; può diffondersi lungo i linfatici.",
        "Mucosa (<i>Viannia</i>): insieme alla lesione cutanea o <b>anni dopo</b>; distrugge la mucosa naso-orofaringea.",
        "Viscerale: macrofagi di <b>milza, fegato, midollo osseo</b>; anemia da soppressione midollare, emolisi, sequestro.",
        "Molte infezioni sono <b>asintomatiche</b> e <b>si riattivano con l’immunosoppressione</b> (HIV, corticosteroidi, trapianto)."
      ],
      visuals: [
        { type: "compare", title: "Dove va il parassita", cols: [
          { h: "Cutanea", items: ["Cute nel sito della puntura", "± diffusione linfatica"] },
          { h: "Mucosa", tone: "warn", items: ["Naso, bocca, laringe", "Contemporanea o anni dopo"] },
          { h: "Viscerale", tone: "warn", items: ["Milza, fegato, midollo osseo", "Pancitopenia"] }
        ]}
      ]
    },
    "4": {
      summary: [
        "<b>LC localizzata</b>: papula → nodulo → <b>ulcera indolente a margine rilevato</b> su cute esposta; guarisce in mesi–anni con una <b>cicatrice depressa</b>.",
        "<b>Mucosa</b>: congestione nasale, sanguinamento, distruzione; raucedine se laringea; deturpante.",
        "<b>Viscerale (kala-azar)</b>: incubazione 2–6 mesi; <b>febbre, calo ponderale, splenomegalia massiva, pancitopenia</b>.",
        "Il kala-azar non trattato è <b>quasi sempre fatale</b>."
      ],
      visuals: [
        { type: "flow", title: "Evoluzione di una lesione cutanea", dir: "row", steps: [
          { h: "Papula rosea", p: "" },
          { h: "Nodulo / placca", p: "" },
          { h: "Ulcera indolente", p: "Margine rilevato, indurito", tone: "warn" },
          { h: "Cicatrice atrofica", p: "Mesi o anni" }
        ]},
        { type: "compare", title: "Tre sindromi", cols: [
          { h: "Cutanea", items: ["Cute esposta", "Ulcera indolente", "Spesso guarisce spontaneamente"] },
          { h: "Mucosa", tone: "warn", items: ["Naso e bocca", "Distruzione della mucosa", "Raucedine, tosse metallica"] },
          { h: "Viscerale", tone: "warn", items: ["Febbre, calo ponderale", "Splenomegalia ± epatomegalia", "Anemia grave, pancitopenia", "Fatale se non trattata"] }
        ]}
      ]
    },
    "5": {
      summary: [
        "LC: <b>dimostrare il parassita</b>: istologia (Giemsa, <b>cinetoplasto</b>), coltura, <b>PCR (la più sensibile)</b>. Identificare la specie.",
        "Campionare il <b>margine rilevato / fondo</b> di un’ulcera attiva e pulita; punch da 4–5 mm. <b>Nessuna biopsia escissionale</b>.",
        "<b>La sierologia non ha alcun ruolo nella LC</b>.",
        "LC da <i>Viannia</i>: esaminare naso e bocca anche in assenza di sintomi.",
        "LV: parassita nel <b>midollo osseo o nella milza</b>; PCR su tessuto o sangue; la sierologia (rK39, DAT) aiuta ma resta positiva per anni.",
        "Coinfezione HIV: sierologia meno sensibile; usare tessuto o PCR."
      ],
      visuals: [
        { type: "compare", title: "Diagnosi", cols: [
          { h: "Cutanea", tone: "accent", items: ["Istologia (Giemsa, cinetoplasto)", "Coltura", "<b>PCR</b> (la più sensibile)", "Identificazione della specie", "<b>Nessuna sierologia</b>"] },
          { h: "Viscerale", tone: "warn", items: ["Striscio o coltura di midollo osseo / milza", "PCR (tessuto, sangue)", "Sierologia (rK39, DAT): di supporto", "La sierologia non è un test di guarigione"] }
        ]},
        { type: "chips", title: "Diagnosi differenziale", groups: [
          { h: "Cutanea", items: ["Infezioni fungine", "Sporotricosi", "TB cutanea, NTM", "Lebbra (neuropatia)", "Carcinoma squamocellulare"] },
          { h: "Viscerale", items: ["Malaria", "Istoplasmosi", "Ascesso epatico amebico", "Schistosomiasi", "Linfoma", "Tubercolosi"] }
        ]}
      ]
    },
    "6": {
      summary: [
        "LC: l’obiettivo è la <b>guarigione clinica</b>. <b>Non complicata → terapia locale</b> (crioterapia, termoterapia, paromomicina topica); <b>complicata → sistemica</b>.",
        "Complicata: <i>Viannia</i>, lesioni numerose o grandi, <b>volto, dita, genitali</b>, immunosoppressione, fallimento.",
        "Sistemica: azoli, <b>miltefosina</b>, antimoniali, <b>amfotericina B liposomiale</b>, pentamidina.",
        "LM: esame ORL completo; antimoniali, amfotericina, miltefosina.",
        "LV: trattare prontamente + terapia di supporto. <b>Amfotericina B liposomiale</b> in Europa, Americhe, Asia meridionale; miltefosina + paromomicina in Africa orientale.",
        "<b>Testare ogni paziente con LV per HIV</b>; l’ART riduce le recidive."
      ],
      visuals: [
        { type: "algo", title: "Leishmaniosi cutanea", nodes: [
          { q: "Complicata? (<i>Viannia</i>, lesioni numerose o grandi, volto / dita / genitali, immunosoppressione, fallimento locale)", opts: [
            { when: "No", to: "Locale: crioterapia, termoterapia, paromomicina topica", tone: "good" },
            { when: "Sì", to: "Sistemica: miltefosina, azoli, antimoniali, amfotericina B liposomiale", tone: "warn" }
          ]}
        ]},
        { type: "table", title: "Leishmaniosi viscerale: prima linea per area geografica", head: ["Area", "Terapia"], rows: [
          ["Europa, Americhe", "Amfotericina B liposomiale"],
          ["India, Nepal, Bangladesh", "Amfotericina B liposomiale"],
          ["Africa orientale", "Miltefosina + paromomicina"],
          ["Immunocompromessi", "Amfotericina B liposomiale; ridurre l’immunosoppressione"]
        ]}
      ]
    },
    "7": {
      summary: [
        "LC: valutazione clinica; a <b>4–6 settimane</b> riduzione &gt;50%, riepitelizzazione, nessuna nuova lesione. Follow-up 6–12 mesi; <b>≥2 anni se rischio di LM</b>.",
        "LV: la febbre si risolve in <b>1–2 settimane</b>, la milza si riduce in ~1 mese, aumento di peso. Follow-up ≥12 mesi.",
        "<b>La sierologia non è un test di guarigione</b>. Possibile riattivazione con l’immunosoppressione."
      ],
      visuals: [
        { type: "timeline", title: "Leishmaniosi viscerale: risposta", points: [
          { at: "1–2 settimane", h: "La febbre si risolve", p: "", tone: "good" },
          { at: "~1 mese", h: "La milza si riduce", p: "Aumento di peso" },
          { at: "≥ 12 mesi", h: "Follow-up clinico", p: "Recidiva, riattivazione", tone: "warn" }
        ]}
      ]
    },
    "8": {
      summary: [
        "<b>Nessun vaccino, nessuna profilassi pre-esposizione</b>.",
        "I flebotomi pungono <b>dal tramonto all’alba</b>: coprire la cute, indumenti trattati con permetrina, DEET, zanzariere trattate a maglia fine.",
        "Controllo di vettori e serbatoi (cani, roditori); trattare i casi umani nella LV antroponotica. La <b>PKDL</b> è un serbatoio nascosto."
      ],
      visuals: [
        { type: "compare", title: "Prevenzione", cols: [
          { h: "Individuale", tone: "good", items: ["Coprire la cute dal tramonto all’alba", "Indumenti trattati con permetrina", "DEET", "Zanzariere trattate a maglia fine"] },
          { h: "Sanità pubblica", tone: "accent", items: ["Controllo dei vettori", "Controllo dei serbatoi (cani)", "Trattare i casi umani, compresa la PKDL"] }
        ]}
      ]
    }
  }
};
