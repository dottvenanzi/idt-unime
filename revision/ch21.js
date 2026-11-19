/* Revision layer for Chapter 21 — Arboviruses. Source: chapters/21-*.md */
window.REVISION = window.REVISION || {};
window.REVISION[21] = {
  sections: {
    "1": {
      summary: [
        "All are <b>enveloped RNA viruses</b>: <b>flaviviruses</b> (dengue, Zika, West Nile, yellow fever, JE), <b>alphavirus</b> (chikungunya), <b>bunyaviruses</b> (Toscana, Oropouche).",
        "Flavivirus <b>E protein</b> → neutralizing antibodies and <b>cross-reactivity</b>; <b>NS1</b> secreted → diagnostic antigen.",
        "Dengue: <b>4 serotypes</b>; lifelong immunity only to the same one.",
        "Chikungunya <b>E1-A226V</b> mutation adapted it to <i>Ae. albopictus</i>.",
        "<i>Aedes</i> (day biters): dengue, chikungunya, Zika, urban YF. <i>Culex</i> (night): <b>West Nile</b>, JE. <b>Sandflies</b>: Toscana.",
        "Humans are <b>dead-end hosts</b> for WNV, JEV, Toscana; <b>amplifying hosts</b> for dengue, chikungunya, Zika (a viremic traveller can start a local outbreak)."
      ],
      visuals: [
        { type: "table", title: "Viruses and vectors", head: ["Virus", "Vector", "Reservoir", "Humans"], rows: [
          ["Dengue", "<i>Ae. aegypti</i>, <i>Ae. albopictus</i>", "Humans", "Amplifying"],
          ["Chikungunya", "<i>Aedes</i>", "Humans", "Amplifying"],
          ["Zika", "<i>Aedes</i> (+ sexual, vertical)", "Humans", "Amplifying"],
          ["Yellow fever", "<i>Aedes</i>, <i>Haemagogus</i>", "Primates", "Amplifying (urban)"],
          ["West Nile", "<i>Culex pipiens</i>", "<b>Birds</b>", "<b>Dead-end</b>"],
          ["Japanese encephalitis", "<i>Culex</i> (rice fields)", "Pigs, wading birds", "Dead-end"],
          ["Toscana", "<b>Sandflies</b>", "Unclear", "Dead-end"],
          ["Oropouche", "Biting midges", "Sloths, primates", "Amplifying"]
        ]},
        { type: "compare", title: "When they bite", cols: [
          { h: "Day", tone: "accent", items: ["<i>Aedes</i> (tiger mosquito)", "Peaks after dawn, before dusk", "Breeds in small containers"] },
          { h: "Dusk and night", items: ["<i>Culex</i>", "Sandflies (pass through ordinary nets)"] }
        ]}
      ]
    },
    "2": {
      summary: [
        "<b>Dengue</b> = most common arbovirus: ~390 million infections/year; <b>2024 record &gt;14 million cases</b>.",
        "Yellow fever: Africa and South America, <b>not Asia</b>. JE: rural Asia, children.",
        "Drivers: climate change, urbanization, travel; <i>Ae. albopictus</i> established in Italy.",
        "<b>Italy 2025</b>: chikungunya 384 autochthonous; <b>West Nile 779 local cases, 72 deaths</b> (Lazio, Campania); Toscana 113; dengue mostly imported.",
        "First temperate-country chikungunya outbreak: <b>Italy 2007</b>.",
        "Risk season in Italy: <b>June–November</b>. Febrile traveller: <b>exclude malaria first</b>."
      ],
      visuals: [
        { type: "bars", title: "Italy 2025: locally acquired cases", max: 779, rows: [
          { label: "West Nile", v: 779, t: "779 (72 deaths)", tone: "warn" },
          { label: "Chikungunya", v: 384, t: "384" },
          { label: "Toscana virus", v: 112, t: "112" },
          { label: "Dengue", v: 4, t: "4 (213 imported)" }
        ]},
        { type: "stats", items: [
          { v: "&gt;14 M", l: "dengue cases reported, 2024" },
          { v: "Jun–Nov", l: "local transmission season in Italy" },
          { v: "2007", l: "first chikungunya outbreak in Italy" }
        ]}
      ]
    },
    "3": {
      summary: [
        "Bite → skin dendritic cells → lymph nodes → <b>viremia</b> → organ by <b>tropism</b>.",
        "Dengue: <b>antibody-dependent enhancement</b> in a <b>second, different serotype</b> → more virus, cytokines.",
        "<b>Plasma leakage</b> (NS1, cytokines damage glycocalyx): transient 24–48 h, <b>around defervescence</b>.",
        "Chikungunya: virus persists in synovial macrophages → <b>chronic arthritis</b>.",
        "Zika: fetal <b>neural progenitors</b> → microcephaly; persists in semen.",
        "West Nile, JE: neurons incl. <b>anterior horn</b> → flaccid paralysis. Yellow fever: <b>midzonal hepatic necrosis</b> (Councilman bodies)."
      ],
      visuals: [
        { type: "flow", title: "Why secondary dengue is more dangerous", steps: [
          { h: "First infection (e.g. DENV-1)", p: "Lifelong immunity to DENV-1 only" },
          { h: "Second infection (DENV-2)", p: "Old antibodies bind but don't neutralize" },
          { h: "Antibody-dependent enhancement", p: "Complexes enter monocytes via Fc receptors" },
          { h: "More virus, cytokine storm", p: "Plasma leakage, shock", tone: "warn" }
        ]},
        { type: "table", title: "Tropism", head: ["Virus", "Target", "Result"], rows: [
          ["Dengue", "Endothelium, blood", "Leakage, thrombocytopenia"],
          ["Chikungunya", "Joints, tendons, muscle", "Disabling, chronic arthritis"],
          ["Zika", "Fetal brain, nerves", "Microcephaly, Guillain-Barré"],
          ["West Nile, JE", "Neurons, anterior horn", "Encephalitis, flaccid paralysis"],
          ["Yellow fever", "Liver (zone 2)", "Jaundice, bleeding, kidney failure"]
        ]}
      ]
    },
    "4": {
      summary: [
        "<b>Dengue</b>: fever, <b>retro-orbital pain</b>, myalgia, rash, leukopenia, thrombocytopenia.",
        "Phases: <b>febrile → critical (around defervescence, 24–48 h) → recovery</b>.",
        "<b>Warning signs</b>: abdominal pain, persistent vomiting, fluid accumulation, mucosal bleeding, lethargy, liver &gt;2 cm, <b>rising haematocrit + falling platelets</b>.",
        "Shock may start with <b>normal BP</b>: narrow pulse pressure, tachycardia.",
        "<b>Chikungunya</b>: sudden high fever + <b>disabling symmetric polyarthralgia</b>; chronic in 30–60%.",
        "<b>Zika</b>: mild, itchy rash, <b>conjunctivitis</b>; congenital syndrome, GBS.",
        "<b>West Nile</b>: 80% silent; &lt;1% neuroinvasive (elderly, immunocompromised). Yellow fever: Faget sign, toxic phase. <b>Toscana</b>: summer meningitis in central Italy."
      ],
      visuals: [
        { type: "timeline", title: "Dengue: three phases", points: [
          { at: "Days 1–3 (–7)", h: "Febrile", p: "High fever, rash, leukopenia" },
          { at: "Defervescence, 24–48 h", h: "Critical", p: "Plasma leakage, shock risk", tone: "warn" },
          { at: "Next 48–72 h", h: "Recovery", p: "Fluid reabsorption; overload if IV fluids continue", tone: "good" }
        ]},
        { type: "chips", title: "Dengue warning signs (any → hospital)", groups: [
          { h: "", items: ["Abdominal pain", "Persistent vomiting", "Fluid accumulation", "Mucosal bleeding", "Lethargy, restlessness", "Liver &gt;2 cm", "Rising haematocrit + falling platelets"] }
        ]},
        { type: "table", title: "Febrile traveller", head: ["", "Dengue", "Chikungunya", "Zika", "Malaria"], rows: [
          ["Fever", "High", "Very high", "Low / absent", "High"],
          ["Joint pain", "Moderate", "<b>Disabling</b>", "Mild", "No"],
          ["Rash", "Common", "Common", "<b>Itchy</b>", "Rare"],
          ["Conjunctivitis", "Rare", "Rare", "<b>Common</b>", "No"],
          ["Platelets", "<b>Very low</b>", "Mildly low", "Normal", "Low"],
          ["Key risk", "Leakage", "Chronic arthritis", "Pregnancy", "Death if missed"]
        ]}
      ]
    },
    "5": {
      summary: [
        "Suspect: fever after tropics (after <b>malaria</b>), fever + rash/arthralgia in Italian summer, <b>summer meningitis/encephalitis</b> (WNV, Toscana).",
        "<b>First week: RT-PCR</b> (+ <b>NS1</b> for dengue); <b>from day 4–5: IgM</b>.",
        "Flavivirus serology <b>cross-reacts</b> (incl. after vaccines) → confirm with <b>PRNT</b>.",
        "<b>CSF IgM diagnoses WNV/JE neuroinvasive disease</b>.",
        "Dengue: leukopenia, thrombocytopenia, <b>haematocrit ≥20% rise</b>, tourniquet test.",
        "Notify: a viremic case in summer triggers <b>vector control</b> around the home."
      ],
      visuals: [
        { type: "ranges", title: "Which test, when (days of illness)", max: 21, ticks: [0, 5, 7, 14, 21], rows: [
          { label: "RT-PCR (blood)", from: 1, to: 7, tone: "warn", txt: "Days 1–7" },
          { label: "Dengue NS1 antigen", from: 1, to: 7, txt: "Days 1–7" },
          { label: "IgM", from: 4, to: 21, txt: "From day 4–5" },
          { label: "IgG / paired sera, PRNT", from: 7, to: 21, txt: "From week 2" }
        ]},
        { type: "note", h: "Cross-reactivity", p: "Antibodies after dengue, Zika, West Nile, TBE, or yellow fever / JE / TBE / dengue vaccination can give false-positive flavivirus serology. Record travel and vaccines; confirm with neutralization (PRNT)." }
      ]
    },
    "6": {
      summary: [
        "<b>No antivirals</b>: supportive care.",
        "<b>Paracetamol</b>; <b>no NSAIDs or aspirin</b> (until dengue excluded). <b>No paracetamol in yellow fever</b> liver failure.",
        "<b>No corticosteroids, no prophylactic platelets</b>; crystalloids not colloids.",
        "Dengue groups: <b>A home</b> (oral fluids), <b>B hospital</b> (warning signs, comorbidities), <b>C emergency</b> (severe).",
        "Fluids to keep perfusion; <b>reduce as leakage ends</b> (overload in recovery). Falling haematocrit + instability → bleeding → transfuse.",
        "Chronic chikungunya arthritis: NSAIDs, short steroids, <b>methotrexate</b>."
      ],
      visuals: [
        { type: "compare", title: "WHO 2025: do and don't", cols: [
          { h: "Do", tone: "good", items: ["Paracetamol (not in yellow fever)", "Protocolized oral fluids", "Crystalloids for IV fluids", "Capillary refill, lactate to guide fluids", "IV N-acetylcysteine in YF liver failure"] },
          { h: "Don't", tone: "warn", items: ["NSAIDs, aspirin", "Systemic corticosteroids", "Prophylactic platelet transfusion", "Colloids", "Immunoglobulins (except GBS)"] }
        ]},
        { type: "ladder", title: "Dengue management groups", steps: [
          { h: "Group A · home", p: "No warning signs, drinking, passing urine: oral fluids, paracetamol, daily review", tone: "good" },
          { h: "Group B · hospital", p: "Warning signs or comorbidities / social risk: IV crystalloids if needed, haematocrit monitoring" },
          { h: "Group C · emergency", p: "Severe dengue: ICU, crystalloid boluses, transfusion for bleeding", tone: "warn" }
        ]}
      ]
    },
    "7": {
      summary: [
        "Dengue: daily haematocrit and platelets <b>until 48 h after defervescence</b>; discharge when afebrile 24–48 h, platelets rising.",
        "Counsel: a <b>second serotype is riskier</b>.",
        "Chikungunya: review joints at 3 weeks and 3 months; rheumatology if persistent.",
        "Zika: serial fetal ultrasound; infant head, brain, eyes, hearing. <b>Condoms 3 months (men), 2 months (women)</b>.",
        "Viremic dengue/chikungunya/Zika patients must <b>avoid mosquito bites</b>; no isolation needed."
      ],
      visuals: [
        { type: "cards", title: "After the acute illness", items: [
          { h: "Dengue", p: "Monitor until 48 h after fever ends", tag: "Second serotype riskier", tone: "warn" },
          { h: "Chikungunya", p: "Joints at 3 weeks and 3 months", tag: "Rheumatology" },
          { h: "Zika", p: "Pregnancy follow-up, safe sex", tag: "3 / 2 months" },
          { h: "West Nile, JE", p: "Rehabilitation", tag: "Sequelae" },
          { h: "Viremic patient in Italy", p: "Repellents, nets, screens", tag: "Prevent local spread" }
        ]}
      ]
    },
    "8": {
      summary: [
        "Bite prevention: <b>DEET</b>, icaridin, IR3535; long clothes; permethrin; screens. <i>Aedes</i> by day; <i>Culex</i>, sandflies at night.",
        "Vector control: <b>empty standing water</b>, larvicides; <i>Wolbachia</i> reduces dengue.",
        "Vaccines: <b>yellow fever</b> (live, one dose for life), <b>JE</b> (inactivated, 2 doses), <b>dengue TAK-003</b> (live, from age 4), <b>chikungunya</b> (VLP Vimkunya; live Ixchiq restricted).",
        "<b>Dengvaxia only for seropositive</b> people.",
        "Yellow fever vaccine contraindicated: infants &lt;6 months, thymus disease, severe immunosuppression.",
        "No vaccine for Zika, West Nile, Toscana, Oropouche."
      ],
      visuals: [
        { type: "table", title: "Vaccines", head: ["Vaccine", "Type", "Key point"], rows: [
          ["Yellow fever 17D", "Live", "One dose for life; not in severe immunosuppression"],
          ["Japanese encephalitis", "Inactivated", "2 doses; rural Asia travellers"],
          ["Dengue TAK-003", "Live, tetravalent", "EU from age 4, 2 doses"],
          ["Dengue CYD-TDV", "Live", "<b>Only if previous dengue</b>"],
          ["Chikungunya VLP", "Non-live", "Single dose from 12 y"],
          ["Zika, WNV, Toscana, Oropouche", "—", "None"]
        ]},
        { type: "compare", title: "Bite prevention", cols: [
          { h: "Personal", tone: "good", items: ["Repellents (DEET, icaridin)", "Long, light clothing", "Permethrin on clothes, nets", "Screens, air conditioning"] },
          { h: "Community", tone: "accent", items: ["Empty standing water", "Larvicides in drains", "Adulticides around cases", "<i>Wolbachia</i> mosquitoes"] }
        ]}
      ]
    }
  }
};
