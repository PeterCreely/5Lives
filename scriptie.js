
const words1 = ["sin", "seo", "mar", "ach", "aon", "tar", "iad", "rud", "trí", "gan", "fad", "áit", "mac", "gur", "tír", "alt", "fág", "nua", "cás", "tóg", "cad", "ais", "ard", "dia", "fós", "tús", "fiú", "fan", "dar", "bás", "cur", "nár", "mol", "lán", "lig", "bun", "cos", "dún", "tit", "dán", "gnó", "dlí", "nós", "slí", "ann", "fás", "iúl", "síl", "cúl", "cas", "mír", "don", "beo", "íoc", "cor", "bia", "brí", "más", "bád", "grá", "gné", "Mór", "olc", "bog", "cuí", "arm", "dul", "bán", "lár", "ith", "bua", "rún", "aer", "pós", "cum", "gar", "deo", "sín", "dár", "áis", "trá", "San", "bac", "cló", "éan", "can", "clé", "cál", "brú", "eas", "tor", "níl", "ord", "tae", "rás", "buí", "muc", "ról", "eol", "for", "lag", "bus", "fán", "las", "son", "ubh", "cat", "éis", "ola", "éag", "cré", "suí", "amú", "fód", "ára", "ádh", "sos", "aos", "póg", "plé", "lón", "och", "art", "lom", "ceo", "oir", "clú", "gin", "éad", "jab", "sil", "cha", "gás", "arb", "aoi", "fón", "chí", "mín", "seó", "rua", "idé", "gob", "mam", "com", "lúb", "oil", "áth", "sor", "cór", "gal", "úll", "mil", "ara", "óir", "pas", "bos", "fál", "fís", "gas", "ise", "min", "all", "iúr", "uan", "cró", "túr", "luí", "col", "rón", "tuí", "dua", "dob", "bob", "fia", "cúr", "mál", "cam", "boc", "dos", "lus", "cód", "des", "ámh", "bís", "áil", "aol", "cic", "cac", "gúm", "íle", "cis", "cnó", "tré", "ton", "óid", "gus", "ala", "lem", "dea", "pic", "ros", "dhi", "múr", "an-", "lia", "cár", "ait", "oth", "mám", "sop", "fud", "rós", "lao", "íde", "aga", "gad", "tum", "gol", "guí", "pár", "ród", "nod", "dís", "súd", "sea", "log", "gor", "mún", "inn", "tál", "crá", "nia", "nic", "glé", "pus", "fir", "liú", "lon", "dem", "ris", "led", "meá", "amh", "dho", "aor", "sac", "íol", "iar", "tua", "arú", "tom", "píb", "pór", "dod", "lua", "rís", "íon", "alp", "dúr", "crú", "lód", "tur", "soc", "rum", "bas", "bod", "thu", "sia", "lot", "poc", "cín", "dil", "úir", "loc", "dol", "cab", "agó", "urú", "hin", "tíl", "pis", "lae", "roc", "fré", "cón", "feá", "abú", "láí", "cúb", "car", "tic", "eag", "con", "ail", "plá", "búr", "dál", "tan", "pol", "súp", "rop", "naí", "sip", "ded", "mor", "eis", "tím", "ríl", "dól", "aló", "iúd", "reo", "tlú", "bró", "sár", "sól", "ró-", "úil", "sás", "lic",
];
let selectedWord1 = words1[Math.floor(Math.random() * words1.length)];

const words2 = ["agus", "cuir", "déan", "faoi", "féin", "chun", "eile", "cuid", "siad", "nach", "bain", "gach", "fear", "beag", "Éire", "céad", "feic", "níos", "idir", "saol", "bith", "féad", "bean", "fios", "uair", "arsa", "súil", "síos", "glac", "arís", "iarr", "níor", "thar", "tuig", "aire", "méid", "leor", "lean", "fada", "acht", "lámh", "ceap", "léir", "béal", "bord", "uile", "gabh", "stát", "ainm", "suas", "clár", "muid", "mise", "linn", "meas", "leag", "ceol", "Seán", "cóir", "cinn", "cuma", "beir", "aois", "inis", "líon", "ball", "siar", "cáin", "post", "croí", "rith", "seas", "barr", "dáil", "siúd", "breá", "cúis", "réir", "deis", "each", "fuil", "caoi", "mura", "meán", "deir", "fíor", "seol", "cara", "cúig", "sula", "míle", "saor", "deas", "fáth", "treo", "déag", "dara", "mair", "sórt", "cead", "bonn", "dubh", "céim", "leas", "fonn", "cibé", "díol", "imir", "loch", "ocht", "sinn", "glan", "suim", "bris", "dath", "file", "lorg", "clog", "dáta", "sibh", "líne", "éist", "rang", "Liam", "tine", "corp", "nigh", "fill", "mian", "údar", "slán", "aird", "sise", "tusa", "toil", "modh", "stop", "geal", "baol", "carr", "géar", "port", "trom", "anam", "glas", "banc", "sean", "réim", "guth", "slua", "cion", "iasc", "club", "ordú", "gáir", "siúl", "taca", "cnoc", "dúil", "mall", "mála", "scil", "múin", "nóta", "naoi", "vóta", "glór", "imní", "cill", "Eoin", "tada", "trua", "poll", "scór", "fuar", "ráta", "teip", "gaol", "gorm", "crua", "peil", "Luan", "punt", "cath", "béim", "tóir", "muna", "binn", "óige", "stad", "fine", "Síle", "long", "cosc", "iamh", "teas", "méad", "cóip", "bróg", "togh", "muir", "seal", "iris", "dona", "féar", "cois", "póca", "carn", "cine", "dein", "spás", "rabh", "caol", "bhur", "fadó", "gort", "abar", "díth", "stíl", "riar", "éirí", "móin", "meon", "fair", "slat", "cros", "corn", "rian", "blas", "lear", "brón", "tóin", "fáil", "stán", "cíos", "nasc", "arán", "dear", "crom", "léim", "buan", "bolg", "scar", "dála", "rinn", "sách", "fíon", "dian", "raon", "séan", "síol", "marc", "Íosa", "tost", "asal", "inne", "ucht", "aill", "tíor", "pioc", "claí", "stór", "tuar", "rath", "méar", "faic", "Nóra", "tart", "ceal", "bail", "ceil", "tonn", "séid", "néal", "áras", "donn", "pian", "gair", "cian", "aice", "cóta", "tinn", "géag", "inné", "goid", "cuan", "leis", "cách", "pápa", "pota", "tapa", "fríd", "dual", "brat", "díon", "éide", "dall", "ardú", "coir", "luas", "ómós", "múch", "stoc", "maol", "mion", "fána", "scor", "síor", "sáil", "thar", "leac", "béas", "geit", "raic", "eite", "sult", "airí", "fóir", "call", "cíor", "from", "clós", "comh", "daor", "tríú", "cuil", "roth", "sona", "soir", "mill", "hata", "ósta", "srón", "cúng", "béic", "lios", "nead", "órga", "lann", "téip", "rann", "gual", "mear", "bata", "ársa", "tasc", "grád", "glao", "cean", "figh", "plúr", "réab", "móid", "grán", "cloí", "sárú", "dána", "réal", "oide", "coll", "gann", "luch", "feis", "acra", "táin", "pill", "uaim", "goil", "cáis", "léas", "feil", "gean", "bunú", "cnag", "dada", "gnás", "beár", "éalú", "téad", "sioc", "clis", "tais", "nath", "corr", "gúna", "clos", "inse", "leid", "dorn", "seic", "fóin", "sara", "fial", "lách", "crúb", "bród", "faoi", "mapa", "smál", "slog", "leon", "tíos", "gile", "dámh", "cual", "nimh", "osna", "moch", "geis", "borr", "taom", "eala", "cime", "toll", "stró", "salm", "míol", "maor", "marú", "prós", "rinc", "cith", "rópa", "suan", "leic", "time", "mias", "siúr", "dlús", "ailt", "ligh", "both", "caid", "sann", "laoi", "dair", "glic", "marg", "arae", "ráth", "gleo", "loit", "galf", "fara", "ríon", "léan", "aoir", "cuas", "cuar", "léig", "péas", "mana", "túis", "lasc", "damh", "moll", "muin", "mais", "bloc", "molt", "colm", "folt", "bior", "borb", "goin", "meil", "bídh", "lofa", "lobh", "tolg", "earc", "unsa", "stól", "scag", "criú", "ribe", "ding", "lána", "céas", "slad", "béar", "téis", "róst", "folc", "ansa", "bran", "díog", "caor", "gála", "púca", "cáca", "fail", "píce", "ponc", "éasc", "nóin", "sall", "fleá", "smut", "saoi", "gafa", "sleá", "sámh", "muis", "char", "ciap", "mart", "tosú", "sábh", "righ", "anró", "airc", "grua", "cáil", "coim", "tásc", "mada", "mamó", "diúc", "rádh", "cnap", "bard", "rosc", "maos", "paca", "crap", "mire", "fead", "guta", "sail", "rámh", "dúrt", "deil", "bile", "coca", "graf", "roll", "lúth", "láib", "thig", "aibí", "tofa", "mala", "snas", "muga", "umar", "gall", "seit", "dris", "bíog", "anas", "fach", "léar", "duán", "iata", "toit", "smig", "síob", "glún", "frog", "fuin", "mata", "síon", "torc", "súsa", "taos", "gidh", "groí", "cart", "slis", "páis", "atóg", "alla", "feac", "subh", "slám", "cora", "urra", "rite", "iall", "lapa", "basc", "smid", "dúch", "diúl", "srac", "seál", "loic", "fann", "last", "scal", "masc", "slóg", "réad", "gíog", "daoi", "deic", "prás", "tchí", "ciúb", "póit", "díle", "duan", "tuil", "peig", "spré", "reic", "pras", "plás", "cast", "sióg", "géin", "dias", "cúlú", "céir", "láir", "sinc", "seac", "úire", "ológ", "sine", "eire", "dorú", "fliú", "tuin", "tóig", "róba", "crot", "eang", "noch", "broc", "fiar", "uain", "anfa", "fual", "Mars", "clab", "ráis", "tram", "corc", "tiús", "fras", "grod", "crón", "amas", "éigh", "trup", "péac", "cána", "coip", "tanc", "ráig", "scol", "ógra", "iora", "neos", "stua", "géim", "fuip", "orra", "bóna", "grág", "gram", "cupa", "puth", "sorn", "chan", "daid", "glam", "mona", "raca", "éamh", "rial", "scan", "díbh", "plab", "bíos", "snag", "scís", "spor", "sóid", "méin", "neon", "calm", "leig", "gliú", "giar", "geir", "form", "cócó", "rírá", "balc", "pluc", "forc", "gábh", "lása", "haca", "orla", "rúta", "séis", "rúid", "fiús", "áirc", "ailp", "brod", "diúg", "pinc", "gine", "scun", "raid", "táir", "sin-", "náid", "cúil", "déad", "síog", "earr", "liag", "dóib", "snap", "blús", "lile", "tona", "blár", "stil", "scól", "olar", "sonc", "Inid", "pióg", "till", "rois", "ózón", "cáim", "ríog", "gail", "dea-", "drom", "dísc", "facs", "crág", "anás",
];
let selectedWord2 = words2[Math.floor(Math.random() * words2.length)];

const words3 = ["duine", "abair", "maith", "faigh", "téigh", "nuair", "amach", "ceann", "caith", "chomh", "chuig", "obair", "taobh", "anois", "céile", "teach", "ceart", "scéal", "roimh", "ceist", "ansin", "dóigh", "pobal", "scoil", "roinn", "úsáid", "leith", "anseo", "oíche", "baile", "lucht", "cúrsa", "eolas", "imigh", "caint", "ábhar", "féach", "siúil", "éigin", "buail", "riamh", "focal", "beirt", "measc", "clois", "cónaí", "thart", "minic", "anuas", "ionad", "uisce", "geall", "cúpla", "cúirt", "doras", "oifig", "córas", "mórán", "sásta", "inniu", "suigh", "breis", "sráid", "Máire", "caill", "gearr", "áfach", "creid", "luath", "grúpa", "fadhb", "scéim", "seans", "bocht", "thiar", "tuill", "lacha", "gaoth", "dream", "cumas", "tráth", "clann", "stair", "cúram", "athrú", "toisc", "crann", "páirt", "cloch", "solas", "foirm", "litir", "plean", "páirc", "léann", "rogha", "leath", "féile", "uasal", "conas", "léigh", "grian", "dócha", "píosa", "thíos", "fóill", "turas", "luigh", "beith", "riail", "fógra", "thuas", "beart", "léamh", "deara", "siopa", "leaba", "deich", "dearg", "eagla", "baint", "garda", "dráma", "fiche", "luach", "réidh", "neart", "triúr", "aonar", "marbh", "deoch", "greim", "fosta", "dalta", "droim", "troid", "bhuel", "ócáid", "tuath", "brath", "ciall", "airde", "foras", "spéis", "iníon", "spórt", "gnáth", "bronn", "socrú", "Tadhg", "bláth", "thall", "íseal", "glúin", "aigne", "earra", "aonad", "duais", "balla", "meall", "aníos", "bille", "nocht", "aidhm", "gáire", "spéir", "breac", "easpa", "galar", "gasúr", "ciúin", "Márta", "bosca", "theas", "urlár", "Muire", "iomaí", "teann", "croch", "fórsa", "madra", "laoch", "Brian", "leasú", "cósta", "cruth", "áthas", "anonn", "téacs", "feirm", "halla", "araon", "gléas", "miste", "bréag", "gunna", "caora", "aniar", "dearc", "moill", "snámh", "cnámh", "géill", "caoin", "druga", "cárta", "achar", "cúige", "ionas", "báigh", "sruth", "feoil", "dílis", "locht", "éadan", "rúnaí", "staid", "éasca", "scaip", "aiste", "scoth", "druid", "ciste", "téama", "tairg", "ocras", "maígh", "deoir", "seinn", "sonra", "tobar", "béile", "coill", "óstán", "maoin", "achan", "náire", "bunús", "anall", "gnách", "scáth", "tréig", "méadú", "craol", "íomhá", "othar", "aicme", "fuaim", "gairm", "sáigh", "tirim", "báire", "ceird", "garbh", "geata", "liath", "maide", "naofa", "Máirt", "uaigh", "cluin", "dabht", "braon", "uafás", "tábla", "tréan", "banna", "cairt", "cluas", "binse", "anáil", "neamh", "nádúr", "fásta", "cosán", "ardán", "feadh", "fearg", "cúlra", "aisce", "peann", "srian", "aréir", "caite", "claon", "gorta", "fiach", "casta", "dlúth", "caoga", "míniú", "péire", "láigh", "rince", "barra", "cearc", "scuab", "práta", "naomh", "cleas", "ruaig", "guigh", "scoir", "armas", "fiáin", "peaca", "preab", "taise", "scála", "Cáisc", "grinn", "brách", "onóir", "buile", "titim", "agóid", "sacar", "colún", "bréan", "teith", "eagar", "ríoga", "eolaí", "pósta", "abhus", "fuath", "ríomh", "Páras", "díomá", "cupán", "buíon", "gleic", "éacht", "dligh", "scian", "fáisc", "pláta", "ithir", "iomad", "díbir", "scáil", "eitil", "feith", "tobac", "fionn", "crith", "teist", "bráid", "léine", "scata", "giota", "feall", "scair", "toirt", "sciob", "daite", "réigh", "cogar", "tanaí", "oibrí", "suite", "muise", "campa", "rúnda", "togha", "dúnta", "cléir", "gnéas", "gasta", "táirg", "allas", "sáile", "doirt", "dúlra", "tiubh", "finné", "botún", "albam", "píopa", "togra", "óráid", "blais", "seach", "neach", "faill", "milis", "tarbh", "múnla", "méara", "fíric", "buama", "baist", "crios", "leaid", "meath", "aosta", "seilg", "goill", "séimh", "scíth", "puinn", "rialú", "gadaí", "maise", "imirt", "ochtó", "craic", "olann", "súigh", "docht", "ailse", "canna", "faire", "caoch", "síoda", "eadar", "cumha", "caife", "sólás", "sáith", "ráfla", "cuach", "airne", "alcól", "luibh", "tnúth", "cearr", "tacht", "tuile", "beach", "éindí", "anoir", "sciar", "plána", "beola", "creat", "cróga", "mothú", "thusa", "aoibh", "sicín", "bearr", "féith", "ortha", "forás", "masla", "cónra", "trian", "dhein", "ceilt", "tosaí", "staon", "goile", "tuama", "uacht", "peata", "laige", "stoca", "fráma", "scaif", "draoi", "beann", "glóir", "teilg", "péist", "luasc", "cathú", "séala", "racht", "ídigh", "snáth", "uaimh", "casóg", "oilte", "smior", "cúisí", "císte", "ireas", "tarlú", "balbh", "cothú", "púdar", "sonas", "seift", "beoir", "lampa", "meaig", "caifé", "éirim", "strae", "mamaí", "umhal", "mionn", "cíoch", "coisc", "tuata", "téamh", "inmhe", "dreap", "bheir", "uatha", "seilf", "leoga", "nócha", "gonta", "iomrá", "dreas", "déirc", "adamh", "díobh", "gread", "leann", "olcas", "urnaí", "gortú", "cearn", "iolra", "gnúis", "péint", "staic", "buair", "tocht", "fostú", "urrús", "leamh", "dóite", "toise", "daidí", "gealt", "veain", "tonna", "focla", "saint", "grean", "aoire", "néata", "ordóg", "liopa", "finne", "úrnua", "tréad", "céimí", "creim", "spota", "donas", "coirm", "camán", "leomh", "chóir", "idéal", "dínit", "cipín", "saill", "fócas", "cófra", "aspal", "pálás", "clais", "slios", "fónta", "copar", "aicíd", "spíon", "stuif", "giall", "coire", "diaga", "gráin", "báúil", "sodar", "modúl", "deasc", "deoin", "uaine", "buaic", "strus", "éigse", "putóg", "Pilib", "loisc", "líomh", "aneas", "clárú", "seoid", "daofa", "fásra", "druma", "ionga", "bogha", "tráta", "bacán", "tacar", "casúr", "rolla", "clúmh", "Conán", "leasc", "líofa", "gréas", "slánú", "plúch", "dealg", "preas", "cuing", "allta", "corca", "iolar", "arann", "sféar", "fuaid", "dréim", "teibí", "gátar", "prioc", "sprid", "sméar", "gotha", "pluid", "colúr", "dáimh", "síniú", "lionn", "fáidh", "Fínín", "athrá", "frása", "goirt", "méith", "orgán", "solad", "matán", "sméid", "gabha", "bábóg", "cábán", "taisc", "tarna", "agair", "fiuch", "folús", "ribín", "súgán", "banbh", "stail", "cneas", "leaca", "thoir", "eagal", "cruas", "scóip", "próca", "craos", "faide", "cadás", "glinn", "plaic", "cailc", "luail", "corda", "nuige", "clúid", "áirid", "giúis", "éiric", "seoda", "cruit", "biúró", "chaon", "smear", "mótar", "fidil", "strac", "plota", "cuóta", "íosta", "clóca", "bligh", "gasra", "lúfar", "sáinn", "Laois", "suirí", "geábh", "creig", "drong", "cábla", "tiúin", "rubar", "teora", "iarla", "ladar", "géire", "ceadú", "péine", "lagar", "tátal", "feann", "deilf", "macha", "oisre", "banda", "smúit", "bríce", "stéig", "cógas", "bagún", "gaois", "víosa", "seasc", "darna", "scinn", "scriú", "eorna", "gríos", "bolta", "lasta", "áirse", "easna", "riasc", "punta", "iníor", "aclaí", "cráin", "coirt", "cunta", "tacaí", "treis", "scean", "trúpa", "ceirt", "céilí", "fogha", "spoch", "casla", "eagna", "gobán", "ispín", "úrach", "babaí", "seile", "théid", "feart", "uaill", "treas", "iaigh", "fisic", "scall", "ísliú", "cling", "gnaoi", "meirg", "liric", "iompó", "seang", "fríth", "Málta", "cealg", "ceilp", "galún", "codán", "trosc", "círín", "faomh", "leice", "ochtú", "dólás", "scrín", "sceon", "diail", "pianó", "scéin", "taosc", "flosc", "sobal", "crobh", "mánla", "déine", "próis", "tearc", "easóg", "bailí", "maróg", "goimh", "scolb", "sonrú", "mnaoi", "srann", "eitic", "Éabha", "báith", "tighe", "leite", "searr", "baoth", "calma", "fáilí", "crúca", "curfá", "slinn", "múnlú", "críon", "tarra", "fíoch", "buach", "corna", "barda", "éidir", "snigh", "beoga", "básta", "fuáil", "camas", "speal", "coisí", "sciúr", "tóraí", "díleá", "spalp", "ceant", "fánaí", "saobh", "bráth", "searg", "falla", "drúis", "slíoc", "gráig", "oibir", "falsa", "tréas", "radar", "oidhe", "breab", "matal", "baois", "maraí", "bácús", "eilit", "cnead", "drann", "scuad", "balún", "gaibh", "árach", "bulaí", "sanas", "guaim", "dusta", "cuain", "plimp", "ochón", "stáir", "iompú", "boige", "silín", "doire", "rangú", "léana", "canta", "báiní", "seort", "dalba", "searc", "casán", "toill", "trunc", "cumar", "análú", "scáin", "scine", "cuilt", "muirí", "trúig", "lacht", "cáith", "sotal", "múisc", "curaí", "buirg", "racán", "léimt", "bráca", "stróc", "lábán", "colpa", "ogham", "lonnú", "calóg", "céide", "damnú", "dlaoi", "eipic", "aibíd", "moing", "lorga", "veist", "bulla", "stáca", "indiu", "pailm", "caise", "stiúg", "polla", "sleán", "muine", "fonsa", "pluma", "bólaí", "burla", "teasc", "uasta", "dílse", "draid",
];
let selectedWord3 = words3[Math.floor(Math.random() * words3.length)];

const words4 = ["bliain", "féidir", "amháin", "éirigh", "céanna", "maidir", "teanga", "feidhm", "áirigh", "páiste", "diaidh", "athair", "talamh", "contae", "bóthar", "údarás", "iomlán", "oileán", "cineál", "oiread", "páirtí", "sampla", "istigh", "amuigh", "coiste", "aimsir", "maidin", "toradh", "tosach", "béarla", "ealaín", "domhan", "tamall", "cheana", "seomra", "cosúil", "luaigh", "láidir", "coinne", "pléigh", "sagart", "fómhar", "aithin", "cogadh", "poiblí", "amhrán", "cailín", "leanbh", "oscail", "críoch", "cosain", "roinnt", "cumann", "ionann", "cinnte", "beatha", "aithne", "pointe", "cuairt", "Sasana", "laghad", "aontas", "dírigh", "gníomh", "éigean", "amhras", "scaoil", "trácht", "seacht", "dúchas", "téarma", "tagair", "sraith", "treoir", "craobh", "cultúr", "mínigh", "amharc", "reacht", "intinn", "capall", "braith", "raidió", "éadach", "fáilte", "beagán", "sliabh", "foinse", "comhar", "scrúdú", "fógair", "Peadar", "iontas", "cuntas", "tiarna", "teacht", "álainn", "suíomh", "costas", "leagan", "codail", "uimhir", "buaigh", "gleann", "dochar", "spreag", "brúigh", "daonna", "nuacht", "gairid", "trasna", "ainmhí", "liosta", "maithe", "saghas", "taitin", "taithí", "ábalta", "gluais", "rialta", "comhrá", "gearán", "adhmad", "cruinn", "éiligh", "ioncam", "réimse", "triail", "sroich", "foráil", "fostaí", "scrios", "léiriú", "buille", "amhail", "déanta", "seilbh", "iniúch", "gloine", "feasta", "Eanáir", "babhta", "ionsaí", "ionadh", "aíocht", "breith", "smacht", "eisigh", "anocht", "iompar", "saoire", "dóchas", "planda", "vótáil", "déanaí", "stiúir", "airigh", "bainne", "Críost", "ollamh", "gruaig", "ríocht", "simplí", "oibriú", "muinín", "easpag", "stádas", "Dónall", "pearsa", "foláir", "Lúnasa", "dorcha", "dobhar", "táille", "dúiche", "scéala", "tréith", "traein", "abairt", "sochar", "cluais", "daonra", "póilín", "gradam", "boladh", "tógáil", "tobann", "croith", "rannóg", "eagras", "pósadh", "bearna", "magadh", "sínigh", "eisean", "Ruairí", "moladh", "barúil", "bunadh", "imeall", "uirlis", "cúinne", "cistin", "iarann", "sochaí", "cúnamh", "folamh", "óglach", "greann", "damhsa", "Albain", "ceacht", "bruach", "táirge", "triall", "eagrán", "scairt", "pingin", "pléasc", "fáinne", "figiúr", "tráigh", "folach", "sprioc", "aonach", "ualach", "reilig", "gránna", "scoilt", "séasúr", "úinéir", "fliuch", "Máirín", "leacht", "cluain", "manach", "taisce", "spraoi", "buíoch", "cruach", "casadh", "eastát", "murach", "garraí", "patrún", "bagair", "árasán", "paidir", "buairt", "socair", "miotal", "uncail", "guthán", "difear", "annamh", "coirce", "fuacht", "troigh", "coicís", "salach", "teocht", "cráigh", "ciúnas", "insint", "réalta", "imirce", "ticéad", "gaisce", "seasca", "cigire", "cuimil", "pionós", "bileog", "lánúin", "tionól", "riocht", "iomáin", "sásúil", "briste", "túisce", "tomhas", "amadán", "síoraí", "stailc", "scread", "léacht", "sásamh", "dealbh", "faraor", "bothán", "bradán", "caipín", "scríob", "véarsa", "rothar", "seanad", "laghdú", "diosca", "glasra", "bríste", "stoirm", "Samhna", "pionta", "fuaigh", "méadar", "ísligh", "fánach", "urchar", "toitín", "éadrom", "gabhar", "coróin", "cúinse", "fearas", "torann", "márach", "lasair", "deifir", "dlínse", "moille", "glaoch", "giolla", "brabús", "salann", "misean", "ramhar", "caladh", "eabhar", "cruthú", "gadhar", "staraí", "ridire", "sceach", "siúcra", "éagóir", "beacht", "cliste", "suntas", "cuntar", "creach", "dearna", "fabhar", "dearfa", "orlach", "sceith", "fréamh", "cuimse", "eolach", "iarsma", "réasún", "grásta", "taoide", "cliabh", "ullamh", "leoraí", "faiche", "leáigh", "comóir", "tugtha", "dídean", "piléar", "meáigh", "gráigh", "cnaipe", "faillí", "duille", "aeráid", "sciath", "curadh", "custam", "lipéad", "mí-ádh", "aerach", "garsún", "leisce", "áitigh", "altóir", "treibh", "bacach", "cleite", "treise", "anlann", "coinín", "impigh", "meisce", "tuirse", "cóisir", "reoigh", "liacht", "treabh", "stuama", "aintín", "pluais", "blasta", "bainis", "rithim", "aisíoc", "comhad", "Bíobla", "fásach", "fraoch", "éigeas", "clóigh", "adharc", "singil", "impire", "cnocán", "deoise", "neacht", "cuidiú", "righin", "dreach", "lochán", "rugbaí", "oideas", "fágtha", "splanc", "searbh", "armtha", "cliant", "pátrún", "taighd", "íoctha", "mithid", "féasta", "broinn", "buaile", "dornán", "cuisle", "ochtar", "urraim", "taisme", "curach", "dosaen", "bardas", "tacsaí", "cuaird", "práinn", "cumadh", "sreang", "arbhar", "saolta", "mórtas", "aigéan", "gruama", "féasóg", "comhla", "tairne", "meanma", "baiste", "músaem", "blúire", "script", "beocht", "móramh", "stuaim", "sníomh", "meafar", "maille", "léithi", "bodhar", "bruith", "ráithe", "foirfe", "cóiste", "Laidin", "fuisce", "feadóg", "gabhal", "tollán", "múinte", "paiste", "diúltú", "cloígh", "carbón", "fuadar", "ainnis", "poitín", "dollar", "scadán", "fichiú", "stábla", "babhla", "deoraí", "bácáil", "cumasc", "stróic", "tíogar", "cantal", "cúilín", "tólamh", "cóngar", "traoch", "steall", "suaith", "bruíon", "bogadh", "soilse", "cillín", "scoite", "iorras", "stampa", "Éamann", "araile", "sciorr", "maorga", "biorán", "bádóir", "barróg", "eanach", "aigéad", "ainmní", "spúnóg", "miotas", "gheibh", "consan", "naonúr", "léithe", "ríméad", "ofráil", "laetha", "oidhre", "togair", "snasta", "deasca", "deirge", "critic", "corrán", "leadóg", "stóras", "bodach", "líonra", "cóiriú", "dóiche", "ciseán", "portán", "rothaí", "corpán", "seasta", "imlíne", "piobar", "siolla", "corraí", "inscne", "aithrí", "cumhra", "fíréan", "cogain", "ullmhú", "tarrac", "muidne", "siamsa", "clásal", "fleasc", "achadh", "duairc", "canáil", "sceilg", "fuíoll", "magúil", "pórtar", "bolgán", "craith", "blaosc", "conair", "mamach", "gruaim", "branda", "sparán", "intíre", "stiall", "ciorrú", "timire", "tapúil", "ráille", "taimín", "colbha", "pacáil", "gaiste", "tafann", "teolaí", "sloinn", "víreas", "carbad", "corcra", "drúcht", "slacht", "clinic", "ligean", "fiaile", "bíthin", "litriú", "scléip", "eitilt", "píobán", "paráid", "carnán", "snoigh", "armlón", "scéimh", "baicle", "lúibín", "ultach", "fíoras", "béicíl", "ionsar", "mianra", "deilbh", "citeal", "maidhm", "bolgam", "luchóg", "daideo", "collaí", "feadán", "obráid", "cairde", "robáil", "lochta", "ocrach", "moncaí", "muirín", "crónán", "cartún", "clogad", "corcán", "féirín", "fainic", "roghnú", "tóirse", "céadfa", "dioscó", "súgach", "cogair", "luaith", "marmar", "seolta", "giúiré", "máilín", "sreabh", "seoigh", "bianna", "dúbail", "toiliú", "caolas", "spairn", "follas", "frioch", "gallda", "dragún", "banana", "adhair", "maicín", "scoith", "dálach", "damhán", "baoite", "leicne", "cnapán", "saonta", "mionúr", "fáltas", "ciseal", "aschur", "bruite", "builín", "nótáil", "íogair", "cráite", "ciaróg", "cabhsa", "lítear", "turcaí", "olagón", "pardún", "stríoc", "giotár", "maidne", "eitinn", "puball", "feidir", "brúcht", "círéib", "marach", "ainnir", "saorga", "tríthi", "catach", "caorán", "formad", "tiomna", "féinig", "cailís", "báisín", "téagar", "scáfar", "fonóid", "amaidí", "uamhan", "ladhar", "teasaí", "aduain", "Naitsí", "labhra", "reithe", "éigint", "crúigh", "fithis", "póirse", "rannán", "tulach", "luisne", "scailp", "díbirt", "tormán", "rómáns", "mearaí", "báille", "tiontú", "ceárta", "sconsa", "móilín", "giúmar", "compás", "éaradh", "briosc", "callán", "éadáil", "cloíte", "turtar", "sáspan", "bandia", "feoigh", "sulfar", "íoróin", "céadna", "piseog", "breath", "conlán", "céasta", "punann", "eitigh", "méanar", "giofóg", "rábach", "áiféis", "maoile", "iomann", "buanaí", "voltas", "spuaic", "físeán", "áiléar", "coscán", "íobair", "nóinín", "súlach", "ceimic", "caitín", "bunáit", "bolcán", "pionna", "Ruanda", "aimsiú", "aíonna", "bullán", "scláta", "eadhon", "plásóg", "glaodh", "sionad", "dallóg", "flaith", "meirge", "cromán", "hormón", "sorcas", "ballóg", "giobal", "díosal", "néaróg", "breall", "crosta", "lasadh", "fungas", "deasóg", "gallán", "mogall", "agairt", "folíne", "gandal", "crúsca", "ruball", "iomair", "préimh", "altram", "damhna", "cúigiú", "raibhe", "seithe", "díorma", "neimhe", "miosúr", "glaise", "liodán", "bonnán", "meacan", "bladhm", "príomh", "buaine", "púicín", "tintrí", "tóstal", "coigil", "sádach", "slisne", "siosúr", "seanda", "innilt", "stumpa", "rúitín", "macnas", "satail", "atáirg", "camall", "aibigh", "triuch", "liúigh", "angadh", "giorra", "siséal", "suairc", "péarla", "roisín", "ocsaíd", "easlán", "lionsa", "saolré", "fabhra", "díothú", "leitir", "móitíf", "Ádhamh", "ciotóg", "ionúin", "díocas", "lódáil", "mullán", "scaoll", "neartú", "andúil", "siléar", "marana", "sabóid", "iomdha", "Cincís", "puisín", "téacht", "fónamh", "parlús", "stoith", "áineas", "trinse", "piliúr", "ornáid", "dordán", "góilín", "cleith", "tuisle", "gnótha", "péacóg", "trumpa", "scaird", "postas", "seodra", "brosna", "míntír", "cliath", "préach", "diúité", "cadhan", "tóchar", "bisigh", "feacht", "scéith", "dóbair", "caiple", "cruimh", "bhfuil", "aláram", "áiméar", "tuairt", "ádhúil", "neamh-", "crústa", "forrán", "fiaigh", "leitís", "ligthe", "ceartú", "bladar", "geirbe", "óráidí", "buaidh", "picnic", "copail", "aoirde", "armáil", "fardal", "báinín", "slisín", "óstóir", "osnaíl", "gealas", "gaofar", "plámás", "róibín", "tochas", "meirbh", "deifre", "naprún", "garrán", "fliúit", "tútach", "frídín", "piorra", "ceirín", "eascra", "patról", "stuaic", "bundún", "maíomh", "aiteas", "altach", "éilips", "beannú", "imreas", "céillí", "áiméan", "duibhe", "imeasc", "snúcar", "draein", "beacán", "cumtha", "cluich", "sconna", "fuaire", "ialtóg",
];
let selectedWord4 = words4[Math.floor(Math.random() * words4.length)];

const words5 = ["tabhair", "Gaeilge", "isteach", "aghaidh", "leabhar", "scríobh", "bealach", "muintir", "airgead", "freisin", "rialtas", "bunaigh", "labhair", "tosaigh", "ceantar", "léirigh", "cluiche", "conradh", "díreach", "cathair", "máthair", "éagsúil", "forbair", "seisean", "imeacht", "áirithe", "áitiúil", "saothar", "tuairim", "láthair", "sláinte", "Eorpach", "ceannas", "seachas", "iontach", "abhaile", "cónaigh", "teideal", "bailigh", "deacair", "maraigh", "thuaidh", "freagra", "cuimhne", "comhair", "páipéar", "cabhair", "áireamh", "oibrigh", "polasaí", "scannán", "tagairt", "pictiúr", "déanach", "domhain", "réitigh", "fírinne", "Nollaig", "cuidigh", "coimeád", "aimsigh", "dáiríre", "iompair", "teagasc", "ardaigh", "abhainn", "deimhin", "soiléir", "dualgas", "dearmad", "ráiteas", "iarthar", "radharc", "margadh", "diabhal", "leathan", "formhór", "malairt", "nóiméad", "feabhas", "carraig", "taighde", "imreoir", "Satharn", "cuspóir", "eaglais", "deontas", "ordaigh", "teachta", "eachtra", "glaoigh", "milliún", "Londain", "ceangal", "beartas", "seasamh", "cothrom", "taifead", "Aibreán", "dóthain", "máistir", "sliocht", "sáraigh", "cuimhin", "iasacht", "cleacht", "ceithre", "éileamh", "tacaigh", "príosún", "faitíos", "teannta", "Micheál", "náisiún", "iomchuí", "uachtar", "séipéal", "praghas", "glacadh", "léargas", "buidéal", "fostóir", "dúshlán", "réigiún", "éalaigh", "Feabhra", "úrscéal", "liúntas", "furasta", "déanamh", "ionadaí", "trádáil", "cáiligh", "ceathrú", "spiorad", "sábháil", "dúisigh", "mullach", "cúnaigh", "earnáil", "amárach", "pinsean", "Samhain", "cladach", "fiacail", "sinsear", "saibhir", "tríocha", "codladh", "fiontar", "gealach", "dearbhú", "aithris", "fulaing", "earrach", "tairbhe", "namhaid", "sásaigh", "iomarca", "sonrach", "cuntais", "tiomáin", "cruinne", "gairdín", "deonach", "cosaint", "lárnach", "colainn", "iondúil", "míleata", "Donncha", "gréasán", "tinneas", "seoladh", "teastas", "clúdach", "dinnéar", "admháil", "scéalaí", "culaith", "toiligh", "argóint", "cáipéis", "inneall", "athuair", "lóistín", "buiséad", "foclóir", "cearnóg", "banríon", "folaigh", "choíche", "Giúdach", "árachas", "saoirse", "captaen", "íochtar", "meáchan", "gabháil", "portach", "meascán", "cúigear", "aisling", "snáithe", "eitleán", "ciorcal", "seisiún", "painéal", "scamall", "aistear", "mianach", "suarach", "samhail", "buartha", "acadúil", "eascair", "anailís", "canúint", "suirbhé", "aerfort", "tomhais", "múscail", "bagairt", "tionóil", "galánta", "teoiric", "comhrac", "bomaite", "muineál", "tástáil", "bruscar", "bialann", "imshaol", "maisigh", "seachtó", "bratach", "easnamh", "seisear", "clochán", "oscailt", "déagóir", "eochair", "uillinn", "soicind", "faobhar", "ógánach", "díoltas", "dialann", "macánta", "achrann", "fearann", "léaráid", "sruthán", "milleán", "iascach", "fathach", "aingeal", "deamhan", "aistriú", "scáthán", "maistín", "créatúr", "sliogán", "críonna", "cóirigh", "muirear", "céasadh", "friotal", "brónach", "eangach", "teannas", "macalla", "prionsa", "bródúil", "beairic", "lúcháir", "fanacht", "clochar", "leathar", "claíomh", "sloinne", "oiriúnú", "Iosrael", "deatach", "inbhear", "aturnae", "aduaidh", "réamhrá", "ruathar", "eallach", "feasach", "fíneáil", "seafóid", "comaoin", "tochail", "acadamh", "feisire", "Ceanada", "siúlóid", "dearadh", "bídeach", "tograch", "scóráil", "síntiús", "ifreann", "oighear", "rabhadh", "marcáil", "meaisín", "ceamara", "slabhra", "folláin", "tórramh", "inniúil", "dóiteán", "paidrín", "stáitse", "dréacht", "leannán", "dánlann", "iarnród", "básaigh", "cúitigh", "cathain", "naíonán", "taibhse", "inchinn", "snaidhm", "marfach", "troscán", "dathúil", "faisean", "sainigh", "stóráil", "príomha", "moltach", "anraith", "dleacht", "gnóthas", "lámhach", "ceirnín", "foraois", "saoráid", "cúlaigh", "aireach", "ascaill", "cúntóir", "fiúntas", "níochán", "siocair", "gleoite", "bualadh", "imníoch", "deisigh", "toghadh", "tíolaic", "foscadh", "corrach", "baolach", "cúisigh", "geansaí", "stócach", "marcach", "achainí", "loinnir", "áiteamh", "morálta", "tóraigh", "leatrom", "biseach", "breosla", "tapaigh", "cúrsáil", "cruatan", "réimeas", "ionraic", "ciorcad", "éagmais", "íobairt", "scaradh", "adhlaic", "ceanúil", "cruaidh", "aiféala", "brocach", "caomhnú", "cneasta", "luaidhe", "bochtán", "caillte", "cuaille", "déantús", "scannal", "oráiste", "foirmle", "foighne", "barrach", "deighil", "naomhóg", "billiún", "seabhac", "béasach", "breoigh", "scioból", "naíonra", "feithid", "comhall", "borradh", "buicéad", "árthach", "moltóir", "ceartas", "buamáil", "ceardaí", "aguisín", "lonrach", "gnáthóg", "nathair", "géarghá", "ailtire", "glórach", "luaithe", "milseán", "scuaine", "iallach", "drogall", "teangan", "trucail", "scréach", "daoradh", "náirigh", "taistil", "caiseal", "léannta", "brainse", "bréagán", "próifíl", "uireasa", "tragóid", "ionradh", "dalladh", "féilire", "fileata", "tuiseal", "cuirtín", "gamhain", "ordanás", "oinniún", "cinnire", "scamhóg", "giorria", "spréigh", "rathúil", "sailéad", "araltas", "cuimsiú", "féarach", "compord", "coileán", "cainéal", "bradach", "míosúil", "spéacla", "litrigh", "tuathal", "saothrú", "croíúil", "seanóir", "déistin", "ólachán", "tallann", "réadúil", "tostach", "iománaí", "cabhail", "treoraí", "sciorta", "beirigh", "inneach", "foluain", "uairibh", "grámhar", "iomaire", "léigear", "facthas", "brabach", "cloigín", "áibhéil", "síneadh", "séimhiú", "crannóg", "lagaigh", "fadaigh", "onórach", "ancaire", "forógra", "gléasta", "bánaigh", "dubhach", "dumpáil", "seastán", "damanta", "tinteán", "fuiseog", "aiséirí", "daonnaí", "suipéar", "spáráil", "athrach", "iarbhír", "aicsean", "rachmas", "bairéad", "dearóil", "sléacht", "santach", "prionta", "doiléir", "briosca", "móinéar", "tincéir", "corradh", "leabhra", "suáilce", "vitimín", "tromluí", "síleáil", "dílsigh", "stráice", "uchtach", "ceannaí", "comónta", "coisric", "fáscadh", "feadaíl", "áisiúil", "logánta", "urraigh", "simléar", "cúthail", "cuileog", "fothain", "sóisear", "canbhás", "tadhall", "bréidín", "altanna", "créafóg", "buatais", "chuaidh", "brídeog", "clampar", "óstlann", "aiteann", "earráid", "loighic", "baithis", "allagar", "ainnise", "catalóg", "taoille", "léirsiú", "measúil", "maslach", "clárach", "gléasra", "bunáite", "cochall", "crochta", "casaoid", "teicníc", "meánach", "oirnigh", "Indiach", "taosrán", "rógaire", "calaois", "galaigh", "mistéir", "laochas", "slógadh", "ógfhear", "saoiste", "sceitse", "neantóg", "spideog", "teiripe", "fanúint", "gaobhar", "mórthír", "parthas", "saíocht", "útamáil", "carbhán", "ciotach", "neamart", "eadráin", "éignigh", "tógálaí", "laincis", "cócaire", "ficsean", "straois", "bastard", "tuáille", "screamh", "ciníoch", "díotáil", "dímheas", "ceiliúr", "oineach", "gabhann", "geanúil", "flúirse", "fothram", "leacach", "balcais", "sonrasc", "tobhach", "campáil", "caonach", "aibítir", "caiséad", "ciceáil", "siubhán", "meandar", "peacach", "neamhní", "colúnaí", "loscadh", "druidte", "ciapadh", "lastuas", "fidléir", "teachín", "pónaire", "raidhse", "scraith", "díbhinn", "píolóta", "iarnóin", "fíochán", "líonadh", "fiántas", "seilide", "dabhach", "sorcóir", "díolaim", "bagrach", "ceistiú", "carbhat", "creagán", "urchóid", "spiaire", "máchail", "geáitse", "séideán", "milseog", "peirsil", "oidhche", "innéacs", "ualaigh", "sliotar", "drámata", "labhras", "eascann", "pirimid", "barrúil", "ballach", "foscail", "éagumas", "trasnán", "ceapach", "uilíoch", "réaltra", "bataire", "dánacht", "deiseal", "céachta", "dríodar", "tathant", "bacainn", "casacht", "donacht", "corraíl", "sáimhín", "fíodóir", "ruainne", "corcair", "meamram", "lathach", "réaltóg", "éagaoin", "sóidiam", "bisiúil", "reathaí", "fógairt", "cíocras", "ionchas", "dúbailt", "líomóid", "seangán", "spréach", "ciarsúr", "adhradh", "sciuird", "torrach", "cuimilt", "stopadh", "cruaigh", "aonraic", "biorach", "peiteal", "eisiach", "tírghrá", "eibhear", "íorónta", "paisean", "spíosra", "bailéad", "gaireas", "paicéad", "dorchla", "póstaer", "marbhán", "saighid", "díchuir", "Earcail", "carcair", "suimigh", "fáiltiú", "siúlach", "srianta", "spleách", "comhbhá", "luachra", "fiafraí", "fearúil", "fuirist", "bachlóg", "máinlia", "araicis", "bodhrán", "cuthach", "brachán", "tíriúil", "misnigh", "leathán", "cardáil", "gréasaí", "tnúthán", "ballóid", "soléite", "priosma", "carghas", "caiptín", "salaigh", "ámharaí", "logainm", "fógróir", "buacach", "gearrán", "binneas", "maratón", "fochair", "líneáil", "clódóir", "cneáigh", "slogadh", "greille", "díseart", "éarlais", "gortach", "baghcat", "Maitias", "vótálaí", "greanta", "cionnas", "malrach", "tornapa", "aosaigh", "sórtáil", "hearóin", "cúltaca", "bolaigh", "gliceas", "airneán", "lánseol", "tachrán", "diamant", "áithrid", "toirtín", "conairt", "gnaíúil", "cairéad", "priacal", "imlitir", "múisiam", "seachtú", "artaire", "margáil", "luamhán", "collach", "cluthar", "scorach", "bacanna", "nóisean", "piostal", "tochais", "créacht", "brístín", "crompán", "coscair", "faireog", "líneach", "beartán", "geonaíl", "sileadh", "mantach", "robálaí", "ruaille", "díspeag", "diúlach", "trodach", "Véineas", "fearrde", "plástar", "dearcán", "foclach", "sirriam", "biaiste", "aontíos", "meancóg", "gaimbín", "scagadh", "aonarán", "cumhrán", "carrach", "grianán", "díomách", "bordáil", "meidhir", "bíseach", "léigiún", "míoltóg", "earcach", "eaglach", "naipcín", "soilsiú", "snámhaí", "seamróg", "roicéad", "crotach", "anamúil", "grúpáil", "drisiúr", "cairéal", "haitéir", "slogtha", "vacsaín", "scairbh", "crosáid", "sreinge", "bolgach", "leamhan", "claibín", "fuadach", "uathúil", "fíniúin", "achasán", "léasóir", "Iúpatar", "rialáil", "spúinse", "foghlaí", "crosach", "colgach", "ropaire", "gíoscán", "tarchur", "maidrín", "ribeach", "coiléar", "samhnas", "leanbaí", "iarmhar", "bromach", "lamháil", "liamhás", "múchadh", "bachall", "custard", "crúibín", "arraing", "móidigh", "síodúil", "batráil", "coiscín", "caiscín", "Gréigis", "raiméis", "targaid",
];
let selectedWord5 = words5[Math.floor(Math.random() * words5.length)];

let guessedLetters = [];
let incorrectGuesses = 5;
let maxLives = 5;
let points = 5;
let wordcount = 5;

let clickCount = 0;

//const livesImage = document.getElementById('lives-image');
const wordDisplay1 = document.getElementById('word-display1');
const wordDisplay2 = document.getElementById('word-display2');
const wordDisplay3 = document.getElementById('word-display3');
const wordDisplay4 = document.getElementById('word-display4');
const wordDisplay5 = document.getElementById('word-display5');
const keyboard = document.getElementById('keyboard');
const message = document.getElementById('message');
const resetButton = document.getElementById('quit-button');
const continueButton = document.getElementById('continue-button');
const livesDisplay = document.getElementById('lives-display');
const incorrectGuessesDisplay = document.getElementById('guesses-display');
const wordcountDisplay = document.getElementById('wordcount-display');
const pointsDisplay = document.getElementById('points-display');
const lostModal = document.getElementById('lostModal');
const lostMessage = document.getElementById('lostMessage');
const wonMessage = document.getElementById('wonMessage');
const wonModal = document.getElementById('wonModal');
const closeModal = document.getElementsByClassName('close')[0];
const gameOverModal = document.getElementById('gameOverModal');
const gameOverMessage = document.getElementById('gameOverMessage');
const playerNameInput = document.getElementById('playerNameInput');
const submitNameButton = document.getElementById('submitNameButton');
const closeGameOverModal = document.getElementsByClassName('close')[0];
const closeModalButtons = document.querySelectorAll('.close, #continueButton');
const logoImage = document.getElementById('logo-image');

logoImage.src = 'logoie.png';


/*const updateWordDisplay1 = () => {
    wordDisplay1.innerHTML = selectedWord1.split('').map(letter => guessedLetters.includes(letter) ? letter : '_').join(' ');
};

const updateWordDisplay2 = () => {
    wordDisplay2.innerHTML = selectedWord2.split('').map(letter => guessedLetters.includes(letter) ? letter : '_').join(' ');
};

const updateWordDisplay3 = () => {
    wordDisplay3.innerHTML = selectedWord3.split('').map(letter => guessedLetters.includes(letter) ? letter : '_').join(' ');
};

const updateWordDisplay4 = () => {
    wordDisplay4.innerHTML = selectedWord4.split('').map(letter => guessedLetters.includes(letter) ? letter : '_').join(' ');
};

const updateWordDisplay5 = () => {
    wordDisplay5.innerHTML = selectedWord5.split('').map(letter => guessedLetters.includes(letter) ? letter : '_').join(' ');
};*/

const updateWordDisplay1 = () => {
    const wordDisplay1 = document.getElementById('word-display1');
    wordDisplay1.innerHTML = selectedWord1.split('').map(letter => {
        const span = document.createElement('span');
        span.innerText = guessedLetters.includes(letter) ? letter : '_';
        return span.outerHTML;
    }).join(' ');
};

const updateWordDisplay2 = () => {
    const wordDisplay2 = document.getElementById('word-display2');
    wordDisplay2.innerHTML = selectedWord2.split('').map(letter => {
        const span = document.createElement('span');
        span.innerText = guessedLetters.includes(letter) ? letter : '_';
        return span.outerHTML;
    }).join(' ');
};

const updateWordDisplay3 = () => {
    const wordDisplay3 = document.getElementById('word-display3');
    wordDisplay3.innerHTML = selectedWord3.split('').map(letter => {
        const span = document.createElement('span');
        span.innerText = guessedLetters.includes(letter) ? letter : '_';
        return span.outerHTML;
    }).join(' ');
};

const updateWordDisplay4 = () => {
    const wordDisplay4 = document.getElementById('word-display4');
    wordDisplay4.innerHTML = selectedWord4.split('').map(letter => {
        const span = document.createElement('span');
        span.innerText = guessedLetters.includes(letter) ? letter : '_';
        return span.outerHTML;
    }).join(' ');
};

const updateWordDisplay5 = () => {
    const wordDisplay5 = document.getElementById('word-display5');
    wordDisplay5.innerHTML = selectedWord5.split('').map(letter => {
        const span = document.createElement('span');
        span.innerText = guessedLetters.includes(letter) ? letter : '_';
        return span.outerHTML;
    }).join(' ');
};

const updateLivesDisplay = () => {
    livesDisplay.innerText = `Tá ${maxLives} Saol agat`;
};

const updateincorrectGuessesDisplay = () => {
    incorrectGuessesDisplay.innerText = `Níl ach ${incorrectGuesses} buille faoi thuairim fágtha agat!`;
};

const updatewordcountDisplay = () => {
    wordcountDisplay.innerText = `Níl ach ${wordcount} fhocal ann...!`;
};

const updatepointsDisplay = () => {
    pointsDisplay.innerText = `Tá ${points} phointe agat`;
};

let scoreboard = [];

const updateScoreboard = (name, points) => {
    scoreboard.push({ name, points });
    // Sort the scoreboard by points in descending order
    scoreboard.sort((a, b) => b.points - a.points);
    localStorage.setItem('scoreboard', JSON.stringify(scoreboard)); // Save to localStorage
    displayScoreboard();
};

const displayScoreboard = () => {
    const scoreboardDiv = document.getElementById('scoreboard');
    scoreboardDiv.innerHTML = `
        <h3>Clár Ceannaire</h3>
        <div class="header">
            <span>No.</span>
            <span>Name</span>
            <span>Score</span>
        </div>
    `;
    scoreboard.forEach((entry, index) => {
        scoreboardDiv.innerHTML += `
            <div class="entry">
                <span>${index + 1}</span>
                <span>${entry.name}</span>
                <span>${entry.points}</span>
            </div>
        `;
    });
};

const loadScoreboard = () => {
    const savedScoreboard = localStorage.getItem('scoreboard');
    if (savedScoreboard) {
        scoreboard = JSON.parse(savedScoreboard);
        displayScoreboard();
    }
};

const handleGameOver = () => {
    gameOverMessage.innerHTML = `<strong>Cluiche Thar!</strong><br>Scóráil tú ${points} phointe.<br>Cuir isteach d'ainm don scórchlár:`;
    gameOverModal.style.display = 'block';
};

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        wonModal.style.display = 'none';
        if (button.id === 'continueButton') {
            continueGame();
        }
    });
});

// When the user clicks on <span> (x), close the modal
closeGameOverModal.onclick = () => {
    gameOverModal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
    if (event.target == gameOverModal) {
        gameOverModal.style.display = 'none';
    }
};

// Handle name submission
submitNameButton.onclick = () => {
    const playerName = playerNameInput.value;
    if (playerName) {
        updateScoreboard(playerName, points);
        gameOverModal.style.display = 'none';
        location.reload(); // Reload the page or reset the game as needed
    } else {
        alert("Please enter your name.");
    }
};

const handleGuess = (letter, button) => {
    if (guessedLetters.includes(letter)) return;
    guessedLetters.push(letter);

    let correctGuess = false;

    if (selectedWord1.includes(letter) && wordDisplay1.style.display !== 'none') {
        button.classList.add('selected');
        updateWordDisplay1();
        correctGuess = true;
    }
    if (selectedWord2.includes(letter) && wordDisplay2.style.display !== 'none') {
        button.classList.add('selected');
        updateWordDisplay2();
        correctGuess = true;
    }
    if (selectedWord3.includes(letter) && wordDisplay3.style.display !== 'none') {
        button.classList.add('selected');
        updateWordDisplay3();
        correctGuess = true;
    }
    if (selectedWord4.includes(letter) && wordDisplay4.style.display !== 'none') {
        button.classList.add('selected');
        updateWordDisplay4();
        correctGuess = true;
    }
    if (selectedWord5.includes(letter) && wordDisplay5.style.display !== 'none') {
        button.classList.add('selected');
        updateWordDisplay5();
        correctGuess = true;
    }

    // Check if all words are guessed
    if (correctGuess) {
        const wordDisplays = [wordDisplay1, wordDisplay2, wordDisplay3, wordDisplay4, wordDisplay5];
        let allWordsGuessed = true;
        wordDisplays.forEach(display => {
            if (display.style.display !== 'none' && display.innerText.includes('_')) {
                allWordsGuessed = false;
            }
        });

        if (allWordsGuessed) {
            points++;
            wonMessage.innerHTML = `<br><strong>Go hiontach! Cúig Ard!<br>Tá siad GACH Ceart!</strong><br><br>Tá ${maxLives} shaol fágtha agat. <br>Coinnigh ag dul!<br> `;
            pointsDisplay.innerText = `Pointí: ${points}`;
            wonModal.style.display = 'block';
        }
    } else {
        // Handle incorrect guess logic here
        button.classList.add('notselected');
        incorrectGuesses--;
        updateLivesDisplay();
        updateincorrectGuessesDisplay();
        updatepointsDisplay();
        if (incorrectGuesses === 0) {
            maxLives--;
                       lostMessage.innerHTML = `<strong>Ó Níl!<br>Rith tú amach as buille faoi thuairim</strong><br><br>Tá ${maxLives} shaol fágtha agat. <br><br> Bhí na focail: <br>${selectedWord1}, ${selectedWord2}, ${selectedWord3}, ${selectedWord4}, ${selectedWord5}`;
            continueButton.innerText = `Continue with ${maxLives} lives left`; // Set button text
            lostModal.style.display = 'block';

            points--;
            incorrectGuesses = 5;
            updateLivesDisplay();
            updateincorrectGuessesDisplay();
            updatepointsDisplay();
            if (maxLives === 0) {
                handleGameOver();
            }
        }
    }
};

closeModal.onclick = () => {
    lostModal.style.display = 'none';
    wonModal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
    if (event.target == lostModal) {
        lostModal.style.display = 'none';
    }
};

// Continue button to close the modal and continue the game
document.getElementById('continueButton').onclick = () => {
    lostModal.style.display = 'none';
    continueGame();
};

const createKeyboard = () => {
    const rows = [
        'qwertzuiop',
        'asdfghjkl',
        'yxcvbnm',
        'áéíóú'
    ];

    keyboard.innerHTML = ''; // Clear existing buttons

    rows.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        row.split('').forEach(letter => {
            const button = document.createElement('button');
            button.innerText = letter;
            button.addEventListener('click', () => handleGuess(letter, button));
            rowDiv.appendChild(button);
        });
        keyboard.appendChild(rowDiv);
    });
};

const resetGame = () => {
    guessedLetters = [];
    selectedWord1 = words1[Math.floor(Math.random() * words1.length)];
    selectedWord2 = words2[Math.floor(Math.random() * words2.length)];
    selectedWord3 = words3[Math.floor(Math.random() * words3.length)];
    selectedWord4 = words4[Math.floor(Math.random() * words4.length)];
    selectedWord5 = words5[Math.floor(Math.random() * words5.length)];
    let incorrectGuesses = 5;
    let points = 0;
    let maxLives = 5;
    message.innerText = '';
    // livesImage.innerText = '';
    updateWordDisplay1();
    updateWordDisplay2();
    updateWordDisplay3();
    updateWordDisplay4();
    updateWordDisplay5();
    createKeyboard();
};


const continueGame = () => {
    guessedLetters = [];
    incorrectGuesses = 5;
    selectedWord1 = words1[Math.floor(Math.random() * words1.length)];
    selectedWord2 = words2[Math.floor(Math.random() * words2.length)];
    selectedWord3 = words3[Math.floor(Math.random() * words3.length)];
    selectedWord4 = words4[Math.floor(Math.random() * words4.length)];
    selectedWord5 = words5[Math.floor(Math.random() * words5.length)];
    message.innerText = '';
    // livesImage.innerText = '';

    document.getElementById('word-display1').style.display = 'none';
    document.getElementById('word-display2').style.display = 'none';
    document.getElementById('word-display3').style.display = 'none';
    document.getElementById('word-display4').style.display = 'none';
    document.getElementById('word-display5').style.display = 'none';

    clickCount++;

    if (clickCount === 1) {
        wordcount--;
        document.getElementById('word-display2').style.display = 'block';
        document.getElementById('word-display3').style.display = 'block';
        document.getElementById('word-display4').style.display = 'block';
        document.getElementById('word-display5').style.display = 'block';
        updateWordDisplay2();
        updateWordDisplay3();
        updateWordDisplay4();
        updateWordDisplay5();
        updatewordcountDisplay();
    } else if (clickCount === 2) {
        wordcount--;
        document.getElementById('word-display3').style.display = 'block';
        document.getElementById('word-display4').style.display = 'block';
        document.getElementById('word-display5').style.display = 'block';
        updateWordDisplay3();
        updateWordDisplay4();
        updateWordDisplay5();
        updatewordcountDisplay();
    } else if (clickCount === 3) {
        wordcount--;
        document.getElementById('word-display4').style.display = 'block';
        document.getElementById('word-display5').style.display = 'block';
        updateWordDisplay4();
        updateWordDisplay5();
        updatewordcountDisplay();
    } else if (clickCount === 4) {
        wordcount--;
        document.getElementById('word-display5').style.display = 'block';
        updateWordDisplay5();
        updatewordcountDisplay();
    } else {
        // Reset click count and show all words again
        clickCount = 0;
        wordcount = 5;
        document.getElementById('word-display1').style.display = 'block';
        document.getElementById('word-display2').style.display = 'block';
        document.getElementById('word-display3').style.display = 'block';
        document.getElementById('word-display4').style.display = 'block';
        document.getElementById('word-display5').style.display = 'block';
        updateWordDisplay1();
        updateWordDisplay2();
        updateWordDisplay3();
        updateWordDisplay4();
        updateWordDisplay5();
        updatewordcountDisplay();
    }

    createKeyboard();
    updateLivesDisplay();
    updateincorrectGuessesDisplay();
};

document.addEventListener('DOMContentLoaded', () => {
    createKeyboard();
    resetGame();

    updateLivesDisplay();
    updateincorrectGuessesDisplay();
    updatepointsDisplay();
    updateWordDisplay1();
    updateWordDisplay2();
    updateWordDisplay3();
    updateWordDisplay4();
    updateWordDisplay5();
    updatewordcountDisplay();

    //displayScoreboard();
    loadScoreboard();

    resetButton.addEventListener('click', resetGame);

    continueButton.addEventListener('click', continueGame);
});

document.getElementById('open-de-image').addEventListener('click', () => {
    window.open('indexde.html', '_blank'); // Opens the new page in a new tab
});

document.getElementById('open-en-image').addEventListener('click', () => {
    window.open('index.html', '_blank'); // Opens the new page in a new tab
});

document.getElementById('open-ie-image').addEventListener('click', () => {
    window.open('indexie.html', '_blank'); // Opens the new page in a new tab
});
