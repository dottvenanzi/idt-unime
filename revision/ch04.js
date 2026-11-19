/* Revision layer for Chapter 4 — Community-Acquired Pneumonia.
   Written from /chapters/04-community-acquired-pneumonia.md; full text is shown below each card. */
window.REVISION = window.REVISION || {};
window.REVISION[4] = {
  sections: {
    "1": {
      summary: [
        "In about <b>half</b> of hospitalized patients <b>no pathogen is found</b>, even with extensive testing.",
        "<b><i>S. pneumoniae</i></b> is the most common bacterial cause.",
        "<b>Atypical bacteria</b> (<i>Mycoplasma</i>, <i>Chlamydia</i>, <i>Legionella</i>) are not seen on Gram stain and are <b>not covered by β-lactams</b>.",
        "<b>Respiratory viruses</b> are found in about a quarter to a third of cases and can be followed by bacterial superinfection.",
        "<i>S. aureus</i> (including CA-MRSA) typically follows <b>influenza</b> and causes <b>necrotizing/cavitary</b> pneumonia."
      ],
      visuals: [
        { type: "stats", items: [
          { v: "≈ 1/2", l: "hospitalized CAP with no pathogen identified" },
          { v: "1/4 – 1/3", l: "cases with a respiratory virus" },
          { v: "#1", l: "<i>S. pneumoniae</i>: most common bacterial cause" }
        ]},
        { type: "cards", title: "Pathogen groups and the clue that points to each", items: [
          { h: "Typical bacteria", p: "<i>S. pneumoniae</i>, <i>H. influenzae</i>, <i>M. catarrhalis</i>", tag: "COPD, smokers" },
          { h: "Atypical bacteria", p: "<i>Mycoplasma</i>, <i>Chlamydia pneumoniae</i>, <i>Legionella</i>", tag: "No β-lactam cover" },
          { h: "<i>Legionella</i>", p: "Water sources (cooling towers, hot tubs); severe disease", tag: "Hyponatremia, diarrhea" },
          { h: "<i>S. aureus</i> (MSSA, CA-MRSA)", p: "Often after influenza", tag: "Cavitation, empyema" },
          { h: "Gram-negative bacilli", p: "<i>Klebsiella</i>, Enterobacterales; <i>Pseudomonas</i>", tag: "Alcohol, bronchiectasis" },
          { h: "Anaerobes / oral flora", p: "Aspiration: dysphagia, reduced consciousness", tag: "Lung abscess" }
        ]},
        { type: "chips", title: "Exposure clues", groups: [
          { h: "Birds", items: ["<i>Chlamydia psittaci</i>"] },
          { h: "Farm / parturient animals", items: ["<i>Coxiella burnetii</i> (Q fever)"] },
          { h: "Endemic areas", items: ["Tuberculosis", "Endemic fungi"] }
        ]}
      ]
    },
    "2": {
      summary: [
        "CAP is acquired <b>outside the hospital</b>. Pneumonia starting <b>≥48 h after admission</b> is HAP, with more resistant gram-negatives and MRSA.",
        "A leading cause of hospitalization and death from infection; incidence and mortality <b>rise with age</b>.",
        "Viral CAP peaks in <b>winter</b>; <i>Legionella</i> in <b>summer</b> and in water-related <b>outbreaks</b>."
      ],
      visuals: [
        { type: "timeline", title: "Where the pneumonia started decides the category", points: [
          { at: "Community", h: "CAP", p: "Typical, atypical, viral pathogens" },
          { at: "Admission", h: "0 h", p: "" , tone: "muted"},
          { at: "≥ 48 h in hospital", h: "HAP", p: "Resistant gram-negatives, MRSA (Chapter 5)", tone: "warn" }
        ]},
        { type: "chips", title: "Risk factors", groups: [
          { h: "Host", items: ["Age ≥65", "COPD", "Chronic heart, liver, kidney disease", "Diabetes", "Immunosuppression (incl. HIV)"] },
          { h: "Habits and exposures", items: ["Smoking", "Alcohol use disorder", "Dysphagia / aspiration risk", "Recent viral respiratory infection"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "Defenses: <b>cough reflex</b>, <b>mucociliary clearance</b>, secretory IgA, <b>alveolar macrophages</b>.",
        "<b>Microaspiration</b> of oropharyngeal flora is the most common route; inhalation and hematogenous spread are the others.",
        "The inflammatory exudate filling the alveoli produces the <b>consolidation</b> on imaging and the <b>systemic signs</b>.",
        "Severe CAP = uncontrolled host response: <b>sepsis, septic shock, ARDS</b>."
      ],
      visuals: [
        { type: "compare", title: "Three routes of entry", cols: [
          { h: "Microaspiration", tag: "Most common", tone: "accent", items: ["Oropharyngeal flora", "<i>S. pneumoniae</i>, <i>H. influenzae</i>"] },
          { h: "Inhalation", items: ["Aerosols", "<i>Legionella</i>, viruses, <i>M. tuberculosis</i>"] },
          { h: "Hematogenous", items: ["From a distant focus", "<i>S. aureus</i>: right-sided endocarditis, injection drug use"] }
        ]},
        { type: "flow", title: "From inoculum to disease", steps: [
          { h: "Large inoculum or weak defenses", p: "Smoking, alcohol, viral damage to cilia, immunosuppression" },
          { h: "Multiplication in the alveoli", p: "" },
          { h: "Inflammatory response", p: "Neutrophils, cytokines, exudate" },
          { h: "Consolidation + systemic signs", p: "Opacity on imaging; fever, leukocytosis" },
          { h: "If uncontrolled", p: "Sepsis, septic shock, ARDS", tone: "warn" }
        ]},
        { type: "flow", dir: "row", title: "Classic lobar (pneumococcal) pneumonia", steps: [
          { h: "Congestion" }, { h: "Red hepatization" }, { h: "Gray hepatization" }, { h: "Resolution", tone: "good" }
        ], caption: "Bronchopneumonia instead is patchy and centered on the airways." }
      ]
    },
    "4": {
      summary: [
        "Compatible syndrome: <b>fever, dyspnea, cough, sputum</b>; also pleuritic pain, chills, myalgias.",
        "Over the consolidation: <b>crackles, bronchial breath sounds, dullness, increased fremitus, egophony</b>.",
        "<b>Older adults</b> may present with confusion, falls or functional decline, sometimes <b>without fever</b>.",
        "\"Typical\" vs \"atypical\" presentations <b>overlap too much</b> to predict the pathogen."
      ],
      visuals: [
        { type: "compare", title: "Classic teaching vs reality", cols: [
          { h: "\"Typical\" picture", items: ["Abrupt onset", "High fever, rigors", "Productive cough", "Linked to pneumococcus"] },
          { h: "\"Atypical\" picture", items: ["Gradual onset", "Dry cough", "Headache, myalgias", "Linked to atypical pathogens"] },
          { h: "Exam take-away", tone: "warn", items: ["Patterns overlap", "Neither symptoms nor X-ray predict the etiology"] }
        ]},
        { type: "chips", title: "Complications", groups: [
          { h: "Local", items: ["Parapneumonic effusion / empyema", "Lung abscess", "Necrotizing pneumonia"] },
          { h: "Systemic", items: ["Bacteremia, metastatic infection", "Sepsis / septic shock", "Respiratory failure / ARDS", "Cardiac events in older adults"] }
        ]}
      ]
    },
    "5": {
      summary: [
        "Diagnosis = <b>opacity on chest imaging</b> + <b>compatible clinical syndrome</b>. Imaging cannot tell the pathogen.",
        "Next step: <b>severity and site of care</b>. Clinical judgment, supported by <b>PSI (preferred)</b> or CURB-65.",
        "New <b>SpO₂ &lt;92% on room air</b> (no underlying lung disease) supports admission.",
        "ICU: <b>1 major</b> criterion (mechanical ventilation or vasopressors) or <b>≥3 minor</b> criteria.",
        "Microbiological testing is <b>tiered by severity</b>: almost none for outpatients, cultures and antigens on the ward and in the ICU.",
        "<b>Cavitation</b> → also test for TB (airborne isolation), fungi, <i>Nocardia</i>."
      ],
      visuals: [
        { type: "algo", title: "Diagnostic and triage pathway", nodes: [
          { q: "Fever, dyspnea, cough, sputum?", opts: [{ when: "Yes", to: "Chest X-ray, PA + lateral", next: true }] },
          { q: "Opacity on the radiograph?", opts: [
            { when: "Yes", to: "CAP diagnosed", tone: "good", next: true },
            { when: "No, but suspicion high or film nondiagnostic", to: "Chest CT" }
          ]},
          { q: "How severe? Where to treat?", opts: [
            { when: "Tools", to: "Clinical judgment + PSI (preferred) or CURB-65 + SpO₂", next: true }
          ]},
          { q: "Any ICU criterion?", opts: [
            { when: "1 major or ≥3 minor", to: "ICU", tone: "warn" },
            { when: "None", to: "Ward or outpatient, by score and practical factors", tone: "good" }
          ]}
        ]},
        { type: "curb65" },
        { type: "table", title: "PSI classes and site of care", head: ["PSI class", "Site of care"], rows: [
          ["I – II", "Generally outpatient"],
          ["III", "Outpatient or short observation, depending on circumstances"],
          ["IV – V", "Hospital admission; consider ICU"]
        ], caption: "PSI uses 20 variables (age, comorbidities, exam, labs, imaging): more accurate and better validated. CURB-65 is easier at the bedside." },
        { type: "compare", title: "IDSA/ATS ICU criteria", cols: [
          { h: "Major", tag: "One is enough", tone: "warn", items: ["Respiratory failure needing mechanical ventilation", "Septic shock needing vasopressors"] },
          { h: "Minor", tag: "≥ 3 needed", items: ["RR ≥30/min", "PaO₂/FiO₂ ≤250", "Multilobar infiltrates", "Confusion", "BUN ≥20 mg/dL", "WBC &lt;4,000/µL", "Platelets &lt;100,000/µL", "Core temp &lt;36 °C", "Hypotension needing aggressive fluids"] }
        ]},
        { type: "chips", title: "Admit whatever the score if", groups: [
          { h: "", items: ["New SpO₂ &lt;92% on room air", "Cannot take oral drugs", "Cognitive or functional impairment", "Social barriers (homelessness, substance use, distance)"] }
        ]},
        { type: "compare", title: "Tiered microbiological testing", cols: [
          { h: "Outpatient", tag: "Mild", tone: "good", items: ["Generally none", "Respiratory virus test only if it changes management (influenza, SARS-CoV-2)"] },
          { h: "Ward", tag: "Moderate", items: ["Blood cultures", "Sputum Gram stain + culture", "Urine pneumococcal antigen", "<i>Legionella</i> PCR (or urine antigen)", "Viral PCR in season", "MRSA nasal PCR if risk", "HIV screening"] },
          { h: "ICU", tag: "Severe", tone: "warn", items: ["As on the ward", "Consider bronchoscopic samples", "If failing therapy: fungi, viruses, <i>Pneumocystis</i> if immunocompromised"] }
        ]}
      ]
    },
    "6": {
      summary: [
        "Outpatient therapy targets <b><i>S. pneumoniae</i>, <i>H. influenzae</i> and atypicals</b>.",
        "<b>Comorbidities or recent antibiotics</b> → broaden to some gram-negatives and MSSA.",
        "Hospitalized: <b>β-lactam + macrolide</b> or a <b>respiratory fluoroquinolone</b>; β-lactams alone miss atypicals.",
        "Add <b>anti-MRSA</b> or <b>antipseudomonal</b> drugs only with risk factors; <b>oseltamivir</b> for influenza.",
        "At least <b>5 days</b> and until <b>clinically stable</b>; switch IV → oral when stable.",
        "<b>Hydrocortisone</b> in selected <b>severe</b> CAP; not in non-severe CAP or influenza."
      ],
      visuals: [
        { type: "ladder", title: "Empiric regimens by setting (adapt to local resistance)", steps: [
          { h: "Outpatient, no comorbidities", p: "Amoxicillin, or doxycycline, or a macrolide (only where pneumococcal macrolide resistance is low)" },
          { h: "Outpatient with comorbidities", p: "Amoxicillin-clavulanate or a cephalosporin + macrolide (or doxycycline), or a respiratory fluoroquinolone alone" },
          { h: "Ward", p: "β-lactam (e.g. ceftriaxone) + macrolide, or a respiratory fluoroquinolone alone" },
          { h: "ICU", p: "β-lactam + macrolide, or β-lactam + respiratory fluoroquinolone", tone: "warn" }
        ], caption: "Add-ons only with risk factors: vancomycin or linezolid (MRSA), antipseudomonal cover; oseltamivir for influenza." },
        { type: "note", h: "Why β-lactam + macrolide?", p: "Atypical pathogens lack a peptidoglycan wall (<i>Mycoplasma</i>) or live inside cells (<i>Legionella</i>, <i>Chlamydia</i>), so β-lactams cannot reach them." },
        { type: "compare", title: "When to suspect MRSA", cols: [
          { h: "Strongest risk factors", tone: "warn", items: ["Known MRSA colonization", "Prior MRSA infection", "Gram-positive cocci in clusters on good-quality sputum"] },
          { h: "Raise suspicion", items: ["Recent hospitalization or IV antibiotics (3 months)", "ESKD, injection drug use, crowding, incarceration", "Recent influenza-like illness", "Necrotizing/cavitary pneumonia", "Empyema"] },
          { h: "Stop it when", tone: "good", items: ["Negative MRSA nasal PCR: high negative predictive value → de-escalate"] }
        ]}
      ]
    },
    "7": {
      summary: [
        "Most patients improve within <b>48–72 h</b>.",
        "Clinical stability guides <b>IV-to-oral switch, discharge and duration</b>.",
        "No response → think <b>resistant pathogen, complication or wrong diagnosis</b>; re-evaluate, don't just add antibiotics.",
        "<b>No routine follow-up chest X-ray</b>: radiological clearing lags behind (6 weeks or more). Image only patients who meet lung-cancer screening criteria."
      ],
      visuals: [
        { type: "timeline", title: "Expected course", points: [
          { at: "Day 0", h: "Start antibiotics", p: "" },
          { at: "48 – 72 h", h: "Improvement expected", p: "If not: re-evaluate", tone: "warn" },
          { at: "≥ 5 days", h: "Stop when stable", p: "IV → oral once stable and able to swallow", tone: "good" },
          { at: "≥ 6 weeks", h: "X-ray clears", p: "Later in older patients" }
        ]},
        { type: "chips", title: "Clinical stability criteria", groups: [
          { h: "", items: ["T ≤37.8 °C", "HR ≤100/min", "RR ≤24/min", "SBP ≥90 mmHg", "SpO₂ ≥90% room air", "Normal mental status", "Able to eat"] }
        ]},
        { type: "compare", title: "No improvement at 48–72 h: three causes", cols: [
          { h: "Resistant or uncovered pathogen", items: ["MRSA, <i>Pseudomonas</i>", "Atypicals on β-lactam alone", "TB, fungi"] },
          { h: "Complication", items: ["Empyema, lung abscess", "Metastatic infection (endocarditis, meningitis)", "Drug fever"] },
          { h: "Wrong diagnosis", items: ["Heart failure", "Pulmonary embolism", "Lung cancer", "Organizing pneumonia, vasculitis"] }
        ], caption: "Work-up: repeat cultures, chest CT, thoracentesis if effusion, bronchoscopy." }
      ]
    },
    "8": {
      summary: [
        "Vaccination reduces pneumonia risk: <b>influenza, COVID-19, pneumococcal, RSV</b>.",
        "Influenza vaccination also prevents <b>post-influenza bacterial pneumonia</b> (pneumococcus, <i>S. aureus</i>).",
        "Other prevention: stop smoking, limit alcohol, aspiration precautions in dysphagia."
      ],
      visuals: [
        { type: "table", title: "Adult vaccines against CAP", head: ["Vaccine", "Who"], rows: [
          ["Influenza", "Recommended, every year"],
          ["COVID-19", "Recommended"],
          ["Pneumococcal", "Adults ≥50 years, and younger adults with risk conditions"],
          ["RSV", "Adults ≥60 years"]
        ]}
      ]
    }
  }
};
