/* Revision layer for Chapter 14 — Malaria.
   Written from /chapters/14-malaria.md; full text is shown below each card. */
window.REVISION = window.REVISION || {};
window.REVISION[14] = {
  sections: {
    "1": {
      summary: [
        "Protozoa of the genus <b><i>Plasmodium</i></b>, transmitted by the <b>female <i>Anopheles</i></b> mosquito, mostly <b>dusk to dawn</b>.",
        "<b><i>P. falciparum</i></b> causes almost all severe disease and deaths; it invades red cells of any age.",
        "<b><i>P. vivax</i> and <i>P. ovale</i></b> leave dormant liver <b>hypnozoites</b> → relapses.",
        "<b>Liver stage</b> = asymptomatic, accounts for the incubation. <b>Blood stage</b> = symptoms. <b>Gametocytes</b> = transmission."
      ],
      visuals: [
        { type: "lifecycle" },
        { type: "cards", title: "The five species", items: [
          { h: "<i>P. falciparum</i>", p: "Sub-Saharan Africa. Any-age red cells, high parasitemia. No hypnozoites.", tag: "Severe disease, deaths", tone: "warn" },
          { h: "<i>P. vivax</i>", p: "Asia, Latin America. Can also be severe.", tag: "Hypnozoites → relapse" },
          { h: "<i>P. ovale</i>", p: "Mainly West Africa. Usually mild.", tag: "Hypnozoites → relapse" },
          { h: "<i>P. malariae</i>", p: "Low-grade parasitemia that persists for years. No hypnozoites.", tag: "Chronic" },
          { h: "<i>P. knowlesi</i>", p: "Monkey malaria of Southeast Asia (zoonosis). Rapid replication.", tag: "Can be severe" }
        ]}
      ]
    },
    "2": {
      summary: [
        "Most cases and deaths: <b>sub-Saharan Africa</b>, <b>children under 5</b> and <b>pregnant women</b>.",
        "Repeated infection gives <b>partial immunity</b>: adults in endemic areas have mild or no symptoms.",
        "<b>Travelers</b> have no immunity and are at very high risk of severe falciparum malaria.",
        "In Italy: <b>imported malaria</b>, especially migrants <b>visiting friends and relatives</b> who skip prophylaxis.",
        "Partial immunity or inadequate prophylaxis can <b>prolong the incubation</b>."
      ],
      visuals: [
        { type: "stats", items: [
          { v: "≈ 250 M", l: "cases per year (WHO estimate)" },
          { v: "≈ 600,000", l: "deaths per year" },
          { v: "< 5 y", l: "children carry most severe disease" }
        ]},
        { type: "compare", title: "Who gets severe disease", cols: [
          { h: "Living in an endemic area", items: ["Partial immunity after repeated infections", "Adults: mild or no symptoms", "Young children and pregnant women most at risk"] },
          { h: "Traveler / VFR", tone: "warn", items: ["No immunity", "Very high risk of severe <i>P. falciparum</i>", "VFR travelers often skip prophylaxis"] }
        ]},
        { type: "chips", title: "Routes without a mosquito (rare)", groups: [
          { h: "", items: ["Blood transfusion", "Organ transplantation", "Needle sharing", "Congenital"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "<b>Fever</b>: schizont rupture releases parasite products → cytokines (TNF). Periodicity is <b>not reliable</b> for diagnosis.",
        "<b>Cytoadherence</b> (<i>P. falciparum</i>): PfEMP1 on red-cell knobs binds endothelium → <b>sequestration</b> in brain, kidney, lung, gut, placenta.",
        "Sequestered parasites escape the spleen, so the <b>peripheral smear can underestimate</b> the parasite burden.",
        "<b>Anemia</b>: destruction of infected and uninfected cells, splenic clearance, low marrow output. Massive hemolysis → <b>blackwater fever</b>.",
        "<b>Hypoglycemia</b>: parasite consumption, impaired gluconeogenesis, insulin release with quinine."
      ],
      visuals: [
        { type: "flow", title: "Cytoadherence: from one protein to organ failure", steps: [
          { h: "PfEMP1 on red-cell \"knobs\"", p: "Parasite protein on the infected cell surface" },
          { h: "Binds small-vessel endothelium", p: "ICAM-1 (brain), CD36, chondroitin sulfate A (placenta)" },
          { h: "Sequestration + rosetting", p: "Mature parasites stay in the microcirculation and escape the spleen" },
          { h: "Microvascular obstruction", p: "Hypoxia, endothelial activation, inflammation" },
          { h: "Organ damage", p: "Coma, acidosis, renal failure, ARDS, placental malaria", tone: "warn" }
        ]},
        { type: "compare", title: "Three metabolic consequences", cols: [
          { h: "Fever", items: ["Schizont rupture", "Cytokines (TNF)", "Chills, rigors, sweats"] },
          { h: "Anemia", items: ["Hemolysis of infected and uninfected cells", "Splenic clearance", "Reduced marrow output", "Blackwater fever = hemoglobinuria"] },
          { h: "Hypoglycemia", tone: "warn", items: ["Parasite glucose use", "Impaired gluconeogenesis", "Quinine → insulin release"] }
        ]}
      ]
    },
    "4": {
      summary: [
        "Incubation of <i>P. falciparum</i>: <b>12–14 days</b> (range 7–30). <i>Vivax</i>/<i>ovale</i> can present <b>weeks to months</b> later.",
        "Symptoms are <b>nonspecific</b>: fever with chills and sweats, headache, myalgias, GI symptoms. The <b>travel history</b> is the key.",
        "Labs: <b>thrombocytopenia</b>, anemia, raised bilirubin and transaminases. Splenomegaly is common.",
        "<b>Uncomplicated</b>: can swallow, positive test, parasitemia &lt;4%, no severe features.",
        "<b>Severe malaria</b> = organ dysfunction and/or hyperparasitemia (≥4–10%). It needs immediate treatment."
      ],
      visuals: [
        { type: "incubation" },
        { type: "grid", title: "Severe malaria: recognize it at once", items: [
          { h: "Neurologic", p: "Altered consciousness, coma, seizures" },
          { h: "Hematologic", p: "Severe anemia, coagulopathy" },
          { h: "Metabolic", p: "Hypoglycemia, metabolic acidosis" },
          { h: "Respiratory", p: "Respiratory distress, ARDS" },
          { h: "Cardiovascular", p: "Circulatory collapse" },
          { h: "Renal", p: "Renal failure, hemoglobinuria" },
          { h: "Hepatic", p: "Hepatic failure, jaundice" },
          { h: "Parasitologic", p: "Hyperparasitemia ≥4–10%" }
        ]},
        { type: "compare", title: "Children vs adults", cols: [
          { h: "More in children", items: ["Seizures", "Severe anemia"] },
          { h: "At any age", tone: "accent", items: ["Coma", "Shock", "Acidosis", "Renal impairment"] },
          { h: "More in adults", items: ["Hyperparasitemia", "ARDS", "Jaundice"] }
        ]}
      ]
    },
    "5": {
      summary: [
        "Suspect malaria with <b>fever ≥37.5 °C + residence in or travel to an endemic area</b>, even weeks to months after return.",
        "Definitive diagnosis = compatible symptoms <b>+ positive test</b>. Confirm parasites whenever possible.",
        "<b>Microscopy</b> is the standard: thick smear detects, thin smear identifies the species and counts parasitemia.",
        "<b>RDTs</b> (HRP2, pLDH, aldolase): 15–20 min, easy, but <b>no quantification</b>. HRP2 tests miss <i>pfhrp2/3</i>-deleted parasites (Peruvian Amazon, Eritrea).",
        "Negative but still suspected → <b>repeat daily for two more days</b>. PCR is mainly for reference labs and research."
      ],
      visuals: [
        { type: "algo", title: "Fever after travel", nodes: [
          { q: "Fever ≥37.5 °C + endemic exposure?", opts: [{ when: "Yes", to: "Suspect malaria, even on prophylaxis", next: true }] },
          { q: "Test now", opts: [{ when: "Tools", to: "Microscopy (thick + thin smear) or RDT if quality microscopy is not available", next: true }] },
          { q: "Result?", opts: [
            { when: "Positive", to: "Species + parasitemia → severe or uncomplicated?", tone: "warn" },
            { when: "Negative, suspicion persists", to: "Repeat daily for 2 more days", tone: "accent" }
          ]}
        ]},
        { type: "table", title: "Microscopy vs RDT", head: ["", "Microscopy", "RDT"], rows: [
          ["Role", "Standard tool", "When quality microscopy is not available"],
          ["Species", "Yes", "Limited, depends on the test"],
          ["Parasitemia", "<b>Yes</b>", "<b>No</b>"],
          ["Speed / skill", "Slower; trained staff", "15–20 min; easy"],
          ["Pitfall", "Misses very low parasitemia (&lt;5–10/µL)", "False negatives with <i>pfhrp2/3</i> deletions"]
        ]},
        { type: "compare", title: "Two smears, two jobs", cols: [
          { h: "Thick smear", items: ["Concentrates the blood", "<b>Detects</b> parasites"] },
          { h: "Thin smear", items: ["Identifies the <b>species</b>", "Counts <b>parasitemia</b> (% infected red cells)"] }
        ]}
      ]
    },
    "6": {
      summary: [
        "<b>Uncomplicated falciparum</b> → <b>ACT</b> (artemisinin combination therapy).",
        "Malaria while on prophylaxis → treat with a <b>different drug</b>.",
        "<b>Severe malaria</b> → parenteral therapy: <b>IV artesunate</b> rather than IV quinine.",
        "Severe malaria also needs <b>blood cultures + empiric ceftriaxone</b> (gram-negatives incl. <i>Salmonella</i>) and intensive supportive care.",
        "<b>Vivax/ovale</b>: add <b>primaquine or tafenoquine</b> (radical cure) after excluding <b>G6PD deficiency</b> and pregnancy."
      ],
      visuals: [
        { type: "algo", title: "Treatment decision", nodes: [
          { q: "Any severe feature, or unable to swallow?", opts: [
            { when: "No", to: "ACT by mouth (not the prophylaxis drug)", tone: "good" },
            { when: "Yes", to: "IV artesunate now + blood cultures + ceftriaxone + supportive care", tone: "warn", next: true }
          ]},
          { q: "Switch to oral ACT when ALL apply", opts: [
            { when: "1", to: "≥24 h of parenteral therapy" },
            { when: "2", to: "Tolerates oral drugs" },
            { when: "3", to: "Parasitemia ≤1%" }
          ]}
        ]},
        { type: "chips", title: "Supportive care in severe malaria (death can occur within hours)", groups: [
          { h: "", items: ["Respiratory support", "Coma scoring", "Treat hypoglycemia", "Manage anemia and coagulopathy", "Careful fluids (risk of pulmonary edema)"] }
        ]},
        { type: "note", h: "Why antibiotics in severe malaria?", p: "Invasive bacterial infection, especially non-typhoidal <i>Salmonella</i> bacteremia, often coexists with severe malaria, mainly in children, and cannot be told apart clinically." },
        { type: "note", h: "Relapsing malaria", p: "Blood-stage drugs do not kill hypnozoites. Radical cure with an 8-aminoquinoline needs a normal G6PD test first: deficiency means a risk of severe hemolysis." }
      ]
    },
    "7": {
      summary: [
        "Follow-up smears should show <b>falling parasitemia</b>, usually cleared in <b>48–72 h</b>.",
        "<b>Positive smear on day 3</b> → suspect partial <b>artemisinin resistance</b>: expert advice, longer treatment, daily smears.",
        "After IV artesunate: check <b>hemoglobin at 7, 14 and 30 days</b> (post-artesunate delayed hemolysis).",
        "After vivax/ovale: warn about <b>relapses</b> if no radical cure was given."
      ],
      visuals: [
        { type: "timeline", title: "After treatment starts", points: [
          { at: "Day 0", h: "Start therapy", p: "" },
          { at: "48 – 72 h", h: "Smear negative", p: "Expected clearance", tone: "good" },
          { at: "Day 3", h: "Still positive?", p: "Suspect artemisinin resistance", tone: "warn" },
          { at: "Days 7, 14, 30", h: "Hemoglobin", p: "After IV artesunate: delayed hemolysis" },
          { at: "Weeks – months", h: "Relapse?", p: "Vivax / ovale without radical cure" }
        ]}
      ]
    },
    "8": {
      summary: [
        "Population level: <b>vector control, chemoprevention, vaccination</b>, plus early diagnosis and treatment (which also cuts transmission).",
        "Vaccines <b>RTS,S/AS01</b> and <b>R21/Matrix-M</b>: for <b>children in endemic areas</b>, partly protective, <b>not for travelers</b>.",
        "Travelers: <b>bite avoidance</b> for all, <b>chemoprophylaxis</b> for those at risk (drug chosen by itinerary and patient).",
        "<b>Fever during or after travel needs urgent evaluation, even if prophylaxis was taken.</b>"
      ],
      visuals: [
        { type: "compare", title: "Two levels of prevention", cols: [
          { h: "Population (endemic areas)", items: ["Vector control (watch insecticide resistance)", "Chemoprevention, especially in pregnancy", "Vaccination of children", "Early diagnosis and treatment", "Surveillance"] },
          { h: "Traveler", tone: "accent", items: ["Avoid dusk-to-dawn exposure", "Screened or air-conditioned rooms", "Protective clothing", "Insect repellent", "Chemoprophylaxis if at risk"] }
        ]}
      ]
    }
  }
};
