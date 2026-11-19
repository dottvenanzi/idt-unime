/* Revision layer for Chapter 1 — Sepsis and Septic Shock. Source: chapters/01-sepsis-septic-shock.md */
window.REVISION = window.REVISION || {};
window.REVISION[1] = {
  sections: {
    "1": {
      summary: [
        "Sepsis is a <b>syndrome, not a disease</b>: bacteria, fungi, viruses and parasites can all cause it. The host response defines it.",
        "Among ICU infections with a positive culture: <b>gram-negatives 67%</b>, gram-positives 37%, fungi 16%.",
        "About <b>one third</b> of sepsis is <b>culture-negative</b>.",
        "Most common source: <b>lung</b>, then <b>abdomen</b> and <b>urinary tract</b>.",
        "Host and exposure point to specific pathogens: <b>asplenia</b> → encapsulated bacteria; <b>neutropenia</b> → <i>P. aeruginosa</i>; <b>travel</b> → malaria first."
      ],
      visuals: [
        { type: "bars", title: "Organisms in ICU patients with a positive culture (EPIC III; more than one possible)", unit: "%", max: 100, rows: [
          { label: "Gram-negative", v: 67 }, { label: "Gram-positive", v: 37 }, { label: "Fungi", v: 16 }
        ]},
        { type: "ladder", title: "Sources, from most common", steps: [
          { h: "Lung", p: "<i>S. pneumoniae</i>, <i>S. aureus</i>, <i>Legionella</i>, viruses; in hospital <i>Pseudomonas</i>, <i>Klebsiella</i>, MRSA" },
          { h: "Abdomen", p: "Enterobacterales, anaerobes, enterococci, <i>Candida</i>: often polymicrobial" },
          { h: "Urinary tract", p: "<i>E. coli</i>, enterococci, <i>P. aeruginosa</i>" },
          { h: "Catheter / bloodstream", p: "CoNS, <i>S. aureus</i>, gram-negatives, <i>Candida</i>" },
          { h: "Skin and soft tissue", p: "<i>S. pyogenes</i>, <i>S. aureus</i>, <i>Clostridium</i>" },
          { h: "CNS", p: "<i>N. meningitidis</i>, <i>S. pneumoniae</i>, <i>Listeria</i>" }
        ]},
        { type: "cards", title: "Host or exposure → pathogen to remember", items: [
          { h: "Asplenia", p: "Encapsulated: pneumococcus, meningococcus, Hib", tag: "Dog bite → <i>Capnocytophaga</i>" },
          { h: "Neutropenia", p: "Gram-negatives incl. <i>P. aeruginosa</i>, viridans streptococci, <i>Candida</i>, moulds", tag: "Cover <i>Pseudomonas</i>" },
          { h: "Cirrhosis + seafood / seawater", p: "<i>Vibrio vulnificus</i>", tag: "Bullae, shock" },
          { h: "Healthcare, prior antibiotics, ICU", p: "ESBL, CRE, MDR <i>Pseudomonas</i>, CRAB, MRSA, VRE", tag: "Higher mortality", tone: "warn" },
          { h: "Toxin-mediated", p: "<i>S. aureus</i>, <i>S. pyogenes</i> superantigens", tag: "Toxic shock" },
          { h: "Returning traveller", p: "<i>P. falciparum</i>, dengue, typhoid, leptospirosis, rickettsioses, melioidosis", tag: "Malaria first", tone: "warn" }
        ]}
      ]
    },
    "2": {
      summary: [
        "<b>Sepsis-1 (1991)</b>: SIRS + infection. <b>Sepsis-3 (2016)</b>: infection + organ dysfunction (ΔSOFA ≥2). \"Severe sepsis\" no longer exists.",
        "SIRS was abandoned: <b>neither sensitive nor specific</b>.",
        "<b>Phoenix (2024)</b>: first data-driven pediatric definition.",
        "≈ <b>49 million cases, 11 million deaths</b> per year: about <b>1 in 5 deaths</b> worldwide, mostly in low- and middle-income countries.",
        "Risk factors: extremes of age, male sex, comorbidities, immunosuppression, asplenia, devices, recent surgery or hospitalization, poverty."
      ],
      visuals: [
        { type: "timeline", title: "How the definition changed", points: [
          { at: "1991", h: "Sepsis-1", p: "SIRS + infection; severe sepsis = + organ dysfunction" },
          { at: "2016", h: "Sepsis-3", p: "Infection + ΔSOFA ≥2; severe sepsis dropped", tone: "good" },
          { at: "2024", h: "Phoenix", p: "Children: Phoenix score ≥2" },
          { at: "2025", h: "SOFA-2", p: "Same 6 organs, new thresholds" }
        ]},
        { type: "stats", items: [
          { v: "≈ 49 M", l: "sepsis cases per year (2017)" },
          { v: "≈ 11 M", l: "deaths per year: 19.7% of all deaths" },
          { v: "≈ 42%", l: "hospital mortality of ICU-treated sepsis (high-income countries)" }
        ]}
      ]
    },
    "3": {
      summary: [
        "Sepsis is a <b>dysregulated</b> response: <b>hyperinflammation and immunosuppression coexist</b>.",
        "<b>PAMPs</b> (LPS) and <b>DAMPs</b> bind <b>Toll-like receptors</b> → NF-κB, inflammasome → TNF-α, IL-1β, IL-6, complement, NETs.",
        "<b>Superantigens</b> activate many T cells at once → cytokine storm (toxic shock).",
        "<b>Immunoparalysis</b>: lymphocyte apoptosis, low monocyte HLA-DR, IL-10, T-cell exhaustion → secondary infections, viral reactivation, late deaths.",
        "<b>Endothelium</b>: glycocalyx shedding, capillary leak. <b>Immunothrombosis</b> → microthrombi, DIC.",
        "<b>Distributive shock</b>: NO-mediated vasodilatation, relative vasopressin deficiency, septic cardiomyopathy, relative adrenal insufficiency.",
        "<b>Lactate</b> rises from hypoxia but also from β2-adrenergic glycolysis and reduced hepatic clearance."
      ],
      visuals: [
        { type: "flow", title: "From microbe to organ failure", steps: [
          { h: "Recognition", p: "PAMPs / DAMPs → Toll-like receptors" },
          { h: "Inflammation", p: "TNF-α, IL-1β, IL-6, complement C5a, neutrophils, NETs" },
          { h: "Endothelium and coagulation", p: "Capillary leak, immunothrombosis, DIC" },
          { h: "Circulation and cells", p: "Vasodilatation, cardiomyopathy, mitochondrial dysfunction" },
          { h: "Organ dysfunction", p: "Brain, lung, kidney, liver, coagulation, gut", tone: "warn" }
        ]},
        { type: "compare", title: "Two faces at the same time", cols: [
          { h: "Hyperinflammation", tone: "warn", items: ["Cytokine release", "Fever, shock", "Tissue injury"] },
          { h: "Immunosuppression", tone: "accent", items: ["Lymphocyte apoptosis", "↓ HLA-DR on monocytes, ↑ IL-10", "Secondary infections, CMV/HSV reactivation", "Late deaths"] }
        ]},
        { type: "grid", title: "Organ dysfunction", items: [
          { h: "Brain", p: "Encephalopathy: delirium, coma" },
          { h: "Lung", p: "ARDS" },
          { h: "Circulation", p: "Shock, septic cardiomyopathy" },
          { h: "Kidney", p: "AKI, oliguria" },
          { h: "Liver", p: "Cholestasis, hypoxic hepatitis" },
          { h: "Coagulation", p: "Thrombocytopenia, DIC" },
          { h: "Gut", p: "Ileus, barrier loss" },
          { h: "Metabolic", p: "Hyperglycemia, lactic acidosis, adrenal insufficiency" }
        ]}
      ]
    },
    "4": {
      summary: [
        "No single typical picture: <b>signs of the source + organ dysfunction + hypoperfusion</b>.",
        "<b>Tachypnea</b> is often the earliest sign; <b>new confusion</b> is often the first sign in older adults.",
        "<b>Hypothermia</b> carries a worse outcome. Older, immunocompromised and neutropenic patients may have no fever.",
        "Normal blood pressure does <b>not</b> exclude hypoperfusion: lactate, capillary refill &gt;3 s, mottling, urine &lt;0.5 mL/kg/h."
      ],
      visuals: [
        { type: "compare", title: "Warm vs cold shock", cols: [
          { h: "Early (warm)", items: ["Warm skin", "Bounding pulses", "Wide pulse pressure"] },
          { h: "Late (cold)", tone: "warn", items: ["Cold, mottled extremities (knees first)", "Narrow pulse pressure", "Capillary refill &gt;3 s"] }
        ]},
        { type: "table", title: "Bedside clue → think of", head: ["Clue", "Think of"], rows: [
          ["Petechiae, purpura fulminans", "<i>N. meningitidis</i> (pneumococcus in asplenia)"],
          ["Diffuse erythroderma + hypotension", "Toxic shock syndrome: look for tampon, wound, nasal packing"],
          ["Pain out of proportion, crepitus, bullae", "Necrotizing fasciitis"],
          ["Ecthyma gangrenosum in neutropenia", "<i>P. aeruginosa</i>"],
          ["Flank pain, CVA tenderness", "Obstructive pyelonephritis"],
          ["Jaundice, RUQ pain", "Cholangitis"],
          ["New murmur, emboli", "Endocarditis"],
          ["Fever after travel", "Malaria first"]
        ]}
      ]
    },
    "5": {
      summary: [
        "<b>Sepsis</b> = infection + <b>acute ΔSOFA ≥2</b> (mortality &gt;10%).",
        "<b>Septic shock</b> = sepsis + <b>vasopressors for MAP ≥65</b> + <b>lactate &gt;2 mmol/L</b> despite fluids (mortality &gt;40%).",
        "<b>qSOFA</b> (RR ≥22, altered mentation, SBP ≤100): a prognostic prompt, <b>not a definition and not a screening tool</b>.",
        "Screening: SSC 2026 prefers <b>NEWS/NEWS2, MEWS or SIRS</b> over qSOFA.",
        "Work-up: ≥2 blood culture sets (without delaying antibiotics), source cultures, <b>lactate</b>, labs for SOFA, imaging/POCUS to find a collection.",
        "Children: <b>Phoenix score ≥2</b>; septic shock = ≥1 cardiovascular point."
      ],
      visuals: [
        { type: "compare", title: "Sepsis-3 in two lines", cols: [
          { h: "Sepsis", tone: "accent", items: ["Suspected or documented infection", "+ acute ΔSOFA ≥2 from baseline"] },
          { h: "Septic shock", tone: "warn", items: ["Sepsis", "+ vasopressors to keep MAP ≥65 mmHg", "+ lactate &gt;2 mmol/L", "despite adequate fluids"] },
          { h: "qSOFA (≥2 = high risk)", items: ["RR ≥22/min", "Altered mentation", "SBP ≤100 mmHg", "Prognostic only"] }
        ]},
        { type: "table", title: "SOFA: the six systems (points 1 → 4)", head: ["System", "Measure", "Worse with"], rows: [
          ["Respiration", "PaO₂/FiO₂", "&lt;400 → &lt;100 with support"],
          ["Coagulation", "Platelets ×10³/µL", "&lt;150 → &lt;20"],
          ["Liver", "Bilirubin mg/dL", "1.2 → ≥12"],
          ["Cardiovascular", "MAP / vasopressors", "MAP &lt;70 → high-dose catecholamines"],
          ["CNS", "Glasgow Coma Scale", "13–14 → &lt;6"],
          ["Renal", "Creatinine / urine output", "1.2 → ≥5 mg/dL or &lt;200 mL/day"]
        ]},
        { type: "chips", title: "Mimics to exclude", groups: [
          { h: "", items: ["Hypovolemic, cardiogenic, obstructive shock", "Pancreatitis", "Adrenal crisis", "Anaphylaxis", "Drug reactions", "HLH"] }
        ]}
      ]
    },
    "6": {
      summary: [
        "Work in parallel: <b>recognize → cultures + lactate → antimicrobials → fluids → vasopressors → source control → reassess</b>.",
        "Antimicrobials: <b>shock or probable sepsis → within 1 h</b>; possible sepsis without shock → rapid assessment, <b>within 3 h</b>.",
        "Cover MDR pathogens <b>only when their risk is high</b>; anaerobes and antifungals not routinely.",
        "<b>Prolonged infusion</b> of β-lactams after a loading dose.",
        "<b>Source control within 6 h</b>.",
        "<b>≥30 mL/kg balanced crystalloid</b> in 3 h for hypoperfusion; no starches. Then dynamic measures of fluid responsiveness.",
        "<b>Norepinephrine</b> first, <b>MAP 65</b>; add <b>vasopressin</b>; no dopamine. Peripheral start is acceptable.",
        "<b>Hydrocortisone in septic shock</b>, not in sepsis without shock. No vitamin C. Early-goal-directed therapy is no longer recommended."
      ],
      visuals: [
        { type: "flow", title: "Hour-1 bundle (start within 1 hour)", steps: [
          { h: "1 · Measure lactate", p: "Repeat if &gt;2 mmol/L" },
          { h: "2 · Blood cultures", p: "Before antimicrobials, without delaying them" },
          { h: "3 · Broad-spectrum antimicrobials", p: "", tone: "warn" },
          { h: "4 · Crystalloid 30 mL/kg", p: "For hypotension or lactate ≥4" },
          { h: "5 · Vasopressors", p: "If still hypotensive: MAP ≥65 mmHg" }
        ]},
        { type: "table", title: "When to start antimicrobials (SSC 2026)", head: ["Situation", "Timing"], rows: [
          ["Septic shock (possible, probable, definite)", "<b>Immediately, ideally &lt;1 h</b>"],
          ["Probable or definite sepsis, no shock", "<b>Immediately, ideally &lt;1 h</b>"],
          ["Possible sepsis, no shock", "Rapid assessment; <b>within 3 h</b> if infection still suspected"],
          ["Low likelihood, no shock", "Defer and monitor"]
        ], caption: "Procalcitonin is not used to decide whether to start." },
        { type: "ladder", title: "Vasopressor ladder", steps: [
          { h: "Norepinephrine", p: "First line; MAP target 65 mmHg (60–65 if ≥65 years)" },
          { h: "+ Vasopressin", p: "If MAP inadequate on escalating norepinephrine" },
          { h: "+ Epinephrine", p: "If still inadequate" },
          { h: "+ Dobutamine", p: "Persistent hypoperfusion with cardiac dysfunction", tone: "warn" }
        ], caption: "Dopamine not recommended (arrhythmias). Levosimendan not recommended." },
        { type: "compare", title: "Fluids", cols: [
          { h: "Yes", tone: "good", items: ["Crystalloids first", "Balanced (Ringer's lactate, Plasma-Lyte) over saline", "Dynamic measures: passive leg raising, SV/PP variation", "Serial lactate + capillary refill"] },
          { h: "No", tone: "warn", items: ["Hydroxyethyl starches (AKI, death)", "Gelatins", "Routine albumin added to crystalloid", "Fluid overload after resuscitation"] }
        ]},
        { type: "chips", title: "Supportive care", groups: [
          { h: "Do", items: ["Insulin if glucose ≥180 mg/dL", "LMWH prophylaxis", "PPI if GI bleeding risk", "Restrictive transfusion", "ARDS: 6 mL/kg, plateau ≤30, prone", "Goals of care within 72 h"] },
          { h: "Don't", items: ["Vitamin C", "Bicarbonate for hemodynamics", "Blood purification"] }
        ]}
      ]
    },
    "7": {
      summary: [
        "Reassess often: MAP, heart rate, mental status, capillary refill, urine output, <b>lactate until normal</b>.",
        "<b>Review antimicrobials daily</b>: de-escalate when the pathogen is known (strong); stop if non-infectious.",
        "With source control, <b>shorter courses</b>: 7 days non-inferior to 14 for bloodstream infection.",
        "<b>Procalcitonin + clinical evaluation</b> to decide when to stop.",
        "Persistent fever or shock at 48–72 h → uncontrolled source, resistant or unusual pathogen, new infection, drug fever, catheter, non-infectious cause.",
        "<b>Post-sepsis syndrome</b>: physical, cognitive, psychological, immune sequelae; frequent readmission (mostly infection)."
      ],
      visuals: [
        { type: "compare", title: "Post-sepsis syndrome", cols: [
          { h: "Physical", items: ["Weakness, ICU-acquired weakness", "Fatigue"] },
          { h: "Cognitive", items: ["Moderate-severe cognitive impairment", "New functional limits"] },
          { h: "Psychological", items: ["Anxiety, depression", "PTSD"] },
          { h: "Immune", tone: "warn", items: ["Recurrent infections", "Readmission", "Cardiovascular events"] }
        ]},
        { type: "chips", title: "At discharge", groups: [
          { h: "", items: ["Written and verbal sepsis education", "Follow-up of new impairments", "Rehabilitation", "Mental health support", "Medication reconciliation", "Vaccination update"] }
        ]}
      ]
    },
    "8": {
      summary: [
        "No vaccine against sepsis itself: prevent the <b>infections</b> that cause it.",
        "Vaccines: <b>pneumococcal, meningococcal ACWY and B, Hib, influenza, COVID-19</b>; childhood and maternal vaccination.",
        "<b>Asplenia</b>: vaccines + education + standby antibiotic or prophylaxis in selected cases.",
        "Infection control: hand hygiene, WASH, <b>device bundles</b>, early removal of devices. SDD only in low-resistance ICUs.",
        "Stewardship reduces resistance and <i>C. difficile</i>, and so future sepsis. WHO resolution WHA70.7 (2017): sepsis is a global priority."
      ],
      visuals: [
        { type: "compare", title: "Three prevention levels", cols: [
          { h: "Vaccination", tone: "good", items: ["Pneumococcal, meningococcal, Hib", "Influenza, COVID-19", "Asplenia: all of these + education"] },
          { h: "Infection control", items: ["Hand hygiene, WASH", "Central line, urinary catheter, ventilator bundles", "Remove devices early"] },
          { h: "Health system", tone: "accent", items: ["Stewardship", "Early recognition programmes", "National sepsis plans"] }
        ]}
      ]
    }
  }
};
