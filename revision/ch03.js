/* Revision layer for Chapter 3 — Infective Endocarditis. Source: chapters/03-infective-endocarditis.md */
window.REVISION = window.REVISION || {};
window.REVISION[3] = {
  sections: {
    "1": {
      summary: [
        "<b>Gram-positive cocci</b> cause 80–90%: staphylococci, streptococci, enterococci.",
        "<b><i>S. aureus</i></b> is now the most common cause: acute, destructive, also on normal valves.",
        "Oral (viridans) streptococci: subacute, usually penicillin-susceptible. <b><i>S. gallolyticus</i> → colonoscopy</b>.",
        "<b><i>E. faecalis</i></b> increasing; resistant to cephalosporins, often high-level aminoglycoside resistance.",
        "<b>CoNS</b>: prosthetic valves and devices. <b>HACEK</b>: fastidious gram-negatives, large vegetations.",
        "Culture-negative IE: <i>Coxiella</i>, <i>Bartonella</i>, <i>Brucella</i>, <i>T. whipplei</i> → serology and PCR."
      ],
      visuals: [
        { type: "cards", title: "Organism → setting clue", items: [
          { h: "<i>S. aureus</i>", p: "Healthcare, PWID, hemodialysis, devices; normal valves too", tag: "Most common, most destructive", tone: "warn" },
          { h: "CoNS", p: "Prosthetic valves (early), devices", tag: "<i>S. lugdunensis</i> acts like <i>S. aureus</i>" },
          { h: "Viridans streptococci", p: "Poor dental hygiene, native valves", tag: "Subacute" },
          { h: "<i>S. gallolyticus</i>", p: "Older patients", tag: "Colonoscopy!", tone: "warn" },
          { h: "<i>E. faecalis</i>", p: "Older, GU or GI source, healthcare", tag: "Not cephalosporins alone" },
          { h: "HACEK", p: "Oral flora gram-negatives", tag: "Large vegetations" },
          { h: "Fungi", p: "Prosthetic valves, lines, PWID, parenteral nutrition", tag: "Big emboli, surgery" },
          { h: "<i>Coxiella</i>, <i>Bartonella</i>, <i>Brucella</i>", p: "Animals, raw dairy, lice, cats", tag: "Culture-negative" }
        ]},
        { type: "compare", title: "\"Typical\" organisms (2023 Duke-ISCVID)", cols: [
          { h: "Typical in all patients", tone: "accent", items: ["<i>S. aureus</i>, <i>S. lugdunensis</i>", "<i>E. faecalis</i>", "All streptococci except <i>S. pneumoniae</i>, <i>S. pyogenes</i>", "<i>Granulicatella</i>, <i>Abiotrophia</i>, <i>Gemella</i>", "HACEK"] },
          { h: "Typical only with intracardiac prosthetic material", items: ["CoNS", "<i>Corynebacterium striatum</i>, <i>jeikeium</i>", "<i>Serratia</i>, <i>P. aeruginosa</i>", "<i>Cutibacterium acnes</i>", "Non-tuberculous mycobacteria, <i>Candida</i>"] }
        ]}
      ]
    },
    "2": {
      summary: [
        "Incidence <b>3–10 / 100,000</b> per year and rising, much higher in older adults; men ≈2×.",
        "In-hospital mortality <b>15–30%</b>; about <b>half</b> need surgery.",
        "<b>Mitral</b> ≈41% and <b>aortic</b> ≈38% most often infected; <b>tricuspid in PWID</b>.",
        "About <b>one quarter</b> healthcare-associated. In low-income countries: <b>rheumatic heart disease</b>.",
        "PVE: <b>early &lt;1 year</b> (perioperative staphylococci) vs <b>late ≥1 year</b> (like native).",
        "Highest risk: <b>previous IE, prosthetic valves, cyanotic congenital heart disease, VADs</b>."
      ],
      visuals: [
        { type: "stats", items: [
          { v: "17.7%", l: "in-hospital mortality (ICE-PCS cohort)" },
          { v: "48%", l: "underwent surgery" },
          { v: "≈ 1/4", l: "healthcare-associated" }
        ]},
        { type: "bars", title: "Valve involved", unit: "%", max: 50, rows: [
          { label: "Mitral", v: 41 }, { label: "Aortic", v: 38 }
        ], caption: "Tricuspid predominates in people who inject drugs." },
        { type: "compare", title: "Predisposing conditions", cols: [
          { h: "Highest risk", tone: "warn", items: ["Previous IE", "Prosthetic valve (surgical or transcatheter), repair material", "Cyanotic or residual congenital heart disease", "Ventricular assist device"] },
          { h: "Intermediate risk", items: ["Rheumatic heart disease", "Degenerative valve disease", "Bicuspid aortic valve", "Pacemaker / ICD", "Hypertrophic cardiomyopathy"] },
          { h: "Host / exposure", items: ["Injection drug use", "Hemodialysis", "Intravascular catheters", "Diabetes, immunosuppression", "Poor dental hygiene"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "Recipe: <b>damaged endothelium + transient bacteremia + bacterial adhesins</b>.",
        "Turbulent flow damages the low-pressure side: <b>atrial side of the mitral</b>, <b>ventricular side of the aortic</b> valve.",
        "Sterile platelet-fibrin vegetation (NBTE) is colonized during <b>transient bacteremia</b>, mostly from daily chewing and brushing.",
        "<i>S. aureus</i> can invade <b>intact endothelium</b>.",
        "Bacteria inside the vegetation are dense, slow-growing and protected → <b>long, bactericidal therapy</b> and often surgery.",
        "Consequences: <b>local destruction, emboli, persistent bacteremia, immune complexes</b>."
      ],
      visuals: [
        { type: "flow", title: "How a vegetation forms", steps: [
          { h: "Endothelial damage", p: "Regurgitant jets, stenoses, prostheses, catheters, injected particles" },
          { h: "Sterile vegetation (NBTE)", p: "Platelets + fibrin" },
          { h: "Transient bacteremia", p: "Mouth (chewing, brushing), skin, gut, urine, devices" },
          { h: "Adhesion", p: "Adhesins bind fibrin, fibronectin, platelets" },
          { h: "Infected vegetation", p: "Dense, slow-growing, biofilm-like, shielded from phagocytes", tone: "warn" }
        ]},
        { type: "grid", title: "Four mechanisms → the clinical picture", items: [
          { h: "Local destruction", p: "Perforation, regurgitation, heart failure; abscess, fistula, AV block" },
          { h: "Embolization", p: "Stroke, splenic/renal infarcts, mycotic aneurysms; lung emboli if right-sided" },
          { h: "Persistent bacteremia", p: "Sepsis, spondylodiscitis, septic arthritis, abscesses" },
          { h: "Immune complexes", p: "Glomerulonephritis, Osler nodes, Roth spots, rheumatoid factor" }
        ]}
      ]
    },
    "4": {
      summary: [
        "<b>Acute</b> (days, septic, <i>S. aureus</i>) vs <b>subacute</b> (weeks–months, weight loss, viridans streptococci).",
        "<b>Fever</b> up to 90%; <b>murmur</b> ≈85% (new regurgitant murmur is the clue).",
        "<b>Heart failure</b> in a third: main surgical indication and main cause of death.",
        "Clinical emboli 20–25%, <b>stroke ≈17%</b>; silent cerebral emboli much more common on MRI.",
        "Right-sided IE (PWID): cough, pleuritic pain, <b>multiple cavitating lung nodules</b>, often no murmur.",
        "Classic peripheral signs are now <b>uncommon</b> but high-yield."
      ],
      visuals: [
        { type: "bars", title: "How often (approximately)", unit: "%", max: 100, rows: [
          { label: "Fever", v: 90 }, { label: "Murmur", v: 85 }, { label: "Heart failure", v: 33, t: "≈ 1/3" }, { label: "Clinical embolic events", v: 22, t: "20–25%" }, { label: "Stroke", v: 17, tone: "warn" }
        ]},
        { type: "table", title: "Peripheral signs", head: ["Sign", "What", "Mechanism"], rows: [
          ["Osler nodes", "<b>Painful</b> nodules on finger and toe pads", "Immunological"],
          ["Janeway lesions", "<b>Painless</b> macules on palms and soles", "Septic micro-emboli"],
          ["Roth spots", "Retinal hemorrhages with pale center", "Immunological"],
          ["Splinter hemorrhages", "Dark streaks under nails", "Micro-emboli (non-specific)"],
          ["Conjunctival petechiae", "Conjunctiva, palate", "Vascular"]
        ], caption: "Memory hook: Osler = Ouch (painful); Janeway = painless." }
      ]
    },
    "5": {
      summary: [
        "Suspect IE: fever + predisposition, fever + new murmur, fever + emboli, <b>typical organism in blood</b>. <b><i>S. aureus</i> bacteremia → always echo</b>.",
        "<b>≥3 blood culture sets before antibiotics</b>; repeat every 24–72 h until negative.",
        "<b>TTE first</b>, then <b>TOE</b> (prosthetic valves, devices, abscess); repeat in 5–7 days if suspicion persists.",
        "Cardiac CT for perivalvular complications; <b>FDG-PET/CT</b> for prosthetic valves and leads.",
        "Culture-negative (5–10%): mostly <b>prior antibiotics</b>; then serology (<i>Coxiella</i> phase I IgG ≥1:800), PCR, valve 16S PCR.",
        "<b>Definite</b>: 2 major, or 1 major + 3 minor, or 5 minor. <b>Possible</b>: 1 major + 1 minor, or 3 minor."
      ],
      visuals: [
        { type: "compare", title: "2023 Duke-ISCVID: major criteria", cols: [
          { h: "Microbiological", tone: "accent", items: ["Typical organism in ≥2 sets", "Non-typical in ≥3 sets", "PCR for <i>Coxiella</i>, <i>Bartonella</i>, <i>T. whipplei</i>", "<i>Coxiella</i> phase I IgG &gt;1:800"] },
          { h: "Imaging", tone: "accent", items: ["Echo or CT: vegetation, perforation, abscess, pseudoaneurysm, fistula", "New regurgitation or prosthetic dehiscence", "FDG-PET/CT activity &gt;3 months after implant"] },
          { h: "Surgical", tone: "accent", items: ["IE seen at heart surgery (new in 2023)"] }
        ]},
        { type: "chips", title: "Minor criteria", groups: [
          { h: "", items: ["Predisposition", "Fever &gt;38 °C", "Vascular phenomena (emboli, Janeway, mycotic aneurysm)", "Immunological phenomena (Osler, Roth, GN)", "Microbiology not meeting major", "PET activity &lt;3 months after implant", "New murmur if no echo"] }
        ]},
        { type: "table", title: "Classification", head: ["Category", "Rule"], rows: [
          ["<b>Definite</b>", "Pathology, or 2 major, or 1 major + 3 minor, or 5 minor"],
          ["<b>Possible</b>", "1 major + 1 minor, or 3 minor"],
          ["<b>Rejected</b>", "Firm alternative diagnosis; or resolution with ≤4 days of antibiotics; or nothing at surgery/autopsy"]
        ]},
        { type: "algo", title: "Imaging pathway", nodes: [
          { q: "Suspected IE", opts: [{ when: "First", to: "TTE", next: true }] },
          { q: "TTE result", opts: [
            { when: "Negative, suspicion persists", to: "TOE; repeat in 5–7 days" },
            { when: "Positive", to: "TOE for complications (except good-quality isolated right-sided)" },
            { when: "Prosthetic valve / device", to: "TOE + cardiac CT + FDG-PET/CT", tone: "accent" }
          ]}
        ]}
      ]
    },
    "6": {
      summary: [
        "<b>Bactericidal, high-dose, IV, prolonged</b>: native 4–6 weeks, prosthetic ≥6 weeks, counted from the first negative blood culture.",
        "Empirical: community NVE / late PVE → <b>ampicillin + ceftriaxone</b> (or + cloxacillin + gentamicin); early PVE / healthcare → <b>vancomycin + gentamicin + rifampicin</b>.",
        "MSSA → <b>flucloxacillin or cefazolin</b>, <b>no gentamicin</b> in native valve IE. MRSA → vancomycin or daptomycin.",
        "<b>Rifampicin only with prosthetic material</b>, started after bacteremia is controlled.",
        "<b><i>E. faecalis</i> → ampicillin + ceftriaxone</b> (synergy, works with HLAR, no nephrotoxicity).",
        "Stable left-sided IE: <b>oral step-down</b> after ≥10 days IV (POET).",
        "Surgery in ≈50%: <b>heart failure</b>, <b>uncontrolled infection</b>, <b>embolic prevention</b>. Device IE → remove the whole system."
      ],
      visuals: [
        { type: "table", title: "Targeted therapy", head: ["Organism", "Drug", "Note"], rows: [
          ["Penicillin-susceptible streptococci", "Penicillin G, amoxicillin or ceftriaxone", "4 wk NVE; 2 wk + gentamicin if uncomplicated"],
          ["MSSA", "Flucloxacillin / cefazolin", "No gentamicin in NVE"],
          ["MRSA", "Vancomycin or daptomycin", ""],
          ["Staphylococcal PVE", "Backbone + rifampicin + gentamicin (2 wk)", "Rifampicin for biofilm"],
          ["<i>E. faecalis</i>", "<b>Ampicillin + ceftriaxone</b>", "6 weeks"],
          ["HACEK", "Ceftriaxone", ""],
          ["Fungi", "L-AmB or echinocandin + <b>surgery</b>", "Then azole suppression"],
          ["<i>C. burnetii</i>", "Doxycycline + hydroxychloroquine", "≥18 months"]
        ]},
        { type: "ladder", title: "Surgery: timing", steps: [
          { h: "Non-urgent (same stay)", p: "Persistent bacteremia, fungi/MDR, staphylococcal PVE" },
          { h: "Urgent (3–5 days)", p: "Heart failure symptoms; abscess, fistula, enlarging vegetation, new AV block; vegetation ≥10 mm + embolism" },
          { h: "Emergency (&lt;24 h)", p: "Refractory pulmonary edema or cardiogenic shock", tone: "warn" }
        ], caption: "Ischemic stroke does not delay indicated surgery; intracranial hemorrhage usually does." },
        { type: "chips", title: "Oral step-down (POET) when", groups: [
          { h: "", items: ["Left-sided IE", "Streptococci, <i>E. faecalis</i>, <i>S. aureus</i>, CoNS", "≥10 days IV", "Stable, bacteremia cleared", "No abscess"] }
        ]}
      ]
    },
    "7": {
      summary: [
        "Blood cultures every 24–72 h until negative; <b>persistent bacteremia</b> → perivalvular extension, metastatic focus, device, resistance.",
        "Monitor fever, CRP, kidney function, <b>drug levels</b>; ECG for <b>new AV block (aortic root abscess)</b>.",
        "Echo at the end of therapy as a new baseline; follow-up at 1, 3, 6, 12 months.",
        "<b>Relapse</b> = same organism, usually &lt;6 months. Recurrence risk 2–6%, higher in PWID, PVE, dialysis.",
        "Blood cultures before any antibiotic for future fevers; dental review; colonoscopy after <i>S. gallolyticus</i>; addiction services."
      ],
      visuals: [
        { type: "compare", title: "Relapse vs reinfection", cols: [
          { h: "Relapse", tone: "warn", items: ["Same organism", "Usually within 6 months", "Inadequate therapy or persistent focus"] },
          { h: "Reinfection", items: ["Different organism or later episode", "Higher risk: PWID, PVE, dialysis, previous IE"] }
        ]}
      ]
    },
    "8": {
      summary: [
        "No vaccine. <b>Oral and dental hygiene</b> is the cornerstone; skin hygiene; aseptic catheter care; decolonize <i>S. aureus</i> before cardiac surgery.",
        "Antibiotic prophylaxis only for <b>high-risk patients</b> + <b>high-risk dental procedures</b> (gingival or periapical manipulation, mucosal perforation).",
        "Drug: <b>amoxicillin or ampicillin</b> single dose 30–60 min before. Allergy: azithromycin, clarithromycin or doxycycline.",
        "<b>Clindamycin no longer recommended</b> (<i>C. difficile</i>).",
        "Not for: anesthetic injection in healthy tissue, superficial caries, X-rays, orthodontic adjustments; respiratory, GI, GU or skin procedures."
      ],
      visuals: [
        { type: "compare", title: "Prophylaxis: who", cols: [
          { h: "High risk: give", tone: "warn", items: ["Previous IE", "Prosthetic valve or repair material", "Cyanotic CHD; repaired CHD (6 months or lifelong if residual)", "Ventricular assist device"] },
          { h: "Intermediate: may consider", items: ["Rheumatic or degenerative valve disease", "Bicuspid aortic valve", "Pacemaker / ICD", "Hypertrophic cardiomyopathy"] }
        ]},
        { type: "compare", title: "Prophylaxis: when", cols: [
          { h: "Yes", tone: "accent", items: ["Extractions", "Scaling", "Root canal", "Anything perforating oral mucosa"] },
          { h: "No", tone: "good", items: ["Anesthesia in healthy tissue", "Superficial caries", "Suture removal, X-rays", "Orthodontic adjustment", "GI, GU, respiratory, skin procedures"] }
        ]}
      ]
    }
  }
};
