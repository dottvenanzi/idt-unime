/* Revision layer for Chapter 10 — ABSSSI. Source: chapters/10-*.md */
window.REVISION = window.REVISION || {};
window.REVISION[10] = {
  sections: {
    "1": {
      summary: [
        "First question: <b>purulent or nonpurulent?</b>",
        "<b>Nonpurulent</b> (erysipelas, cellulitis): <b>β-hemolytic streptococci</b> (A, B, C, G).",
        "<b>Purulent</b> (abscess, furuncle, carbuncle): <b><i>S. aureus</i></b>, incl. CA-MRSA (often PVL+).",
        "NSTI <b>type I</b>: polymicrobial (anaerobes + Enterobacterales), diabetics, perineum (Fournier). <b>Type II</b>: GAS ± <i>S. aureus</i>, healthy hosts.",
        "Gas gangrene: <i>C. perfringens</i> (trauma); <b><i>C. septicum</i> → think colon cancer, neutropenia</b>.",
        "Exposure clues: seawater + cirrhosis → <i>Vibrio vulnificus</i>; dog bite + asplenia → <i>Capnocytophaga</i>."
      ],
      visuals: [
        { type: "compare", title: "Pus = staph, no pus = strep", cols: [
          { h: "Nonpurulent", tone: "accent", items: ["Erysipelas, cellulitis", "β-hemolytic streptococci", "Cultures usually negative"] },
          { h: "Purulent", tone: "warn", items: ["Abscess, furuncle, carbuncle", "<i>S. aureus</i> incl. MRSA", "PVL in CA-MRSA"] }
        ]},
        { type: "compare", title: "Necrotizing soft tissue infection", cols: [
          { h: "Type I · polymicrobial", items: ["Anaerobes + Enterobacterales + streptococci", "Older, diabetic, postoperative", "Perineum: Fournier's gangrene"] },
          { h: "Type II · monomicrobial", tone: "warn", items: ["Group A <i>Streptococcus</i> ± <i>S. aureus</i>", "Any age, healthy hosts", "Minor trauma", "Toxic shock syndrome"] },
          { h: "Clostridial myonecrosis", tone: "warn", items: ["<i>C. perfringens</i>: trauma", "<i>C. septicum</i>: colon cancer, neutropenia"] }
        ]},
        { type: "table", title: "Exposure clues", head: ["Exposure", "Pathogen"], rows: [
          ["Seawater, shellfish + liver disease", "<i>Vibrio vulnificus</i> (hemorrhagic bullae)"],
          ["Fresh water, leeches", "<i>Aeromonas hydrophila</i>"],
          ["Dog / cat bite", "<i>Pasteurella</i>; <i>Capnocytophaga</i> (asplenia)"],
          ["Human bite, clenched fist", "<i>Eikenella corrodens</i>"],
          ["Handling fish, meat", "<i>Erysipelothrix</i>"],
          ["Hot tub", "<i>Pseudomonas</i> folliculitis"],
          ["Neutropenia", "<i>P. aeruginosa</i> (ecthyma gangrenosum)"]
        ]}
      ]
    },
    "2": {
      summary: [
        "<b>ABSSSI</b> is a regulatory definition (lesion ≥75 cm²): cellulitis/erysipelas, wound infection, major abscess.",
        "Excludes diabetic foot, bites, burns, osteomyelitis, NSTI.",
        "Severity: <b>mild</b> (no systemic signs), <b>moderate</b> (systemic signs), <b>severe</b> (hypotension, organ dysfunction, immunocompromise, deeper infection, failed I&amp;D).",
        "Cellulitis risk factors: <b>tinea pedis / intertrigo</b>, lymphedema, venous insufficiency, obesity, previous cellulitis.",
        "CA-MRSA epidemic in the US; in Italy MRSA is mostly healthcare-associated.",
        "Recurrence is common: about <b>1 in 3 within a year</b> after ≥2 episodes."
      ],
      visuals: [
        { type: "ladder", title: "Severity", steps: [
          { h: "Mild", p: "No systemic signs", tone: "good" },
          { h: "Moderate", p: "Systemic signs of infection" },
          { h: "Severe", p: "Hypotension / organ dysfunction, immunocompromise, bullae or rapid progression, failed I&amp;D + oral antibiotics", tone: "warn" }
        ]},
        { type: "chips", title: "Risk factors", groups: [
          { h: "Cellulitis", items: ["Tinea pedis, toe-web intertrigo", "Lymphedema", "Venous insufficiency", "Saphenous vein harvest", "Obesity", "Previous cellulitis"] },
          { h: "NSTI", items: ["Diabetes", "Injection drug use", "Peripheral vascular disease", "Immunosuppression", "Recent surgery / trauma", "Varicella (children)"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "Entry through a <b>skin break</b>, often invisible (toe-web fissures).",
        "<b>Depth defines the syndrome</b>: erysipelas = upper dermis + lymphatics (sharp border); cellulitis = deep dermis + fat.",
        "Abscess: walled off by fibrin → antibiotics penetrate poorly → <b>drain</b>.",
        "GAS: M protein, <b>superantigens</b> → toxic shock.",
        "NSTI spreads along fascia, <b>thrombosis of perforators</b> → ischemic skin, bullae, <b>anesthesia</b>; deep tissue worse than skin suggests.",
        "Clostridia: α-toxin → myonecrosis, hemolysis, gas."
      ],
      visuals: [
        { type: "ladder", title: "Depth defines the infection", steps: [
          { h: "Epidermis", p: "Impetigo" },
          { h: "Hair follicle", p: "Folliculitis → furuncle → carbuncle" },
          { h: "Upper dermis + lymphatics", p: "Erysipelas (sharp, raised border)" },
          { h: "Deep dermis + subcutis", p: "Cellulitis; abscess if pus collects" },
          { h: "Superficial fascia", p: "Necrotizing fasciitis", tone: "warn" },
          { h: "Muscle", p: "Myonecrosis, pyomyositis", tone: "warn" }
        ]},
        { type: "flow", title: "Why NSTI fools you", steps: [
          { h: "Spread along fascial planes", p: "Toxins, enzymes" },
          { h: "Perforating vessels thrombose", p: "Skin becomes ischemic" },
          { h: "Dusky skin, bullae, necrosis", p: "Late signs" },
          { h: "Nerve destruction", p: "Pain → anesthesia", tone: "warn" }
        ]}
      ]
    },
    "4": {
      summary: [
        "<b>Erysipelas</b>: raised, sharp border, bright red, abrupt onset with high fever. <b>Cellulitis</b>: flat, poorly demarcated.",
        "Look for the <b>portal of entry</b> (between the toes).",
        "Abscess: fluctuant nodule; recurrent abscesses in a household → CA-MRSA.",
        "<b>NSTI early clue: pain out of proportion</b>, tense edema beyond erythema, rapid progression, toxicity.",
        "<b>Bilateral \"cellulitis\" is rare</b>: about 1 in 3 admitted cellulitis is a mimic (stasis dermatitis, DVT, gout, contact dermatitis)."
      ],
      visuals: [
        { type: "compare", title: "Erysipelas vs cellulitis", cols: [
          { h: "Erysipelas", tone: "accent", items: ["Raised, sharply demarcated", "Bright red, peau d'orange", "Leg or face", "Abrupt, high fever"] },
          { h: "Cellulitis", items: ["Flat, poorly demarcated", "Pink-red", "Leg, unilateral", "Gradual onset"] }
        ]},
        { type: "compare", title: "When to suspect NSTI", cols: [
          { h: "Early (subtle)", tone: "warn", items: ["<b>Pain out of proportion</b>", "Tense edema beyond erythema", "Rapid progression on antibiotics", "Systemic toxicity"] },
          { h: "Late (obvious)", tone: "warn", items: ["Hemorrhagic bullae", "Necrosis, dusky skin", "Crepitus", "Anesthesia", "Shock, toxic shock syndrome"] }
        ]},
        { type: "table", title: "Mimics (pseudocellulitis)", head: ["Mimic", "Clue"], rows: [
          ["Stasis dermatitis", "<b>Bilateral</b>, chronic, itchy, no fever"],
          ["Deep vein thrombosis", "Whole-leg swelling; ultrasound"],
          ["Gout", "Joint-centered, very painful"],
          ["Contact dermatitis", "Itch, vesicles, geometric shape"]
        ]}
      ]
    },
    "5": {
      summary: [
        "Diagnosis is <b>clinical</b>. <b>Mark the border</b> with date and time.",
        "<b>Culture pus</b> from abscesses. <b>Blood cultures not routine</b> in typical cellulitis.",
        "Blood cultures in: chemotherapy, neutropenia, immunodeficiency, immersion injury, animal bites, sepsis, NSTI.",
        "Ultrasound finds occult abscesses. CT/MRI for deep infection, but <b>imaging must never delay surgery</b>.",
        "NSTI: <b>surgical exploration is the gold standard</b>. LRINEC ≥6 is suggestive; <b>a low score doesn't exclude</b>."
      ],
      visuals: [
        { type: "table", title: "Which test, when", head: ["Test", "When"], rows: [
          ["Gram stain + culture of pus", "Abscess, purulent infection"],
          ["Blood cultures", "Not routine; yes in immunocompromise, bites, immersion, sepsis, NSTI"],
          ["Swab of intact skin / surface", "No: grows colonizers"],
          ["Ultrasound", "Occult abscess"],
          ["CT / MRI", "Deep infection, gas, collections"],
          ["Operative tissue cultures", "NSTI (incl. anaerobes)"]
        ]},
        { type: "note", h: "Surgical findings of NSTI", p: "Gray necrotic fascia, no resistance to blunt dissection, thin \"dishwater\" fluid, tissues that don't bleed." }
      ]
    },
    "6": {
      summary: [
        "<b>Source control first</b>: drain abscesses, debride NSTI. Elevate the limb, treat tinea and edema.",
        "<b>Abscess: incision and drainage</b>; adding an anti-staphylococcal oral agent gives a modest gain.",
        "<b>Nonpurulent: anti-streptococcal β-lactam</b> (penicillin, amoxicillin, cephalexin, flucloxacillin). <b>No routine MRSA coverage</b>.",
        "Cover MRSA in nonpurulent disease only with penetrating trauma, IDU, MRSA colonization, severe disease.",
        "TMP-SMX and doxycycline are weak on streptococci.",
        "<b>5–6 days</b> if improving; longer in severe disease.",
        "<b>NSTI: urgent debridement</b> + anti-MRSA + pip-tazo/carbapenem + <b>clindamycin</b> (toxin suppression, Eagle effect)."
      ],
      visuals: [
        { type: "algo", title: "Antibiotic choice", nodes: [
          { q: "Purulent?", opts: [
            { when: "Yes", to: "Incision and drainage ± oral anti-<i>S. aureus</i> agent; IV anti-MRSA if severe", tone: "warn" },
            { when: "No", to: "Anti-streptococcal β-lactam (oral if mild, IV if moderate)", tone: "good" }
          ]},
          { q: "NSTI suspected?", opts: [
            { when: "Yes", to: "Surgery now + anti-MRSA + pip-tazo or carbapenem + clindamycin", tone: "warn" }
          ]}
        ]},
        { type: "table", title: "Anti-MRSA agents", head: ["Route", "Agents"], rows: [
          ["Oral", "TMP-SMX, doxycycline, clindamycin, linezolid, tedizolid"],
          ["IV", "Vancomycin, daptomycin, linezolid, ceftaroline"],
          ["Long-acting", "Dalbavancin, oritavancin (1–2 infusions, avoid admission)"]
        ]},
        { type: "table", title: "Special situations", head: ["Situation", "Key point"], rows: [
          ["Animal / human bite", "Irrigate, amoxicillin-clavulanate, tetanus + rabies"],
          ["Confirmed GAS NSTI, gas gangrene", "Penicillin + clindamycin"],
          ["<i>Vibrio vulnificus</i>", "Doxycycline + ceftazidime"],
          ["Surgical site infection", "Open and drain the incision"],
          ["Diabetic foot", "Don't treat uninfected ulcers; probe-to-bone"]
        ]}
      ]
    },
    "7": {
      summary: [
        "Reassess at <b>48–72 h</b>.",
        "<b>Redness can spread in the first 24–48 h</b> on effective therapy: not failure if the patient is stable.",
        "Failure: undrained abscess, NSTI, resistant organism, <b>wrong diagnosis</b>, untreated predisposing factor.",
        "After recovery: treat tinea, edema, obesity to prevent recurrence."
      ],
      visuals: [
        { type: "timeline", title: "Expected course", points: [
          { at: "0–48 h", h: "Erythema may still spread", p: "Use the pen mark" },
          { at: "48–72 h", h: "Reassess", p: "Fever and pain settle first", tone: "good" },
          { at: "Day 5–6", h: "Stop if improving", p: "Swelling resolves later" }
        ]},
        { type: "table", title: "Not improving?", head: ["Cause", "Action"], rows: [
          ["Undrained abscess", "Ultrasound, drain"],
          ["NSTI / deep infection", "Surgeon, CT/MRI"],
          ["Resistant or unusual organism", "Culture, broaden by exposure"],
          ["Pseudocellulitis", "Re-examine, dermatology"]
        ]}
      ]
    },
    "8": {
      summary: [
        "<b>No vaccine</b> for GAS or <i>S. aureus</i>. Check <b>tetanus</b>; rabies after animal bites.",
        "Recurrent cellulitis: treat tinea, <b>compression</b> for edema, <b>penicillin prophylaxis</b> (benefit fades after stopping).",
        "Recurrent abscesses: <b>decolonization</b> (nasal mupirocin, chlorhexidine), hygiene, household contacts."
      ],
      visuals: [
        { type: "bars", title: "Recurrent leg cellulitis: recurrence rate", unit: "%", max: 40, rows: [
          { label: "No compression", v: 40, tone: "warn" },
          { label: "Compression", v: 15 },
          { label: "Placebo (12 months)", v: 37, tone: "warn" },
          { label: "Penicillin prophylaxis", v: 22 }
        ]}
      ]
    }
  }
};
