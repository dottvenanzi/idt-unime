/* Revision layer for Chapter 6 — Viral Pneumonia (influenza, COVID-19, RSV). Source: chapters/06-viral-pneumonia.md */
window.REVISION = window.REVISION || {};
window.REVISION[6] = {
  sections: {
    "1": {
      summary: [
        "All three are <b>enveloped RNA viruses</b> with winter epidemics.",
        "<b>Influenza</b>: −ssRNA, <b>8 segments</b>; HA binds sialic acid, NA releases virions. <b>Drift</b> (point mutations) → yearly epidemics; <b>shift</b> (reassortment, influenza A only) → pandemics.",
        "<b>SARS-CoV-2</b>: +ssRNA, ≈30 kb; spike binds <b>ACE2</b>, primed by <b>TMPRSS2</b>. Omicron descendants escape antibodies.",
        "<b>RSV</b>: −ssRNA; <b>F protein</b> (prefusion shape) is the target of all vaccines and monoclonals; G attaches.",
        "Avian A(H5N1) 2.3.4.4b: birds, mammals, US dairy cattle; rare human cases, no sustained spread."
      ],
      visuals: [
        { type: "table", title: "Three viruses side by side", head: ["", "Influenza", "SARS-CoV-2", "RSV"], rows: [
          ["Family", "<i>Orthomyxoviridae</i>", "<i>Coronaviridae</i>", "<i>Pneumoviridae</i>"],
          ["Genome", "−ssRNA, 8 segments", "+ssRNA, ≈30 kb", "−ssRNA"],
          ["Key protein", "HA (sialic acid), NA", "Spike → ACE2", "F (fusion, syncytia), G"],
          ["Evolution", "Drift + shift", "Mutation, recombination, immune escape", "Little change in F"],
          ["Drug targets", "NA (oseltamivir), PA endonuclease (baloxavir)", "Mpro (nirmatrelvir), RdRp (remdesivir)", "F (nirsevimab: prevention)"]
        ]},
        { type: "compare", title: "Drift vs shift", cols: [
          { h: "Antigenic drift", tone: "accent", items: ["Point mutations in HA/NA (no proofreading)", "Influenza A and B", "Annual epidemics", "Vaccine updated every year"] },
          { h: "Antigenic shift", tone: "warn", items: ["Reassortment of segments in one cell (e.g. pig)", "Influenza A only", "New HA: no population immunity", "Pandemics: 1957, 1968, 2009"] }
        ]}
      ]
    },
    "2": {
      summary: [
        "Viruses cause <b>¼–⅓ of adult CAP</b>.",
        "Influenza: ≈<b>290,000–650,000</b> respiratory deaths per year. COVID-19: &gt;7 million reported deaths; now endemic. RSV: ≈100,000 deaths in children &lt;5 (2019).",
        "Incubation: influenza <b>1–4 days</b>, SARS-CoV-2 <b>2–14 (≈3 with Omicron)</b>, RSV <b>2–8</b>.",
        "Italy: influenza Dec–Mar; <b>RSV Oct/Nov–Mar, peaking earlier</b>; COVID-19 waves all year.",
        "In older and high-risk adults RSV is about as heavy as non-pandemic influenza."
      ],
      visuals: [
        { type: "ranges", title: "Incubation period (days, to scale)", max: 14, ticks: [0, 2, 4, 6, 8, 10, 12, 14], rows: [
          { label: "Influenza", from: 1, to: 4 },
          { label: "RSV", from: 2, to: 8 },
          { label: "SARS-CoV-2", from: 2, to: 14, note: "≈3 with Omicron;" }
        ]},
        { type: "table", title: "Transmission and season", head: ["", "Influenza", "SARS-CoV-2", "RSV"], rows: [
          ["Route", "Droplets, aerosols", "Aerosols (indoors)", "Large droplets, hands, surfaces"],
          ["Infectious", "1 day before → 5–7 days after onset", "Around onset", "3–8 days; up to 4 weeks in infants"],
          ["Season (Italy)", "Dec – Mar", "All year", "Oct/Nov – Mar (earlier peak)"]
        ]},
        { type: "compare", title: "Who gets severe disease", cols: [
          { h: "Influenza", items: ["≥65 years, &lt;5 years", "Pregnancy (+2 weeks postpartum)", "Chronic diseases, BMI ≥40", "Children on aspirin"] },
          { h: "COVID-19", items: ["Older age (strongest)", "Immunosuppression (anti-CD20, transplant)", "Unvaccinated", "Obesity, diabetes"] },
          { h: "RSV", items: ["Infants &lt;6 months, preterm", "Congenital heart disease, BPD", "Adults ≥60, COPD, heart failure", "HSCT, lung transplant"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "<b>Human influenza</b> binds α2,6 sialic acid (upper airway: spreads well); <b>avian</b> binds α2,3 (lower airway: rare but severe).",
        "<b>Cap-snatching</b> by viral polymerase (baloxavir target); NA releases virions (oseltamivir target).",
        "<b>COVID-19 has two phases</b>: viral (week 1, antivirals) → inflammatory (week 2, steroids and immunomodulators). Endothelial damage → thrombosis.",
        "<b>Silent hypoxemia</b>: measure saturation.",
        "<b>RSV</b>: syncytia; bronchiolitis from necrosis, mucus plugs and narrow infant airways. Reinfection lifelong.",
        "Influenza damages epithelium → <b>secondary bacterial pneumonia</b> (pneumococcus, <i>S. aureus</i>/MRSA). ICU: <b>IAPA/CAPA</b>."
      ],
      visuals: [
        { type: "flow", dir: "row", title: "COVID-19: two phases, two kinds of drug", steps: [
          { h: "Viral phase", p: "Week 1: high replication → antivirals" },
          { h: "Inflammatory phase", p: "Week 2: IL-6, ARDS → steroids, IL-6R blocker, baricitinib", tone: "warn" }
        ]},
        { type: "compare", title: "Influenza: human vs avian receptor", cols: [
          { h: "Human viruses", items: ["α2,6 sialic acid", "Upper airway", "Efficient person-to-person spread"] },
          { h: "Avian viruses (H5N1)", tone: "warn", items: ["α2,3 sialic acid", "Lower airway, conjunctiva", "Rare, poorly transmissible, severe"] }
        ]},
        { type: "cards", title: "Co-infections to remember", items: [
          { h: "Post-influenza bacterial", p: "Pneumococcus, <i>S. aureus</i> (CA-MRSA: necrotizing), <i>S. pyogenes</i>", tag: "Biphasic course", tone: "warn" },
          { h: "COVID-19", p: "Bacterial co-infection at admission uncommon; VAP common in ventilated", tag: "No routine antibiotics" },
          { h: "IAPA / CAPA", p: "ICU patients, even without neutropenia; steroids increase risk", tag: "BAL galactomannan" }
        ]}
      ]
    },
    "4": {
      summary: [
        "Influenza: <b>abrupt</b> high fever, myalgia, prostration, dry cough. COVID-19: gradual or abrupt; pneumonia in the <b>second week</b>. RSV: rhinorrhea, cough, <b>wheeze</b>.",
        "Influenza pneumonia: <b>primary viral</b> (first days, ARDS), <b>secondary bacterial</b> (biphasic, days 4–14), or mixed.",
        "MI risk ≈<b>6×</b> in the first 7 days after influenza.",
        "COVID-19 severity (WHO): <b>severe = SpO₂ &lt;90%, RR &gt;30 or respiratory distress</b>; critical = ARDS, sepsis, ventilation.",
        "Children: MIS-C 2–6 weeks after COVID-19. Infants with RSV: bronchiolitis, <b>apnea</b> may be first sign."
      ],
      visuals: [
        { type: "timeline", title: "Influenza pneumonia: when it appears", points: [
          { at: "Days 1–3", h: "Primary viral", p: "Progressive dyspnea, bilateral infiltrates, ARDS" },
          { at: "Days 4–14", h: "Secondary bacterial", p: "Improves, then new fever, purulent sputum, lobar consolidation", tone: "warn" },
          { at: "First 7 days", h: "Myocardial infarction", p: "Risk ≈ 6×" }
        ]},
        { type: "table", title: "WHO COVID-19 severity", head: ["Category", "Definition"], rows: [
          ["Non-severe", "None of the below (can include pneumonia without hypoxemia)"],
          ["<b>Severe</b>", "SpO₂ &lt;90% room air, or RR &gt;30, or severe respiratory distress"],
          ["<b>Critical</b>", "ARDS, sepsis, shock, ventilation (invasive or non-invasive), vasopressors"]
        ]}
      ]
    },
    "5": {
      summary: [
        "Suspect: epidemic season, ILI then hypoxemia, <b>bilateral ground-glass</b>, lymphopenia, clusters.",
        "<b>RT-PCR / NAAT</b> (multiplex) is the test of choice; lower respiratory samples in intubated patients.",
        "Rapid antigen tests: fast, but <b>a negative does not exclude</b> infection.",
        "<b>Do not wait for results</b> to start oseltamivir in hospitalized or high-risk patients.",
        "COVID-19 CT: <b>bilateral, peripheral, basal GGO</b>, crazy paving. Influenza: new lobar consolidation or cavity → bacterial (MRSA).",
        "Avian exposure (birds, dairy cattle): notify public health, airborne + contact precautions."
      ],
      visuals: [
        { type: "compare", title: "Tests", cols: [
          { h: "RT-PCR / NAAT", tone: "good", items: ["Test of choice", "High sensitivity and specificity", "Can stay positive for weeks (SARS-CoV-2)"] },
          { h: "Rapid antigen", tone: "warn", items: ["Fast, point of care", "Lower sensitivity", "Negative ≠ excluded"] },
          { h: "Not for acute diagnosis", items: ["Viral culture", "Serology"] }
        ]},
        { type: "table", title: "Typical imaging", head: ["", "Pattern"], rows: [
          ["COVID-19", "Bilateral peripheral basal ground-glass, crazy paving; CT more sensitive"],
          ["Influenza", "Bilateral GGO, patchy consolidation; cavity → MRSA"],
          ["RSV (infant)", "Hyperinflation, peribronchial thickening; X-ray not routine"],
          ["IAPA / CAPA", "Nodules, cavities, tracheobronchitis; BAL galactomannan"]
        ]}
      ]
    },
    "6": {
      summary: [
        "Oxygen, HFNO/NIV, awake prone (COVID-19), lung-protective ventilation. Antibiotics only if bacterial co-infection suspected. <b>No aspirin in children</b>.",
        "<b>Influenza → oseltamivir ASAP</b>, without waiting for tests; hospitalized and severe <b>regardless of time since onset</b>. Baloxavir for non-severe. <b>No corticosteroids</b>.",
        "<b>COVID-19 non-severe high-risk → nirmatrelvir-ritonavir within 5 days</b> (check interactions!); remdesivir 3 days as alternative.",
        "<b>Severe/critical COVID-19 → dexamethasone + tocilizumab/sarilumab or baricitinib</b>. No steroids without oxygen need.",
        "RSV: <b>supportive</b>. Infant bronchiolitis: no salbutamol, no adrenaline, no steroids, no antibiotics. Palivizumab and nirsevimab prevent, they don't treat."
      ],
      visuals: [
        { type: "ladder", title: "COVID-19 treatment by severity (WHO)", steps: [
          { h: "Non-severe, low risk", p: "Symptomatic only; no steroids" },
          { h: "Non-severe, high risk", p: "Nirmatrelvir-ritonavir ≤5 days; alternatives remdesivir (≤7 days), molnupiravir (not in EU)" },
          { h: "Severe", p: "Dexamethasone + IL-6R blocker or baricitinib; remdesivir (conditional)" },
          { h: "Critical", p: "Dexamethasone + IL-6R blocker or baricitinib", tone: "warn" }
        ], caption: "Thromboprophylaxis in all hospitalized; therapeutic anticoagulation only for confirmed thrombosis." },
        { type: "chips", title: "Nirmatrelvir-ritonavir: check interactions (CYP3A4)", groups: [
          { h: "Raised by ritonavir", items: ["Tacrolimus, ciclosporin, everolimus", "Amiodarone", "Simvastatin, lovastatin", "Rivaroxaban, ticagrelor", "Some antiepileptics, sedatives"] },
          { h: "Make it fail", items: ["Rifampicin", "Carbamazepine", "St John's wort"] }
        ]},
        { type: "compare", title: "Influenza vs COVID-19: steroids", cols: [
          { h: "Influenza pneumonia", tone: "warn", items: ["No corticosteroids (higher mortality, IAPA)", "Oseltamivir always in hospital"] },
          { h: "COVID-19", tone: "accent", items: ["No steroids if no oxygen need", "Dexamethasone if on oxygen or ventilated"] }
        ]}
      ]
    },
    "7": {
      summary: [
        "Persistent or recurrent fever → <b>bacterial superinfection, thromboembolism, IAPA/CAPA</b>.",
        "Radiology lags behind; after severe COVID-19/ARDS: PFTs, DLCO, 6-minute walk, rehabilitation.",
        "<b>Long COVID</b> (WHO): starts within 3 months, lasts ≥2 months, no other explanation. Fatigue, post-exertional malaise, brain fog, POTS. Vaccination reduces risk.",
        "After RSV bronchiolitis: recurrent wheeze; cough can last 2–4 weeks.",
        "Use follow-up to vaccinate and stop smoking."
      ],
      visuals: [
        { type: "compare", title: "Post-COVID-19 condition", cols: [
          { h: "Definition", tone: "accent", items: ["Starts ≤3 months after infection", "Lasts ≥2 months", "No alternative diagnosis"] },
          { h: "Symptoms", items: ["Fatigue, post-exertional malaise", "Dyspnea", "Brain fog", "Palpitations, POTS", "Sleep, mood"] },
          { h: "Management", items: ["Symptom-based, multidisciplinary", "Pacing", "No proven drug"] }
        ]}
      ]
    },
    "8": {
      summary: [
        "Isolation: <b>influenza droplet</b>; <b>SARS-CoV-2 airborne + contact</b>; <b>RSV contact + droplet</b>; avian: airborne + contact + eyes.",
        "Influenza vaccine <b>every year</b> (drift); now <b>trivalent</b> (B/Yamagata gone). LAIV is live: not in pregnancy or immunosuppression. <b>Egg allergy is not a contraindication</b>.",
        "Chemoprophylaxis (oseltamivir/baloxavir) for very high-risk contacts and <b>all residents</b> in LTCF outbreaks.",
        "COVID-19: annual updated booster for ≥60 and high-risk; protects mainly against severe disease.",
        "RSV: vaccines for adults <b>≥60</b>; <b>maternal vaccine</b> at 24–36 weeks; <b>nirsevimab one dose for all infants</b> in their first season."
      ],
      visuals: [
        { type: "table", title: "Hospital precautions", head: ["Virus", "Precautions"], rows: [
          ["Influenza", "Droplet (surgical mask); FFP2 for aerosol-generating procedures"],
          ["SARS-CoV-2", "<b>Airborne + contact</b>: FFP2, eye protection, gown, gloves"],
          ["RSV", "Contact + droplet; hand hygiene; cohort infants"],
          ["Avian / novel influenza", "Airborne + contact + eye protection; notify"]
        ]},
        { type: "compare", title: "Protecting infants from RSV (one strategy is usually enough)", cols: [
          { h: "Maternal vaccine", tone: "accent", items: ["Abrysvo in pregnancy", "EU: 24–36 weeks (US 32–36)", "Antibodies cross the placenta"] },
          { h: "Nirsevimab", tone: "good", items: ["One IM injection", "At birth or before the season", "≥5 months protection", "If mother not vaccinated ≥2 weeks before delivery"] },
          { h: "Palivizumab", items: ["Monthly", "High-risk infants only", "Being replaced"] }
        ]},
        { type: "table", title: "Influenza vaccine types", head: ["Type", "For"], rows: [
          ["Inactivated standard", "Everyone ≥6 months, including pregnancy"],
          ["Adjuvanted / high-dose", "Older adults"],
          ["Recombinant HA", "Adults; egg-free"],
          ["Live attenuated (nasal)", "Children ≥2 years; <b>not</b> immunocompromised, pregnant, aspirin-treated"]
        ]}
      ]
    }
  }
};
