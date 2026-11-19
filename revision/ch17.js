/* Revision layer for Chapter 17 — HIV. Source: chapters/17-*.md */
window.REVISION = window.REVISION || {};
window.REVISION[17] = {
  sections: {
    "1": {
      summary: [
        "<b>Retrovirus</b> (<i>Lentivirus</i>): 2 copies of (+) ssRNA, <b>reverse transcriptase</b>, <b>integrase</b>, protease.",
        "<i>gag</i> (p24 capsid), <i>pol</i> (enzymes), <i>env</i> (gp120 binds CD4 + co-receptor; gp41 fusion).",
        "Error-prone RT → <b>quasispecies</b>, resistance, immune escape.",
        "Each replication step is a <b>drug target</b>.",
        "<b>HIV-2</b>: West Africa, slower, less transmissible; <b>resistant to NNRTIs</b>, not measured by HIV-1 viral load."
      ],
      visuals: [
        { type: "flow", title: "Replication cycle and drug targets", steps: [
          { h: "Attachment to CD4 + CCR5/CXCR4", p: "Maraviroc, fostemsavir, ibalizumab" },
          { h: "Fusion (gp41)", p: "Enfuvirtide" },
          { h: "Reverse transcription", p: "NRTIs, NNRTIs", tone: "accent" },
          { h: "Nuclear import, integration", p: "INSTIs; capsid: lenacapavir", tone: "accent" },
          { h: "Assembly, budding, maturation", p: "Protease inhibitors" }
        ]},
        { type: "compare", title: "HIV-1 vs HIV-2", cols: [
          { h: "HIV-1", tone: "accent", items: ["Chimpanzee SIV", "Worldwide pandemic", "Subtype B in Europe, C globally"] },
          { h: "HIV-2", tone: "warn", items: ["Sooty mangabey SIV", "West Africa, Portugal", "Lower viral load, slower", "No NNRTIs, no enfuvirtide"] }
        ]}
      ]
    },
    "2": {
      summary: [
        "2025: <b>41 million</b> living with HIV, <b>1.2 million</b> new infections, <b>570,000</b> deaths.",
        "95-95-95 cascade: 88% know, 78% treated, 74% suppressed.",
        "Italy 2024: <b>2,379</b> diagnoses; mostly sexual (MSM 42%); <b>~60% late presenters</b> (CD4 &lt;350); PCP the most common AIDS-defining illness.",
        "Highest per-act risk: transfusion, then <b>receptive anal sex</b> (~1.4%).",
        "Transmission rises with high viral load (<b>acute HIV</b>), STIs, receptive anal sex. Mother-to-child 15–45% → &lt;1–2% with ART."
      ],
      visuals: [
        { type: "stats", items: [
          { v: "41 M", l: "living with HIV" },
          { v: "1.2 M", l: "new infections / year" },
          { v: "~60%", l: "late presenters in Italy" }
        ]},
        { type: "bars", title: "Per-act transmission risk (untreated source)", unit: "%", max: 1.4, rows: [
          { label: "Receptive anal", v: 1.4, t: "1.4%", tone: "warn" },
          { label: "Needle-sharing", v: 0.6, t: "0.6%" },
          { label: "Needlestick", v: 0.2, t: "0.2%" },
          { label: "Insertive anal", v: 0.1, t: "0.1%" },
          { label: "Receptive vaginal", v: 0.08, t: "0.08%" },
          { label: "Insertive vaginal", v: 0.04, t: "0.04%" }
        ], caption: "Blood transfusion: ~92.5%." }
      ]
    },
    "3": {
      summary: [
        "Targets: CD4 T cells, macrophages, dendritic cells, microglia. Most transmitted virus is <b>R5 (CCR5)</b>; X4 later.",
        "<b>CCR5-Δ32 homozygotes</b> are largely resistant.",
        "Acute: huge viremia, <b>gut CD4 depletion (GALT)</b>, reservoir seeded.",
        "<b>Set point</b> at ~6 months predicts progression; CD4 falls 50–100/µL per year; AIDS in ~10 years untreated.",
        "<b>Chronic immune activation</b> (microbial translocation) → non-AIDS comorbidities.",
        "<b>Latent reservoir</b> in resting memory CD4 cells → ART is <b>lifelong</b>."
      ],
      visuals: [
        { type: "timeline", title: "Natural history (untreated)", points: [
          { at: "~10 days", h: "Eclipse", p: "RNA undetectable" },
          { at: "Weeks 2–4", h: "Acute infection", p: "Very high viremia, GALT depletion", tone: "warn" },
          { at: "~6 months", h: "Set point", p: "Predicts progression" },
          { at: "Years", h: "Chronic phase", p: "CD4 −50–100/µL per year" },
          { at: "~10 years", h: "AIDS", p: "CD4 &lt;200", tone: "warn" }
        ]},
        { type: "chips", title: "Mechanisms of immune damage", groups: [
          { h: "", items: ["Direct killing, pyroptosis", "Microbial translocation", "Chronic immune activation", "Lymph node fibrosis", "T-cell exhaustion", "B-cell dysfunction"] }
        ]}
      ]
    },
    "4": {
      summary: [
        "<b>Acute HIV</b> (2–4 weeks): <b>mononucleosis-like</b>: fever, pharyngitis, rash, nodes, <b>mucocutaneous ulcers</b>.",
        "Mono-like illness with negative EBV test → <b>test for acute HIV</b>.",
        "Chronic phase: often silent; <b>indicator conditions</b> (zoster, seborrheic dermatitis, oral candidiasis, STIs, hepatitis, TB, lymphoma).",
        "<b>AIDS</b> = CD4 &lt;200 or AIDS-defining illness.",
        "OIs follow CD4: <b>PCP &lt;200; toxo, crypto &lt;100; CMV, MAC &lt;50</b>. TB and KS at any CD4."
      ],
      visuals: [
        { type: "ladder", title: "Opportunistic infections by CD4 count (cells/µL)", steps: [
          { h: "Any count", p: "Tuberculosis, bacterial pneumonia, Kaposi sarcoma, zoster, lymphoma" },
          { h: "&lt; 200", p: "<b>PCP</b>, esophageal candidiasis, PML, wasting" },
          { h: "&lt; 100", p: "<b>Cerebral toxoplasmosis</b>, <b>cryptococcal meningitis</b>, endemic mycoses", tone: "warn" },
          { h: "&lt; 50", p: "<b>CMV retinitis</b>, <b>disseminated MAC</b>, primary CNS lymphoma", tone: "warn" }
        ]},
        { type: "table", title: "Key OI features", head: ["Disease", "Clues"], rows: [
          ["PCP", "Subacute dyspnea, <b>desaturation on exertion</b>, high LDH, ground-glass"],
          ["Cerebral toxoplasmosis", "Multiple <b>ring-enhancing</b> lesions, basal ganglia"],
          ["Cryptococcal meningitis", "Subacute headache, <b>very high opening pressure</b>, CrAg"],
          ["CMV retinitis", "Floaters, \"pizza pie\" fundus"],
          ["PML", "White-matter lesions, no mass effect, JC virus PCR"]
        ]}
      ]
    },
    "5": {
      summary: [
        "Test everyone 13–64 at least once; yearly if at risk; every pregnancy; all indicator conditions; before PrEP/PEP.",
        "Window: <b>RNA (10–33 d) → p24 (18–45 d) → antibodies (23–90 d)</b>.",
        "Algorithm: <b>4th-generation Ag/Ab</b> → differentiation assay → RNA if discordant. <b>No Western blot</b>.",
        "Infants &lt;18 months: <b>NAT</b> (maternal antibodies).",
        "Baseline: CD4, viral load, <b>resistance genotype</b>, <b>HLA-B*57:01</b>, HBV/HCV, STIs, toxo IgG, TB screening, <b>CrAg if CD4 &lt;100</b>."
      ],
      visuals: [
        { type: "ranges", title: "When markers become positive (days after exposure)", max: 90, ticks: [0, 10, 30, 45, 90], rows: [
          { label: "HIV-1 RNA", from: 10, to: 33, tone: "warn", txt: "10–33 d" },
          { label: "p24 antigen (4th gen)", from: 18, to: 45, txt: "18–45 d" },
          { label: "Antibodies", from: 23, to: 90, txt: "23–90 d" }
        ]},
        { type: "algo", title: "Laboratory algorithm", nodes: [
          { q: "4th-generation Ag/Ab immunoassay", opts: [
            { when: "Negative", to: "No HIV (repeat or RNA if recent exposure)", tone: "good" },
            { when: "Reactive", to: "HIV-1/HIV-2 differentiation assay", next: 1 }
          ]},
          { q: "Differentiation assay", opts: [
            { when: "Positive", to: "HIV-1 or HIV-2 confirmed", tone: "warn" },
            { when: "Negative / indeterminate", to: "HIV-1 RNA: positive = acute HIV" }
          ]}
        ]}
      ]
    },
    "6": {
      summary: [
        "<b>ART for everyone, any CD4, ideally same day</b>.",
        "Exceptions: <b>cryptococcal meningitis</b> (defer 4–6 weeks) and <b>TB meningitis</b>. TB: ART within 2 weeks (CD4 low) or 8 weeks.",
        "First line: <b>INSTI + 2 NRTIs</b> (BIC/TAF/FTC, DTG + TDF/TAF + FTC/3TC). DTG/3TC not if HBV or unknown resistance.",
        "<b>HBV coinfection → tenofovir</b> must be in the regimen. <b>HLA-B*57:01 before abacavir</b>.",
        "Interactions: rilpivirine + PPI, INSTI + cations, <b>boosters</b> (CYP3A4).",
        "<b>IRIS</b>: worsening after ART → continue ART.",
        "Prophylaxis: <b>TMP-SMX if CD4 &lt;200</b> (PCP, and toxo if &lt;100 + IgG+); CrAg screen → fluconazole."
      ],
      visuals: [
        { type: "table", title: "Drug classes", head: ["Class", "Examples", "Watch out"], rows: [
          ["NRTIs", "Tenofovir, emtricitabine, lamivudine, abacavir", "TDF kidney/bone; abacavir HLA-B*57:01"],
          ["INSTIs", "Dolutegravir, bictegravir, cabotegravir", "<b>Preferred anchor</b>; cations; weight gain"],
          ["NNRTIs", "Doravirine, rilpivirine", "Low barrier; rilpivirine + PPI"],
          ["Boosted PIs", "Darunavir/r or /c", "CYP3A4 interactions"],
          ["Capsid inhibitor", "Lenacapavir", "Every 6 months; MDR, PrEP"],
          ["Entry inhibitors", "Maraviroc, fostemsavir, enfuvirtide", "Treatment-experienced"]
        ]},
        { type: "timeline", title: "When to start ART", points: [
          { at: "Same day", h: "Most people", p: "Incl. acute HIV, pregnancy", tone: "good" },
          { at: "≤ 2 weeks", h: "Most OIs, TB with low CD4", p: "After OI treatment starts" },
          { at: "4–6 weeks", h: "Cryptococcal meningitis", p: "Early ART raises mortality", tone: "warn" },
          { at: "4–8 weeks", h: "TB meningitis", p: "IRIS risk", tone: "warn" }
        ]},
        { type: "table", title: "Primary prophylaxis", head: ["Threshold", "Prevent", "Drug"], rows: [
          ["CD4 &lt;200", "PCP", "TMP-SMX"],
          ["CD4 &lt;100 + <i>Toxoplasma</i> IgG+", "Toxoplasmosis", "TMP-SMX"],
          ["CD4 &lt;100, serum CrAg+", "Cryptococcal meningitis", "Fluconazole (pre-emptive)"],
          ["Latent TB", "Active TB", "Isoniazid / rifapentine"]
        ], caption: "Stop PCP/toxo prophylaxis when CD4 &gt;200 for ≥3 months on ART." }
      ]
    },
    "7": {
      summary: [
        "Viral load 2–8 weeks after start, then until <b>&lt;50 copies/mL</b> (within 24 weeks), then every 3–6 months.",
        "<b>Blip</b> (isolated low value) ≠ failure. <b>Failure</b>: confirmed &gt;200 (or &gt;50): adherence, interactions, <b>genotype on the failing regimen</b>.",
        "Near-normal life expectancy: focus on <b>cardiovascular</b> (statins), renal, bone, cancer screening (anal, cervical), mental health.",
        "Pregnancy: ART for all, undetectable before delivery → transmission &lt;1%."
      ],
      visuals: [
        { type: "compare", title: "Detectable viral load on ART", cols: [
          { h: "Blip", tone: "good", items: ["Isolated, usually &lt;200 copies/mL", "Then suppressed again", "Not failure"] },
          { h: "Virological failure", tone: "warn", items: ["Confirmed &gt;200 (DHHS) / &gt;50 (EACS)", "Check adherence, interactions", "Genotype while on the regimen", "≥2 fully active drugs"] }
        ]}
      ]
    },
    "8": {
      summary: [
        "<b>No HIV vaccine</b>: combination prevention.",
        "<b>U = U</b>: durably undetectable (&lt;200) = <b>no sexual transmission</b>.",
        "<b>PrEP</b>: TDF/FTC daily or on-demand 2-1-1 (MSM); injectable cabotegravir every 2 months; <b>lenacapavir every 6 months</b>. Test HIV + STI every 3 months.",
        "<b>PEP</b>: start within <b>72 h</b> (ideally 24 h), for <b>28 days</b>; INSTI-based. Not needed if the source is undetectable.",
        "Vaccines: HBV, HAV, pneumococcal, influenza, HPV, zoster (recombinant). <b>No live vaccines if CD4 &lt;200</b>."
      ],
      visuals: [
        { type: "compare", title: "PrEP vs PEP", cols: [
          { h: "PrEP (before)", tone: "good", items: ["Oral TDF/FTC daily or 2-1-1", "Cabotegravir IM every 2 months", "Lenacapavir SC every 6 months", "HIV + STI tests every 3 months"] },
          { h: "PEP (after)", tone: "warn", items: ["Within 72 h, best ≤24 h", "28 days", "BIC/FTC/TAF or DTG-based", "HIV test at 4–6 and 12 weeks"] }
        ]},
        { type: "note", h: "U = U", p: "A durably undetectable viral load means no sexual transmission. It does not protect against other STIs." }
      ]
    }
  }
};
