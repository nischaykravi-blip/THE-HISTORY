import type { DynastyDetail } from "./detailTypes"

export const ancientResearch: Record<string, Partial<DynastyDetail>> = {
  "indus-valley-civilisation": {
    imageAttribution: "Avantiputra7",
    imageLicense: "CC BY-SA 3.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Indus_Valley_Civilization,_Mature_Phase_(2600-1900_BCE).png",
    sources: [
      { title: "Indus Valley Civilisation", publisher: "Encyclopaedia overview", url: "https://en.wikipedia.org/wiki/Indus_Valley_Civilisation" },
      { title: "The Ancient Indus Valley: New Perspectives", publisher: "Jane McIntosh, ABC-CLIO, 2008", url: "https://books.google.com/books?vid=ISBN9781576079072" },
      { title: "Archaeological Ruins at Moenjodaro", publisher: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/138/" },
    ],
    sections: {
      overview: {
        paragraphs: [
          { text: "The Indus or Harappan civilisation was a Bronze Age urban tradition spread across the Indus basin and adjoining parts of present-day Pakistan, northwestern India, and Afghanistan. Archaeologists distinguish an early regional development, a mature urban phase conventionally dated c. 2600-1900 BCE, and later post-urban communities. Its largest known settlements included Harappa, Mohenjo-daro, Dholavira, and Rakhigarhi; no capital city or named sovereign has been established. [1][2]", citations: [0, 1] },
          { text: "The Indus script remains undeciphered. As a result, political institutions, personal names, religious beliefs, and the civilisation's own account of its past cannot be read directly from its inscriptions. Interpretations must distinguish excavated evidence from later speculation. [2]", citations: [1] },
        ],
      },
      timeline: {
        paragraphs: [{ text: "These dates describe archaeological phases, not reigns of known rulers. Regional sequences differ by site, and the mature-phase dates are more secure than a single civilisation-wide beginning or ending. [1][2]", citations: [0, 1] }],
        table: {
          caption: "Archaeological phases of the Indus tradition",
          columns: ["Phase", "Approximate dates", "Historical development"],
          rows: [
            ["Early Harappan", "c. 3300-2600 BCE", "Regional villages and towns developed; craft and exchange networks expanded."],
            ["Mature Harappan", "c. 2600-1900 BCE", "Large planned settlements, standardised material practices, and the still-undeciphered script are widely attested."],
            ["Late Harappan", "c. 1900-1300 BCE", "Large urban centres contracted and regional settlement traditions became more prominent."],
          ],
        },
      },
      "major-rulers": {
        paragraphs: [{ text: "No ruler can be named from securely deciphered Indus writing. Suggestions that particular seals portray kings, priests, or named deities are interpretations, not established biographies. The absence of names is a limit of the evidence, not proof that the cities had no political leadership. [2]", citations: [1] }],
        table: {
          caption: "Leadership evidence",
          columns: ["Question", "What the evidence supports"],
          rows: [["Named rulers", "None identified from deciphered contemporary records."], ["Political centres", "Harappa, Mohenjo-daro, Dholavira, and other large settlements; no confirmed imperial capital."], ["Succession", "Unknown; the script cannot presently be read."]],
        },
      },
      "rise-to-power": {
        paragraphs: [
          { text: "Urbanism grew from earlier settled farming and craft communities, including traditions at Mehrgarh and settlements in the greater Indus region. The transition involved increasing exchange and settlement complexity over many centuries; it was not a documented conquest by a known founder. [1][2]", citations: [0, 1] },
          { text: "Mature cities occupied a broad network of river valleys, plains, and coastal zones. Similar weights, seals, and construction practices connect distant sites, but scholars continue to debate whether this reflects central state control, shared standards, or linked regional authorities. [2]", citations: [1] },
        ],
      },
      "battles-military": {
        paragraphs: [
          { text: "No readable Indus chronicle records a war, ruler, or military campaign. Fortified walls at some settlements and recovered weapons are material evidence, but their function and connection to organised warfare must be assessed site by site. [2]", citations: [1] },
          { text: "There is no sound basis for treating the civilisation's contraction as the result of one invasion. Current accounts examine multiple local changes, including settlement shifts, altered river systems, and the reorganisation of exchange.", citations: [1] },
        ],
      },
      administration: {
        paragraphs: [
          { text: "Planned streets, drainage, brick proportions, seals, and calibrated weights show coordination and shared technical conventions. They do not by themselves demonstrate a single monarch, central bureaucracy, or uniform empire covering every site. [2]", citations: [1] },
          { text: "Large public structures and carefully managed water facilities at sites such as Dholavira indicate collective planning. The officials, decision-making bodies, and mechanisms that organised this work remain unknown.", citations: [1] },
        ],
      },
      "economy-trade": {
        paragraphs: [
          { text: "Residents cultivated crops, kept domestic animals, and produced ceramics, shell objects, stone beads, metal tools, and ornaments. Specialised crafts depended on materials moved between regions, including stone, metals, and marine shell. [1][2]", citations: [0, 1] },
          { text: "Harappan objects and Mesopotamian references to Meluhha attest to exchange linking the Indus region with the Gulf and western Asia. The exact routes, trading institutions, and balance of local versus long-distance commerce are still studied.", citations: [1] },
        ],
      },
      society: {
        paragraphs: [
          { text: "House sizes, workshops, burial practices, and settlement scale vary. This is evidence of differentiated work and access to resources, but it does not supply a complete social hierarchy or identify named occupational groups. [2]", citations: [1] },
          { text: "Children's toys, household tools, food remains, and craft debris help reconstruct daily life. Because most evidence comes from excavated deposits, it is uneven across communities and cannot recover every person's experience.", citations: [1] },
        ],
      },
      "religion-philosophy": {
        paragraphs: [
          { text: "Seals, figurines, animal images, and structures interpreted as ritual spaces have been used to propose religious meanings. None provides a readable statement of doctrine. Directly equating an Indus image with a named later Hindu deity is disputed and should not be presented as fact. [2]", citations: [1] },
          { text: "No named priests, philosophers, or religious institutions are known from deciphered texts. The subject remains an archaeological question rather than a recoverable list of beliefs.", citations: [1] },
        ],
      },
      "art-architecture": {
        paragraphs: [
          { text: "Mohenjo-daro and Harappa preserve fired-brick streets, wells, drains, platforms, and large public buildings. Dholavira is noted for its fortifications, reservoirs, and distinct use of stone. These are regional examples rather than a single standard city plan. [2][3]", citations: [1, 2] },
          { text: "Stamp seals, painted pottery, faience, shell inlay, stone beads, and small bronze and stone figures document specialised craft traditions. The script appears on seals and objects, usually in very short sequences. [1][2]", citations: [0, 1] },
        ],
      },
      "science-technology": {
        paragraphs: [
          { text: "Excavated weights show carefully controlled units, while bricks and urban drains demonstrate planning and construction skills. Dholavira's reservoirs and water channels show adaptation to a dry environment. These are material records of practice; no technical manual or inventor is known. [2][3]", citations: [1, 2] },
          { text: "Copper alloy working, kiln-fired ceramics, bead drilling, and faience production are documented at excavated sites. Claims about a single civilisation-wide measurement authority remain interpretations of the standardisation evidence.", citations: [1] },
        ],
      },
      "territory-maps": {
        paragraphs: [
          { text: "The civilisation's distribution extended from the Indus and its tributaries across parts of the Ghaggar-Hakra region to Gujarat and the Makran coast. Settlements differed greatly in size and function; the map shows archaeological distribution and a proposed phase, not a surveyed political border. [1][2]", citations: [0, 1] },
        ],
      },
      "decline-transformation": {
        paragraphs: [
          { text: "After c. 1900 BCE, many large urban centres declined, long-distance material conventions changed, and populations became more regionally distributed. The process unfolded over centuries and was not identical at every settlement. [1][2]", citations: [0, 1] },
          { text: "Climate and hydrological change, shifting river courses, changing trade links, and local adaptation are discussed as contributing factors. No single explanation is universally accepted, and invasion-based accounts are not established by the archaeological record. [2]", citations: [1] },
        ],
      },
      legacy: {
        paragraphs: [
          { text: "The Indus civilisation is one of South Asia's earliest large urban traditions. Its settlements are essential to the history of city planning, craft production, water management, and long-distance exchange in the third millennium BCE. [2][3]", citations: [1, 2] },
          { text: "Its undeciphered script and uncertain political organisation remain central research problems. Later cultural continuities are possible subjects of study, but specific direct links must be argued from evidence rather than assumed.", citations: [1] },
        ],
      },
      sources: {
        paragraphs: [{ text: "The account prioritises archaeological synthesis and UNESCO site documentation. The script is undeciphered, so the limits of textual evidence are noted throughout." }],
      },
    },
  },
  "vedic-period-janas-tribal-kingdoms": {
    imageAttribution: "Avantiputra7",
    imageLicense: "CC BY-SA 3.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Early_Vedic_Culture_(1700-1100_BCE).png",
    sources: [
      { title: "Vedic period", publisher: "Encyclopaedia overview", url: "https://en.wikipedia.org/wiki/Vedic_period" },
      { title: "A History of Ancient and Early Medieval India", publisher: "Upinder Singh, Pearson, 2008", url: "https://books.google.com/books?vid=ISBN9788131716779" },
      { title: "Early India: From the Origins to AD 1300", publisher: "Romila Thapar, University of California Press, 2002", url: "https://www.ucpress.edu/book/9780520242258/early-india" },
    ],
    sections: {
      overview: {
        paragraphs: [
          { text: "The Vedic period is a broad historical frame, conventionally c. 1500-500 BCE, associated with the composition and oral transmission of Vedic texts in northern South Asia. Historians distinguish early and later textual phases; the period is not a single dynasty or kingdom. [1][2]", citations: [0, 1] },
          { text: "The earliest hymns describe communities in the northwest, while later texts reflect political and settlement changes farther east in the Ganges-Yamuna region. Dates, migrations, and the relationship between text and archaeology remain subjects of scholarly debate. [2][3]", citations: [1, 2] },
        ],
      },
      timeline: {
        paragraphs: [{ text: "Textual layers cannot always be assigned precise calendar dates. The conventional period boundaries are useful scholarly labels, not dates recorded by Vedic authors. [1][2]", citations: [0, 1] }],
        table: {
          caption: "Broad phases of Vedic textual and political history",
          columns: ["Phase", "Approximate frame", "Evidence and change"],
          rows: [
            ["Early Vedic", "c. 1500-1000 BCE", "The Rigvedic hymns preserve chiefly northwestern settings and kin-based political communities."],
            ["Later Vedic", "c. 1000-600 BCE", "Later Vedic texts reflect eastward settlement, agriculture, and stronger territorial kingship."],
            ["Emerging Mahajanapadas", "from c. 600 BCE", "Large states and gana-sanghas appear in early Buddhist and Jain textual traditions."],
          ],
        },
      },
      "major-rulers": {
        paragraphs: [{ text: "Vedic literature is not a continuous royal chronicle. It preserves selected names and lineages, often in ritual or poetic contexts; reign dates and a complete succession cannot be reconstructed for the whole period. Sudas is associated with a Rigvedic battle hymn, but an absolute date is not known. [1][2]", citations: [0, 1] }],
        table: {
          caption: "Rulers and political lineages named in Vedic textual traditions",
          columns: ["Name or lineage", "Textual setting", "Historical caution"],
          rows: [
            ["Sudas", "Rigvedic hymn 7.18; associated with the Bharata/Tritsu tradition.", "The hymn is a primary poetic source; its battle has no secure calendar date."],
            ["Divodasa", "Appears in Rigvedic lineage and conflict traditions.", "Identifications across hymns are uncertain; no reliable regnal span is known."],
            ["Kuru and Panchala lineages", "Prominent in later Vedic ritual and prose texts.", "These are political communities and dynastic traditions, not one verified ruler list."],
          ],
        },
      },
      "rise-to-power": {
        paragraphs: [
          { text: "The Vedic corpus describes the growth of jana communities and chiefship rather than a documented founding of a unified Vedic state. Later texts place the Kurus and Panchalas in a new political and ritual landscape of the upper Ganges plain. [2][3]", citations: [1, 2] },
          { text: "The causes and routes of population movement are debated. Textual language history, archaeology, and comparative linguistics are different kinds of evidence and should not be collapsed into one simple invasion or migration narrative. [2][3]", citations: [1, 2] },
        ],
      },
      "battles-military": {
        paragraphs: [
          { text: "Rigveda 7.18 describes a conflict commonly called the Battle of the Ten Kings, in which Sudas and the Tritsus/Bharatas defeat a coalition. The hymn is a victory poem; its participants and geography are discussed by scholars, while its calendar date and full military circumstances remain unknown. [1][2]", citations: [0, 1] },
          { text: "Other hymns refer to cattle, wealth, and inter-group conflict. They offer no complete campaign history, force totals, or basis for projecting later epic battles into this period.", citations: [1, 2] },
        ],
      },
      administration: {
        paragraphs: [
          { text: "Early Vedic passages use rajan for a chief or ruler and refer to assemblies such as sabha and samiti. Their precise membership and authority are debated, and the texts do not describe a uniform bureaucracy. [1][2]", citations: [0, 1] },
          { text: "Later Vedic literature gives greater prominence to hereditary kingship, ritual legitimation, and territorial communities. These developments were gradual and regionally uneven; they should not be treated as a finished state apparatus.", citations: [1, 2] },
        ],
      },
      "economy-trade": {
        paragraphs: [
          { text: "Early Vedic hymns value cattle and describe pastoral wealth, while later texts reflect increasing cultivation and settled life. Archaeobotanical evidence provides a separate line of evidence for crops and subsistence. [2][3]", citations: [1, 2] },
          { text: "Craft work, exchange, and gifts appear in texts, but the corpus does not provide market prices, port records, or a continuous trade map. Later urban and coin economies belong to a changing landscape that emerges toward the Mahajanapada period.", citations: [1] },
        ],
      },
      society: {
        paragraphs: [
          { text: "The texts describe household, kin, ritual specialists, patrons, and dependants, but they are composed and transmitted by particular learned communities. Prescriptive passages do not serve as a census of all inhabitants. [2][3]", citations: [1, 2] },
          { text: "Women appear as ritual participants and in some philosophical dialogues, while later normative texts increasingly define gendered duties. Their varied roles cannot be reconstructed from a single rule or textual passage.", citations: [1, 2] },
        ],
      },
      "religion-philosophy": {
        paragraphs: [
          { text: "The Vedas preserve hymns addressed to deities including Indra, Agni, and Soma, along with ritual formulae. The corpus developed over time through oral transmission and should not be treated as a single authored book. [1][2]", citations: [0, 1] },
          { text: "Later Vedic prose and the early Upanishads include questions about ritual, knowledge, self, and ultimate reality. Textual layers and dates vary; these debates took shape alongside, not in isolation from, wider religious change. [2][3]", citations: [1, 2] },
        ],
      },
      "art-architecture": {
        paragraphs: [
          { text: "Vedic ritual altars and sacrificial spaces are described in texts, but durable monumental architecture is not the principal surviving evidence for this period. Archaeological remains must be dated independently before being associated with a textual tradition. [2]", citations: [1] },
          { text: "Oral poetry, metres, recitation, and memorisation are major cultural forms. The preservation of the Vedas depended on disciplined oral transmission rather than on surviving contemporary manuscripts.", citations: [1, 2] },
        ],
      },
      "science-technology": {
        paragraphs: [
          { text: "Vedic schools developed complex systems of phonetics, metre, and oral recitation. Later Vedanga texts formalised parts of this learning; their composition dates are not uniform and should not be assigned wholesale to the early period. [2]", citations: [1] },
          { text: "The Sulbasutras contain geometric constructions for ritual altars, but dating and textual layering are debated. They are evidence of specialised mathematical practice, not a basis for attributing later mathematical results to every Vedic community. [2][3]", citations: [1, 2] },
        ],
      },
      "territory-maps": {
        paragraphs: [
          { text: "Early Vedic textual geography is concentrated in the northwest and Punjab; later texts show greater attention to the upper Ganges plain and Kuru-Panchala. These are literary horizons, not surveyed state boundaries. [1][2]", citations: [0, 1] },
          { text: "The accompanying map is a modern reconstruction of an early cultural distribution. It should not be read as a political border map or as evidence for a single migration route. [2]", citations: [1] },
        ],
      },
      "decline-transformation": {
        paragraphs: [
          { text: "There was no single Vedic collapse. Textual traditions continued while settlements, political organisation, and religious practices changed; by the middle of the first millennium BCE, the Mahajanapadas and new ascetic movements were prominent in northern India. [2][3]", citations: [1, 2] },
        ],
      },
      legacy: {
        paragraphs: [
          { text: "Vedic compositions became foundational to several later Brahmanical traditions and remain among the oldest extensive bodies of South Asian literature. Their preservation also provides a major case study in oral textual transmission. [2][3]", citations: [1, 2] },
          { text: "Their historical use requires care: ritual poetry, later commentary, archaeology, and modern historical models answer different questions and do not always align.", citations: [1, 2] },
        ],
      },
      sources: { paragraphs: [{ text: "Read the textual and archaeological evidence together. The dates and political reconstructions remain scholarly conventions where no contemporary chronological record survives." }] },
    },
  },
  "sixteen-mahajanapadas": {
    imageAttribution: "Avantiputra7",
    imageLicense: "CC BY-SA 3.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Mahajanapadas_(c._500_BCE).png",
    sources: [
      { title: "Mahajanapadas", publisher: "Encyclopaedia overview", url: "https://en.wikipedia.org/wiki/Mahajanapadas" },
      { title: "A History of Ancient and Early Medieval India", publisher: "Upinder Singh, Pearson, 2008", url: "https://books.google.com/books?vid=ISBN9788131716779" },
      { title: "Early India: From the Origins to AD 1300", publisher: "Romila Thapar, University of California Press, 2002", url: "https://www.ucpress.edu/book/9780520242258/early-india" },
    ],
    sections: {
      overview: {
        paragraphs: [
          { text: "The Mahajanapadas were sixteen major political communities named in early Buddhist and Jain textual traditions, especially for the sixth to fourth centuries BCE. The category includes monarchies and gana-sanghas, whose institutions differed; it does not describe a league or a united empire. [1][2]", citations: [0, 1] },
          { text: "The period is associated with renewed urban growth in the middle Ganges region, use of iron in parts of the north, coinage, and the emergence of Buddhism and Jainism. Each process had its own chronology and regional pattern. [2][3]", citations: [1, 2] },
        ],
      },
      timeline: {
        paragraphs: [{ text: "The registry uses c. 600-345 BCE for the group. Individual states had different histories, and Magadha's political expansion continued as other polities changed or were incorporated. [1][2]", citations: [0, 1] }],
        table: {
          caption: "The sixteen polities in the traditional textual list",
          columns: ["Polity", "Broad region", "Historical note"],
          rows: [
            ["Anga", "Eastern Ganges region", "Associated with Champa; later came under Magadhan power."],
            ["Magadha", "Southern Bihar and middle Ganges", "Expanded under Haryanka, Shishunaga, and Nanda rulers."],
            ["Kasi", "Middle Ganges, around Varanasi", "A kingdom frequently mentioned in early Buddhist texts."],
            ["Kosala", "Awadh and adjoining areas", "A major kingdom associated with Shravasti and Saketa."],
            ["Vajji (Vrijji)", "North Bihar", "A confederacy whose principal community was the Licchavis."],
            ["Malla", "Eastern Uttar Pradesh and adjoining Terai", "Texts describe two Malla centres, Kusinara and Pava."],
            ["Chedi", "Bundelkhand and adjoining central India", "A polity in the traditional list; exact boundaries are uncertain."],
            ["Vatsa", "Yamuna region around Kaushambi", "A kingdom associated in literature with King Udayana."],
            ["Kuru", "Upper Ganges-Yamuna plain", "An older political community with a prominent later Vedic setting."],
            ["Panchala", "Rohilkhand and central Ganges-Yamuna plain", "Traditionally divided into northern and southern centres."],
            ["Matsya", "Northeastern Rajasthan", "A polity whose traditional centre is associated with Viratanagara."],
            ["Surasena", "Mathura region", "A kingdom centred on the Yamuna corridor."],
            ["Assaka (Asmaka)", "Godavari valley", "The list’s southern polity; its precise extent is debated."],
            ["Avanti", "Malwa and western central India", "Associated with Ujjayini and Mahishmati in literary traditions."],
            ["Gandhara", "Northwestern subcontinent", "Taxila was an important urban and learning centre."],
            ["Kamboja", "Northwestern frontier region", "Location and political form are uncertain in the textual record."],
          ],
        },
      },
      "major-rulers": {
        paragraphs: [{ text: "The traditional list does not provide a complete synchronised catalogue of rulers. Buddhist, Jain, and later literary sources name rulers selectively; dates and identities should be kept tied to the relevant polity and source. [1][2]", citations: [0, 1] }],
        table: {
          caption: "Rulers prominently connected with major polities in the period",
          columns: ["Ruler", "Polity", "Caution"],
          rows: [
            ["Bimbisara", "Magadha, Haryanka line", "Known chiefly from Buddhist and Jain textual traditions; chronology is reconstructed."],
            ["Ajatashatru", "Magadha, Haryanka line", "Associated with conflict involving the Vajjis in later accounts."],
            ["Prasenajit (Pasenadi)", "Kosala", "A ruler in Buddhist narratives; exact dates are not securely fixed."],
            ["Udayana", "Vatsa", "Prominent in literary tradition; biographical details are not independently verified."],
            ["Pradyota", "Avanti", "Appears in later traditions; chronology and details remain uncertain."],
          ],
        },
      },
      "rise-to-power": {
        paragraphs: [
          { text: "The Mahajanapadas grew out of earlier janapada communities as agricultural settlement, fortified towns, and regional political authority expanded. The term mahajanapada is a textual classification, not a single state-building event shared by all sixteen. [2][3]", citations: [1, 2] },
          { text: "Magadha benefited from a position along the Ganges and its tributaries and became the most expansionist power in later accounts. Kosala, Vatsa, Avanti, and the Vajji confederacy remained important competitors and centres in their own right. [1][2]", citations: [0, 1] },
        ],
      },
      "battles-military": {
        paragraphs: [
          { text: "Early Buddhist and Jain narratives describe rivalry, marriage alliances, and conflict among Magadha, Kosala, Avanti, and the Vajjis. The accounts are religious literature composed and transmitted after many described events, not contemporary campaign logs. [1][2]", citations: [0, 1] },
          { text: "The eventual expansion of Magadha is clear in the later political sequence, but the date and circumstances of each annexation are not equally well documented. Claims about a standardised army across all sixteen states are unsupported.", citations: [1, 2] },
        ],
      },
      administration: {
        paragraphs: [
          { text: "Some Mahajanapadas were monarchies; others, including the Vajji and Malla communities in textual accounts, are described as gana-sanghas. These terms do not map neatly onto modern democracies, and the sources do not establish equal political participation. [1][2]", citations: [0, 1] },
          { text: "Fortified settlements, rulers, councils, and officials appear unevenly across the sources. Local governance likely varied, and a single administrative model should not be assigned to the full list.", citations: [1, 2] },
        ],
      },
      "economy-trade": {
        paragraphs: [
          { text: "Archaeological and textual evidence from the period documents expanding towns, agriculture, iron objects, and early coinage in parts of northern India. Their introduction and use were not simultaneous across the whole region. [2][3]", citations: [1, 2] },
          { text: "Ganges routes linked inland settlements, while urban craft and market exchange supported growing political centres. The available evidence does not establish a single integrated economy for all sixteen polities.", citations: [1] },
        ],
      },
      society: {
        paragraphs: [
          { text: "The textual record places kings, householders, merchants, artisans, ascetics, and cultivators in changing urban and rural settings. Buddhist and Jain texts offer valuable views but are selective religious sources rather than comprehensive social surveys. [1][2]", citations: [0, 1] },
          { text: "Women and non-elite occupations appear in stories and legal or religious discussions, but the evidence is uneven. Claims about everyday status must be limited to the specific text, site, or inscription that supports them.", citations: [1, 2] },
        ],
      },
      "religion-philosophy": {
        paragraphs: [
          { text: "The period saw the growth of Buddhist and Jain communities alongside Brahmanical traditions and other renunciant movements. Early Buddhist and Jain texts preserve debates about conduct, knowledge, ritual, and liberation. [1][2]", citations: [0, 1] },
          { text: "These traditions developed within a diverse political landscape. The Mahajanapada list itself does not establish that any one polity followed a single exclusive religious policy.", citations: [1, 2] },
        ],
      },
      "art-architecture": {
        paragraphs: [
          { text: "Archaeological remains from early historic towns include fortifications, settlement layers, pottery, and urban infrastructure. Preservation and dating vary by site, so no uniform Mahajanapada architectural style can be inferred from the textual list. [2]", citations: [1] },
          { text: "Later Buddhist monuments preserve memories of the region, but they should not automatically be dated to the first appearance of the sixteen-state tradition.", citations: [1, 2] },
        ],
      },
      "science-technology": {
        paragraphs: [
          { text: "Iron-working, early punch-marked coinage, and urban construction are attested in parts of the broader period. These material findings are dated through archaeological contexts and do not document a shared technological policy among all states. [2][3]", citations: [1, 2] },
        ],
      },
      "territory-maps": {
        paragraphs: [
          { text: "The map locates the traditional sixteen polities across northern India and the northwestern frontier, with Assaka in the Deccan. The named regions are approximate: boundaries shifted, and several locations remain debated. [1][2]", citations: [0, 1] },
        ],
        note: "The map is a modern reconstruction from textual geography, not a contemporary boundary survey.",
      },
      "decline-transformation": {
        paragraphs: [
          { text: "Magadha expanded through successive dynasties and came to dominate much of the middle Ganges political landscape. The other Mahajanapadas did not all disappear at once; some were absorbed, reorganised, or continued under later powers. [1][2]", citations: [0, 1] },
        ],
      },
      legacy: {
        paragraphs: [
          { text: "The Mahajanapada framework helps historians study early state formation, urbanisation, and the political settings of Buddhist and Jain textual traditions. Its mixture of monarchies and confederacies resists a single narrative of linear empire-building. [2][3]", citations: [1, 2] },
        ],
      },
      sources: { paragraphs: [{ text: "The list and political geography are reconstructed from early Buddhist and Jain textual traditions and archaeological evidence. Names, locations, and political forms differ in detail across sources." }] },
    },
  },
  "haryanka-dynasty": {
    imageAttribution: "Avantiputra7",
    imageLicense: "CC BY-SA 3.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Magadha_Expansion_(6th-4th_centuries_BCE).png",
    sources: [
      { title: "Haryanka dynasty", publisher: "Encyclopaedia overview", url: "https://en.wikipedia.org/wiki/Haryanka_dynasty" },
      { title: "A History of Ancient and Early Medieval India", publisher: "Upinder Singh, Pearson, 2008", url: "https://books.google.com/books?vid=ISBN9788131716779" },
      { title: "Early India: From the Origins to AD 1300", publisher: "Romila Thapar, University of California Press, 2002", url: "https://www.ucpress.edu/book/9780520242258/early-india" },
    ],
    sections: {
      overview: {
        paragraphs: [
          { text: "The Haryankas were an early ruling line of Magadha, a kingdom in the middle Ganges region. Buddhist, Jain, and Puranic traditions preserve different versions of its succession; the dynasty is conventionally placed from the mid-sixth century BCE to 413 BCE. [1][2]", citations: [0, 1] },
          { text: "Rajagriha (Rajgir) is associated with the early kingdom. Later tradition connects Udayin with the foundation or development of Pataliputra, which became a major centre for subsequent Magadhan and Mauryan rule. [1][2]", citations: [0, 1] },
        ],
      },
      timeline: {
        paragraphs: [{ text: "The commonly used dates are reconstructed from later textual chronologies and do not form an uninterrupted contemporary record. Individual reign lengths remain uncertain. [1][2]", citations: [0, 1] }],
        table: {
          caption: "Haryanka rulers in the traditional sequence",
          columns: ["Ruler", "Approximate setting", "Evidence and qualification"],
          rows: [
            ["Bimbisara", "Sixth century BCE", "A prominent king in Buddhist and Jain accounts; exact regnal dates differ."],
            ["Ajatashatru", "Late sixth or fifth century BCE", "Associated with Magadha’s conflicts and expansion; chronology varies by textual tradition."],
            ["Udayin (Udayabhadra)", "Fifth century BCE", "Traditionally linked with Pataliputra; the details are preserved in later accounts."],
            ["Later Haryanka rulers", "Before the Shishunaga succession", "Names and sequence differ; the dynasty’s end is conventionally placed in 413 BCE."],
          ],
        },
      },
      "major-rulers": {
        paragraphs: [
          { text: "Bimbisara is remembered for alliances, territorial expansion, and relationships with religious teachers. Ajatashatru is associated with conflict against the Vajjis and the strengthening of Magadha. These portraits come primarily from religious literature composed and compiled after the events. [1][2]", citations: [0, 1] },
          { text: "Udayin is connected in later traditions with Pataliputra. The record is not sufficient to provide a dependable biography for every ruler or a single uncontested succession list.", citations: [1, 2] },
        ],
      },
      "rise-to-power": {
        paragraphs: [
          { text: "Magadha was one of the Mahajanapadas. Its position near the Ganges and its tributaries, access to agricultural lands, and proximity to routes through eastern India supported its growth, although these geographic factors alone do not explain political success. [2][3]", citations: [1, 2] },
          { text: "Bimbisara’s marriage alliances and campaigns are described in Buddhist and Jain traditions. Since those accounts differ in emphasis, they are evidence for remembered politics rather than a complete contemporary record of Magadhan expansion. [1][2]", citations: [0, 1] },
        ],
      },
      "battles-military": {
        paragraphs: [
          { text: "Ajatashatru is associated with a long conflict against the Vajjian confederacy. Later Buddhist accounts name military devices, but their descriptions do not provide independently verified technical specifications or a precise campaign chronology. [1][2]", citations: [0, 1] },
          { text: "The Haryanka period is also situated amid competition among Magadha, Kosala, and neighboring states. The surviving texts do not support exact troop totals or a year-by-year list of battles.", citations: [1, 2] },
        ],
      },
      administration: {
        paragraphs: [
          { text: "The sources portray a territorial kingdom with a ruler, court, and military following. No contemporary Haryanka administrative manual or complete official list survives, so the later Mauryan bureaucracy should not be projected onto this earlier dynasty. [2]", citations: [1] },
          { text: "The shift from Rajagriha toward Pataliputra reflects a changing political geography in later tradition. The exact foundation date and the stages of the city’s development require cautious treatment. [1][2]", citations: [0, 1] },
        ],
      },
      "economy-trade": {
        paragraphs: [
          { text: "Magadha’s river plains supported cultivation, and waterways connected settlements in the middle Ganges region. Archaeology and later texts provide context, but no Haryanka account records annual yields, tax rates, or a dynasty-specific currency system. [2]", citations: [1] },
          { text: "Urban growth and exchange intensified in the broader early historic period. These developments were shared across the region and cannot all be attributed to Haryanka policy.", citations: [1, 2] },
        ],
      },
      society: {
        paragraphs: [
          { text: "Buddhist and Jain narratives place the court among householders, merchants, ascetics, and expanding settlements. Their interest in religious encounters shapes what they preserve about social life. [1][2]", citations: [0, 1] },
          { text: "Stories about royal women and marriage alliances survive, but they do not constitute a full account of women’s work, property, or status in Magadha.", citations: [1, 2] },
        ],
      },
      "religion-philosophy": {
        paragraphs: [
          { text: "Bimbisara and Ajatashatru appear in Buddhist and Jain traditions as interlocutors and patrons. These accounts are important for the history of religious communities, though details vary across texts and should not be read as court transcripts. [1][2]", citations: [0, 1] },
          { text: "The kingdom’s religious landscape also included Brahmanical practice and other renunciant groups. No source establishes a single exclusive Haryanka state religion.", citations: [1, 2] },
        ],
      },
      "art-architecture": {
        paragraphs: [
          { text: "Rajagriha’s hills and early settlement remains provide the principal material setting for the dynasty. No surviving monument is securely identified as a Haryanka royal building, and later structures at Pataliputra should not be assigned to this line without evidence. [2]", citations: [1] },
          { text: "The dynasty is more fully visible in literary traditions than in a preserved corpus of court art or inscriptions.", citations: [1] },
        ],
      },
      "science-technology": {
        paragraphs: [
          { text: "The period belongs to a wider early historic horizon of iron use, settlement growth, and changing craft production. Available evidence does not identify a Haryanka school of mathematics, medicine, astronomy, or engineering. [2]", citations: [1] },
          { text: "Descriptions of military devices in later texts are not enough to establish a dynasty-wide technical programme.", citations: [0, 1] },
        ],
      },
      "territory-maps": {
        paragraphs: [
          { text: "The map depicts Magadha’s changing influence between the sixth and fourth centuries BCE. It is a modern reconstruction: the Haryanka realm’s boundaries were not fixed survey lines, and its expansion overlapped with neighboring Mahajanapadas. [1][2]", citations: [0, 1] },
        ],
      },
      "decline-transformation": {
        paragraphs: [
          { text: "Later traditions place the end of Haryanka rule in 413 BCE and the succession of Shishunaga. Accounts differ over the final rulers and political circumstances, so the exact mechanism of transition is not established. [1][2]", citations: [0, 1] },
        ],
      },
      legacy: {
        paragraphs: [
          { text: "The Haryanka period marks an early stage in Magadha’s emergence as a dominant northern Indian power. Its importance lies in the political sequence leading to the Shishunaga, Nanda, and Mauryan periods, not in a fully recoverable royal archive. [2][3]", citations: [1, 2] },
        ],
      },
      sources: { paragraphs: [{ text: "The chronology is reconstructed from later Buddhist, Jain, and Puranic traditions and varies among them. The linked scholarly histories discuss these limitations." }] },
    },
  },
  "shishunaga-dynasty": {
    imageAttribution: "Avantiputra7",
    imageLicense: "CC BY-SA 3.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Magadha_Expansion_(6th-4th_centuries_BCE).png",
    sources: [
      { title: "Shaishunaga dynasty", publisher: "Encyclopaedia overview", url: "https://en.wikipedia.org/wiki/Shaishunaga_dynasty" },
      { title: "A History of Ancient and Early Medieval India", publisher: "Upinder Singh, Pearson, 2008", url: "https://books.google.com/books?vid=ISBN9788131716779" },
      { title: "Early India: From the Origins to AD 1300", publisher: "Romila Thapar, University of California Press, 2002", url: "https://www.ucpress.edu/book/9780520242258/early-india" },
    ],
    sections: {
      overview: {
        paragraphs: [
          { text: "The Shishunaga or Shaishunaga dynasty is conventionally placed between the Haryankas and Nandas in the history of Magadha. The registry follows 413-345 BCE, but ancient sources disagree on rulers, order, and chronology. [1][2]", citations: [0, 1] },
          { text: "Its history is known chiefly through later Buddhist and Puranic traditions rather than a continuous set of contemporary inscriptions. The dynasty should therefore be treated as a reconstructed succession, not a fully documented court archive. [1][3]", citations: [0, 2] },
        ],
      },
      timeline: {
        paragraphs: [{ text: "The following names reflect traditional succession lists; the exact regnal dates and some relationships vary between sources. The endpoints shown are conventional and approximate. [1][2]", citations: [0, 1] }],
        table: {
          caption: "Rulers and chronology in later traditions",
          columns: ["Ruler or succession", "Traditional placement", "Evidence qualification"],
          rows: [
            ["Shishunaga", "Founder; after the Haryankas", "Name and succession are preserved in later literary accounts."],
            ["Kalashoka (Kakavarnin)", "Associated with the middle of the dynasty", "Different texts use variant names and give divergent king lists."],
            ["Later successors", "Before the Nanda accession", "The number, names, and sequence are not consistently transmitted."],
          ],
        },
      },
      "major-rulers": {
        paragraphs: [
          { text: "Shishunaga is remembered as the founder, and Kalashoka is prominent in Buddhist traditions. Claims that Kalashoka convened a Buddhist council at Vaishali depend on later accounts whose date and historical setting are debated. [1][2]", citations: [0, 1] },
          { text: "No dependable biography or precise reign can be provided for every ruler in the traditional line. Variant Puranic, Buddhist, and Jain lists should not be merged into a falsely certain chronology. [1][3]", citations: [0, 2] },
        ],
      },
      "rise-to-power": {
        paragraphs: [
          { text: "Shishunaga’s rise followed the Haryanka period, when Magadha had already become a major Mahajanapada. Later sources describe a change of rulers but differ over the political circumstances and the founder’s background. [1][2]", citations: [0, 1] },
          { text: "Magadha’s agricultural base and Ganges connections supported the wider growth of the state. These regional advantages predate the Shishunagas and should not be mistaken for dynasty-specific reforms.", citations: [1, 2] },
        ],
      },
      "battles-military": {
        paragraphs: [
          { text: "A later tradition credits Shishunaga with defeating Avanti and ending a long rivalry with Magadha. This episode is not preserved as a contemporary campaign record, and its chronology and details require caution. [1][2]", citations: [0, 1] },
          { text: "No securely dated battle list or complete account of the dynasty’s army survives. Political expansion should be distinguished from the specific campaigns that later sources attribute to individual rulers.", citations: [1, 2] },
        ],
      },
      administration: {
        paragraphs: [
          { text: "The dynasty inherited or continued Magadhan kingship, but surviving texts do not document its officials, provincial divisions, or revenue rules in detail. Mauryan administrative arrangements belong to a later period and cannot be assumed for Shishunaga rule. [2]", citations: [1] },
          { text: "Pataliputra and Rajagriha appear in the broader history of Magadha. Their roles changed over time; no single account securely assigns a complete capital sequence to every Shishunaga ruler.", citations: [1, 2] },
        ],
      },
      "economy-trade": {
        paragraphs: [
          { text: "Agriculture in the middle Ganges plain and riverine routes supported Magadha’s growing political centres. Dynasty-specific records of taxation, currency, trade regulation, or production have not survived. [2][3]", citations: [1, 2] },
          { text: "The expansion of early urban exchange belongs to the wider Mahajanapada horizon. It should not be presented as a documented Shishunaga programme.", citations: [1, 2] },
        ],
      },
      society: {
        paragraphs: [
          { text: "Later religious and genealogical sources provide glimpses of courts, urban communities, and teachers in Magadha. Their selection of stories reflects their own purposes and leaves the everyday lives of most people poorly documented. [1][2]", citations: [0, 1] },
          { text: "No reliable source supports a detailed account of women’s occupations or household customs specifically under this dynasty. This is an evidence gap, not a claim that such roles were absent.", citations: [1, 2] },
        ],
      },
      "religion-philosophy": {
        paragraphs: [
          { text: "Buddhist texts connect Kalashoka with a council at Vaishali, while other traditions provide different chronologies and emphases. The episode is significant to Buddhist institutional history but remains contested as a datable event. [1][2]", citations: [0, 1] },
          { text: "The middle Ganges region was also home to Jain, Brahmanical, and other ascetic communities. The sparse evidence does not establish one official Shishunaga religious doctrine.", citations: [1, 2] },
        ],
      },
      "art-architecture": {
        paragraphs: [
          { text: "No major monument can be securely attributed to a named Shishunaga ruler. Archaeological remains at Pataliputra and Rajagriha are important to Magadhan history, but their construction phases must be dated independently. [2]", citations: [1] },
          { text: "The dynasty is better represented in later textual memory than in a distinct surviving body of court literature or visual art.", citations: [1, 2] },
        ],
      },
      "science-technology": {
        paragraphs: [
          { text: "No dynasty-specific work in mathematics, astronomy, medicine, or engineering is securely documented. Early historic iron-working, fortification, and urban development provide broader regional context, not evidence for a Shishunaga-sponsored programme. [2]", citations: [1] },
        ],
      },
      "territory-maps": {
        paragraphs: [
          { text: "The map shows the changing expansion of Magadha across the sixth to fourth centuries BCE, spanning more than the Shishunaga dynasty alone. It is a scholarly reconstruction rather than a contemporary border record. [1][2]", citations: [0, 1] },
        ],
      },
      "decline-transformation": {
        paragraphs: [
          { text: "The Nandas are placed after the Shishunagas in later king lists, with the registry using 345 BCE as the transition. The precise final ruler and circumstances of succession remain unclear in the surviving traditions. [1][2]", citations: [0, 1] },
        ],
      },
      legacy: {
        paragraphs: [
          { text: "The Shishunagas form a conventional middle phase in Magadha’s rise between Haryanka and Nanda rule. Their importance is clear in the traditional sequence, even though the details of individual reigns remain uncertain. [2][3]", citations: [1, 2] },
        ],
      },
      sources: { paragraphs: [{ text: "Buddhist, Jain, and Puranic accounts differ. The linked modern histories compare these traditions and caution against treating one king list as a contemporary record." }] },
    },
  },
  "nanda-empire": {
    imageAttribution: "Avantiputra7",
    imageLicense: "CC BY-SA 3.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Nanda_Empire,_c.325_BCE.png",
    sources: [
      { title: "Nanda Empire", publisher: "Encyclopaedia overview", url: "https://en.wikipedia.org/wiki/Nanda_Empire" },
      { title: "A History of Ancient and Early Medieval India", publisher: "Upinder Singh, Pearson, 2008", url: "https://books.google.com/books?vid=ISBN9788131716779" },
      { title: "Early India: From the Origins to AD 1300", publisher: "Romila Thapar, University of California Press, 2002", url: "https://www.ucpress.edu/book/9780520242258/early-india" },
    ],
    sections: {
      overview: {
        paragraphs: [
          { text: "The Nandas ruled Magadha in the fourth century BCE before the Mauryan dynasty. Later Indian texts and Greek accounts remember them as exceptionally wealthy and powerful, but the precise extent and organisation of their state cannot be established from a contemporary Nanda archive. [1][2]", citations: [0, 1] },
          { text: "The registry uses 345-322 BCE. Magadha and Pataliputra form the core of the reconstruction; claims that the Nandas controlled every territory shown on a modern map should be treated cautiously. [1][3]", citations: [0, 2] },
        ],
      },
      timeline: {
        paragraphs: [{ text: "The chronology is conventional and reconstructed from later succession lists and Greek accounts. Exact reign lengths are not securely known. [1][2]", citations: [0, 1] }],
        table: {
          caption: "Nanda succession as preserved in later sources",
          columns: ["Ruler or group", "Traditional place", "Historical confidence"],
          rows: [
            ["Mahapadma Nanda", "Founder or early Nanda ruler", "Prominent in Puranic traditions; biographical details and dates are debated."],
            ["The Nanda successors", "A group of rulers in later king lists", "Some traditions count nine Nandas; names and sequence are not consistently recoverable."],
            ["Dhana Nanda", "Last Nanda ruler in many narratives", "Appears in accounts of the Mauryan rise and Greek reports of the powerful eastern kingdom."],
          ],
        },
      },
      "major-rulers": {
        paragraphs: [
          { text: "Mahapadma Nanda is presented in later Puranic texts as a powerful founder or consolidator. Greek accounts refer to a ruler of the Gangaridai and Prasii in the region, often associated by historians with the Nanda court, but the identification is not a direct named inscription. [1][2]", citations: [0, 1] },
          { text: "Dhana Nanda is remembered as the final ruler, displaced by Chandragupta Maurya in later narratives. The intervening succession is not sufficiently secure to provide biographies and regnal dates for every Nanda king. [1][3]", citations: [0, 2] },
        ],
      },
      "rise-to-power": {
        paragraphs: [
          { text: "The Nandas followed the Shishunaga line in traditional Magadhan chronology. Later accounts associate Mahapadma with territorial consolidation, but the dynasty’s origins and the details of its accession are preserved in texts written after the events. [1][2]", citations: [0, 1] },
          { text: "Magadha’s agricultural base and access to Ganges routes supported a larger kingdom. Modern depictions of Nanda territory are reconstructions and should not be read as exact contemporaneous boundaries. [2][3]", citations: [1, 2] },
        ],
      },
      "battles-military": {
        paragraphs: [
          { text: "Greek writers report that Alexander’s army, after reaching the Beas, feared the military power of the eastern Indian kingdoms and refused to advance. Their account does not record a battle between Alexander and the Nandas. [1][2]", citations: [0, 1] },
          { text: "Later sources describe Chandragupta’s overthrow of Dhana Nanda, but the campaign sequence is uncertain. Ancient troop totals are rhetorical reports, not reliable modern counts.", citations: [0, 1] },
        ],
      },
      administration: {
        paragraphs: [
          { text: "Literary traditions describe a strong Magadhan monarchy and substantial royal revenues. Detailed claims about a centralised tax bureaucracy, particular rates, or administrative offices are not independently documented for the Nandas and should not be borrowed wholesale from the later Mauryan period. [2][3]", citations: [1, 2] },
          { text: "Pataliputra is associated with the Nanda court in later traditions. The city’s archaeological layers span multiple dynasties and cannot all be assigned to Nanda construction.", citations: [1, 2] },
        ],
      },
      "economy-trade": {
        paragraphs: [
          { text: "Ancient accounts link Nanda wealth to control of Magadha and the Ganges plain. Agriculture and exchange offer regional context, while the specific origins and scale of the reported treasury remain uncertain. [1][2]", citations: [0, 1] },
          { text: "Later texts connect the dynasty with taxation and monetary issues, but surviving evidence does not establish a Nanda-wide currency reform or provide dependable revenue accounts. [2][3]", citations: [1, 2] },
        ],
      },
      society: {
        paragraphs: [
          { text: "The Nanda kingdom governed settled agricultural communities and urban populations in the middle Ganges region. Later stories about the dynasty’s origins and social status are politically charged and differ by tradition. [1][2]", citations: [0, 1] },
          { text: "The evidence does not support detailed claims about women’s roles, occupations, or ordinary household life specifically under Nanda rule.", citations: [1, 2] },
        ],
      },
      "religion-philosophy": {
        paragraphs: [
          { text: "The Nandas ruled a region where Brahmanical, Buddhist, Jain, and other ascetic traditions were active. Surviving evidence does not establish a single Nanda religious policy or securely document named court philosophers. [2][3]", citations: [1, 2] },
        ],
      },
      "art-architecture": {
        paragraphs: [
          { text: "No major surviving monument or artistic programme is securely attributed to the Nandas. Pataliputra later became a major Mauryan centre, but its better-known remains cannot automatically be labelled Nanda architecture. [2]", citations: [1] },
        ],
      },
      "science-technology": {
        paragraphs: [
          { text: "No Nanda scientific text, medical school, or engineering programme is securely documented. Iron-working, urban growth, and coin use belong to the wider early historic setting and require evidence from their own archaeological contexts. [2]", citations: [1] },
        ],
      },
      "territory-maps": {
        paragraphs: [
          { text: "The map presents a proposed Nanda sphere centred on Magadha and the Ganges plain. It is a modern reconstruction based on later texts and should not be treated as a surveyed border or proof of equally direct rule throughout. [1][2]", citations: [0, 1] },
        ],
      },
      "decline-transformation": {
        paragraphs: [
          { text: "The Nanda line ended when Chandragupta Maurya established Mauryan rule, conventionally around 322 BCE. The circumstances are preserved in later narratives, including accounts that differ in their portrayal of Chanakya and the final Nanda ruler. [1][2]", citations: [0, 1] },
        ],
      },
      legacy: {
        paragraphs: [
          { text: "The Nandas are a key transition in the rise of Magadha from a Mahajanapada to the Mauryan imperial state. Their reputation for wealth and military strength is historically influential, although details depend heavily on later accounts. [2][3]", citations: [1, 2] },
        ],
      },
      sources: { paragraphs: [{ text: "The Nanda chronology and political reach are reconstructed from Puranic traditions, Buddhist and Jain accounts, and Greek reports. These sources do not agree on all names or details." }] },
    },
  },
  "mauryan-empire": {
    imageAttribution: "Joshua Jonathan",
    imageLicense: "CC0 1.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Maurya_Empire,_c.250_BCE_network_model_v01.png",
    sources: [
      { title: "Maurya Empire", publisher: "Encyclopaedia overview", url: "https://en.wikipedia.org/wiki/Maurya_Empire" },
      { title: "A History of Ancient and Early Medieval India", publisher: "Upinder Singh, Pearson, 2008", url: "https://books.google.com/books?vid=ISBN9788131716779" },
      { title: "Edicts of Ashoka", publisher: "Inscriptional corpus and translations", url: "https://en.wikipedia.org/wiki/Edicts_of_Ashoka" },
    ],
    sections: {
      overview: {
        paragraphs: [
          { text: "The Mauryan Empire was a large South Asian state founded by Chandragupta Maurya in the late fourth century BCE and ruled from Pataliputra. At its height under Ashoka it controlled or influenced much of the subcontinent, though direct administration varied by region. The registry uses 322-185 BCE. [0][1]", citations: [0, 1] },
          { text: "The empire is unusually well documented for ancient South Asia because Ashoka’s inscriptions survive across a wide area. They are royal proclamations, not neutral histories, but they provide direct evidence for royal titles, officials, and the ruler’s public statements. [1][2]", citations: [1, 2] },
        ],
      },
      timeline: {
        paragraphs: [{ text: "The Mauryan dates are approximate; the regnal chronology of early rulers differs among modern reconstructions. Ashoka’s inscriptions provide firmer anchors for his reign than for the earlier succession. [0][1][2]", citations: [0, 1, 2] }],
        table: {
          caption: "Major Mauryan rulers and approximate reigns",
          columns: ["Ruler", "Approximate reign", "Historical note"],
          rows: [
            ["Chandragupta Maurya", "c. 321-297 BCE", "Founded the dynasty and established its Magadhan base."],
            ["Bindusara", "c. 297-273 BCE", "Successor named in Greek and Indian traditions; details of his reign are limited."],
            ["Ashoka", "c. 268/269-232 BCE", "Dates vary; his inscriptions document his reign and public policy."],
            ["Dasharatha", "After Ashoka; 3rd century BCE", "Known from later traditions and inscriptions, including cave donations."],
            ["Samprati and other successors", "Late 3rd-2nd century BCE", "Names occur in later lists; chronology and succession are uncertain."],
            ["Brihadratha", "Until c. 185 BCE", "Traditionally the last Mauryan ruler, displaced by Pushyamitra Shunga."],
          ],
        },
      },
      "major-rulers": {
        paragraphs: [
          { text: "Chandragupta established Mauryan rule after the Nandas and negotiated with Seleucus I, a successor to Alexander, in the early third century BCE. Bindusara continued the dynasty, but evidence for his campaigns and administration is much thinner than for Ashoka. [0][1]", citations: [0, 1] },
          { text: "Ashoka is known through inscriptions as Devanampiya Piyadasi. Their identification with the Mauryan emperor is established, while the exact chronology of his accession is debated. Later rulers are less securely documented and should not be given invented biographies. [1][2]", citations: [1, 2] },
        ],
      },
      "rise-to-power": {
        paragraphs: [
          { text: "Chandragupta’s rise followed the Nanda kingdom and the political disruption accompanying Alexander’s campaigns in the northwest. Accounts of his alliance with Chanakya and the precise sequence of conquest come mainly from later literary traditions. [0][1]", citations: [0, 1] },
          { text: "The agreement with Seleucus I, usually dated c. 305 BCE, resulted in a diplomatic settlement and exchange of territories and gifts as described by Greek sources. Details of the treaty are not preserved in a Mauryan document. [0][1]", citations: [0, 1] },
        ],
      },
      "battles-military": {
        paragraphs: [
          { text: "The Mauryan expansion involved the overthrow of the Nandas and a settlement with Seleucus I. Ashoka’s Major Rock Edict XIII describes the Kalinga war and the suffering it caused, providing a rare royal statement about the consequences of conquest. [1][2]", citations: [1, 2] },
          { text: "Ashoka’s account says that the war prompted remorse and a change in the ruler’s public policy; historians debate how this rhetoric related to later military practice. The empire retained officials and armed forces, and the edict does not say that the army was abolished. [2]", citations: [2] },
        ],
      },
      administration: {
        paragraphs: [
          { text: "Ashokan edicts name officers such as the dhamma-mahamattas and refer to officials responsible for provincial and local matters. These inscriptions reveal administrative communication but do not fully describe the empire’s organisation in every region. [1][2]", citations: [1, 2] },
          { text: "Pataliputra was the imperial capital; Taxila, Ujjain, Tosali, and Suvarnagiri are often identified as important regional centres in modern reconstructions. The Arthashastra describes statecraft but its date and relationship to Mauryan practice are debated, so it cannot be treated uncritically as a Mauryan handbook. [1]", citations: [1] },
        ],
      },
      "economy-trade": {
        paragraphs: [
          { text: "Agriculture and land revenue underpinned the empire, while roads and river routes connected major regions. Archaeology, inscriptions, and punch-marked coins are evidence for production and exchange, but do not establish uniform control over every local market. [1]", citations: [1] },
          { text: "Crafts, mining, forestry, and long-distance trade formed part of the wider Mauryan economy. The Arthashastra contains detailed economic prescriptions, but scholars debate its date and how directly it reflects Mauryan institutions. [1]", citations: [1] },
        ],
      },
      society: {
        paragraphs: [
          { text: "Ashoka’s edicts address officials, religious groups, and subjects across distant parts of the empire. They reveal the ruler’s intended messages rather than proof that policy was applied uniformly or experienced identically by all communities. [2]", citations: [2] },
          { text: "Greek accounts and later Indian texts describe urban populations, occupational groups, and social classifications. These sources have different purposes and should be compared with archaeological evidence rather than combined as a single social census. [1]", citations: [1] },
        ],
      },
      "religion-philosophy": {
        paragraphs: [
          { text: "Ashoka identifies himself with the Buddhist community in some inscriptions and promotes dhamma in his edicts. Dhamma is a royal ethical programme that includes conduct toward parents, servants, living beings, and religious communities; it is not simply a synonym for Buddhist doctrine. [2]", citations: [2] },
          { text: "The edicts also call for respect among Brahmanas, shramanas, and other groups. Their wording is important evidence for the ruler’s public policy, but does not provide a complete census of Mauryan religious life. [2]", citations: [2] },
        ],
      },
      "art-architecture": {
        paragraphs: [
          { text: "Ashokan pillars, rock edicts, and polished stone inscriptions are among the clearest monuments of Mauryan kingship. The pillar capitals at Sarnath and other sites combine skilled stone carving with imperial messages; individual monuments have distinct histories. [1][2]", citations: [1, 2] },
          { text: "Archaeological remains at Pataliputra and early stupas are central to Mauryan architectural study. Attribution must distinguish Ashokan patronage from later additions and rebuilding.", citations: [1, 2] },
        ],
      },
      "science-technology": {
        paragraphs: [
          { text: "The empire’s inscriptions demonstrate quarrying, stone transport, polishing, and the production of writing across a large territory. Roads and water infrastructure are discussed in literary and archaeological sources, but evidence differs by site. [1][2]", citations: [1, 2] },
          { text: "The Arthashastra preserves technical discussions of administration and economic life, yet its composition is layered and debated. It should not be cited as direct proof of a particular Mauryan invention or department without corroboration. [1]", citations: [1] },
        ],
      },
      "territory-maps": {
        paragraphs: [
          { text: "Ashokan inscriptions are distributed from Afghanistan and the northwest to Odisha and Karnataka, with regional language and script variation. The map visualises a proposed network of imperial centres around 250 BCE; it is not a literal boundary survey. [1][2]", citations: [1, 2] },
          { text: "Kalinga was conquered during Ashoka’s reign. The southern extent and degree of control varied; some areas are better described as connected to Mauryan authority than as uniformly administered provinces. [1][2]", citations: [1, 2] },
        ],
      },
      "decline-transformation": {
        paragraphs: [
          { text: "Mauryan authority weakened after Ashoka, but the causes and pace are not fully documented. Regional powers gained prominence, and the final Mauryan ruler Brihadratha was traditionally killed by Pushyamitra around 185 BCE, after which the Shunga line is placed. [0][1]", citations: [0, 1] },
          { text: "The transition should not be reduced to a single explanation such as Ashoka’s religious policy or one invasion; the evidence does not establish either as the sole cause.", citations: [1] },
        ],
      },
      legacy: {
        paragraphs: [
          { text: "Mauryan inscriptions created one of the earliest extensive corpora of royal proclamations in South Asia. Ashoka’s edicts remain primary evidence for ancient state communication, ethical kingship, and the movement of scripts and languages. [1][2]", citations: [1, 2] },
          { text: "The empire also provides a key case for studying early imperial scale and regional administration. Its history is reconstructed from multiple traditions, and the best-documented reign must not be mistaken for a complete record of every Mauryan ruler.", citations: [1] },
        ],
      },
      sources: { paragraphs: [{ text: "Ashoka’s inscriptions are primary evidence for his public statements. Literary accounts and the Arthashastra have separate dates, viewpoints, and evidentiary limits." }] },
    },
  },
  "shunga-dynasty": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Sanchi_Stupa_%28Back%29.jpg/960px-Sanchi_Stupa_%28Back%29.jpg",
    imageAlt: "Stone gateway and railing at the Great Stupa of Sanchi",
    imageAttribution: "Vruttant3",
    imageLicense: "CC BY-SA 4.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Sanchi_Stupa_(Back).jpg",
    sources: [
      { title: "Shunga Empire", publisher: "Encyclopaedia overview", url: "https://en.wikipedia.org/wiki/Shunga_Empire" },
      { title: "Early India: From the Origins to AD 1300", publisher: "Romila Thapar, University of California Press, 2002", url: "https://www.ucpress.edu/book/9780520242258/early-india" },
      { title: "Buddhist Monuments at Sanchi", publisher: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/524/" },
    ],
    sections: {
      overview: {
        paragraphs: [
          { text: "The Shunga dynasty succeeded Mauryan rule in parts of northern and central India. It is conventionally dated c. 185-75 BCE, though many modern accounts place its foundation around 187 BCE. Pataliputra and Vidisha are associated with the dynasty at different points; its territorial reach is not precisely mapped. [0][1]", citations: [0, 1] },
          { text: "The evidence combines later literary texts, coins, inscriptions, and monuments. The Shunga period is not a continuation of the Mauryan empire at the same scale, and claims about its religious policy remain debated. [1][2]", citations: [1, 2] },
        ],
      },
      timeline: {
        paragraphs: [{ text: "Ruler dates below are conventional estimates; sources do not preserve an uncontested regnal chronology for the entire dynasty. [0][1]", citations: [0, 1] }],
        table: {
          caption: "Principal Shunga rulers in traditional and historical accounts",
          columns: ["Ruler", "Approximate reign or period", "Evidence note"],
          rows: [
            ["Pushyamitra Shunga", "c. 185-149 BCE", "Founder in later accounts; the coup against the last Maurya is not described in a contemporary Shunga chronicle."],
            ["Agnimitra", "Second century BCE", "Known in Kalidasa’s much later play Malavikagnimitram; exact reign dates are uncertain."],
            ["Bhagabhadra", "Second century BCE", "Named in the Heliodorus pillar inscription at Besnagar; placement within the succession is debated."],
            ["Devabhuti", "Traditionally the last ruler, c. 75 BCE", "His deposition by Vasudeva is preserved in later dynastic narratives."],
          ],
        },
      },
      "major-rulers": {
        paragraphs: [
          { text: "Pushyamitra is associated with the dynasty’s foundation and military activity. Agnimitra is known partly through literary representation, while the Besnagar inscription of the Indo-Greek envoy Heliodorus provides an independent reference to Bhagabhadra. These sources differ in date and purpose. [0][1]", citations: [0, 1] },
          { text: "The complete ruler sequence and individual biographies are not equally secure. Devabhuti’s end and the Kanva succession are reported mainly in later texts. [0][1]", citations: [0, 1] },
        ],
      },
      "rise-to-power": {
        paragraphs: [
          { text: "Later sources say Pushyamitra, a Mauryan commander, killed the last Mauryan ruler Brihadratha and took power. The narrative is important but survives in texts written later, not in a contemporary account of the event. [0][1]", citations: [0, 1] },
          { text: "After the Mauryan empire fragmented, regional centres such as Vidisha became politically significant. Shunga power should be understood as a post-imperial kingdom with changing reach, not as an empire controlling all former Mauryan territories. [1]", citations: [1] },
        ],
      },
      "battles-military": {
        paragraphs: [
          { text: "Later Sanskrit sources associate Pushyamitra with conflict against Yavana or Indo-Greek forces. The identity of the opponents, dates, and campaign details are debated; the evidence does not support presenting one reconstruction as settled. [0][1]", citations: [0, 1] },
          { text: "Shunga military activity is also inferred from political change and inscriptions, but no continuous campaign history or reliable army totals survive.", citations: [1] },
        ],
      },
      administration: {
        paragraphs: [
          { text: "The dynasty ruled from a set of northern and central Indian centres. Inscriptions and coins indicate royal authority and regional connections, but do not preserve a complete Shunga bureaucracy or uniform provincial system. [0][1]", citations: [0, 1] },
          { text: "Pataliputra remained important in tradition, while Vidisha is associated with later Shunga activity. The relationship between court centres and regional governors is not fully documented.", citations: [0, 1] },
        ],
      },
      "economy-trade": {
        paragraphs: [
          { text: "Coins, urban deposits, and inscriptions show regional exchange and continuing craft production after the Mauryan period. They do not support a complete account of Shunga taxes, state expenditure, or trade volume. [1]", citations: [1] },
          { text: "Besnagar’s location connected central Indian routes, and the Heliodorus pillar attests to diplomatic or religious contact involving an Indo-Greek envoy. It is a specific inscription, not evidence for all trade relations. [0][1]", citations: [0, 1] },
        ],
      },
      society: {
        paragraphs: [
          { text: "Inscriptions and monuments record donors, religious communities, and regional elites. The evidence at Sanchi shows continued patronage by multiple donors; it does not reveal a simple royal-versus-popular division. [2]", citations: [2] },
          { text: "Literary sources concentrate on courts and elite life. Claims about women’s status or the experience of non-elite communities must be based on specific records rather than generalised from those texts.", citations: [1] },
        ],
      },
      "religion-philosophy": {
        paragraphs: [
          { text: "Buddhist monuments at Sanchi and Bharhut were enlarged and embellished across the post-Mauryan period. The exact patronage and dating of individual features vary, and the material record does not substantiate a simple claim that Pushyamitra systematically persecuted Buddhists. [1][2]", citations: [1, 2] },
          { text: "The Heliodorus pillar identifies its Greek donor as a Bhagavata devotee, evidence for a particular act of religious affiliation and cross-cultural contact. It should not be generalised into a complete account of Shunga policy. [0][1]", citations: [0, 1] },
        ],
      },
      "art-architecture": {
        paragraphs: [
          { text: "The Great Stupa at Sanchi preserves stone railings and gateways developed over multiple phases. UNESCO describes the site as an important Buddhist complex; the monuments are not all products of one Shunga ruler. [2]", citations: [2] },
          { text: "Bharhut’s carved railings and narrative reliefs are also associated with the broad post-Mauryan period. Their inscriptions and styles provide evidence for donors and visual storytelling, with precise dates debated. [1][2]", citations: [1, 2] },
        ],
      },
      "science-technology": {
        paragraphs: [
          { text: "Stone railing, gateway, and stupa construction demonstrates specialist design and carving. Coin production and inscriptions provide additional evidence of technical work, but no distinct Shunga scientific treatise is known. [1][2]", citations: [1, 2] },
        ],
      },
      "territory-maps": {
        paragraphs: [
          { text: "The image shows the Sanchi monument complex in central India; it is an archaeological site image, not a political map. Shunga authority is generally associated with parts of northern and central India, with Pataliputra and Vidisha prominent in the record. [0][2]", citations: [0, 2] },
        ],
      },
      "decline-transformation": {
        paragraphs: [
          { text: "Later dynastic accounts place Vasudeva’s overthrow of Devabhuti around 73-75 BCE and the establishment of Kanva rule. The transition’s precise events are not independently documented in detail. [0][1]", citations: [0, 1] },
        ],
      },
      legacy: {
        paragraphs: [
          { text: "The Shunga period is important for post-Mauryan political history and the development of early Buddhist stone monuments. Its art and religious landscape are better documented than its central administration. [1][2]", citations: [1, 2] },
          { text: "Modern interpretations of the dynasty’s religious policies remain contested; archaeological patronage and later literary claims should be weighed separately.", citations: [1, 2] },
        ],
      },
      sources: { paragraphs: [{ text: "Monuments at Sanchi and Bharhut have multi-phase chronologies. The linked UNESCO description provides site context; the dynastic article and academic synthesis discuss the limits of political attribution." }] },
    },
  },
  "kanva-dynasty": {
    imageAttribution: "Thomas Lessman",
    imageLicense: "CC BY-SA 4.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:India_in_50_bc.jpg",
    sources: [
      { title: "Kanva dynasty", publisher: "Encyclopaedia overview", url: "https://en.wikipedia.org/wiki/Kanva_dynasty" },
      { title: "A History of Ancient and Early Medieval India", publisher: "Upinder Singh, Pearson, 2008", url: "https://books.google.com/books?vid=ISBN9788131716779" },
      { title: "Early India: From the Origins to AD 1300", publisher: "Romila Thapar, University of California Press, 2002", url: "https://www.ucpress.edu/book/9780520242258/early-india" },
    ],
    sections: {
      overview: {
        paragraphs: [
          { text: "The Kanvas were a short-lived ruling line traditionally placed after the Shungas in Magadha. The registry uses 75-30 BCE, while other chronologies give approximately 73-28 BCE; both are reconstructions based chiefly on later Puranic king lists. [0][1]", citations: [0, 1] },
          { text: "Pataliputra is identified as a dynastic centre in textual traditions, while coins associated with the period have been found around Vidisha. This evidence does not establish a precisely bounded or uniformly governed state. [0][2]", citations: [0, 2] },
        ],
      },
      timeline: {
        paragraphs: [{ text: "The names and sequence come from Puranic traditions. Individual reign years cannot be assigned with confidence from the surviving evidence. [0][1]", citations: [0, 1] }],
        table: {
          caption: "Traditional Kanva succession",
          columns: ["Ruler", "Sequence", "Date status"],
          rows: [
            ["Vasudeva Kanva", "Founder; after the Shunga line", "The accession is conventionally placed c. 73-75 BCE."],
            ["Bhumimitra", "Second ruler", "Named in traditional lists; exact reign dates are not independently fixed."],
            ["Narayana", "Third ruler", "Named in Puranic succession; contemporary biography is unavailable."],
            ["Susarman", "Final ruler in the list", "The dynasty’s end is traditionally placed c. 28-30 BCE."],
          ],
        },
      },
      "major-rulers": {
        paragraphs: [
          { text: "Vasudeva, Bhumimitra, Narayana, and Susarman form the conventional four-ruler sequence. Coins bearing some associated names are useful evidence, but attribution and identification must be distinguished from the later genealogical lists. [0][1]", citations: [0, 1] },
          { text: "No detailed biographies, securely dated campaigns, or complete reign lengths survive. The record is too limited to supply achievements for every king beyond their place in the transmitted succession.", citations: [1, 2] },
        ],
      },
      "rise-to-power": {
        paragraphs: [
          { text: "Later texts state that Vasudeva displaced the final Shunga ruler and established the Kanva line. This transition follows the traditional Magadhan succession, but no contemporary narrative of the takeover is known. [0][1]", citations: [0, 1] },
          { text: "The Kanvas ruled during a period of regional political change. Their association with Magadha should not be mistaken for uninterrupted control of the former Mauryan territories. [1][2]", citations: [1, 2] },
        ],
      },
      "battles-military": {
        paragraphs: [
          { text: "No securely documented Kanva battle or campaign is preserved. Later succession lists describe changes of dynasty but give little military detail; claims about a specific conquest require evidence not present in the surviving record. [0][1]", citations: [0, 1] },
          { text: "The political fragmentation of the post-Mauryan period provides context, but it does not establish the identity of the forces involved in the Kanva succession.", citations: [1, 2] },
        ],
      },
      administration: {
        paragraphs: [
          { text: "Textual traditions associate Kanva rule with Pataliputra, and numismatic finds point to activity around Vidisha. These sources do not reveal a detailed bureaucracy, provincial structure, or tax code. [0][1]", citations: [0, 1] },
          { text: "The limited evidence cautions against projecting the Mauryan administrative model onto this later and smaller Magadhan dynasty.", citations: [1, 2] },
        ],
      },
      "economy-trade": {
        paragraphs: [
          { text: "Coins associated with the period offer material evidence for local monetary exchange, especially in central India. They do not establish the size of Kanva revenue or the reach of royal market controls. [0][1]", citations: [0, 1] },
          { text: "Agriculture and regional trade continued across the Ganges and central Indian zones, but no surviving Kanva source records specific ports, trade routes, or industrial policies.", citations: [1, 2] },
        ],
      },
      society: {
        paragraphs: [
          { text: "The available evidence is too limited for a detailed social history of Kanva rule. Puranic genealogies preserve dynastic memory, while coins reveal monetary activity but not the daily lives of most people. [0][1]", citations: [0, 1] },
          { text: "There is no reliable dynasty-specific evidence for women’s occupations, education, or customary life; these topics require broader regional sources and should not be guessed.", citations: [1, 2] },
        ],
      },
      "religion-philosophy": {
        paragraphs: [
          { text: "No comprehensive Kanva religious policy is documented. Brahmanical, Buddhist, Jain, and other communities existed in the wider region, but later religious histories do not establish the rulers’ personal beliefs or state patronage in detail. [1][2]", citations: [1, 2] },
        ],
      },
      "art-architecture": {
        paragraphs: [
          { text: "No major building programme is securely assigned to Kanva patronage. Contemporary sites and monuments require independent dating; proximity to the traditional dynasty dates is not sufficient proof of royal sponsorship. [1]", citations: [1] },
        ],
      },
      "science-technology": {
        paragraphs: [
          { text: "Kanva coins are the clearest technical evidence directly associated with the period. No dynasty-specific scientific text, engineering project, or medical institution is securely recorded. [0][1]", citations: [0, 1] },
        ],
      },
      "territory-maps": {
        paragraphs: [
          { text: "The map depicts the subcontinent around 50 BCE and includes multiple contemporary polities. It is a broad historical reconstruction, not a Kanva territorial map; the dynasty’s core is associated with Magadha, with uncertain political reach. [0][1]", citations: [0, 1] },
        ],
      },
      "decline-transformation": {
        paragraphs: [
          { text: "Susarman is traditionally named as the final Kanva ruler. Later accounts describe the end of the dynasty and the rise of other regional powers, but the exact sequence and responsible forces are uncertain. [0][1]", citations: [0, 1] },
        ],
      },
      legacy: {
        paragraphs: [
          { text: "The Kanvas mark a brief phase in the traditional succession of Magadhan dynasties after the Shungas. Their limited documentation is itself a reminder that early Indian political chronology often depends on later textual transmission. [1][2]", citations: [1, 2] },
        ],
      },
      sources: { paragraphs: [{ text: "The Kanva chronology derives chiefly from Puranic king lists and numismatic finds. The linked references explain why the registry date is approximate." }] },
    },
  },
  "satavahana-dynasty": {
    imageAttribution: "Uploadalt",
    imageLicense: "CC BY-SA 3.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Vashishtiputra_Sri_Satakarni.jpg",
    sources: [
      { title: "Satavahana dynasty", publisher: "Encyclopaedia overview", url: "https://en.wikipedia.org/wiki/Satavahana_dynasty" },
      { title: "A History of Ancient and Early Medieval India", publisher: "Upinder Singh, Pearson, 2008", url: "https://books.google.com/books?vid=ISBN9788131716779" },
      { title: "Nasik Caves", publisher: "Epigraphic and archaeological overview", url: "https://en.wikipedia.org/wiki/Nasik_Caves" },
    ],
    sections: {
      overview: {
        paragraphs: [
          { text: "The Satavahanas were a Deccan dynasty whose rule is conventionally placed from the late first millennium BCE into the early third century CE. The registry uses a broad first-century BCE to second-century CE range; different chronologies place the dynasty’s beginning and end differently. [0][1]", citations: [0, 1] },
          { text: "Their core territories included parts of present-day Maharashtra, Telangana, and Andhra Pradesh. Pratishthana (Paithan) and later eastern centres are associated with their rule, but political centres and territorial reach changed over time. [0][1]", citations: [0, 1] },
        ],
      },
      timeline: {
        paragraphs: [{ text: "Dates for early rulers are particularly uncertain. Inscriptions, coin sequences, and later Puranic lists are not perfectly synchronised, so approximate periods are preferable to precise reign years. [0][1]", citations: [0, 1] }],
        table: {
          caption: "Major Satavahana rulers and approximate placement",
          columns: ["Ruler", "Approximate placement", "Evidence note"],
          rows: [
            ["Simuka", "Early dynasty; late 2nd or 1st century BCE", "Founder in later lists; the start date is debated."],
            ["Satakarni I", "Early phase", "Known from inscriptions and coinage; identification and chronology vary."],
            ["Gautamiputra Satakarni", "Early 2nd century CE in many reconstructions", "Praised in the Nasik inscription of his mother Gautami Balashri."],
            ["Vasisthiputra Pulumavi", "2nd century CE", "Attested in inscriptions and coin issues; dates vary by reconstruction."],
            ["Yajna Sri Satakarni", "Later 2nd century CE", "Among the later well-attested rulers, known from coins and inscriptions."],
          ],
        },
      },
      "major-rulers": {
        paragraphs: [
          { text: "Gautamiputra Satakarni is praised in the Nasik inscription commissioned by his mother, Gautami Balashri. It claims victories over the Shakas, Yavanas, and Pahlavas; as a royal eulogy, it conveys political ideology as well as historical information. [0][2]", citations: [0, 2] },
          { text: "Vasisthiputra Pulumavi and Yajna Sri Satakarni are documented through inscriptions and coins. Their exact reign dates remain under discussion, and the dynasty’s full succession cannot be established with equal confidence for every ruler. [0][1]", citations: [0, 1] },
        ],
      },
      "rise-to-power": {
        paragraphs: [
          { text: "Satavahana power developed in the Deccan after the Mauryan period. Later Puranic references connect the dynasty with the Andhras, but the relationship between textual labels, political identity, and the dynasty’s precise origins is debated. [0][1]", citations: [0, 1] },
          { text: "The dynasty expanded through a landscape shared with Western Kshatrapas and other regional powers. Its rise was not a single succession to all Mauryan territory; political control shifted across the Deccan over generations. [1]", citations: [1] },
        ],
      },
      "battles-military": {
        paragraphs: [
          { text: "The Nasik inscription celebrates Gautamiputra’s victories over Western Kshatrapa-associated groups. Rudradaman’s Junagadh inscription, in turn, says he defeated a Satakarni twice but spared him because of their relationship. These royal claims are important but require contextual reading. [0][1][2]", citations: [0, 1, 2] },
          { text: "This rivalry was part of changing control over western Deccan routes. The sources do not provide a complete list of Satavahana campaigns or reliable troop numbers.", citations: [1] },
        ],
      },
      administration: {
        paragraphs: [
          { text: "Inscriptions record royal grants and officers, including maharathis and local authorities. This evidence suggests layered political relationships, but does not reveal one fixed administrative structure for the dynasty’s entire span. [0][1]", citations: [0, 1] },
          { text: "Pratishthana is often identified as an important western centre; other capitals and court locations may have changed. Grant records show rulers working through local institutions and donors.", citations: [0, 1] },
        ],
      },
      "economy-trade": {
        paragraphs: [
          { text: "Coinage, cave inscriptions, and port archaeology attest to inland and maritime exchange. The Deccan connected western coastal ports and overland routes with eastern settlements and the wider Indian Ocean. [0][1]", citations: [0, 1] },
          { text: "Roman coin finds and imported goods demonstrate contact with the Roman world, but they do not by themselves quantify trade or prove a one-way transfer of wealth. Local agriculture, crafts, and regional exchange remained central.", citations: [1] },
        ],
      },
      society: {
        paragraphs: [
          { text: "Donative inscriptions at Buddhist caves name merchants, householders, monks, women donors, and craft communities. These records show a range of patrons, while remaining selective evidence from institutions that carved names in stone. [1][2]", citations: [1, 2] },
          { text: "Royal inscriptions also foreground dynastic women, including Gautami Balashri and Naganika. Their public roles are unusually visible in epigraphy but should not be generalised to all women in the Deccan.", citations: [0, 1] },
        ],
      },
      "religion-philosophy": {
        paragraphs: [
          { text: "Satavahana-era records show patronage for Buddhist monasteries alongside Brahmanical royal claims and rituals. The Nasik and Karle cave donations demonstrate that Buddhist institutions received support from rulers, officials, merchants, and private donors. [0][2]", citations: [0, 2] },
          { text: "This evidence points to plural patronage rather than a single uniform state religion. Donative records identify particular gifts and should not be expanded into unsupported claims about every ruler’s private belief.", citations: [1, 2] },
        ],
      },
      "art-architecture": {
        paragraphs: [
          { text: "Rock-cut monasteries and inscriptions at Nasik and Karle belong to the broader Satavahana-era landscape. The Amaravati stupa developed over multiple phases; its sculptures and patronage cannot be assigned to one ruler alone. [1][2]", citations: [1, 2] },
          { text: "Coins carry royal portraits, symbols, and legends in multiple scripts. These objects are both political evidence and a distinctive record of regional artistic practice. [0][1]", citations: [0, 1] },
        ],
      },
      "science-technology": {
        paragraphs: [
          { text: "Cave excavation, stone inscriptions, coin manufacture, and construction at Buddhist sites document specialised technical work. The evidence does not identify a central Satavahana school of mathematics, astronomy, or medicine. [1][2]", citations: [1, 2] },
          { text: "Craft production and route infrastructure supported exchange across the Deccan; specific engineering achievements should be linked to particular sites and archaeological phases.", citations: [1] },
        ],
      },
      "territory-maps": {
        paragraphs: [
          { text: "Satavahana influence shifted between the western Deccan and the eastern plateau. The map image is a ruler’s coin, not a territorial map; it provides material evidence for royal titulature and portrait conventions. [0][1]", citations: [0, 1] },
          { text: "Modern territory maps are reconstructions from inscriptions, coins, and archaeological finds, whose distribution does not always distinguish direct rule from influence.", citations: [1] },
        ],
      },
      "decline-transformation": {
        paragraphs: [
          { text: "Satavahana power fragmented as regional successor states, including the Ikshvakus in the lower Krishna valley, became prominent. Western Kshatrapa power also changed the political balance. The transformation happened at different times in different regions. [0][1]", citations: [0, 1] },
        ],
      },
      legacy: {
        paragraphs: [
          { text: "Satavahana inscriptions and coinage are central sources for early historic Deccan political and economic history. Their cave and stupa patronage documents interactions among rulers, monastic institutions, merchants, and local donors. [1][2]", citations: [1, 2] },
          { text: "The dynasty’s chronology remains a significant research problem; modern histories should preserve that uncertainty rather than give every ruler an artificially precise reign.", citations: [0, 1] },
        ],
      },
      sources: { paragraphs: [{ text: "The account combines numismatic and inscriptional evidence with modern historical synthesis. The Nasik cave inscription is a royal eulogy and must be read as such." }] },
    },
  },
  "ancient-south-indian-crowned-kingdoms": {
    imageAttribution: "Yon Man33",
    imageLicense: "CC BY-SA 3.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:South_India_in_Sangam_Period.jpg",
    sources: [
      { title: "Tamilakam", publisher: "Regional historical overview", url: "https://en.wikipedia.org/wiki/Tamilakam" },
      { title: "Sangam literature", publisher: "Literary and historical overview", url: "https://en.wikipedia.org/wiki/Sangam_literature" },
      { title: "Chola dynasty", publisher: "Dynastic reference", url: "https://en.wikipedia.org/wiki/Chola_dynasty" },
      { title: "Chera dynasty", publisher: "Dynastic reference", url: "https://en.wikipedia.org/wiki/Chera_dynasty" },
      { title: "Pandyan dynasty", publisher: "Dynastic reference", url: "https://en.wikipedia.org/wiki/Pandyan_dynasty" },
      { title: "A History of Ancient and Early Medieval India", publisher: "Upinder Singh, Pearson, 2008", url: "https://books.google.com/books?vid=ISBN9788131716779" },
    ],
    sections: {
      overview: {
        paragraphs: [
          { text: "This combined entry covers the early Chola, Chera, and Pandya polities of Tamilakam, the southernmost cultural region represented in early Tamil sources. The three royal traditions had distinct centres and political histories; they were not one unified kingdom. The registry's c. 300 BCE onward date is a broad cultural frame, not a shared founding date. [0][1][5]", citations: [0, 1, 5] },
          { text: "Sangam poems, Tamil-Brahmi inscriptions, coins, and archaeology provide different kinds of evidence. The poems preserve political memory and praise, while later dynastic genealogies may project a much longer continuity than can be independently verified. [1][5]", citations: [1, 5] },
        ],
      },
      timeline: {
        paragraphs: [{ text: "Dates for the early rulers are approximate and some names are known chiefly through poetry. The medieval Chola revival belongs to a later phase and should not be merged with the earliest Sangam-era references. [1][2][3][4]", citations: [1, 2, 3, 4] }],
        table: {
          caption: "Separate political traditions within Tamilakam",
          columns: ["Polity", "Early evidence and centres", "Historical caution"],
          rows: [
            ["Chola", "Early references occur in Ashoka's inscriptions and Tamil poems; Uraiyur and the Kaveri region are associated with the tradition.", "The later imperial Cholas from the ninth century are a distinct political phase."],
            ["Chera", "Sangam poems associate Chera rulers with the western coast and inland routes; Vanchi is a traditional centre.", "The location of Vanchi and the chronology of named rulers are debated."],
            ["Pandya", "Early references point to the far south, with Madurai prominent in literary and later records.", "Poetic king lists and later genealogies do not provide a complete dated succession."],
          ],
        },
      },
      "major-rulers": {
        paragraphs: [{ text: "Sangam poems name rulers associated with each tradition, but they are not a synchronised royal register. Karikala is associated with the Cholas, Senguttuvan with the Cheras, and Nedunjeliyan with the Pandyas in literary memory; exact biographies and reign dates are not independently settled. [1][2][3][4]", citations: [1, 2, 3, 4] }],
        table: {
          caption: "Rulers named in early Tamil literary traditions",
          columns: ["Name", "Tradition", "Evidence note"],
          rows: [
            ["Karikala", "Chola", "Celebrated in later Tamil poems; attribution of events and dates is debated."],
            ["Senguttuvan", "Chera", "A major figure in the Cilappatikaram tradition; chronology is not securely fixed."],
            ["Nedunjeliyan", "Pandya", "Several Pandya rulers bear similar titles; individual identifications require caution."],
          ],
        },
      },
      "rise-to-power": {
        paragraphs: [
          { text: "The three crowns appear in early Tamil literary and inscriptional traditions as competing centres of authority. Their emergence reflects regional chiefdoms, agricultural communities, port networks, and changing control of inland routes rather than a single common conquest. [0][1][5]", citations: [0, 1, 5] },
          { text: "The surviving poems describe alliances, tribute, gift-giving, and rivalries, but they do not establish a continuous political history from 300 BCE onward for any one dynasty. Later Chola, Chera, and Pandya states must be distinguished from the early traditions. [1][2][3][4]", citations: [1, 2, 3, 4] },
        ],
      },
      "battles-military": {
        paragraphs: [
          { text: "Sangam poems celebrate raids, battles, and royal victories, including accounts associated with Karikala and Pandya rulers. These are poetic portrayals rather than dated military dispatches; named opponents and outcomes vary among texts. [1][2][4]", citations: [1, 2, 4] },
          { text: "No complete campaign chronology or reliable force totals can be reconstructed for the three early kingdoms. The entry therefore does not assign undated poetic victories to exact calendar years.", citations: [1, 5] },
        ],
      },
      administration: {
        paragraphs: [
          { text: "The poems refer to kings, chiefs, courts, tribute, and territorial centres. They provide no uniform administrative handbook, provincial register, or tax schedule for the Chola, Chera, and Pandya polities. [1][5]", citations: [1, 5] },
          { text: "Inscriptions from later periods document grants and local institutions more fully. Those records cannot simply be projected backward onto all early crowned kingdoms.", citations: [2, 3, 4] },
        ],
      },
      "economy-trade": {
        paragraphs: [
          { text: "Agriculture in river valleys and coastal plains supported settlements, while poems describe pastoral goods, craft production, and exchange. Archaeological evidence from ports and imported objects indicates Indian Ocean connections, including contact with the Roman world. [1][5]", citations: [1, 5] },
          { text: "The western coast, Kaveri delta, and southern ports connected distinct regional economies. Roman coin finds and imported ceramics are evidence of contact, not proof of a uniform state-controlled trade system. [5]", citations: [5] },
        ],
      },
      society: {
        paragraphs: [
          { text: "Sangam poetry depicts farmers, herders, fishers, merchants, artisans, bards, and court dependants through landscape-based poetic conventions. These literary categories offer a window into social imagination, not a complete census of occupations or everyday life. [1][5]", citations: [1, 5] },
          { text: "Women appear as poets, lovers, queens, and donors in different sources. The corpus is selective; it cannot support a single general claim about the status or daily work of all women in the three kingdoms. [1][5]", citations: [1, 5] },
        ],
      },
      "religion-philosophy": {
        paragraphs: [
          { text: "Early Tamil sources refer to regional deities and ritual practices alongside Brahmanical traditions. Jain and Buddhist communities are documented in the wider south through texts, inscriptions, and archaeological evidence; their presence varied by place and period. [1][5]", citations: [1, 5] },
          { text: "Later religious institutions and temple traditions expanded over many centuries. They should not be described as an unchanged system already fully established in the earliest Sangam period. [2][3][4]", citations: [2, 3, 4] },
        ],
      },
      "art-architecture": {
        paragraphs: [
          { text: "The earliest evidence includes Tamil-Brahmi inscriptions, ceramics, megalithic remains, and port settlements. Durable monumental temples associated with the medieval Cholas, Cheras, and Pandyas belong to later phases and should not be misdated to the earliest literary horizon. [1][5]", citations: [1, 5] },
          { text: "Sangam poetry is itself a major literary achievement, preserved in collections assembled and transmitted over time. The language and dating of individual poems remain subjects of scholarship. [1]", citations: [1] },
        ],
      },
      "science-technology": {
        paragraphs: [
          { text: "Tamil-Brahmi writing, iron-working, craft production, water management, and maritime archaeology provide evidence of technical practice in the south. Individual innovations cannot be assigned to a particular crown without dated inscriptions or archaeological context. [1][5]", citations: [1, 5] },
          { text: "The available early evidence does not establish separate royal academies in mathematics, astronomy, or medicine for these three polities.", citations: [5] },
        ],
      },
      "territory-maps": {
        paragraphs: [
          { text: "The accompanying Sangam-period map is a modern reconstruction of southern regions associated with early Tamil traditions. It depicts broad cultural geography, not fixed Chola, Chera, and Pandya borders; those political limits shifted and are not precisely recoverable. [0][1]", citations: [0, 1] },
          { text: "The three traditions broadly correspond to the Kaveri and eastern delta, western coastal and inland routes, and the far southern peninsula, but their influence overlapped and changed over time. [2][3][4]", citations: [2, 3, 4] },
        ],
      },
      "decline-transformation": {
        paragraphs: [
          { text: "The early political landscape transformed over centuries. The Cholas re-emerged as a major imperial power from the ninth century; later Chera and Pandya states also developed in distinct settings. These later histories are continuations of political names and traditions, not an uninterrupted early state. [2][3][4]", citations: [2, 3, 4] },
        ],
      },
      legacy: {
        paragraphs: [
          { text: "Sangam literature is a foundational corpus for early Tamil language, poetics, and regional political memory. The Chola, Chera, and Pandya traditions also became important frameworks for later histories of southern India. [1][5]", citations: [1, 5] },
          { text: "Their study demonstrates why literary praise, inscriptions, coins, and archaeology must be compared rather than treated as interchangeable evidence.", citations: [1, 5] },
        ],
      },
      sources: { paragraphs: [{ text: "This combined record uses separate dynastic references because the Chola, Chera, and Pandya histories are not one polity. Early ruler dates and events in Sangam poetry remain subject to scholarly interpretation." }] },
    },
  },
  "indo-greeks-indo-scythians-sakas": {
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Coin_of_Hippostratos.jpg",
    imageAlt: "Silver coin of the Indo-Greek king Hippostratos",
    imageAttribution: "Classical Numismatic Group",
    imageLicense: "CC BY-SA 3.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Coin_of_Hippostratos.jpg",
    sources: [
      { title: "Indo-Greek Kingdom", publisher: "Numismatic and historical overview", url: "https://en.wikipedia.org/wiki/Indo-Greek_Kingdom" },
      { title: "Indo-Scythian Kingdom", publisher: "Historical overview", url: "https://en.wikipedia.org/wiki/Indo-Scythian_Kingdom" },
      { title: "A History of Ancient and Early Medieval India", publisher: "Upinder Singh, Pearson, 2008", url: "https://books.google.com/books?vid=ISBN9788131716779" },
      { title: "Milinda Panha", publisher: "Buddhist text and historical tradition", url: "https://en.wikipedia.org/wiki/Milinda_Panha" },
    ],
    sections: {
      overview: {
        paragraphs: [
          { text: "This registry entry brings together two distinct histories: Hellenistic Indo-Greek kingdoms and Indo-Scythian or Saka powers. Indo-Greek states developed in Bactria and the northwest after the breakup of Hellenistic rule; Saka groups moved from Central Asia into the region over time. Their polities overlapped and were not one continuous empire. [0][1][2]", citations: [0, 1, 2] },
          { text: "The broad registry range, c. second century BCE to first century CE, masks different local chronologies. Coins, inscriptions, and fragmentary literary references are essential for identifying rulers and territories. [0][1][2]", citations: [0, 1, 2] },
        ],
      },
      timeline: {
        paragraphs: [{ text: "The dates are approximate and vary among regional dynasties. Indo-Greek rule persisted in some areas while Saka authorities gained power elsewhere; Kushan expansion later reshaped the political landscape. [0][1][2]", citations: [0, 1, 2] }],
        table: {
          caption: "Selected rulers and broad chronology", columns: ["Ruler or group", "Approximate period", "Qualification"], rows: [
            ["Demetrius I and early Indo-Greek rulers", "2nd century BCE", "The sequence from Bactrian to Indian campaigns is reconstructed from coins and later sources."],
            ["Menander I", "2nd century BCE", "A prominent Indo-Greek king; dates are approximate and debated."],
            ["Maues", "1st century BCE", "An early Saka ruler associated with northwestern India; chronology varies."],
            ["Azes and successor rulers", "1st century BCE-1st century CE", "Coin-based sequences remain disputed in detail."],
            ["Regional Indo-Greek and Saka houses", "Into the early centuries CE", "Local rulers continued on different timelines; no shared final date applies."],
          ],
        },
      },
      "major-rulers": {
        paragraphs: [
          { text: "Menander I is among the best-attested Indo-Greek kings because of extensive coinage and his appearance as Milinda in the Buddhist dialogue Milinda Panha. The text is a literary-philosophical work, not a contemporary court biography. [0][3]", citations: [0, 3] },
          { text: "Maues and Azes are prominent Saka rulers known chiefly through coins and inscriptions. Their exact sequence and absolute dates are debated; proposed identities should not be presented as settled where numismatic evidence is ambiguous. [1][2]", citations: [1, 2] },
        ],
      },
      "rise-to-power": {
        paragraphs: [
          { text: "The Indo-Greek kingdoms arose from Hellenistic Bactrian political networks after the Seleucid and Greco-Bactrian periods. Campaigns into the subcontinent created several courts with centres including Taxila and Sagala, rather than a single stable capital. [0][2]", citations: [0, 2] },
          { text: "Saka groups migrated south from Central Asia in successive movements. Their expansion intersected with Indo-Greek, Parthian, and local powers; no single migration date or founding event describes every Saka polity. [1][2]", citations: [1, 2] },
        ],
      },
      "battles-military": {
        paragraphs: [
          { text: "Territorial change involved campaigns among Indo-Greek kings, Saka rulers, Indo-Parthians, and neighboring states. Coins sometimes record a ruler's titles and claims, but seldom preserve a full narrative of a battle's cause, outcome, or casualties. [0][1][2]", citations: [0, 1, 2] },
          { text: "Later texts associate Menander with expansion and the Sakas with the displacement of Indo-Greek rulers in some regions. The chronology differed by kingdom; it cannot be reduced to one decisive conquest. [0][1]", citations: [0, 1] },
        ],
      },
      administration: {
        paragraphs: [
          { text: "The evidence points to multiple monarchies and regional courts. Bilingual coin legends, local mints, and changing royal titles show political adaptation, but no unified Indo-Greek-Saka bureaucracy existed across all the grouped territories. [0][1][2]", citations: [0, 1, 2] },
          { text: "Urban centres and local authorities changed hands over time. Provincial systems and succession practices are poorly documented outside the evidence of coin issues and selected inscriptions. [2]", citations: [2] },
        ],
      },
      "economy-trade": {
        paragraphs: [
          { text: "Silver and bronze coinage with Greek and local scripts is one of the most important sources for these kingdoms. Coin circulation and metal standards connect frontier markets, royal authority, and long-distance exchange. [0][1][2]", citations: [0, 1, 2] },
          { text: "Northwest routes linked the subcontinent with Bactria and Central Asia. The coin record shows participation in exchange but does not on its own quantify trade or establish state control of every route. [2]", citations: [2] },
        ],
      },
      society: {
        paragraphs: [
          { text: "The kingdoms operated in multilingual communities. Greek, Prakrit, and Kharoshthi appear in different coin and inscription contexts; these records reveal public political communication but not the complete language practices of the population. [0][1]", citations: [0, 1] },
          { text: "Urban, pastoral, and trading communities connected the northwest frontier. Evidence for gender roles, household customs, and rural daily life is much thinner than the numismatic evidence for rulers.", citations: [2] },
        ],
      },
      "religion-philosophy": {
        paragraphs: [
          { text: "Indo-Greek coins depict Greek and local deities, and some rulers adopted Buddhist-associated symbols. Menander's dialogue with the monk Nagasena in the Milinda Panha is an important Buddhist tradition, but its composition and historicity require separate analysis. [0][3]", citations: [0, 3] },
          { text: "Saka rulers supported varied religious institutions in different regions. Religious images on coins document royal representation, not necessarily the personal belief of every ruler or subject. [1][2]", citations: [1, 2] },
        ],
      },
      "art-architecture": {
        paragraphs: [
          { text: "Portrait coins and bilingual legends are the most direct surviving visual records for many Indo-Greek and Saka rulers. They show changing portrait conventions, scripts, and divine imagery. [0][1]", citations: [0, 1] },
          { text: "Gandharan art developed through a longer regional history involving multiple patrons and communities. It should not be attributed wholesale to either the Indo-Greek or Saka dynasties. [2]", citations: [2] },
        ],
      },
      "science-technology": {
        paragraphs: [
          { text: "The surviving coins document skilled engraving, die production, bilingual lettering, and metalworking. These technologies supported the display and circulation of royal authority; no unified court scientific programme is recorded. [0][1][2]", citations: [0, 1, 2] },
          { text: "Astronomical and mathematical transmission across the broader region is a separate research field; specific discoveries should not be assigned to these kingdoms without direct dated evidence. [2]", citations: [2] },
        ],
      },
      "territory-maps": {
        paragraphs: [
          { text: "The linked coin is an artifact image rather than a territorial map. Indo-Greek centres included parts of Bactria and the northwest; Saka realms extended through Gandhara, the Indus region, and other zones at different times. Boundaries shifted and overlapped. [0][1][2]", citations: [0, 1, 2] },
        ],
        note: "A single political boundary map would conceal the separate and overlapping chronologies of the Indo-Greek and Saka rulers grouped in this registry entry.",
      },
      "decline-transformation": {
        paragraphs: [
          { text: "Indo-Greek rule diminished at different times across its former territories. Saka and Indo-Parthian authorities also changed through local successions; the rise of Kushan power was one later transformation, not a simultaneous end to every polity. [0][1][2]", citations: [0, 1, 2] },
        ],
      },
      legacy: {
        paragraphs: [
          { text: "Their coinage is a crucial source for the political history of the northwest and for the study of scripts, titulature, and artistic exchange. These kingdoms also show how frontier societies linked South Asia with Central Asia and the Hellenistic world. [0][1][2]", citations: [0, 1, 2] },
        ],
      },
      sources: { paragraphs: [{ text: "This combined page treats Indo-Greek and Saka histories separately wherever the evidence permits. The Milinda Panha is cited as a Buddhist literary tradition, not as a verbatim historical transcript." }] },
    },
  },
  "kushan-empire": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Map_of_the_Kushan_Empire.png/960px-Map_of_the_Kushan_Empire.png",
    imageAlt: "Map of the Kushan Empire and its Central Asian and South Asian territories",
    imageAttribution: "Koba-chan, map based on the Schwartzberg Atlas",
    imageLicense: "CC BY-SA 3.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Map_of_the_Kushan_Empire.png",
    sources: [
      { title: "Kushan Empire", publisher: "Historical and archaeological overview", url: "https://en.wikipedia.org/wiki/Kushan_Empire" },
      { title: "A History of Ancient and Early Medieval India", publisher: "Upinder Singh, Pearson, 2008", url: "https://books.google.com/books?vid=ISBN9788131716779" },
      { title: "Kanishka", publisher: "Historical overview; accession date remains debated", url: "https://en.wikipedia.org/wiki/Kanishka" },
      { title: "Buddhist Monuments at Sanchi", publisher: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/524/" },
    ],
    sections: {
      overview: {
        paragraphs: [
          { text: "The Kushan Empire developed from the Yuezhi confederation in Bactria and connected Central Asia with Afghanistan, Pakistan, and northern India. Its political high point is conventionally placed in the first to third centuries CE; the registry's c. 30-375 CE span is an approximate umbrella rather than a single fixed boundary. [0][1]", citations: [0, 1] },
          { text: "Kushan history is reconstructed from coins, inscriptions, archaeological sites, and Chinese records. The empire's territorial reach and rulers changed over time, and some central dates, especially Kanishka's accession, remain disputed. [0][1][2]", citations: [0, 1, 2] },
        ],
      },
      timeline: {
        paragraphs: [{ text: "The chronology of early rulers and the accession of Kanishka have been revised by numismatic and inscriptional research. The dates below are broad scholarly conventions, not a settled regnal calendar. [0][1][2]", citations: [0, 1, 2] }],
        table: {
          caption: "Principal Kushan rulers and approximate sequence",
          columns: ["Ruler", "Approximate period", "Historical note"], rows: [
            ["Kujula Kadphises", "1st century CE", "Consolidated Kushan power in Bactria and adjoining regions; precise dates vary."],
            ["Vima Takto", "1st century CE", "Known from coin and inscriptional evidence; identification in some sequences remains debated."],
            ["Vima Kadphises", "Late 1st-early 2nd century CE", "Issued extensive gold coinage and expanded royal titulature."],
            ["Kanishka I", "Accession often placed c. 127 CE, disputed", "A major ruler; competing chronological systems have proposed different accession dates."],
            ["Huvishka", "2nd century CE", "Attested by a substantial coin and inscription record."],
            ["Vasudeva I", "Late 2nd-early 3rd century CE", "A later Kushan ruler; the extent of authority contracted regionally thereafter."],
          ],
        },
      },
      "major-rulers": {
        paragraphs: [
          { text: "Kujula Kadphises is associated with the formation of the imperial line. Vima Kadphises and Kanishka are prominent in coinage and royal representation; Huvishka and Vasudeva I are documented through later issues and inscriptions. Their exact reign boundaries differ among reconstructions. [0][1][2]", citations: [0, 1, 2] },
          { text: "Kanishka's patronage is important in Buddhist history, but later literary accounts of his councils and campaigns must be distinguished from contemporary inscriptions and archaeological evidence. [0][2]", citations: [0, 2] },
        ],
      },
      "rise-to-power": {
        paragraphs: [
          { text: "The Kushans emerged from the Yuezhi, a confederation that moved west into Bactria before establishing power across Central Asian routes. The process unfolded through political consolidation, not one migration event with a single date. [0][1]", citations: [0, 1] },
          { text: "Their position between Bactria, the Hindu Kush, and northern India enabled expansion into existing urban and commercial networks. Kushan authority incorporated diverse regions rather than imposing identical government everywhere. [0][1]", citations: [0, 1] },
        ],
      },
      "battles-military": {
        paragraphs: [
          { text: "Kushan expansion is visible in the spread of coinage and inscriptions, but campaigns are less completely documented than the empire's political footprint. Specific battles and opponents should be tied to dated evidence rather than inferred from a map alone. [0][1]", citations: [0, 1] },
          { text: "The empire later faced changing regional powers in Bactria and India. No single battle is known to have ended Kushan rule throughout its territories.", citations: [0, 1] },
        ],
      },
      administration: {
        paragraphs: [
          { text: "Kushan rulers used imperial titles and issued coinage across a multilingual realm. Inscriptions show local officials and religious donors, but the administrative structure was not uniform from Bactria to Mathura. [0][1]", citations: [0, 1] },
          { text: "Purusapura (Peshawar) and Mathura are associated with important Kushan centres; the location and role of royal capitals changed across reigns. The surviving evidence does not yield a complete provincial roster. [0][1]", citations: [0, 1] },
        ],
      },
      "economy-trade": {
        paragraphs: [
          { text: "Kushan gold and copper coinage circulated across a wide area and is a key source for royal titulature and economic connections. The empire linked Central Asian routes with markets in northern India, but coin finds do not provide a complete trade balance. [0][1]", citations: [0, 1] },
          { text: "Agriculture, urban crafts, and exchange across routes later associated with the Silk Road supported regional prosperity. The importance of particular routes and commodities varied over time. [0][1]", citations: [0, 1] },
        ],
      },
      society: {
        paragraphs: [
          { text: "Inscriptions and material culture reveal communities using Greek, Bactrian, Prakrit, and other languages across the empire's regions. Coins and religious donations capture public institutions and elites more clearly than ordinary household life. [0][1]", citations: [0, 1] },
          { text: "The Kushan realm connected mobile pastoral traditions, settled agriculture, urban centres, and long-distance merchants. These varied settings should not be reduced to one empire-wide social structure. [1]", citations: [1] },
        ],
      },
      "religion-philosophy": {
        paragraphs: [
          { text: "Kushan coins depict Iranian, Greek, and South Asian deities, providing evidence for a broad royal visual vocabulary. Buddhist institutions also flourished in parts of the empire; this does not establish one exclusive official religion. [0][1]", citations: [0, 1] },
          { text: "Kanishka is strongly associated with Buddhist patronage in later traditions, while inscriptions and art provide more direct evidence for specific donations and images. Accounts of a formal Buddhist council remain debated. [0][2]", citations: [0, 2] },
        ],
      },
      "art-architecture": {
        paragraphs: [
          { text: "Gandharan and Mathura art developed in the Kushan-era world, with distinct regional workshops and visual conventions. Neither tradition should be attributed solely to one ruler or treated as a uniform imperial style. [0][1]", citations: [0, 1] },
          { text: "Buddhist monasteries, sculptures, and inscriptions connected patrons across the region. The Sanchi UNESCO listing offers broader context for Buddhist monuments but is not a Kushan-only site attribution. [3]", citations: [3] },
        ],
      },
      "science-technology": {
        paragraphs: [
          { text: "Kushan coin production, multilingual inscriptions, and monumental religious construction document technical and administrative skills. Excavated sites and transport networks show regional engineering practices, but no central imperial science academy is documented. [0][1]", citations: [0, 1] },
          { text: "Claims about advances in astronomy, medicine, or mathematics require attribution to specific texts and dates; they cannot be assigned generically to the entire Kushan period. [1]", citations: [1] },
        ],
      },
      "territory-maps": {
        paragraphs: [
          { text: "At different times the empire connected Bactria and Central Asia with Afghanistan and northern Indian centres such as Mathura. The accompanying map is a modern reconstruction based on a historical atlas; actual control and borders varied by period. [0][1]", citations: [0, 1] },
          { text: "Purusapura, Mathura, and other regional cities appear in the historical record. Their functions were not necessarily identical or simultaneous as royal centres. [0]", citations: [0] },
        ],
      },
      "decline-transformation": {
        paragraphs: [
          { text: "Kushan authority fragmented in the third century CE as regional powers grew in Bactria and India. The transformation occurred at different times and should not be described as one empire-wide collapse in 375 CE. [0][1]", citations: [0, 1] },
        ],
      },
      legacy: {
        paragraphs: [
          { text: "Kushan history illuminates connections among Central Asia, South Asia, and long-distance exchange. Its coins, inscriptions, and art are major sources for the movement of languages, religious imagery, and political forms across regions. [0][1]", citations: [0, 1] },
          { text: "Debates over Kanishka's accession and the empire's boundaries demonstrate how new inscriptions and coin studies can change historical chronologies. [2]", citations: [2] },
        ],
      },
      sources: { paragraphs: [{ text: "The map is credited to its creator and underlying atlas reference. Ruler dates and the accession of Kanishka remain matters of scholarly debate." }] },
    },
  },
  "gupta-empire": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Map_of_the_Gupta_Empire.png/960px-Map_of_the_Gupta_Empire.png",
    imageAlt: "Map of the Gupta Empire around the early fifth century CE",
    imageAttribution: "Koba-chan, adapted from Joseph E. Schwartzberg's historical atlas",
    imageLicense: "CC BY-SA 3.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Map_of_the_Gupta_Empire.png",
    sources: [
      { title: "Gupta Empire", publisher: "Historical overview", url: "https://en.wikipedia.org/wiki/Gupta_Empire" },
      { title: "A History of Ancient and Early Medieval India", publisher: "Upinder Singh, Pearson, 2008", url: "https://books.google.com/books?vid=ISBN9788131716779" },
      { title: "Aryabhata", publisher: "Astronomical and mathematical history", url: "https://en.wikipedia.org/wiki/Aryabhata" },
      { title: "Early India: From the Origins to AD 1300", publisher: "Romila Thapar, University of California Press, 2002", url: "https://www.ucpress.edu/book/9780520242258/early-india" },
    ],
    sections: {
      overview: {
        paragraphs: [
          { text: "The Gupta dynasty ruled a changing set of territories in northern India from the fourth to sixth centuries CE. The registry uses c. 320-550 CE; the imperial centre shifted over time, with Pataliputra and Ujjain among the important cities associated with Gupta rule. Political control was layered rather than uniform across every region on modern maps. [0][1]", citations: [0, 1] },
          { text: "The period is often called a classical or Golden Age because of developments in Sanskrit literature, coinage, sculpture, and learning. Historians debate how widely prosperity and cultural activity were shared, so the label should be treated as an interpretation, not a description of every subject's experience. [1][3]", citations: [1, 3] },
        ],
      },
      timeline: {
        paragraphs: [{ text: "Dates are approximate, especially for early and later rulers. Inscriptions, coins, and dated literary works provide firmer evidence for some reigns than for others. [0][1]", citations: [0, 1] }],
        table: {
          caption: "Major Gupta rulers and approximate reigns", columns: ["Ruler", "Approximate reign", "Historical note"], rows: [
            ["Chandragupta I", "c. 319-335 CE", "His accession is associated with the Gupta era; chronology is reconstructed."],
            ["Samudragupta", "c. 335-375 CE", "His Allahabad pillar inscription records campaigns and political relationships."],
            ["Chandragupta II", "c. 375-415 CE", "Expanded Gupta influence; associated with the western conquest in later reconstruction."],
            ["Kumaragupta I", "c. 415-455 CE", "Long reign attested by inscriptions and coinage."],
            ["Skandagupta", "c. 455-467 CE", "Inscriptions refer to conflict with the Hunas and restoration of royal authority."],
            ["Later Gupta rulers", "Late 5th-6th century CE", "Succession and regional authority fragmented; dates vary among sources."],
          ],
        },
      },
      "major-rulers": {
        paragraphs: [
          { text: "Samudragupta's Allahabad pillar inscription presents a royal account of campaigns, submission, and alliances. It is a valuable source for his political claims, but its eulogistic form must be considered when reconstructing the extent of direct rule. [0][1]", citations: [0, 1] },
          { text: "Chandragupta II, Kumaragupta I, and Skandagupta are documented by inscriptions and coins. Skandagupta's records refer to conflict and the defence of authority; later kings are less consistently attested, so individual achievements should not be invented to fill the succession. [0][1]", citations: [0, 1] },
        ],
      },
      "rise-to-power": {
        paragraphs: [
          { text: "The Guptas began as a regional ruling family in the Ganges plain. Chandragupta I's marriage alliance with the Licchavis is recorded in later dynastic representation; the precise political consequences are reconstructed from inscriptions and coinage. [0][1]", citations: [0, 1] },
          { text: "Samudragupta expanded the dynasty's influence through campaigns and political arrangements with other rulers. His inscription distinguishes different relationships, including defeated rulers, frontier states, and allies; these categories should not be collapsed into a single directly governed territory. [0][1]", citations: [0, 1] },
        ],
      },
      "battles-military": {
        paragraphs: [
          { text: "The Allahabad pillar inscription lists Samudragupta's southern and northern campaigns and names rulers with differing outcomes. As a royal eulogy, it records political claims rather than an independently verified battle-by-battle account. [0][1]", citations: [0, 1] },
          { text: "Skandagupta's inscriptions associate his reign with conflict against the Hunas. The dating, scale, and consequences of these incursions are debated; they formed one part of broader political change, not a complete explanation for Gupta decline. [0][1]", citations: [0, 1] },
        ],
      },
      administration: {
        paragraphs: [
          { text: "Gupta inscriptions record land grants, officials, local authorities, and subordinate rulers. The evidence suggests a mixture of royal administration and regional intermediaries; the empire did not exert the same direct control everywhere. [1][3]", citations: [1, 3] },
          { text: "Gold and copper coin issues provide evidence of royal titles and changing political reach. Grants and inscriptions illuminate revenue and property relationships but do not form a complete empire-wide administrative handbook. [0][1]", citations: [0, 1] },
        ],
      },
      "economy-trade": {
        paragraphs: [
          { text: "Gold coinage, land grants, inscriptions, and urban archaeology illuminate Gupta production and exchange. Coin abundance in a particular reign is not a direct measurement of prosperity for all regions or social groups. [0][1]", citations: [0, 1] },
          { text: "Agriculture, craft work, and inland and maritime trade supported regional economies. Grants changed rights to land and revenue, while trade routes connected northern centres with western ports and other parts of South Asia. [1][3]", citations: [1, 3] },
        ],
      },
      society: {
        paragraphs: [
          { text: "Inscriptions and literary texts document royal courts, landholding groups, religious institutions, and urban occupations. These are elite and institutional sources; they cannot establish that all communities experienced the period as a Golden Age. [1][3]", citations: [1, 3] },
          { text: "Normative texts describe gender and social duties, while inscriptions and donations show particular women and non-elite patrons. Such evidence should be read locally rather than treated as a uniform picture of daily life. [1]", citations: [1] },
        ],
      },
      "religion-philosophy": {
        paragraphs: [
          { text: "Gupta rulers patronised Brahmanical traditions and Sanskrit religious culture, while Buddhist and Jain institutions continued. Inscriptions and archaeological sites show varied communities; royal patronage did not erase religious diversity. [1][3]", citations: [1, 3] },
          { text: "Philosophical and literary schools developed across the period, but dates and attributions differ by text. The era should not be reduced to one state doctrine or a single religious renaissance.", citations: [1, 3] },
        ],
      },
      "art-architecture": {
        paragraphs: [
          { text: "Gupta-period sculpture and early structural temples appear at sites including Udayagiri, Deogarh, and Sarnath. These works differ in date, patronage, and regional style; not every monument was built by an emperor. [1][3]", citations: [1, 3] },
          { text: "Sanskrit literary works associated with the period include Kalidasa's plays and poetry, though exact dates and court relationships are not always securely known. Gupta gold coins also combine portraiture, symbols, and royal claims. [0][1]", citations: [0, 1] },
        ],
      },
      "science-technology": {
        paragraphs: [
          { text: "Aryabhata's Aryabhatiya is dated to 499 CE and presents mathematical and astronomical work, including a systematic account of calculation and planetary motion. Its date is later than the earliest Gupta rulers, and its authorship should not be used to claim every achievement for Gupta state patronage. [2]", citations: [2] },
          { text: "Metallurgy, coin production, temple construction, and the Iron Pillar at Delhi are part of the broader technical history of the period. The pillar's date and patronage are discussed separately from later popular claims about corrosion resistance. [1][3]", citations: [1, 3] },
        ],
      },
      "territory-maps": {
        paragraphs: [
          { text: "The map depicts a proposed Gupta extent around the early fifth century CE, based on a modern historical atlas. Gupta authority expanded and contracted; tributary relationships and direct administration differed, so the map is not a contemporaneous border survey. [0][1]", citations: [0, 1] },
          { text: "Pataliputra and Ujjain were important centres in different contexts. Regional powers beyond the core maintained varying degrees of autonomy and should not be assumed to have been governed identically. [1][3]", citations: [1, 3] },
        ],
      },
      "decline-transformation": {
        paragraphs: [
          { text: "After Skandagupta, succession and central authority became less secure as regional powers gained ground. Huna incursions, fiscal pressures, and political fragmentation are discussed as contributing factors, but no single cause explains the empire's transformation. [0][1]", citations: [0, 1] },
          { text: "By the sixth century, Gupta authority had contracted into regional successor states. The end was gradual and varied across the former imperial sphere. [1][3]", citations: [1, 3] },
        ],
      },
      legacy: {
        paragraphs: [
          { text: "Gupta inscriptions, coinage, Sanskrit literature, sculpture, and temple remains are major sources for classical South Asian history. The period's political and cultural significance is substantial, while the label Golden Age remains debated for its social reach. [0][1][3]", citations: [0, 1, 3] },
          { text: "Aryabhata's dated work is a landmark in mathematical astronomy, but it belongs to a wider intellectual history rather than an undocumented state science programme. [2]", citations: [2] },
        ],
      },
      sources: { paragraphs: [{ text: "The Gupta timeline is reconstructed from inscriptions, coins, literary sources, and archaeology. Aryabhata's work is cited by its own date; the territorial map is credited to its creator and historical atlas reference." }] },
    },
  },
}
