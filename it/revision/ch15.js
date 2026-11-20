/* Livello di ripasso per il Capitolo 15 — Herpesvirus. Fonte: chapters-it/15-*.md */
window.REVISION = window.REVISION || {};
window.REVISION[15] = {
  sections: {
    "1": {
      summary: [
        "Otto herpesvirus umani: <b>dsDNA</b> con envelope, tutti stabiliscono una <b>latenza per tutta la vita</b> e possono riattivarsi.",
        "Envelope = fragile: la trasmissione richiede un <b>contatto stretto</b> (VZV anche per via aerea).",
        "<b>Alfa</b> (HSV-1, HSV-2, VZV): latenti nei <b>gangli sensitivi</b>, vescicole.",
        "<b>Beta</b> (CMV, HHV-6, HHV-7): latenti in cellule mieloidi / linfoidi; il CMV dà <b>inclusioni \"a occhio di civetta\"</b>.",
        "<b>Gamma</b> (EBV, HHV-8): latenti nei <b>linfociti B</b>, <b>oncogeni</b>.",
        "La maggior parte degli antivirali agisce sulla <b>DNA polimerasi virale</b> (non letermovir, maribavir)."
      ],
      visuals: [
        { type: "compare", title: "Tre sottofamiglie", cols: [
          { h: "Alfa", tone: "accent", items: ["HSV-1, HSV-2, VZV", "Latenza: gangli sensitivi", "Rapidi, citolitici", "Vescicole"] },
          { h: "Beta", items: ["CMV, HHV-6, HHV-7", "Latenza: monociti, linfociti", "Lenti, citomegalia", "Trapianto, feto"] },
          { h: "Gamma", tone: "warn", items: ["EBV, HHV-8", "Latenza: linfociti B", "Linfoproliferazione", "Oncogeni"] }
        ]}
      ]
    },
    "2": {
      summary: [
        "HSV-1: ~2/3 delle persone &lt;50 anni; quota crescente dei primi episodi <b>genitali</b>. HSV-2: sessuale, soprattutto durante l’<b>eliminazione asintomatica</b>; triplica il rischio di HIV.",
        "VZV: via aerea; rischio di zoster nel corso della vita <b>~1 su 3</b>, crescente con l’età.",
        "EBV: saliva, ~90% degli adulti. CMV: saliva, <b>urine dei bambini</b>, latte materno, transplacentare, trapianto; congenito in ~0,6% dei nati.",
        "HHV-8: prevalenza intermedia nel <b>Mediterraneo</b> (Italia).",
        "A rischio: neonati, gravidanza, <b>deficit dell’immunità cellulo-mediata</b>.",
        "Rischio di CMV nel trapianto: <b>SOT D+/R−</b>; <b>HSCT R+</b>."
      ],
      visuals: [
        { type: "bars", title: "Adulti infetti (approssimativo)", unit: "%", max: 100, rows: [
          { label: "EBV", v: 90, t: "~90%" },
          { label: "HSV-1 (&lt;50 anni)", v: 67, t: "~2/3" },
          { label: "Rischio di zoster nella vita", v: 33, t: "~1 su 3" },
          { label: "HSV-2 (15–49 anni)", v: 13, t: "~13%" }
        ]},
        { type: "compare", title: "Rischio di CMV dopo trapianto", cols: [
          { h: "Organo solido (SOT)", tone: "warn", items: ["Rischio massimo: <b>D+/R−</b>", "Il ricevente incontra il virus per la prima volta"] },
          { h: "HSCT allogenico", tone: "warn", items: ["Rischio massimo: <b>R+</b>", "Si riattiva il virus latente del ricevente"] }
        ]}
      ]
    },
    "3": {
      summary: [
        "Ciclo: infezione primaria → diffusione al sito di latenza (<b>retrograda lungo gli assoni</b> per gli alfa) → latenza mantenuta dai <b>linfociti T CD8</b> → riattivazione.",
        "Encefalite erpetica: necrosi emorragica <b>temporale e orbitofrontale</b>.",
        "HSV neonatale: rischio massimo con <b>infezione materna primaria vicino al termine</b>.",
        "VZV: due viremie, incubazione <b>10–21 giorni</b>; lo zoster infiamma il ganglio → dolore, PHN.",
        "EBV infetta i linfociti B tramite il <b>CD21</b>; i sintomi derivano dalla <b>risposta CD8</b> (linfociti atipici); PTLD se il controllo T fallisce.",
        "CMV: danno diretto + <b>effetti indiretti</b> sul trapianto. HHV-8: angiogenesi → Kaposi."
      ],
      visuals: [
        { type: "flow", title: "Il ciclo comune", dir: "row", steps: [
          { h: "Infezione primaria", p: "Mucose, vie aeree" },
          { h: "Verso il sito di latenza", p: "Gangli o leucociti" },
          { h: "Latenza", p: "Mantenuta dai linfociti T" },
          { h: "Riattivazione", p: "Stress, età, immunosoppressione", tone: "warn" }
        ]},
        { type: "cards", title: "Meccanismi specifici dei virus", items: [
          { h: "HSV", p: "Cellule giganti, vescicole intraepiteliali; encefalite del lobo temporale", tag: "Citolitico" },
          { h: "VZV", p: "Due viremie; ganglionite → dolore prima dell’eruzione", tag: "Incubazione 10–21 gg" },
          { h: "EBV", p: "CD21 sui linfociti B; risposta CD8 = mononucleosi", tag: "PTLD", tone: "warn" },
          { h: "CMV", p: "Citomegalia; effetti indiretti sul trapianto; infezione fetale", tag: "Trapianto, feto", tone: "warn" },
          { h: "HHV-8", p: "Geni virali guidano proliferazione e angiogenesi", tag: "Kaposi" }
        ]}
      ]
    },
    "4": {
      summary: [
        "HSV: vescicole raggruppate su base eritematosa; primo episodio genitale grave; cheratite (dendritica); <b>encefalite</b> (alterazioni comportamentali, convulsioni, mortalità ~70% se non trattata); forme neonatali.",
        "Varicella: eruzione centripeta, <b>tutti gli stadi contemporaneamente</b>; contagiosa finché tutte le lesioni non sono in crosta. Adulti/gravidanza: <b>polmonite</b>.",
        "Zoster: dermatomerico, <b>non supera la linea mediana</b>; <b>segno di Hutchinson</b> → occhio; Ramsay Hunt → paralisi facciale; <b>PHN</b> complicanza più frequente.",
        "EBV: febbre, faringite essudativa, <b>linfonodi laterocervicali posteriori</b>, splenomegalia; <b>esantema da amoxicillina</b>; rottura splenica.",
        "CMV: sindrome simil-mononucleosica (test eterofilo negativo), malattia nel trapianto, <b>retinite nell’AIDS</b>, congenito (calcificazioni, <b>ipoacusia</b>).",
        "HHV-6B: <b>esantema critico</b> (eruzione allo sfebbramento). HHV-8: <b>sarcoma di Kaposi</b> (classico negli uomini anziani del Mediterraneo)."
      ],
      visuals: [
        { type: "compare", title: "Varicella vs zoster", cols: [
          { h: "Varicella", tone: "accent", items: ["Infezione primaria", "Prima tronco e volto", "Lesioni in tutti gli stadi", "Contagiosa da 1–2 gg prima dell’eruzione fino alle croste", "Adulti: polmonite"] },
          { h: "Zoster", tone: "warn", items: ["Riattivazione", "Dolore prima dell’eruzione", "Un dermatomero, non supera la linea mediana", "Segno di Hutchinson → occhio", "PHN ≥90 giorni"] }
        ]},
        { type: "cards", title: "Da non perdere", items: [
          { h: "Encefalite erpetica", p: "Febbre + alterazioni comportamentali, convulsioni, afasia", tag: "Aciclovir subito", tone: "warn" },
          { h: "Varicella neonatale", p: "Esantema materno da 5 gg prima a 2 gg dopo il parto", tag: "VZIG", tone: "warn" },
          { h: "Segno di Hutchinson", p: "Vescicole sulla punta del naso", tag: "Oculista" },
          { h: "Rottura splenica", p: "Mononucleosi, prime settimane", tag: "Niente sport di contatto" },
          { h: "Retinite da CMV", p: "AIDS, CD4 &lt;50", tag: "Fondo dell’occhio" },
          { h: "CMV congenito", p: "Microcefalia, calcificazioni, ipoacusia", tag: "Ipoacusia tardiva" }
        ]},
        { type: "table", title: "Sarcoma di Kaposi: quattro forme", head: ["Forma", "Chi"], rows: [
          ["Classica", "Uomini anziani del Mediterraneo, gambe, indolente"],
          ["Endemica", "Africa subsahariana"],
          ["Iatrogena", "Pazienti trapiantati"],
          ["Epidemica", "Definente l’AIDS"]
        ]}
      ]
    },
    "5": {
      summary: [
        "Vescicola / ulcera: <b>PCR della lesione deroofata</b>. Il test di Tzanck non distingue HSV da VZV.",
        "Sierologia HSV: solo IgG tipo-specifiche; <b>IgM inutili</b>; HSV-2 debolmente positivo richiede conferma; nessuno screening generalizzato.",
        "Encefalite erpetica: <b>PCR sul liquor</b>; può essere <b>negativa nelle prime 72 h → ripetere</b>. RM del lobo temporale.",
        "EBV: <b>Monospot</b> + linfociti atipici &gt;10%; negativo nelle fasi precoci e nei bambini &lt;4 anni → sierologia EBV.",
        "CMV nel trapianto: <b>PCR quantitativa (UI/ml)</b>, stesso test; <b>la malattia GI può avere PCR ematica negativa → biopsia</b>.",
        "Gravidanza: IgG/IgM CMV + <b>avidità</b>. Neonato: <b>PCR su urine/saliva entro 21 giorni</b>."
      ],
      visuals: [
        { type: "table", title: "Esame di scelta", head: ["Quesito", "Esame"], rows: [
          ["HSV / VZV mucocutaneo", "PCR su tampone della lesione"],
          ["Encefalite erpetica", "PCR sul liquor (ripetere se negativa precocemente)"],
          ["Mononucleosi", "Test per anticorpi eterofili + striscio di sangue"],
          ["CMV dopo trapianto", "PCR quantitativa su sangue"],
          ["CMV con invasione tissutale", "Biopsia, istologia"],
          ["CMV primario in gravidanza", "IgG, IgM, <b>bassa avidità</b>"],
          ["CMV congenito", "PCR su urine / saliva ≤21 giorni"],
          ["Sarcoma di Kaposi", "Biopsia, HHV-8 LANA"]
        ]},
        { type: "table", title: "Interpretare la sierologia EBV", head: ["Quadro", "VCA IgM", "VCA IgG", "EBNA IgG"], rows: [
          ["Mai infetto", "−", "−", "−"],
          ["<b>Infezione acuta</b>", "<b>+</b>", "+", "<b>−</b>"],
          ["Infezione pregressa", "−", "+", "<b>+</b>"]
        ]}
      ]
    },
    "6": {
      summary: [
        "<b>Aciclovir/valaciclovir/famciclovir</b>: richiedono la TK virale; HSV, VZV; reni.",
        "<b>Brivudina + 5-FU/capecitabina può uccidere</b> (inibizione della DPD).",
        "<b>Ganciclovir/valganciclovir</b>: CMV; <b>neutropenia</b>. <b>Foscarnet, cidofovir</b>: <b>reni</b>. Letermovir: <b>solo profilassi</b> del CMV, nessuna attività su HSV/VZV.",
        "Encefalite erpetica: <b>aciclovir e.v. immediatamente</b>, 14–21 giorni. Herpes genitale: trattare tutti i primi episodi; terapia episodica o soppressiva.",
        "Zoster: antivirali <b>entro 72 h</b>; e.v. se disseminato, SNC, oftalmico.",
        "EBV: <b>nessun antivirale</b>; corticosteroidi solo per ostruzione delle vie aeree, emolisi.",
        "Malattia da CMV: ganciclovir / valganciclovir, ridurre l’immunosoppressione; refrattaria → test di resistenza, foscarnet, maribavir. Congenito sintomatico: <b>valganciclovir per 6 mesi</b>."
      ],
      visuals: [
        { type: "table", title: "Antivirali", head: ["Farmaco", "Uso", "Attenzione"], rows: [
          ["Aciclovir, valaciclovir, famciclovir", "HSV, VZV", "Nefropatia da cristalli"],
          ["Brivudina", "Zoster", "<b>Fatale con le fluoropirimidine</b>"],
          ["Ganciclovir, valganciclovir", "CMV", "<b>Neutropenia</b>"],
          ["Foscarnet", "CMV / HSV resistenti", "<b>Reni</b>, elettroliti"],
          ["Cidofovir", "CMV / HSV resistenti", "<b>Reni</b>"],
          ["Letermovir", "Profilassi del CMV", "Nessuna copertura HSV/VZV"],
          ["Maribavir", "CMV refrattario", "Antagonizza il ganciclovir"]
        ]},
        { type: "timeline", title: "Finestre temporali", points: [
          { at: "Immediatamente", h: "Encefalite erpetica", p: "Aciclovir e.v. prima dei risultati", tone: "warn" },
          { at: "≤ 24 h", h: "Varicella (a rischio)", p: "Antivirale orale" },
          { at: "≤ 72 h", h: "Zoster", p: "Antivirale dalla comparsa dell’eruzione" },
          { at: "≤ 1 mese di vita", h: "CMV congenito", p: "Valganciclovir per 6 mesi" }
        ]}
      ]
    },
    "7": {
      summary: [
        "Herpes genitale: counseling, preservativo, notifica al partner, test per HIV/IST.",
        "Gravidanza con herpes genitale: <b>terapia soppressiva dalla 36ª settimana</b>; cesareo se lesioni al travaglio.",
        "Una ricaduta settimane dopo un’encefalite erpetica può essere un’<b>encefalite anti-recettore NMDA</b>.",
        "Zoster in una persona giovane → <b>test HIV</b>.",
        "Mononucleosi: <b>niente sport di contatto per ≥3–4 settimane</b> e finché la milza è ingrandita.",
        "CMV: PCR settimanale durante la terapia pre-emptive. Congenito: <b>follow-up audiologico</b> per tutta l’infanzia."
      ],
      visuals: [
        { type: "cards", title: "Perle del follow-up", items: [
          { h: "Ricaduta post-encefalite", p: "Pensare all’autoimmunità (anti-NMDA)", tag: "Non virale", tone: "warn" },
          { h: "Giovane adulto con zoster", p: "Nessuna causa evidente", tag: "Test HIV" },
          { h: "Mononucleosi", p: "Milza ingrandita", tag: "Niente sport di contatto" },
          { h: "CMV congenito", p: "L’ipoacusia può essere tardiva", tag: "Audiologia" }
        ]}
      ]
    },
    "8": {
      summary: [
        "<b>Vaccino antivaricella</b>: vivo, 2 dosi (MPRV in Italia); non in gravidanza o in caso di immunosoppressione grave.",
        "<b>Vaccino ricombinante anti-zoster</b>: <b>non vivo</b>, 2 dosi; utilizzabile negli <b>immunocompromessi</b>; Italia: 65 anni e soggetti a rischio dai 18 anni.",
        "Nessun vaccino per HSV, CMV, EBV, HHV-8.",
        "Esposizione a varicella: <b>vaccino entro 3–5 giorni</b> (immunocompetenti); <b>VZIG entro 10 giorni</b> (immunocompromessi, gravide, neonati a rischio).",
        "Precauzioni per via aerea + da contatto per varicella e zoster disseminato.",
        "CMV: profilassi universale o terapia pre-emptive nel SOT; <b>letermovir</b> nell’HSCT R+. CMV congenito: <b>igiene</b>; valaciclovir per l’infezione primaria nel primo trimestre."
      ],
      visuals: [
        { type: "compare", title: "Vaccini antivaricella vs anti-zoster", cols: [
          { h: "Vaccino antivaricella", tone: "warn", items: ["Vivo attenuato", "2 dosi nell’infanzia", "Non in gravidanza", "Non in immunosoppressione grave"] },
          { h: "Vaccino ricombinante anti-zoster", tone: "good", items: ["Non vivo (glicoproteina E + adiuvante)", "2 dosi, a 2–6 mesi di distanza", "Utilizzabile negli immunocompromessi", "Utilizzabile dopo uno zoster pregresso"] }
        ]},
        { type: "timeline", title: "Dopo esposizione a varicella (non immuni)", points: [
          { at: "≤ 3 (–5) giorni", h: "Vaccino antivaricella", p: "Immunocompetenti, nessuna controindicazione", tone: "good" },
          { at: "≤ 10 giorni", h: "VZIG", p: "Immunocompromessi, gravide, neonati a rischio", tone: "warn" }
        ]}
      ]
    }
  }
};
