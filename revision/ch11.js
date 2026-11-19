/* Revision layer for Chapter 11 — Osteomyelitis, spondylodiscitis and PJI. Source: chapters/11-osteomyelitis-spondylodiscitis.md */
window.REVISION = window.REVISION || {};
window.REVISION[11] = {
  sections: {
    "1": {
      summary: [
        "<b><i>S. aureus</i></b> is the leading cause at every age and site (about half of vertebral infections).",
        "Children &lt;4 years: <b><i>Kingella kingae</i></b> (PCR, blood culture bottles). Sickle cell: <b><i>Salmonella</i></b>.",
        "PWID, catheters: <i>Pseudomonas</i>, <i>Candida</i>. Nail through a shoe: <b><i>P. aeruginosa</i></b>.",
        "Diabetic foot: polymicrobial. Granulomatous spondylodiscitis: <b>TB, <i>Brucella</i></b>.",
        "CoNS and <i>C. acnes</i> are real when in <b>several deep samples</b> near an implant. <i>S. lugdunensis</i> behaves like <i>S. aureus</i>.",
        "PJI: staphylococci &gt;50%; organism depends on <b>timing</b> (early virulent, delayed low-virulence, late hematogenous)."
      ],
      visuals: [
        { type: "table", title: "Organism by setting", head: ["Setting", "Think of"], rows: [
          ["Hematogenous, adult (vertebral)", "<i>S. aureus</i>, streptococci, enterococci, <i>E. coli</i>"],
          ["Hematogenous, child", "<i>S. aureus</i>; <i>K. kingae</i> if &lt;4 y"],
          ["Sickle cell disease", "<i>Salmonella</i>, <i>S. aureus</i>"],
          ["Injection drug use, catheters", "<i>S. aureus</i>, <i>P. aeruginosa</i>, <i>Candida</i>"],
          ["Implants, fixation", "<i>S. aureus</i>, CoNS, <i>C. acnes</i>"],
          ["Puncture through a shoe", "<i>P. aeruginosa</i>"],
          ["Diabetic foot", "Polymicrobial incl. anaerobes"],
          ["Chronic spondylodiscitis", "<i>M. tuberculosis</i>, <i>Brucella</i>"]
        ]},
        { type: "timeline", title: "PJI: timing predicts the organism", points: [
          { at: "&lt; 3 months", h: "Early", p: "Acquired in surgery; <i>S. aureus</i>, gram-negatives", tone: "warn" },
          { at: "3–12 months", h: "Delayed", p: "Low virulence: CoNS, <i>C. acnes</i> (shoulder)" },
          { at: "&gt; 12 months", h: "Late", p: "Hematogenous: <i>S. aureus</i>, streptococci, gram-negatives", tone: "warn" }
        ]}
      ]
    },
    "2": {
      summary: [
        "Incidence about 22/100,000 per year, higher in men, <b>rising with age and diabetes</b>.",
        "Children: long bones. <b>Adults &gt;50: vertebrae</b> (lumbar &gt; thoracic &gt; cervical).",
        "Contiguous focus: open fractures, implants, sternotomy, pressure ulcers. Vascular insufficiency: <b>diabetic foot</b>.",
        "PJI complicates 1–2% of primary hip/knee replacements; <i>S. aureus</i> bacteremia can seed up to a third of prostheses.",
        "Vertebral osteomyelitis risk: <b>endocarditis</b>, UTI, catheters, IDU, diabetes, hemodialysis, spinal procedures."
      ],
      visuals: [
        { type: "stats", items: [
          { v: "22", l: "per 100,000 person-years" },
          { v: "&gt;50 y", l: "age group for vertebral form" },
          { v: "1–2%", l: "primary hip / knee replacements infected" }
        ]},
        { type: "chips", title: "Risk factors for vertebral osteomyelitis", groups: [
          { h: "Bacteremia source", items: ["Endocarditis", "UTI", "Skin infection", "IV catheters", "Injection drug use"] },
          { h: "Host", items: ["Diabetes", "Older age", "Hemodialysis", "Immunosuppression", "Cancer", "Cirrhosis"] },
          { h: "Iatrogenic", items: ["Spinal surgery", "Epidural injections", "Discography"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "Three routes: <b>hematogenous, contiguous focus, contiguous with vascular insufficiency</b>.",
        "Pus raises pressure in rigid bone → ischemia → <b>sequestrum</b> (dead bone with biofilm) + <b>involucrum</b> + sinus tract.",
        "→ <b>Chronic osteomyelitis needs surgery</b>; antibiotics alone rarely cure it.",
        "Children: slow flow in the <b>metaphysis</b>; infants: spread to the joint.",
        "Adults: one segmental artery feeds <b>two adjacent endplates</b> → two vertebrae + the avascular disc.",
        "<b>TB spares the disc</b>, multiple thoracic levels, cold abscess, gibbus.",
        "PJI: few bacteria suffice; <b>young biofilm can be debrided, mature biofilm needs implant removal</b>."
      ],
      visuals: [
        { type: "compare", title: "Three routes", cols: [
          { h: "Hematogenous", tone: "accent", items: ["Bacteremia seeds bone", "Children: long-bone metaphysis", "Adults &gt;50: vertebrae"] },
          { h: "Contiguous focus", items: ["Trauma, surgery, implants", "Open fractures, sternotomy", "Pressure ulcers"] },
          { h: "With vascular insufficiency", tone: "warn", items: ["Diabetic foot", "Peripheral arterial disease"] }
        ]},
        { type: "flow", title: "From acute to chronic", steps: [
          { h: "Adhesion", p: "Bone matrix, implant; survival in osteoblasts" },
          { h: "Inflammation, high pressure", p: "Vessels compressed → ischemic necrosis" },
          { h: "Sequestrum", p: "Dead bone + biofilm, unreachable by antibiotics", tone: "warn" },
          { h: "Involucrum, sinus tract", p: "New bone around it; pus drains to skin" }
        ]},
        { type: "flow", title: "Why two vertebrae and a disc", dir: "row", steps: [
          { h: "Segmental artery", p: "Feeds two adjacent endplates" },
          { h: "Endplate seeding", p: "Subchondral bone" },
          { h: "Disc destroyed", p: "Avascular in adults" },
          { h: "Spread", p: "Epidural, psoas abscess", tone: "warn" }
        ]}
      ]
    },
    "4": {
      summary: [
        "Children: fever, bone pain, <b>limp or refusal to bear weight</b>, pseudoparalysis in infants.",
        "Spondylodiscitis: <b>localized back pain</b>, worse at night; <b>fever often absent</b>; tenderness on percussion.",
        "<b>Neurologic deficit = emergency</b> (epidural abscess). Psoas abscess: hip / groin pain.",
        "Chronic: sinus tract, drainage, non-union, few systemic signs.",
        "Diabetic foot: deep, long-standing ulcer, <b>sausage toe</b>, visible or palpable bone.",
        "PJI: early (wound, fever), delayed (<b>persistent pain</b>, looks like loosening), late (acute in a good joint). <b>Sinus tract = PJI</b>."
      ],
      visuals: [
        { type: "table", title: "Pyogenic vs tuberculous vs brucellar spondylitis", head: ["", "Pyogenic", "Tuberculous", "Brucellar"], rows: [
          ["Onset", "Days–weeks", "<b>Months</b>", "Weeks–months"],
          ["Level", "<b>Lumbar</b>", "<b>Thoracic</b>", "Lumbar (L4–L5)"],
          ["Disc", "Destroyed early", "<b>Spared until late</b>", "Variable"],
          ["Abscess", "Small", "<b>Large, cold</b>", "Uncommon"],
          ["Deformity", "Uncommon", "<b>Gibbus</b>", "Rare"],
          ["Key test", "Blood cultures, biopsy", "Biopsy (histology, culture, NAAT)", "Serology, blood cultures"]
        ]},
        { type: "compare", title: "Prosthetic joint infection", cols: [
          { h: "Early", tone: "warn", items: ["Wound redness, drainage", "Fever, effusion"] },
          { h: "Delayed", items: ["Persistent pain since surgery", "Often no fever", "Mistaken for aseptic loosening"] },
          { h: "Late hematogenous", tone: "warn", items: ["Acute pain, swelling, fever", "In a joint that worked well", "During a bacteremia"] }
        ]}
      ]
    },
    "5": {
      summary: [
        "Suspect spondylodiscitis: <b>back pain + fever, high ESR/CRP, bacteremia or endocarditis</b>.",
        "Blood cultures ×2 and ESR/CRP in all; <i>Brucella</i> serology, TB tests by exposure; <b>echo</b> if endocarditis risk.",
        "<b>MRI with gadolinium</b> = test of choice. X-ray lags ~2 weeks. CT for sequestra and to guide biopsy.",
        "Sample <b>before antibiotics</b> if stable and neurologically intact.",
        "Blood cultures with <i>S. aureus</i>, <i>S. lugdunensis</i> or <i>Brucella</i> + compatible MRI → no biopsy needed. Otherwise <b>image-guided biopsy</b>.",
        "<b>Sinus swabs are unreliable</b>. Diabetic foot: <b>probe-to-bone + ESR + X-ray</b>, then MRI or bone biopsy.",
        "PJI: <b>aspirate the joint</b> (antibiotic-free ~2 weeks); 3–5 operative samples; sonication."
      ],
      visuals: [
        { type: "algo", title: "Getting the pathogen in spondylodiscitis", nodes: [
          { q: "Blood cultures grow <i>S. aureus</i>, <i>S. lugdunensis</i> or <i>Brucella</i>, MRI compatible?", opts: [
            { when: "Yes", to: "No biopsy needed: treat", tone: "good" },
            { when: "No", to: "CT-guided biopsy: culture, histology ± mycobacteria / fungi", next: 1 }
          ]},
          { q: "Biopsy diagnostic?", opts: [
            { when: "Yes", to: "Pathogen-directed therapy", tone: "good" },
            { when: "No", to: "Repeat or open biopsy; consider anaerobes, fungi, TB", tone: "warn" }
          ]}
        ]},
        { type: "table", title: "Imaging", head: ["Test", "Role"], rows: [
          ["Plain X-ray", "Baseline; changes lag ~2 weeks"],
          ["<b>MRI with gadolinium</b>", "<b>Test of choice</b>: marrow edema, disc, abscesses"],
          ["CT", "Sequestra; guides biopsy"],
          ["FDG-PET/CT, leukocyte scan", "MRI not possible, metal hardware"]
        ]},
        { type: "compare", title: "PJI is confirmed by any of", cols: [
          { h: "Clinical", tone: "warn", items: ["Sinus tract to the prosthesis", "Prosthesis visible"] },
          { h: "Synovial fluid", items: ["Leukocytes &gt;3,000/µL", "Neutrophils &gt;80%", "Positive alpha-defensin"] },
          { h: "Microbiology / histology", tone: "accent", items: ["Same organism in ≥2 samples", "Positive sonication", "Neutrophils or organisms on histology"] }
        ]}
      ]
    },
    "6": {
      summary: [
        "<b>Microbiology first</b>; empiric therapy at once only in sepsis or neurologic compromise (cover staphylococci incl. MRSA + gram-negatives).",
        "Surgery: remove dead bone and foreign bodies, drain, stabilize. Duration in <b>weeks</b>.",
        "<b>Early oral switch</b> with well-absorbed drugs is non-inferior to IV.",
        "Vertebral: <b>6 weeks</b> (≥8 if MRSA, undrained abscess, ESRD). Surgery for neurologic deficit, instability, failure.",
        "Children: short IV then oral, <b>3–4 weeks</b> total.",
        "Diabetic foot: ~6 weeks if no resection; ~3 weeks if positive bone margin.",
        "PJI: <b>DAIR</b> if early / acute with stable implant; otherwise one- or two-stage exchange. <b>Rifampicin</b> (staphylococci, never alone), <b>fluoroquinolones</b> (gram-negatives); <b>~12 weeks</b>."
      ],
      visuals: [
        { type: "table", title: "Pathogen-directed therapy", head: ["Pathogen", "Example classes"], rows: [
          ["MSSA", "Cefazolin, flucloxacillin"],
          ["MRSA", "Vancomycin, daptomycin; oral linezolid, TMP-SMX"],
          ["Streptococci", "Penicillin, ceftriaxone"],
          ["Gram-negative bacilli", "β-lactam; oral fluoroquinolone"],
          ["Staphylococci on an implant", "<b>+ rifampicin</b> (biofilm; never alone)"]
        ]},
        { type: "ranges", title: "Duration of antibiotic therapy (weeks)", max: 12, unit: " wk", ticks: [0, 3, 6, 8, 12], rows: [
          { label: "Diabetic foot, positive bone margin", from: 3, to: 3, txt: "~3 wk" },
          { label: "Children, uncomplicated", from: 3, to: 4, tone: "good", txt: "3–4 wk" },
          { label: "Vertebral osteomyelitis", from: 6, to: 6, txt: "6 wk" },
          { label: "Diabetic foot, no resection", from: 6, to: 6, txt: "~6 wk" },
          { label: "Vertebral, high risk (MRSA, abscess, ESRD)", from: 8, to: 12, tone: "warn", txt: "≥8 wk" },
          { label: "PJI after DAIR / one-stage", from: 12, to: 12, tone: "warn", txt: "~12 wk" }
        ]},
        { type: "algo", title: "PJI: which operation?", nodes: [
          { q: "Early (&lt;30 d) or acute hematogenous (&lt;3 wk symptoms), stable implant, no sinus, susceptible organism?", opts: [
            { when: "Yes", to: "DAIR (debridement, antibiotics, implant retention)", tone: "good" },
            { when: "No", to: "Chronic PJI: implant exchange", next: 1 }
          ]},
          { q: "Known susceptible organism, good soft tissue, no sinus?", opts: [
            { when: "Yes", to: "One-stage exchange" },
            { when: "No", to: "Two-stage exchange with spacer", tone: "warn" }
          ]}
        ], caption: "No surgery possible: lifelong suppressive antibiotics." }
      ]
    },
    "7": {
      summary: [
        "Clinical assessment is the main tool; <b>CRP every few weeks</b>.",
        "<b>No routine repeat MRI</b> if improving: images lag behind.",
        "Failure: pain, drainage, rising CRP, new neurologic signs → MRI, rebiopsy, rethink (TB, <i>Brucella</i>, retained implant).",
        "Follow for <b>≥1 year</b> (PJI ≥2 years). Diabetic foot: \"remission\", ≥6 months."
      ],
      visuals: [
        { type: "compare", title: "Response or failure?", cols: [
          { h: "Responding", tone: "good", items: ["Less pain, better function", "Falling CRP", "MRI may look worse: ignore"] },
          { h: "Failing", tone: "warn", items: ["Persistent or worse pain", "Drainage", "Rising CRP", "New neurologic signs"] }
        ]}
      ]
    },
    "8": {
      summary: [
        "No vaccine; Hib and pneumococcal conjugate vaccines made these rare in children.",
        "Treat <i>S. aureus</i> bacteremia properly; catheter care; harm reduction.",
        "Open fractures: early antibiotics + debridement.",
        "PJI: <b>cefazolin within 60 min before incision</b>, not prolonged; <b><i>S. aureus</i> decolonization</b>; optimize glucose, weight, smoking.",
        "Diabetic foot: daily inspection, footwear, early ulcer care."
      ],
      visuals: [
        { type: "compare", title: "Prevention", cols: [
          { h: "Hematogenous", items: ["Manage <i>S. aureus</i> bacteremia", "Catheter care", "Harm reduction"] },
          { h: "Surgery / implants", tone: "accent", items: ["Cefazolin ≤60 min before incision", "Don't prolong prophylaxis", "Decolonize <i>S. aureus</i> carriers", "Optimize the patient"] },
          { h: "Diabetic foot", tone: "good", items: ["Daily foot inspection", "Footwear", "Early ulcer care", "Glycemic control"] }
        ]}
      ]
    }
  }
};
