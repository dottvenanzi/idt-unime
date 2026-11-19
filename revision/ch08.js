/* Revision layer for Chapter 8 — Gastroenteritis and C. difficile infection. Source: chapters/08-gastroenteritis-cdi.md */
window.REVISION = window.REVISION || {};
window.REVISION[8] = {
  sections: {
    "1": {
      summary: [
        "Most acute gastroenteritis is <b>viral</b>: <b>norovirus</b> in all ages, <b>rotavirus</b> in unvaccinated infants.",
        "Bacteria: <i>Campylobacter</i>, non-typhoidal <i>Salmonella</i>, <i>Shigella</i>, <b>STEC</b>, ETEC (traveler's diarrhea), <i>Vibrio</i>.",
        "Preformed toxins: <i>S. aureus</i>, <i>B. cereus</i> (vomiting within hours), <i>C. perfringens</i>.",
        "Parasites: <i>Giardia</i>, <i>Cryptosporidium</i>, <i>Cyclospora</i>, <i>E. histolytica</i>: think of them when diarrhea lasts &gt;1–2 weeks.",
        "<b><i>C. difficile</i></b>: spore-forming anaerobic gram-positive rod; disease is caused by <b>toxins A and B</b>; spores survive alcohol."
      ],
      visuals: [
        { type: "cards", title: "Who causes diarrhea", items: [
          { h: "Viruses", p: "Norovirus, rotavirus, adenovirus 40/41, astrovirus", tag: "Most common" },
          { h: "Invasive bacteria", p: "<i>Campylobacter</i>, <i>Salmonella</i>, <i>Shigella</i>", tag: "Fever, blood" },
          { h: "STEC (e.g. O157:H7)", p: "Shiga toxin", tag: "HUS risk", tone: "warn" },
          { h: "Toxin-mediated", p: "<i>S. aureus</i>, <i>B. cereus</i>, <i>C. perfringens</i>, ETEC, <i>V. cholerae</i>", tag: "Watery" },
          { h: "Parasites", p: "<i>Giardia</i>, <i>Cryptosporidium</i>, <i>Cyclospora</i>, <i>E. histolytica</i>", tag: "Persistent" },
          { h: "<i>C. difficile</i>", p: "Spores + toxins A/B", tag: "Antibiotic-associated", tone: "warn" }
        ]}
      ]
    },
    "2": {
      summary: [
        "Exposure history points to the pathogen: food, travel, animals, day care, antibiotics, hospital.",
        "CDI by onset: <b>healthcare-facility onset</b> (&gt;3 days after admission), <b>community-onset healthcare-associated</b> (within 12 weeks of discharge), <b>community-associated</b>.",
        "<b>Recurrence</b> = new episode within <b>8 weeks</b> of a previous one; it affects about <b>1 in 4</b> patients.",
        "Main CDI risk factors: <b>antibiotics</b> (clindamycin, fluoroquinolones, cephalosporins, carbapenems), <b>age &gt;65</b>, hospitalization, PPIs, immunosuppression, IBD."
      ],
      visuals: [
        { type: "table", title: "Exposure clues", head: ["Exposure", "Think of"], rows: [
          ["Poultry, unpasteurized milk", "<i>Campylobacter</i>, <i>Salmonella</i>"],
          ["Undercooked ground beef, raw vegetables", "STEC"],
          ["Eggs, reptiles, backyard poultry", "<i>Salmonella</i>"],
          ["Raw shellfish", "Norovirus, <i>Vibrio</i>"],
          ["Fried rice, reheated food", "<i>B. cereus</i>"],
          ["Cruise ship, nursing home outbreak", "Norovirus"],
          ["Day care", "<i>Shigella</i>, <i>Giardia</i>, rotavirus, <i>Cryptosporidium</i>"],
          ["Travel to low-income country", "ETEC, <i>Campylobacter</i>, <i>Shigella</i>, parasites"],
          ["Recent antibiotics / hospital", "<i>C. difficile</i>"]
        ]},
        { type: "timeline", title: "CDI classification by onset", points: [
          { at: "&gt; 3 days after admission", h: "Healthcare-facility onset", p: "", tone: "warn" },
          { at: "≤ 12 weeks after discharge", h: "Community-onset, healthcare-associated", p: "" },
          { at: "No recent healthcare", h: "Community-associated", p: "" },
          { at: "≤ 8 weeks after an episode", h: "Recurrence", p: "About 1 in 4", tone: "warn" }
        ]},
        { type: "chips", title: "CDI risk factors", groups: [
          { h: "", items: ["Antibiotics (clindamycin, FQ, cephalosporins, carbapenems)", "Age &gt; 65", "Hospital / long-term care", "PPIs", "Immunosuppression", "IBD", "Chemotherapy"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "<b>Secretory</b> (toxins, small bowel): large watery stools, no fever. <b>Inflammatory</b> (colon invasion): fever, blood, small stools. <b>Penetrating</b> (<i>S.</i> Typhi, <i>Yersinia</i>): systemic illness.",
        "<b>HUS</b> after STEC: <b>hemolytic anemia + thrombocytopenia + acute kidney injury</b>, 5–10 days after diarrhea starts, mostly in children.",
        "Guillain–Barré syndrome can follow <i>Campylobacter</i>; reactive arthritis follows invasive enteritis.",
        "CDI: antibiotics disrupt the microbiota → spores germinate → <b>toxins A/B</b> damage the colon → colitis, pseudomembranes."
      ],
      visuals: [
        { type: "compare", title: "Three mechanisms", cols: [
          { h: "Secretory", items: ["Small bowel, toxins", "Large-volume watery", "No fever, no blood", "Cholera, ETEC, norovirus"] },
          { h: "Inflammatory", tone: "warn", items: ["Colon, invasion / cytotoxin", "Small, frequent, bloody", "Fever, tenesmus", "<i>Shigella</i>, <i>Campylobacter</i>, STEC, <i>C. difficile</i>"] },
          { h: "Penetrating", tone: "accent", items: ["Crosses mucosa to lymphatics / blood", "Fever, systemic illness", "Diarrhea may be absent", "<i>S.</i> Typhi, <i>Yersinia</i>"] }
        ]},
        { type: "flow", title: "How <i>C. difficile</i> causes disease", steps: [
          { h: "Antibiotics disrupt the microbiota", p: "Loss of colonization resistance, altered bile acids" },
          { h: "Spores ingested or already present", p: "Germinate in the colon" },
          { h: "Toxins A and B", p: "Damage epithelium, inflammation" },
          { h: "Colitis", p: "Diarrhea, pseudomembranes, toxic megacolon", tone: "warn" }
        ]},
        { type: "note", h: "HUS triad", p: "Microangiopathic hemolytic anemia, thrombocytopenia and acute kidney injury, typically 5–10 days after STEC diarrhea began." }
      ]
    },
    "4": {
      summary: [
        "The <b>incubation period</b> hints at the cause: vomiting within 1–6 h = <b>preformed toxin</b>.",
        "Bloody diarrhea with little or no fever: think <b>STEC</b>.",
        "Assess <b>dehydration</b>: thirst, dry mucosa, reduced urine, tachycardia, hypotension.",
        "CDI: watery diarrhea, abdominal pain, fever, leukocytosis. <b>Ileus may hide diarrhea</b> in severe cases."
      ],
      visuals: [
        { type: "ranges", title: "Incubation periods (hours)", max: 240, unit: " h", ticks: [0, 48, 96, 168, 240], rows: [
          { label: "<i>S. aureus</i>, <i>B. cereus</i> (emetic)", from: 1, to: 6, tone: "warn", txt: "1–6 h" },
          { label: "<i>C. perfringens</i>", from: 8, to: 16, txt: "8–16 h" },
          { label: "Norovirus", from: 12, to: 48, txt: "12–48 h" },
          { label: "ETEC", from: 24, to: 72, txt: "1–3 d" },
          { label: "<i>Salmonella</i>, <i>Shigella</i>", from: 24, to: 72, txt: "1–3 d" },
          { label: "<i>Campylobacter</i>", from: 48, to: 120, txt: "2–5 d" },
          { label: "STEC", from: 72, to: 96, tone: "warn", txt: "3–4 d (1–10)" },
          { label: "<i>Giardia</i>, <i>Cryptosporidium</i>, <i>Cyclospora</i>", from: 168, to: 240, txt: "1–2 weeks" }
        ]},
        { type: "compare", title: "Bedside clues", cols: [
          { h: "Upper GI / toxin", items: ["Vomiting dominates", "Onset within hours", "Several people after the same meal"] },
          { h: "Colitis", tone: "warn", items: ["Fever", "Blood or mucus", "Tenesmus", "Lower abdominal pain"] },
          { h: "Severe CDI", tone: "warn", items: ["Leukocytosis", "Rising creatinine", "Ileus (diarrhea may stop)", "Megacolon, shock"] }
        ]}
      ]
    },
    "5": {
      summary: [
        "Most acute watery diarrhea needs <b>no stool test</b>.",
        "Test if: <b>bloody stools, fever, severe illness, immunocompromise, outbreak, diarrhea &gt;7 days</b>, food handlers.",
        "CDI testing only if <b>≥3 unformed stools in 24 h</b> and <b>no laxatives in the last 48 h</b>.",
        "Two-step: <b>GDH or NAAT</b> (sensitive) → <b>toxin EIA</b> (specific). No <b>test of cure</b>; don't test infants &lt;1 year.",
        "Severe CDI: <b>WBC ≥15 × 10⁹/L</b> or <b>creatinine &gt;1.5 mg/dL</b>. Fulminant: hypotension, shock, ileus, megacolon."
      ],
      visuals: [
        { type: "algo", title: "Testing for <i>C. difficile</i>", nodes: [
          { q: "≥3 unformed stools in 24 h, no laxatives in 48 h?", opts: [
            { when: "No", to: "Don't test (colonization is common)", tone: "good" },
            { when: "Yes", to: "GDH or NAAT", next: 1 }
          ]},
          { q: "GDH / NAAT positive?", opts: [
            { when: "Negative", to: "CDI unlikely", tone: "good" },
            { when: "Positive", to: "Toxin EIA", next: 2 }
          ]},
          { q: "Toxin positive?", opts: [
            { when: "Yes", to: "CDI: treat", tone: "warn" },
            { when: "No", to: "Possible colonization: clinical judgment" }
          ]}
        ]},
        { type: "chips", title: "Stool testing for gastroenteritis is indicated if…", groups: [
          { h: "", items: ["Bloody diarrhea", "Fever", "Severe dehydration / sepsis", "Immunocompromise", "Diarrhea &gt; 7 days", "Outbreak", "Food handler, day care"] }
        ]},
        { type: "ladder", title: "CDI severity", steps: [
          { h: "Non-severe", p: "WBC &lt;15 × 10⁹/L and creatinine &lt;1.5 mg/dL", tone: "good" },
          { h: "Severe", p: "WBC ≥15 × 10⁹/L or creatinine &gt;1.5 mg/dL" },
          { h: "Fulminant", p: "Hypotension or shock, ileus, megacolon", tone: "warn" }
        ]}
      ]
    },
    "6": {
      summary: [
        "Cornerstone: <b>rehydration</b>, ideally <b>oral rehydration solution</b>; zinc in children in low-income settings.",
        "Loperamide: only in adults <b>without fever or blood</b>.",
        "Antibiotics not routinely. <b>Never for STEC</b> (more HUS). Non-typhoidal <i>Salmonella</i>: only high-risk. Treat <i>Shigella</i>, enteric fever, severe <i>Campylobacter</i> (azithromycin).",
        "CDI: <b>stop the inciting antibiotic</b>. First episode: <b>fidaxomicin</b> (oral vancomycin alternative). Metronidazole only for non-severe if nothing else.",
        "Fulminant: <b>oral vancomycin + IV metronidazole</b> ± rectal vancomycin, surgical consult. <b>IV vancomycin doesn't reach the colon</b>.",
        "Recurrence: fidaxomicin or vancomycin taper/pulse. <b>≥2 recurrences: fecal microbiota transplantation</b>."
      ],
      visuals: [
        { type: "table", title: "Antibiotics in gastroenteritis", head: ["Pathogen", "Antibiotic?"], rows: [
          ["STEC", "<b>No</b>: increases HUS risk"],
          ["Non-typhoidal <i>Salmonella</i>", "Only if high risk (infants, &gt;50 y with vascular disease, immunocompromised)"],
          ["<i>Shigella</i>", "Yes (by susceptibility)"],
          ["<i>Campylobacter</i>", "If severe or high risk: azithromycin"],
          ["<i>V. cholerae</i>", "Fluids first; antibiotic shortens illness"],
          ["Enteric fever (<i>S.</i> Typhi / Paratyphi)", "Always"],
          ["<i>Giardia</i>", "Metronidazole or tinidazole"],
          ["<i>E. histolytica</i>", "Metronidazole, then paromomycin (luminal)"],
          ["<i>Cryptosporidium</i>", "Nitazoxanide; ART in HIV"]
        ]},
        { type: "ladder", title: "CDI treatment by episode", steps: [
          { h: "First episode", p: "Fidaxomicin; alternative oral vancomycin" },
          { h: "Fulminant", p: "Oral (± rectal) vancomycin + IV metronidazole, surgery consult", tone: "warn" },
          { h: "First recurrence", p: "Fidaxomicin, or vancomycin taper / pulse" },
          { h: "≥ 2nd recurrence", p: "Fecal microbiota transplantation", tone: "good" }
        ]}
      ]
    },
    "7": {
      summary: [
        "Most gastroenteritis resolves in days; diarrhea &gt;2 weeks → look for parasites or non-infectious causes.",
        "After STEC: watch for <b>HUS</b> (blood count, creatinine, urine output).",
        "CDI: response in <b>3–5 days</b>; <b>no test of cure</b>; recurrence within <b>8 weeks</b> is common."
      ],
      visuals: [
        { type: "timeline", title: "After treatment", points: [
          { at: "3–5 days", h: "Clinical response", p: "Fewer stools, falling WBC" },
          { at: "5–10 days after STEC diarrhea", h: "HUS window", p: "Blood count, creatinine", tone: "warn" },
          { at: "≤ 8 weeks", h: "CDI recurrence window", p: "Don't retest if asymptomatic", tone: "warn" }
        ]}
      ]
    },
    "8": {
      summary: [
        "Vaccines: <b>rotavirus</b> (infants), <b>typhoid conjugate</b>, <b>oral cholera</b>.",
        "<b>WASH</b>: safe water, sanitation, hand hygiene, food safety.",
        "Norovirus and <i>C. difficile</i> spores are <b>not killed by alcohol</b>: wash with <b>soap and water</b>, clean with <b>chlorine</b>.",
        "Food handlers stay off work until <b>48 h</b> after symptoms resolve.",
        "CDI: <b>antibiotic stewardship</b>, contact precautions until ≥48 h after diarrhea resolves, sporicidal disinfection."
      ],
      visuals: [
        { type: "compare", title: "Prevention", cols: [
          { h: "Vaccines", tone: "good", items: ["Rotavirus", "Typhoid conjugate", "Oral cholera"] },
          { h: "Community", tone: "accent", items: ["Safe water, sanitation", "Food safety", "Exclude food handlers 48 h"] },
          { h: "Hospital (CDI)", tone: "warn", items: ["Antibiotic stewardship", "Contact precautions", "Soap and water, not alcohol", "Chlorine-based cleaning"] }
        ]}
      ]
    }
  }
};
