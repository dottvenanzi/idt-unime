/* Revision layer for Chapter 5 — HAP and VAP. Source: chapters/05-hap-vap.md */
window.REVISION = window.REVISION || {};
window.REVISION[5] = {
  sections: {
    "1": {
      summary: [
        "Most common: <b><i>S. aureus</i> (incl. MRSA)</b> and <b><i>P. aeruginosa</i></b>.",
        "Other gram-negatives: <i>E. coli</i>, <i>Klebsiella</i>, <i>Enterobacter</i>, <i>Acinetobacter</i>: sources of ESBL and carbapenemases.",
        "Often <b>polymicrobial</b> and <b>MDR</b>.",
        "Early in the stay, without MDR risk: CAP-like flora (pneumococcus, <i>H. influenzae</i>, MSSA). <b>The longer the stay, the more MDR</b>.",
        "Viruses matter in general wards; viruses and fungi in the immunocompromised."
      ],
      visuals: [
        { type: "timeline", title: "Flora shifts with time in hospital", points: [
          { at: "Early, no MDR risk", h: "CAP-like", p: "<i>S. pneumoniae</i>, <i>H. influenzae</i>, MSSA" },
          { at: "≥ 5 days", h: "Hospital flora", p: "MRSA, <i>Pseudomonas</i>, <i>Klebsiella</i>, <i>Acinetobacter</i>", tone: "warn" }
        ]},
        { type: "cards", title: "Pathogen groups", items: [
          { h: "<i>S. aureus</i> incl. MRSA", p: "Most common", tag: "Drives empiric choice", tone: "warn" },
          { h: "<i>P. aeruginosa</i>", p: "Most common", tag: "Drives empiric choice", tone: "warn" },
          { h: "Enterobacterales, <i>Acinetobacter</i>", p: "<i>E. coli</i>, <i>Klebsiella</i>, <i>Enterobacter</i>", tag: "ESBL, carbapenemases" },
          { h: "Streptococci", p: "Incl. pneumococcus", tag: "Early-onset" },
          { h: "Viruses / fungi", p: "Viruses in general wards; fungi in immunocompromised", tag: "Don't forget" }
        ]}
      ]
    },
    "2": {
      summary: [
        "<b>HAP</b>: ≥48 h after admission, not incubating. <b>VAP</b>: ventilated &gt;48 h, <b>or within 48 h of extubation</b>.",
        "<b>NV-HAP</b>: not ventilated. <b>VHAP</b>: NV-HAP that then needs ventilation (worst outcomes).",
        "&lt;48 h after admission = <b>CAP</b>.",
        "Three MDR risk factors: <b>known MDR colonization, stay ≥5 days, antibiotics in the last 90 days</b>.",
        "VAP in 5–15% of ventilated patients, highest risk in the first days. NV-HAP is more frequent in absolute numbers."
      ],
      visuals: [
        { type: "timeline", title: "Timing defines the entity", points: [
          { at: "&lt; 48 h after admission", h: "CAP", p: "Chapter 4" },
          { at: "≥ 48 h, not ventilated", h: "NV-HAP", p: "If later ventilated: VHAP", tone: "warn" },
          { at: "Ventilated &gt; 48 h", h: "VAP", p: "" , tone: "warn"},
          { at: "≤ 48 h after extubation", h: "Still VAP", p: "" }
        ]},
        { type: "compare", title: "The three MDR risk factors", cols: [
          { h: "1 · Known colonization", tone: "warn", items: ["Previous MDR culture"] },
          { h: "2 · Long stay", tone: "warn", items: ["Hospitalized ≥5 days"] },
          { h: "3 · Recent antibiotics", tone: "warn", items: ["Within the previous 90 days"] }
        ]},
        { type: "chips", title: "Risk factors for NV-HAP", groups: [
          { h: "", items: ["Older age", "Dysphagia", "Sedation, reduced consciousness", "Thoracic / abdominal surgery", "Immobility", "Chronic lung disease"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "Main route: <b>microaspiration</b> of oropharyngeal (and GI) flora.",
        "In hospital the oropharynx is quickly <b>colonized by gram-negatives and <i>S. aureus</i></b>.",
        "Sedation, dysphagia and the <b>supine position</b> favor aspiration.",
        "<b>Endotracheal tube</b>: bypasses defenses, secretions leak around the cuff, <b>biofilm</b> on the tube is a reservoir."
      ],
      visuals: [
        { type: "flow", title: "Why ventilated patients get pneumonia", steps: [
          { h: "Oropharynx colonized by hospital flora", p: "Illness, antibiotics, dry mouth, poor oral hygiene" },
          { h: "Defenses bypassed", p: "Tube impairs cough and mucociliary clearance" },
          { h: "Secretions pool above the cuff and leak", p: "Supine position, gastric distension" },
          { h: "Biofilm on the tube", p: "Reservoir of bacteria" },
          { h: "Pneumonia", p: "Depends on inoculum, virulence, host response", tone: "warn" }
        ]}
      ]
    },
    "4": {
      summary: [
        "New infiltrate + infectious features: <b>new fever, purulent secretions, leukocytosis, worse oxygenation</b>.",
        "<b>No sign or combination</b> is highly sensitive or specific.",
        "Ventilated: more secretions, <b>rising FiO₂/PEEP</b>. Leukopenia or hypothermia possible.",
        "Older and sedated patients: maybe only worse oxygenation, confusion or instability."
      ],
      visuals: [
        { type: "compare", title: "Clinical clues", cols: [
          { h: "Infectious features", tone: "accent", items: ["New fever (or hypothermia)", "Purulent sputum / tracheal secretions", "Leukocytosis (or leukopenia)", "Decline in oxygenation"] },
          { h: "On the ventilator", items: ["More secretions", "Higher FiO₂ / PEEP", "Worse mechanics"] }
        ]}
      ]
    },
    "5": {
      summary: [
        "IDSA/ATS: <b>clinical diagnosis</b> = new infiltrate + infectious features, plus microbiology.",
        "Many mimics: atelectasis, ARDS, edema, pulmonary embolism, drug reactions.",
        "VAP is confirmed <b>retrospectively</b> (cultures in 2–3 days): treat empirically first.",
        "<b>Positive culture + normal X-ray = tracheobronchitis</b>.",
        "VAC/IVAC are <b>surveillance</b> definitions only.",
        "Quantitative cultures: thresholds fall as sampling gets more distal: <b>ETA 10⁶, BAL 10⁴, PSB 10³ cfu/mL</b>. BAL neutrophils &lt;50% help exclude VAP."
      ],
      visuals: [
        { type: "ladder", title: "Quantitative culture thresholds (more distal → lower threshold)", steps: [
          { h: "Endotracheal aspirate", p: "≥10⁶ cfu/mL · samples the colonized proximal airway" },
          { h: "BAL / mini-BAL", p: "≥10⁴ cfu/mL" },
          { h: "Protected specimen brush", p: "≥10³ cfu/mL · tiny, uncontaminated distal sample", tone: "warn" }
        ]},
        { type: "compare", title: "Pneumonia or not?", cols: [
          { h: "VAP / HAP", tone: "accent", items: ["New infiltrate", "Infectious features", "Pathogen in respiratory sample"] },
          { h: "Tracheobronchitis", items: ["Positive culture", "<b>Normal chest X-ray</b>"] },
          { h: "Mimics", tone: "warn", items: ["Atelectasis", "ARDS", "Pulmonary edema", "Pulmonary embolism", "Drug reaction"] }
        ]},
        { type: "note", h: "Multiplex PCR on BAL", p: "Faster tailoring and shorter courses, but it cannot separate colonization from infection, and one RCT showed no effect on mortality or length of stay." }
      ]
    },
    "6": {
      summary: [
        "Choose empiric therapy from: <b>prior cultures, recent antibiotics (use a different class), local antibiogram</b>, severity, Gram stain, MDR risk, toxicity.",
        "<b>Severe disease</b> = new septic shock (VAP or NV-HAP) or new ventilatory support (NV-HAP) → <b>cover MRSA + MDR gram-negatives</b>.",
        "MRSA: <b>vancomycin or linezolid</b>. Gram-negatives: <b>antipseudomonal β-lactam</b>; add a second class (FQ or aminoglycoside) if severe or high MDR risk.",
        "Carbapenem-resistant: newer agents with susceptibility testing and ID advice.",
        "<b>7 days</b> for most; longer for bacteremic <i>S. aureus</i>, abscess, empyema, slow response, immunocompromise."
      ],
      visuals: [
        { type: "algo", title: "Empiric breadth", nodes: [
          { q: "Severe? (new septic shock, or new ventilatory support in NV-HAP)", opts: [
            { when: "Yes", to: "Anti-MRSA + antipseudomonal β-lactam ± second antipseudomonal class", tone: "warn" },
            { when: "No", to: "Tailor to MDR risk factors, local antibiogram, Gram stain", tone: "good" }
          ]}
        ]},
        { type: "table", title: "Drug classes", head: ["Target", "Examples"], rows: [
          ["MRSA", "Vancomycin, linezolid"],
          ["<i>Pseudomonas</i> / gram-negatives", "Piperacillin-tazobactam, cefepime, ceftazidime, meropenem, imipenem"],
          ["Second antipseudomonal (different class)", "Ciprofloxacin, levofloxacin, or an aminoglycoside"],
          ["Carbapenem-resistant", "Ceftazidime-avibactam, meropenem-vaborbactam (by susceptibility)"]
        ]}
      ]
    },
    "7": {
      summary: [
        "<b>Reassess at 48–72 h</b>: de-escalate or stop according to cultures and response. Safe and reduces resistance.",
        "<b>Negative MRSA nasal PCR</b> (high NPV) → stop anti-MRSA therapy: less renal failure.",
        "Not improving → resistant or unusual pathogen, empyema or abscess, non-infectious mimic."
      ],
      visuals: [
        { type: "timeline", title: "The day 2–3 review", points: [
          { at: "Day 0", h: "Empiric", p: "Broad if severe" },
          { at: "48 – 72 h", h: "Cultures + response", p: "Narrow, stop anti-MRSA if nasal PCR negative", tone: "good" },
          { at: "Day 7", h: "Stop", p: "For most patients" }
        ]}
      ]
    },
    "8": {
      summary: [
        "No vaccine: <b>infection control</b>.",
        "All patients: avoid intubation and reintubation, early mobilization, <b>head of bed 30–45°</b>, <b>toothbrushing without chlorhexidine</b>.",
        "Ventilated: <b>minimize sedation</b>, daily sedation interruption + spontaneous breathing trials, change circuits only if soiled.",
        "Principle: <b>shorten tube exposure</b> and <b>reduce aspiration</b>."
      ],
      visuals: [
        { type: "compare", title: "Prevention bundle", cols: [
          { h: "Everyone", tone: "good", items: ["Avoid intubation / reintubation", "Early mobilization", "Head of bed 30–45°", "Toothbrushing oral care"] },
          { h: "Ventilated", tone: "accent", items: ["Minimize sedation", "Daily sedation interruption", "Spontaneous breathing trials", "Circuit change only if soiled"] },
          { h: "No longer", tone: "warn", items: ["Chlorhexidine oral care"] }
        ]}
      ]
    }
  }
};
