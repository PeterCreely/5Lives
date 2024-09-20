let guessedLetters = [];
let incorrectGuesses = 5;
let maxLives = 1;
let points = 1;
let wordcount = 5;
let clickCount = 0;

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

logoImage.src = 'logomov.png';

let selectedWord1, selectedWord2, selectedWord3, selectedWord4, selectedWord5;

const wordGroups = {
    group1: ["cane", "cash", "cato", "cell", "city", "clay", "code", "coma", "crow", "crux", "cujo", "dawn", "days", "debt", "diva", "duke", "dune", "dust", "east", "eden", "eggs", "emma", "envy", "eona", "eric", "ever", "face", "fake", "fall", "fame", "faux", "fear", "feed", "fire", "fled", "flow", "fool", "fray", "fury", "fyre", "gabe", "gilt", "girl", "glow", "gold", "gone", "goth", "goya", "hate", "heat", "held", "hero", "hike", "hild", "hodd", "home", "hoot", "hush", "idol", "ingo", "ivan", "jack", "jade", "jaws", "jazz", "jess", "jinx", "jpod", "kaas", "kate", "king", "kodi", "koko", "lace", "lair", "lent", "liar", "lies", "lift", "lila", "lola", "loop", "lore", "lori", "love", "lucy", "luna", "lush", "mamo", "mash", "mike", "momo", "mona", "moon", "mort", "muse", "nana", "nick", "noir", "noon", "nova", "ohio", "oreo", "orfe", "page", "pale", "peak", "phds", "play", "pnin", "polo", "prep", "prey", "prom", "pulp", "pure", "push", "pyro", "rage", "rain", "rasl", "rate", "raze", "reap", "reed", "reef", "rent", "riot", "rise", "risk", "roma", "rook", "room", "rosa", "rose", "ruby", "ruin", "ruth", "saha", "salt", "sara", "sati", "scat", "seed", "sing", "skin", "slam", "slan", "snap", "snow", "sold", "solo", "song", "soup", "star", "stay", "sula", "sway", "them", "time", "'tis", "tool", "torn", "trio", "ttfn", "ttyl", "tyll", "ubik", "ugly", "veil", "vera", "void", "vote", "waan", "wake", "want", "wasp", "wave", "well", "west", "whit", "wild", "wish", "wolf", "wool", "xoxo", "yoko", "zero", "zoli", "zoya"],
    group2: ["cabal", "caged", "candy", "carol", "chaka", "chaos", "chess", "china", "chloé", "choke", "circe", "clang", "class", "clean", "cocky", "congo", "coral", "covet", "craft", "crash", "crave", "creed", "cress", "croak", "cross", "crush", "cured", "curio", "darke", "death", "delhi", "diary", "dinko", "dolly", "dream", "drown", "duck!", "dylan", "eleni", "elite", "elmet", "elske", "equus", "eyrie", "fable", "faith", "fangs", "fatal", "fated", "fauna", "feast", "fever", "filth", "flesh", "fling", "fluke", "flush", "flyte", "forge", "found", "freak", "frida", "frost", "geist", "ghost", "ghoul", "gifts", "gila!", "godan", "grace", "grasp", "grass", "grist", "grits", "hater", "heidi", "holes", "honey", "honor", "horns", "horse", "hover", "idaho", "imago", "japan", "jaran", "jassy", "jingo", "jonas", "judas", "julia", "karma", "katie", "kudzu", "laces", "laika", "lemon", "light", "liked", "livid", "logan", "loner", "loser", "loved", "lucas", "lucky", "madam", "madly", "magyk", "mandy", "manja", "march", "masks", "medea", "mercy", "miami", "micro", "misty", "money", "moths", "move!", "moxie", "muted", "naked", "nerve", "nevlo", "night", "older", "omega", "omens", "omina", "orfeo", "owned", "paris", "pedal", "peeps", "perri", "piper", "porgy", "prank", "prick", "pride", "prism", "proof", "pulse", "pygmy", "queer", "radix", "raney", "raven", "rebel", "reign", "relay", "relic", "revel", "ricky", "right", "rival", "riven", "roger", "roses", "rough", "rules", "sadie", "sarah", "saved", "savvy", "scars", "scoop", "score", "sever", "shade", "shame", "shell", "shift", "shine", "shout", "sicko", "signs", "silas", "skins", "skios", "slime", "smack", "smoke", "snake", "snuff", "socks", "spark", "speak", "squad", "storm", "stray", "strut", "style", "sugar", "sulwe", "sweet", "swish", "sybil", "syren", "syrup", "tampa", "tease", "tengu", "thaïs", "thief", "thud!", "tides", "tithe", "toxic", "trace", "triss", "trust", "truth", "tryst", "twins", "ultra", "umami", "vadim", "valis", "vibes", "viral", "vixen", "waste", "witch", "worms", "wyrms", "zorro"],
    group3: ["caesar", "calvin", "carrie", "casino", "castle", "catboy", "catnip", "caviar", "cecily", "chains", "chance", "cherry", "cinder", "circle", "claire", "cobain", "coerce", "cosmos", "crumbs", "crunch", "curfew", "cursed", "cyteen", "dalton", "damage", "damned", "damsel", "dancer", "darwin", "deenie", "dellia", "deluge", "demons", "depths", "desire", "domino", "dreams", "driven", "duende", "duluth", "eater.", "echoes", "eileen", "eldest", "eleven", "elixir", "eloise", "empire", "equals", "eragon", "erased", "escape", "esther", "eulogy", "eunoia", "exhume", "exodus", "extras", "faerie", "fallen", "family", "faust,", "fences", "fenrir", "ferias", "finale", "flamer", "flaunt", "flower", "flukes", "foster", "frayed", "galore", "gambit", "gemina", "genade", "george", "ghosts", "gigolo", "gilead", "goldie", "hamlet", "hamnet", "hannah", "hawaii", "heated", "heaven", "heresy", "herzog", "hester", "hitler", "hooker", "horrid", "hunger", "hunted", "impact", "inland", "island", "ithaka", "jagged", "jennie", "judged", "julian", "kalila", "kanada", "kaspar", "kerfol", "killer", "klepto", "kokoro", "komarr", "krabat", "landed", "lasher", "laurus", "legacy", "legend", "legion", "lesath", "licked", "linger", "lirael", "little", "lolita", "london", "lorali", "losers", "loving", "ludell", "lykaia", "maggot", "malice", "marked", "marnie", "massie", "master", "mating", "matrix", "maxims", "mayhem", "medusa", "melody", "memory", "merrow", "mirage", "mirror", "misery", "moskau", "nailed", "nation", "nausea", "nimona", "normal", "notice", "olivia", "omerta", "onions", "oracle", "outfox", "pamela", "penrod", "phèdre", "phoebe", "physik", "pigboy", "plague", "poison", "ponies", "potiki", "psycho", "queste", "random", "ransom", "ravage", "really", "reboot", "reborn", "resist", "return", "riders", "ritual", "rivals", "rivers", "rodham", "romola", "ruined", "rumors", "runner", "scurry", "scythe", "sempre", "serena", "shaken", "shamed", "shiloh", "shiver", "shock!", "shogun", "shrimp", "shrine", "shroud", "sights", "signal", "sirena", "slated", "slimer", "sliver", "sneeuw", "soleri", "sophie", "sorrow", "sphere", "sphinx", "spiral", "spokes", "square", "squire", "static", "status", "stitch", "stolen", "stoned", "stoner", "strife", "stunts", "summer", "sunset", "swerve", "switch", "sydney", "taltos", "tehanu", "thelma", "thomas", "thrill", "tigana", "tinder", "toplin", "tracks", "tremor", "trilby", "truman", "tsotsi", "twelve", "tynset", "tyrell", "uglies", "undine", "undone", "unless", "unmade", "unsaid", "unseen", "untold", "unwind", "utopia", "vanish", "varina", "ventus", "verity", "versus", "virals", "virgin", "vlucht", "voices", "walden", "wanted", "wicked", "wilder", "willow", "wither", "wolfie", "wonder", "zenith", "zikora"],
    group4: ["candide", "caraval", "carnage", "celeste", "cellars", "century", "charmed", "chiller", "chimera", "christy", "click'd", "company", "compass", "conceit", "confess", "contact", "contest", "corinne", "corrode", "couples", "cousins", "cricket", "crossed", "crystal", "cupcake", "curtain", "damaged", "demelza", "demigod", "désirée", "destiny", "dev1at3", "dominic", "dorsai!", "dracula", "dynasty", "eclipse", "ecstasy", "egghead", "eirelan", "electra", "elektra", "elusion", "emerald", "enclave", "endgame", "enemies", "eternal", "exposed",  "fadeout", "fadette", "fairest", "falling", "fallout", "fangirl", "fateful", "felidae", "feynman", "fidelis", "firefly", "flipped", "flotsam", "forever", "foxfire", "fragile", "freedom", "frights", "frindle", "funland", "gai-jin", "gallant", "gateway", "gaudete", "gazelle", "genesis", "ghosted", "girldom", "glimpse", "goddess", "godshot", "goliath", "gorgias", "gravity", "grayson", "grendel", "grl2grl", "hangman", "harvest", "hatchet", "haunted", "hearton", "herland", "honoria", "hostage", "hotline", "hotshot", "iceberg", "iceland", "imajica", "imhotep", "impulse", "inferno", "infidel", "ireland", "ivanhoe", "jackaby", "jackals", "jakeman", "jamaica", "jericho", "jessamy", "jessica", "jezebel", "journey", "joyland", "joyride", "jumanji", "justice", "justine", "killian", "killjoy", "kindred", "kitchen", "kristen", "landing", "larpers", "legends", "lexicon", "lincoln", "lionboy", "lullaby", "macbeth", "machine", "maestro", "majesty", "malevil", "malorie", "mariana", "marlfox", "marvels", "masques", "massive", "mastiff", "matched", "matilda", "maurice", "memoirs", "mercury", "mermaid", "milkman", "misrule", "missing", "monster", "mooncop", "mortals", "mystery", "needles", "nemesis", "nirliit", "oblomov", "obsidio", "oddball", "offbeat", "oleanna", "ora:cle", "orbiter", "orestes", "orlando", "othello", "outcome", "outline", "outpost", "pandora", "panther", "passion", "payback", "peaches", "pegasus", "perfect", "phaedra", "phantom", "phineas", "phreaks", "pompeii", "popisho", "prelude", "prepped", "prodigy", "promise", "prophet", "psychos", "puddin'", "pumpkin", "pursuit", "quartet", "queenie", "quills.", "radiant", "ragtime", "rampant", "reached", "reapers", "rebecca", "rectify", "redwall", "reunion", "revenge", "revival", "riptide", "romanov", "romelle", "roomies", "rubicon", "rusalka", "sabriel", "sanctum", "saurian", "savages", "scandal", "scarlet", "scarred", "scorpia", "scumble", "seafire", "secrecy", "seizure", "seraphs", "severed", "shadows", "shamara", "shelter", "shibumi", "shimmer", "shipped", "shirley", "shivers", "silence", "sisters", "skellig", "skyfall", "skylark", "skyward", "solaris", "someday", "sounder", "sparky!", "spectre", "stained", "stardoc", "stinger", "straken", "sunrise", "sweetly", "swindle", "tai-pan", "tangled", "tatiana", "tempted", "terrier", "therapy", "thinner", "threats", "tighter", "tinkers", "torment", "traitor", "transit", "treason", "tribute", "trifles", "trinity", "trouble", "truancy", "tsarina", "tuesday", "tunnels", "twisted", "ulysses", "unbound", "unknown", "untamed", "untimed", "upgrade", "vaarnat", "valiant", "variant", "venetia", "vicious", "victory", "vindene", "violets",  "voluspa", "voyager", "walkers", "wanting", "warlock", "weekend", "weyward", "whisper", "wicked!", "wilding", "willard", "wimmera", "wingmen", "witness", "wounded", "wrapped", "wrecked", "wrecker", "wringer", "zeitoun"],
    group5: ["cachalot", "canberra", "captured", "carmilla", "catalyst", "catriona", "cellular", "champion", "chocolat", "cinnamon", "citywide", "cocksure", "coltrane", "concrete", "coraline", "corduroy", "cranford", "creation", "crucifax", "cruising", "cupidity", "darkling", "darkness", "darkside", "daughter", "dayworld", "deadline", "delirium", "derailed", "destined", "devilish", "dhalgren", "disgrace", "dogsbody", "dollface", "dominion", "doomwyte", "dreamers", "druthers", "drylands", "dumplin'", "educated", "elantris", "elfblood", "emissary", "emphyrio", "endymion", "eternals", "eulalia!", "euphoria", "everfair", "everlost", "everyman", "exegesis", "exposure", "factotum", "faithful", "farthing", "fearless", "feathers", "february", "fidelity", "firesong", "firewall", "fishbowl", "flawless", "freckles", "furyborn", "germinal", "ghostman", "goodwood", "graffiti", "groupies", "hallowed", "hannibal", "ha'penny", "hawksong", "headlong", "hellhole", "helpmeet", "heretics", "homeland", "homeport", "hopeless", "horseman", "hothouse", "hyperion", "immortal", "imperium", "indecent", "indexing", "infamous", "infected", "infinity", "inkdeath", "inkheart", "inkspell", "innocent", "insomnia", "intimacy", "jackdaws", "jailbird", "janitors", "jernigan", "jew[ish]", "journals", "jungfrau", "karakter", "knockout", "lancelot", "landline", "laurinda", "libertie", "lifel1k3", "lifelode", "linesman", "lipstick", "lockdown", "lockstep", "lovesong", "lucidity", "luminous", "madeline", "madselin", "manalive", "månesten", "marianne", "marriage", "mattimeo", "mayflies", "mephisto", "meridian", "midwives", "midworld", "milkweed", "mindswap", "miracles", "mischief", "mistress", "monsieur", "moriarty", "mudbound", "mutation", "mystique",  "nostromo", "offshore", "orchards", "outbreak", "overspel", "pachinko", "palladio", "palmwijn", "panther!", "paradise", "parallel", "paranoid", "parasite", "paravion", "partials", "partners", "parzival", "pastoral", "pawcasso", "pericles", "phantoms", "piercing", "piranesi", "playback", "politics", "predator", "pretties", "prodigal", "prophecy", "prudence", "pumpkins", "pyramids", "quentins", "radiance", "ragnarok", "railhead", "ramayana", "rashomon", "ravished", "reawaken", "reckless", "release!", "remember", "restrike", "revenant", "rhapsody", "ricochet", "roadfood", "roadwork", "ruinsong", "runaways", "ruthless", "salvador", "sanditon", "sassinak", "saturday", "sawbones", "scarlett", "schooled", "scission", "scotched", "serenade", "shallows", "sherwood", "shopgirl", "simisola", "skagboys", "skerrett", "sketches", "sleepers", "snapshot", "snatched", "snowfall", "software", "solitary", "solitude", "somerset", "soulless", "sourcery", "specials", "splendid", "splendor", "splinter", "squashed", "stardust", "starfall", "starfish", "stargirl", "starters", "stickeen", "stiletto", "straight", "strength", "suddenly", "sundered", "sundiver", "sunshine", "survival", "survivor", "tanequil", "tartuffe", "thirteen", "tidepool", "timbuktu", "timeless", "timeline", "tomorrow", "treasure", "trelawny", "trespass", "trickery", "troubles", "trysting", "twilight", "unchosen", "ungifted", "unlocked", "unspoken", "unveiled", "uprising", "uprooted", "upstaged", "vauxhall", "vengeful", "vibrator", "victoria", "villette", "warcross", "warlight", "warprize", "watchman", "watchmen", "waverley", "whipbird", "whispers", "whiteout", "wildcard", "wildfire", "wildwood", "wolfgang", "wolfpack", "wreckage", "yearbook"]
};

const associatedWords = {
    "cane": "by jean toomer", "cash": "by johnny cash", "cato": "by joseph addison", "cell": "by stephen king", "city": "by clifford d.", "clay": "by david almond", "code": "by kathy reichs", "coma": "by robin cook", "crow": "by barbara wright", "crux": "by julie reece", "cujo": "by stephen king", "dawn": "by octavia e.", "days": "by mary robison", "debt": "by e.l. beth", "diva": "by delacorta", "duke": "by candace blevins", "dune": "by frank herbert", "dust": "by martha grimes", "east": "by edith pattou", "eden": "by keary taylor", "eggs": "by jerry spinelli", "emma": "by jane austen", "envy": "by yury olesha", "eona": "by alison goodman", "eric": "by terry pratchett", "ever": "by gail carson", "face": "by benjamin zephaniah", "fake": "by tate james", "fall": "by kristen callihan", "fame": "by leonore fleischer", "faux": "by e. davies", "fear": "by michael grant", "feed": "by m.t. anderson", "fire": "by kristin cashore", "fled": "by meg keneally", "flow": "by kennedy ryan", "fool": "by christopher moore", "fray": "by joss whedon", "fury": "by g.m. ford", "fyre": "by angie sage", "gabe": "by maryann jordan", "gilt": "by katherine longshore", "girl": "by jamaica kincaid", "glow": "by amy kathleen", "gold": "by jalal ad-din", "gone": "by michael grant", "goth": "by kenji oiwa", "goya": "by lion feuchtwanger", "hate": "by tate james", "heat": "by donna grant", "held": "by edeet ravel", "hero": "by mike lupica", "hike": "by pete oswald", "hild": "by nicola griffith", "hodd": "by adam thorpe", "home": "by jeannie baker", "hoot": "by carl hiaasen", "hush": "by eishes chayil", "idol": "by kristen callihan", "ingo": "by helen dunmore", "ivan": "by roxie rivera", "jack": "by marilynne robinson", "jade": "by v.c. andrews", "jaws": "by peter benchley", "jazz": "by toni morrison", "jess": "by pauline george", "jinx": "by meg cabot", "jpod": "by douglas coupland", "kaas": "by willem elsschot", "kate": "by valerie sherrard", "king": "by t.m. frazier", "kodi": "by jared cullum", "koko": "by peter straub", "lace": "by shirley conran", "lair": "by james herbert", "lent": "by jo walton", "liar": "by tate james", "lies": "by michael grant", "lift": "by minh lê", "lila": "by marilynne robinson", "lola": "by delacorta", "loop": "by karen akins", "lore": "by alexandra bracken", "lori": "by robert bloch", "love": "by rossi cole", "lucy": "by kathryn lasky", "luna": "by delacorta", "lush": "by natasha friend", "mamo": "by sas milledge", "mash": "by richard hooker", "mike": "by p.g. wodehouse", "momo": "by michael ende", "mona": "by pola oloixarac", "moon": "by james herbert", "mort": "by terry pratchett", "muse": "by mary novik", "nana": "by émile zola", "nick": "by michael farris", "noir": "by christopher moore", "noon": "by aatish taseer", "nova": "by samuel r.", "ohio": "by stephen markley", "oreo": "by fran ross", "orfe": "by cynthia voigt", "page": "by tamora pierce", "pale": "by edward a.", "peak": "by roland smith", "phds": "by not a", "play": "by kylie scott", "pnin": "by vladimir nabokov", "polo": "by jilly cooper", "prep": "by curtis sittenfeld", "prey": "by michael crichton", "prom": "by laurie halse", "pulp": "by robin talley", "pure": "by julianna baggott", "push": "by eve silver", "pyro": "by monique polak", "rage": "by richard bachman", "rain": "by v.c. andrews", "rasl": "by jeff smith", "rate": "1 of 5", "raze": "by tillie cole", "reap": "by tillie cole", "reed": "by sawyer bennett", "reef": "by romesh gunesekera", "rent": "by jonathan larson", "riot": "by shashi tharoor", "rise": "by karina bliss", "risk": "by dick francis", "roma": "by steven saylor", "rook": "by sharon cameron", "room": "by emma donoghue", "rosa": "by barbara de", "rose": "by martin cruz", "ruby": "by v.c. andrews", "ruin": "by rachel van", "ruth": "by elizabeth gaskell", "saha": "by cho nam-joo", "salt": "by isabel zuber", "sara": "by garth ennis", "sati": "by christopher pike", "scat": "by carl hiaasen", "seed": "by lisa heathfield", "she:": "by h. rider", "sing": "by a.l. singer", "skin": "by kathe koja", "slam": "by e. davies", "slan": "by a.e. van", "snap": "by belinda bauer", "snow": "by orhan pamuk", "sold": "by patricia mccormick", "solo": "by kwame alexander", "song": "by michelle jana", "soup": "by robert newton", "star": "by danielle steel", "stay": "by aislinn hunter", "sula": "by toni morrison", "sway": "by adriana locke", "them": "by joyce carol", "time": "by gordon r.", "'tis": "by frank mccourt", "tool": "by sabrina paige", "torn": "by jennifer l.", "trio": "by william boyd", "ttfn": "by lauren myracle", "ttyl": "by lauren myracle", "tyll": "by daniel kehlmann", "ubik": "by philip k.", "ugly": "by margaret mcheyzer", "veil": "by dylan farrow", "vera": "by elizabeth von", "void": "by veronica roth", "vote": "want to read", "waan": "by marcellus emants", "wake": "by amanda hocking", "want": "rate this book", "wasp": "by eric frank", "wave": "by sonali deraniyagala", "well": "by lisa kron", "west": "by carys davies", "whit": "by iain banks", "wild": "by emily hughes", "wish": "by joseph monninger", "wolf": "by penelope black", "wool": "by hugh howey", "xoxo": "by axie oh", "yoko": "by rosemary wells", "zero": "by jonathan yanez", "zoli": "by colum mccann", "zoya": "by danielle steel", "cabal": "by clive barker", "caged": "by e.l. beth", "candy": "by luke davies", "carol": "by patricia highsmith", "chaka": "by thomas mofolo", "chaos": "by sarah bailey", "chess":
        "by stefan zweig", "china": "by edward rutherfurd", "chloé": "by katrina kell", "choke": "by chuck palahniuk", "circe": "by madeline miller", "clang": "by e. davies", "class": "by jilly cooper", "clean": "by amy reed", "cleo:": "by helen brown", "cocky": "by sean ashcroft", "congo": "by michael crichton", "coral": "by sara ella", "covet": "by j.r. ward", "craft": "by lynnie purcell", "crash": "by jerry spinelli", "crave": "by j.r. ward", "creed": "by james herbert", "cress": "by marissa meyer", "croak": "by gina damico", "cross": "by james patterson", "crush": "by svetlana chmakova", "cured": "by e.l. beth", "curio": "by evangeline denmark", "darke": "by angie sage", "death": "by stuart david", "delhi": "by khushwant singh", "diary": "by chuck palahniuk", "dinko": "by joan phipson", "dolly": "by susan hill", "dream": "by garrett leigh", "drown": "by junot díaz", "duck!": "by kim dare", "dylan": "by lisi harrison", "eleni": "by nicholas gage", "elite": "by rachel van", "elmet": "by fiona mozley", "elske": "by cynthia voigt", "equus": "by peter shaffer", "eyrie": "by tim winton", "fable": "by adrienne young", "faith": "by jennifer haigh", "fangs": "by sarah andersen", "fatal": "by michael palmer", "fated": "by e.l. beth", "fauna": "by christiane vadnais", "feast": "by graham masterton", "fever": "by mary beth", "filth": "by irvine welsh", "flesh": "by philip josé", "fling": "by jana aston", "fluke": "by james herbert", "flush": "by carl hiaasen", "flyte": "by angie sage", "forge": "by laurie halse", "found": "by margaret peterson", "freak": "by e. davies", "frida": "by bárbara mujica", "frost": "by kate avery", "geist": "by philippa ballantine", "ghost": "by candace blevins", "ghoul": "by michael slade", "gifts": "by jo ellen", "gila!": "by les simons", "godan": "by munshi premchand", "grace": "by t. greenwood", "grasp": "by e. davies", "grass": "by sheri s.", "grist": "by heather waldorf", "grits": "by virginia willis", "hater": "by david moody", "heidi": "by johanna spyri", "holes": "by louis sachar", "honey": "by v.c. andrews", "honor": "by lyn cote", "horns": "by joe hill", "horse": "by geraldine brooks", "hover": "by melissa west", "idaho": "by emily ruskovich", "imago": "by octavia e.", "japan": "by lonely planet", "jaran": "by kate elliott", "jassy": "by norah lofts", "jingo": "by terry pratchett", "jonas": "by e.l. beth", "judas": "by amos oz", "julia": "by peter straub", "karma": "by cathy ostlere", "katie": "by michael mcdowell", "kudzu": "by stacey osbeck", "laces": "by tempi lark", "laika": "by nick abadzis", "lemon": "by kwon yeo-sun", "light": "by michael grant", "liked": "vote for this", "livid": "by patricia cornwell", "logan": "by samantha whiskey", "loner": "by teddy wayne", "loser": "by jerry spinelli", "loved": "by p.c. cast", "lucas": "by sawyer bennett", "lucky": "by alice sebold", "madam": "by phoebe wynne", "madly": "by ruthie knox", "magyk": "by angie sage", "mandy": "by julie andrews", "manja": "by anna gmeyner", "march": "by geraldine brooks", "masks": "by fumiko enchi", "medea": "by euripides", "mercy": "by jodi picoult", "miami": "by joan didion", "micro": "by michael crichton", "misty": "by v.c. andrews", "money": "by martin amis", "moths": "by rosalind ashe", "move!": "by steve jenkins", "moxie": "by jennifer mathieu", "muted": "by tami charles", "naked": "by david sedaris", "nerve": "by dick francis", "nevlo": "by kenneth robeson", "night": "by elie wiesel", "obey:": "by lucia jordan", "older": "by pamela redmond", "omega": "by jack mcdevitt", "omens": "by kelley armstrong", "omina": "by naja marie", "orfeo": "by richard powers", "owned": "by e.l. beth", "paris": "by edward rutherfurd", "pedal": "by chelsea rooney", "peeps": "by scott westerfeld", "perri": "by felix salten", "piper": "by natale ghent", "porgy": "by dubose heyward", "prank": "by kathryn lasky", "prick": "by sabrina paige", "pride": "by ibi zoboi", "prism": "by valerie taylor", "proof": "by dick francis", "pulse": "by julian barnes", "pygmy": "by chuck palahniuk", "queer": "by william s.", "radix": "by a.a. attanasio", "raney": "by clyde edgerton", "rant:": "by chuck palahniuk", "raven": "by lauren oliver", "rebel": "by marie lu", "reign": "by a.c. gaughen", "relay": "by layla reyne", "relic": "by douglas preston", "revel": "by michael indemaio", "ricky": "by eric walters", "right": "by jana aston", "rival": "by penelope douglas", "riven": "by carol anne", "roger": "by s.j.d. peterson", "roses": "by leila meacham", "rough": "by lucia jordan", "rules": "by cynthia lord", "sadie": "by courtney summers", "sarah": "by orson scott", "saved": "by kelly elliott", "savvy": "by ingrid law", "scars": "by cheryl rainfield", "scoop": "by evelyn waugh", "score": "by victoria denault", "sever": "by lauren destefano", "shade": "by jeri smith-ready", "shame": "by salman rushdie", "shell": "by kristina olsson", "shift": "by em bailey", "shine": "by jeri smith-ready", "shout": "by laurie halse anderson ", "sicko": "by amo jones", "signs": "by anna martin", "silas": "by sabrina paige", "skins": "by sarah hay", "skios": "by michael frayn", "slime": "by john halkin", "smack": "by melvin burgess", "smoke": "by joe ide", "snake": "by kate jennings", "snuff": "by terry pratchett", "socks": "by beverly cleary", "spark": "by john twelve hawks", "speak": "by laurie halse anderson ", "squad": "by maggie tokuda-hall", "storm": "by brigid kemmerer", "stray": "by a.n. wilson",
    "strut": "by carole hart", "style": "by f.l. lucas", "sugar": "by bernice l. mcfadden ", "sulwe": "by lupita nyong'o", "sweet": "by katherine applegate", "swish": "by e. davies", "sybil": "by benjamin disraeli", "syren": "by angie sage", "syrup": "by max barry", "tampa": "by alissa nutting", "tease": "by katherine applegate", "tengu": "by graham masterton", "thaïs": "by anatole france", "thief": "by s. massery", "thud!": "by terry pratchett", "tides": "by betsy cornwell", "tithe": "by holly black", "toxic": "by e.l. beth", "trace": "by patricia cornwell", "triss": "by brian jacques", "trust": "by jana aston", "truth": "by robin wasserman", "tryst": "by elswyth thane", "twins": "by bari wood", "ultra": "by david carroll", "umami": "by laia jufresa", "vadim": "by reetta aalto", "valis": "by philip k. dick", "vibes": "by amy kathleen ryan ", "viral": "by alex van tol ", "vixen": "by rosie garland", "waste": "by eugene marten", "wild:": "by cheryl strayed", "witch": "by christopher pike", "worms": "by james r. montague", "wyrms": "by orson scott card", "zorro": "by isabel allende", "caesar": "by colleen mccullough", "calvin": "by martine leavitt", "carrie": "by stephen king", "casino": "by robert kirsch", "castle": "by david macaulay", "catboy": "by benji nate", "catnip": "by j.s. frankel", "caviar": "by theodore sturgeon", "cecily": "by annie garthwaite", "chains": "by laurie halse anderson ", "chance": "by robert b. parker", "cherry": "by mary karr", "cinder": "by marissa meyer", "circle": "by mac barnett", "claire": "by lisi harrison", "cobain": "by rolling stone magazine", "coerce": "by candice m. wright ", "cosmos": "by carl sagan", "crumbs": "by danie stirling", "crunch": "by e. davies", "curfew": "by phil rickman", "cursed": "by thomas wheeler", "cyteen": "by c.j. cherryh", "dalton": "by ed law", "damage": "by josephine hart", "damned": "by chuck palahniuk", "damsel": "by elana k. arnold ", "dancer": "by colum mccann", "darwin": "by tess lea", "deenie": "by judy blume", "dellia": "by david scidmore", "deluge": "by albertine strong", "demons": "by fyodor dostoevsky", "depths": "by henning mankell", "desire": "by amanda quick", "domino": "by ross king", "dreams": "by olive schreiner", "driven": "by r.s. novelle", "duende": "by e.e. ottoman", "duluth": "by gore vidal", "eater.": "by gregory benford", "echoes": "by maeve binchy", "eileen": "by ottessa moshfegh", "eldest": "by christopher paolini", "eleven": "by lauren myracle", "elixir": "by eric walters", "eloise": "by kay thompson", "empire": "by gore vidal", "equals": "by brigham vaughn", "eragon": "by christopher paolini", "erased": "by jennifer rush", "escape": "by gordon korman", "esther": "by norah lofts", "eulogy": "by rachel van dyken ", "eunoia": "by christian bök", "exhume": "by danielle girard", "exodus": "by leon uris", "extras": "by scott westerfeld", "faerie": "by eisha marjara", "fallen": "by e.l. beth", "family": "by frank tayell", "faust,": "by johann wolfgang von goethe", "fences": "by august wilson", "fenrir": "by hella s. haasse", "ferias": "by federico garcía lorca", "fever:": "by lucia jordan", "finale": "by becca fitzpatrick", "flamer": "by mike curato", "flaunt": "by e. davies", "flower": "by elizabeth craft", "flukes": "by nichole chase", "foster": "by claire keegan", "frayed": "by kara terzis", "galore": "by michael crummey", "gambit": "by rex stout", "gemina": "by amie kaufman", "genade": "by tina weemoed", "george": "by e.l. konigsburg", "ghosts": "by henrik ibsen", "gigolo": "by edna ferber", "gilead": "by marilynne robinson", "goldie": "by ellen miles", "hamlet": "by william shakespeare", "hamnet": "by maggie o'farrell", "hannah": "by kathryn lasky", "hawaii": "by james a. michener", "heated": "by j.c. gardner", "heaven": "by v.c. andrews", "heresy": "by s.j. parris", "herzog": "by saul bellow", "hester": "by laurie lico albanese ", "hitler": "by joachim fest", "hooker": "by brooke blaine", "horrid": "by katrina leno", "hunger": "by knut hamsun", "hunted": "by meagan spooner", "impact": "by douglas preston", "inland": "by téa obreht", "island": "by aldous huxley", "ithaka": "by adèle geras", "jagged": "by lauren dane", "jennie": "by paul gallico", "judged": "by e.l. beth", "julian": "by gore vidal", "kalila": "by rosemary nixon", "kanada": "by eva wiseman", "kaspar": "by michael morpurgo", "kerfol": "by edith wharton", "killer": "by sara shepard", "klepto": "by jenny pollack", "kokoro": "by natsume soseki", "komarr": "by lois mcmaster bujold ", "krabat": "by otfried preußler", "landed": "by tim pears", "lasher": "by anne rice", "laurus": "by eugene vodolazkin", "legacy": "by nora roberts", "legend": "by marie lu", "legion": "by william peter blatty", "lesath": "by a.m. kherbash", "licked": "by brooke blaine", "linger": "by maggie stiefvater", "lirael": "by garth nix", "little": "by edward carey", "lolita": "by vladimir nabokov", "london": "by edward rutherfurd", "lorali": "by laura dockrill", "losers": "by matthue roth", "loving": "by henry green", "ludell": "by brenda wilkinson", "lykaia": "by sharon van orman ", "maggot": "by mary alexander walker", "malice": "by keigo higashino", "marked": "by p.c. cast", "marko:": "by boris pronsky", "marnie": "by winston graham", "massie": "by lisi harrison", "master": "by lucia jordan", "mating": "by norman rush", "matrix": "by lauren groff", "maxims": "by françois de la rochefoucauld", "mayhem": "by estelle laure",
    "medusa": "by rosie hewlett", "melody": "by v.c. andrews", "memory": "by lois mcmaster bujold ", "merrow": "by ananda braxton-smith", "mirage": "by somaiya daud", "mirror": "by graham masterton", "misery": "by stephen king", "moskau": "by zotov*", "nailed": "by lucia jordan", "nation": "by terry pratchett", "nausea": "by jean-paul sartre", "nimona": "by n.d. stevenson", "normal": "by warren ellis", "notice": "by k. webster", "olivia": "by ian falconer", "omerta": "by mario puzo", "onions": "by cy young", "oracle": "by ian watson", "outfox": "by sandra brown", "owned:": "by lucia jordan", "pamela": "by samuel richardson", "penrod": "by booth tarkington", "phèdre": "by jean racine", "phoebe": "by paula gooder", "physik": "by angie sage", "pigboy": "by vicki grant", "plague": "by michael grant", "poison": "by bridget zinn", "ponies": "by kij johnson", "potiki": "by patricia grace", "psycho": "by robert bloch", "queste": "by angie sage", "random": "by tom leveen", "ransom": "by julie garwood", "ravage": "by tillie cole", "really": "vote for this book score:", "reboot": "by amy tintera", "reborn": "by jennifer rush", "resist": "by sarah crossan", "return": "by karen kingsbury", "riders": "by jilly cooper", "ritual": "by david pinner", "rivals": "by jilly cooper", "rivers": "by michael farris smith ", "rodham": "by curtis sittenfeld", "romola": "by george eliot", "ruined": "by amy tintera", "rumors": "by anna godbersen", "runner": "by patrick lee", "scurry": "by mac smith", "scythe": "by neal shusterman", "sempre": "by j.m. darhower", "serena": "by ron rash", "shaken": "by eric walters", "shamed": "by linda castillo", "shiloh": "by phyllis reynolds naylor", "shiver": "by maggie stiefvater", "shock!": "by richard matheson", "shogun": "by james clavell", "shrimp": "by rachel cohn", "shrine": "by james herbert", "shroud": "by john banville", "sights": "by susanna vance", "signal": "by patrick lee", "sirena": "by donna jo napoli ", "slated": "by teri terry", "slimer": "by harry adam knight", "sliver": "by ira levin", "sneeuw": "by jan cremer", "soleri": "by michael johnston", "sophie": "by guy burt", "sorrow": "by tiffanie debartolo", "sphere": "by michael crichton", "sphinx": "by robin cook", "spiral": "by khaled talib", "spokes": "by p.d. singer", "square": "by mac barnett", "squire": "by tamora pierce", "static": "by walter sorrells (adaptor)", "status": "by erlend loe", "stitch": "by mark morris", "stolen": "by kelley armstrong", "stoned": "by mandi beck", "stoner": "by john williams", "strife": "by john galsworthy", "stunts": "by charles l. grant", "summer": "by edith wharton", "sunset": "by arshad ahsanuddin", "swerve": "by sherilee gray", "switch": "by william bayer", "sydney": "by delia falconer", "taltos": "by anne rice", "tehanu": "by ursula k. le guin", "thelma": "by marie corelli", "thomas": "by robin jarvis", "thrill": "by katherine applegate", "tigana": "by guy gavriel kay ", "tinder": "by sally gardner", "toplin": "by michael mcdowell", "tracks": "by louise erdrich", "tremor": "by winston graham", "trilby": "by george du maurier", "truman": "by david mccullough", "tsotsi": "by athol fugard", "twelve": "by lauren myracle", "tynset": "by wolfgang hildesheimer", "tyrell": "by coe booth", "uglies": "by scott westerfeld", "undine": "by friedrich de la motte", "undone": "by karin slaughter", "unless": "by carol shields", "unmade": "by sarah rees brennan ", "unsaid": "by neil abramson", "unseen": "by karin slaughter", "untold": "by sarah rees brennan ", "unwind": "by neal shusterman", "utopia": "by thomas more", "vanish": "by karen spafford-fitz", "varina": "by charles frazier", "ventus": "by karl schroeder", "verity": "by colleen hoover", "versus": "by ogden nash", "virals": "by kathy reichs", "virgin": "by james patterson", "vlucht": "by johanna spaey", "voices": "by arnaldur indriðason", "walden": "by henry david thoreau", "wanted": "by sara shepard", "wicked": "by sara shepard", "wilder": "by rebecca yarros", "willow": "by julia hoban", "wither": "by lauren destefano", "wolfie": "by janet chenery", "wonder": "by r.j. palacio", "zenith": "by julie bertagna", "zikora": "by chimamanda ngozi adichie", "candide": "by voltaire", "caraval": "by stephanie garber", "carnage": "by sarah bailey", "celeste": "by v.c. andrews", "cellars": "by john shirley", "century": "by ray smith", "charmed": "by nora roberts", "chiller": "by randall boyll", "chimera": "by john barth", "christy": "by catherine marshall", "click'd": "by tamara ireland stone ", "company": "by max barry", "compass": "by mathias énard", "conceit": "by mary novik", "confess": "by colleen hoover", "contact": "by carl sagan", "contest": "by matthew reilly", "corinne": "by rebecca morrow", "corrode": "by sarah bailey", "couples": "by john updike", "cousins": "by patricia grace", "cricket": "by anna martin", "crossed": "by ally condie", "crystal": "by v.c. andrews", "cupcake": "by rachel cohn", "curtain": "by agatha christie", "damaged": "by sheridan anne", "demelza": "by winston graham", "demigod": "by jaron lee knuth ", "désirée": "by annemarie selinko", "destiny": "by sharon green", "dev1at3": "by jay kristoff", "dominic": "by l.a. casey", "dorsai!": "by gordon r. dickson", "dracula": "by bram stoker", "dynasty": "by sheridan anne", "eclipse": "by stephenie meyer", "ecstasy": "by sudhir kakar", "egghead": "by caroline pignat", "eirelan": "by liam o'shiel", "electra": "by sophocles", "elektra": "by jennifer saint",
    "elusion": "by claudia gabel", "emerald": "by elizabeth laurd", "enclave": "by ann aguirre", "endgame": "by samuel beckett", "enemies": "by svetlana chmakova", "eternal": "by lisa scottoline", "exposed": "by lisa scottoline", "fables:": "by bill willingham", "fadeout": "by joseph hansen", "fadette": "by george sand", "fairest": "by gail carson levine ", "falling": "by t.j. newman", "fallout": "by ariel tachna", "fangirl": "by rainbow rowell", "fateful": "by claudia gray", "felidae": "by akif pirinçci", "feynman": "by jim ottaviani", "fidelis": "by ada cambridge", "firefly": "by piers anthony", "flipped": "by wendelin van draanen ", "flotsam": "by david wiesner", "forever": "by maggie stiefvater", "foxfire": "by anya seton", "fragile": "by lisa unger", "freedom": "by jonathan franzen", "frights": "by kirby mccauley (editor, afterword)", "frindle": "by andrew clements", "funland": "by richard laymon", "gai-jin": "by james clavell", "gallant": "by victoria schwab", "gateway": "by frederik pohl", "gaudete": "by amy rae durreson ", "gazelle": "by rikki ducornet", "genesis": "by christie l. rich", "ghosted": "by rosie walsh", "girldom": "by megan peak", "glimpse": "by carol lynch williams", "goddess": "by fiona mcintosh", "godshot": "by chelsea bieker", "goliath": "by scott westerfeld", "gorgias": "by plato", "gravity": "by tess gerritsen", "grayson": "by lynne cox", "grendel": "by john gardner", "grl2grl": "by julie anne peters", "hangman": "by faye kellerman", "harvest": "by jim crace", "hatchet": "by gary paulsen", "haunted": "by chuck palahniuk", "hearton": "by amy jo cousins ", "herland": "by charlotte perkins gilman", "honoria": "by erato", "hostage": "by e.l. beth", "hotline": "by quinn anderson", "hotshot": "by julie garwood", "iceberg": "by jennifer a. nielsen ", "iceland": "by jim krusoe", "imajica": "by clive barker", "imhotep": "by jerry dubs", "impulse": "by nora roberts", "inferno": "by dante alighieri", "infidel": "by ayaan hirsi ali", "ireland": "by fionn davenport", "ivanhoe": "by walter scott", "jackaby": "by william ritter", "jackals": "by charles l. grant", "jakeman": "by deborah ellis", "jamaica": "by michael read", "jericho": "by not a book", "jessamy": "by barbara sleigh", "jessica": "by kevin henkes", "jezebel": "by megan barnard", "journey": "by joyce carol thomas", "joyland": "by stephen king", "joyride": "by lindsay faith rech", "jumanji": "by chris van allsburg", "justice": "by john galsworthy", "justine": "by lawrence durrell", "killian": "by sabrina paige", "killjoy": "by julie garwood", "kindred": "by octavia e. butler", "kitchen": "by banana yoshimoto", "kristen": "by lisi harrison", "landing": "by emma donoghue", "larpers": "by kevin miller", "legends": "by robert silverberg (editor/contributor)", "lexicon": "by max barry", "lincoln": "by gore vidal", "lionboy": "by zizou corder", "lullaby": "by chuck palahniuk", "macbeth": "by william shakespeare", "machine": "by jennifer pelland", "maestro": "by peter goldsworthy", "majesty": "by katharine mcgee", "malevil": "by robert merle", "malorie": "by josh malerman", "mariana": "by susanna kearsley", "marlfox": "by brian jacques", "marvels": "by kurt busiek", "masques": "by patricia briggs", "massive": "by julia bell", "mastiff": "by tamora pierce", "matched": "by ally condie", "matilda": "by roald dahl", "maurice": "by e.m. forster", "memoirs": "by pierre elliott trudeau", "mercury": "by margot livesey", "mermaid": "by carolyn turgeon", "milkman": "by anna burns", "mimosa:": "by archie bongiovanni", "misrule": "by heather walter", "missing": "by k.l. slater", "monster": "by walter dean myers", "mooncop": "by tom gauld", "mortals": "by norman rush", "mystery": "by peter straub", "needles": "by andie dominick", "nemesis": "by agatha christie", "nirliit": "by juliana léveillé-trudel", "oblomov": "by ivan goncharov", "obsidio": "by amie kaufman", "oddball": "by sarah andersen", "offbeat": "by megan clendenan", "oleanna": "by david mamet", "ora:cle": "by kevin o'donnell jr.", "orbiter": "by warren ellis", "orestes": "by euripides", "orlando": "by virginia woolf", "othello": "by william shakespeare", "outcome": "by cara dee", "outline": "by rachel cusk", "outpost": "by ann aguirre", "pandora": "by jilly cooper", "panther": "by brecht evens", "passion": "by lisa valdez", "payback": "by clare curzon", "peaches": "by jodi lynn anderson ", "pegasus": "by robin mckinley", "perfect": "by sara shepard", "phaedra": "by seneca", "phantom": "by thomas tessier", "phineas": "by john knowles", "phreaks": "by not a book", "pompeii": "by robert harris", "popisho": "by leone ross", "prelude": "by shira anthony", "prepped": "by bethany mangle", "prodigy": "by marie lu", "promise": "by minrose gwin", "prophet": "by s.m. west", "psychos": "by sheridan anne", "puddin'": "by julie murphy", "pumpkin": "by julie murphy", "pursuit": "by erato", "quartet": "by jean rhys", "queenie": "by michael korda", "quills.": "by doug wright", "radiant": "by cynthia hand", "ragtime": "by e.l. doctorow", "rampant": "by diana peterfreund", "reached": "by ally condie", "reapers": "by marata eros", "rebecca": "by daphne du maurier", "rectify": "by e.l. beth", "redwall": "by brian jacques", "reunion": "by alan dean foster", "revenge": "by yoko ogawa", "revival": "by stephen king", "riptide": "by amber lea easton ", "romanov": "by nadine brandes", "romelle": "by w.r. burnett", "roomies": "by christina lauren", "rubicon": "by steven saylor", "rusalka": "by c.j. cherryh",
    "sabriel": "by garth nix", "sanctum": "by madeleine roux", "saurian": "by william schoell", "savages": "by natalie bennett", "scandal": "by amanda quick", "scarlet": "by marissa meyer", "scarred": "by monique polak", "scorpia": "by anthony horowitz", "scumble": "by ingrid law", "seafire": "by natalie c. parker ", "secrecy": "by belva plain", "seizure": "by kathy reichs", "seraphs": "by faith hunter", "severed": "by scott snyder", "shadows": "by john saul", "shamara": "by catherine spangler", "shelter": "by susan palwick", "shibumi": "by trevanian", "shimmer": "by alyson noel", "shipped": "by angie hockman", "shirley": "by charlotte brontë", "shivers": "by william schoell", "silence": "by shusaku endo", "sisters": "by danielle steel", "skellig": "by david almond", "skyfall": "by catherine asaro", "skylark": "by dezso kosztolányi", "skyward": "by brandon sanderson", "solaris": "by stanislaw lem", "someday": "by david levithan", "sounder": "by william h. armstrong", "sparky!": "by jenny offill", "spectre": "by stephen laws", "stained": "by ella james", "stardoc": "by s.l. viehl", "stinger": "by robert mccammon", "straken": "by terry brooks", "sunrise": "by arshad ahsanuddin", "sweetly": "by jackson pearce", "swindle": "by gordon korman", "tai-pan": "by james clavell", "tangled": "by emma chase", "tatiana": "by martin cruz smith", "tempted": "by elizabeth kelly", "terrier": "by tamora pierce", "therapy": "by david lodge", "thinner": "by richard bachman (pseudonym)", "threats": "by amelia gray", "tighter": "by adele griffin", "tinkers": "by paul harding", "torment": "by lauren kate", "traitor": "by andy mcnab", "transit": "by hella s. haasse", "treason": "by david nevin", "tribute": "by nora roberts", "trifles": "by susan glaspell", "trinity": "by louisa hall", "trouble": "by non pratt", "truancy": "by isamu fukui", "tsarina": "by j. nelle patrick (pseudonym)", "tuesday": "by david wiesner", "tunnels": "by roderick gordon", "twisted": "by laurie halse anderson ", "ulysses": "by james joyce", "unbound": "by jim c. hines ", "unknown": "by didier van cauwelaert", "untamed": "by glennon doyle", "untimed": "by andy gavin", "upgrade": "by blake crouch", "vaarnat": "by tarjei vesaas", "valiant": "by holly black", "variant": "by robison wells", "venetia": "by georgette heyer", "vicious": "by victoria schwab", "victory": "by susan cooper", "vindene": "by tarjei vesaas", "violets": "by shin kyung-sook", "violin:": "by anne rice", "völuspá": "by sigurður nordal (editor)", "voyager": "by diana gabaldon", "walkers": "by graham masterton", "wanting": "by richard flanagan", "warlock": "by oakley hall", "weekend": "by christopher pike", "weyward": "by emilia hart", "whisper": "by alyson noel", "wicked!": "by jilly cooper", "wilding": "by isabella tree", "willard": "by stephen gilbert", "wimmera": "by mark brandi", "wingmen": "by ensan case", "witness": "by whittaker chambers", "wounded": "by eric walters", "wrapped": "by jennifer bradbury", "wrecked": "by maria padian", "wrecker": "by noel o'reilly", "wringer": "by jerry spinelli", "zeitoun": "by dave eggers", "cachalot": "by alan dean foster", "canberra": "by paul daley", "captured": "by erica stevens", "carmilla": "by j. sheridan le fanu", "catalyst": "by laurie halse anderson ", "catriona": "by robert louis stevenson", "cellular": "by ellen schwartz", "champion": "by marie lu", "chocolat": "by joanne harris", "cinnamon": "by v.c. andrews", "citywide": "by santino hassell", "cocksure": "by mordecai richler", "coltrane": "by paolo parisi", "concrete": "by thomas bernhard", "coraline": "by neil gaiman", "corduroy": "by don freeman", "cranford": "by elizabeth gaskell", "creation": "by gore vidal", "crucifax": "by ray garton", "cruising": "by cate ashwood", "cupidity": "by holly hepburn", "darkling": "by k.m. rice", "darkness": "by john saul", "darkside": "by dennis etchison", "daughter": "by asha bandele", "dayworld": "by philip josé farmer", "deadline": "by mira grant", "delirium": "by lauren oliver", "derailed": "by genevieve iseult eldredge ", "destined": "by allison kraft", "devilish": "by maureen johnson", "dhalgren": "by samuel r. delany", "disgrace": "by j.m. coetzee", "dogsbody": "by diana wynne jones", "dollface": "by renée rosen", "dominion": "by bentley little", "doomwyte": "by brian jacques", "dreamers": "by yuyi morales", "druthers": "by jennifer moxley", "drylands": "by thea astley", "dumplin'": "by julie murphy", "educated": "by tara westover", "elantris": "by brandon sanderson", "elfblood": "by kyra dune", "emissary": "by fiona mcintosh", "emphyrio": "by jack vance", "endymion": "by dan simmons", "eternals": "by neil gaiman", "eulalia!": "by brian jacques", "euphoria": "by lily king", "everfair": "by nisi shawl", "everlost": "by neal shusterman", "everyman": "by unknown", "exegesis": "by astro teller", "exposure": "by olivia sudjic", "factotum": "by charles bukowski", "faithful": "by alice hoffman", "farthing": "by jo walton", "fearless": "by tawdra kandle", "feathers": "by jacqueline woodson", "february": "by lisa moore", "fidelity": "by joe vasicek", "firesong": "by william nicholson", "firewall": "by henning mankell", "fishbowl": "by sarah mlynowski", "flawless": "by sara shepard", "freckles": "by gene stratton-porter", "furyborn": "by claire legrand", "germinal": "by émile zola", "ghostman": "by roger hobbs", "goodwood": "by holly throsby", "graffiti": "by savannah brown", "groupies": "by sarah priscus", "hallowed": "by cynthia hand",
    "hannibal": "by thomas harris", "ha'penny": "by jo walton", "hawksong": "by amelia atwater-rhodes", "headlong": "by michael frayn", "hellhole": "by brian herbert", "helpmeet": "by naben ruthnum", "heretics": "by g.k. chesterton", "homeland": "by r.a. salvatore", "homeport": "by nora roberts", "hopeless": "by colleen hoover", "horseman": "by christina henry", "hothouse": "by brian w. aldiss", "hyperion": "by dan simmons", "immortal": "by j.r. ward", "imperium": "by robert harris", "indecent": "by carole mortimer", "indexing": "by seanan mcguire", "infamous": "by lex croucher", "infected": "by maya riley", "infinity": "by sherrilyn kenyon", "inkdeath": "by cornelia funke", "inkheart": "by cornelia funke", "inkspell": "by cornelia funke", "innocent": "by erin kinsley", "insomnia": "by stephen king", "intimacy": "by hanif kureishi", "jackdaws": "by ken follett", "jailbird": "by kurt vonnegut jr.", "janitors": "by tyler whitesides", "jernigan": "by david gates", "jew[ish]": "by matt greene", "journals": "by kurt cobain", "jungfrau": "by dymphna cusack", "karakter": "by f. bordewijk", "knockout": "by mia kang", "lancelot": "by walker percy", "landline": "by rainbow rowell", "laurinda": "by alice pung", "libertie": "by kaitlyn greenidge", "lifel1k3": "by jay kristoff", "lifelode": "by jo walton", "linesman": "by s.k. dunstall", "lipstick": "by aimee nichols", "lockdown": "by alexander gordon smith ", "lockstep": "by karl schroeder", "lovesong": "by alex miller", "lucidity": "by david carnoy", "luminous": "by mara rutherford", "madeline": "by ludwig bemelmans", "madselin": "by norah lofts", "manalive": "by g.k. chesterton", "månesten": "by sjón", "marianne": "by ruth miranda", "marilyn:": "by lois w. banner", "marriage": "by susan edmonstone ferrier", "mattimeo": "by brian jacques", "mayflies": "by andrew o'hagan", "mephisto": "by klaus mann", "meridian": "by amber kizer", "midwives": "by chris bohjalian", "midworld": "by alan dean foster", "milkweed": "by jerry spinelli", "mindswap": "by robert sheckley", "miracles": "by c.s. lewis", "mischief": "by amanda quick", "mistress": "by amanda quick", "monsieur": "by lawrence durrell", "moriarty": "by anthony horowitz", "mudbound": "by hillary jordan", "mutation": "by robin cook", "mystique": "by amanda quick", "naughty:": "by lucia jordan", "nervous:": "by s.m. johnson", "nostromo": "by joseph conrad", "offshore": "by penelope fitzgerald", "orchards": "by holly thompson", "outbreak": "by robin cook", "overspel": "by mensje van keulen", "pachinko": "by min jin lee", "palladio": "by jonathan dee", "palmwijn": "by adriaan van dis", "panther!": "by alan ryan", "paradise": "by toni morrison", "parallel": "by lauren miller", "paranoid": "by lisa jackson", "parasite": "by mira grant", "paravion": "by hafid bouazza", "partials": "by dan wells", "partners": "by nora roberts", "parzival": "by wolfram von eschenbach", "pastoral": "by nevil shute", "pawcasso": "by remy lai", "pericles": "by william shakespeare", "phantoms": "by dean koontz", "piercing": "by ryu murakami", "piranesi": "by susanna clarke", "playback": "by raymond chandler", "politics": "by aristotle", "predator": "by terri blackstock", "pretties": "by scott westerfeld", "prodigal": "by melanie tem", "prophecy": "by sharon green", "prudence": "by gail carriger", "pumpkins": "by kevin miller", "pyramids": "by terry pratchett", "quentins": "by maeve binchy", "radiance": "by catherynne m. valente ", "ragnarok": "by a.s. byatt", "railhead": "by philip reeve", "ramayana": "by valmiki", "rashomon": "by ryunosuke akutagawa", "ravished": "by amanda quick", "reawaken": "by christina lee", "reckless": "by amanda quick", "release!": "by j.s. scott", "remember": "by karen kingsbury", "restrike": "by reba white williams ", "revenant": "by melanie tem", "rhapsody": "by mitchell james kaplan ", "ricochet": "by candice m. wright ", "roadfood": "by jane stern", "roadwork": "by richard bachman (pseudonym)", "ruinsong": "by julia ember", "runaways": "by v.c. andrews", "ruthless": "by e.l. beth", "salvador": "by joan didion", "sanditon": "by jane austen", "sassinak": "by anne mccaffrey", "saturday": "by ian mcewan", "sawbones": "by melissa lenhardt", "scarlett": "by alexandra ripley", "schooled": "by gordon korman", "scission": "by tim winton", "scotched": "by kaitlyn dunnett", "serenade": "by leon de winter", "shallows": "by tim winton", "sherwood": "by meagan spooner", "shopgirl": "by steve martin", "simisola": "by ruth rendell", "skagboys": "by irvine welsh", "skerrett": "by liam o'flaherty", "sketches": "by eric walters", "sleepers": "by lorenzo carcaterra", "snapshot": "by garry disher", "snatched": "by karin slaughter", "snowfall": "by sharon sala", "software": "by rudy rucker", "solitary": "by alexander gordon smith ", "solitude": "by anna martin", "somerset": "by leila meacham", "soulless": "by gail carriger", "sourcery": "by terry pratchett", "specials": "by scott westerfeld", "splendid": "by julia quinn", "splendor": "by anna godbersen", "splinter": "by e. davies", "squashed": "by joan bauer", "stardust": "by neil gaiman", "starfall": "by melissa landers", "starfish": "by peter watts", "stargirl": "by jerry spinelli", "starters": "by lissa price", "stickeen": "by john muir", "stiletto": "by daniel o'malley", "straight": "by dick francis", "strength": "by jane washington", "suddenly": "by barbara delinsky", "sundered": "by shannon mayer", "sundiver": "by david brin", "sunshine": "by robin mckinley", "survival": "by gordon korman", "survivor": "by chuck palahniuk", "tanequil": "by terry brooks", "tartuffe": "by molière", "thirteen": "by lauren myracle", "tidepool": "by nicole willson", "timbuktu": "by paul auster", "timeless": "by alexandra monir", "timeline": "by michael crichton", "tomorrow": "by damian dibben", "treasure": "by rebekah weatherspoon", "trelawny": "by isabelle holland", "trespass": "by rose tremain", "trickery": "by jaymin eve", "troubles": "by j.g. farrell", "trysting": "by emmanuelle pagano", "twilight": "by stephenie meyer", "unchosen": "by katharyn blair", "ungifted": "by gordon korman", "unlocked": "by courtney milan", "unspoken": "by sarah rees brennan ", "unveiled": "by courtney milan", "uprising": "by margaret peterson haddix", "uprooted": "by naomi novik", "upstaged": "by patricia mccowan", "vauxhall": "by gabriel gbadamosi", "vengeful": "by victoria schwab", "vibrator": "by mari; emmerich akasaka", "victoria": "by daisy goodwin", "villette": "by charlotte brontë", "warcross": "by marie lu", "warlight": "by michael ondaatje", "warprize": "by elizabeth vaughan", "watchman": "by ian rankin", "watchmen": "by alan moore", "waverley": "by walter scott", "whipbird": "by robert drewe", "whipped:": "by lucia jordan", "whispers": "by stuart david schiff (editor)", "whiteout": "by cambria hebert", "wildcard": "by marie lu", "wildfire": "by ilona andrews", "wildwood": "by colin meloy", "wolfgang": "by e.l. beth", "wolfpack": "by abby wambach", "wreckage": "by jason nickey", "yearbook": "by seth rogen"
};

const checkLastAttempt = () => {
    const lastAttempt = localStorage.getItem('lastAttempt');
    const today = new Date().toISOString().split('T')[0]; // Get YYYY-MM-DD format

    if (lastAttempt === today) {
        alert("You have already played today. Come back tomorrow!");
        return false;
    }

    return true;
};

const setLastAttempt = () => {
    const today = new Date().toISOString().split('T')[0]; // Get YYYY-MM-DD format
    localStorage.setItem('lastAttempt', today);
};

// Simple hash function to create a seed from the date
const hashDate = (date) => {
    let hash = 0;
    for (let i = 0; i < date.length; i++) {
        hash = date.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
};

// Seeded random number generator
const seededRandom = (seed) => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
};

const getDailyWords = () => {
    const today = new Date().toISOString().split('T')[0]; // Get YYYY-MM-DD format
    const seed = hashDate(today);

    return Object.keys(wordGroups).map((group, index) => {
        const words = wordGroups[group];
        const randomIndex = Math.floor(seededRandom(seed + index) * words.length);
        return words[randomIndex];
    });
    console.log('Daily words:', dailyWords); // Add this line
    return dailyWords;
};

const startGame = () => {
    const dailyWords = getDailyWords();
    console.log('Today\'s words:', dailyWords);
    if (dailyWords.length < 5) {
        console.error('Not enough words generated:', dailyWords);
        return; // Exit the function to prevent further errors
    }
    // Store the selected words
    const [selectedWord1, selectedWord2, selectedWord3, selectedWord4, selectedWord5] = dailyWords;
    console.log('Selected words:', selectedWord1, selectedWord2, selectedWord3, selectedWord4, selectedWord5);
    // Initialize your game with the daily words
    updateWordDisplay1(selectedWord1);
    updateWordDisplay2(selectedWord2);
    updateWordDisplay3(selectedWord3);
    updateWordDisplay4(selectedWord4);
    updateWordDisplay5(selectedWord5);
};


const updateWordDisplay1 = (selectedWord1) => {
    console.log('Updating word display 1:', selectedWord1);
    if (typeof selectedWord1 === 'string') {
        wordDisplay1.innerHTML = selectedWord1.split('').map(letter => {
            const span = document.createElement('span');
            span.innerText = guessedLetters.includes(letter) ? letter : '_';
            return span.outerHTML;
        }).join(' ');
    } else {
        console.error('selectedWord1 is not a string:', selectedWord1);
    }
};

const updateWordDisplay2 = (selectedWord2) => {
    wordDisplay2.innerHTML = selectedWord2.split('').map(letter => {
        const span = document.createElement('span');
        span.innerText = guessedLetters.includes(letter) ? letter : '_';
        return span.outerHTML;
    }).join(' ');

};

const updateWordDisplay3 = (selectedWord3) => {
    wordDisplay3.innerHTML = selectedWord3.split('').map(letter => {
        const span = document.createElement('span');
        span.innerText = guessedLetters.includes(letter) ? letter : '_';
        return span.outerHTML;
    }).join(' ');
};

const updateWordDisplay4 = (selectedWord4) => {
    wordDisplay4.innerHTML = selectedWord4.split('').map(letter => {
        const span = document.createElement('span');
        span.innerText = guessedLetters.includes(letter) ? letter : '_';
        return span.outerHTML;
    }).join(' ');
};

const updateWordDisplay5 = (selectedWord5) => {
    wordDisplay5.innerHTML = selectedWord5.split('').map(letter => {
        const span = document.createElement('span');
        span.innerText = guessedLetters.includes(letter) ? letter : '_';
        return span.outerHTML;
    }).join(' ');
};

const updateLivesDisplay = () => {
    livesDisplay.innerText = `You Have 1 Life`;
};

const updateIncorrectGuessesDisplay = () => {
    incorrectGuessesDisplay.innerText = `You have only ${incorrectGuesses} guesses left!`;
};

const updatewordcountDisplay = () => {
    wordcountDisplay.innerText = `There are only ${wordcount} BOOKS...!`;
};

const updatepointsDisplay = () => {
    pointsDisplay.innerText = `You have ${points} points`;
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
        <h3>SCOREBOARD</h3>
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
    setLastAttempt();
    const selectedWords = [selectedWord1, selectedWord2, selectedWord3, selectedWord4, selectedWord5];
    associatedWordsMessage = "";
    selectedWords.forEach(word => {
        const cleanWord = word.replace(/\s+/g, '').trim();
        if (associatedWords[cleanWord]) {
            associatedWordsMessage += `${cleanWord} = ${associatedWords[cleanWord]}<br>`;
        }
    });
    gameOverMessage.innerHTML = `<strong>Oops a Daisy!<br>YOU LOST!</strong><br><br>Come back tomorrow to try again!<br><br> The BOOKS were: <br>${associatedWordsMessage}`;
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
document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.onclick = () => {
        closeButton.closest('.modal').style.display = 'none';
        //resetGame(); - turn on if reset is needed!
    };
});

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
        '1234567890',
        'qwertyuiop',
        'asdfghjkl',
        'zxcvbnm',
        '.,!#'
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

document.addEventListener('DOMContentLoaded', () => {
    //if (!checkLastAttempt()) {
    //   return; // Exit if the player has already played today
    // }
    createKeyboard();

    const dailyWords = getDailyWords();
    [selectedWord1, selectedWord2, selectedWord3, selectedWord4, selectedWord5] = dailyWords;

    console.log('Selected words:', selectedWord1, selectedWord2, selectedWord3, selectedWord4, selectedWord5); // Add this line

    if (selectedWord1) updateWordDisplay1(selectedWord1);
    if (selectedWord2) updateWordDisplay2(selectedWord2);
    if (selectedWord3) updateWordDisplay3(selectedWord3);
    if (selectedWord4) updateWordDisplay4(selectedWord4);
    if (selectedWord5) updateWordDisplay5(selectedWord5);

    updateLivesDisplay();
    updateIncorrectGuessesDisplay();
    updatepointsDisplay();
    /*updateWordDisplay1();
    updateWordDisplay2();
    updateWordDisplay3();
    updateWordDisplay4();
    updateWordDisplay5();*/
    updatewordcountDisplay();

    //displayScoreboard();
    loadScoreboard();


});


const handleGuess = (letter, button) => {
    if (guessedLetters.includes(letter)) return;
    guessedLetters.push(letter);

    let correctGuess = false;

    if (selectedWord1.includes(letter) && wordDisplay1.style.display !== 'none') {
        button.classList.add('selected');
        updateWordDisplay1(selectedWord1);
        correctGuess = true;
    }
    if (selectedWord2.includes(letter) && wordDisplay2.style.display !== 'none') {
        button.classList.add('selected');
        updateWordDisplay2(selectedWord2);
        correctGuess = true;
    }
    if (selectedWord3.includes(letter) && wordDisplay3.style.display !== 'none') {
        button.classList.add('selected');
        updateWordDisplay3(selectedWord3);
        correctGuess = true;
    }
    if (selectedWord4.includes(letter) && wordDisplay4.style.display !== 'none') {
        button.classList.add('selected');
        updateWordDisplay4(selectedWord4);
        correctGuess = true;
    }
    if (selectedWord5.includes(letter) && wordDisplay5.style.display !== 'none') {
        button.classList.add('selected');
        updateWordDisplay5(selectedWord5);
        correctGuess = true;
    }

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
             let associatedWordsMessage = "";
             wordDisplays.forEach(display => {
                 const displayedWord = display.innerText.replace(/\s+/g, '').trim();
                 console.log(`Checking word: ${displayedWord}`); // Debugging output
                 if (associatedWords[displayedWord]) {
                     associatedWordsMessage += `${displayedWord} = ${associatedWords[displayedWord]}<br>`;
                     console.log(`Match found: ${displayedWord} = ${associatedWords[displayedWord]}`); // Debugging output
                 } else {
                     console.log(`No match found for: ${displayedWord}`); // Debugging output
                 }
             });
             wonMessage.innerHTML = `<br><strong>Woo! High Five!<br>They're ALL Right!</strong><br>The books were: <br>${associatedWordsMessage}<br>COME BACK TOMORROW<br>FOR FIVE MORE BOOKS<br>`;
             pointsDisplay.innerText = `You WON!`;
             wonModal.style.display = 'block';
        }
    }

    else {
        button.classList.add('notselected');
        incorrectGuesses--;
        updateLivesDisplay();
        updateIncorrectGuessesDisplay();
        updatepointsDisplay();
        if (incorrectGuesses === 0) {
            maxLives--;
            /* lostMessage.innerHTML = `<strong>Oops a Daisy!<br>YOU LOST!</strong><br><br>Come back tomorrow to try again!<br><br> The MOVIES were: <br>${selectedWord1}, ${selectedWord2}, ${selectedWord3}, ${selectedWord4}, ${selectedWord5}`;
             continueButton.innerText = `Continue with ${maxLives} lives left`; // Set button text
             lostModal.style.display = 'block';
 
             points--;
             incorrectGuesses = 5;*/
            updateLivesDisplay();
            updateIncorrectGuessesDisplay();
            updatepointsDisplay();
            if (maxLives === 0) {
                handleGameOver();
            }
        }
    }
};

document.getElementById('open-en-image').addEventListener('click', () => {
    window.open('index.html', '_blank'); // Opens the new page in a new tab
});

document.getElementById('open-de-image').addEventListener('click', () => {
    window.open('indexde.html', '_blank'); // Opens the new page in a new tab
});

document.getElementById('open-ie-image').addEventListener('click', () => {
    window.open('indexie.html', '_blank'); // Opens the new page in a new tab
});

document.getElementById('open-mov-image').addEventListener('click', () => {
    window.open('indexmov.html', '_blank'); // Opens the new page in a new tab
});
