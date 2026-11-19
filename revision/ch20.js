/* Revision layer for Chapter 20 — Tick-borne infections. Source: chapters/20-*.md */
window.REVISION = window.REVISION || {};
window.REVISION[20] = {
  sections: {
    "1": {
      summary: [
        "Ticks are <b>arachnids</b>: larva → nymph → adult, one blood meal each. <b>Nymphs</b> (1–2 mm) transmit most Lyme.",
        "Hard ticks feed for days; soft ticks for minutes at night (bite unnoticed).",
        "<b>Time to transmission</b>: <i>Borrelia</i> after 36–48 h; rickettsiae hours; <b>TBE virus minutes</b>.",
        "Vectors: <i>Ixodes ricinus</i> (Lyme, TBE, <i>Anaplasma</i>) in Europe; <b>brown dog tick → <i>R. conorii</i></b>; <i>Hyalomma</i> → CCHF.",
        "<i>B. afzelii</i> → skin; <b><i>B. garinii</i> → nervous system</b>; <i>B. burgdorferi</i> s.s. → arthritis (USA).",
        "Most agents don't grow in routine culture: PCR, serology, smears."
      ],
      visuals: [
        { type: "ranges", title: "Attachment time needed for transmission (hours)", max: 48, unit: " h", ticks: [0, 12, 24, 36, 48], rows: [
          { label: "TBE virus (salivary glands)", from: 0, to: 0.5, tone: "warn", txt: "Minutes" },
          { label: "<i>Rickettsia rickettsii</i>", from: 2, to: 10, txt: "Hours" },
          { label: "<i>Borrelia burgdorferi</i> (midgut)", from: 36, to: 48, txt: "Rises after 36–48 h" }
        ], caption: "Early tick removal protects against Lyme, not against TBE." },
        { type: "table", title: "Pathogens", head: ["Disease", "Agent", "Type"], rows: [
          ["Lyme borreliosis", "<i>B. burgdorferi</i> s.l.", "Spirochete"],
          ["Spotted fevers", "<i>R. conorii</i>, <i>R. rickettsii</i>, <i>R. africae</i>", "Intracellular, endothelium"],
          ["Anaplasmosis", "<i>A. phagocytophilum</i>", "Neutrophils"],
          ["Ehrlichiosis", "<i>E. chaffeensis</i>", "Monocytes"],
          ["Tularemia", "<i>Francisella tularensis</i>", "Gram-negative coccobacillus"],
          ["Babesiosis", "<i>B. microti</i>, <i>B. divergens</i>", "Red-cell protozoa"],
          ["Relapsing fever", "<i>Borrelia</i> spp., <i>B. miyamotoi</i>", "Spirochetes"],
          ["TBE", "TBE virus", "Flavivirus"],
          ["CCHF", "CCHF virus", "Nairovirus"]
        ]},
        { type: "compare", title: "<i>Borrelia</i> genospecies and tropism", cols: [
          { h: "<i>B. afzelii</i>", items: ["Europe, most common", "Skin: EM, lymphocytoma, ACA"] },
          { h: "<i>B. garinii</i>", tone: "warn", items: ["Europe", "Neuroborreliosis"] },
          { h: "<i>B. burgdorferi</i> s.s.", tone: "accent", items: ["North America", "Arthritis"] }
        ]}
      ]
    },
    "2": {
      summary: [
        "<b>Lyme</b>: most common vector-borne disease of the northern temperate zone; Italy: <b>north-east</b>; peak June–August.",
        "<b>Mediterranean spotted fever</b>: endemic in <b>southern Italy and islands</b> (Sicily, Sardinia, Calabria), summer, dogs.",
        "<i>R. africae</i>: travellers from sub-Saharan Africa. RMSF (Americas) is the most lethal.",
        "Tularemia: hares, rodents, water, aerosols; <b>no person-to-person</b>; bioterrorism agent.",
        "Babesiosis in Europe: <i>B. divergens</i> in <b>splenectomised</b> patients.",
        "<b>TBE</b>: central/northern Europe to Asia; Italy north-east; also <b>raw milk</b>.",
        "<b>CCHF</b>: Africa, Balkans, Turkey, <b>Spain</b>; livestock blood; <b>nosocomial</b>; fatality 10–40%."
      ],
      visuals: [
        { type: "compare", title: "Tick-borne infections in Italy", cols: [
          { h: "North-east", tone: "accent", items: ["Lyme borreliosis", "Tick-borne encephalitis", "(Friuli, Veneto, Trentino)"] },
          { h: "South and islands", tone: "warn", items: ["Mediterranean spotted fever", "Brown dog tick", "(Sicily, Sardinia, Calabria)"] }
        ]},
        { type: "cards", title: "Who, where", items: [
          { h: "Tularemia", p: "Hunters, hares, water, haymaking", tag: "No human-to-human" },
          { h: "Babesiosis", p: "Asplenic (Europe); USA north-east; transfusion", tag: "Fulminant if asplenic", tone: "warn" },
          { h: "Relapsing fever", p: "Africa, Iberia, Middle East; <i>B. miyamotoi</i> with <i>Ixodes</i>", tag: "Travel" },
          { h: "CCHF", p: "Balkans, Turkey, Spain; livestock workers", tag: "Nosocomial", tone: "warn" }
        ]}
      ]
    },
    "3": {
      summary: [
        "<i>Borrelia</i> switches <b>OspA → OspC</b>; spreads centrifugally (EM), then to nerves, heart, joints. <b>No toxins</b>: host inflammation.",
        "Refractory Lyme arthritis is <b>immune-mediated</b>.",
        "Rickettsiae: <b>eschar</b> at the bite, then <b>endothelial vasculitis</b> → leak, hyponatremia, organ damage.",
        "<i>Anaplasma</i> (neutrophils), <i>Ehrlichia</i> (monocytes) form <b>morulae</b>.",
        "<i>Babesia</i>: red cells, hemolysis; <b>spleen clears it</b>; no liver stage, no pigment.",
        "Relapsing fever: <b>antigenic variation</b> → relapses.",
        "TBE: brainstem, cerebellum, thalamus, <b>anterior horn</b>. CCHF: cytokine storm, DIC."
      ],
      visuals: [
        { type: "cards", title: "Mechanism in one line", items: [
          { h: "Lyme", p: "OspA → OspC; inflammation, no toxins", tag: "Dissemination" },
          { h: "Rickettsioses", p: "Endothelial infection → vasculitis", tag: "Eschar", tone: "warn" },
          { h: "Anaplasma / Ehrlichia", p: "Morulae in phagocytes", tag: "Leukopenia" },
          { h: "Babesiosis", p: "Intra-erythrocytic; spleen clears", tag: "Asplenia", tone: "warn" },
          { h: "Relapsing fever", p: "Surface protein switching", tag: "Relapses" },
          { h: "TBE", p: "Neurons incl. anterior horn", tag: "Flaccid paralysis" },
          { h: "CCHF", p: "Cytokine storm, liver, DIC", tag: "Bleeding", tone: "warn" }
        ]}
      ]
    },
    "4": {
      summary: [
        "<b>EM</b>: expanding erythema <b>≥5 cm</b>, 3–30 days. Disseminated: multiple EM, <b>facial palsy (bilateral)</b>, Bannwarth, <b>AV block</b>. Late: knee arthritis, ACA.",
        "<b>MSF</b>: high fever + <b>tache noire</b> + maculopapular rash incl. <b>palms and soles</b>.",
        "RMSF: petechial rash from wrists and ankles; often no eschar; fatal if untreated.",
        "Anaplasmosis/ehrlichiosis: fever + <b>leukopenia, thrombocytopenia, raised transaminases</b>.",
        "Tularemia: <b>ulcer + suppurating node</b>; oropharyngeal after water.",
        "Babesiosis: malaria-like, <b>hemolysis</b>, severe if asplenic.",
        "TBE: <b>biphasic</b> → meningitis/encephalitis/flaccid paralysis. CCHF: fever → <b>bleeding</b> from day 3–5."
      ],
      visuals: [
        { type: "timeline", title: "Lyme borreliosis stages", points: [
          { at: "3–30 days", h: "Early localized", p: "Erythema migrans ≥5 cm" },
          { at: "Weeks–months", h: "Early disseminated", p: "Multiple EM, facial palsy, Bannwarth, AV block", tone: "warn" },
          { at: "Months–years", h: "Late", p: "Knee arthritis, acrodermatitis chronica atrophicans" }
        ]},
        { type: "table", title: "Clues across tick-borne infections", head: ["Clue", "Think of"], rows: [
          ["Expanding erythema ≥5 cm", "Lyme (EM)"],
          ["Eschar + rash on palms and soles", "Mediterranean spotted fever"],
          ["Fever + leukopenia + thrombocytopenia + high transaminases", "Anaplasmosis / ehrlichiosis, early TBE"],
          ["Fever + hemolysis, asplenic", "Babesiosis"],
          ["Ulcer + suppurating node, hare contact", "Tularemia"],
          ["Fever recurring every week", "Relapsing fever"],
          ["Biphasic illness → meningoencephalitis", "TBE"],
          ["Fever + bleeding, livestock", "CCHF"],
          ["Bilateral facial palsy, AV block", "Disseminated Lyme"]
        ]},
        { type: "flow", title: "Tick-borne encephalitis: biphasic", dir: "row", steps: [
          { h: "Viremic phase", p: "Flu-like, 2–7 days" },
          { h: "Free interval", p: "~1 week" },
          { h: "Neurological phase", p: "Meningitis, encephalitis, flaccid paralysis", tone: "warn" }
        ]}
      ]
    },
    "5": {
      summary: [
        "<b>Typical EM = clinical diagnosis, no serology</b>.",
        "Lyme serology: <b>two-tier</b>, only for extracutaneous disease; IgM reliable only in first 4 weeks; antibodies persist.",
        "Neuroborreliosis: <b>CSF pleocytosis + intrathecal antibodies</b> (CXCL13 supportive).",
        "<b>Don't test</b> non-specific symptoms, asymptomatic bites, or the tick.",
        "Spotted fevers: <b>treat on suspicion</b>; eschar PCR early; paired IFA serology later.",
        "Anaplasma/Ehrlichia: <b>blood PCR</b>, morulae. Tularemia: serology, PCR; <b>warn the lab</b>.",
        "Babesiosis: smear (<b>Maltese cross</b>, no pigment) + PCR + parasitemia. TBE: serum/CSF IgM (flavivirus cross-reactions). CCHF: <b>isolate</b>, RT-PCR."
      ],
      visuals: [
        { type: "table", title: "Preferred tests", head: ["Disease", "Early", "Later"], rows: [
          ["Lyme (EM)", "<b>Clinical</b>", "Not needed"],
          ["Lyme (disseminated)", "—", "Two-tier serology; CSF index"],
          ["Spotted fevers", "Eschar PCR", "Paired IFA"],
          ["Anaplasmosis / ehrlichiosis", "Blood PCR, morulae", "Paired IFA"],
          ["Tularemia", "PCR ulcer / node", "Serology from week 2"],
          ["Babesiosis", "Smear + PCR", "—"],
          ["Relapsing fever", "Smear during fever, PCR", "—"],
          ["TBE", "RT-PCR (viremic phase)", "Serum and CSF IgM/IgG"],
          ["CCHF", "RT-PCR", "IgM/IgG"]
        ]},
        { type: "compare", title: "Babesia vs <i>P. falciparum</i> on the smear", cols: [
          { h: "<i>Babesia</i>", tone: "accent", items: ["Maltese cross tetrads", "No pigment", "No schizonts or gametocytes", "Extracellular merozoites"] },
          { h: "<i>P. falciparum</i>", items: ["Rings, banana gametocytes", "Hemozoin pigment", "Travel to the tropics"] }
        ]}
      ]
    },
    "6": {
      summary: [
        "<b>Doxycycline is the key drug</b>: Lyme, <b>all rickettsioses</b>, anaplasmosis/ehrlichiosis, <b>at any age</b>.",
        "EM: doxycycline 10 d (amoxicillin/cefuroxime 14 d). Neuro: oral doxy or IV ceftriaxone 14–21 d. Arthritis 28 d.",
        "Lyme carditis: PR ≥300 ms → admit, temporary pacing; <b>no permanent pacemaker</b>.",
        "PTLDS: <b>no prolonged antibiotics</b>.",
        "MSF: doxycycline empirically; <b>avoid fluoroquinolones</b>; β-lactams inactive.",
        "Tularemia: <b>ciprofloxacin</b> (mild), <b>gentamicin</b> (severe). Babesiosis: <b>atovaquone + azithromycin</b>; exchange transfusion if &gt;10%.",
        "Relapsing fever: expect <b>Jarisch-Herxheimer</b>. TBE: supportive. CCHF: supportive, infection control."
      ],
      visuals: [
        { type: "table", title: "Which drug", head: ["Infection", "First line"], rows: [
          ["Lyme borreliosis", "Doxycycline / amoxicillin / cefuroxime; ceftriaxone if severe"],
          ["Rickettsioses", "<b>Doxycycline</b> (all ages)"],
          ["Anaplasmosis / ehrlichiosis", "<b>Doxycycline</b> (all ages)"],
          ["Tularemia", "Ciprofloxacin (mild) / gentamicin (severe)"],
          ["Babesiosis", "Atovaquone + azithromycin"],
          ["Relapsing fever", "Doxycycline / penicillin / ceftriaxone"],
          ["TBE", "Supportive only"],
          ["CCHF", "Supportive; ribavirin uncertain"]
        ]},
        { type: "ranges", title: "Lyme borreliosis: duration", max: 28, ticks: [0, 10, 14, 21, 28], rows: [
          { label: "EM, doxycycline", from: 10, to: 10, tone: "good", txt: "10 d" },
          { label: "EM, amoxicillin / cefuroxime", from: 14, to: 14, txt: "14 d" },
          { label: "Neuroborreliosis, carditis", from: 14, to: 21, txt: "14–21 d" },
          { label: "ACA", from: 21, to: 28, txt: "21–28 d" },
          { label: "Arthritis", from: 28, to: 28, tone: "warn", txt: "28 d" }
        ]}
      ]
    },
    "7": {
      summary: [
        "Lyme: <b>no repeat serology</b>; facial palsy recovers over weeks–months; ECG until AV block resolves; new EM = new infection.",
        "Rickettsioses, anaplasmosis: <b>fever down in 24–72 h</b>; if not, rethink (co-infection with <i>Babesia</i>).",
        "Tularemia: nodes may suppurate for weeks; relapses after doxycycline.",
        "Babesiosis: daily parasitemia; no blood donation.",
        "TBE: rehabilitation; lifelong immunity. CCHF: monitor contacts for <b>14 days</b>."
      ],
      visuals: [
        { type: "cards", title: "Expected response", items: [
          { h: "Doxycycline-treated rickettsiosis / anaplasmosis", p: "Afebrile in 24–72 h", tag: "Otherwise rethink", tone: "warn" },
          { h: "Erythema migrans", p: "Fades in days–weeks", tag: "No more antibiotics" },
          { h: "Tularemia", p: "Nodes may suppurate", tag: "Not failure" },
          { h: "CCHF contacts", p: "Fever watch", tag: "14 days" }
        ]}
      ]
    },
    "8": {
      summary: [
        "Avoid bites: trails, long trousers in socks, light clothes, <b>DEET / icaridin</b>, permethrin on clothes, <b>daily tick check</b>.",
        "Remove with <b>fine-tipped tweezers</b>, steady upward pull; no oil, alcohol, heat; watch the site 30 days.",
        "Lyme PEP (US): single doxycycline dose within 72 h only if <i>Ixodes</i> + endemic area + <b>attached ≥36 h</b>. Europe: observe.",
        "No licensed Lyme vaccine yet (OspA candidate in phase 3).",
        "<b>TBE vaccine</b>: inactivated, 3 doses, boosters every 3–5 years; recommended for at-risk people.",
        "No PEP for rickettsioses, anaplasmosis or TBE."
      ],
      visuals: [
        { type: "flow", title: "Removing a tick", steps: [
          { h: "Fine-tipped tweezers", p: "Grasp close to the skin" },
          { h: "Pull straight up, steady", p: "No twisting, no crushing" },
          { h: "Disinfect, wash hands", p: "No oil, alcohol, heat" },
          { h: "Watch 30 days", p: "EM at the site, fever", tone: "accent" }
        ]},
        { type: "note", h: "Lyme post-bite prophylaxis (US guidance)", p: "One dose of doxycycline within 72 h of removal only when all three apply: <i>Ixodes</i> tick, highly endemic area, attached ≥36 h. In Europe, observe the site instead." }
      ]
    }
  }
};
