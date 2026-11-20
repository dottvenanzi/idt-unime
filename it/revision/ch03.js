/* Livello di ripasso per il Capitolo 3 — Endocardite infettiva. Fonte: chapters-it/03-infective-endocarditis.md */
window.REVISION = window.REVISION || {};
window.REVISION[3] = {
  sections: {
    "1": {
      summary: [
        "I <b>cocchi gram-positivi</b> causano l'80–90%: stafilococchi, streptococchi, enterococchi.",
        "<b><i>S. aureus</i></b> è oggi la causa più frequente: acuta, distruttiva, anche su valvole normali.",
        "Streptococchi orali (viridanti): subacuta, di solito sensibili alla penicillina. <b><i>S. gallolyticus</i> → colonscopia</b>.",
        "<b><i>E. faecalis</i></b> in aumento; resistente alle cefalosporine, spesso con resistenza di alto livello agli aminoglicosidi.",
        "<b>CoNS</b>: protesi valvolari e dispositivi. <b>HACEK</b>: gram-negativi esigenti, vegetazioni grandi.",
        "EI a coltura negativa: <i>Coxiella</i>, <i>Bartonella</i>, <i>Brucella</i>, <i>T. whipplei</i> → sierologia e PCR."
      ],
      visuals: [
        { type: "cards", title: "Microrganismo → indizio dal contesto", items: [
          { h: "<i>S. aureus</i>", p: "Assistenza sanitaria, PWID, emodialisi, dispositivi; anche valvole normali", tag: "Il più frequente, il più distruttivo", tone: "warn" },
          { h: "CoNS", p: "Protesi valvolari (precoce), dispositivi", tag: "<i>S. lugdunensis</i> si comporta come <i>S. aureus</i>" },
          { h: "Streptococchi viridanti", p: "Scarsa igiene dentale, valvole native", tag: "Subacuta" },
          { h: "<i>S. gallolyticus</i>", p: "Pazienti anziani", tag: "Colonscopia!", tone: "warn" },
          { h: "<i>E. faecalis</i>", p: "Anziani, fonte genitourinaria o GI, assistenza sanitaria", tag: "Non solo cefalosporine" },
          { h: "HACEK", p: "Gram-negativi della flora orale", tag: "Vegetazioni grandi" },
          { h: "Funghi", p: "Protesi valvolari, cateteri, PWID, nutrizione parenterale", tag: "Emboli grandi, chirurgia" },
          { h: "<i>Coxiella</i>, <i>Bartonella</i>, <i>Brucella</i>", p: "Animali, latticini crudi, pidocchi, gatti", tag: "A coltura negativa" }
        ]},
        { type: "compare", title: "Microrganismi \"tipici\" (Duke-ISCVID 2023)", cols: [
          { h: "Tipici in tutti i pazienti", tone: "accent", items: ["<i>S. aureus</i>, <i>S. lugdunensis</i>", "<i>E. faecalis</i>", "Tutti gli streptococchi tranne <i>S. pneumoniae</i>, <i>S. pyogenes</i>", "<i>Granulicatella</i>, <i>Abiotrophia</i>, <i>Gemella</i>", "HACEK"] },
          { h: "Tipici solo con materiale protesico intracardiaco", items: ["CoNS", "<i>Corynebacterium striatum</i>, <i>jeikeium</i>", "<i>Serratia</i>, <i>P. aeruginosa</i>", "<i>Cutibacterium acnes</i>", "Micobatteri non tubercolari, <i>Candida</i>"] }
        ]}
      ]
    },
    "2": {
      summary: [
        "Incidenza <b>3–10 / 100.000</b> all'anno e in aumento, molto più alta negli anziani; uomini ≈2×.",
        "Mortalità intraospedaliera <b>15–30%</b>; circa la <b>metà</b> richiede chirurgia.",
        "<b>Mitrale</b> ≈41% e <b>aortica</b> ≈38% le più spesso infette; <b>tricuspide nei PWID</b>.",
        "Circa <b>un quarto</b> correlato all'assistenza. Nei Paesi a basso reddito: <b>cardiopatia reumatica</b>.",
        "PVE: <b>precoce &lt;1 anno</b> (stafilococchi perioperatori) vs <b>tardiva ≥1 anno</b> (come la nativa).",
        "Rischio più alto: <b>EI pregressa, protesi valvolari, cardiopatie congenite cianogene, VAD</b>."
      ],
      visuals: [
        { type: "stats", items: [
          { v: "17,7%", l: "mortalità intraospedaliera (coorte ICE-PCS)" },
          { v: "48%", l: "sottoposti a chirurgia" },
          { v: "≈ 1/4", l: "correlata all'assistenza" }
        ]},
        { type: "bars", title: "Valvola coinvolta", unit: "%", max: 50, rows: [
          { label: "Mitrale", v: 41 }, { label: "Aortica", v: 38 }
        ], caption: "La tricuspide prevale nelle persone che si iniettano droghe." },
        { type: "compare", title: "Condizioni predisponenti", cols: [
          { h: "Rischio più alto", tone: "warn", items: ["EI pregressa", "Protesi valvolare (chirurgica o transcatetere), materiale da riparazione", "Cardiopatia congenita cianogena o residua", "Dispositivo di assistenza ventricolare"] },
          { h: "Rischio intermedio", items: ["Cardiopatia reumatica", "Valvulopatia degenerativa", "Valvola aortica bicuspide", "Pacemaker / ICD", "Cardiomiopatia ipertrofica"] },
          { h: "Ospite / esposizione", items: ["Uso di droghe per via iniettiva", "Emodialisi", "Cateteri intravascolari", "Diabete, immunodepressione", "Scarsa igiene dentale"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "La ricetta: <b>endotelio danneggiato + batteriemia transitoria + adesine batteriche</b>.",
        "Il flusso turbolento danneggia il lato a bassa pressione: <b>versante atriale della mitrale</b>, <b>versante ventricolare dell'aortica</b>.",
        "La vegetazione sterile di piastrine e fibrina (NBTE) viene colonizzata durante una <b>batteriemia transitoria</b>, per lo più da masticazione e spazzolamento quotidiani.",
        "<i>S. aureus</i> può invadere l'<b>endotelio integro</b>.",
        "I batteri dentro la vegetazione sono densi, a crescita lenta e protetti → <b>terapia lunga e battericida</b> e spesso chirurgia.",
        "Conseguenze: <b>distruzione locale, emboli, batteriemia persistente, immunocomplessi</b>."
      ],
      visuals: [
        { type: "flow", title: "Come si forma una vegetazione", steps: [
          { h: "Danno endoteliale", p: "Getti di rigurgito, stenosi, protesi, cateteri, particelle iniettate" },
          { h: "Vegetazione sterile (NBTE)", p: "Piastrine + fibrina" },
          { h: "Batteriemia transitoria", p: "Bocca (masticazione, spazzolamento), cute, intestino, urine, dispositivi" },
          { h: "Adesione", p: "Le adesine legano fibrina, fibronectina, piastrine" },
          { h: "Vegetazione infetta", p: "Densa, a crescita lenta, simile a un biofilm, protetta dai fagociti", tone: "warn" }
        ]},
        { type: "grid", title: "Quattro meccanismi → il quadro clinico", items: [
          { h: "Distruzione locale", p: "Perforazione, rigurgito, scompenso cardiaco; ascesso, fistola, blocco AV" },
          { h: "Embolizzazione", p: "Ictus, infarti splenici/renali, aneurismi micotici; emboli polmonari se destra" },
          { h: "Batteriemia persistente", p: "Sepsi, spondilodiscite, artrite settica, ascessi" },
          { h: "Immunocomplessi", p: "Glomerulonefrite, noduli di Osler, macchie di Roth, fattore reumatoide" }
        ]}
      ]
    },
    "4": {
      summary: [
        "<b>Acuta</b> (giorni, settica, <i>S. aureus</i>) vs <b>subacuta</b> (settimane–mesi, calo ponderale, streptococchi viridanti).",
        "<b>Febbre</b> fino al 90%; <b>soffio</b> ≈85% (l'indizio è un nuovo soffio da rigurgito).",
        "<b>Scompenso cardiaco</b> in un terzo: principale indicazione chirurgica e principale causa di morte.",
        "Emboli clinici 20–25%, <b>ictus ≈17%</b>; gli emboli cerebrali silenti sono molto più frequenti alla RM.",
        "EI destra (PWID): tosse, dolore pleuritico, <b>noduli polmonari multipli escavati</b>, spesso senza soffio.",
        "I segni periferici classici sono oggi <b>poco frequenti</b> ma molto richiesti all'esame."
      ],
      visuals: [
        { type: "bars", title: "Con quale frequenza (approssimativa)", unit: "%", max: 100, rows: [
          { label: "Febbre", v: 90 }, { label: "Soffio", v: 85 }, { label: "Scompenso cardiaco", v: 33, t: "≈ 1/3" }, { label: "Eventi embolici clinici", v: 22, t: "20–25%" }, { label: "Ictus", v: 17, tone: "warn" }
        ]},
        { type: "table", title: "Segni periferici", head: ["Segno", "Cosa", "Meccanismo"], rows: [
          ["Noduli di Osler", "Noduli <b>dolenti</b> sui polpastrelli di dita delle mani e dei piedi", "Immunologico"],
          ["Lesioni di Janeway", "Macule <b>non dolenti</b> sui palmi e sulle piante", "Microemboli settici"],
          ["Macchie di Roth", "Emorragie retiniche a centro pallido", "Immunologico"],
          ["Emorragie a scheggia", "Strie scure sotto le unghie", "Microemboli (aspecifiche)"],
          ["Petecchie congiuntivali", "Congiuntiva, palato", "Vascolare"]
        ], caption: "Per ricordare: Osler = Ouch (dolenti); Janeway = non dolenti." }
      ]
    },
    "5": {
      summary: [
        "Sospettare l'EI: febbre + predisposizione, febbre + nuovo soffio, febbre + emboli, <b>microrganismo tipico nel sangue</b>. <b>Batteriemia da <i>S. aureus</i> → sempre ecocardiogramma</b>.",
        "<b>≥3 set di emocolture prima degli antibiotici</b>; ripetere ogni 24–72 h fino alla negativizzazione.",
        "<b>Prima l'ETT</b>, poi l'<b>ETE</b> (protesi valvolari, dispositivi, ascesso); ripetere a 5–7 giorni se il sospetto persiste.",
        "TC cardiaca per le complicanze perivalvolari; <b>PET/TC con FDG</b> per protesi valvolari ed elettrocateteri.",
        "A coltura negativa (5–10%): per lo più <b>antibiotici precedenti</b>; poi sierologia (IgG di fase I anti-<i>Coxiella</i> ≥1:800), PCR, PCR 16S sulla valvola.",
        "<b>Certa</b>: 2 maggiori, o 1 maggiore + 3 minori, o 5 minori. <b>Possibile</b>: 1 maggiore + 1 minore, o 3 minori."
      ],
      visuals: [
        { type: "compare", title: "Duke-ISCVID 2023: criteri maggiori", cols: [
          { h: "Microbiologici", tone: "accent", items: ["Microrganismo tipico in ≥2 set", "Non tipico in ≥3 set", "PCR per <i>Coxiella</i>, <i>Bartonella</i>, <i>T. whipplei</i>", "IgG di fase I anti-<i>Coxiella</i> &gt;1:800"] },
          { h: "Imaging", tone: "accent", items: ["Ecocardiogramma o TC: vegetazione, perforazione, ascesso, pseudoaneurisma, fistola", "Nuovo rigurgito o deiscenza protesica", "Attività alla PET/TC con FDG &gt;3 mesi dopo l'impianto"] },
          { h: "Chirurgici", tone: "accent", items: ["EI riscontrata all'intervento cardiochirurgico (novità 2023)"] }
        ]},
        { type: "chips", title: "Criteri minori", groups: [
          { h: "", items: ["Predisposizione", "Febbre &gt;38 °C", "Fenomeni vascolari (emboli, Janeway, aneurisma micotico)", "Fenomeni immunologici (Osler, Roth, GN)", "Microbiologia che non soddisfa il criterio maggiore", "Attività alla PET &lt;3 mesi dopo l'impianto", "Nuovo soffio se ecocardiogramma non disponibile"] }
        ]},
        { type: "table", title: "Classificazione", head: ["Categoria", "Regola"], rows: [
          ["<b>Certa</b>", "Anatomia patologica, o 2 maggiori, o 1 maggiore + 3 minori, o 5 minori"],
          ["<b>Possibile</b>", "1 maggiore + 1 minore, o 3 minori"],
          ["<b>Esclusa</b>", "Diagnosi alternativa solida; o risoluzione con ≤4 giorni di antibiotici; o nessun reperto all'intervento/autopsia"]
        ]},
        { type: "algo", title: "Percorso di imaging", nodes: [
          { q: "EI sospetta", opts: [{ when: "Per prima", to: "ETT", next: true }] },
          { q: "Esito dell'ETT", opts: [
            { when: "Negativa, il sospetto persiste", to: "ETE; ripetere a 5–7 giorni" },
            { when: "Positiva", to: "ETE per le complicanze (tranne EI destra isolata con buona qualità d'immagine)" },
            { when: "Protesi valvolare / dispositivo", to: "ETE + TC cardiaca + PET/TC con FDG", tone: "accent" }
          ]}
        ]}
      ]
    },
    "6": {
      summary: [
        "<b>Battericida, ad alte dosi, e.v., prolungata</b>: nativa 4–6 settimane, protesica ≥6 settimane, contate dalla prima emocoltura negativa.",
        "Empirica: NVE comunitaria / PVE tardiva → <b>ampicillina + ceftriaxone</b> (o + cloxacillina + gentamicina); PVE precoce / correlata all'assistenza → <b>vancomicina + gentamicina + rifampicina</b>.",
        "MSSA → <b>flucloxacillina o cefazolina</b>, <b>niente gentamicina</b> nell'EI su valvola nativa. MRSA → vancomicina o daptomicina.",
        "<b>Rifampicina solo con materiale protesico</b>, iniziata dopo il controllo della batteriemia.",
        "<b><i>E. faecalis</i> → ampicillina + ceftriaxone</b> (sinergia, efficace con HLAR, nessuna nefrotossicità).",
        "EI sinistra stabile: <b>passaggio all'orale</b> dopo ≥10 giorni e.v. (POET).",
        "Chirurgia in ≈50%: <b>scompenso cardiaco</b>, <b>infezione non controllata</b>, <b>prevenzione degli emboli</b>. EI su dispositivo → rimuovere l'intero sistema."
      ],
      visuals: [
        { type: "table", title: "Terapia mirata", head: ["Microrganismo", "Farmaco", "Nota"], rows: [
          ["Streptococchi sensibili alla penicillina", "Penicillina G, amoxicillina o ceftriaxone", "4 sett. NVE; 2 sett. + gentamicina se non complicata"],
          ["MSSA", "Flucloxacillina / cefazolina", "Niente gentamicina nella NVE"],
          ["MRSA", "Vancomicina o daptomicina", ""],
          ["PVE stafilococcica", "Farmaco di base + rifampicina + gentamicina (2 sett.)", "Rifampicina per il biofilm"],
          ["<i>E. faecalis</i>", "<b>Ampicillina + ceftriaxone</b>", "6 settimane"],
          ["HACEK", "Ceftriaxone", ""],
          ["Funghi", "L-AmB o echinocandina + <b>chirurgia</b>", "Poi soppressione con azolo"],
          ["<i>C. burnetii</i>", "Doxiciclina + idrossiclorochina", "≥18 mesi"]
        ]},
        { type: "ladder", title: "Chirurgia: tempistica", steps: [
          { h: "Non urgente (stesso ricovero)", p: "Batteriemia persistente, funghi/MDR, PVE stafilococcica" },
          { h: "Urgente (3–5 giorni)", p: "Sintomi di scompenso; ascesso, fistola, vegetazione in crescita, nuovo blocco AV; vegetazione ≥10 mm + embolia" },
          { h: "In emergenza (&lt;24 h)", p: "Edema polmonare refrattario o shock cardiogeno", tone: "warn" }
        ], caption: "L'ictus ischemico non ritarda la chirurgia indicata; l'emorragia intracranica di solito sì." },
        { type: "chips", title: "Passaggio all'orale (POET) quando", groups: [
          { h: "", items: ["EI sinistra", "Streptococchi, <i>E. faecalis</i>, <i>S. aureus</i>, CoNS", "≥10 giorni e.v.", "Stabile, batteriemia risolta", "Nessun ascesso"] }
        ]}
      ]
    },
    "7": {
      summary: [
        "Emocolture ogni 24–72 h fino alla negativizzazione; <b>batteriemia persistente</b> → estensione perivalvolare, focus metastatico, dispositivo, resistenza.",
        "Monitorare febbre, proteina C reattiva, funzione renale, <b>livelli dei farmaci</b>; ECG per un <b>nuovo blocco AV (ascesso della radice aortica)</b>.",
        "Ecocardiogramma a fine terapia come nuovo basale; follow-up a 1, 3, 6, 12 mesi.",
        "<b>Recidiva</b> = stesso microrganismo, di solito &lt;6 mesi. Rischio di nuovo episodio 2–6%, più alto nei PWID, nella PVE, in dialisi.",
        "Emocolture prima di qualsiasi antibiotico per le febbri future; controllo odontoiatrico; colonscopia dopo <i>S. gallolyticus</i>; servizi per le dipendenze."
      ],
      visuals: [
        { type: "compare", title: "Recidiva vs reinfezione", cols: [
          { h: "Recidiva", tone: "warn", items: ["Stesso microrganismo", "Di solito entro 6 mesi", "Terapia inadeguata o focus persistente"] },
          { h: "Reinfezione", items: ["Microrganismo diverso o episodio successivo", "Rischio più alto: PWID, PVE, dialisi, EI pregressa"] }
        ]}
      ]
    },
    "8": {
      summary: [
        "Nessun vaccino. L'<b>igiene orale e dentale</b> è il cardine; igiene cutanea; gestione asettica dei cateteri; decolonizzazione da <i>S. aureus</i> prima della cardiochirurgia.",
        "Profilassi antibiotica solo per i <b>pazienti ad alto rischio</b> + <b>procedure odontoiatriche ad alto rischio</b> (manipolazione gengivale o periapicale, perforazione della mucosa).",
        "Farmaco: <b>amoxicillina o ampicillina</b> dose singola 30–60 min prima. Allergia: azitromicina, claritromicina o doxiciclina.",
        "<b>La clindamicina non è più raccomandata</b> (<i>C. difficile</i>).",
        "Non per: anestesia in tessuto sano, carie superficiali, radiografie, regolazioni ortodontiche; procedure respiratorie, GI, genitourinarie o cutanee."
      ],
      visuals: [
        { type: "compare", title: "Profilassi: chi", cols: [
          { h: "Alto rischio: somministrare", tone: "warn", items: ["EI pregressa", "Protesi valvolare o materiale da riparazione", "CHD cianogena; CHD riparata (6 mesi o a vita se residua)", "Dispositivo di assistenza ventricolare"] },
          { h: "Intermedio: si può valutare", items: ["Valvulopatia reumatica o degenerativa", "Valvola aortica bicuspide", "Pacemaker / ICD", "Cardiomiopatia ipertrofica"] }
        ]},
        { type: "compare", title: "Profilassi: quando", cols: [
          { h: "Sì", tone: "accent", items: ["Estrazioni", "Ablazione del tartaro", "Devitalizzazione", "Qualsiasi procedura che perfori la mucosa orale"] },
          { h: "No", tone: "good", items: ["Anestesia in tessuto sano", "Carie superficiali", "Rimozione di suture, radiografie", "Regolazione ortodontica", "Procedure GI, genitourinarie, respiratorie, cutanee"] }
        ]}
      ]
    }
  }
};
