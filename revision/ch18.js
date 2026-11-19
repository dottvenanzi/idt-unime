/* Revision layer for Chapter 18 — Sexually transmitted infections. Source: chapters/18-*.md */
window.REVISION = window.REVISION || {};
window.REVISION[18] = {
  sections: {
    "1": {
      summary: [
        "<b><i>T. pallidum</i></b>: spirochete, <b>cannot be cultured</b>, not seen on Gram stain.",
        "<b><i>N. gonorrhoeae</i></b>: intracellular gram-negative diplococci; great at acquiring <b>resistance</b>.",
        "<b><i>C. trachomatis</i></b>: obligate intracellular; serovars D–K genital, <b>L1–L3 LGV</b>.",
        "<b><i>M. genitalium</i></b>: <b>no cell wall</b> (β-lactams useless), NAAT only, macrolide resistance.",
        "<b><i>T. vaginalis</i></b>: most common curable STI.",
        "HPV: types 6/11 warts; <b>16/18</b> cancers. Mpox: orthopoxvirus (clade IIb 2022)."
      ],
      visuals: [
        { type: "cards", title: "Agents", items: [
          { h: "<i>Treponema pallidum</i>", p: "Spirochete, no culture", tag: "Syphilis" },
          { h: "<i>Neisseria gonorrhoeae</i>", p: "Gram-negative diplococcus", tag: "Resistance", tone: "warn" },
          { h: "<i>Chlamydia trachomatis</i>", p: "Obligate intracellular; L1–L3 = LGV", tag: "Often silent" },
          { h: "<i>Mycoplasma genitalium</i>", p: "No cell wall", tag: "Macrolide resistance", tone: "warn" },
          { h: "<i>Trichomonas vaginalis</i>", p: "Flagellated protozoan", tag: "Most common curable" },
          { h: "HPV", p: "6/11 warts; 16/18 cancer", tag: "Vaccine" },
          { h: "Mpox", p: "Orthopoxvirus", tag: "Vaccine" }
        ]}
      ]
    },
    "2": {
      summary: [
        "WHO 2020: <b>374 million</b> new curable STIs (trichomoniasis &gt; chlamydia &gt; gonorrhea &gt; syphilis).",
        "Syphilis in pregnancy: &gt;390,000 adverse birth outcomes a year.",
        "EU/EEA 2023: gonorrhea ~100,000 (<b>+31%</b>), syphilis 41,051 (<b>+13%</b>), chlamydia &gt;230,000.",
        "Risk: age 15–24, new partners, MSM, sex work, previous STI, HIV or PrEP, chemsex.",
        "<b>Gonococcal resistance</b>: sporadic ceftriaxone-resistant strains."
      ],
      visuals: [
        { type: "bars", title: "New curable STIs worldwide, 2020 (millions)", unit: " M", max: 156, rows: [
          { label: "Trichomoniasis", v: 156 },
          { label: "Chlamydia", v: 129 },
          { label: "Gonorrhea", v: 82, tone: "warn" },
          { label: "Syphilis", v: 7.1, tone: "warn" }
        ]},
        { type: "stats", items: [
          { v: "+31%", l: "gonorrhea in EU/EEA, 2023 vs 2022" },
          { v: "+13%", l: "syphilis in EU/EEA, 2023 vs 2022" },
          { v: "374 M", l: "new curable STIs, 2020" }
        ]}
      ]
    },
    "3": {
      summary: [
        "<i>T. pallidum</i> disseminates within hours; <b>chancre after ~3 weeks</b>; endarteritis.",
        "<b>Neurosyphilis at any stage</b>; vertical transmission highest in early maternal syphilis.",
        "Gonococcus: pili, Opa, <b>antigenic variation</b> → no immunity, reinfection. Intense neutrophil response.",
        "Chlamydia: milder inflammation → <b>silent</b> → tubal scarring (infertility, ectopic).",
        "Both ascend: <b>PID</b>, Fitz-Hugh–Curtis, epididymitis. LGV invades nodes.",
        "HPV: persistence of high-risk types; <b>E6/E7 inactivate p53/Rb</b>.",
        "Any genital ulcer or inflammation <b>raises HIV transmission</b>."
      ],
      visuals: [
        { type: "timeline", title: "Untreated syphilis", points: [
          { at: "~3 weeks", h: "Primary", p: "Chancre, heals in 3–6 weeks" },
          { at: "Weeks–months", h: "Secondary", p: "Rash incl. palms/soles, condylomata lata", tone: "warn" },
          { at: "≤ 12 months", h: "Early latent", p: "Serology only" },
          { at: "&gt; 12 months", h: "Late latent", p: "" },
          { at: "Years–decades", h: "Tertiary", p: "Gummas, aortitis, late neurosyphilis", tone: "warn" }
        ]},
        { type: "note", h: "Neurosyphilis", p: "Can occur at any stage. Early: meningitis, cranial nerve palsies, ocular and otic syphilis. Late: general paresis, tabes dorsalis, Argyll Robertson pupils." }
      ]
    },
    "4": {
      summary: [
        "Syndromes: urethritis, cervicitis, vaginitis, <b>PID</b>, epididymitis, proctitis, genital ulcer.",
        "<b>Painless indurated ulcer = syphilis</b> until proven otherwise; painful multiple = herpes.",
        "<b>Rash on palms and soles</b> → secondary syphilis.",
        "Gonorrhea: purulent discharge in men; <b>rectal and pharyngeal mostly silent</b>; DGI (arthritis-dermatitis).",
        "Chlamydia: mostly silent; LGV: <b>buboes</b>, hemorrhagic <b>proctitis</b> in MSM.",
        "Trichomoniasis: frothy yellow-green discharge, strawberry cervix, pH &gt;4.5.",
        "HPV warts vs <b>condylomata lata</b> (syphilis). Mpox: umbilicated pustules, painful proctitis."
      ],
      visuals: [
        { type: "table", title: "Genital ulcers", head: ["", "Lesion", "Pain", "Nodes"], rows: [
          ["<b>Syphilis</b>", "Single, <b>indurated</b>, clean", "<b>Painless</b>", "Firm, painless"],
          ["<b>Herpes</b>", "Multiple vesicles → shallow ulcers", "<b>Painful</b>", "Tender"],
          ["Chancroid", "Deep, ragged, purulent", "Painful", "Tender, suppurate"],
          ["LGV", "Small, transient", "Painless", "<b>Painful buboes</b>"],
          ["Mpox", "Umbilicated pustules, crusts", "Often painful", "Tender"]
        ], caption: "Clinical picture is unreliable: test every ulcer." },
        { type: "table", title: "Syndromes", head: ["Syndrome", "Causes"], rows: [
          ["Urethritis", "Gonorrhea, chlamydia, <i>M. genitalium</i>, <i>Trichomonas</i>"],
          ["Cervicitis", "Chlamydia, gonorrhea, <i>M. genitalium</i>"],
          ["PID", "Chlamydia, gonorrhea, <i>M. genitalium</i>, anaerobes"],
          ["Proctitis", "Gonorrhea, chlamydia (LGV), syphilis, HSV, mpox"]
        ]}
      ]
    },
    "5": {
      summary: [
        "Test symptomatic people and partners; screen by risk (women &lt;25, MSM every 3–6 months, <b>all pregnancies</b>: syphilis, HIV, HBV).",
        "<b>One STI → test HIV and syphilis</b>.",
        "<b>NAAT</b> for gonorrhea, chlamydia, trichomonas, <i>M. genitalium</i>; <b>every exposed site</b>.",
        "Gram stain of urethral pus: intracellular diplococci. <b>Culture + susceptibility</b> if failure.",
        "Syphilis: <b>treponemal</b> (positive for life) + <b>nontreponemal</b> (RPR/VDRL titer = activity).",
        "LP if neurologic signs; <b>negative CSF-VDRL doesn't exclude</b>. Ocular/otic = neurosyphilis.",
        "PID is a <b>clinical diagnosis</b>: low threshold to treat."
      ],
      visuals: [
        { type: "compare", title: "Syphilis serology", cols: [
          { h: "Treponemal", tone: "accent", items: ["TPPA, TPHA, EIA/CLIA, FTA-ABS", "Early positive", "<b>Positive for life</b>", "Confirms exposure"] },
          { h: "Nontreponemal", tone: "good", items: ["RPR, VDRL", "Quantitative titer", "Falls after treatment", "<b>Monitor response</b>"] }
        ], caption: "False-negative nontreponemal: very early primary, prozone effect." },
        { type: "chips", title: "Who to screen", groups: [
          { h: "", items: ["Sexually active women &lt;25", "MSM (every 3–6 months if high risk / PrEP)", "Every pregnancy", "People with HIV", "Partners", "Any new STI → HIV + syphilis"] }
        ]}
      ]
    },
    "6": {
      summary: [
        "Treat the same day; empiric if symptomatic; abstain ≥7 days; treat partners.",
        "<b>Gonorrhea: ceftriaxone IM</b> (+ doxycycline if chlamydia not excluded). <b>No empiric FQ or tetracyclines</b>.",
        "<b>Chlamydia: doxycycline 7 days</b> (azithromycin in pregnancy). <b>LGV: 21 days</b>.",
        "<b>Syphilis: benzathine penicillin</b>: 1 dose early, 3 weekly doses late; neurosyphilis IV penicillin 10–14 d.",
        "<b>Pregnancy + allergy → desensitize</b>. Azithromycin no longer for syphilis.",
        "Jarisch–Herxheimer within 24 h: <b>not an allergy</b>.",
        "Trichomonas: metronidazole (7 d in women). <i>M. genitalium</i>: <b>resistance-guided</b> (doxy → azithro or moxifloxacin). PID: ceftriaxone + doxy + metronidazole."
      ],
      visuals: [
        { type: "table", title: "Treatment at a glance", head: ["Infection", "Treatment"], rows: [
          ["Gonorrhea", "Ceftriaxone IM single dose"],
          ["Chlamydia", "Doxycycline 7 days"],
          ["LGV", "Doxycycline 21 days"],
          ["Early syphilis", "Benzathine penicillin G × 1"],
          ["Late latent syphilis", "Benzathine penicillin G weekly × 3"],
          ["Neurosyphilis, ocular, otic", "IV aqueous penicillin G 10–14 days"],
          ["Trichomoniasis", "Metronidazole (7 days in women)"],
          ["<i>M. genitalium</i>", "Doxycycline → azithromycin or moxifloxacin by resistance"],
          ["PID", "Ceftriaxone + doxycycline + metronidazole"]
        ]},
        { type: "note", h: "Jarisch–Herxheimer reaction", p: "Fever, headache, myalgia within 24 hours of starting treatment, mostly in early syphilis. Release of treponemal products, not allergy; don't delay treatment, even in pregnancy." }
      ]
    },
    "7": {
      summary: [
        "Gonorrhea: test of cure (pharyngeal in US, all in Europe); retest at <b>3 months</b>. Chlamydia: TOC only in pregnancy.",
        "Don't use NAAT for TOC too early (dead organism DNA).",
        "Syphilis: <b>same RPR/VDRL</b> at 6 and 12 months; adequate = <b>fourfold fall</b>. Fourfold rise = failure/reinfection. Serofast ≠ failure.",
        "Partners: 60 days (gonorrhea, chlamydia); syphilis by stage; treat early-syphilis partners presumptively."
      ],
      visuals: [
        { type: "compare", title: "Syphilis titer after treatment", cols: [
          { h: "Adequate", tone: "good", items: ["Fourfold fall (e.g. 1:32 → 1:8)", "Within 6–12 months (early)"] },
          { h: "Failure / reinfection", tone: "warn", items: ["Sustained fourfold rise", "Persistent signs", "Check HIV, CSF, retreat"] },
          { h: "Serofast", items: ["Stable low titer", "Follow-up, not retreatment"] }
        ]}
      ]
    },
    "8": {
      summary: [
        "<b>HPV vaccine</b> (9-valent) for all adolescents before sexual debut (Italy 11–12 y).",
        "HBV, HAV, <b>mpox</b> (MVA-BN) vaccines; HIV PrEP; condoms.",
        "4CMenB gives only partial cross-protection against gonorrhea.",
        "<b>Doxy-PEP</b>: one dose within 72 h after condomless sex; for <b>MSM and transgender women with a bacterial STI in the past year</b>; cuts chlamydia and syphilis much more than gonorrhea; concern: <b>resistance</b>."
      ],
      visuals: [
        { type: "bars", title: "Doxy-PEP: reduction in PrEP users", unit: "%", max: 100, rows: [
          { label: "Chlamydia", v: 88, tone: "good" },
          { label: "Syphilis", v: 87, tone: "good" },
          { label: "Gonorrhea", v: 55, tone: "warn" }
        ]},
        { type: "table", title: "Vaccines against STIs", head: ["Vaccine", "Who"], rows: [
          ["HPV 9-valent", "Adolescents of all sexes; catch-up for MSM, HIV"],
          ["Hepatitis B", "All unvaccinated at sexual risk"],
          ["Hepatitis A", "MSM, people who use drugs"],
          ["Mpox (MVA-BN)", "Pre-exposure high risk; post-exposure ≤4 days"]
        ]}
      ]
    }
  }
};
