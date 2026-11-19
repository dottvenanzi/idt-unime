/* Revision layer for Chapter 7 — Pulmonary Tuberculosis. Source: chapters/07-tuberculosis.md */
window.REVISION = window.REVISION || {};
window.REVISION[7] = {
  sections: {
    "1": {
      summary: [
        "<b><i>M. tuberculosis</i></b> complex (also <i>M. bovis</i>, from unpasteurized milk, and BCG).",
        "Aerobic, non-motile bacillus; <b>mycolic acids</b> → <b>acid-fast</b> (Ziehl-Neelsen, auramine).",
        "<b>Very slow growth</b> (doubling 15–20 h): liquid culture 1–3 weeks, solid 3–8 weeks.",
        "Obligate human pathogen. <b>AFB on smear may be NTM</b>: confirm with culture or NAAT.",
        "<b>MDR</b> = isoniazid + rifampin resistant; pre-XDR + fluoroquinolone; XDR + bedaquiline or linezolid."
      ],
      visuals: [
        { type: "ladder", title: "Resistance levels", steps: [
          { h: "MDR-TB", p: "Isoniazid + rifampin" },
          { h: "Pre-XDR", p: "MDR + fluoroquinolone" },
          { h: "XDR", p: "Pre-XDR + bedaquiline or linezolid", tone: "warn" }
        ]},
        { type: "ranges", title: "Time to a positive culture (weeks, to scale)", max: 8, unit: " wk", ticks: [0, 2, 4, 6, 8], rows: [
          { label: "Liquid media", from: 1, to: 3 },
          { label: "Solid media (Löwenstein-Jensen)", from: 3, to: 8 }
        ]}
      ]
    },
    "2": {
      summary: [
        "Spread by <b>droplet nuclei</b> from TB of lungs or airways.",
        "About <b>¼ of the world</b> infected; <b>&gt;10 million</b> cases and <b>&gt;1 million</b> deaths per year.",
        "Most cases: South-East Asia, Africa, Western Pacific. Italy &lt;10/100,000: often people born in high-incidence countries and vulnerable groups.",
        "Most infectious: untreated <b>pulmonary or laryngeal</b> TB, <b>cavitary</b>, <b>smear-positive</b>. Smear-negative culture-positive patients can transmit too.",
        "Progression risk: <b>HIV, anti-TNF, steroids, transplant</b>, extremes of age, recent infection (&lt;2 y), diabetes, silicosis, CKD, malnutrition."
      ],
      visuals: [
        { type: "stats", items: [
          { v: "≈ 1/4", l: "of the world population with TB infection" },
          { v: "&gt; 10 M", l: "new cases of TB disease per year" },
          { v: "&gt; 1 M", l: "deaths per year" }
        ]},
        { type: "compare", title: "Two different risks", cols: [
          { h: "Risk of new infection", items: ["Contacts of untreated respiratory TB", "Travel to or residence in endemic areas", "Health care, prisons, shelters"] },
          { h: "Risk of progression to disease", tone: "warn", items: ["HIV", "Anti-TNF, corticosteroids, transplant drugs", "Young children, elderly", "Infection in the last 2 years", "Diabetes, silicosis, CKD, malnutrition"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "After inhalation: <b>no infection</b>, <b>TB infection</b> (TST/IGRA positive, no symptoms), <b>primary disease</b> (&lt;2 years), or <b>reactivation</b> (years later).",
        "Lifetime reactivation risk <b>5–10%</b> without risk factors; much higher with immunosuppression.",
        "Alveolar macrophages → hilar nodes → small blood-borne spread (basis of extrapulmonary TB).",
        "At 2–8 weeks: <b>Th1 + IFN-γ</b> activate macrophages; <b>TNF</b> builds the <b>granuloma</b> (caseous necrosis). TST/IGRA turn positive.",
        "Reactivation prefers <b>upper lobes</b> (high O₂). Cavities hold huge numbers of bacilli → highly infectious."
      ],
      visuals: [
        { type: "flow", title: "Natural history after exposure", steps: [
          { h: "Inhaled droplet nuclei", p: "Taken up by alveolar macrophages" },
          { h: "Spread to hilar nodes and blood", p: "Seeds other organs" },
          { h: "Cell-mediated immunity at 2–8 weeks", p: "Th1, IFN-γ, TNF → granuloma; Ghon complex. TST/IGRA positive" },
          { h: "TB infection (contained)", p: "No symptoms", tone: "good" },
          { h: "Reactivation if immunity fails", p: "HIV, anti-TNF, ageing → upper-lobe cavities", tone: "warn" }
        ]},
        { type: "table", title: "Four possible outcomes", head: ["Outcome", "Meaning"], rows: [
          ["No infection", "Cleared; TST/IGRA negative"],
          ["TB infection", "TST and/or IGRA positive, <b>no symptoms</b>"],
          ["Primary TB disease", "Within 2 years; young children, immunocompromised"],
          ["Reactivation TB disease", "Years later; 5–10% lifetime risk"]
        ]}
      ]
    },
    "4": {
      summary: [
        "<b>Reactivation</b>: apical/posterior upper lobes, <b>insidious</b>: cough &gt;2–3 weeks, weight loss, fever, <b>night sweats</b>, hemoptysis; cavitation.",
        "<b>Primary</b>: fever, chest pain, exam often normal; <b>hilar lymphadenopathy</b>, effusion.",
        "Endobronchial TB: barking cough.",
        "HIV: more extrapulmonary and disseminated TB; <b>IRIS</b> after ART = paradoxical worsening.",
        "Some patients are <b>asymptomatic</b> (incidental X-ray)."
      ],
      visuals: [
        { type: "compare", title: "Primary vs reactivation", cols: [
          { h: "Primary TB", items: ["Within 2 years", "Young children, immunocompromised", "Fever, chest pain; exam often normal", "<b>Hilar nodes</b>, pleural effusion"] },
          { h: "Reactivation TB", tone: "warn", items: ["Years later", "Adults", "Insidious: cough, weight loss, night sweats, hemoptysis", "<b>Apical/posterior upper lobes, cavities</b>"] }
        ]}
      ]
    },
    "5": {
      summary: [
        "Suspect: <b>cough &gt;2–3 weeks + fever, night sweats, weight loss + epidemiologic risk</b>.",
        "Chest X-ray first, then <b>3 sputum samples ≥8 h apart</b> (one early morning) for <b>smear, culture, NAAT</b>. Bronchoscopy/BAL if needed.",
        "Definitive: <b>culture</b>. A positive <b>NAAT</b> in an untreated at-risk patient is sufficient. Xpert MTB/RIF also detects <b>rifampin resistance</b>.",
        "Smear needs ~10,000 bacilli/mL; cannot tell <i>M. tuberculosis</i> from NTM.",
        "<b>IGRA/TST can neither confirm nor exclude active TB</b>.",
        "TB infection: test only people at risk who would benefit; <b>IGRA preferred</b> after BCG. <b>Always exclude TB disease before preventive treatment</b>."
      ],
      visuals: [
        { type: "algo", title: "Suspected pulmonary TB", nodes: [
          { q: "Symptoms + epidemiologic risk", opts: [{ when: "First", to: "Chest X-ray", next: true }] },
          { q: "Imaging suggests TB", opts: [{ when: "Then", to: "3 sputum ≥8 h apart (one early morning): smear + culture + NAAT; airborne isolation now", tone: "warn", next: true }] },
          { q: "Result", opts: [
            { when: "NAAT or culture positive", to: "TB disease; drug susceptibility testing", tone: "good" },
            { when: "Negative, suspicion high", to: "Bronchoscopy with BAL ± biopsy; empiric therapy if high suspicion" }
          ]}
        ]},
        { type: "table", title: "Three tests", head: ["Test", "Strength", "Limit"], rows: [
          ["AFB smear", "Fast; positive = most infectious", "~10,000 bacilli/mL needed; cannot exclude NTM"],
          ["NAAT", "Fast identification; rifampin resistance", "Detects dead bacilli: not for follow-up"],
          ["Culture", "<b>Definitive</b>; species; susceptibility", "Weeks"]
        ]},
        { type: "compare", title: "IGRA vs TST", cols: [
          { h: "IGRA", tone: "accent", items: ["ESAT-6, CFP-10: absent from BCG and most NTM", "Preferred after BCG or if the patient may not return", "One visit"] },
          { h: "TST", items: ["Antigens shared with BCG and NTM", "False positive after BCG", "Needs a reading visit"] },
          { h: "Both", tone: "warn", items: ["Diagnose infection, not disease", "Negative does not exclude active TB"] }
        ]}
      ]
    },
    "6": {
      summary: [
        "<b>2 months HRZE</b> (isoniazid, rifampin, pyrazinamide, ethambutol) then <b>≥4 months HR</b>.",
        "4-month <b>rifapentine-moxifloxacin</b> regimen for selected patients.",
        "<b>DOT</b> and case management to ensure adherence and prevent resistance.",
        "<b>Multiple drugs</b> because a big population (cavity) always contains resistant mutants.",
        "Hepatotoxicity: H, R, Z (Z worst) → stop, then reintroduce stepwise.",
        "HIV: start ART during TB treatment (2–8 weeks); watch IRIS and rifampin interactions. DR-TB: bedaquiline, pretomanid, linezolid, moxifloxacin."
      ],
      visuals: [
        { type: "ranges", title: "Standard regimen (months, to scale)", max: 6, unit: " mo", ticks: [0, 2, 4, 6], rows: [
          { label: "Isoniazid", from: 0, to: 6 },
          { label: "Rifampin", from: 0, to: 6 },
          { label: "Pyrazinamide", from: 0, to: 2, tone: "warn" },
          { label: "Ethambutol", from: 0, to: 2, tone: "warn" }
        ], caption: "Intensive phase 2 months (HRZE), continuation ≥4 months (HR). Extend to 9 months in total if cavitary and culture still positive at 2 months." },
        { type: "table", title: "Side effects to know", head: ["Drug", "Watch for"], rows: [
          ["Isoniazid", "Hepatitis; <b>peripheral neuropathy</b> → pyridoxine"],
          ["Rifampin", "Hepatitis; <b>orange body fluids</b>; <b>enzyme inducer</b> (pill, anticoagulants, ART)"],
          ["Pyrazinamide", "<b>Most hepatotoxic</b>; hyperuricemia, gout"],
          ["Ethambutol", "<b>Optic neuritis</b>: acuity, red-green vision"]
        ]}
      ]
    },
    "7": {
      summary: [
        "DOT throughout; <b>sputum smear and culture monthly</b> until two consecutive negative cultures.",
        "<b>Positive culture after 2 months</b> → non-adherence or resistance; with cavities, extend continuation to 7 months (9 total).",
        "LFTs (baseline and in risk groups); <b>monthly vision checks</b> on ethambutol.",
        "TB is <b>notifiable</b>: contact tracing. End-of-treatment X-ray as baseline."
      ],
      visuals: [
        { type: "timeline", title: "Monitoring", points: [
          { at: "Baseline", h: "LFTs, vision", p: "HIV test" },
          { at: "Monthly", h: "Sputum smear + culture", p: "Until 2 negative cultures; vision on ethambutol" },
          { at: "Month 2", h: "Still culture-positive?", p: "Adherence? Resistance? Extend if cavitary", tone: "warn" },
          { at: "End", h: "Chest X-ray", p: "New baseline" }
        ]}
      ]
    },
    "8": {
      summary: [
        "<b>BCG</b> protects young children from <b>miliary TB and TB meningitis</b>; poor protection against adult lung TB. Not routine in Italy; live → not in immunocompromised.",
        "Preventive treatment after excluding disease: <b>3HP</b> (weekly isoniazid + rifapentine 3 months), <b>4R</b>, <b>3HR</b>; or 6–9 months isoniazid.",
        "Suspected TB in hospital: <b>airborne isolation room</b> (negative pressure), <b>N95/FFP2-3 for staff</b>, <b>surgical mask for the patient</b> outside the room.",
        "Stop isolation when TB is excluded, or after <b>≥2 weeks of effective therapy + clinical response + 3 negative smears</b>."
      ],
      visuals: [
        { type: "compare", title: "Masks", cols: [
          { h: "Staff and visitors", tone: "warn", items: ["N95 / FFP2–FFP3 respirator"] },
          { h: "Patient outside the room", tone: "accent", items: ["Surgical mask"] }
        ]},
        { type: "table", title: "Preventive treatment of TB infection", head: ["Regimen", "What"], rows: [
          ["3HP", "Isoniazid + rifapentine weekly, 3 months"],
          ["4R", "Rifampin daily, 4 months"],
          ["3HR", "Isoniazid + rifampin daily, 3 months"],
          ["6–9H", "Isoniazid alone (alternative)"]
        ]}
      ]
    },
    "extrapulmonary-sites-of-tuberculosis": {
      summary: [
        "Extrapulmonary TB is <b>15–20%</b> of all TB, more in HIV and children.",
        "Most common: <b>lymph nodes</b> (painless, fixed, cervical), then <b>pleura</b>, then <b>bone/joint</b> (vertebral: gibbus)."
      ],
      visuals: [
        { type: "bars", title: "Share of extrapulmonary TB (approximate)", unit: "%", max: 40, rows: [
          { label: "Lymph nodes", v: 38, t: "35–40%" },
          { label: "Pleura", v: 18, t: "15–20%" },
          { label: "Bone / joint", v: 10, t: "≈10%" },
          { label: "Urogenital", v: 8, t: "5–10%" },
          { label: "CNS", v: 5, t: "≈5%" },
          { label: "Abdomen", v: 5, t: "≈5%" },
          { label: "Pericardium", v: 1.5, t: "1–2%" }
        ]},
        { type: "table", title: "High-yield clues", head: ["Site", "Clue"], rows: [
          ["Lymph nodes", "Painless, fixed, cervical, fistula"],
          ["Bone (spine)", "Back pain, gibbus deformity"],
          ["Urogenital", "<b>Sterile pyuria</b>, hematuria"],
          ["CNS", "Cranial nerve palsies, confusion"],
          ["Abdomen", "Ascites, chronic diarrhea"],
          ["Skin", "Lupus vulgaris; erythema nodosum"]
        ]}
      ]
    }
  }
};
