/* Revision layer for Chapter 0 — Principles of Antibiotic Therapy. Source: chapters/00-antibiotic-therapy-principles.md */
window.REVISION = window.REVISION || {};
window.REVISION[0] = {
  sections: {
    "1": {
      summary: [
        "Every prescription answers the same questions: <b>infection? bacterial? where? which pathogens? how sick? MDR risk? host factors? source control? which drug, how, for how long?</b>",
        "<b>Empirical</b> therapy starts before the pathogen is known; <b>targeted</b> therapy follows identification and susceptibility; <b>definitive</b> therapy is the narrowest, ideally oral, regimen.",
        "<b>Cultures before the first dose</b>: at least <b>two sets of blood cultures</b> plus samples from the site. One dose can sterilize blood and CSF within hours.",
        "In <b>septic shock</b> or <b>meningitis</b>, cultures must <b>never delay</b> the antibiotic.",
        "<b>Diagnostic stewardship</b>: do not culture patients without symptoms (e.g. urine of asymptomatic patients)."
      ],
      visuals: [
        { type: "flow", title: "The nine questions, in order", steps: [
          { h: "1 · Is it an infection, and is it bacterial?", p: "Fever and CRP are not specific; viral infections need no antibiotic" },
          { h: "2–3 · Where is it, and which pathogens are likely?", p: "Site + setting + host + exposures" },
          { h: "4 · How sick is the patient?", p: "Severity decides how fast and how broad" },
          { h: "5–6 · Resistance risk? Host factors?", p: "MDR colonization, recent antibiotics; allergy, kidney, liver, pregnancy" },
          { h: "7 · Is source control needed?", p: "Drain, remove, debride", tone: "warn" },
          { h: "8 · Which drug, exposure and route?", p: "Spectrum, PK/PD, penetration, bioavailability" },
          { h: "9 · When do I reassess and stop?", p: "48–72 h: de-escalate, switch to oral, set the duration", tone: "good" }
        ]},
        { type: "timeline", title: "The life of a prescription", points: [
          { at: "Before dose 1", h: "Cultures", p: "2 blood culture sets + site sample" },
          { at: "Day 0", h: "Empirical", p: "Site, setting, severity, MDR risk" },
          { at: "48 – 72 h", h: "Targeted", p: "Pathogen + susceptibility known" },
          { at: "Stop date", h: "Definitive", p: "Narrowest, least toxic, oral if possible", tone: "good" }
        ]}
      ]
    },
    "2": {
      summary: [
        "Targets: <b>cell wall</b> (β-lactams, glycopeptides, fosfomycin), <b>membrane</b> (daptomycin, polymyxins), <b>30S</b> (aminoglycosides, tetracyclines), <b>50S</b> (macrolides, clindamycin, linezolid), <b>nucleic acids</b> (fluoroquinolones, rifamycins, metronidazole), <b>folate</b> (TMP-SMX).",
        "Bactericidal vs bacteriostatic matters mainly where defenses are weak: <b>endocarditis, meningitis, febrile neutropenia</b>.",
        "Learn the <b>holes</b> of each class: they explain most treatment failures.",
        "<b>Intrinsic resistance</b> (EUCAST expected phenotypes) is reported as R without testing.",
        "EUCAST <b>\"I\" = susceptible, increased exposure</b>, not \"intermediate\". Compare each MIC with <b>its own breakpoint</b>.",
        "WHO <b>AWaRe</b>: Access, Watch, Reserve. Target: ≥70% of use from Access by 2030."
      ],
      visuals: [
        { type: "compare", title: "Where each class acts", cols: [
          { h: "Cell wall", tone: "accent", items: ["β-lactams → PBPs", "Glycopeptides → D-Ala-D-Ala", "Fosfomycin → MurA"] },
          { h: "Membrane", items: ["Daptomycin (gram +)", "Polymyxins (gram −)"] },
          { h: "Ribosome", items: ["30S: aminoglycosides, tetracyclines, tigecycline", "50S: macrolides, clindamycin, linezolid"] },
          { h: "DNA / RNA / folate", items: ["Fluoroquinolones (gyrase, topo IV)", "Rifampicin (RNA polymerase)", "Metronidazole (anaerobes)", "TMP-SMX (folate)"] }
        ]},
        { type: "cards", title: "High-yield spectrum holes", items: [
          { h: "Cephalosporins", p: "No <i>Enterococcus</i>, no <i>Listeria</i>", tag: "Add ampicillin in meningitis", tone: "warn" },
          { h: "β-lactams", p: "No atypical or intracellular pathogens (<i>Legionella</i>, <i>Mycoplasma</i>, <i>Brucella</i>, <i>Rickettsia</i>)", tag: "Use macrolide, tetracycline, FQ" },
          { h: "Ertapenem", p: "No <i>Pseudomonas</i>, <i>Acinetobacter</i>, enterococci", tag: "Not for HAP" },
          { h: "Daptomycin", p: "Inactivated by surfactant", tag: "Never for pneumonia", tone: "warn" },
          { h: "Tigecycline", p: "No <i>Pseudomonas</i>, <i>Proteus</i>, <i>Providencia</i>; low serum levels", tag: "Avoid in bacteremia" },
          { h: "Oral nitrofurantoin, fosfomycin", p: "No tissue or blood levels", tag: "Cystitis only" },
          { h: "Carbapenems", p: "No MRSA, <i>E. faecium</i>, <i>Stenotrophomonas</i>", tag: "Not \"cover everything\"" },
          { h: "Aztreonam", p: "Gram-negatives only; stable to MBL", tag: "No gram +, no anaerobes" },
          { h: "Rifampicin", p: "Biofilm, mycobacteria", tag: "Never alone", tone: "warn" }
        ]},
        { type: "table", title: "Classic intrinsic resistance", head: ["Organism", "Always resistant to"], rows: [
          ["<i>Klebsiella pneumoniae</i>", "Ampicillin, amoxicillin"],
          ["<i>Enterobacter cloacae</i>, <i>K. aerogenes</i>, <i>C. freundii</i>", "Aminopenicillins ± clavulanate, 1st/2nd-gen cephalosporins (inducible AmpC)"],
          ["<i>Proteus mirabilis</i>", "Colistin, nitrofurantoin, tigecycline"],
          ["<i>Pseudomonas aeruginosa</i>", "Ceftriaxone, ertapenem, tigecycline, TMP-SMX"],
          ["<i>Stenotrophomonas</i>", "Carbapenems"],
          ["<i>Enterococcus</i>", "All cephalosporins"],
          ["Anaerobes", "Aminoglycosides"],
          ["<i>Mycoplasma</i>, <i>Chlamydia</i>", "All β-lactams"]
        ]},
        { type: "compare", title: "Reading a EUCAST antibiogram", cols: [
          { h: "S", tag: "Standard dose", tone: "good", items: ["High likelihood of success with standard dosing"] },
          { h: "I", tag: "Increased exposure", tone: "accent", items: ["Still susceptible: higher dose, prolonged infusion or concentration at the site", "NOT \"intermediate\""] },
          { h: "R", tag: "Resistant", tone: "warn", items: ["Failure likely even with increased exposure"] }
        ]},
        { type: "compare", title: "WHO AWaRe", cols: [
          { h: "Access", tone: "good", items: ["First/second choice for common infections", "Amoxicillin (± clavulanate), cefazolin, doxycycline, nitrofurantoin, TMP-SMX"] },
          { h: "Watch", tone: "accent", items: ["Higher resistance potential: stewardship targets", "Ceftriaxone, fluoroquinolones, macrolides, piperacillin-tazobactam, carbapenems, vancomycin"] },
          { h: "Reserve", tone: "warn", items: ["Last resort for MDR", "Colistin, ceftazidime-avibactam, cefiderocol, linezolid, tigecycline"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "The <b>site</b> predicts the pathogens and decides which drugs reach adequate levels.",
        "A drug active <i>in vitro</i> fails if it does not reach the site: <b>CSF, lung, urine, prostate, bone, intracellular, biofilm, abscess</b> each have their winners and losers.",
        "Excellent oral bioavailability (≥90%): <b>fluoroquinolones, linezolid, TMP-SMX, metronidazole, doxycycline, clindamycin, rifampicin</b> → early oral switch is easy.",
        "<b>Not absorbed</b>: oral vancomycin, fidaxomicin, aminoglycosides, colistin (gut lumen only)."
      ],
      visuals: [
        { type: "table", title: "Most likely pathogens by site", head: ["Site", "Think of"], rows: [
          ["CAP", "<i>S. pneumoniae</i>, <i>H. influenzae</i>, atypicals, viruses"],
          ["HAP / VAP", "<i>P. aeruginosa</i>, Enterobacterales, <i>S. aureus</i>, <i>A. baumannii</i>"],
          ["Meningitis", "<i>S. pneumoniae</i>, <i>N. meningitidis</i>; + <i>Listeria</i> if &gt;50 y, pregnant, immunosuppressed"],
          ["Cystitis / pyelonephritis", "<i>E. coli</i> (most), <i>Klebsiella</i>, <i>Proteus</i>"],
          ["Intra-abdominal", "Polymicrobial: Enterobacterales + anaerobes (<i>B. fragilis</i>)"],
          ["Cellulitis", "β-hemolytic streptococci"],
          ["Abscess", "<i>S. aureus</i> (incl. CA-MRSA)"],
          ["Native valve endocarditis", "<i>S. aureus</i>, viridans streptococci, enterococci"],
          ["Catheter bloodstream infection", "CoNS, <i>S. aureus</i>, <i>Candida</i>"],
          ["Urethritis", "<i>N. gonorrhoeae</i>, <i>C. trachomatis</i>"]
        ]},
        { type: "compare", title: "Tissue penetration: winners and losers", cols: [
          { h: "CSF", items: ["Good: ceftriaxone, cefepime, meropenem, ampicillin, TMP-SMX, linezolid, metronidazole", "Poor: cefazolin, aminoglycosides, clindamycin, daptomycin"] },
          { h: "Lung", items: ["Good: FQ, macrolides, linezolid, β-lactams", "Poor: <b>daptomycin</b>, aminoglycosides"] },
          { h: "Urine / prostate", items: ["Prostate: FQ, TMP-SMX", "Low urine levels: moxifloxacin, tigecycline, echinocandins"] },
          { h: "Intracellular", items: ["Good: macrolides, tetracyclines, FQ, rifampicin", "Poor: β-lactams, aminoglycosides"] },
          { h: "Abscess / biofilm", tone: "warn", items: ["Drainage or device removal is the main treatment", "Aminoglycosides inactive in acidic pus", "Rifampicin for staphylococcal biofilm, always with a partner"] }
        ]},
        { type: "compare", title: "Oral bioavailability", cols: [
          { h: "Excellent ≥90%", tone: "good", items: ["Fluoroquinolones, linezolid, TMP-SMX", "Metronidazole, doxycycline, clindamycin, rifampicin", "Oral ≈ IV levels"] },
          { h: "Good to moderate", items: ["Amoxicillin ± clavulanate", "Cephalexin, cefadroxil"] },
          { h: "Low", items: ["Cefuroxime axetil, cefixime, cefpodoxime", "Oral fosfomycin"] },
          { h: "Not absorbed", tone: "accent", items: ["Oral vancomycin, fidaxomicin", "Aminoglycosides, colistin", "Gut lumen only (<i>C. difficile</i>)"] }
        ]}
      ]
    },
    "4": {
      summary: [
        "<b>Severity decides timing and breadth</b>: septic shock or probable sepsis → broad therapy <b>within 1 hour</b>; possible sepsis without shock → assess rapidly, antibiotics within 3 h if still suspected.",
        "Stable, localized infection → there is <b>time</b> to sample and choose a narrow drug.",
        "Host factors: age, immunosuppression, <b>antibiotics in the last 90 days</b> (choose another class), kidney and liver function, pregnancy, allergy, QT, interactions, devices.",
        "<b>Never reduce the loading dose</b> for renal impairment.",
        "A penicillin allergy label is <b>usually wrong</b> (&gt;90% not allergic); carbapenem cross-reactivity &lt;1%.",
        "<b>Source control</b> (ideally within 6 h in sepsis): antibiotics cannot sterilize an undrained abscess.",
        "Combination therapy: broaden empirical cover, synergy, prevent resistance, suppress toxins, polymicrobial, biofilm. Not better for definitive therapy of susceptible gram-negatives."
      ],
      visuals: [
        { type: "ladder", title: "Severity sets the clock", steps: [
          { h: "Mild, likely viral", p: "No antibiotic, or delayed prescription" },
          { h: "Stable, localized", p: "Time to confirm, sample, choose narrow; sometimes wait for cultures" },
          { h: "Possible sepsis, no shock", p: "Rapid assessment; antibiotics within 3 h if infection still suspected" },
          { h: "Septic shock / probable sepsis, neutropenia, meningitis", p: "Broad empirical therapy immediately, ideally within 1 h", tone: "warn" }
        ]},
        { type: "compare", title: "Pregnancy", cols: [
          { h: "Safe", tone: "good", items: ["Penicillins", "Cephalosporins", "Azithromycin", "Nitrofurantoin (not near term)", "Fosfomycin"] },
          { h: "Avoid", tone: "warn", items: ["Tetracyclines (teeth, bone)", "Aminoglycosides (fetal ototoxicity)", "Fluoroquinolones", "TMP-SMX: 1st trimester and near term"] }
        ]},
        { type: "table", title: "Why combine two drugs", head: ["Reason", "Example"], rows: [
          ["Broaden empirical cover", "β-lactam + aminoglycoside or anti-MRSA agent until cultures return"],
          ["Synergy", "<i>E. faecalis</i> endocarditis: ampicillin + ceftriaxone"],
          ["Prevent resistance", "TB, rifampicin, HIV"],
          ["Suppress toxins", "Clindamycin + β-lactam in necrotizing fasciitis, toxic shock"],
          ["Polymicrobial", "Ceftriaxone + metronidazole (intra-abdominal)"],
          ["Biofilm", "Rifampicin combinations in prosthetic infection"]
        ]}
      ]
    },
    "5": {
      summary: [
        "<b>MDR</b> = non-susceptible to ≥1 agent in ≥3 categories; <b>XDR</b> = all but ≤2; <b>PDR</b> = all; <b>DTR</b> = resistant to all first-line β-lactams and fluoroquinolones.",
        "Strongest predictor of an MDR infection: <b>previous colonization or infection with that organism</b>. Also antibiotics in the last 90 days, healthcare contact, devices, local prevalence.",
        "<b>Italy</b>: among the highest EU rates of carbapenem-resistant <i>K. pneumoniae</i> and <i>A. baumannii</i>.",
        "ESBL bacteremia → <b>carbapenem</b> (piperacillin-tazobactam not preferred).",
        "AmpC producers (<i>E. cloacae</i>, <i>K. aerogenes</i>, <i>C. freundii</i>) → <b>cefepime</b> or carbapenem; avoid ceftriaxone in serious infection.",
        "Carbapenemase class decides the drug: <b>KPC / OXA-48 vs MBL</b>."
      ],
      visuals: [
        { type: "table", title: "Gram-negative resistance: mechanism → drug", head: ["Mechanism", "Typical bug", "Still works"], rows: [
          ["ESBL (CTX-M)", "<i>E. coli</i>, <i>K. pneumoniae</i>", "Carbapenems"],
          ["Inducible AmpC", "<i>E. cloacae</i>, <i>K. aerogenes</i>, <i>C. freundii</i>", "Cefepime, carbapenems"],
          ["KPC", "<i>K. pneumoniae</i> (endemic in Italy)", "Ceftazidime-avibactam, meropenem-vaborbactam, imipenem-relebactam, cefiderocol"],
          ["OXA-48-like", "<i>K. pneumoniae</i>, <i>E. coli</i>", "Ceftazidime-avibactam, cefiderocol"],
          ["MBL (NDM, VIM, IMP)", "Enterobacterales, <i>P. aeruginosa</i>", "Ceftazidime-avibactam + aztreonam, aztreonam-avibactam, cefiderocol"],
          ["Porin loss, efflux", "<i>P. aeruginosa</i> (DTR)", "Ceftolozane-tazobactam and other new agents by susceptibility"],
          ["OXA-23/24/58", "<i>A. baumannii</i> (CRAB)", "Sulbactam-based therapy, colistin, cefiderocol"]
        ], caption: "Gram-positives: MRSA = <i>mecA</i> → PBP2a; VRE = <i>vanA/vanB</i> → D-Ala-D-Lac." },
        { type: "algo", title: "Carbapenem-resistant Enterobacterales: which carbapenemase?", nodes: [
          { q: "Rapid test for the carbapenemase class", opts: [
            { when: "KPC", to: "Meropenem-vaborbactam or ceftazidime-avibactam" },
            { when: "OXA-48-like", to: "Ceftazidime-avibactam" },
            { when: "MBL (NDM, VIM)", to: "Ceftazidime-avibactam + aztreonam, aztreonam-avibactam, or cefiderocol", tone: "warn" }
          ]}
        ], caption: "Avibactam does not inhibit MBL; aztreonam is stable to MBL. Reserve agents with ID advice." },
        { type: "chips", title: "Risk factors for MDR organisms", groups: [
          { h: "All", items: ["Known colonization/infection", "Antibiotics in last 90 days", "Healthcare contact", "Invasive devices", "Local prevalence"] },
          { h: "ESBL", items: ["Travel to South Asia, Middle East, North Africa", "Long-term care", "Recurrent UTI"] },
          { h: "CRE / CRAB", items: ["ICU, ventilation", "Prior carbapenems", "Burns, trauma", "Transfer from endemic areas"] },
          { h: "MRSA", items: ["Hemodialysis", "Injection drug use", "Necrotizing pneumonia after influenza"] }
        ]}
      ]
    },
    "6": {
      summary: [
        "<b>PK</b>: what the body does to the drug. <b>PD</b>: what the drug does to the bacterium, relative to the <b>MIC</b>.",
        "Only the <b>free fraction</b> is active. Hydrophilic drugs (β-lactams, aminoglycosides, glycopeptides) stay extracellular and are renally cleared; lipophilic drugs enter cells.",
        "<b>β-lactams: time-dependent</b> (%fT&gt;MIC) → frequent doses, <b>prolonged infusion</b>.",
        "<b>Aminoglycosides, fluoroquinolones: concentration-dependent</b> (Cmax/MIC, AUC/MIC) → high dose once daily.",
        "<b>Vancomycin: AUC/MIC</b> 400–600 → AUC-guided TDM.",
        "In sepsis: <b>↑ volume of distribution</b> and <b>augmented renal clearance</b> → underdosing. Give a full loading dose."
      ],
      visuals: [
        { type: "pkpd" },
        { type: "table", title: "PK/PD index → dosing strategy", head: ["Index", "Drugs", "Strategy"], rows: [
          ["%fT&gt;MIC", "β-lactams", "Frequent doses, extended or continuous infusion; ICU target 100% fT&gt;MIC"],
          ["Cmax/MIC, AUC/MIC", "Aminoglycosides, fluoroquinolones", "High dose, once daily; long interval reduces nephrotoxicity"],
          ["AUC<sub>24</sub>/MIC", "Vancomycin, linezolid, tigecycline, colistin", "Optimize total daily exposure; vancomycin AUC 400–600"]
        ]},
        { type: "compare", title: "The critically ill patient", cols: [
          { h: "↑ Volume of distribution", tone: "warn", items: ["Capillary leak, fluids, edema, ECMO", "Low levels of hydrophilic drugs", "Full loading dose regardless of kidney function"] },
          { h: "Augmented renal clearance", tone: "warn", items: ["CrCl &gt;130 mL/min", "Young, trauma, burns, sepsis", "Sub-therapeutic β-lactam and vancomycin"] },
          { h: "AKI / CRRT", items: ["Accumulation or underdosing"] },
          { h: "Hypoalbuminemia", items: ["Faster clearance of ceftriaxone, ertapenem, teicoplanin"] }
        ]},
        { type: "table", title: "Therapeutic drug monitoring", head: ["Drug", "Why", "Measure"], rows: [
          ["Aminoglycosides", "Nephro- and ototoxicity", "Peak (efficacy) + trough (toxicity)"],
          ["Vancomycin", "Nephrotoxicity rises with exposure", "AUC-guided (Bayesian), not trough-only"],
          ["β-lactams (ICU)", "High PK variability", "fT&gt;MIC"],
          ["Linezolid, voriconazole", "Toxicity, variable PK", "Trough"]
        ]}
      ]
    },
    "7": {
      summary: [
        "<b>Antibiotic time-out at 48–72 h</b>: confirm the diagnosis, target the pathogen, de-escalate, switch to oral, set a stop date, check source control.",
        "<b>De-escalation is safe</b>: no increase in mortality.",
        "<b>IV → oral</b> when improving, afebrile, stable, gut working and a bioavailable active drug exists.",
        "<b>Shorter is usually better</b>: each extra day adds adverse events.",
        "Long courses are still needed for <b>endocarditis, <i>S. aureus</i> bacteremia, bone and joint, prosthetic infection, TB, brucellosis</b>, undrained abscesses.",
        "<b>Procalcitonin</b> helps to <b>stop</b> antibiotics, not to decide to start them in suspected sepsis.",
        "Collateral damage: adverse events in ~20% of inpatients on antibiotics, <i>C. difficile</i>, selection of resistance, <i>Candida</i>."
      ],
      visuals: [
        { type: "flow", title: "The 48–72 h time-out", steps: [
          { h: "Bacterial infection confirmed?", p: "If not → stop", tone: "warn" },
          { h: "Pathogen found?", p: "Switch to targeted therapy" },
          { h: "Narrow the spectrum or drop a drug?", p: "e.g. meropenem → ceftriaxone; stop vancomycin if no MRSA" },
          { h: "Oral switch possible?", p: "" },
          { h: "Stop date written in the chart?", p: "", tone: "good" },
          { h: "Not improving?", p: "Undrained focus, resistant pathogen, non-infectious cause, drug fever" }
        ]},
        { type: "ranges", title: "Evidence-based durations (days, to scale)", max: 42, ticks: [0, 7, 14, 21, 28, 35, 42], rows: [
          { label: "Uncomplicated cystitis", from: 1, to: 5 },
          { label: "Complicated intra-abdominal (source controlled)", from: 4, to: 4 },
          { label: "CAP", from: 5, to: 5, note: "at least" },
          { label: "Cellulitis", from: 5, to: 6 },
          { label: "Pyelonephritis / cUTI", from: 5, to: 7 },
          { label: "HAP / VAP", from: 7, to: 7 },
          { label: "Gram-negative bacteremia (uncomplicated)", from: 7, to: 7 },
          { label: "<i>S. aureus</i> bacteremia, uncomplicated", from: 14, to: 14, tone: "warn", note: "≥" },
          { label: "Infective endocarditis", from: 28, to: 42, tone: "warn" },
          { label: "Vertebral osteomyelitis", from: 42, to: 42, tone: "warn" }
        ]},
        { type: "chips", title: "Stewardship toolbox", groups: [
          { h: "", items: ["Prospective audit and feedback", "Preauthorization of restricted drugs", "Local guidelines from the local antibiogram", "Rapid diagnostics", "IV-to-oral and stop-date prompts", "Allergy delabeling", "Education", "Infection prevention and control"] }
        ]}
      ]
    }
  }
};
