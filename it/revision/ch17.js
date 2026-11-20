/* Livello di ripasso per il Capitolo 17 — HIV. Fonte: chapters-it/17-*.md */
window.REVISION = window.REVISION || {};
window.REVISION[17] = {
  sections: {
    "1": {
      summary: [
        "<b>Retrovirus</b> (<i>Lentivirus</i>): 2 copie di ssRNA (+), <b>trascrittasi inversa</b>, <b>integrasi</b>, proteasi.",
        "<i>gag</i> (capside p24), <i>pol</i> (enzimi), <i>env</i> (gp120 lega CD4 + corecettore; gp41 fusione).",
        "Trascrittasi inversa poco fedele → <b>quasispecie</b>, resistenze, evasione immunitaria.",
        "Ogni fase della replicazione è un <b>bersaglio farmacologico</b>.",
        "<b>HIV-2</b>: Africa occidentale, più lento, meno trasmissibile; <b>resistente agli NNRTI</b>, non misurato dalla carica virale di HIV-1."
      ],
      visuals: [
        { type: "flow", title: "Ciclo replicativo e bersagli dei farmaci", steps: [
          { h: "Attacco a CD4 + CCR5/CXCR4", p: "Maraviroc, fostemsavir, ibalizumab" },
          { h: "Fusione (gp41)", p: "Enfuvirtide" },
          { h: "Trascrizione inversa", p: "NRTI, NNRTI", tone: "accent" },
          { h: "Importazione nucleare, integrazione", p: "INSTI; capside: lenacapavir", tone: "accent" },
          { h: "Assemblaggio, gemmazione, maturazione", p: "Inibitori della proteasi" }
        ]},
        { type: "compare", title: "HIV-1 vs HIV-2", cols: [
          { h: "HIV-1", tone: "accent", items: ["SIV dello scimpanzé", "Pandemia mondiale", "Sottotipo B in Europa, C nel mondo"] },
          { h: "HIV-2", tone: "warn", items: ["SIV del cercocebo moro", "Africa occidentale, Portogallo", "Carica virale più bassa, più lento", "Niente NNRTI, niente enfuvirtide"] }
        ]}
      ]
    },
    "2": {
      summary: [
        "2025: <b>41 milioni</b> di persone con HIV, <b>1,2 milioni</b> di nuove infezioni, <b>570.000</b> morti.",
        "Cascata 95-95-95: 88% consapevoli, 78% in terapia, 74% soppressi.",
        "Italia 2024: <b>2.379</b> diagnosi; per lo più sessuali (MSM 42%); <b>~60% presentatori tardivi</b> (CD4 &lt;350); la PCP è la malattia indicativa di AIDS più frequente.",
        "Rischio per singolo atto più alto: trasfusione, poi <b>rapporto anale recettivo</b> (~1,4%).",
        "La trasmissione aumenta con carica virale elevata (<b>HIV acuta</b>), IST, rapporto anale recettivo. Madre-figlio 15–45% → &lt;1–2% con ART."
      ],
      visuals: [
        { type: "stats", items: [
          { v: "41 mln", l: "persone con HIV" },
          { v: "1,2 mln", l: "nuove infezioni / anno" },
          { v: "~60%", l: "presentatori tardivi in Italia" }
        ]},
        { type: "bars", title: "Rischio di trasmissione per atto (fonte non trattata)", unit: "%", max: 1.4, rows: [
          { label: "Anale recettivo", v: 1.4, t: "1,4%", tone: "warn" },
          { label: "Scambio di aghi", v: 0.6, t: "0,6%" },
          { label: "Puntura accidentale", v: 0.2, t: "0,2%" },
          { label: "Anale insertivo", v: 0.1, t: "0,1%" },
          { label: "Vaginale recettivo", v: 0.08, t: "0,08%" },
          { label: "Vaginale insertivo", v: 0.04, t: "0,04%" }
        ], caption: "Trasfusione di sangue: ~92,5%." }
      ]
    },
    "3": {
      summary: [
        "Bersagli: linfociti T CD4, macrofagi, cellule dendritiche, microglia. Il virus trasmesso è per lo più <b>R5 (CCR5)</b>; X4 più tardi.",
        "Gli <b>omozigoti CCR5-Δ32</b> sono in gran parte resistenti.",
        "Fase acuta: viremia enorme, <b>deplezione dei CD4 intestinali (GALT)</b>, costituzione del reservoir.",
        "Il <b>set point</b> a ~6 mesi predice la progressione; i CD4 calano di 50–100/µl all’anno; AIDS in ~10 anni senza terapia.",
        "<b>Attivazione immunitaria cronica</b> (traslocazione microbica) → comorbidità non AIDS.",
        "<b>Reservoir latente</b> nei linfociti CD4 della memoria a riposo → l’ART è <b>per tutta la vita</b>."
      ],
      visuals: [
        { type: "timeline", title: "Storia naturale (senza terapia)", points: [
          { at: "~10 giorni", h: "Eclissi", p: "RNA non rilevabile" },
          { at: "Settimane 2–4", h: "Infezione acuta", p: "Viremia molto alta, deplezione del GALT", tone: "warn" },
          { at: "~6 mesi", h: "Set point", p: "Predice la progressione" },
          { at: "Anni", h: "Fase cronica", p: "CD4 −50–100/µl all’anno" },
          { at: "~10 anni", h: "AIDS", p: "CD4 &lt;200", tone: "warn" }
        ]},
        { type: "chips", title: "Meccanismi del danno immunitario", groups: [
          { h: "", items: ["Uccisione diretta, piroptosi", "Traslocazione microbica", "Attivazione immunitaria cronica", "Fibrosi linfonodale", "Esaurimento dei linfociti T", "Disfunzione dei linfociti B"] }
        ]}
      ]
    },
    "4": {
      summary: [
        "<b>HIV acuta</b> (2–4 settimane): <b>simil-mononucleosica</b>: febbre, faringite, esantema, linfoadenopatie, <b>ulcere mucocutanee</b>.",
        "Sindrome simil-mononucleosica con test EBV negativo → <b>testare per HIV acuta</b>.",
        "Fase cronica: spesso silente; <b>condizioni indicatrici</b> (zoster, dermatite seborroica, candidosi orale, IST, epatiti, TB, linfoma).",
        "<b>AIDS</b> = CD4 &lt;200 o malattia indicativa di AIDS.",
        "Le IO seguono i CD4: <b>PCP &lt;200; toxo, cripto &lt;100; CMV, MAC &lt;50</b>. TB e KS a qualsiasi valore di CD4."
      ],
      visuals: [
        { type: "ladder", title: "Infezioni opportunistiche per conta dei CD4 (cellule/µl)", steps: [
          { h: "Qualsiasi valore", p: "Tubercolosi, polmonite batterica, sarcoma di Kaposi, zoster, linfoma" },
          { h: "&lt; 200", p: "<b>PCP</b>, candidosi esofagea, PML, wasting" },
          { h: "&lt; 100", p: "<b>Toxoplasmosi cerebrale</b>, <b>meningite criptococcica</b>, micosi endemiche", tone: "warn" },
          { h: "&lt; 50", p: "<b>Retinite da CMV</b>, <b>MAC disseminato</b>, linfoma primitivo del SNC", tone: "warn" }
        ]},
        { type: "table", title: "Caratteristiche chiave delle IO", head: ["Malattia", "Indizi"], rows: [
          ["PCP", "Dispnea subacuta, <b>desaturazione da sforzo</b>, LDH elevato, vetro smerigliato"],
          ["Toxoplasmosi cerebrale", "Lesioni multiple con <b>captazione ad anello</b>, nuclei della base"],
          ["Meningite criptococcica", "Cefalea subacuta, <b>pressione di apertura molto elevata</b>, CrAg"],
          ["Retinite da CMV", "Miodesopsie, fondo \"a pizza\""],
          ["PML", "Lesioni della sostanza bianca, senza effetto massa, PCR per virus JC"]
        ]}
      ]
    },
    "5": {
      summary: [
        "Testare tutti tra 13 e 64 anni almeno una volta; ogni anno se a rischio; ogni gravidanza; tutte le condizioni indicatrici; prima di PrEP/PEP.",
        "Periodo finestra: <b>RNA (10–33 gg) → p24 (18–45 gg) → anticorpi (23–90 gg)</b>.",
        "Algoritmo: <b>Ag/Ab di 4ª generazione</b> → test di differenziazione → RNA se discordante. <b>Niente Western blot</b>.",
        "Lattanti &lt;18 mesi: <b>NAT</b> (anticorpi materni).",
        "Basale: CD4, carica virale, <b>genotipo di resistenza</b>, <b>HLA-B*57:01</b>, HBV/HCV, IST, IgG anti-toxo, screening TB, <b>CrAg se CD4 &lt;100</b>."
      ],
      visuals: [
        { type: "ranges", title: "Quando i marcatori si positivizzano (giorni dall’esposizione)", max: 90, ticks: [0, 10, 30, 45, 90], rows: [
          { label: "HIV-1 RNA", from: 10, to: 33, tone: "warn", txt: "10–33 gg" },
          { label: "Antigene p24 (4ª gen.)", from: 18, to: 45, txt: "18–45 gg" },
          { label: "Anticorpi", from: 23, to: 90, txt: "23–90 gg" }
        ]},
        { type: "algo", title: "Algoritmo di laboratorio", nodes: [
          { q: "Immunodosaggio Ag/Ab di 4ª generazione", opts: [
            { when: "Negativo", to: "Nessuna infezione da HIV (ripetere o RNA se esposizione recente)", tone: "good" },
            { when: "Reattivo", to: "Test di differenziazione HIV-1/HIV-2", next: 1 }
          ]},
          { q: "Test di differenziazione", opts: [
            { when: "Positivo", to: "HIV-1 o HIV-2 confermato", tone: "warn" },
            { when: "Negativo / indeterminato", to: "HIV-1 RNA: positivo = HIV acuta" }
          ]}
        ]}
      ]
    },
    "6": {
      summary: [
        "<b>ART per tutti, con qualsiasi valore di CD4, idealmente lo stesso giorno</b>.",
        "Eccezioni: <b>meningite criptococcica</b> (rinviare di 4–6 settimane) e <b>meningite tubercolare</b>. TB: ART entro 2 settimane (CD4 bassi) o 8 settimane.",
        "Prima linea: <b>INSTI + 2 NRTI</b> (BIC/TAF/FTC, DTG + TDF/TAF + FTC/3TC). DTG/3TC no se HBV o resistenze non note.",
        "<b>Coinfezione HBV → tenofovir</b> deve far parte dello schema. <b>HLA-B*57:01 prima dell’abacavir</b>.",
        "Interazioni: rilpivirina + IPP, INSTI + cationi, <b>booster</b> (CYP3A4).",
        "<b>IRIS</b>: peggioramento dopo l’avvio dell’ART → proseguire l’ART.",
        "Profilassi: <b>cotrimossazolo se CD4 &lt;200</b> (PCP, e toxo se &lt;100 + IgG+); screening CrAg → fluconazolo."
      ],
      visuals: [
        { type: "table", title: "Classi di farmaci", head: ["Classe", "Esempi", "Attenzione"], rows: [
          ["NRTI", "Tenofovir, emtricitabina, lamivudina, abacavir", "TDF rene/osso; abacavir HLA-B*57:01"],
          ["INSTI", "Dolutegravir, bictegravir, cabotegravir", "<b>Pilastro preferito</b>; cationi; aumento di peso"],
          ["NNRTI", "Doravirina, rilpivirina", "Bassa barriera genetica; rilpivirina + IPP"],
          ["IP potenziati", "Darunavir/r o /c", "Interazioni CYP3A4"],
          ["Inibitore del capside", "Lenacapavir", "Ogni 6 mesi; MDR, PrEP"],
          ["Inibitori dell’ingresso", "Maraviroc, fostemsavir, enfuvirtide", "Pazienti pretrattati"]
        ]},
        { type: "timeline", title: "Quando iniziare l’ART", points: [
          { at: "Stesso giorno", h: "La maggior parte delle persone", p: "Compresa HIV acuta, gravidanza", tone: "good" },
          { at: "≤ 2 settimane", h: "La maggior parte delle IO, TB con CD4 bassi", p: "Dopo l’avvio della terapia dell’IO" },
          { at: "4–6 settimane", h: "Meningite criptococcica", p: "L’ART precoce aumenta la mortalità", tone: "warn" },
          { at: "4–8 settimane", h: "Meningite tubercolare", p: "Rischio di IRIS", tone: "warn" }
        ]},
        { type: "table", title: "Profilassi primaria", head: ["Soglia", "Previene", "Farmaco"], rows: [
          ["CD4 &lt;200", "PCP", "Cotrimossazolo"],
          ["CD4 &lt;100 + IgG anti-<i>Toxoplasma</i>+", "Toxoplasmosi", "Cotrimossazolo"],
          ["CD4 &lt;100, CrAg sierico+", "Meningite criptococcica", "Fluconazolo (pre-emptive)"],
          ["TB latente", "TB attiva", "Isoniazide / rifapentina"]
        ], caption: "Sospendere la profilassi per PCP/toxo quando i CD4 sono &gt;200 per ≥3 mesi in ART." }
      ]
    },
    "7": {
      summary: [
        "Carica virale 2–8 settimane dopo l’avvio, poi fino a <b>&lt;50 copie/ml</b> (entro 24 settimane), poi ogni 3–6 mesi.",
        "<b>Blip</b> (valore basso isolato) ≠ fallimento. <b>Fallimento</b>: confermato &gt;200 (o &gt;50): aderenza, interazioni, <b>genotipo in corso dello schema che fallisce</b>.",
        "Aspettativa di vita quasi normale: attenzione a rischio <b>cardiovascolare</b> (statine), rene, osso, screening oncologici (anale, cervicale), salute mentale.",
        "Gravidanza: ART per tutte, carica non rilevabile prima del parto → trasmissione &lt;1%."
      ],
      visuals: [
        { type: "compare", title: "Carica virale rilevabile in ART", cols: [
          { h: "Blip", tone: "good", items: ["Isolato, di solito &lt;200 copie/ml", "Poi di nuovo soppressa", "Non è un fallimento"] },
          { h: "Fallimento virologico", tone: "warn", items: ["Confermato &gt;200 (DHHS) / &gt;50 (EACS)", "Verificare aderenza, interazioni", "Genotipo in corso dello schema", "≥2 farmaci pienamente attivi"] }
        ]}
      ]
    },
    "8": {
      summary: [
        "<b>Nessun vaccino contro l’HIV</b>: prevenzione combinata.",
        "<b>U = U</b>: carica stabilmente non rilevabile (&lt;200) = <b>nessuna trasmissione sessuale</b>.",
        "<b>PrEP</b>: TDF/FTC giornaliero o al bisogno 2-1-1 (MSM); cabotegravir iniettabile ogni 2 mesi; <b>lenacapavir ogni 6 mesi</b>. Test HIV + IST ogni 3 mesi.",
        "<b>PEP</b>: iniziare entro <b>72 h</b> (idealmente 24 h), per <b>28 giorni</b>; a base di INSTI. Non necessaria se la fonte ha carica non rilevabile.",
        "Vaccini: HBV, HAV, pneumococco, influenza, HPV, zoster (ricombinante). <b>Niente vaccini vivi se CD4 &lt;200</b>."
      ],
      visuals: [
        { type: "compare", title: "PrEP vs PEP", cols: [
          { h: "PrEP (prima)", tone: "good", items: ["TDF/FTC orale giornaliero o 2-1-1", "Cabotegravir i.m. ogni 2 mesi", "Lenacapavir s.c. ogni 6 mesi", "Test HIV + IST ogni 3 mesi"] },
          { h: "PEP (dopo)", tone: "warn", items: ["Entro 72 h, meglio ≤24 h", "28 giorni", "BIC/FTC/TAF o a base di DTG", "Test HIV a 4–6 e 12 settimane"] }
        ]},
        { type: "note", h: "U = U", p: "Una carica virale stabilmente non rilevabile significa nessuna trasmissione sessuale. Non protegge dalle altre IST." }
      ]
    }
  }
};
