/* Revision layer for Chapter 12 — Brucellosis. Source: chapters/12-brucellosis.md */
window.REVISION = window.REVISION || {};
window.REVISION[12] = {
  sections: {
    "1": {
      summary: [
        "Small <b>gram-negative coccobacilli</b>, <b>facultative intracellular</b>.",
        "Each species has its animal host; <b><i>B. melitensis</i></b> (goats, sheep) is the most common and virulent in humans.",
        "<b>Most common laboratory-acquired infection</b>: cultures need <b>BSL-3</b>. Warn the lab."
      ],
      visuals: [
        { type: "cards", title: "Species and animal hosts", items: [
          { h: "<i>B. melitensis</i>", p: "Goats, sheep, camels", tag: "Most common, most virulent", tone: "warn" },
          { h: "<i>B. abortus</i>", p: "Cattle", tag: "" },
          { h: "<i>B. suis</i>", p: "Pigs", tag: "" },
          { h: "<i>B. canis</i>", p: "Dogs", tag: "" }
        ]}
      ]
    },
    "2": {
      summary: [
        "<b>Most common zoonosis worldwide</b>; 1.6–2.1 million cases a year.",
        "Endemic: <b>Mediterranean</b>, Middle East, Central Asia, Africa, Latin America.",
        "Main route: <b>unpasteurized dairy</b> (raw milk, soft cheeses). Also contact with placenta / abortion products, aerosols.",
        "Occupational: shepherds, abattoir workers, vets, dairy workers, <b>lab staff</b>.",
        "Human-to-human transmission is rare (transfusion, transplant, breastfeeding, sex, congenital)."
      ],
      visuals: [
        { type: "compare", title: "How people get it", cols: [
          { h: "Ingestion", tone: "warn", tag: "Most common", items: ["Raw milk", "Soft cheeses from unpasteurized milk"] },
          { h: "Contact", items: ["Placenta, abortion products", "Blood, urine, milk of animals"] },
          { h: "Inhalation", items: ["Aerosols (abattoir, laboratory)"] }
        ]},
        { type: "chips", title: "At-risk occupations", groups: [
          { h: "", items: ["Shepherds", "Abattoir workers", "Veterinarians", "Dairy industry", "Laboratory staff"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "Taken up by phagocytes, <b>survives and replicates inside them</b>, spreads to the <b>reticuloendothelial system</b>.",
        "This explains <b>hepatosplenomegaly and lymphadenopathy</b>, why <b>bone marrow culture</b> is more sensitive, and why treatment needs <b>intracellular drugs, in combination, for a long time</b>.",
        "Focal disease in about 30%; relapse usually within 6 months."
      ],
      visuals: [
        { type: "flow", title: "Intracellular life explains the disease", steps: [
          { h: "Entry", p: "Gut, skin, mucosa, airways" },
          { h: "Survival inside phagocytes", p: "Facultative intracellular" },
          { h: "Reticuloendothelial spread", p: "Liver, spleen, nodes, bone marrow" },
          { h: "Focal disease, relapse", p: "Any organ; ~30% focal", tone: "warn" }
        ]}
      ]
    },
    "4": {
      summary: [
        "Incubation <b>2–4 weeks</b> (up to months).",
        "Insidious <b>fever, malaise, night sweats</b> (\"moldy\" odor), <b>arthralgias</b>.",
        "Labs: raised transaminases, anemia, leukopenia with <b>relative lymphocytosis</b>, thrombocytopenia.",
        "<b>Osteoarticular</b> = most common focal form: <b>sacroiliitis</b> (young, unilateral), <b>spondylitis</b> (older, lumbar).",
        "Epididymo-orchitis, neurobrucellosis.",
        "<b>Endocarditis</b> (0.3–2%, aortic) = <b>main cause of death</b>. Overall mortality &lt;0.5%.",
        "Chronic: symptoms &gt;1 year after diagnosis."
      ],
      visuals: [
        { type: "bars", title: "Focal disease (share of focal forms, upper estimate)", unit: "%", max: 70, rows: [
          { label: "Osteoarticular", v: 70, t: "up to 70%" },
          { label: "Genitourinary", v: 10, t: "up to 10%" },
          { label: "Neurologic", v: 10, t: "up to 10%" },
          { label: "Cardiovascular (endocarditis)", v: 3, t: "up to 3%", tone: "warn" }
        ]},
        { type: "compare", title: "Osteoarticular forms", cols: [
          { h: "Sacroiliitis", items: ["Young adults", "Often unilateral"] },
          { h: "Spondylitis", tone: "warn", items: ["Older patients, prolonged illness", "Lumbar (L4–L5)", "Paravertebral, epidural, psoas abscess", "Residual damage"] },
          { h: "Peripheral arthritis", items: ["Large joints"] }
        ]}
      ]
    },
    "5": {
      summary: [
        "Suspect: <b>prolonged fever + sweats + arthralgia + exposure</b> (dairy, animals, job).",
        "Order <b>blood cultures + serology</b>, CBC, liver tests.",
        "<b>Definitive</b>: culture, or <b>≥4-fold titer rise</b> ≥2 weeks apart. <b>Presumptive</b>: <b>SAT ≥1:160</b> or PCR.",
        "<b>Bone marrow culture</b> is more sensitive and less affected by antibiotics.",
        "Use <b>two serologic tests</b>. SAT can be <b>falsely negative in chronic disease</b> (non-agglutinating antibodies): Coombs, 2-ME, ELISA IgG."
      ],
      visuals: [
        { type: "compare", title: "Diagnosis", cols: [
          { h: "Definitive", tone: "good", items: ["Culture (blood, fluids, tissue)", "≥4-fold rise in titer, ≥2 weeks apart"] },
          { h: "Presumptive", tone: "accent", items: ["SAT ≥1:160", "PCR positive"] }
        ]},
        { type: "ladder", title: "Culture sensitivity", steps: [
          { h: "Blood culture", p: "Often negative in chronic disease" },
          { h: "Bone marrow culture", p: "More sensitive, less affected by prior antibiotics", tone: "good" }
        ], caption: "Alert the lab: BSL-3." }
      ]
    },
    "6": {
      summary: [
        "Three rules: <b>combination</b>, <b>intracellular activity</b>, <b>long duration</b>.",
        "<b>Never monotherapy, never &lt;6 weeks</b>: relapses.",
        "Uncomplicated: <b>doxycycline + aminoglycoside</b> (fewer relapses) or doxycycline + rifampin; <b>6 weeks</b>.",
        "Spondylitis: doxy + rifampin + aminoglycoside, <b>≥12 weeks</b>. Neurobrucellosis: <b>ceftriaxone</b> + rifampin + doxy. Endocarditis: + aminoglycoside first month; <b>surgical consult for all</b>."
      ],
      visuals: [
        { type: "table", title: "Regimens", head: ["Form", "Regimen", "Duration"], rows: [
          ["Uncomplicated", "Doxycycline + aminoglycoside (or + rifampin)", "6 weeks"],
          ["Spondylitis", "Doxycycline + rifampin + aminoglycoside", "≥12 weeks"],
          ["Neurobrucellosis", "Ceftriaxone + rifampin + doxycycline", "≥12 weeks (often 4–6 months)"],
          ["Endocarditis", "Aminoglycoside (1st month) + rifampin + doxycycline + surgery", "≥12 weeks (often 4–6 months)"]
        ]},
        { type: "ranges", title: "Minimum duration (weeks)", max: 26, unit: " wk", ticks: [0, 6, 12, 26], rows: [
          { label: "Uncomplicated", from: 6, to: 6, tone: "good", txt: "6 wk" },
          { label: "Spondylitis", from: 12, to: 12, txt: "≥12 wk" },
          { label: "Neurobrucellosis, endocarditis", from: 12, to: 26, tone: "warn", txt: "12 wk – 6 months" }
        ]}
      ]
    },
    "7": {
      summary: [
        "<b>Relapse within 6 months</b> (up to 12): look for focal disease; resistance is rare.",
        "<b>Follow-up serology is not useful</b> to decide duration.",
        "Guide duration by clinical course, imaging, CSF, echo."
      ],
      visuals: [
        { type: "timeline", title: "After treatment", points: [
          { at: "End of therapy", h: "Clinical review", p: "Not serology" },
          { at: "≤ 6 months", h: "Relapse window", p: "Search for focal disease", tone: "warn" },
          { at: "&gt; 1 year", h: "Chronic brucellosis", p: "If symptoms persist" }
        ]}
      ]
    },
    "8": {
      summary: [
        "<b>No human vaccine</b>.",
        "<b>Pasteurize or boil milk</b>; occupational precautions; control disease in animals.",
        "Patients: no unprotected sex, no breastfeeding until treatment ends.",
        "Lab exposure: PEP with <b>doxycycline + rifampin for 3 weeks</b> and serologic monitoring."
      ],
      visuals: [
        { type: "compare", title: "Prevention", cols: [
          { h: "Food", tone: "good", items: ["Pasteurize or boil milk", "Avoid raw-milk cheeses"] },
          { h: "Work", tone: "accent", items: ["Protection with animal tissues", "BSL-3 in the lab", "PEP after lab exposure"] },
          { h: "Animals", items: ["Veterinary control programs"] }
        ]}
      ]
    }
  }
};
