const words1 = ["act", "aim", "add", "aid", "ago", "and", "age", "all", "art", "air", "ace", "amp", "aft", "ale", "axe", "abs", "box",
    "buy", "boy", "big", "bed", "bag", "bad", "bet", "bar", "bit", "ban", "bus", "but", "bop", "bum", "bow", "cow", "cry",
    "cap", "cop", "cup", "can", "car", "cat", "cut", "day", "dry", "dad", "dig", "dog", "die", "due", "eye", "egg", "end",
    "ear", "eat", "era", "fix", "fly", "few", "fan", "for", "fit", "fee", "fat", "far", "fun", "guy", "gap", "god", "gas",
    "get", "hey", "how", "him", "hip", "hat", "her", "his", "hit", "hot", "ice", "ill", "its", "joy", "job", "key", "kid",
    "law", "lay", "low", "lap", "lip", "leg", "let", "lie", "lot", "mix", "may", "map", "mom", "mad", "man", "new", "now",
    "nod", "net", "nor", "not", "nut", "off", "owe", "own", "odd", "old", "one", "our", "out", "pay", "pop", "pan", "per",
    "pet", "pie", "pot", "put", "raw", "row", "rub", "red", "rid", "run", "sky", "six", "ski", "say", "she", "sad", "sue",
    "son", "sit", "sir", "sin", "set", "see", "sea", "sun", "two", "try", "toy", "the", "top", "tap", "tip", "too", "tie",
    "ten", "tea", "toe", "use", "via", "why", "way", "who", "war", "wet", "win", "yes", "yet", "you", "cod", "chi", "cud",
    "cox", "cum", "cue", "cot", "cob", "dab", "did", "dud", "duo", "dye", "duh", "den", "dam", "dip", "din", "eek", "emu",
    "eel", "ewe", "eve", "elm", "fab", "fad", "fed", "fob", "fry", "fur", "fez", "fib", "gag", "gay", "git", "goo", "gin",
    "gub", "gun", "gut", "gym", "gel", "gem", "hag", "hah", "hem", "hay", "hum", "hun", "hue", "hoe", "hog", "hob", "nob",
    "icy", "ilk", "ink", "inn", "ion", "irk", "ivy", "jab", "jag", "jet", "jar", "jiz", "jot", "jug", "keg", "kit", "kop",
    "kip", "lab", "lad", "led", "lid", "lib", "log", "lob", "lug", "lye", "luv", "mic", "mat", "max", "mar", "meg", "men",
    "mew", "met", "mid", "mob", "moo", "mop", "mug", "mum", "mut", "nab", "nag", "nan", "nap", "nay", "nip", "oaf", "oat",
    "oar", "oft", "oil", "oof", "ooh", "owl", "pac", "pad", "par", "pee", "pew", "pec", "peg", "pic", "pig", "pin", "pip",
    "phi", "ply", "pod", "poo", "pow", "pre", "pro", "pry", "pud", "pub", "pug", "pun", "rad", "rag", "ram", "ran", "rat",
    "ray", "ref", "rem", "rev", "rib", "rif", "rig", "rim", "rip", "rob", "rod", "rot", "rue", "rug", "rum", "rut", "rye",
    "sac", "sag", "sam", "sap", "sat", "sew", "sex", "shy", "sim", "sly", "sob", "sod", "sow", "soy", "spa", "spy", "sub",
    "sud", "sum", "tab", "tag", "tan", "tar", "tat", "taz", "tax", "tee", "tin", "thy", "tit", "tog", "ton", "tot", "tow",
    "tub", "tug", "tum", "tut", "ugh", "umm", "uni", "ups", "urn", "ute", "vac", "vag", "wag", "wan", "was", "wax", "web",
    "wed", "wee", "wit", "wig", "wiz", "wok", "won", "woo", "wow", "wry", "yah", "yak", "yam", "yap", "yaw", "yea", "yay",
    "yeh", "yen", "yep", "yew", "yob", "yum", "yup", "zag", "zap", "zed", "zig", "zip", "zit", "zoo"];
let selectedWord1 = words1[Math.floor(Math.random() * words1.length)];

const words2 = ["able", "ache", "acid", "acme", "acne", "acre", "acts", "aero", "aged", "agog", "ahoy", "akin", "alps", "also", "amen",
    "amid", "amok", "anal", "anna", "anti", "anus", "aped", "apex", "aqua", "arch", "area", "argh", "army", "avid", "away",
    "axel", "back", "been", "best", "body", "book", "both", "butt", "came", "card", "care", "case", "city", "clap", "clog",
    "cock", "coma", "comb", "come", "comp", "core", "cork", "corn", "cozy", "crap", "cred", "cube", "cued", "cult", "cums",
    "cups", "curb", "cure", "curl", "curt", "cusp", "cute", "cuts", "cyan", "czar", "daft", "dais", "dale", "dame", "damn",
    "damp", "dang", "dank", "dare", "data", "dawn", "days", "daze", "dead", "deaf", "deal", "dean", "dear", "debt", "deck",
    "deed", "deep", "deer", "deft", "deli", "delt", "demo", "dent", "deny", "desk", "deus", "dial", "dice", "dick", "dict",
    "died", "dies", "diet", "dime", "ding", "dink", "dirt", "disc", "dish", "diss", "diva", "dive", "dock", "does", "done",
    "doob", "doom", "door", "dope", "dork", "dorm", "dose", "dosh", "dote", "dour", "down", "doze", "dozy", "drab", "drag",
    "dram", "draw", "drip", "drop", "drug", "dual", "dubs", "duck", "duct", "dude", "dues", "duet", "duke", "dumb", "dump",
    "dupe", "dusk", "dust", "duty", "dyed", "dyke", "each", "easy", "edge", "egos", "envy", "even", "ever", "evil", "exit",
    "expo", "fact", "feck", "find", "five", "form", "four", "free", "from", "fuck", "give", "good", "hand", "have", "head",
    "here", "high", "home", "hump", "ibex", "iced", "idea", "idol", "idyl", "iffy", "ikon", "imps", "into", "iris", "irks",
    "iron", "isle", "itch", "jade", "jams", "jars", "jaws", "jazz", "jedi", "jeer", "jerk", "jibe", "jinx", "jive", "john",
    "join", "joke", "juba", "judo", "junk", "jury", "just", "kept", "kick", "king", "kiss", "kite", "kiwi", "knee", "knit",
    "knob", "knot", "know", "kudo", "land", "last", "left", "less", "lick", "life", "like", "line", "long", "love", "lube",
    "made", "make", "many", "mind", "miss", "more", "most", "much", "must", "name", "need", "next", "oaky", "obey", "oboe",
    "odor", "ogre", "oily", "oink", "oint", "oldy", "omen", "omit", "once", "only", "oops", "ooze", "oozy", "open", "opus",
    "oral", "orca", "orcs", "orgy", "oryx", "oval", "oven", "over", "owls", "owns", "oxen", "palm", "part", "pats", "peek",
    "pete", "pick", "pile", "plug", "prod", "prof", "pube", "puck", "pulp", "punk", "punt", "pure", "pyre", "pyro", "quad",
    "quim", "quip", "quit", "quiz", "raid", "rave", "ream", "rent", "ride", "rife", "rims", "ring", "rink", "riot", "ripe",
    "rise", "risk", "rite", "ritz", "road", "robe", "rode", "romp", "root", "rose", "rosy", "rota", "ruck", "rued", "ruly",
    "rump", "rung", "sack", "sags", "said", "sale", "same", "scab", "scam", "scan", "scum", "scut", "seam", "sean", "seat",
    "seed", "seek", "seen", "seer", "self", "semi", "sesh", "sewn", "sexy", "shag", "sham", "shed", "shin", "ship", "shit",
    "shiv", "shoe", "shoo", "shop", "shot", "shut", "sick", "side", "sing", "sire", "sist", "site", "skid", "skim", "skin",
    "slab", "slag", "slap", "slay", "sled", "slew", "slug", "slum", "slut", "smug", "smut", "snot", "snow", "soak", "soap",
    "soda", "sofa", "soil", "some", "song", "soul", "sour", "stab", "stag", "such", "sure", "surf", "swap", "swob", "sync",
    "take", "than", "that", "them", "then", "they", "this", "thus", "time", "tomb", "took", "true", "turd", "turn", "twat",
    "twit", "type", "undo", "unit", "upon", "urge", "urns", "used", "user", "very", "vice", "view", "vile", "want", "warm",
    "wars", "wash", "wasp", "well", "went", "were", "what", "when", "wick", "wide", "will", "wilt", "wing", "wink", "with",
    "woke", "womb", "word", "wore", "work", "yawn", "year", "yelp", "yoga", "yoke", "york", "your", "yurt", "roth"];
let selectedWord2 = words2[Math.floor(Math.random() * words2.length)];

const words3 = ["about", "above", "abuse", "actor", "adapt", "admit", "adopt", "after", "again", "agent", "agree", "ahead", "album",
    "alive", "allow", "alone", "along", "alter", "among", "anger", "angle", "angry", "apart", "apple", "apply", "argue",
    "arise", "aside", "asked", "asset", "avoid", "award", "aware", "awful", "badly", "based", "basic", "basis", "beach",
    "began", "begin", "being", "below", "bench", "bible", "birth", "black", "blade", "blame", "blind", "block", "blood",
    "board", "brain", "brand", "bread", "break", "brief", "bring", "broad", "brown", "brush", "build", "bunch", "buyer",
    "cabin", "cable", "carry", "cases", "catch", "cause", "chain", "chair", "chart", "chase", "cheap", "check", "cheek",
    "chest", "chief", "child", "civil", "claim", "class", "clean", "clear", "climb", "clock", "close", "cloud", "coach",
    "coast", "color", "couch", "could", "count", "court", "cover", "crack", "craft", "crash", "crazy", "cream", "crime",
    "cross", "crowd", "cycle", "daily", "dance", "death", "delay", "depth", "dirty", "docks", "doubt", "dozen", "draft",
    "drama", "dream", "dress", "drink", "drive", "eager", "early", "earth", "eight", "elect", "elite", "empty", "enemy",
    "enjoy", "enter", "entry", "equal", "error", "essay", "event", "every", "exact", "exist", "extra", "faith", "false",
    "fault", "favor", "fence", "fewer", "fiber", "field", "fifty", "fight", "final", "first", "flame", "flesh", "float",
    "floor", "focus", "force", "forth", "found", "frame", "fresh", "front", "fruit", "fully", "funny", "ghost", "giant",
    "given", "glass", "glove", "going", "grade", "grain", "grand", "grant", "grass", "grave", "great", "green", "group",
    "guard", "guess", "guest", "guide", "habit", "happy", "heart", "heavy", "hello", "honey", "honor", "horse", "hotel",
    "house", "human", "humor", "ideal", "image", "imply", "index", "inner", "irish", "issue", "joint", "judge", "juice",
    "knife", "knock", "known", "label", "labor", "large", "later", "laugh", "layer", "learn", "least", "leave", "legal",
    "lemon", "level", "light", "limit", "local", "loose", "lover", "lower", "lucky", "lunch", "major", "maker", "marry",
    "match", "maybe", "mayor", "means", "meath", "media", "medic", "melty", "memes", "metal", "meter", "metre", "might",
    "minor", "mocks", "model", "moist", "molar", "mommy", "money", "month", "moral", "morph", "moted", "motor", "mount",
    "mouse", "mouth", "movie", "mucky", "music", "muted", "naked", "nerve", "never", "newly", "night", "noise", "north",
    "novel", "nurse", "occur", "ocean", "offer", "often", "onion", "order", "other", "ought", "owner", "paddy", "paint",
    "panda", "panel", "panty", "paper", "parma", "parse", "party", "patch", "pause", "peace", "peaks", "pecks", "pelts",
    "pence", "penny", "peter", "petit", "phase", "phone", "photo", "piano", "piece", "pilot", "pines", "pinky", "piped",
    "piper", "pissy", "pitch", "place", "plane", "plant", "plate", "pleas", "plink", "plops", "plump", "pluto", "poach",
    "pocks", "point", "poofs", "poops", "porch", "pound", "power", "poxed", "press", "price", "pride", "prime", "print",
    "prior", "prism", "privy", "prize", "probe", "prong", "proof", "proud", "prove", "psalm", "puffs", "puked", "purge",
    "pygmy", "pylon", "quack", "quail", "qualm", "queen", "query", "quest", "quick", "quiet", "quilt", "quite", "quits",
    "quote", "radio", "raise", "range", "rapid", "ratio", "reach", "react", "ready", "refer", "relax", "reply", "right",
    "river", "rocks", "rough", "round", "route", "rural", "salad", "sales", "sauce", "scale", "scene", "scope", "score",
    "seems", "seize", "sense", "serve", "seven", "shade", "shake", "shall", "shape", "share", "sharp", "sheet", "shelf",
    "shell", "shift", "shine", "shirt", "shock", "shoot", "shore", "short", "shout", "shown", "shrug", "sight", "since",
    "skill", "slave", "sleep", "slice", "slide", "small", "smart", "smell", "smile", "smoke", "socks", "solar", "solid",
    "solve", "sorry", "sound", "south", "space", "speak", "speed", "spend", "split", "sport", "staff", "stage", "stair",
    "stake", "stand", "stare", "start", "state", "steal", "steel", "stick", "still", "stock", "stone", "store", "storm",
    "story", "strip", "study", "stuff", "style", "sugar", "super", "swear", "sweep", "sweet", "swing", "table", "taken",
    "taste", "teach", "terms", "thank", "their", "theme", "there", "these", "thick", "thing", "think", "third", "those",
    "three", "throw", "tight", "times", "tired", "title", "today", "tooth", "topic", "total", "touch", "tough", "tower",
    "trace", "track", "trade", "trail", "train", "treat", "trend", "trial", "tribe", "trick", "troop", "truck", "truly",
    "trust", "truth", "twice", "uncle", "under", "union", "until", "upper", "urban", "using", "usual", "value", "video",
    "virus", "visit", "vital", "voice", "voter", "waste", "watch", "water", "weigh", "wheel", "where", "which", "while",
    "white", "whole", "whose", "woman", "women", "words", "works", "world", "worry", "worth", "would", "wound", "write",
    "wrong", "years", "yield", "young", "yours", "youth", "zebra", "zingy", "zippo", "zippy", "zombi", "zones", "zonks"];
let selectedWord3 = words3[Math.floor(Math.random() * words3.length)];

const words4 = ["beyond", "matter", "became", "design", "except", "london", "latter", "policy", "enough", "within", "wonder",
    "points", "direct", "mother", "manner", "reason", "appear", "health", "french", "little", "yellow", "colour",
    "german", "theory", "report", "system", "future", "number", "higher", "states", "amount", "worker", "writer",
    "social", "abroad", "absorb", "accept", "access", "accuse", "across", "action", "active", "wooden", "source",
    "actual", "adjust", "admire", "advice", "advise", "affair", "affect", "afford", "afraid", "wander", "wealth",
    "agency", "agenda", "almost", "always", "animal", "annual", "answer", "anyone", "anyway", "winter", "wisdom",
    "appeal", "appear", "around", "arrest", "arrive", "artist", "asleep", "aspect", "assert", "window", "winner",
    "assess", "assign", "assist", "assume", "assure", "attach", "attack", "attend", "author", "weight", "widely",
    "barely", "barrel", "basket", "battle", "beauty", "become", "behind", "belief", "belong", "weekly", "volume",
    "beside", "better", "beyond", "border", "borrow", "bother", "bottle", "bottom", "branch", "valley", "versus",
    "breast", "breath", "bridge", "bright", "broken", "budget", "bullet", "burden", "butter", "viewer", "virtue",
    "button", "camera", "campus", "cancer", "carbon", "career", "center", "chance", "change", "vision", "visual",
    "charge", "cheese", "choice", "choose", "church", "circle", "client", "clinic", "closer", "vessel", "victim",
    "coffee", "column", "comedy", "commit", "common", "cookie", "corner", "county", "couple", "tunnel", "twelve",
    "course", "cousin", "create", "credit", "creely", "crisis", "critic", "custom", "damage", "united", "unless",
    "danger", "dealer", "debate", "decade", "decide", "deeply", "defeat", "defend", "define", "unlike", "useful",
    "degree", "demand", "depend", "depict", "deputy", "derive", "desert", "design", "desire", "unable", "unique",
    "detail", "detect", "device", "devote", "differ", "dining", "dinner", "direct", "divide", "twenty", "treaty",
    "doctor", "double", "driver", "easily", "editor", "effect", "effort", "either", "emerge", "threat", "throat",
    "employ", "enable", "energy", "engage", "engine", "enough", "ensure", "entire", "escape", "toward", "travel",
    "estate", "ethics", "ethnic", "evolve", "exceed", "except", "expand", "expect", "expert", "tomato", "tongue",
    "expose", "extend", "extent", "fabric", "factor", "fairly", "family", "famous", "farmer", "ticket", "tissue",
    "father", "fellow", "female", "figure", "finger", "finish", "flavor", "flight", "flower", "tactic", "talent",
    "follow", "forest", "forget", "formal", "former", "fourth", "freeze", "friend", "galaxy", "thirty", "though",
    "garage", "garden", "garlic", "gather", "gender", "gently", "gifted", "glance", "global", "thanks", "theory",
    "golden", "ground", "growth", "guilty", "handle", "happen", "hardly", "health", "heaven", "tennis", "terror",
    "height", "highly", "honest", "horror", "hungry", "hunter", "ignore", "impact", "impose", "target", "symbol",
    "income", "indeed", "infant", "inform", "injury", "inside", "insist", "intend", "invest", "sudden", "suffer",
    "invite", "island", "itself", "jacket", "junior", "latter", "launch", "lawyer", "leader", "supply", "surely",
    "league", "legacy", "legend", "length", "lesson", "letter", "likely", "listen", "living", "survey", "switch",
    "locate", "lovely", "mainly", "makeup", "manage", "manner", "margin", "market", "master", "summer", "summit",
    "matter", "medium", "member", "memory", "mental", "merely", "middle", "minute", "mirror", "street", "stress",
    "modern", "modest", "moment", "mostly", "mother", "motion", "murder", "muscle", "museum", "stupid", "submit",
    "mutual", "myself", "narrow", "nation", "native", "nature", "nearby", "nearly", "nobody", "strong", "studio",
    "normal", "notice", "notion", "object", "obtain", "occupy", "online", "oppose", "option", "string", "stroke",
    "orange", "origin", "others", "parent", "partly", "pepper", "period", "permit", "person", "strike", "status",
    "phrase", "planet", "player", "please", "plenty", "pocket", "poetry", "police", "policy", "speech", "spirit",
    "potato", "powder", "prayer", "prefer", "pretty", "priest", "prison", "profit", "prompt", "steady", "stream",
    "proper", "public", "pursue", "racial", "rarely", "rather", "rating", "reader", "really", "square", "stable",
    "reason", "recall", "recent", "recipe", "record", "reduce", "reform", "refuse", "regard", "spread", "spring",
    "regime", "region", "reject", "relate", "relief", "remain", "remind", "remote", "remove", "simple", "simone",
    "repeat", "resist", "resort", "result", "retain", "retire", "return", "reveal", "review", "smooth", "soccer",
    "rhythm", "sacred", "safety", "salary", "sample", "saving", "scared", "scheme", "school", "slight", "slowly",
    "scream", "screen", "script", "search", "season", "second", "secret", "sector", "secure", "singer", "sister",
    "select", "senior", "breast", "series", "settle", "severe", "shadow", "shower", "signal", "silent", "simply"];
let selectedWord4 = words4[Math.floor(Math.random() * words4.length)];

const words5 = ["amazing", "analyze", "acquire", "anxiety", "anybody", "achieve", "approve", "advance", "ability", "english",
    "anymore", "already", "appoint", "adviser", "attempt", "account", "absence", "average", "arrival", "ireland",
    "athlete", "another", "abandon", "analyst", "airport", "ancient", "article", "address", "actress", "england",
    "attract", "arrange", "against", "airline", "briefly", "blanket", "brother", "breathe", "studies", "greater",
    "between", "benefit", "beneath", "believe", "bedroom", "battery", "because", "balance", "besides", "changes",
    "barrier", "complex", "citizen", "chicken", "company", "chamber", "context", "charity", "chapter", "british",
    "confirm", "cooking", "comfort", "command", "combine", "comment", "compete", "compose", "compare", "brought",
    "concept", "capable", "clearly", "country", "careful", "convert", "century", "conduct", "channel", "results",
    "clothes", "closely", "council", "connect", "crucial", "correct", "concern", "contact", "consume", "members",
    "concert", "cabinet", "captain", "capital", "capture", "classic", "climate", "collect", "courage", "workers",
    "college", "ceiling", "culture", "counter", "content", "curious", "carrier", "control", "central", "further",
    "contest", "certain", "contain", "consist", "cluster", "current", "divorce", "display", "deficit", "schools",
    "develop", "drawing", "destroy", "diverse", "deserve", "deliver", "defense", "dispute", "dismiss", "becomes",
    "discuss", "declare", "despite", "decline", "digital", "disease", "distant", "exactly", "equally", "appears",
    "exhibit", "example", "explode", "examine", "expense", "explain", "explore", "express", "extreme", "earlier",
    "economy", "embrace", "enhance", "elderly", "evening", "episode", "educate", "emotion", "element", "factors",
    "edition", "factory", "faculty", "forward", "fishing", "fantasy", "fashion", "freedom", "forever", "looking",
    "fifteen", "finally", "funding", "formula", "finding", "finance", "fiction", "foreign", "feeling", "western",
    "federal", "founder", "failure", "feature", "fortune", "fitness", "funeral", "grocery", "growing", "effects",
    "gallery", "genetic", "general", "gesture", "highway", "horizon", "healthy", "however", "heavily", "carried",
    "himself", "helpful", "handful", "holiday", "history", "husband", "herself", "hundred", "habitat", "friends",
    "hearing", "hunting", "inquiry", "improve", "involve", "impress", "insight", "include", "imagine", "william",
    "inspire", "instead", "illegal", "initial", "illness", "install", "intense", "justify", "journey", "methods",
    "justice", "journal", "kitchen", "library", "largely", "lawsuit", "leather", "limited", "leading", "persons",
    "license", "mixture", "mystery", "machine", "mistake", "massive", "medical", "musical", "miracle", "related",
    "message", "married", "meaning", "meeting", "morning", "manager", "monitor", "measure", "mission", "percent",
    "million", "mention", "network", "nowhere", "nothing", "neither", "nervous", "natural", "officer", "written",
    "offense", "observe", "obvious", "outcome", "organic", "overall", "opening", "opinion", "ongoing", "wedding",
    "operate", "outside", "project", "privacy", "package", "poverty", "parking", "primary", "publish", "america",
    "perhaps", "perform", "perfect", "payment", "provide", "problem", "predict", "private", "prevent", "systems",
    "program", "profile", "product", "produce", "proceed", "portray", "painful", "penalty", "purpose", "writing",
    "promise", "propose", "protect", "process", "promote", "picture", "plastic", "popular", "prepare", "warning",
    "pretend", "passage", "painter", "protest", "protein", "partner", "passion", "patient", "pattern", "willing",
    "present", "portion", "possess", "quickly", "qualify", "quality", "quietly", "quarter", "require", "worried",
    "request", "realize", "roughly", "rapidly", "reflect", "recover", "receive", "refugee", "respect", "without",
    "replace", "respond", "resolve", "revenue", "radical", "reality", "reading", "regular", "running", "weather",
    "release", "restore", "routine", "squeeze", "subject", "symptom", "somehow", "stomach", "survive", "version",
    "satisfy", "speaker", "shortly", "surface", "service", "society", "stretch", "scholar", "succeed", "whereas",
    "support", "science", "supreme", "special", "surgery", "suppose", "success", "species", "segment", "welcome",
    "scandal", "shelter", "several", "section", "someone", "similar", "silence", "suggest", "student", "weekend",
    "strange", "storage", "setting", "station", "serious", "session", "sustain", "traffic", "therapy", "whisper",
    "typical", "thought", "through", "testify", "tragedy", "teacher", "towards", "tonight", "theater", "working",
    "totally", "trouble", "testing", "tourist", "tension", "unknown", "uniform", "usually", "utility", "wealthy",
    "undergo", "unusual", "vehicle", "victory", "variety", "visible", "village", "various", "venture", "whether",
    "visitor", "whiskey", "jukebox", "zombify", "lockjaw", "squashy", "squeaky", "jackpot", "liquify", "cozying"];
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

logoImage.src = 'logo1.png';

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
    livesDisplay.innerText = `You Have ${maxLives} Lives`;
};

const updateincorrectGuessesDisplay = () => {
    incorrectGuessesDisplay.innerText = `You have only ${incorrectGuesses} guesses left!`;
};

const updatewordcountDisplay = () => {
    wordcountDisplay.innerText = `There are only ${wordcount} words...!`;
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
    gameOverMessage.innerHTML = `<strong>Game Over!</strong><br>You scored ${points} points.<br>Enter your name for the scoreboard:`;
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
            wonMessage.innerHTML = `<br><strong>Woo! High Five!<br>They're ALL Right!</strong><br><br>You have ${maxLives} lives left. <br>Keep Going!<br> `;
            pointsDisplay.innerText = `Points: ${points}`;
            wonModal.style.display = 'block';
        }

    }

    else {
    button.classList.add('notselected');
    incorrectGuesses--;
    updateLivesDisplay();
    updateincorrectGuessesDisplay();
    updatepointsDisplay();
    if (incorrectGuesses === 0) {
        maxLives--;
        lostMessage.innerHTML = `<strong>Oops a Daisy!<br>You ran out of guesses</strong><br><br>You have ${maxLives} lives left. <br><br> The words were: <br>${selectedWord1}, ${selectedWord2}, ${selectedWord3}, ${selectedWord4}, ${selectedWord5}`;
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
        'qwertyuiop',
        'asdfghjkl',
        'zxcvbnm'
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

document.getElementById('open-ie-image').addEventListener('click', () => {
    window.open('indexie.html', '_blank'); // Opens the new page in a new tab
});

function removeTouchClass() {
    image.classList.remove('new-shade'); // Remove the shading change class
}

image.addEventListener('touchstart', addTouchClass);
image.addEventListener('touchend', removeTouchClass);
