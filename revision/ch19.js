/* Revision layer for Chapter 19 — Invasive fungal infections. Source: chapters/19-*.md */
window.REVISION = window.REVISION || {};
window.REVISION[19] = {
  sections: {
    "1": {
      summary: [
        "<b><i>Aspergillus</i></b>: environmental <b>mould</b>; inhaled conidia (2–3 µm); <b>narrow septate hyphae, 45° branching</b>.",
        "<i>A. fumigatus</i> most common; <b><i>A. terreus</i> resistant to amphotericin B</b>; cryptic species often azole-resistant.",
        "Same fungus, different diseases: <b>ABPA</b> (asthma), <b>aspergilloma</b> (cavity), <b>IPA</b> (immunocompromised).",
        "<b>Mucorales</b>: broad, ribbon-like, pauci-septate, 90° branching; <b>voriconazole inactive</b>.",
        "<b><i>Candida</i></b>: yeasts of our own flora. <i>C. albicans</i> most common.",
        "<i>C. glabrata</i> reduced fluconazole susceptibility; <b><i>C. krusei</i> fluconazole-resistant</b>; <i>C. parapsilosis</i> catheters; <b><i>C. auris</i> MDR, outbreaks</b>."
      ],
      visuals: [
        { type: "compare", title: "Hyphae under the microscope", cols: [
          { h: "<i>Aspergillus</i>", tone: "accent", items: ["Narrow (3–6 µm)", "Regularly septate", "Acute-angle (45°) branching"] },
          { h: "Mucorales", tone: "warn", items: ["Broad, ribbon-like", "Pauci-septate", "Right-angle branching", "Voriconazole inactive"] }
        ]},
        { type: "table", title: "<i>Candida</i> species", head: ["Species", "Remember"], rows: [
          ["<i>C. albicans</i>", "Most common; usually fluconazole-susceptible"],
          ["<i>C. glabrata</i>", "Reduced fluconazole susceptibility; older patients"],
          ["<i>C. parapsilosis</i>", "Skin, hands, catheters, TPN, neonates"],
          ["<i>C. tropicalis</i>", "Neutropenia"],
          ["<i>C. krusei</i>", "<b>Intrinsically fluconazole-resistant</b>"],
          ["<i>C. auris</i>", "<b>Multidrug-resistant</b>, surfaces, outbreaks"]
        ]},
        { type: "compare", title: "<i>Aspergillus</i>: one fungus, three diseases", cols: [
          { h: "ABPA", items: ["Asthma, cystic fibrosis", "Hypersensitivity"] },
          { h: "Aspergilloma / chronic", items: ["Pre-existing cavity", "Colonization, slow invasion"] },
          { h: "Invasive (IPA)", tone: "warn", items: ["Immunocompromised, ICU", "Tissue and vessel invasion"] }
        ]}
      ]
    },
    "2": {
      summary: [
        "IPA hosts: <b>prolonged neutropenia</b> (&gt;10 days), AML/MDS, <b>allogeneic HSCT + GVHD</b>, steroids, BTK inhibitors, lung transplant, CGD.",
        "ICU without classic factors: <b>COPD on steroids, cirrhosis, severe influenza, COVID-19</b>.",
        "Azole-resistant <i>A. fumigatus</i> (<b>TR34/L98H</b>) selected by agricultural fungicides → found in azole-naïve patients.",
        "<i>Candida</i>: a top cause of hospital bloodstream infection; mortality ~30–40%; shift to non-<i>albicans</i>.",
        "IC risk: <b>CVC, broad-spectrum antibiotics, TPN, abdominal surgery/leak</b>, long ICU stay, multifocal colonization.",
        "<b>Candida score</b>: TPN 1, surgery 1, multifocal colonization 1, severe sepsis 2; &gt;2.5 = high risk."
      ],
      visuals: [
        { type: "compare", title: "Who gets what", cols: [
          { h: "Invasive aspergillosis", tone: "warn", items: ["Prolonged neutropenia", "Allogeneic HSCT, GVHD", "High-dose steroids", "Lung transplant", "Severe influenza, COVID-19", "COPD on steroids, cirrhosis"] },
          { h: "Invasive candidiasis", tone: "accent", items: ["Central venous catheter", "Broad-spectrum antibiotics", "Parenteral nutrition", "Abdominal surgery, leak", "Long ICU stay, dialysis", "Multifocal colonization"] }
        ]},
        { type: "table", title: "Candida score", head: ["Item", "Points"], rows: [
          ["Total parenteral nutrition", "1"],
          ["Surgery", "1"],
          ["Multifocal colonization", "1"],
          ["Severe sepsis", "2"]
        ], caption: "&gt;2.5 = higher risk; a low score has high negative predictive value." }
      ]
    },
    "3": {
      summary: [
        "IPA: <b>macrophages kill conidia, neutrophils kill hyphae</b>.",
        "Neutropenia → <b>angioinvasion</b> → infarct = nodule + hemorrhage = <b>halo sign</b>; neutrophil recovery → <b>air crescent</b>.",
        "Non-neutropenic: airway-invasive, less angioinvasive → <b>serum GM often negative</b>.",
        "Influenza/COVID-19 damage airway epithelium → tracheobronchitis.",
        "<i>Candida</i> enters blood from the <b>gut</b> (damaged mucosa) or <b>skin via the catheter</b> (biofilm).",
        "Neutrophils protect against invasive candidiasis; Th17 against mucosal (thrush in T-cell defects).",
        "Seeding: <b>eye</b>, kidney, liver/spleen, valves, bones."
      ],
      visuals: [
        { type: "flow", title: "IPA in the neutropenic host", steps: [
          { h: "Inhaled conidia", p: "Reach the alveoli" },
          { h: "Germinate into hyphae", p: "No neutrophils to kill them" },
          { h: "Angioinvasion", p: "Thrombosis, hemorrhagic infarct → halo sign", tone: "warn" },
          { h: "Neutrophil recovery", p: "Necrosis separates → air crescent, hemoptysis" }
        ]},
        { type: "compare", title: "How <i>Candida</i> reaches the blood", cols: [
          { h: "From the gut", items: ["Antibiotics → overgrowth", "Damaged mucosa (surgery, mucositis)"] },
          { h: "From the skin", tone: "warn", items: ["Catheter colonization", "Biofilm", "<i>C. parapsilosis</i>, hands"] }
        ]}
      ]
    },
    "4": {
      summary: [
        "IPA: <b>neutropenic fever persisting despite antibiotics</b>; cough, pleuritic pain, hemoptysis.",
        "Steroids blunt fever; in ICU: <b>worsening respiration despite antibiotics</b>.",
        "Other forms: tracheobronchitis, invasive sinusitis (black necrosis), brain.",
        "Candidemia = <b>sepsis not responding to antibiotics</b>; looks like bacterial sepsis.",
        "Eye (often silent early), abdomen, <b>hepatosplenic</b> (fever at neutrophil recovery, bull's-eye lesions), endocarditis, bone.",
        "<b>Colonization isn't infection</b>: <i>Candida</i> in sputum/BAL, asymptomatic candiduria → don't treat."
      ],
      visuals: [
        { type: "cards", title: "Forms of invasive candidiasis", items: [
          { h: "Candidemia", p: "Sepsis unresponsive to antibiotics", tag: "Never a contaminant", tone: "warn" },
          { h: "Ocular", p: "White fluffy retinal lesions", tag: "Fundoscopy" },
          { h: "Intra-abdominal", p: "After surgery, perforation, leak", tag: "Drain" },
          { h: "Hepatosplenic", p: "Fever at neutrophil recovery, bull's-eye lesions", tag: "Months of therapy" },
          { h: "Endocarditis", p: "Prosthetic valves, IDU; large vegetations", tag: "Surgery" },
          { h: "Osteoarticular", p: "Spondylodiscitis weeks–months later", tag: "" }
        ]},
        { type: "note", h: "Don't treat colonization", p: "<i>Candida</i> in sputum or BAL almost never means pneumonia; asymptomatic candiduria is usually catheter colonization." }
      ]
    },
    "5": {
      summary: [
        "IPA: <b>host factor + CT + mycology</b> → proven / probable / possible.",
        "<b>Chest CT</b>, not X-ray. <b>Halo early, air crescent late; reversed halo → mucormycosis</b>.",
        "<b>Galactomannan</b>: serum best in neutropenia; <b>BAL GM more sensitive</b>; prophylaxis lowers sensitivity.",
        "β-D-glucan is pan-fungal: not a criterion for IPA.",
        "IC: blood cultures detect only <b>~50%</b>; <b>β-D-glucan has high NPV</b> (false + with dialysis, albumin, IVIG, gauze); T2Candida.",
        "Species ID + susceptibility for every blood isolate."
      ],
      visuals: [
        { type: "ladder", title: "EORTC/MSGERC categories", steps: [
          { h: "Possible", p: "Host factor + clinical (CT) feature" },
          { h: "Probable", p: "Host factor + clinical feature + mycology (GM, PCR, culture)", tone: "accent" },
          { h: "Proven", p: "Histology with tissue damage, or culture from a sterile site", tone: "warn" }
        ]},
        { type: "table", title: "CT signs", head: ["Sign", "Meaning"], rows: [
          ["<b>Halo</b>", "Nodule + ground-glass; early, neutropenic"],
          ["<b>Air crescent</b>", "Late, at neutrophil recovery"],
          ["<b>Reversed halo</b>", "Think <b>mucormycosis</b>"]
        ]},
        { type: "compare", title: "Fungal biomarkers", cols: [
          { h: "Galactomannan", tone: "accent", items: ["<i>Aspergillus</i>-specific", "Serum: neutropenic patients", "BAL: more sensitive, ICU", "Less sensitive on prophylaxis"] },
          { h: "β-D-glucan", items: ["Pan-fungal (not Mucorales)", "High NPV for candidiasis", "False + dialysis, albumin, IVIG, gauze"] }
        ]}
      ]
    },
    "6": {
      summary: [
        "<b>IPA first-line: voriconazole, isavuconazole or posaconazole</b>; alternative <b>liposomal amphotericin B</b>.",
        "<b>TDM</b> for voriconazole and posaconazole; many CYP3A4 interactions. <b>Fluconazole has no anti-<i>Aspergillus</i> activity</b>.",
        "Reduce immunosuppression; neutrophil recovery is the strongest predictor. Duration ≥6–12 weeks.",
        "<b>Candidemia first-line: echinocandin</b>; step down to <b>fluconazole after 5–7 days</b> if stable, susceptible, cultures negative.",
        "<b>Remove the CVC</b>; drain collections. <b>14 days after first negative culture</b>.",
        "<b>Echinocandins don't reach eye or urine</b> → fluconazole for endophthalmitis and cystitis.",
        "No routine empiric antifungals in ICU."
      ],
      visuals: [
        { type: "compare", title: "First-line therapy", cols: [
          { h: "Invasive aspergillosis", tone: "warn", items: ["Voriconazole / isavuconazole / posaconazole", "Alternative: liposomal amphotericin B", "TDM (vori, posa)", "≥6–12 weeks"] },
          { h: "Candidemia", tone: "accent", items: ["Echinocandin", "Step-down to fluconazole at 5–7 d", "Remove the catheter", "14 d after first negative culture"] }
        ]},
        { type: "table", title: "Antifungal classes", head: ["Class", "Agents", "Remember"], rows: [
          ["Mould-active triazoles", "Voriconazole, isavuconazole, posaconazole", "CYP3A4 interactions; vori: vision, liver, skin"],
          ["Fluconazole", "", "Yeasts only; <b>no <i>Aspergillus</i></b>"],
          ["Polyenes", "Liposomal amphotericin B", "Also Mucorales; kidneys, K⁺, Mg²⁺"],
          ["Echinocandins", "Caspofungin, micafungin, anidulafungin, rezafungin", "Candidemia; poor eye/urine penetration"]
        ]},
        { type: "table", title: "When the choice changes", head: ["Situation", "Approach"], rows: [
          ["<i>C. krusei</i>", "Never fluconazole"],
          ["<i>C. glabrata</i>", "Echinocandin; fluconazole only if susceptible"],
          ["<i>C. auris</i>", "Echinocandin + contact precautions"],
          ["Endophthalmitis", "Fluconazole / voriconazole ± intravitreal, ≥4–6 weeks"],
          ["Symptomatic cystitis", "Fluconazole"]
        ]}
      ]
    },
    "7": {
      summary: [
        "IPA: CT at ~2 weeks; <b>lesions can grow in the first 7–10 days</b> (not failure); serial GM; TDM, liver, QT.",
        "Failure: check levels, resistance, <b>Mucorales</b>; switch class.",
        "Secondary prophylaxis before further immunosuppression.",
        "Candidemia: <b>blood cultures until negative</b>; persistent → catheter, abscess, thrombophlebitis, endocarditis.",
        "<b>Dilated fundoscopy</b> (first week; after recovery if neutropenic); echo if endocarditis possible."
      ],
      visuals: [
        { type: "chips", title: "Candidemia checklist", groups: [
          { h: "", items: ["Remove the catheter", "Repeat blood cultures until negative", "Dilated fundoscopy", "Echo if needed", "Species + susceptibility", "Step down at 5–7 days", "14 days from first negative culture"] }
        ]}
      ]
    },
    "8": {
      summary: [
        "<b>No vaccine</b>.",
        "Prophylaxis: <b>posaconazole</b> in AML/MDS induction and HSCT with GVHD; fluconazole pre-engraftment; not routine in ICU.",
        "Breakthrough on mould-active prophylaxis → think Mucorales.",
        "<i>Aspergillus</i>: HEPA rooms, protection during construction. <i>Candida</i>: catheter bundles, hand hygiene.",
        "<i>C. auris</i>: screening, contact precautions, environmental cleaning, notification."
      ],
      visuals: [
        { type: "table", title: "Antifungal prophylaxis", head: ["Population", "Drug"], rows: [
          ["AML/MDS induction", "Posaconazole"],
          ["Allogeneic HSCT with GVHD", "Posaconazole"],
          ["Allogeneic HSCT, pre-engraftment", "Fluconazole (no mould cover)"],
          ["Lung transplant", "Inhaled amphotericin B or triazole"],
          ["ICU", "Not routine"]
        ]}
      ]
    }
  }
};
