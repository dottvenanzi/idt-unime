/* Livello di ripasso per il Capitolo 16 — Epatiti virali. Fonte: chapters-it/16-*.md */
window.REVISION = window.REVISION || {};
window.REVISION[16] = {
  sections: {
    "1": {
      summary: [
        "<b>HAV, HEV</b>: oro-fecali, acute, autolimitanti (HEV cronica solo negli immunodepressi).",
        "<b>HBV, HDV, HCV</b>: sangue, via sessuale, perinatale; cronicizzazione → cirrosi, HCC.",
        "<b>HBV è l’unico virus a DNA</b>: <b>cccDNA</b> + integrazione → soppresso, raramente eradicato.",
        "HBsAg = envelope; <b>HBeAg = replicazione elevata</b>; <b>anti-HBc = qualsiasi contatto</b> (mai da vaccino).",
        "<b>HDV</b> è difettivo: <b>senza HBsAg, niente HDV</b>; condivide il recettore NTCP.",
        "<b>HCV</b>: nessuna correzione di bozze → quasispecie, nessun vaccino; nessuna fase a DNA → <b>guaribile</b>. Bersagli dei DAA: NS3/4A, NS5A, NS5B.",
        "HEV gt 1–2: umani, epidemie idriche. <b>Gt 3–4: zoonotici (suini, cinghiali)</b>, Europa."
      ],
      visuals: [
        { type: "table", title: "I cinque virus", head: ["", "Genoma", "Trasmissione", "Incubazione", "Cronicizza?", "Vaccino"], rows: [
          ["<b>HAV</b>", "RNA", "Oro-fecale", "~4 sett.", "No", "Sì"],
          ["<b>HBV</b>", "<b>DNA</b>", "Sangue, sessuale, perinatale", "2–4 mesi", "Dipende dall’età", "Sì"],
          ["<b>HDV</b>", "RNA (difettivo)", "Come HBV", "Come HBV", "Superinfezione", "Vaccino anti-HBV"],
          ["<b>HCV</b>", "RNA", "Sangue", "6–8 sett.", "Maggior parte degli adulti", "<b>No</b>"],
          ["<b>HEV</b>", "RNA", "Oro-fecale, carne suina", "5–6 sett.", "Solo immunodepressi", "Solo in Cina"]
        ]},
        { type: "cards", title: "Antigeni di HBV", items: [
          { h: "HBsAg", p: "Envelope; enorme eccesso nel siero", tag: "Infezione in atto" },
          { h: "HBeAg", p: "Secreto; assente nei mutanti pre-core", tag: "Replicazione elevata", tone: "warn" },
          { h: "Anti-HBc", p: "Non indotto dal vaccino", tag: "Qualsiasi contatto" },
          { h: "cccDNA", p: "Minicromosoma nucleare, non toccato dagli analoghi", tag: "Perché non si eradica", tone: "warn" }
        ]}
      ]
    },
    "2": {
      summary: [
        "2022: <b>254 milioni</b> con HBV cronica, <b>50 milioni</b> con HCV cronica; <b>1,3 milioni di morti</b> (83% HBV).",
        "~4,5% degli HBsAg+ ha HDV. Obiettivo OMS: eliminazione entro il <b>2030</b>.",
        "HCV oggi soprattutto tramite <b>uso di droghe per via iniettiva</b>; HAV: cibo, viaggi, MSM.",
        "<b>La cronicizzazione di HBV dipende dall’età</b>: ~90% perinatale, 25–50% tra 1 e 5 anni, <b>&lt;5% adulti</b>.",
        "<b>HEV gt 3</b> è ora la causa più frequente di epatite virale acuta in molti Paesi europei."
      ],
      visuals: [
        { type: "bars", title: "HBV: rischio di infezione cronica per età al contagio", unit: "%", max: 90, rows: [
          { label: "Perinatale", v: 90, t: "~90%", tone: "warn" },
          { label: "1–5 anni", v: 38, t: "25–50%" },
          { label: "Adulto immunocompetente", v: 5, t: "&lt;5%" }
        ]},
        { type: "stats", items: [
          { v: "254 mln", l: "persone con HBV" },
          { v: "50 mln", l: "persone con HCV" },
          { v: "1,3 mln", l: "morti all’anno" }
        ]}
      ]
    },
    "3": {
      summary: [
        "Il danno è <b>immunomediato</b> (linfociti T CD8): risposta forte = forma acuta grave ma eliminazione; debole = lieve ma persistente.",
        "HBV, quattro fasi: infezione HBeAg+, epatite HBeAg+, infezione HBeAg−, epatite HBeAg−.",
        "<b>HBV causa HCC anche senza cirrosi</b>.",
        "<b>Riattivazione</b> con <b>anti-CD20</b>, HSCT, corticosteroidi ad alte dosi e DAA anti-HCV nella coinfezione.",
        "<b>Superinfezione</b> da HDV → &gt;80% cronica, cirrosi rapida (l’epatite virale più grave).",
        "HCV: ~1/4 elimina il virus; cirrosi nel 15–30% in 20–30 anni; HCC 1–4%/anno una volta cirrotici; crioglobulinemia.",
        "HEV: gt 1 in <b>gravidanza</b> → insufficienza epatica; gt 3 nel trapianto → <b>cronica</b>."
      ],
      visuals: [
        { type: "table", title: "Fasi dell’HBV cronica", head: ["Fase", "HBeAg", "HBV DNA", "ALT"], rows: [
          ["1 · Infezione HBeAg+", "+", "Molto alto", "Normali"],
          ["2 · Epatite HBeAg+", "+", "Alto", "<b>Aumentate</b>"],
          ["3 · Infezione HBeAg−", "−", "Basso (&lt;2.000 UI/ml)", "Normali"],
          ["4 · Epatite HBeAg−", "−", "&gt;2.000, fluttuante", "<b>Aumentate</b>"]
        ]},
        { type: "compare", title: "HDV", cols: [
          { h: "Coinfezione", tone: "good", items: ["HBV + HDV insieme", "Acuta, talvolta bifasica", "Cronica &lt;5%"] },
          { h: "Superinfezione", tone: "warn", items: ["HDV su HBV cronica", "Riacutizzazione grave", "Cronica &gt;80%", "Cirrosi rapida, HCC"] }
        ]},
        { type: "flow", title: "Storia naturale dell’HCV", steps: [
          { h: "Infezione acuta", p: "Per lo più silente; ~1/4 elimina il virus" },
          { h: "Epatite cronica", p: "RNA &gt;6 mesi" },
          { h: "Cirrosi", p: "15–30% in 20–30 anni", tone: "warn" },
          { h: "HCC", p: "1–4% all’anno una volta cirrotici", tone: "warn" }
        ]}
      ]
    },
    "4": {
      summary: [
        "L’epatite acuta è uguale per tutti i virus: <b>prodromi</b> (malessere, nausea) → <b>ittero</b>, urine scure, feci chiare.",
        "ALT &gt; AST, spesso <b>&gt;10× LSN</b>. La maggior parte delle infezioni è anitterica (bambini con HAV, HCV acuta).",
        "<b>Encefalopatia + INR ≥1,5 = insufficienza epatica acuta</b> → centro trapianti.",
        "HBV: PAN, glomerulonefrite. <b>HCV: crioglobulinemia</b>, linfoma B, porfiria cutanea tarda, lichen planus, diabete.",
        "HEV: Guillain-Barré, amiotrofia nevralgica.",
        "Cronica: silente fino alla cirrosi (ascite, varici, encefalopatia) o all’HCC."
      ],
      visuals: [
        { type: "flow", title: "Epatite virale acuta", dir: "row", steps: [
          { h: "Prodromi", p: "Malessere, nausea, dolore all’ipocondrio destro; artralgie/orticaria nell’HBV" },
          { h: "Fase itterica", p: "Ittero, urine scure, feci chiare" },
          { h: "Convalescenza", p: "Settimane; l’astenia persiste" }
        ]},
        { type: "note", h: "Insufficienza epatica acuta", p: "Encefalopatia + INR ≥1,5 senza epatopatia preesistente. Rischio maggiore: HAV negli anziani o in epatopatia cronica, HBV ± HDV, HEV gt 1 in gravidanza." },
        { type: "table", title: "Indizi extraepatici", head: ["Virus", "Manifestazioni"], rows: [
          ["HBV", "Poliarterite nodosa, glomerulonefrite, quadro simil-malattia da siero"],
          ["HCV", "Crioglobulinemia mista, LNH a cellule B, porfiria cutanea tarda, lichen planus, diabete"],
          ["HEV", "Guillain-Barré, amiotrofia nevralgica, glomerulonefrite"]
        ]}
      ]
    },
    "5": {
      summary: [
        "Pannello per epatite acuta: <b>IgM anti-HAV, HBsAg + IgM anti-HBc, anti-HCV + HCV RNA, IgM anti-HEV</b>.",
        "Testare HBV (HBsAg, anti-HBc, anti-HBs) <b>prima dell’immunosoppressione</b> e prima dei DAA anti-HCV.",
        "<b>Anti-HBs isolato = vaccinato</b>; anti-HBc + anti-HBs = guarito; IgM anti-HBc unico marcatore nel <b>periodo finestra</b>.",
        "Ogni HBsAg+: <b>anti-HDV</b>, anti-HCV, HIV, anti-HAV, stadiazione della fibrosi.",
        "HCV: anti-HCV → <b>HCV RNA</b> (reflex). L’anticorpo persiste per tutta la vita, non protegge.",
        "HEV negli immunodepressi: <b>RNA necessario</b>.",
        "Fibrosi: <b>elastografia</b>, FIB-4, APRI; biopsia raramente."
      ],
      visuals: [
        { type: "table", title: "Interpretare la sierologia HBV", head: ["HBsAg", "Anti-HBc", "IgM anti-HBc", "Anti-HBs", "Significato"], rows: [
          ["−", "−", "−", "−", "Suscettibile → vaccinare"],
          ["−", "−", "−", "+", "<b>Vaccinato</b>"],
          ["−", "+", "−", "+", "<b>Guarito</b> (rischio di riattivazione)"],
          ["+", "+", "+", "−", "<b>Acuta</b>"],
          ["+", "+", "−", "−", "<b>Cronica</b> (&gt;6 mesi)"],
          ["−", "+", "−", "−", "Anti-HBc isolato → HBV DNA"]
        ]},
        { type: "algo", title: "Test per HCV", nodes: [
          { q: "Anti-HCV positivo?", opts: [
            { when: "No", to: "Nessuna infezione (testare l’RNA se immunodepresso o sospetta forma acuta)", tone: "good" },
            { when: "Sì", to: "HCV RNA", next: 1 }
          ]},
          { q: "HCV RNA rilevabile?", opts: [
            { when: "Sì", to: "Infezione in atto → trattare", tone: "warn" },
            { when: "No", to: "Guarita (o anticorpo falsamente positivo)" }
          ]}
        ]}
      ]
    },
    "6": {
      summary: [
        "Acuta: terapia di supporto; evitare alcol ed epatotossici. HBV acuta grave → analogo nucleos(t)idico. <b>HCV acuta → trattare subito</b>.",
        "Obiettivo HBV: sopprimere il DNA; ideale la <b>perdita di HBsAg</b>. Trattare l’epatite (DNA &gt;2.000 + ALT aumentate/fibrosi), <b>ogni cirrosi con DNA rilevabile</b>, gravidanza con DNA &gt;200.000.",
        "Farmaci per HBV: <b>entecavir, tenofovir</b> (a lungo termine) o <b>PegIFN</b> (durata definita). Mai sospendere gli analoghi nella cirrosi.",
        "Profilassi prima di <b>rituximab</b>/HSCT negli HBsAg+ o negli anti-HBc+ ad alto rischio.",
        "HDV: <b>bulevirtide</b> (blocca NTCP) ± PegIFN; gli analoghi non agiscono su HDV.",
        "HCV: <b>trattare tutti</b>; DAA pangenotipici <b>8–12 settimane</b>, SVR12 &gt;95%. Niente inibitori della proteasi nella cirrosi scompensata; <b>amiodarone + sofosbuvir</b> → bradicardia.",
        "HEV cronica: ridurre l’immunosoppressione, poi <b>ribavirina</b> (teratogena)."
      ],
      visuals: [
        { type: "table", title: "Terapia per virus", head: ["Virus", "Terapia", "Obiettivo"], rows: [
          ["HAV", "Supporto", "Guarigione"],
          ["HBV", "Entecavir / tenofovir (indefinita) o PegIFN (48 sett.)", "Soppressione del DNA; idealmente perdita di HBsAg"],
          ["HDV", "Bulevirtide ± PegIFN", "Risposta di HDV RNA"],
          ["HCV", "Sofosbuvir/velpatasvir 12 sett. o glecaprevir/pibrentasvir 8 sett.", "<b>SVR12 = guarigione</b>"],
          ["HEV (cronica)", "Ridurre l’immunosoppressione, ribavirina 3 mesi", "Negativizzazione dell’RNA"]
        ]},
        { type: "compare", title: "HBV: analoghi vs interferone", cols: [
          { h: "Entecavir, tenofovir", tone: "accent", items: ["Orali, ben tollerati", "Alta barriera genetica", "Di solito a tempo indefinito", "Perdita di HBsAg rara"] },
          { h: "Interferone peghilato", tone: "warn", items: ["Durata definita (~48 settimane)", "Più perdita di HBsAg in pazienti selezionati", "Molti effetti collaterali", "Non nella cirrosi scompensata né in gravidanza"] }
        ]}
      ]
    },
    "7": {
      summary: [
        "HBV acuta: HBsAg a 6 mesi; <b>&gt;6 mesi = cronica</b>.",
        "HBV cronica: ALT, DNA, HBsAg per tutta la vita; in terapia con tenofovir controllare il rene.",
        "<b>Sorveglianza dell’HCC: ecografia ogni 6 mesi</b> (± AFP) nella cirrosi e nell’HBV ad alto rischio.",
        "HCV: confermare l’SVR12; dimettere se nessuna fibrosi avanzata; <b>F3–F4 mantengono la sorveglianza dell’HCC a vita</b>; ritestare l’RNA ogni anno se il rischio persiste."
      ],
      visuals: [
        { type: "compare", title: "Dopo la guarigione dall’HCV (SVR12)", cols: [
          { h: "Nessuna fibrosi avanzata", tone: "good", items: ["Guarito", "Dimissione", "Ritestare l’RNA ogni anno se ancora a rischio"] },
          { h: "F3–F4 (fibrosi avanzata, cirrosi)", tone: "warn", items: ["Ecografia ± AFP ogni 6 mesi a vita", "Screening delle varici", "L’SVR riduce, non elimina, il rischio di HCC"] }
        ]}
      ]
    },
    "8": {
      summary: [
        "<b>HAV</b>: vaccino inattivato, 2 dosi; PEP entro 2 settimane (vaccino; Ig nei lattanti, immunocompromessi, epatopatici).",
        "<b>HBV</b>: ricombinante, 3 dosi; protezione = <b>anti-HBs ≥10 mUI/ml</b>; dose alla nascita; obbligatorio in Italia dal 1991. <b>Previene anche l’HDV</b>.",
        "Madre-figlio: screening in tutte le gravidanze; <b>tenofovir se DNA &gt;200.000</b>; neonato <b>vaccino + HBIG entro 12–24 h</b>; allattamento consentito.",
        "<b>HCV: nessun vaccino, nessuna PEP</b>; riduzione del danno, terapia come prevenzione.",
        "HEV: cuocere carne di maiale e selvaggina; acqua sicura."
      ],
      visuals: [
        { type: "flow", title: "Prevenire la trasmissione madre-figlio di HBV", steps: [
          { h: "Screening HBsAg in ogni gravidanza", p: "" },
          { h: "HBV DNA &gt;200.000 UI/ml?", p: "Tenofovir dalla 24ª–28ª settimana", tone: "accent" },
          { h: "Nascita", p: "Vaccino + HBIG entro 12–24 h", tone: "warn" },
          { h: "Completare il ciclo", p: "Testare HBsAg e anti-HBs del bambino" }
        ]},
        { type: "table", title: "Vaccini", head: ["Virus", "Vaccino"], rows: [
          ["HAV", "Inattivato, 2 dosi"],
          ["HBV (e HDV)", "HBsAg ricombinante, 3 dosi"],
          ["HCV", "Nessuno"],
          ["HEV", "Autorizzato solo in Cina"]
        ]}
      ]
    }
  }
};
