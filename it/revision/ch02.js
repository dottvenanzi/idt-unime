/* Livello di ripasso per il Capitolo 2 — Meningiti. Fonte: chapters-it/02-meningitis.md */
window.REVISION = window.REVISION || {};
window.REVISION[2] = {
  sections: {
    "1": {
      summary: [
        "Adulti: <b><i>S. pneumoniae</i></b> e <b><i>N. meningitidis</i></b>. Neonati: <b>GBS, <i>E. coli</i>, <i>Listeria</i></b>.",
        "<b><i>Listeria</i></b> (bacillo gram-positivo, trasmesso con gli alimenti): neonati, <b>&gt;50 anni</b>, gravidanza, immunodepressione. <b>Resistente a tutte le cefalosporine</b>.",
        "Dopo neurochirurgia, shunt, drenaggi: <b><i>S. aureus</i>, CoNS, gram-negativi compreso <i>Pseudomonas</i></b>.",
        "Lo pneumococco ha <b>breakpoint più bassi per la meningite</b> (EUCAST): controllarli sempre.",
        "Principali diagnosi differenziali: <b>virale</b> (enterovirus i più frequenti, HSV-2, VZV, Toscana, TBE, West Nile), <b>tubercolare</b>, <b>criptococcica</b>."
      ],
      visuals: [
        { type: "table", title: "Chi la causa, per età e contesto", head: ["Paziente", "Patogeni principali"], rows: [
          ["Neonato &lt;1 mese", "GBS, <i>E. coli</i>, <i>Listeria</i>"],
          ["1–23 mesi", "Pneumococco, meningococco, GBS, <i>H. influenzae</i>, <i>E. coli</i>"],
          ["2–50 anni", "<b>Meningococco, pneumococco</b>"],
          ["&gt;50 anni / immunocompromessi", "Pneumococco, meningococco, <b><i>Listeria</i></b>, gram-negativi"],
          ["Frattura cranica, fistola liquorale", "Pneumococco, <i>H. influenzae</i>, streptococco di gruppo A"],
          ["Neurochirurgia, shunt, drenaggio", "<i>S. aureus</i>, CoNS, gram-negativi compreso <i>Pseudomonas</i>, <i>C. acnes</i>"]
        ]},
        { type: "cards", title: "I quattro batteri classici", items: [
          { h: "<i>S. pneumoniae</i>", p: "Diplococchi gram + lanceolati; capsula = virulenza e bersaglio vaccinale", tag: "Mortalità più alta", tone: "warn" },
          { h: "<i>N. meningitidis</i>", p: "Diplococchi gram − \"a chicco di caffè\"; sierogruppi A, B, C, W, X, Y", tag: "Endotossina → porpora" },
          { h: "<i>H. influenzae</i> b", p: "Coccobacillo gram −", tag: "Raro dopo il vaccino anti-Hib" },
          { h: "<i>L. monocytogenes</i>", p: "Bacillo gram +, intracellulare; formaggi molli, salumi", tag: "Non coperto dalle cefalosporine", tone: "warn" }
        ]}
      ]
    },
    "2": {
      summary: [
        "OMS: circa <b>1 paziente su 6</b> con meningite batterica muore; <b>1 sopravvissuto su 5</b> ha sequele gravi.",
        "I vaccini coniugati (Hib, pneumococco, meningococco) hanno ridotto l'incidenza; l'età mediana è aumentata; il <b>rimpiazzo sierotipico</b> pneumococcico compensa in parte il guadagno.",
        "Mortalità: <b>pneumococcica ≈30%</b> vs meningococcica ≈7%.",
        "Europa: la malattia meningococcica è rara, prevale il <b>sierogruppo B</b>; picchi nei lattanti e negli adolescenti.",
        "<b>Cintura africana della meningite</b>: epidemie meningococciche nella stagione secca; sierogruppo A quasi scomparso dopo MenAfriVac; ora C, W, X.",
        "Fattori di rischio: asplenia, <b>deficit del complemento o eculizumab</b>, HIV, impianto cocleare, fistola liquorale, infezioni ORL, sovraffollamento (Hajj, caserme)."
      ],
      visuals: [
        { type: "bars", title: "Mortalità nell'adulto per patogeno (coorte olandese)", unit: "%", max: 40, rows: [
          { label: "Tutte le meningiti batteriche", v: 21 },
          { label: "<i>S. pneumoniae</i>", v: 30, tone: "warn" },
          { label: "<i>N. meningitidis</i>", v: 7 }
        ]},
        { type: "chips", title: "Fattori di rischio", groups: [
          { h: "Ospite", items: ["Età estreme", "Asplenia, anemia falciforme", "Deficit del complemento (C5–C9)", "Eculizumab, ravulizumab", "HIV, immunodepressione", "Alcol, diabete"] },
          { h: "Anatomia", items: ["Impianto cocleare", "Fistola liquorale", "Otite, sinusite, mastoidite"] },
          { h: "Contesto", items: ["Dormitori, caserme", "Raduni di massa (Hajj)", "Cintura della meningite nella stagione secca"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "<b>Colonizzazione nasofaringea → invasione e batteriemia</b> (la capsula resiste al complemento) → attraversamento della barriera ematoencefalica (plessi corioidei).",
        "Altre vie: infezione ORL contigua, fistola liquorale, neurochirurgia; <i>Listeria</i> dall'intestino.",
        "Il liquor contiene poco complemento e poche immunoglobuline: i batteri <b>si moltiplicano liberamente</b>.",
        "<b>È l'infiammazione a causare il danno</b> (peggiore dopo la lisi indotta dagli antibiotici): edema, ipertensione endocranica, vasculite e infarti, idrocefalo, danno cocleare.",
        "Per questo il <b>desametasone</b> si somministra <b>prima o insieme</b> alla prima dose di antibiotico."
      ],
      visuals: [
        { type: "flow", title: "Cinque passaggi verso la meningite", steps: [
          { h: "Colonizzazione del nasofaringe", p: "Adesine, pili, proteasi IgA1, capsula" },
          { h: "Invasione e batteriemia", p: "La capsula resiste al complemento: asplenia, deficit del complemento" },
          { h: "Attraversamento della barriera ematoencefalica", p: "Plessi corioidei, microvasi" },
          { h: "Replicazione libera nel liquor", p: "Poco complemento o anticorpi" },
          { h: "Infiammazione", p: "TNF, IL-1, IL-6, neutrofili; amplificata dalla lisi batterica", tone: "warn" }
        ]},
        { type: "compare", title: "Che cosa fa l'infiammazione", cols: [
          { h: "Encefalo", tone: "warn", items: ["Edema cerebrale, ipertensione endocranica → erniazione", "Vasculite, trombosi → infarti", "Idrocefalo"] },
          { h: "Orecchio", items: ["Danno cocleare → ipoacusia neurosensoriale (soprattutto pneumococco)"] },
          { h: "Sepsi meningococcica", items: ["Shock settico, CID", "Purpura fulminans", "Emorragia surrenalica (Waterhouse–Friderichsen)"] }
        ]}
      ]
    },
    "4": {
      summary: [
        "La <b>triade classica</b> (febbre, rigidità nucale, alterazione dello stato mentale) è presente solo nel <b>44%</b>, ma il <b>95%</b> ha <b>2 su 4</b>: cefalea, febbre, rigidità nucale, alterazione dello stato mentale.",
        "Kernig e Brudzinski: specifici, <b>non sensibili</b>.",
        "<b>Esantema petecchiale o purpurico che non scompare alla pressione</b> = meningococco fino a prova contraria.",
        "Lattanti: febbre o ipotermia, irritabilità, difficoltà di alimentazione, <b>fontanella bombata</b>; la rigidità nucale spesso manca.",
        "Confusione, alterazioni del comportamento, crisi convulsive o segni focali → pensare all'<b>encefalite</b> (HSV-1) → aciclovir.",
        "<b>TB</b>: subacuta in 1–3 settimane, paralisi dei nervi cranici (VI). <b>Criptococco</b>: cefalea insidiosa nell'HIV avanzato, pressione molto elevata."
      ],
      visuals: [
        { type: "bars", title: "Quanto spesso sono presenti i segni classici (adulti)", unit: "%", max: 100, rows: [
          { label: "Almeno 2 sintomi su 4", v: 95 },
          { label: "Triade classica", v: 44, tone: "warn" },
          { label: "Segni neurologici focali", v: 33 },
          { label: "Coma all'ingresso", v: 14 }
        ]},
        { type: "compare", title: "Batterica, virale, TB, criptococcica: i tempi clinici", cols: [
          { h: "Batterica", tone: "warn", items: ["Ore", "Paziente tossico, possibili esantema e shock"] },
          { h: "Virale", tone: "good", items: ["Acuta, meno tossica", "Coscienza normale", "Esantema da enterovirus; lesioni genitali da HSV-2"] },
          { h: "Tubercolare", items: ["Subacuta, 1–3 settimane", "Calo ponderale, paralisi del VI nervo cranico", "Iponatremia, idrocefalo"] },
          { h: "Criptococcica", items: ["Settimane", "HIV avanzato (CD4 &lt;100)", "Meningismo lieve, perdita della vista/dell'udito per la pressione elevata"] }
        ]},
        { type: "chips", title: "Complicanze", groups: [
          { h: "Neurologiche", items: ["Ipertensione endocranica, erniazione", "Crisi convulsive", "Ictus, trombosi dei seni venosi", "Idrocefalo", "Ipoacusia"] },
          { h: "Sistemiche", items: ["Shock settico, CID", "Iponatremia (SIADH)", "ARDS", "Ischemia degli arti → amputazione"] }
        ]}
      ]
    },
    "5": {
      summary: [
        "In parallelo: <b>ABC → 2 set di emocolture → rachicentesi → desametasone + antibiotici entro 1 h</b>.",
        "<b>TC prima della rachicentesi</b> solo se: deficit focale, crisi convulsiva di nuova insorgenza, GCS &lt;10, immunocompromissione grave.",
        "Se la rachicentesi viene ritardata: <b>emocolture → desametasone + antibiotici → TC → rachicentesi</b>.",
        "Liquor: pressione di apertura, cellule, <b>rapporto glicorrachia/glicemia</b>, proteine, colorazione di Gram, coltura, PCR.",
        "Batterica: <b>&gt;1.000 neutrofili, rapporto ≤0,4, proteine &gt;1 g/l</b>. Virale: linfociti, glucosio normale.",
        "TB: Xpert Ultra, grande volume di liquor, potenziamento basale alla RM. Criptococco: <b>CrAg</b>. <b>Test HIV per tutti</b>."
      ],
      visuals: [
        { type: "algo", title: "Sospetta meningite batterica", nodes: [
          { q: "Iniziare subito", opts: [{ when: "Sempre", to: "ABC, gravità, 2 set di emocolture", next: true }] },
          { q: "Deficit focale, crisi di nuova insorgenza, GCS &lt;10 o immunocompromissione grave?", opts: [
            { when: "No", to: "Rachicentesi subito → desametasone + antibiotici entro 1 h", tone: "good" },
            { when: "Sì (o shock, coagulopatia)", to: "Prima desametasone + antibiotici → TC → rachicentesi quando sicura", tone: "warn" }
          ]}
        ], caption: "Dopo gli antibiotici, cellule, biochimica e PCR del liquor restano informative per alcune ore; la resa della coltura diminuisce." },
        { type: "table", title: "Quadri liquorali", head: ["", "Batterica", "Virale", "Tubercolare", "Criptococcica"], rows: [
          ["Pressione di apertura", "↑", "Normale / ↑", "↑", "<b>Marcatamente ↑</b>"],
          ["Leucociti /µl", "<b>&gt;1.000, neutrofili</b>", "10–500, linfociti", "50–500, linfociti", "Bassi–moderati, linfociti"],
          ["Glucosio liquor:sangue", "<b>≤0,4</b>", "Normale", "<b>Molto basso</b>", "Normale / basso"],
          ["Proteine g/l", "<b>&gt;1</b>", "Normali / lieve ↑", "<b>1–5</b>", "↑"],
          ["Test chiave", "Gram, coltura, PCR", "PCR per enterovirus, HSV, VZV", "Xpert MTB/RIF Ultra, coltura", "CrAg, inchiostro di china"]
        ], caption: "Normale: pressione &lt;20 cmH₂O, &lt;5 cellule, rapporto ≥0,6, proteine &lt;0,45 g/l. La virale precoce può essere neutrofila; la batterica parzialmente trattata può sembrare asettica." }
      ]
    },
    "6": {
      summary: [
        "Antibiotici <b>entro 1 ora</b>; non aspettare mai la TC o il liquor.",
        "1 mese–50 anni: <b>ceftriaxone/cefotaxime ± vancomicina</b> (dove circolano pneumococchi resistenti).",
        "&gt;50 anni, immunocompromessi, gravidanza, alcol: <b>+ ampicillina/amoxicillina</b> per <i>Listeria</i>.",
        "Correlata all'assistenza: <b>vancomicina + cefepime, ceftazidime o meropenem</b>; rimuovere i dispositivi infetti.",
        "<b>Desametasone</b> prima o insieme alla prima dose, per 4 giorni; beneficio soprattutto nella meningite <b>pneumococcica</b> nei Paesi ad alto reddito. Non nei neonati; <b>mai nella meningite criptococcica</b>.",
        "Meningite TB: 2 mesi HRZE + 10 mesi HR, con corticosteroidi. Criptococcica: amfotericina liposomiale + flucitosina, rachicentesi evacuative, rinviare la ART.",
        "Precauzioni per droplet per le prime 24 h; notifica alle autorità sanitarie."
      ],
      visuals: [
        { type: "ladder", title: "Schema empirico per tipo di paziente", steps: [
          { h: "Neonato", p: "Ampicillina + cefotaxime (o + aminoglicoside)" },
          { h: "1 mese – 50 anni", p: "Ceftriaxone o cefotaxime ± vancomicina (o rifampicina)" },
          { h: "&gt;50 anni, immunocompromessi, gravidanza, alcol", p: "Come sopra + ampicillina/amoxicillina (<i>Listeria</i>)" },
          { h: "Dopo neurochirurgia, shunt, drenaggio", p: "Vancomicina + cefepime, ceftazidime o meropenem", tone: "warn" }
        ], caption: "Allergia grave ai β-lattamici: alternative specialistiche, ad es. vancomicina + moxifloxacina; cotrimossazolo per <i>Listeria</i>." },
        { type: "ranges", title: "Durata per patogeno (giorni, in scala)", max: 21, ticks: [0, 7, 14, 21], rows: [
          { label: "<i>N. meningitidis</i>", from: 7, to: 7 },
          { label: "<i>H. influenzae</i>", from: 7, to: 10 },
          { label: "<i>S. pneumoniae</i>", from: 10, to: 14 },
          { label: "<i>S. agalactiae</i>", from: 14, to: 21 },
          { label: "Bacilli gram-negativi", from: 21, to: 21, tone: "warn" },
          { label: "<i>L. monocytogenes</i>", from: 21, to: 21, tone: "warn", note: "≥" }
        ]},
        { type: "compare", title: "Desametasone: sì o no", cols: [
          { h: "Somministrare", tone: "good", items: ["Sospetta meningite batterica comunitaria", "Adulti e bambini oltre il periodo neonatale", "Prima o insieme al primo antibiotico, 4 giorni", "Meningite TB (terapia aggiuntiva)"] },
          { h: "Sospendere o evitare", tone: "warn", items: ["Non pneumococco né Hib → sospendere", "Neonati", "Contesti a basso reddito e alta prevalenza di HIV: nessun beneficio dimostrato", "<b>Meningite criptococcica: dannoso</b>"] }
        ]}
      ]
    },
    "7": {
      summary: [
        "Attendersi un miglioramento entro <b>48 h</b>. Altrimenti: <b>ripetere la rachicentesi</b> ed eseguire imaging. Nessuna rachicentesi di routine a fine terapia.",
        "Imaging in caso di peggioramento: idrocefalo, infarto, trombosi venosa, empiema subdurale, ascesso. Trattare la fonte ORL.",
        "<b>Esame dell'udito per ogni sopravvissuto</b>, precoce dopo meningite pneumococcica (l'ossificazione cocleare può impedire un impianto).",
        "Pneumococcica ricorrente → cercare <b>fistola liquorale</b>, deficit di immunoglobuline, asplenia. Meningococcica ricorrente o sierogruppi rari → <b>complemento</b> (CH50, AH50). Test HIV in tutti."
      ],
      visuals: [
        { type: "timeline", title: "Follow-up", points: [
          { at: "48 h", h: "Migliora?", p: "Se no: ripetere rachicentesi + imaging", tone: "warn" },
          { at: "Prima della dimissione", h: "Esame dell'udito", p: "Urgente dopo pneumococco" },
          { at: "Mesi", h: "Follow-up neuro-cognitivo", p: "Scuola, cicatrici, amputazioni" },
          { at: "Recidiva", h: "Cercare una causa", p: "Fistola liquorale, complemento, HIV" }
        ]}
      ]
    },
    "8": {
      summary: [
        "Vaccini: <b>Hib, PCV, MenC/MenACWY, MenB</b>; Men5CV per la cintura della meningite; BCG per la meningite TB nei bambini.",
        "<b>Eculizumab/ravulizumab</b>: MenACWY + MenB, e talvolta profilassi antibiotica.",
        "<b>Contatti stretti</b> di meningococco: chemioprofilassi entro 24 h: <b>ciprofloxacina</b> dose singola, rifampicina 2 giorni, o <b>ceftriaxone</b> (gravidanza).",
        "Hib: rifampicina per i conviventi con bambini piccoli non vaccinati. <b>Pneumococco: nessuna profilassi dei contatti</b>.",
        "La profilassi intrapartum previene la GBS a esordio precoce; la sicurezza alimentare previene <i>Listeria</i>; screening CrAg nell'HIV avanzato."
      ],
      visuals: [
        { type: "compare", title: "Chi riceve la chemioprofilassi antimeningococcica", cols: [
          { h: "Sì", tone: "warn", items: ["Conviventi", "Contatti intimi", "Operatori sanitari esposti alle secrezioni senza mascherina (intubazione, aspirazione)"] },
          { h: "No", tone: "good", items: ["Contatto assistenziale di routine senza secrezioni", "Contatti di meningite pneumococcica"] },
          { h: "Farmaci", tone: "accent", items: ["Ciprofloxacina dose singola", "Rifampicina 2 giorni", "Ceftriaxone i.m. dose singola (gravidanza)"] }
        ]},
        { type: "table", title: "Vaccini", head: ["Vaccino", "Chi"], rows: [
          ["Coniugato anti-Hib", "Tutti i lattanti (esavalente)"],
          ["Pneumococcico coniugato", "Lattanti; adulti per età e rischio (asplenia, impianto cocleare, fistola liquorale)"],
          ["MenACWY", "Adolescenti; viaggiatori verso la cintura; <b>Hajj/Umrah</b>; asplenia, deficit o inibitori del complemento"],
          ["MenB", "Lattanti in Italia; gruppi ad alto rischio; focolai"],
          ["Men5CV (ACWYX)", "Cintura africana della meningite"],
          ["BCG", "Bambini piccoli: meningite TB, TB miliare"]
        ]}
      ]
    }
  }
};
