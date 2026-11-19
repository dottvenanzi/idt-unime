/* Revision layer for Chapter 13 — Leishmaniasis. Source: chapters/13-leishmaniasis.md */
window.REVISION = window.REVISION || {};
window.REVISION[13] = {
  sections: {
    "1": {
      summary: [
        "Protozoa of the genus <i>Leishmania</i>, transmitted by the <b>female sand fly</b>.",
        "Reservoirs: rodents and <b>dogs</b>.",
        "<b>Promastigote</b> (extracellular, in the fly) → <b>amastigote</b> (intracellular, in macrophage phagolysosomes).",
        "Amastigotes: 1.5–4 µm, nucleus + <b>rod-shaped kinetoplast</b>, Giemsa: <b>Leishman-Donovan bodies</b>.",
        "Visceral: <i>L. donovani</i>, <i>L. infantum</i>. Mucosal: <i>Viannia</i> (<i>L. braziliensis</i>). Urban cutaneous: <i>L. tropica</i>."
      ],
      visuals: [
        { type: "flow", title: "Life cycle", steps: [
          { h: "Sand fly bites an infected host", p: "Ingests amastigotes" },
          { h: "Promastigotes in the fly", p: "Extracellular, 4–14 days" },
          { h: "Inoculation into skin", p: "Next blood meal" },
          { h: "Phagocytosis", p: "Promastigote → amastigote in phagolysosome" },
          { h: "Intracellular replication", p: "Obligate parasite of macrophages", tone: "warn" }
        ]},
        { type: "table", title: "Species and syndromes", head: ["Syndrome", "Species"], rows: [
          ["Visceral", "<i>L. donovani</i>, <i>L. infantum</i>"],
          ["Mucosal", "<i>L. (Viannia) braziliensis</i>, <i>guyanensis</i>, <i>panamensis</i>"],
          ["Urban cutaneous", "<i>L. tropica</i>"]
        ]}
      ]
    },
    "2": {
      summary: [
        "Endemic in <b>&gt;98 countries</b>; cutaneous ~0.7–1 million cases a year.",
        "Mostly a <b>zoonosis</b>; humans infected incidentally. Some anthroponotic (<i>L. tropica</i>, <i>L. donovani</i>).",
        "Mucosal form: mainly the <b>Americas</b>.",
        "<b><i>L. infantum</i></b>: Mediterranean (Italy), <b>dogs</b>, children and immunosuppressed. <b><i>L. donovani</i></b>: South Asia, East Africa, all ages.",
        "Rare routes: IDU, transfusion, transplant, congenital."
      ],
      visuals: [
        { type: "compare", title: "Visceral leishmaniasis: two patterns", cols: [
          { h: "<i>L. donovani</i>", items: ["South Asia, Horn of Africa", "All ages, healthy adults", "Anthroponotic (humans are the reservoir)"] },
          { h: "<i>L. infantum</i>", tone: "accent", items: ["Mediterranean, Middle East, Brazil", "Children, immunosuppressed adults", "Zoonotic: <b>dogs</b>"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "Lives and replicates <b>inside macrophages</b>.",
        "Cutaneous: stays at the bite; may spread along lymphatics.",
        "Mucosal (<i>Viannia</i>): with the skin lesion or <b>years later</b>; destroys naso-oropharyngeal mucosa.",
        "Visceral: macrophages of <b>spleen, liver, bone marrow</b>; anemia from marrow suppression, hemolysis, sequestration.",
        "Many infections are <b>asymptomatic</b> and <b>reactivate with immunosuppression</b> (HIV, steroids, transplant)."
      ],
      visuals: [
        { type: "compare", title: "Where the parasite goes", cols: [
          { h: "Cutaneous", items: ["Skin at the bite", "± lymphatic spread"] },
          { h: "Mucosal", tone: "warn", items: ["Nose, mouth, larynx", "Concomitant or years later"] },
          { h: "Visceral", tone: "warn", items: ["Spleen, liver, bone marrow", "Pancytopenia"] }
        ]}
      ]
    },
    "4": {
      summary: [
        "<b>Localized CL</b>: papule → nodule → <b>painless ulcer with raised border</b> on exposed skin; heals over months–years with a <b>depressed scar</b>.",
        "<b>Mucosal</b>: nasal stuffiness, bleeding, destruction; hoarseness if laryngeal; disfiguring.",
        "<b>Visceral (kala-azar)</b>: incubation 2–6 months; <b>fever, weight loss, massive splenomegaly, pancytopenia</b>.",
        "Untreated kala-azar is <b>nearly always fatal</b>."
      ],
      visuals: [
        { type: "flow", title: "Evolution of a cutaneous lesion", dir: "row", steps: [
          { h: "Pink papule", p: "" },
          { h: "Nodule / plaque", p: "" },
          { h: "Painless ulcer", p: "Raised, indurated border", tone: "warn" },
          { h: "Atrophic scar", p: "Months to years" }
        ]},
        { type: "compare", title: "Three syndromes", cols: [
          { h: "Cutaneous", items: ["Exposed skin", "Painless ulcer", "Often self-heals"] },
          { h: "Mucosal", tone: "warn", items: ["Nose and mouth", "Mucosal destruction", "Hoarseness, brassy cough"] },
          { h: "Visceral", tone: "warn", items: ["Fever, weight loss", "Splenomegaly ± hepatomegaly", "Severe anemia, pancytopenia", "Fatal if untreated"] }
        ]}
      ]
    },
    "5": {
      summary: [
        "CL: <b>prove the parasite</b>: histology (Giemsa, <b>kinetoplast</b>), culture, <b>PCR (most sensitive)</b>. Identify the species.",
        "Sample the <b>raised border / base</b> of an active, clean ulcer; 4–5 mm punch. <b>No excisional biopsy</b>.",
        "<b>Serology has no role in CL</b>.",
        "<i>Viannia</i> CL: examine the nose and mouth even without symptoms.",
        "VL: parasite in <b>bone marrow or spleen</b>; PCR on tissue or blood; serology (rK39, DAT) helps but stays positive for years.",
        "HIV coinfection: serology less sensitive; use tissue or PCR."
      ],
      visuals: [
        { type: "compare", title: "Diagnosis", cols: [
          { h: "Cutaneous", tone: "accent", items: ["Histology (Giemsa, kinetoplast)", "Culture", "<b>PCR</b> (most sensitive)", "Species identification", "<b>No serology</b>"] },
          { h: "Visceral", tone: "warn", items: ["Bone marrow / spleen smear or culture", "PCR (tissue, blood)", "Serology (rK39, DAT): supportive", "Serology not a test of cure"] }
        ]},
        { type: "chips", title: "Differential diagnosis", groups: [
          { h: "Cutaneous", items: ["Fungal infections", "Sporotrichosis", "Cutaneous TB, NTM", "Leprosy (neuropathy)", "Squamous cell carcinoma"] },
          { h: "Visceral", items: ["Malaria", "Histoplasmosis", "Amebic liver abscess", "Schistosomiasis", "Lymphoma", "Tuberculosis"] }
        ]}
      ]
    },
    "6": {
      summary: [
        "CL: aim is <b>clinical cure</b>. <b>Uncomplicated → local</b> (cryotherapy, thermotherapy, topical paromomycin); <b>complicated → systemic</b>.",
        "Complicated: <i>Viannia</i>, many or large lesions, <b>face, fingers, genitalia</b>, immunosuppression, failure.",
        "Systemic: azoles, <b>miltefosine</b>, antimonials, <b>liposomal amphotericin B</b>, pentamidine.",
        "ML: full ENT exam; antimonials, amphotericin, miltefosine.",
        "VL: treat promptly + supportive care. <b>Liposomal amphotericin B</b> in Europe, Americas, South Asia; miltefosine + paromomycin in East Africa.",
        "<b>Test every VL patient for HIV</b>; ART lowers relapse."
      ],
      visuals: [
        { type: "algo", title: "Cutaneous leishmaniasis", nodes: [
          { q: "Complicated? (<i>Viannia</i>, many or large lesions, face / fingers / genitalia, immunosuppression, local failure)", opts: [
            { when: "No", to: "Local: cryotherapy, thermotherapy, topical paromomycin", tone: "good" },
            { when: "Yes", to: "Systemic: miltefosine, azoles, antimonials, liposomal amphotericin B", tone: "warn" }
          ]}
        ]},
        { type: "table", title: "Visceral leishmaniasis: first-line by region", head: ["Region", "Treatment"], rows: [
          ["Europe, Americas", "Liposomal amphotericin B"],
          ["India, Nepal, Bangladesh", "Liposomal amphotericin B"],
          ["East Africa", "Miltefosine + paromomycin"],
          ["Immunocompromised", "Liposomal amphotericin B; reduce immunosuppression"]
        ]}
      ]
    },
    "7": {
      summary: [
        "CL: judged clinically; at <b>4–6 weeks</b> &gt;50% smaller, re-epithelializing, no new lesions. Follow 6–12 months; <b>≥2 years if ML risk</b>.",
        "VL: fever resolves in <b>1–2 weeks</b>, spleen shrinks in ~1 month, weight gain. Follow ≥12 months.",
        "<b>Serology is not a test of cure</b>. Reactivation possible with immunosuppression."
      ],
      visuals: [
        { type: "timeline", title: "Visceral leishmaniasis: response", points: [
          { at: "1–2 weeks", h: "Fever resolves", p: "", tone: "good" },
          { at: "~1 month", h: "Spleen shrinks", p: "Weight gain" },
          { at: "≥ 12 months", h: "Clinical follow-up", p: "Relapse, reactivation", tone: "warn" }
        ]}
      ]
    },
    "8": {
      summary: [
        "<b>No vaccine, no pre-exposure prophylaxis</b>.",
        "Sand flies bite <b>dusk to dawn</b>: cover skin, permethrin clothing, DEET, fine-mesh treated nets.",
        "Vector and reservoir (dogs, rodents) control; treat humans in anthroponotic VL. <b>PKDL</b> is a hidden reservoir."
      ],
      visuals: [
        { type: "compare", title: "Prevention", cols: [
          { h: "Individual", tone: "good", items: ["Cover skin dusk to dawn", "Permethrin-treated clothing", "DEET", "Insecticide-treated fine nets"] },
          { h: "Public health", tone: "accent", items: ["Vector control", "Reservoir control (dogs)", "Treat human cases, incl. PKDL"] }
        ]}
      ]
    }
  }
};
