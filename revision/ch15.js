/* Revision layer for Chapter 15 — Herpesviruses. Source: chapters/15-*.md */
window.REVISION = window.REVISION || {};
window.REVISION[15] = {
  sections: {
    "1": {
      summary: [
        "Eight human herpesviruses: enveloped <b>dsDNA</b>, all establish <b>lifelong latency</b> and can reactivate.",
        "Envelope = fragile: spread needs <b>close contact</b> (VZV also airborne).",
        "<b>Alpha</b> (HSV-1, HSV-2, VZV): latent in <b>sensory ganglia</b>, vesicles.",
        "<b>Beta</b> (CMV, HHV-6, HHV-7): latent in myeloid / lymphoid cells; CMV gives <b>\"owl's eye\" inclusions</b>.",
        "<b>Gamma</b> (EBV, HHV-8): latent in <b>B cells</b>, <b>oncogenic</b>.",
        "Most antivirals target the <b>viral DNA polymerase</b> (not letermovir, maribavir)."
      ],
      visuals: [
        { type: "compare", title: "Three subfamilies", cols: [
          { h: "Alpha", tone: "accent", items: ["HSV-1, HSV-2, VZV", "Latency: sensory ganglia", "Fast, cytolytic", "Vesicles"] },
          { h: "Beta", items: ["CMV, HHV-6, HHV-7", "Latency: monocytes, lymphocytes", "Slow, cytomegaly", "Transplant, fetus"] },
          { h: "Gamma", tone: "warn", items: ["EBV, HHV-8", "Latency: B cells", "Lymphoproliferation", "Oncogenic"] }
        ]}
      ]
    },
    "2": {
      summary: [
        "HSV-1: ~2/3 of people &lt;50; growing share of <b>genital</b> first episodes. HSV-2: sexual, mostly during <b>asymptomatic shedding</b>; triples HIV risk.",
        "VZV: airborne; zoster lifetime risk <b>~1 in 3</b>, rising with age.",
        "EBV: saliva, ~90% of adults. CMV: saliva, <b>children's urine</b>, breast milk, transplacental, transplant; congenital in ~0.6% of births.",
        "HHV-8: intermediate prevalence in the <b>Mediterranean</b> (Italy).",
        "At risk: neonates, pregnancy, <b>impaired cell-mediated immunity</b>.",
        "CMV transplant risk: <b>SOT D+/R−</b>; <b>HSCT R+</b>."
      ],
      visuals: [
        { type: "bars", title: "Adults infected (approx.)", unit: "%", max: 100, rows: [
          { label: "EBV", v: 90, t: "~90%" },
          { label: "HSV-1 (&lt;50 y)", v: 67, t: "~2/3" },
          { label: "Zoster lifetime risk", v: 33, t: "~1 in 3" },
          { label: "HSV-2 (15–49 y)", v: 13, t: "~13%" }
        ]},
        { type: "compare", title: "CMV risk after transplant", cols: [
          { h: "Solid organ (SOT)", tone: "warn", items: ["Highest risk: <b>D+/R−</b>", "Recipient meets the virus for the first time"] },
          { h: "Allogeneic HSCT", tone: "warn", items: ["Highest risk: <b>R+</b>", "Recipient's latent virus reactivates"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "Cycle: primary infection → spread to latency site (<b>retrograde along axons</b> for alpha) → latency kept by <b>CD8 T cells</b> → reactivation.",
        "HSV encephalitis: <b>temporal and orbitofrontal</b> hemorrhagic necrosis.",
        "Neonatal HSV: highest risk with <b>primary maternal infection near term</b>.",
        "VZV: two viremias, incubation <b>10–21 days</b>; zoster inflames ganglion → pain, PHN.",
        "EBV infects B cells via <b>CD21</b>; symptoms come from the <b>CD8 response</b> (atypical lymphocytes); PTLD if T-cell control fails.",
        "CMV: direct damage + <b>indirect effects</b> on transplant. HHV-8: angiogenesis → Kaposi."
      ],
      visuals: [
        { type: "flow", title: "The common cycle", dir: "row", steps: [
          { h: "Primary infection", p: "Mucosa, airway" },
          { h: "To latency site", p: "Ganglia or leukocytes" },
          { h: "Latency", p: "Held by T cells" },
          { h: "Reactivation", p: "Stress, age, immunosuppression", tone: "warn" }
        ]},
        { type: "cards", title: "Virus-specific mechanisms", items: [
          { h: "HSV", p: "Giant cells, intraepithelial vesicles; temporal lobe encephalitis", tag: "Cytolytic" },
          { h: "VZV", p: "Two viremias; ganglionitis → pain before rash", tag: "10–21 d incubation" },
          { h: "EBV", p: "CD21 on B cells; CD8 response = mononucleosis", tag: "PTLD", tone: "warn" },
          { h: "CMV", p: "Cytomegaly; indirect graft effects; fetal infection", tag: "Transplant, fetus", tone: "warn" },
          { h: "HHV-8", p: "Viral genes drive proliferation, angiogenesis", tag: "Kaposi" }
        ]}
      ]
    },
    "4": {
      summary: [
        "HSV: grouped vesicles on red base; genital first episode severe; keratitis (dendritic); <b>encephalitis</b> (behavior change, seizures, ~70% mortality untreated); neonatal forms.",
        "Varicella: centripetal rash, <b>all stages at once</b>; contagious until all crusted. Adults/pregnancy: <b>pneumonia</b>.",
        "Zoster: dermatomal, <b>doesn't cross midline</b>; <b>Hutchinson sign</b> → eye; Ramsay Hunt → facial palsy; <b>PHN</b> most common complication.",
        "EBV: fever, exudative pharyngitis, <b>posterior cervical nodes</b>, splenomegaly; <b>amoxicillin rash</b>; splenic rupture.",
        "CMV: mono-like (heterophile negative), transplant disease, <b>retinitis in AIDS</b>, congenital (calcifications, <b>hearing loss</b>).",
        "HHV-6B: <b>exanthema subitum</b> (rash as fever falls). HHV-8: <b>Kaposi sarcoma</b> (classic in older Mediterranean men)."
      ],
      visuals: [
        { type: "compare", title: "Varicella vs zoster", cols: [
          { h: "Varicella", tone: "accent", items: ["Primary infection", "Trunk and face first", "Lesions in all stages", "Contagious 1–2 d before rash until crusted", "Adults: pneumonia"] },
          { h: "Zoster", tone: "warn", items: ["Reactivation", "Pain before rash", "One dermatome, no midline crossing", "Hutchinson sign → eye", "PHN ≥90 days"] }
        ]},
        { type: "cards", title: "Don't miss", items: [
          { h: "HSV encephalitis", p: "Fever + behavior change, seizures, aphasia", tag: "Acyclovir now", tone: "warn" },
          { h: "Neonatal varicella", p: "Maternal rash 5 d before – 2 d after delivery", tag: "VZIG", tone: "warn" },
          { h: "Hutchinson sign", p: "Vesicles on nose tip", tag: "Ophthalmology" },
          { h: "Splenic rupture", p: "Mononucleosis, first weeks", tag: "No contact sports" },
          { h: "CMV retinitis", p: "AIDS, CD4 &lt;50", tag: "Fundoscopy" },
          { h: "Congenital CMV", p: "Microcephaly, calcifications, hearing loss", tag: "Late hearing loss" }
        ]},
        { type: "table", title: "Kaposi sarcoma: four forms", head: ["Form", "Who"], rows: [
          ["Classic", "Older Mediterranean men, legs, indolent"],
          ["Endemic", "Sub-Saharan Africa"],
          ["Iatrogenic", "Transplant recipients"],
          ["Epidemic", "AIDS-defining"]
        ]}
      ]
    },
    "5": {
      summary: [
        "Vesicle / ulcer: <b>PCR of unroofed lesion</b>. Tzanck smear can't tell HSV from VZV.",
        "HSV serology: type-specific IgG only; <b>IgM useless</b>; low-positive HSV-2 needs confirmation; no general screening.",
        "HSV encephalitis: <b>CSF PCR</b>; may be <b>negative in first 72 h → repeat</b>. MRI temporal lobe.",
        "EBV: <b>Monospot</b> + atypical lymphocytes &gt;10%; negative early and in children &lt;4 → EBV serology.",
        "CMV in transplant: <b>quantitative PCR (IU/mL)</b>, same assay; <b>GI disease may have negative blood PCR → biopsy</b>.",
        "Pregnancy: CMV IgG/IgM + <b>avidity</b>. Newborn: <b>urine/saliva PCR within 21 days</b>."
      ],
      visuals: [
        { type: "table", title: "Test of choice", head: ["Question", "Test"], rows: [
          ["Mucocutaneous HSV / VZV", "PCR of lesion swab"],
          ["HSV encephalitis", "CSF PCR (repeat if negative early)"],
          ["Mononucleosis", "Heterophile test + blood film"],
          ["CMV after transplant", "Quantitative PCR in blood"],
          ["Tissue-invasive CMV", "Biopsy, histology"],
          ["Primary CMV in pregnancy", "IgG, IgM, <b>low avidity</b>"],
          ["Congenital CMV", "Urine / saliva PCR ≤21 days"],
          ["Kaposi sarcoma", "Biopsy, HHV-8 LANA"]
        ]},
        { type: "table", title: "Reading EBV serology", head: ["Pattern", "VCA IgM", "VCA IgG", "EBNA IgG"], rows: [
          ["Never infected", "−", "−", "−"],
          ["<b>Acute infection</b>", "<b>+</b>", "+", "<b>−</b>"],
          ["Past infection", "−", "+", "<b>+</b>"]
        ]}
      ]
    },
    "6": {
      summary: [
        "<b>Acyclovir/valacyclovir/famciclovir</b>: need viral TK; HSV, VZV; kidneys.",
        "<b>Brivudine + 5-FU/capecitabine can kill</b> (DPD inhibition).",
        "<b>Ganciclovir/valganciclovir</b>: CMV; <b>neutropenia</b>. <b>Foscarnet, cidofovir</b>: <b>kidneys</b>. Letermovir: CMV <b>prophylaxis only</b>, no HSV/VZV activity.",
        "HSV encephalitis: <b>IV acyclovir immediately</b>, 14–21 days. Genital herpes: treat all first episodes; episodic or suppressive.",
        "Zoster: antivirals <b>within 72 h</b>; IV if disseminated, CNS, ophthalmic.",
        "EBV: <b>no antivirals</b>; steroids only for airway obstruction, hemolysis.",
        "CMV disease: ganciclovir / valganciclovir, reduce immunosuppression; refractory → resistance testing, foscarnet, maribavir. Congenital symptomatic: <b>valganciclovir 6 months</b>."
      ],
      visuals: [
        { type: "table", title: "Antivirals", head: ["Drug", "Use", "Watch out"], rows: [
          ["Acyclovir, valacyclovir, famciclovir", "HSV, VZV", "Crystal nephropathy"],
          ["Brivudine", "Zoster", "<b>Fatal with fluoropyrimidines</b>"],
          ["Ganciclovir, valganciclovir", "CMV", "<b>Neutropenia</b>"],
          ["Foscarnet", "Resistant CMV / HSV", "<b>Kidneys</b>, electrolytes"],
          ["Cidofovir", "Resistant CMV / HSV", "<b>Kidneys</b>"],
          ["Letermovir", "CMV prophylaxis", "No HSV/VZV cover"],
          ["Maribavir", "Refractory CMV", "Antagonizes ganciclovir"]
        ]},
        { type: "timeline", title: "Time windows", points: [
          { at: "Immediately", h: "HSV encephalitis", p: "IV acyclovir before results", tone: "warn" },
          { at: "≤ 24 h", h: "Varicella (at-risk)", p: "Oral antiviral" },
          { at: "≤ 72 h", h: "Zoster", p: "Antiviral from rash onset" },
          { at: "≤ 1 month of life", h: "Congenital CMV", p: "Valganciclovir for 6 months" }
        ]}
      ]
    },
    "7": {
      summary: [
        "Genital herpes: counseling, condoms, partner notification, HIV/STI testing.",
        "Pregnancy with genital herpes: <b>suppression from 36 weeks</b>; caesarean if lesions at labor.",
        "Relapse weeks after HSV encephalitis may be <b>anti-NMDA receptor encephalitis</b>.",
        "Zoster in a young person → <b>HIV test</b>.",
        "Mononucleosis: <b>no contact sports for ≥3–4 weeks</b> and while the spleen is big.",
        "CMV: weekly PCR during pre-emptive therapy. Congenital: <b>hearing follow-up</b> through childhood."
      ],
      visuals: [
        { type: "cards", title: "Follow-up pearls", items: [
          { h: "Post-encephalitis relapse", p: "Think autoimmune (anti-NMDA)", tag: "Not viral", tone: "warn" },
          { h: "Young adult with zoster", p: "No obvious cause", tag: "HIV test" },
          { h: "Mononucleosis", p: "Spleen enlarged", tag: "No contact sports" },
          { h: "Congenital CMV", p: "Hearing loss can be late", tag: "Audiology" }
        ]}
      ]
    },
    "8": {
      summary: [
        "<b>Varicella vaccine</b>: live, 2 doses (MMRV in Italy); not in pregnancy or severe immunosuppression.",
        "<b>Recombinant zoster vaccine</b>: <b>non-live</b>, 2 doses; usable in <b>immunocompromised</b>; Italy: 65 y and at-risk from 18 y.",
        "No vaccine for HSV, CMV, EBV, HHV-8.",
        "Varicella exposure: <b>vaccine within 3–5 days</b> (immunocompetent); <b>VZIG within 10 days</b> (immunocompromised, pregnant, at-risk newborns).",
        "Airborne + contact precautions for varicella and disseminated zoster.",
        "CMV: universal prophylaxis or pre-emptive therapy in SOT; <b>letermovir</b> in R+ HSCT. Congenital CMV: <b>hygiene</b>; valacyclovir for first-trimester primary infection."
      ],
      visuals: [
        { type: "compare", title: "Varicella vs zoster vaccines", cols: [
          { h: "Varicella vaccine", tone: "warn", items: ["Live attenuated", "2 doses in childhood", "Not in pregnancy", "Not in severe immunosuppression"] },
          { h: "Recombinant zoster vaccine", tone: "good", items: ["Non-live (glycoprotein E + adjuvant)", "2 doses, 2–6 months apart", "OK in immunocompromised", "OK after previous zoster"] }
        ]},
        { type: "timeline", title: "After varicella exposure (non-immune)", points: [
          { at: "≤ 3 (–5) days", h: "Varicella vaccine", p: "Immunocompetent, no contraindication", tone: "good" },
          { at: "≤ 10 days", h: "VZIG", p: "Immunocompromised, pregnant, at-risk newborn", tone: "warn" }
        ]}
      ]
    }
  }
};
