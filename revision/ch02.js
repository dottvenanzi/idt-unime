/* Revision layer for Chapter 2 — Meningitis. Source: chapters/02-meningitis.md */
window.REVISION = window.REVISION || {};
window.REVISION[2] = {
  sections: {
    "1": {
      summary: [
        "Adults: <b><i>S. pneumoniae</i></b> and <b><i>N. meningitidis</i></b>. Neonates: <b>GBS, <i>E. coli</i>, <i>Listeria</i></b>.",
        "<b><i>Listeria</i></b> (gram-positive bacillus, food-borne): neonates, <b>&gt;50 years</b>, pregnancy, immunosuppression. <b>Resistant to all cephalosporins</b>.",
        "After neurosurgery, shunts, drains: <b><i>S. aureus</i>, CoNS, gram-negatives incl. <i>Pseudomonas</i></b>.",
        "Pneumococcus has <b>lower meningitis breakpoints</b> (EUCAST): always check them.",
        "Main differentials: <b>viral</b> (enteroviruses most common, HSV-2, VZV, Toscana, TBE, West Nile), <b>tuberculous</b>, <b>cryptococcal</b>."
      ],
      visuals: [
        { type: "table", title: "Who causes it, by age and setting", head: ["Patient", "Main pathogens"], rows: [
          ["Neonate &lt;1 month", "GBS, <i>E. coli</i>, <i>Listeria</i>"],
          ["1–23 months", "Pneumococcus, meningococcus, GBS, <i>H. influenzae</i>, <i>E. coli</i>"],
          ["2–50 years", "<b>Meningococcus, pneumococcus</b>"],
          ["&gt;50 years / immunocompromised", "Pneumococcus, meningococcus, <b><i>Listeria</i></b>, gram-negatives"],
          ["Skull fracture, CSF leak", "Pneumococcus, <i>H. influenzae</i>, group A strep"],
          ["Neurosurgery, shunt, drain", "<i>S. aureus</i>, CoNS, gram-negatives incl. <i>Pseudomonas</i>, <i>C. acnes</i>"]
        ]},
        { type: "cards", title: "The four classic bacteria", items: [
          { h: "<i>S. pneumoniae</i>", p: "Gram + lancet-shaped diplococci; capsule = virulence and vaccine target", tag: "Highest mortality", tone: "warn" },
          { h: "<i>N. meningitidis</i>", p: "Gram − \"coffee bean\" diplococci; serogroups A, B, C, W, X, Y", tag: "Endotoxin → purpura" },
          { h: "<i>H. influenzae</i> b", p: "Gram − coccobacillus", tag: "Rare after Hib vaccine" },
          { h: "<i>L. monocytogenes</i>", p: "Gram + bacillus, intracellular; soft cheeses, deli meats", tag: "Not covered by cephalosporins", tone: "warn" }
        ]}
      ]
    },
    "2": {
      summary: [
        "WHO: about <b>1 in 6</b> patients with bacterial meningitis dies; <b>1 in 5</b> survivors has severe sequelae.",
        "Conjugate vaccines (Hib, pneumococcal, meningococcal) cut incidence; median age has risen; pneumococcal <b>serotype replacement</b> partly offsets the gain.",
        "Mortality: <b>pneumococcal ≈30%</b> vs meningococcal ≈7%.",
        "Europe: meningococcal disease is rare, <b>serogroup B</b> dominates; peaks in infants and adolescents.",
        "<b>African meningitis belt</b>: dry-season meningococcal epidemics; serogroup A almost gone after MenAfriVac; now C, W, X.",
        "Risk factors: asplenia, <b>complement deficiency or eculizumab</b>, HIV, cochlear implant, CSF leak, ENT infection, crowding (Hajj, barracks)."
      ],
      visuals: [
        { type: "bars", title: "Adult mortality by pathogen (Dutch cohort)", unit: "%", max: 40, rows: [
          { label: "All bacterial meningitis", v: 21 },
          { label: "<i>S. pneumoniae</i>", v: 30, tone: "warn" },
          { label: "<i>N. meningitidis</i>", v: 7 }
        ]},
        { type: "chips", title: "Risk factors", groups: [
          { h: "Host", items: ["Extremes of age", "Asplenia, sickle cell", "Complement deficiency (C5–C9)", "Eculizumab, ravulizumab", "HIV, immunosuppression", "Alcohol, diabetes"] },
          { h: "Anatomy", items: ["Cochlear implant", "CSF leak", "Otitis, sinusitis, mastoiditis"] },
          { h: "Setting", items: ["Dormitories, barracks", "Mass gatherings (Hajj)", "Meningitis belt in dry season"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "<b>Nasopharyngeal colonization → invasion and bacteremia</b> (capsule resists complement) → crossing of the blood–brain barrier (choroid plexus).",
        "Other routes: contiguous ENT infection, CSF leak, neurosurgery; <i>Listeria</i> from the gut.",
        "CSF has little complement and immunoglobulin: bacteria <b>multiply freely</b>.",
        "<b>Inflammation causes the damage</b> (worse after antibiotic-induced lysis): edema, raised ICP, vasculitis and infarcts, hydrocephalus, cochlear injury.",
        "This is why <b>dexamethasone</b> is given <b>before or with</b> the first antibiotic dose."
      ],
      visuals: [
        { type: "flow", title: "Five steps to meningitis", steps: [
          { h: "Colonization of the nasopharynx", p: "Adhesins, pili, IgA1 protease, capsule" },
          { h: "Invasion and bacteremia", p: "Capsule resists complement: asplenia, complement deficiency" },
          { h: "Crossing the blood–brain barrier", p: "Choroid plexus, microvessels" },
          { h: "Free replication in CSF", p: "Little complement or antibody" },
          { h: "Inflammation", p: "TNF, IL-1, IL-6, neutrophils; boosted by bacterial lysis", tone: "warn" }
        ]},
        { type: "compare", title: "What inflammation does", cols: [
          { h: "Brain", tone: "warn", items: ["Cerebral edema, raised ICP → herniation", "Vasculitis, thrombosis → infarcts", "Hydrocephalus"] },
          { h: "Ear", items: ["Cochlear injury → sensorineural hearing loss (mostly pneumococcus)"] },
          { h: "Meningococcal sepsis", items: ["Septic shock, DIC", "Purpura fulminans", "Adrenal hemorrhage (Waterhouse–Friderichsen)"] }
        ]}
      ]
    },
    "4": {
      summary: [
        "<b>Classic triad</b> (fever, neck stiffness, altered mental status) in only <b>44%</b>, but <b>95%</b> have <b>2 of 4</b>: headache, fever, neck stiffness, altered mental status.",
        "Kernig and Brudzinski: specific, <b>not sensitive</b>.",
        "<b>Non-blanching petechial or purpuric rash</b> = meningococcus until proven otherwise.",
        "Infants: fever or hypothermia, irritability, poor feeding, <b>bulging fontanelle</b>; neck stiffness often absent.",
        "Confusion, behavior change, seizures or focal signs → think <b>encephalitis</b> (HSV-1) → aciclovir.",
        "<b>TB</b>: subacute over 1–3 weeks, cranial nerve palsies (VI). <b>Cryptococcus</b>: insidious headache in advanced HIV, very high pressure."
      ],
      visuals: [
        { type: "bars", title: "How often the classic signs are present (adults)", unit: "%", max: 100, rows: [
          { label: "At least 2 of 4 symptoms", v: 95 },
          { label: "Classic triad", v: 44, tone: "warn" },
          { label: "Focal neurological signs", v: 33 },
          { label: "Coma on admission", v: 14 }
        ]},
        { type: "compare", title: "Bacterial, viral, TB, cryptococcal: the clinical tempo", cols: [
          { h: "Bacterial", tone: "warn", items: ["Hours", "Toxic, rash, shock possible"] },
          { h: "Viral", tone: "good", items: ["Acute, less toxic", "Normal consciousness", "Enterovirus rash; HSV-2 genital lesions"] },
          { h: "Tuberculous", items: ["Subacute, 1–3 weeks", "Weight loss, cranial nerve VI palsy", "Hyponatremia, hydrocephalus"] },
          { h: "Cryptococcal", items: ["Weeks", "Advanced HIV (CD4 &lt;100)", "Mild meningism, visual/hearing loss from high pressure"] }
        ]},
        { type: "chips", title: "Complications", groups: [
          { h: "Neurological", items: ["Raised ICP, herniation", "Seizures", "Stroke, venous sinus thrombosis", "Hydrocephalus", "Hearing loss"] },
          { h: "Systemic", items: ["Septic shock, DIC", "Hyponatremia (SIADH)", "ARDS", "Limb ischemia → amputation"] }
        ]}
      ]
    },
    "5": {
      summary: [
        "Do in parallel: <b>ABC → 2 blood culture sets → LP → dexamethasone + antibiotics within 1 h</b>.",
        "<b>CT before LP</b> only if: focal deficit, new seizure, GCS &lt;10, severe immunocompromise.",
        "If LP is delayed: <b>blood cultures → dexamethasone + antibiotics → CT → LP</b>.",
        "CSF: opening pressure, cells, <b>CSF/blood glucose ratio</b>, protein, Gram stain, culture, PCR.",
        "Bacterial: <b>&gt;1,000 neutrophils, ratio ≤0.4, protein &gt;1 g/L</b>. Viral: lymphocytes, normal glucose.",
        "TB: Xpert Ultra, large CSF volume, MRI basal enhancement. Cryptococcus: <b>CrAg</b>. <b>HIV test for everyone</b>."
      ],
      visuals: [
        { type: "algo", title: "Suspected bacterial meningitis", nodes: [
          { q: "Start at once", opts: [{ when: "Always", to: "ABC, severity, 2 blood culture sets", next: true }] },
          { q: "Focal deficit, new seizure, GCS &lt;10 or severe immunocompromise?", opts: [
            { when: "No", to: "LP now → dexamethasone + antibiotics within 1 h", tone: "good" },
            { when: "Yes (or shock, coagulopathy)", to: "Dexamethasone + antibiotics first → CT → LP when safe", tone: "warn" }
          ]}
        ], caption: "After antibiotics, CSF cells, biochemistry and PCR stay informative for some hours; culture yield falls." },
        { type: "table", title: "CSF patterns", head: ["", "Bacterial", "Viral", "Tuberculous", "Cryptococcal"], rows: [
          ["Opening pressure", "↑", "Normal / ↑", "↑", "<b>Markedly ↑</b>"],
          ["White cells /µL", "<b>&gt;1,000, neutrophils</b>", "10–500, lymphocytes", "50–500, lymphocytes", "Low–moderate, lymphocytes"],
          ["CSF:blood glucose", "<b>≤0.4</b>", "Normal", "<b>Very low</b>", "Normal / low"],
          ["Protein g/L", "<b>&gt;1</b>", "Normal / mild ↑", "<b>1–5</b>", "↑"],
          ["Key test", "Gram, culture, PCR", "Enterovirus, HSV, VZV PCR", "Xpert MTB/RIF Ultra, culture", "CrAg, India ink"]
        ], caption: "Normal: pressure &lt;20 cmH₂O, &lt;5 cells, ratio ≥0.6, protein &lt;0.45 g/L. Early viral can be neutrophilic; partially treated bacterial can look aseptic." }
      ]
    },
    "6": {
      summary: [
        "Antibiotics <b>within 1 hour</b>; never wait for CT or CSF.",
        "1 month–50 years: <b>ceftriaxone/cefotaxime ± vancomycin</b> (where resistant pneumococci occur).",
        "&gt;50 years, immunocompromised, pregnant, alcohol: <b>+ ampicillin/amoxicillin</b> for <i>Listeria</i>.",
        "Healthcare-associated: <b>vancomycin + cefepime, ceftazidime or meropenem</b>; remove infected devices.",
        "<b>Dexamethasone</b> before or with the first dose, 4 days; benefit mainly in <b>pneumococcal</b> meningitis in high-income settings. Not in neonates; <b>never in cryptococcal</b> meningitis.",
        "TB meningitis: 2 months HRZE + 10 months HR, with corticosteroids. Cryptococcal: liposomal amphotericin + flucytosine, therapeutic LPs, delay ART.",
        "Droplet precautions for the first 24 h; notify public health."
      ],
      visuals: [
        { type: "ladder", title: "Empiric regimen by patient", steps: [
          { h: "Neonate", p: "Ampicillin + cefotaxime (or + aminoglycoside)" },
          { h: "1 month – 50 years", p: "Ceftriaxone or cefotaxime ± vancomycin (or rifampicin)" },
          { h: "&gt;50 y, immunocompromised, pregnant, alcohol", p: "As above + ampicillin/amoxicillin (<i>Listeria</i>)" },
          { h: "Post-neurosurgery, shunt, drain", p: "Vancomycin + cefepime, ceftazidime or meropenem", tone: "warn" }
        ], caption: "Severe β-lactam allergy: specialist alternatives, e.g. vancomycin + moxifloxacin; co-trimoxazole for <i>Listeria</i>." },
        { type: "ranges", title: "Duration by pathogen (days, to scale)", max: 21, ticks: [0, 7, 14, 21], rows: [
          { label: "<i>N. meningitidis</i>", from: 7, to: 7 },
          { label: "<i>H. influenzae</i>", from: 7, to: 10 },
          { label: "<i>S. pneumoniae</i>", from: 10, to: 14 },
          { label: "<i>S. agalactiae</i>", from: 14, to: 21 },
          { label: "Gram-negative bacilli", from: 21, to: 21, tone: "warn" },
          { label: "<i>L. monocytogenes</i>", from: 21, to: 21, tone: "warn", note: "≥" }
        ]},
        { type: "compare", title: "Dexamethasone: yes or no", cols: [
          { h: "Give", tone: "good", items: ["Suspected community-acquired bacterial meningitis", "Adults and children beyond the neonatal period", "Before or with first antibiotic, 4 days", "TB meningitis (adjunct)"] },
          { h: "Stop or avoid", tone: "warn", items: ["Not pneumococcus or Hib → stop", "Neonates", "Low-income, high-HIV settings: no proven benefit", "<b>Cryptococcal meningitis: harmful</b>"] }
        ]}
      ]
    },
    "7": {
      summary: [
        "Expect improvement within <b>48 h</b>. If not: <b>repeat LP</b> and image. No routine end-of-treatment LP.",
        "Imaging for deterioration: hydrocephalus, infarct, venous thrombosis, subdural empyema, abscess. Treat ENT source.",
        "<b>Hearing test for every survivor</b>, early after pneumococcal meningitis (cochlear ossification can prevent an implant).",
        "Recurrent pneumococcal → look for <b>CSF leak</b>, Ig deficiency, asplenia. Recurrent meningococcal or rare serogroups → <b>complement</b> (CH50, AH50). HIV test in all."
      ],
      visuals: [
        { type: "timeline", title: "Follow-up", points: [
          { at: "48 h", h: "Improving?", p: "If not: repeat LP + imaging", tone: "warn" },
          { at: "Before discharge", h: "Hearing test", p: "Urgent after pneumococcus" },
          { at: "Months", h: "Neuro-cognitive follow-up", p: "School, scars, amputations" },
          { at: "Recurrence", h: "Look for a cause", p: "CSF leak, complement, HIV" }
        ]}
      ]
    },
    "8": {
      summary: [
        "Vaccines: <b>Hib, PCV, MenC/MenACWY, MenB</b>; Men5CV for the meningitis belt; BCG for TB meningitis in children.",
        "<b>Eculizumab/ravulizumab</b>: MenACWY + MenB, and sometimes antibiotic prophylaxis.",
        "Meningococcal <b>close contacts</b>: chemoprophylaxis within 24 h: <b>ciprofloxacin</b> single dose, rifampicin 2 days, or <b>ceftriaxone</b> (pregnancy).",
        "Hib: rifampicin for households with unvaccinated young children. <b>Pneumococcus: no contact prophylaxis</b>.",
        "Intrapartum prophylaxis prevents early-onset GBS; food safety prevents <i>Listeria</i>; CrAg screening in advanced HIV."
      ],
      visuals: [
        { type: "compare", title: "Who gets meningococcal chemoprophylaxis", cols: [
          { h: "Yes", tone: "warn", items: ["Household members", "Intimate contacts", "HCWs exposed to secretions without a mask (intubation, suction)"] },
          { h: "No", tone: "good", items: ["Routine HCW contact without secretions", "Contacts of pneumococcal meningitis"] },
          { h: "Drugs", tone: "accent", items: ["Ciprofloxacin single dose", "Rifampicin 2 days", "Ceftriaxone IM single dose (pregnancy)"] }
        ]},
        { type: "table", title: "Vaccines", head: ["Vaccine", "Who"], rows: [
          ["Hib conjugate", "All infants (hexavalent)"],
          ["Pneumococcal conjugate", "Infants; adults by age and risk (asplenia, cochlear implant, CSF leak)"],
          ["MenACWY", "Adolescents; travelers to the belt; <b>Hajj/Umrah</b>; asplenia, complement deficiency or inhibitors"],
          ["MenB", "Infants in Italy; high-risk groups; outbreaks"],
          ["Men5CV (ACWYX)", "African meningitis belt"],
          ["BCG", "Young children: TB meningitis, miliary TB"]
        ]}
      ]
    }
  }
};
