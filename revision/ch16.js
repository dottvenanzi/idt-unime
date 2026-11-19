/* Revision layer for Chapter 16 — Viral hepatitis. Source: chapters/16-*.md */
window.REVISION = window.REVISION || {};
window.REVISION[16] = {
  sections: {
    "1": {
      summary: [
        "<b>HAV, HEV</b>: fecal-oral, acute, self-limiting (HEV chronic only in immunosuppressed).",
        "<b>HBV, HDV, HCV</b>: blood, sex, perinatal; chronic → cirrhosis, HCC.",
        "<b>HBV is the only DNA virus</b>: <b>cccDNA</b> + integration → suppressed, rarely eradicated.",
        "HBsAg = envelope; <b>HBeAg = high replication</b>; <b>anti-HBc = any contact</b> (never from vaccine).",
        "<b>HDV</b> is defective: <b>no HBsAg, no HDV</b>; shares the NTCP receptor.",
        "<b>HCV</b>: no proofreading → quasispecies, no vaccine; no DNA stage → <b>curable</b>. DAA targets: NS3/4A, NS5A, NS5B.",
        "HEV gt 1–2: human, water epidemics. <b>Gt 3–4: zoonotic (pigs, wild boar)</b>, Europe."
      ],
      visuals: [
        { type: "table", title: "The five viruses", head: ["", "Genome", "Route", "Incubation", "Chronic?", "Vaccine"], rows: [
          ["<b>HAV</b>", "RNA", "Fecal-oral", "~4 wk", "No", "Yes"],
          ["<b>HBV</b>", "<b>DNA</b>", "Blood, sex, perinatal", "2–4 months", "Age-dependent", "Yes"],
          ["<b>HDV</b>", "RNA (defective)", "As HBV", "As HBV", "Superinfection", "HBV vaccine"],
          ["<b>HCV</b>", "RNA", "Blood", "6–8 wk", "Most adults", "<b>No</b>"],
          ["<b>HEV</b>", "RNA", "Fecal-oral, pork", "5–6 wk", "Immunosuppressed only", "China only"]
        ]},
        { type: "cards", title: "HBV antigens", items: [
          { h: "HBsAg", p: "Envelope; huge excess in serum", tag: "Infection present" },
          { h: "HBeAg", p: "Secreted; absent in precore mutants", tag: "High replication", tone: "warn" },
          { h: "Anti-HBc", p: "Not induced by vaccine", tag: "Any contact" },
          { h: "cccDNA", p: "Nuclear minichromosome, untouched by NAs", tag: "Why no eradication", tone: "warn" }
        ]}
      ]
    },
    "2": {
      summary: [
        "2022: <b>254 million</b> chronic HBV, <b>50 million</b> chronic HCV; <b>1.3 million deaths</b> (83% HBV).",
        "~4.5% of HBsAg+ have HDV. WHO goal: elimination by <b>2030</b>.",
        "HCV today mainly via <b>injecting drug use</b>; HAV: food, travel, MSM.",
        "<b>HBV chronicity depends on age</b>: ~90% perinatal, 25–50% age 1–5, <b>&lt;5% adults</b>.",
        "<b>HEV gt 3</b> is now the most common cause of acute viral hepatitis in many European countries."
      ],
      visuals: [
        { type: "bars", title: "HBV: risk of chronic infection by age at infection", unit: "%", max: 90, rows: [
          { label: "Perinatal", v: 90, t: "~90%", tone: "warn" },
          { label: "1–5 years", v: 38, t: "25–50%" },
          { label: "Immunocompetent adult", v: 5, t: "&lt;5%" }
        ]},
        { type: "stats", items: [
          { v: "254 M", l: "living with HBV" },
          { v: "50 M", l: "living with HCV" },
          { v: "1.3 M", l: "deaths a year" }
        ]}
      ]
    },
    "3": {
      summary: [
        "Damage is <b>immune-mediated</b> (CD8 T cells): strong response = severe acute but clearance; weak = mild but persistent.",
        "HBV four phases: HBeAg+ infection, HBeAg+ hepatitis, HBeAg− infection, HBeAg− hepatitis.",
        "<b>HBV causes HCC even without cirrhosis</b>.",
        "<b>Reactivation</b> with <b>anti-CD20</b>, HSCT, high-dose steroids, and HCV DAAs in co-infection.",
        "HDV <b>superinfection</b> → &gt;80% chronic, fast cirrhosis (most severe viral hepatitis).",
        "HCV: ~1/4 clear; cirrhosis 15–30% over 20–30 y; HCC 1–4%/y once cirrhotic; cryoglobulinemia.",
        "HEV: gt 1 in <b>pregnancy</b> → liver failure; gt 3 in transplant → <b>chronic</b>."
      ],
      visuals: [
        { type: "table", title: "Chronic HBV phases", head: ["Phase", "HBeAg", "HBV DNA", "ALT"], rows: [
          ["1 · HBeAg+ infection", "+", "Very high", "Normal"],
          ["2 · HBeAg+ hepatitis", "+", "High", "<b>Raised</b>"],
          ["3 · HBeAg− infection", "−", "Low (&lt;2,000 IU/mL)", "Normal"],
          ["4 · HBeAg− hepatitis", "−", "&gt;2,000, fluctuating", "<b>Raised</b>"]
        ]},
        { type: "compare", title: "HDV", cols: [
          { h: "Co-infection", tone: "good", items: ["HBV + HDV together", "Acute, sometimes biphasic", "Chronic &lt;5%"] },
          { h: "Superinfection", tone: "warn", items: ["HDV on chronic HBV", "Severe flare", "Chronic &gt;80%", "Fast cirrhosis, HCC"] }
        ]},
        { type: "flow", title: "Natural history of HCV", steps: [
          { h: "Acute infection", p: "Mostly silent; ~1/4 clear" },
          { h: "Chronic hepatitis", p: "RNA &gt;6 months" },
          { h: "Cirrhosis", p: "15–30% over 20–30 years", tone: "warn" },
          { h: "HCC", p: "1–4% per year once cirrhotic", tone: "warn" }
        ]}
      ]
    },
    "4": {
      summary: [
        "Acute hepatitis looks the same for all viruses: <b>prodrome</b> (malaise, nausea) → <b>jaundice</b>, dark urine, pale stools.",
        "ALT &gt; AST, often <b>&gt;10× ULN</b>. Most infections anicteric (children with HAV, acute HCV).",
        "<b>Encephalopathy + INR ≥1.5 = acute liver failure</b> → transplant center.",
        "HBV: PAN, glomerulonephritis. <b>HCV: cryoglobulinemia</b>, B-cell lymphoma, porphyria cutanea tarda, lichen planus, diabetes.",
        "HEV: Guillain-Barré, neuralgic amyotrophy.",
        "Chronic: silent until cirrhosis (ascites, varices, encephalopathy) or HCC."
      ],
      visuals: [
        { type: "flow", title: "Acute viral hepatitis", dir: "row", steps: [
          { h: "Prodrome", p: "Malaise, nausea, RUQ pain; arthralgia/urticaria in HBV" },
          { h: "Icteric phase", p: "Jaundice, dark urine, pale stools" },
          { h: "Convalescence", p: "Weeks; fatigue lingers" }
        ]},
        { type: "note", h: "Acute liver failure", p: "Encephalopathy + INR ≥1.5 without previous liver disease. Higher risk: HAV in older adults or chronic liver disease, HBV ± HDV, HEV gt 1 in pregnancy." },
        { type: "table", title: "Extrahepatic clues", head: ["Virus", "Manifestations"], rows: [
          ["HBV", "Polyarteritis nodosa, glomerulonephritis, serum sickness-like"],
          ["HCV", "Mixed cryoglobulinemia, B-cell NHL, porphyria cutanea tarda, lichen planus, diabetes"],
          ["HEV", "Guillain-Barré, neuralgic amyotrophy, glomerulonephritis"]
        ]}
      ]
    },
    "5": {
      summary: [
        "Acute hepatitis panel: <b>anti-HAV IgM, HBsAg + anti-HBc IgM, anti-HCV + HCV RNA, anti-HEV IgM</b>.",
        "Test HBV (HBsAg, anti-HBc, anti-HBs) <b>before immunosuppression</b> and before HCV DAAs.",
        "<b>Isolated anti-HBs = vaccinated</b>; anti-HBc + anti-HBs = resolved; anti-HBc IgM only marker in <b>window period</b>.",
        "Every HBsAg+: <b>anti-HDV</b>, anti-HCV, HIV, anti-HAV, fibrosis staging.",
        "HCV: anti-HCV → <b>HCV RNA</b> (reflex). Antibody persists for life, doesn't protect.",
        "HEV in immunosuppressed: <b>RNA required</b>.",
        "Fibrosis: <b>elastography</b>, FIB-4, APRI; biopsy rarely."
      ],
      visuals: [
        { type: "table", title: "Reading HBV serology", head: ["HBsAg", "Anti-HBc", "IgM anti-HBc", "Anti-HBs", "Meaning"], rows: [
          ["−", "−", "−", "−", "Susceptible → vaccinate"],
          ["−", "−", "−", "+", "<b>Vaccinated</b>"],
          ["−", "+", "−", "+", "<b>Resolved</b> (reactivation risk)"],
          ["+", "+", "+", "−", "<b>Acute</b>"],
          ["+", "+", "−", "−", "<b>Chronic</b> (&gt;6 months)"],
          ["−", "+", "−", "−", "Isolated anti-HBc → HBV DNA"]
        ]},
        { type: "algo", title: "HCV testing", nodes: [
          { q: "Anti-HCV positive?", opts: [
            { when: "No", to: "No infection (test RNA if immunosuppressed or acute suspected)", tone: "good" },
            { when: "Yes", to: "HCV RNA", next: 1 }
          ]},
          { q: "HCV RNA detectable?", opts: [
            { when: "Yes", to: "Current infection → treat", tone: "warn" },
            { when: "No", to: "Resolved (or false-positive antibody)" }
          ]}
        ]}
      ]
    },
    "6": {
      summary: [
        "Acute: supportive; avoid alcohol and hepatotoxins. Severe acute HBV → NA. <b>Acute HCV → treat now</b>.",
        "HBV goal: suppress DNA; ideal <b>HBsAg loss</b>. Treat hepatitis (DNA &gt;2,000 + raised ALT/fibrosis), <b>any cirrhosis with detectable DNA</b>, pregnancy with DNA &gt;200,000.",
        "HBV drugs: <b>entecavir, tenofovir</b> (long-term) or <b>PegIFN</b> (finite). Never stop NAs in cirrhosis.",
        "Prophylaxis before <b>rituximab</b>/HSCT in HBsAg+ or high-risk anti-HBc+.",
        "HDV: <b>bulevirtide</b> (blocks NTCP) ± PegIFN; NAs don't work on HDV.",
        "HCV: <b>treat all</b>; pangenotypic DAAs <b>8–12 weeks</b>, SVR12 &gt;95%. No protease inhibitors in decompensated cirrhosis; <b>amiodarone + sofosbuvir</b> → bradycardia.",
        "Chronic HEV: reduce immunosuppression, then <b>ribavirin</b> (teratogenic)."
      ],
      visuals: [
        { type: "table", title: "Treatment by virus", head: ["Virus", "Therapy", "Endpoint"], rows: [
          ["HAV", "Supportive", "Recovery"],
          ["HBV", "Entecavir / tenofovir (indefinite) or PegIFN (48 wk)", "DNA suppression; ideally HBsAg loss"],
          ["HDV", "Bulevirtide ± PegIFN", "HDV RNA response"],
          ["HCV", "Sofosbuvir/velpatasvir 12 wk or glecaprevir/pibrentasvir 8 wk", "<b>SVR12 = cure</b>"],
          ["HEV (chronic)", "Reduce immunosuppression, ribavirin 3 months", "RNA clearance"]
        ]},
        { type: "compare", title: "HBV: NAs vs interferon", cols: [
          { h: "Entecavir, tenofovir", tone: "accent", items: ["Oral, well tolerated", "High barrier to resistance", "Usually indefinite", "HBsAg loss rare"] },
          { h: "Pegylated interferon", tone: "warn", items: ["Finite (~48 weeks)", "More HBsAg loss in selected patients", "Many side effects", "Not in decompensated cirrhosis or pregnancy"] }
        ]}
      ]
    },
    "7": {
      summary: [
        "Acute HBV: HBsAg at 6 months; <b>&gt;6 months = chronic</b>.",
        "Chronic HBV: lifelong ALT, DNA, HBsAg; on tenofovir check kidney.",
        "<b>HCC surveillance: ultrasound every 6 months</b> (± AFP) in cirrhosis and high-risk HBV.",
        "HCV: confirm SVR12; discharge if no advanced fibrosis; <b>F3–F4 keep HCC surveillance for life</b>; retest RNA yearly if ongoing risk."
      ],
      visuals: [
        { type: "compare", title: "After HCV cure (SVR12)", cols: [
          { h: "No advanced fibrosis", tone: "good", items: ["Cured", "Discharge", "Retest RNA yearly if still at risk"] },
          { h: "F3–F4 (advanced fibrosis, cirrhosis)", tone: "warn", items: ["Ultrasound ± AFP every 6 months for life", "Variceal screening", "SVR reduces, doesn't eliminate HCC risk"] }
        ]}
      ]
    },
    "8": {
      summary: [
        "<b>HAV</b>: inactivated vaccine, 2 doses; PEP within 2 weeks (vaccine; Ig in infants, immunocompromised, liver disease).",
        "<b>HBV</b>: recombinant, 3 doses; protection = <b>anti-HBs ≥10 mIU/mL</b>; birth dose; mandatory in Italy since 1991. <b>Also prevents HDV</b>.",
        "Mother-to-child: screen all pregnancies; <b>tenofovir if DNA &gt;200,000</b>; newborn <b>vaccine + HBIG within 12–24 h</b>; breastfeeding OK.",
        "<b>HCV: no vaccine, no PEP</b>; harm reduction, treatment as prevention.",
        "HEV: cook pork and game; safe water."
      ],
      visuals: [
        { type: "flow", title: "Preventing mother-to-child HBV transmission", steps: [
          { h: "Screen HBsAg in every pregnancy", p: "" },
          { h: "HBV DNA &gt;200,000 IU/mL?", p: "Tenofovir from weeks 24–28", tone: "accent" },
          { h: "Birth", p: "Vaccine + HBIG within 12–24 h", tone: "warn" },
          { h: "Complete the series", p: "Test infant HBsAg and anti-HBs" }
        ]},
        { type: "table", title: "Vaccines", head: ["Virus", "Vaccine"], rows: [
          ["HAV", "Inactivated, 2 doses"],
          ["HBV (and HDV)", "Recombinant HBsAg, 3 doses"],
          ["HCV", "None"],
          ["HEV", "Licensed only in China"]
        ]}
      ]
    }
  }
};
