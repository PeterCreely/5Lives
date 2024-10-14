
const words1 = ["aah", "abs", "ace", "act", "add", "ado", "ads", "aft", "age", "ago", "aha", "aid", "ail", "aim", "air", "ale", "all",
    "alp", "alt", "amp", "and", "ann", "ant", "any", "ape", "apo", "app", "apt", "arc", "ard", "are", "arf", "ark", "arm", "art", "ash",
    "ask", "ass", "ate", "ats", "avo", "awe", "awk", "awl", "axe", "aye", "bac", "bad", "bae", "bag", "bah", "bam", "ban", "bap", "bar",
    "bat", "bay", "bed", "bee", "beg", "bel", "ben", "bes", "bet", "bey", "bez", "bib", "bid", "big", "bin", "bio", "bit", "biz", "bob",
    "bod", "bog", "boi", "boo", "bop", "bot", "bow", "box", "boy", "bra", "bro", "bub", "bud", "bug", "bum", "bun", "bur", "bus", "but",
    "buy", "bye", "cab", "cad", "cam", "can", "cap", "car", "cat", "caw", "cis", "cob", "cod", "cog", "con", "coo", "cop", "cot", "cow",
    "cox", "coz", "cry", "cub", "cud", "cue", "cum", "cup", "cur", "cut", "cuz", "dab", "dad", "dag", "dam", "day", "def", "den", "dev",
    "dew", "dib", "did", "die", "dig", "dim", "din", "dip", "div", "doc", "doe", "dog", "doh", "dom", "don", "doo", "dot", "dow", "dox",
    "dry", "dub", "dud", "due", "dug", "duh", "dum", "dun", "duo", "dye", "ear", "eat", "eco", "eek", "eel", "eew", "egg", "ego", "elf",
    "elk", "elm", "emo", "emu", "end", "eon", "era", "erm", "err", "eve", "evo", "ewe", "eye", "fab", "fad", "fag", "fan", "fap", "far",
    "fat", "fax", "fay", "fed", "fem", "fen", "fes", "few", "fez", "fib", "fig", "fin", "fir", "fit", "fix", "flu", "fly", "fob", "foe",
    "fog", "foo", "fop", "for", "fox", "fro", "fry", "fud", "fun", "fur", "gab", "gad", "gag", "gap", "gas", "gat", "gaw", "gay", "gee",
    "gel", "gem", "gen", "geo", "get", "gib", "gid", "gif", "gig", "gin", "git", "gnu", "gob", "god", "goo", "got", "gov", "grr", "gub",
    "gum", "gun", "gut", "guv", "guy", "gym", "gyp", "had", "hag", "ham", "han", "has", "hat", "haw", "hay", "heh", "hem", "hen", "her",
    "hes", "hew", "hex", "hey", "hic", "hid", "him", "hip", "his", "hit", "hmm", "hob", "hod", "hoe", "hog", "hop", "hot", "how", "hoy",
    "hub", "hue", "hug", "huh", "hum", "hun", "hut", "ice", "ich", "ick", "icy", "ide", "ifs", "ilk", "ill", "imp", "ing", "ink", "inn",
    "ins", "ion", "ios", "ire", "irk", "ish", "ism", "its", "ivy", "jab", "jag", "jam", "jap", "jar", "jaw", "jay", "jet", "jib", "jig",
    "jin", "jiz", "job", "joe", "jog", "jot", "joy", "jug", "jus", "jut", "kai", "kay", "keg", "ken", "key", "kid", "kin", "kip", "kit",
    "kob", "koi", "kop", "lab", "lad", "lag", "lam", "lap", "lat", "lav", "law", "lax", "lay", "led", "lee", "leg", "lep", "let", "lev",
    "lew", "lex", "ley", "lib", "lid", "lie", "lip", "lit", "lob", "log", "loo", "lop", "lot", "low", "lud", "lug", "lye", "mac", "mad",
    "mag", "mal", "mam", "man", "map", "mar", "mat", "maw", "max", "may", "med", "meg", "meh", "mem", "men", "met", "mew", "mic", "mid",
    "mil", "mix", "mna", "mob", "mod", "mog", "mom", "moo", "mop", "mot", "mow", "mud", "mug", "mum", "mut", "nab", "nag", "nah", "nam",
    "nan", "nap", "nat", "nav", "naw", "nay", "nee", "net", "new", "nib", "nil", "nip", "nit", "nix", "nob", "nod", "nog", "nom", "non",
    "noo", "not", "now", "nox", "nub", "nug", "nun", "nut", "nye", "oaf", "oak", "oar", "oat", "obe", "obi", "odd", "ode", "off", "oft",
    "oik", "oil", "old", "ole", "oma", "one", "oof", "ooh", "opa", "ops", "opt", "orb", "orc", "ore", "org", "out", "owl", "own", "owt",
    "oxy", "oye", "pac", "pad", "pah", "pal", "pam", "pan", "pap", "par", "pat", "paw", "pax", "pay", "pea", "pec", "ped", "pee", "peg",
    "pen", "pep", "per", "pet", "pew", "phi", "pic", "pie", "pig", "pin", "pip", "pit", "pix", "ply", "pod", "pom", "poo", "pop", "pot",
    "pow", "pox", "pre", "pro", "pry", "psi", "pst", "pub", "pud", "pug", "puh", "pun", "pup", "pur", "pus", "put", "qat", "qin", "qis",
    "qua", "rad", "rag", "raj", "ram", "ran", "rap", "rat", "raw", "ray", "rec", "red", "ref", "reg", "rem", "rep", "rev", "rhy", "rib",
    "rid", "rif", "rig", "rim", "rip", "rit", "riz", "rob", "roc", "rod", "rok", "rot", "row", "rub", "rud", "rue", "rug", "rum", "run",
    "rut", "rye", "sac", "sad", "sag", "sam", "sap", "sat", "sav", "saw", "sax", "say", "saz", "sea", "sec", "see", "seg", "set", "sew",
    "sex", "sez", "she", "shh", "shy", "sic", "sim", "sin", "sip", "sir", "sis", "sit", "six", "ski", "sky", "sly", "sob", "soc", "sod",
    "sog", "sol", "son", "sop", "sow", "sox", "soy", "soz", "spa", "spy", "sty", "sub", "sud", "sue", "sug", "sum", "sun", "sup", "sus",
    "tab", "tad", "tag", "taj", "tam", "tan", "tap", "tar", "tat", "taw", "tax", "tay", "tea", "ted", "tee", "tel", "ten", "tex", "the",
    "tho", "thy", "tie", "tik", "til", "tin", "tip", "tis", "tit", "tix", "tod", "toe", "tog", "tom", "ton", "too", "top", "tor", "tot",
    "tow", "toy", "try", "tsk", "tub", "tug", "tum", "tut", "tux", "two", "ufo", "ugh", "ugs", "umm", "uni", "ups", "urn", "use", "ute",
    "vac", "vag", "van", "var", "vat", "vax", "veg", "vet", "vex", "via", "vid", "vie", "vin", "vis", "vog", "vow", "vox", "wad", "wag",
    "wan", "wap", "war", "was", "wat", "wax", "way", "waz", "web", "wed", "wee", "wen", "wet", "wey", "wha", "who", "why", "wig", "win",
    "wit", "wiz", "woe", "wok", "won", "woo", "wop", "wot", "wow", "wry", "wud", "wuz", "wye", "xed", "xis", "yag", "yah", "yak", "yam",
    "yap", "yar", "yas", "yaw", "yay", "yea", "yeh", "yen", "yep", "yer", "yes", "yet", "yew", "yez", "yin", "yip", "yob", "yon", "you",
    "yuk", "yum", "yup", "zag", "zap", "zax", "zed", "zee", "zek", "zen", "zep", "zig", "zin", "zip", "zit", "zoa", "zoo", "zuz", "nor",
    "owe", "hah", "taz", "luv", "fee", "our", "chi"
];
let selectedWord1 = words1[Math.floor(Math.random() * words1.length)];

const words2 = ["abba", "abed", "abet", "able", "ably", "abut", "abye", "abys", "aced", "aces", "ache", "achy", "acid", "acme", "acne",
    "acre", "acts", "adds", "aero", "afar", "aged", "ages", "agin", "agog", "ahem", "ahoy", "aide", "aids", "ails", "aims", "airs",
    "airy", "ajar", "akin", "alan", "alas", "alba", "ales", "alit", "alls", "ally", "alms", "aloe", "alps", "also", "alto", "alts",
    "alum", "amen", "amid", "ammo", "amok", "amps", "anal", "anas", "ands", "anew", "anna", "anon", "ante", "anti", "ants", "anus",
    "aped", "apes", "apex", "apod", "apos", "apps", "aqua", "arch", "arcs", "area", "ares", "argh", "aria", "arid", "arks", "arms",
    "army", "arts", "arty", "arvo", "asks", "asps", "atom", "atop", "auks", "auld", "aunt", "aura", "auto", "avid", "avow", "away",
    "awed", "awee", "awes", "awls", "awns", "awny", "awol", "awry", "axed", "axel", "axes", "axil", "axis", "axle", "ayes", "azan",
    "azon", "baba", "babe", "baby", "bach", "back", "bade", "bads", "bags", "bail", "bait", "bake", "bald", "bale", "balk", "ball",
    "balm", "band", "bane", "bang", "bank", "baps", "barb", "bard", "bare", "barf", "bark", "barn", "bars", "base", "bash", "bask",
    "bass", "bate", "bath", "bats", "batt", "bawd", "bawl", "bays", "bead", "beak", "beam", "bean", "bear", "beat", "beau", "beck",
    "beds", "beef", "been", "beep", "beer", "bees", "beet", "begs", "bell", "belt", "bend", "bent", "berg", "berk", "best", "beta",
    "beth", "bets", "bevy", "bias", "bibs", "bide", "bids", "bier", "biff", "bigs", "bike", "bile", "bilk", "bill", "bind", "bins",
    "bint", "bios", "bird", "birk", "biro", "bisk", "bite", "bits", "bitt", "blab", "blah", "blam", "blew", "blip", "blob", "bloc",
    "blog", "blot", "blow", "blub", "blue", "blur", "boar", "boat", "bobs", "bock", "bode", "bods", "body", "boff", "bogs", "bogy",
    "boho", "boil", "bold", "bole", "boll", "bolo", "bolt", "bomb", "bond", "bone", "bong", "bonk", "bony", "boob", "book", "boom",
    "boon", "boor", "boos", "boot", "bops", "bore", "born", "bosh", "boss", "both", "bots", "bout", "bowl", "bows", "boxy", "boyo",
    "boys", "bozo", "brad", "brag", "bran", "bras", "brat", "bray", "bred", "bree", "brew", "brie", "brig", "brim", "brit", "bros",
    "brow", "bubs", "buck", "buds", "buff", "bugs", "bulb", "bulk", "bull", "bump", "bums", "bung", "bunk", "buns", "bunt", "buoy",
    "burb", "burg", "burn", "burp", "burr", "burs", "bury", "bush", "busk", "buss", "bust", "busy", "bute", "buts", "butt", "buys",
    "buzz", "byes", "byte", "cabs", "cafe", "cage", "cagy", "cain", "cake", "caky", "calf", "calk", "call", "calm", "came", "camp",
    "cams", "cane", "cans", "cant", "cape", "capo", "caps", "carb", "card", "care", "carl", "carp", "cars", "cart", "casa", "case",
    "cash", "cask", "cast", "cats", "cave", "caws", "cell", "celt", "cent", "chai", "chap", "char", "chat", "chaw", "chef", "chew",
    "chez", "chic", "chin", "chip", "chit", "chop", "chow", "chub", "chug", "chum", "ciao", "cigs", "cine", "cist", "cite", "city",
    "clad", "clam", "clan", "clap", "claw", "clay", "clef", "clip", "clod", "clog", "clop", "clot", "cloy", "club", "clue", "coal",
    "coat", "coax", "cobs", "coca", "cock", "coco", "coda", "code", "coed", "cogs", "coif", "coil", "coin", "coke", "coky", "cola",
    "cold", "cole", "colt", "coma", "comb", "come", "comp", "cone", "conk", "cons", "cook", "cool", "coop", "coos", "coot", "cope",
    "cops", "copy", "cord", "core", "cork", "corn", "cost", "cosy", "cote", "cots", "coup", "cove", "cowl", "cows", "cozy", "crab",
    "crag", "cram", "crap", "craw", "cred", "crew", "crib", "cris", "crit", "croc", "crop", "crow", "crud", "crux", "cube", "cubs",
    "cuds", "cued", "cues", "cuff", "cull", "cult", "cums", "cups", "curb", "curd", "cure", "curl", "curr", "curt", "cusp", "cuss",
    "cute", "cuts", "cyan", "czar", "dabs", "dada", "dado", "dads", "daft", "dags", "dahl", "dais", "dale", "dame", "damn", "damp",
    "dams", "dang", "dank", "dare", "dark", "darn", "dart", "dash", "data", "date", "daub", "dawn", "days", "daze", "dead", "deaf",
    "deal", "dean", "dear", "debs", "debt", "deck", "deco", "deed", "deem", "deep", "deer", "dees", "deet", "deft", "defy", "deli",
    "dell", "delt", "demo", "dent", "deny", "derm", "desk", "deus", "devs", "dews", "dewy", "dial", "dice", "dick", "dict", "dido",
    "didy", "died", "dies", "diet", "difs", "digs", "dill", "dime", "dims", "dine", "ding", "dink", "dino", "dins", "dint", "dips",
    "dire", "dirk", "dirt", "disc", "dish", "disk", "diss", "ditz", "diva", "dive", "djin", "dock", "docs", "dodo", "doer", "does",
    "doff", "doge", "dogs", "dogy", "dojo", "dole", "doll", "dolt", "dome", "doms", "done", "dong", "doob", "doom", "door", "dope",
    "dopy", "dork", "dorm", "dorp", "dory", "dose", "dosh", "doss", "dote", "dots", "doty", "dour", "dove", "down", "dows", "doxy",
    "doze", "dozy", "drab", "drag", "dram", "drat", "draw", "dray", "dreg", "drew", "drib", "drip", "drop", "drub", "drug", "drum",
    "drys", "dual", "dubs", "duce", "duck", "duct", "dude", "duds", "duel", "dues", "duet", "duff", "dugs", "duke", "dull", "duly",
    "dumb", "dump", "dune", "dung", "dunk", "duos", "dupe", "dusk", "dust", "duty", "dyed", "dyer", "dyes", "dyke", "each", "earl",
    "earn", "ears", "ease", "east", "easy", "eats", "eave", "ebbs", "echo", "eddy", "edge", "edgy", "edit", "eels", "eger", "eggs",
    "eggy", "egos", "elks", "elms", "else", "emit", "emmy", "emus", "ends", "envy", "eons", "epic", "eras", "ergo", "eros", "errs",
    "etch", "etic", "euro", "even", "ever", "eves", "evil", "ewes", "exam", "exec", "exed", "exes", "exit", "exon", "expo", "eyed",
    "eyes", "eyre", "fabs", "face", "fact", "fade", "fads", "fags", "fail", "fain", "fair", "fake", "fall", "fame", "fane", "fang",
    "fans", "fare", "farm", "faro", "fast", "fate", "fats", "faun", "faux", "fawn", "fays", "faze", "feal", "fear", "feat", "feck",
    "feds", "feed", "feel", "fees", "feet", "fell", "felt", "fems", "fend", "fens", "fern", "fess", "fest", "feta", "fete", "feud",
    "fiar", "fiat", "fibs", "fife", "figs", "file", "fill", "film", "fils", "find", "fine", "fins", "fire", "firm", "firn", "firs",
    "fish", "fist", "fits", "five", "fizz", "flab", "flag", "flak", "flam", "flan", "flap", "flat", "flaw", "flax", "flay", "flea",
    "fled", "flee", "flew", "flex", "flip", "flit", "floe", "flog", "flop", "flow", "flue", "flux", "foal", "foam", "fobs", "foes",
    "fogs", "fogy", "foil", "fold", "folk", "fond", "font", "food", "fool", "foot", "fops", "ford", "fore", "fork", "form", "fort",
    "foul", "four", "fowl", "foxy", "fozy", "frag", "frap", "frat", "fray", "free", "fret", "frig", "frit", "friz", "froe", "frog",
    "from", "fuck", "fuel", "fuji", "full", "fume", "fund", "funk", "funs", "furl", "furs", "fury", "fuse", "fuss", "fuzz", "gabs",
    "gads", "gaff", "gaga", "gage", "gags", "gain", "gait", "gala", "gale", "gall", "gals", "gama", "game", "gams", "gamy", "gang",
    "gaol", "gape", "gaps", "gapy", "garb", "gash", "gasp", "gast", "gate", "gave", "gawk", "gawp", "gays", "gaze", "gear", "geek",
    "geez", "geld", "gels", "gems", "gene", "gent", "germ", "gest", "gets", "ghee", "gibe", "gift", "gigs", "gild", "gill", "gilt",
    "gimp", "gins", "girl", "giro", "gist", "gits", "give", "glad", "glam", "glee", "glen", "glib", "glob", "glow", "glue", "glug",
    "glum", "glut", "gnat", "gnaw", "goad", "goal", "goat", "gobs", "goer", "goes", "gogo", "gold", "golf", "gone", "gong", "good",
    "goof", "goon", "goop", "goos", "gore", "gorm", "gorp", "gory", "gosh", "goth", "gout", "gowd", "gown", "goys", "grab", "grad",
    "gram", "gran", "gray", "grew", "grey", "grid", "grim", "grin", "grip", "grit", "grog", "grok", "grow", "grub", "guff", "gulf",
    "gull", "gulp", "gums", "gunk", "guns", "guru", "gush", "gust", "guts", "guys", "gyms", "gyro", "hack", "hade", "hadj", "haft",
    "hags", "haha", "hail", "hair", "hake", "haku", "hale", "half", "hall", "halo", "halt", "hams", "hand", "hang", "hank", "hard",
    "hare", "hark", "harm", "harp", "hart", "hash", "hate", "hats", "haul", "have", "hawk", "hays", "haze", "hazy", "head", "heal",
    "heap", "hear", "heat", "heck", "heed", "heel", "heft", "heir", "held", "helm", "help", "hemp", "hems", "hens", "herb", "herd",
    "here", "hero", "hers", "hest", "hewn", "hews", "hick", "hide", "high", "hike", "hilt", "hims", "hind", "hint", "hips", "hire",
    "hiss", "hist", "hits", "hive", "hoax", "hobo", "hobs", "hock", "hoes", "hogg", "hogs", "hold", "holy", "home", "hone", "hood",
    "hoof", "hook", "hoop", "hoot", "hope", "hops", "horn", "hose", "host", "hots", "hour", "hove", "howl", "hows", "hoya", "hubs",
    "huck", "hued", "hues", "huff", "huge", "hugs", "hula", "hulk", "hull", "hump", "hums", "hung", "hunk", "huns", "hunt", "hurl",
    "hurt", "hush", "husk", "huts", "hymn", "hype", "hypo", "ibex", "ibis", "iced", "ices", "ichs", "icky", "icon", "idea", "idle",
    "idly", "idol", "idyl", "iffy", "ikon", "ilks", "ills", "illy", "imps", "inch", "info", "inks", "inky", "inns", "into", "ions",
    "iota", "iris", "irks", "iron", "isle", "itch", "item", "jabs", "jack", "jade", "jags", "jail", "jake", "jams", "jane", "jape",
    "jars", "java", "jaws", "jays", "jazz", "jean", "jedi", "jeep", "jeer", "jeez", "jerk", "jess", "jest", "jete", "jets", "jews",
    "jibe", "jibs", "jiff", "jigs", "jill", "jilt", "jink", "jins", "jinx", "jism", "jive", "jivy", "jobs", "jock", "joes", "joey",
    "jogs", "john", "join", "joke", "joky", "jolt", "josh", "joss", "jota", "jots", "jowl", "joys", "juba", "judo", "jugs", "juke",
    "jump", "junk", "jupe", "jury", "just", "jute", "juts", "kail", "kain", "kale", "kane", "kapa", "kart", "kata", "kats", "kays",
    "keel", "keen", "keep", "kegs", "kelp", "kemp", "kens", "kent", "kept", "kerb", "kern", "keto", "keys", "khan", "kick", "kids",
    "kill", "kiln", "kilo", "kilt", "kind", "kine", "king", "kink", "kino", "kins", "kips", "kirk", "kiss", "kite", "kits", "kiwi",
    "knee", "knew", "knit", "knob", "knot", "know", "koas", "konk", "kops", "kudo", "kyak", "labs", "lace", "lack", "lacy", "lade",
    "lads", "lady", "lags", "laid", "lain", "lair", "lake", "laky", "lama", "lamb", "lame", "lamp", "lams", "land", "lane", "lank",
    "laps", "lard", "lark", "lash", "lass", "last", "late", "lath", "lats", "laud", "lava", "lawn", "laws", "lays", "laze", "lazy",
    "lead", "leaf", "leak", "leal", "lean", "leap", "lear", "leek", "leer", "lees", "leet", "left", "legs", "lend", "lens", "lent",
    "lept", "less", "lest", "lets", "leud", "levy", "lewd", "leys", "liar", "libs", "lice", "lick", "lido", "lids", "lied", "lien",
    "lier", "lies", "lieu", "life", "lift", "like", "lilo", "lilt", "lily", "lima", "limb", "lime", "limo", "limp", "line", "ling",
    "link", "lino", "lint", "lion", "lips", "lira", "lire", "lisp", "list", "lite", "lits", "live", "load", "loaf", "loam", "loan",
    "lobe", "lobs", "loca", "loch", "lock", "loco", "lode", "loft", "logo", "logs", "logy", "loin", "loll", "lone", "long", "loof",
    "look", "loom", "loon", "loop", "loos", "loot", "lord", "lore", "lorn", "lory", "loss", "lost", "loth", "lots", "loud", "lout",
    "love", "lows", "lube", "luck", "lude", "luff", "luge", "lugs", "lull", "lump", "luna", "lune", "lung", "lunk", "lure", "lurk",
    "lush", "lust", "lute", "lutz", "luvs", "lynx", "lyre", "mace", "mach", "mack", "macs", "made", "mads", "mage", "mags", "maid",
    "mail", "maim", "main", "make", "male", "mall", "malt", "mama", "mana", "mane", "mano", "mans", "many", "maps", "mare", "mark",
    "marl", "mars", "mart", "mash", "mask", "mass", "mast", "mate", "math", "mats", "matt", "maud", "maul", "maws", "maxi", "mayo",
    "mays", "maze", "mazy", "mead", "meal", "mean", "meat", "meds", "meed", "meek", "meet", "mega", "megs", "meld", "melt", "meme",
    "memo", "mend", "menu", "meow", "merc", "mere", "mess", "meta", "meth", "mewl", "mews", "mica", "mice", "mics", "midi", "mids",
    "mien", "miff", "mike", "mild", "mile", "milk", "mill", "mils", "mime", "mind", "mine", "mini", "mink", "mint", "minx", "mire",
    "mirk", "mirs", "mise", "miso", "miss", "mist", "mite", "mitt", "mity", "mixt", "moan", "moat", "mobs", "mock", "mode", "mods",
    "mogs", "mojo", "moke", "mold", "mole", "moll", "mols", "molt", "moly", "moms", "monk", "mono", "mons", "mood", "moon", "moos",
    "moot", "mope", "mops", "mopy", "more", "morn", "mort", "mosh", "moss", "most", "mote", "moth", "mots", "mott", "move", "mown",
    "mows", "much", "muck", "muds", "mugs", "mule", "mull", "mums", "murk", "muse", "mush", "musk", "muss", "must", "mute", "muts",
    "mutt", "myth", "nabs", "nada", "naff", "nags", "nail", "name", "nana", "nans", "napa", "nape", "naps", "narc", "nark", "nary",
    "nave", "navy", "nays", "nazi", "near", "neat", "neck", "need", "neon", "nerd", "ness", "nest", "nets", "nett", "news", "newt",
    "next", "nibs", "nice", "nick", "nigh", "nill", "nils", "nine", "nips", "nite", "nits", "nobs", "node", "nods", "noel", "nogg",
    "nogs", "noir", "none", "nook", "noon", "nope", "nori", "norm", "nose", "nosh", "nosy", "note", "noun", "nova", "nows", "nowt",
    "nubs", "nude", "nuke", "null", "numb", "nuns", "nurd", "nuts", "oafs", "oaks", "oaky", "oars", "oath", "oats", "obey", "obit",
    "oboe", "odds", "odes", "odor", "offs", "ogle", "ogre", "oils", "oily", "oink", "oint", "okay", "okra", "olds", "oldy", "omen",
    "omit", "once", "ones", "only", "onto", "onus", "onyx", "oohs", "oops", "ooze", "oozy", "opah", "opal", "open", "opts", "opus",
    "oral", "orbs", "orca", "orcs", "orgy", "oryx", "otto", "ouch", "ours", "oust", "outs", "ouzo", "oval", "oven", "over", "owed",
    "owes", "owls", "owns", "oxen", "oxes", "pace", "pack", "pacs", "pact", "pacy", "pads", "page", "paid", "pail", "pain", "pair",
    "pale", "pall", "palm", "pals", "paly", "pane", "pang", "pans", "pant", "papa", "paps", "para", "pare", "park", "parr", "pars",
    "part", "pass", "past", "pate", "path", "pats", "paty", "pave", "pawn", "paws", "pays", "peak", "peal", "pear", "peas", "peat",
    "pech", "peck", "pecs", "peds", "peed", "peek", "peel", "peep", "peer", "pees", "pegs", "pelt", "pend", "pens", "pent", "peps",
    "perk", "perm", "perp", "pert", "perv", "pest", "pete", "pets", "pews", "phat", "phew", "phiz", "pica", "pick", "pics", "pied",
    "pier", "pies", "pigs", "pike", "pile", "pill", "pimp", "pine", "ping", "pink", "pins", "pint", "pipe", "pips", "pish", "pita",
    "pits", "pity", "pixy", "plan", "play", "plea", "pleb", "pled", "plex", "plie", "plod", "plop", "plot", "plow", "ploy", "plug",
    "plum", "plus", "pods", "poem", "poet", "poke", "poky", "pole", "poll", "polo", "poly", "pomp", "poms", "pond", "pong", "pony",
    "poof", "pooh", "pool", "poop", "poor", "poos", "pope", "pops", "pore", "pork", "porn", "port", "pose", "posh", "post", "posy",
    "pots", "pour", "pout", "pows", "poxy", "pram", "prat", "pray", "prep", "prey", "prez", "prim", "prod", "prof", "prog", "prom",
    "prop", "pros", "prow", "psst", "pube", "pubs", "puck", "puds", "puff", "pugs", "puke", "pull", "pulp", "puma", "pump", "punk",
    "puns", "punt", "puny", "pups", "pure", "purr", "purs", "push", "puss", "puts", "putt", "putz", "pyre", "pyro", "qats", "quad",
    "quag", "quai", "quay", "quid", "quim", "quin", "quip", "quit", "quiz", "race", "rack", "racy", "rads", "raft", "rage", "rags",
    "raid", "rain", "rake", "raku", "ramp", "rams", "rang", "rank", "rant", "rape", "raps", "rare", "rash", "rasp", "rate", "rath",
    "rats", "rave", "raws", "rays", "razz", "read", "real", "ream", "reap", "rear", "recs", "redo", "reds", "reed", "reef", "reek",
    "reel", "refs", "regs", "rein", "rely", "rend", "rent", "reps", "rest", "revs", "ribs", "rice", "rich", "rick", "ride", "rids",
    "rife", "riff", "rifs", "rift", "rigs", "rile", "rims", "rind", "ring", "rink", "riot", "ripe", "rips", "rise", "risk", "rite",
    "ritz", "road", "roam", "roar", "robe", "robs", "rock", "rode", "rods", "roll", "romp", "roof", "rook", "room", "root", "rope",
    "ropy", "rose", "rosy", "rota", "rote", "roth",	"rots", "rout", "roux", "rove", "rows", "rube", "rubs", "ruby", "ruck", "rude",
    "rued", "rues", "ruff", "rugs", "ruin", "rule", "ruly", "rump", "rums", "rune", "rung", "runs", "runt", "ruse", "rush", "rusk",
    "rust", "ruts", "sack", "sacs", "sade", "safe", "saga", "sage", "sags", "sagy", "said", "sail", "sake", "saki", "sale", "salt",
    "same", "sand", "sane", "sang", "sank", "sans", "saps", "sash", "sate", "save", "sawn", "saws", "says", "scab", "scag", "scam",
    "scan", "scar", "scat", "scot", "scud", "scum", "scut", "seal", "seam", "sean", "sear", "seas", "seat", "sect", "seed", "seek",
    "seel", "seem", "seen", "seep", "seer", "sees", "segs", "self", "sell", "semi", "send", "sent", "serf", "sesh", "sets", "sewn",
    "sews", "sext", "sexy", "shag", "sham", "shat", "shed", "shes", "shim", "shin", "ship", "shit", "shiv", "shod", "shoe", "shoo",
    "shop", "shot", "show", "shun", "shut", "sick", "side", "sift", "sigh", "sign", "sike", "silk", "silo", "silt", "simp", "sims",
    "sing", "sink", "sins", "sips", "sire", "sirs", "sist", "site", "sith", "sits", "size", "sizy", "skag", "skat", "skew", "skid",
    "skim", "skin", "skip", "skit", "slab", "slag", "slam", "slap", "slat", "slaw", "slay", "sled", "slew", "slid", "slim", "slip",
    "slit", "slob", "slog", "slop", "slot", "slow", "slug", "slum", "slur", "slut", "smog", "smug", "smut", "snag", "snap", "snip",
    "snob", "snog", "snot", "snow", "snub", "snug", "soak", "soap", "soar", "sobs", "sock", "soda", "sods", "sofa", "soft", "soil",
    "sold", "sole", "solo", "some", "song", "sons", "soon", "soot", "sord", "sore", "sort", "soul", "soup", "sour", "sown", "sows",
    "soya", "soys", "spam", "span", "spar", "spat", "spay", "spec", "sped", "spew", "spin", "spit", "spiv", "spot", "spry", "spud",
    "spun", "spur", "stab", "stag", "star", "stat", "staw", "stay", "stem", "step", "stew", "stir", "stop", "stow", "stub", "stud",
    "stum", "stun", "subs", "such", "suds", "sued", "suer", "sues", "suet", "suit", "sulk", "sumo", "sump", "sums", "sung", "sunk",
    "suns", "supe", "sups", "sure", "surf", "suss", "swab", "swag", "swam", "swan", "swap", "swat", "sway", "swig", "swim", "swob",
    "swot", "swum", "syke", "sync", "syne", "syph", "tabs", "tack", "taco", "tact", "tags", "tail", "take", "talc", "tale", "talk",
    "tall", "tame", "tamp", "tang", "tank", "tape", "taps", "tarp", "tart", "task", "tats", "taut", "taxi", "teak", "teal", "team",
    "tear", "teas", "teat", "tech", "teds", "teel", "teem", "teen", "tees", "tele", "tell", "temp", "tend", "tens", "tent", "term",
    "tern", "test", "text", "than", "that", "thaw", "them", "then", "they", "thin", "this", "thou", "thru", "thud", "thug", "thus",
    "tick", "tics", "tide", "tidy", "tied", "tier", "ties", "tiff", "tike", "tiki", "tile", "till", "tils", "tilt", "time", "tine",
    "ting", "tins", "tint", "tiny", "tips", "tire", "toad", "toes", "tofu", "toga", "togs", "toil", "toke", "told", "tomb", "tome",
    "tone", "tong", "tons", "tony", "took", "tool", "toon", "toot", "tops", "torc", "tore", "torn", "tort", "tory", "tosh", "toss",
    "tote", "tots", "tour", "tout", "town", "tows", "toys", "trad", "tram", "trap", "tray", "tree", "trek", "trey", "trig", "trim",
    "trio", "trip", "trod", "trot", "troy", "true", "tuba", "tube", "tubs", "tuck", "tuff", "tuft", "tugs", "tump", "tuna", "tune",
    "turd", "turf", "turk", "turn", "tush", "tusk", "tuts", "twas", "twat", "twee", "twig", "twin", "twit", "twos", "tyke", "tyne",
    "type", "typo", "tyre", "tzar", "udon", "ughs", "ugly", "undo", "undy", "unit", "unto", "upby", "updo", "upon", "urea", "urge",
    "urns", "used", "user", "uses", "utes", "vacs", "vail", "vain", "vale", "vamp", "vane", "vans", "vary", "vase", "vast", "vats",
    "veal", "veep", "veer", "vees", "veil", "vein", "veld", "vend", "vent", "verb", "vert", "very", "vest", "veto", "vets", "vext",
    "vial", "vibe", "vice", "vide", "vids", "vied", "view", "vile", "vine", "vino", "visa", "vita", "viva", "vive", "void", "vole",
    "volt", "vote", "vows", "wack", "wade", "wadi", "wads", "waff", "waft", "wage", "wags", "waif", "wail", "wain", "wait", "wake",
    "walk", "wall", "wand", "wane", "wans", "want", "waps", "ward", "ware", "warm", "warn", "warp", "wars", "wart", "wary", "wash",
    "wasp", "wats", "watt", "wave", "wavy", "waxy", "ways", "weak", "wean", "wear", "webs", "weds", "weed", "week", "weel", "ween",
    "weep", "wees", "weir", "weld", "well", "went", "wept", "were", "west", "wets", "wham", "what", "when", "whew", "whey", "whim",
    "whip", "whir", "whit", "whiz", "whoa", "whom", "whop", "wick", "wide", "wife", "wigs", "wild", "wile", "will", "wilt", "wily",
    "wimp", "wind", "wine", "wing", "wink", "wino", "wins", "winy", "wipe", "wire", "wiry", "wise", "wish", "wisp", "wist", "with",
    "wits", "wive", "woes", "woke", "woks", "wolf", "womb", "wonk", "wons", "wont", "wood", "woof", "wool", "woos", "word", "wore",
    "work", "worm", "worn", "wort", "wots", "wove", "wows", "wrap", "wren", "writ", "wuss", "yack", "yaks", "yams", "yang", "yank",
    "yaps", "yard", "yarn", "yawl", "yawn", "yawp", "yaws", "yays", "yeah", "year", "yeas", "yeld", "yell", "yelp", "yeps", "yeti",
    "yipe", "yobs", "yoga", "yogi", "yoke", "yolk", "yond", "yore", "york", "your", "yous", "yowl", "yuck", "yurt", "zags", "zany",
    "zaps", "zeal", "zees", "zero", "zest", "zigs", "zinc", "zine", "zing", "zips", "zits", "zone", "zonk", "zoom", "zoos"];
let selectedWord2 = words2[Math.floor(Math.random() * words2.length)];

const words3 = ["aargh", "abash", "abate", "abbey", "abbot", "abhor", "abide", "abled", "abler", "ables", "abode", "abort", "about", "above", "abuse", "abuzz", "abyss", "ached", "aches", "achoo", "acids", "acidy", "acing", "acmes", "acnes", "acorn", "acres", "acrid", "acted", "actor", "acute", "adage", "adapt", "added", "adder", "addle", "adept", "adieu", "adios", "admit", "adobe", "adopt", "adore", "adorn", "adult", "aeons", "affix", "afoot", "afoul", "after", "again", "agent", "agile", "aging", "agism", "agist", "aglet", "aglow", "agony", "agree", "ahead", "aided", "aides", "ailed", "aimed", "aimer", "aired", "aisle", "alamo", "alarm", "album", "alder", "alert", "algae", "alibi", "alien", "align",
    "alike", "alive", "alley", "allot", "allow", "alloy", "aloft", "alone", "along", "aloof", "aloud", "alpha", "altar", "alter", "altos", "amass", "amaze", "amber", "amble", "amend", "amens", "amigo", "amiss", "among", "amour", "amped", "ample", "amply", "amuse", "angel", "anger", "angle", "anglo", "angry", "angst", "anime", "ankle", "annex", "annul", "anode", "antes", "antic", "antsy", "anvil", "aorta", "apart", "aphid", "aping", "apish", "apple", "apply", "apron", "aptly", "aquas", "arbor", "ardor", "arena", "argon", "argue", "arise", "armed", "armer", "armor", "aroma", "arose", "array", "arrow", "arses", "arson", "artsy", "ashed", "ashen", "ashes", "aside", "asked", "askew", "aspen", "assay",
    "asses", "asset", "atlas", "atoll", "atoms", "atomy", "atone", "attic", "audio", "audit", "auger", "aunts", "aunty", "aural", "avast", "avert", "avian", "avoid", "avows", "await", "awake", "award", "aware", "awash", "awful", "awoke", "axial", "axing", "axiom", "axles", "azure", "babel", "babes", "backs", "bacon", "baddy", "badge", "badly", "bagel", "baggy", "bails", "baits", "baize", "baked", "baker", "bakes", "balds", "baldy", "baled", "baler", "bales", "balks", "balky", "balls", "balms", "balmy", "balsa", "banal", "bands", "bandy", "baned", "banes", "bangs", "banjo", "banks", "barbs", "bards", "bared", "barer", "bares", "barfs", "barge", "barks", "barky", "barmy", "barns", "barny", "baron",
    "based", "bases", "basic", "basil", "basin", "basis", "basks", "batch", "bated", "bates", "bathe", "baths", "baton", "batty", "baulk", "bawdy", "bawls", "beach", "beads", "beady", "beaks", "beaky", "beams", "beamy", "beano", "beans", "beard", "bears", "beast", "beats", "beech", "beefs", "beefy", "beeps", "beers", "beery", "beets", "befit", "began", "begat", "begin", "begun", "beige", "being", "belay", "belch", "belle", "bells", "belly", "below", "belts", "bench", "bends", "bendy", "bento", "beret", "bergs", "berks", "berry", "berth", "beset", "bevel", "bezel", "bible", "bicep", "biddy", "bided", "bides", "bidet", "biers", "biggy", "bigot", "bijou", "biked", "biker", "bikes", "biles", "bilge",
    "bilks", "bills", "binds", "binge", "bingo", "biogs", "biped", "bipod", "birch", "birds", "birks", "biros", "birth", "bisks", "bison", "biter", "bites", "bitsy", "bitty", "blabs", "black", "blade", "blahs", "blame", "bland", "blank", "blare", "blast", "blaze", "bleak", "bleat", "bleed", "bleep", "blend", "bless", "blimp", "blind", "blink", "blips", "bliss", "blitz", "bloat", "blobs", "block", "blogs", "bloke", "blond", "blood", "bloom", "bloop", "blown", "blows", "blowy", "blued", "bluer", "blues", "bluey", "bluff", "blunt", "blurb", "blurs", "blurt", "blush", "board", "boars", "boast", "boats", "bobby", "boded", "bodes", "bogey", "boggy", "bogle", "bogus", "boils", "boing", "boink", "bolds",
    "bolts", "bombs", "bonds", "boned", "bones", "boney", "bongo", "bongs", "bonks", "bonus", "boobs", "booby", "boody", "booed", "boogy", "books", "booms", "boons", "boost", "booth", "boots", "booty", "booze", "boozy", "bored", "bores", "borne", "bosom", "bossy", "botch", "bough", "bound", "bouts", "bowed", "bowel", "bowls", "boxed", "boxer", "boxes", "bozos", "brace", "brags", "braid", "brail", "brain", "brake", "brand", "brans", "brash", "brass", "brats", "brave", "bravo", "brawl", "brawn", "brays", "braze", "bread", "break", "breed", "brews", "briar", "bribe", "brick", "bride", "brief", "brill", "brine", "bring", "brink", "brisk", "brits", "broad", "broil", "broke", "brood", "brook", "broom",
    "broth", "brown", "brows", "bruin", "brung", "brush", "bubba", "bucks", "buddy", "budge", "buffs", "buffy", "buggy", "bugle", "build", "built", "bulbs", "bulge", "bulks", "bulky", "bulls", "bully", "bumph", "bumps", "bumpy", "bunch", "bungs", "bunks", "bunny", "buoys", "burbs", "burgs", "burka", "burly", "burns", "burnt", "burps", "burrs", "burry", "burst", "bushy", "busks", "busts", "busty", "butch", "butts", "butty", "buxom", "buyer", "bylaw", "bytes", "cabal", "cabby", "cabin", "cable", "cache", "cacti", "caddy", "cadet", "cadre", "caged", "cages", "cagey", "caked", "cakes", "cakey", "calfs", "calls", "calms", "camel", "cameo", "camps", "campy", "canal", "candy", "caned", "caner", "canes",
    "canny", "canoe", "canon", "caped", "caper", "carbs", "cards", "cared", "carer", "cares", "cargo", "carol", "carps", "carry", "carte", "carts", "carve", "cased", "cases", "casks", "casts", "catch", "cater", "catty", "caulk", "cause", "caved", "caves", "cease", "cedar", "cello", "cells", "cents", "chaff", "chain", "chair", "chalk", "champ", "chant", "chaps", "charm", "chart", "chase", "chasm", "chats", "cheap", "cheat", "check", "cheek", "cheer", "chefs", "chemo", "chess", "chest", "chews", "chewy", "chick", "chide", "chief", "child", "chill", "chimb", "chime", "chimp", "china", "chino", "chins", "chips", "chirp", "chits", "chive", "chivy", "choir", "choke", "chomp", "chops", "chord", "chore",
    "chows", "chuck", "chuff", "chugs", "chump", "chums", "chunk", "churn", "chute", "cider", "cigar", "circa", "cists", "cited", "cites", "civic", "civil", "civvy", "clack", "clads", "claim", "clamp", "clams", "clang", "clank", "clans", "claps", "clash", "clasp", "class", "claws", "clays", "clean", "clear", "cleat", "clefs", "clerk", "click", "cliff", "climb", "cling", "clink", "clips", "cloak", "clock", "clogs", "clomp", "clone", "clonk", "clops", "close", "cloth", "clots", "cloud", "clout", "clove", "clown", "cloys", "clubs", "cluck", "clued", "clues", "clump", "clung", "clunk", "coach", "coals", "coast", "coats", "cobra", "cocks", "cocky", "cocoa", "coded", "coder", "codes", "coeds", "coifs",
    "coins", "coked", "cokes", "colds", "coles", "colon", "color", "colts", "combo", "combs", "comet", "comfy", "comic", "comma", "comps", "conch", "condo", "coned", "cones", "congo", "conks", "cooch", "cooed", "cooks", "cools", "cooly", "coops", "coopt", "coped", "copse", "coral", "cords", "cored", "corer", "cores", "corks", "corky", "corns", "corny", "corps", "corse", "cosey", "costs", "coted", "cotes", "couch", "cough", "could", "count", "coupe", "coups", "court", "coved", "coven", "cover", "coves", "covet", "cowed", "cower", "cowls", "coxed", "coxes", "coyly", "cozey", "crabs", "crack", "craft", "crags", "cramp", "crams", "crane", "crank", "craps", "crash", "crass", "crate", "crave", "crawl",
    "craze", "crazy", "creak", "cream", "creds", "creed", "creek", "creep", "creme", "crepe", "crept", "crest", "crews", "cribs", "crick", "cried", "cries", "crime", "crimp", "crisp", "croak", "crock", "crocs", "croft", "crone", "crony", "crook", "crops", "cross", "crowd", "crown", "crows", "cruds", "cruel", "crumb", "crush", "crust", "crypt", "cubby", "cubed", "cubes", "cubic", "cubit", "cuffs", "cuing", "cults", "cumin", "cupid", "cuppa", "curbs", "curds", "cured", "curer", "cures", "curio", "curls", "curly", "currs", "curry", "curse", "curve", "curvy", "cushy", "cusps", "cuter", "cutes", "cutey", "cutie", "cutin", "cyans", "cyber", "cycle", "cysts", "czars", "daddy", "daily", "dairy", "daisy",
    "dales", "dally", "dames", "damns", "damps", "dance", "dandy", "dangs", "dared", "dares", "darks", "darns", "darts", "dashi", "dated", "dater", "dates", "daubs", "daunt", "dawns", "dazed", "dazes", "deals", "dealt", "deans", "dears", "deary", "death", "debit", "debts", "debug", "debut", "decaf", "decal", "decay", "decks", "decor", "decoy", "decry", "deeds", "deems", "deers", "deets", "defer", "defog", "deify", "deity", "delay", "delta", "delve", "demon", "demos", "denim", "dents", "depot", "depth", "derby", "derry", "desks", "detox", "devil", "dewed", "dials", "diary", "diced", "dicer", "dices", "dicey", "dicks", "dicky", "diets", "digit", "diked", "dikes", "dildo", "dimer", "dimes", "dimly",
    "dined", "diner", "dines", "dinge", "dingo", "dings", "dingy", "dinky", "dinos", "dints", "diode", "dippy", "dipso", "dirge", "dirks", "dirts", "dirty", "disco", "discs", "dishy", "disks", "ditch", "ditsy", "ditto", "ditty", "ditzy", "divan", "divas", "dived", "diver", "dives", "divot", "dizzy", "djinn", "doats", "dobby", "docks", "dodge", "dodgy", "dodos", "doers", "doffs", "doggy", "dogma", "doily", "doing", "doled", "doles", "dolls", "dolly", "dolts", "domed", "domes", "dongs", "donor", "donut", "dooms", "doors", "doozy", "doped", "doper", "dopey", "dorks", "dorky", "dorms", "dosed", "doses", "doted", "doter", "dotes", "dotty", "doubt", "dough", "douse", "doves", "dowdy", "downs", "downy",
    "dowry", "dozed", "dozen", "dozer", "dozes", "drabs", "draft", "drags", "drain", "drake", "drama", "drams", "drank", "drape", "drawl", "drawn", "draws", "dread", "dream", "dregs", "dress", "dribs", "dried", "drier", "dries", "drift", "drill", "drink", "drips", "drive", "droid", "droll", "drone", "drool", "droop", "drops", "drove", "drown", "drubs", "drugs", "druid", "drums", "drunk", "dryer", "dryly", "duals", "ducks", "ducky", "ducts", "dudes", "duels", "duets", "dukes", "dulls", "dumps", "dunce", "dunes", "dungs", "dunks", "duped", "dupes", "dusks", "dusky", "dusts", "dusty", "dutch", "duvet", "dwarf", "dweeb", "dwell", "dwelt", "dyers", "dying", "dyked", "dykes", "eager", "eagle", "eared",
    "earls", "early", "earns", "earth", "eased", "easel", "eases", "eaten", "eater", "eaved", "eaves", "ebbed", "ebony", "ebook", "eched", "eches", "echos", "edged", "edges", "edict", "edify", "edits", "eerie", "eight", "eject", "elate", "elbow", "elder", "elect", "elegy", "elite", "elope", "elude", "elves", "email", "embed", "ember", "emits", "empty", "enact", "enate", "ended", "ender", "endow", "enema", "enemy", "enjoy", "ensue", "enter", "entry", "envoy", "enzym", "epoch", "epoxy", "equal", "equip", "erase", "erode", "error", "erupt", "essay", "ethic", "ethos", "euros", "evade", "evens", "event", "every", "evict", "evils", "evoke", "exact", "exalt", "exams", "excel", "execs", "exert", "exile",
    "exist", "exits", "expat", "expel", "expos", "extol", "extra", "exude", "eying", "fable", "faced", "faces", "facet", "facia", "facts", "faded", "fader", "fades", "faery", "fails", "faint", "fairs", "fairy", "faith", "faked", "faker", "fakes", "falls", "false", "famed", "fames", "fancy", "fangs", "fanny", "farce", "farms", "farts", "fasts", "fatal", "fated", "fates", "fault", "fauna", "favor", "fawns", "fawny", "faxed", "faxes", "fazed", "fazes", "fears", "feast", "feats", "fecal", "feces", "fedex", "feeds", "feels", "feign", "feint", "fella", "felon", "felts", "femme", "femur", "fence", "fends", "feral", "ferns", "ferry", "fests", "fetal", "fetch", "fetes", "fetid", "fetus", "feuds", "feued",
    "fever", "fewer", "fiber", "fibre", "fiche", "fiefs", "field", "fiend", "fiery", "fifth", "fifty", "fight", "filed", "filer", "files", "filet", "fille", "fills", "filly", "films", "filmy", "filth", "final", "finds", "fined", "finer", "fines", "fired", "firer", "fires", "firms", "first", "firth", "fishy", "fists", "fiver", "fives", "fixed", "fixer", "fixes", "fizzy", "fjeld", "fjord", "flabs", "flack", "flags", "flail", "flair", "flake", "flaky", "flame", "flank", "flaps", "flare", "flash", "flask", "flats", "flaws", "flays", "fleas", "fleck", "flees", "fleet", "flesh", "flick", "flied", "flier", "flies", "fling", "flint", "flips", "flirt", "flits", "float", "flock", "flogs", "flood", "floor",
    "flops", "flora", "floss", "flour", "flout", "flown", "flows", "fluff", "fluid", "fluke", "flume", "flung", "flunk", "flush", "flute", "flyby", "flyer", "foals", "foams", "foamy", "focal", "focus", "foggy", "foils", "foist", "folds", "folic", "folio", "folks", "folky", "fondu", "fonts", "foods", "fools", "foots", "footy", "foray", "force", "fords", "forge", "forgo", "forks", "forky", "forms", "forte", "forth", "forts", "forty", "fouls", "found", "fount", "fours", "fowls", "foxed", "foxes", "foyer", "frags", "frail", "frame", "frank", "fraud", "frays", "freak", "freed", "freer", "frees", "fresh", "frets", "friar", "fried", "frier", "fries", "frigs", "frill", "frisk", "fritz", "frizz", "froes",
    "frogs", "front", "frost", "froth", "frown", "froze", "fruit", "frump", "fryer", "fubar", "fucus", "fudge", "fuels", "fugal", "fully", "fumed", "fumes", "funds", "fungi", "funks", "funky", "funny", "furls", "furry", "fused", "fuses", "fussy", "futon", "fuzed", "fuzzy", "gable", "gaffe", "gaffs", "gaged", "gages", "gaily", "gains", "gaits", "galas", "gales", "galls", "gally", "galop", "gamed", "gamer", "games", "gamma", "gammy", "gangs", "gaped", "gapes", "gappy", "garbs", "garda", "gases", "gasps", "gassy", "gasts", "gated", "gates", "gator", "gaudy", "gauge", "gaunt", "gauze", "gavel", "gawks", "gawky", "gawps", "gayly", "gazed", "gazes", "gears", "gecko", "geeks", "geeky", "geese", "gelds",
    "genie", "genre", "gents", "genus", "geode", "germs", "getup", "ghast", "ghost", "ghoul", "giant", "giddy", "gifts", "gilds", "gills", "gilts", "gimps", "gimpy", "gipsy", "girls", "girly", "girth", "gismo", "gists", "given", "giver", "gives", "gizmo", "glade", "gland", "glare", "glary", "glass", "glaze", "gleam", "glean", "glens", "glide", "glitz", "gloam", "gloat", "globe", "gloom", "glory", "gloss", "glove", "glows", "glued", "gluer", "glues", "gluey", "glugs", "glums", "gluon", "glute", "glyph", "gnarl", "gnash", "gnats", "gnaws", "gnome", "goads", "goals", "goats", "godly", "goers", "going", "golds", "golem", "golfs", "golly", "goner", "gongs", "goods", "goody", "gooey", "goofs", "goofy",
    "gooky", "goons", "goopy", "goose", "gored", "gores", "gorge", "gorms", "goths", "gouge", "gourd", "gouts", "gowns", "grabs", "grace", "grade", "grads", "graft", "grail", "grain", "gramp", "grams", "grand", "grans", "grant", "grape", "graph", "grasp", "grass", "grate", "grave", "gravy", "grays", "graze", "great", "greed", "greek", "green", "greet", "greys", "grids", "grief", "grift", "grill", "grime", "grimy", "grind", "grins", "gripe", "grips", "grist", "grits", "groan", "grogs", "groin", "groom", "grope", "gross", "group", "grove", "growl", "grown", "grows", "grubs", "gruel", "gruff", "grump", "grunt", "guano", "guard", "guava", "guess", "guest", "guide", "guild", "guile", "guilt", "gulag",
    "gulfs", "gulls", "gully", "gulps", "gumbo", "gummy", "gunky", "guppy", "gusto", "gusts", "gusty", "gutsy", "gypsy", "habit", "hacks", "haded", "hades", "haiku", "hails", "hairs", "hairy", "halal", "haled", "haler", "hales", "hallo", "halls", "halts", "halve", "hammy", "hands", "handy", "hangs", "hanky", "happy", "hardy", "hared", "harem", "hares", "harks", "harms", "harps", "harpy", "harry", "harsh", "harts", "haste", "hasty", "hatch", "hated", "hater", "hates", "hauls", "haunt", "haven", "haves", "havoc", "hawks", "hazed", "hazel", "hazes", "heads", "heady", "heals", "heaps", "heapy", "heard", "hears", "heart", "heath", "heats", "heave", "heavy", "hecks", "hedge", "heeds", "heels", "hefts",
    "hefty", "heigh", "heils", "heirs", "heist", "helio", "helix", "hello", "hells", "helms", "helps", "hemps", "hence", "henge", "herbs", "herby", "herds", "heres", "heron", "heros", "hertz", "hewed", "hexed", "hexes", "hicks", "hided", "hider", "hides", "highs", "hight", "hijab", "hiked", "hiker", "hikes", "hills", "hilly", "hilts", "hinds", "hinge", "hinky", "hints", "hippo", "hippy", "hired", "hirer", "hires", "hissy", "hitch", "hived", "hives", "hoard", "hobby", "hobos", "hocks", "hocus", "hoist", "hokey", "hokum", "holds", "holed", "holes", "holey", "homed", "homer", "homes", "homey", "honed", "hones", "honey", "honks", "honor", "hooch", "hoods", "hoody", "hoofs", "hooka", "hooks", "hooky",
    "hoops", "hoots", "hoped", "hoper", "hopes", "horah", "horns", "horny", "horse", "hosed", "hoser", "hoses", "hosey", "hosts", "hotel", "hotly", "hound", "hours", "house", "hovel", "hover", "howdy", "howls", "hubby", "hucks", "huffs", "huffy", "huger", "hulks", "hulky", "human", "humid", "humor", "humps", "humpy", "humus", "hunch", "hunks", "hunky", "hunts", "hurls", "hurly", "hurry", "hurts", "husks", "husky", "hussy", "hutch", "hydra", "hydro", "hyena", "hymen", "hymns", "hyped", "hyper", "hypes", "icier", "icily", "icing", "icons", "ideal", "ideas", "idiom", "idiot", "idled", "idler", "idles", "idols", "idyll", "idyls", "igloo", "ikons", "iliad", "ilium", "image", "imbed", "imbue", "imply",
    "incur", "index", "indie", "inept", "inert", "infer", "infra", "ingot", "inked", "inker", "inlay", "inlet", "inner", "input", "inset", "inter", "intro", "iodin", "ionic", "iotas", "irate", "irish", "irked", "irons", "irony", "isles", "islet", "issue", "itchy", "items", "ivory", "jacks", "jaded", "jades", "jager", "jails", "jambs", "jammy", "japan", "japed", "japes", "jaunt", "jawed", "jazzy", "jeans", "jeeps", "jeers", "jells", "jelly", "jerks", "jerky", "jests", "jetty", "jewel", "jibed", "jibes", "jiffs", "jiffy", "jiggy", "jihad", "jilts", "jimmy", "jingo", "jinks", "jisms", "jived", "jiver", "jives", "jivey", "jocks", "joeys", "johns", "joins", "joint", "joist", "joked", "joker", "jokes",
    "jokey", "jolly", "jolts", "joule", "joust", "jowls", "jowly", "joyed", "judas", "judge", "judos", "juice", "juicy", "juked", "jukes", "jumbo", "jumps", "jumpy", "junks", "junky", "juror", "justs", "kabab", "kafir", "kales", "kanes", "kappa", "kaput", "karma", "karts", "kayak", "kazoo", "kebab", "keels", "keeps", "kelps", "kempt", "kerbs", "kerry", "keyed", "khaki", "kicks", "kicky", "kiddo", "kiddy", "kills", "kilns", "kilos", "kilts", "kinds", "kings", "kinks", "kinky", "kiosk", "kissy", "kited", "kites", "kitty", "kiwis", "klutz", "knack", "knave", "knead", "kneed", "kneel", "knees", "knell", "knelt", "knife", "knits", "knobs", "knock", "knoll", "knots", "known", "knows", "koala", "kolas",
    "kooks", "kooky", "korma", "kraft", "kudos", "label", "labia", "labor", "laced", "lacer", "laces", "lacey", "lacks", "laded", "laden", "lades", "ladle", "lager", "laker", "lakes", "lamas", "lambs", "lamed", "lamer", "lames", "lamps", "lance", "lands", "lanes", "lanky", "lapel", "lapis", "lapse", "larch", "lards", "lardy", "lares", "large", "larks", "larva", "lased", "laser", "lases", "lasso", "lasts", "latch", "lated", "laten", "later", "latex", "lathe", "latte", "laugh", "lavas", "lawns", "laxes", "layed", "layer", "lazed", "lazes", "leach", "leads", "leafs", "leafy", "leaks", "leaky", "leans", "leant", "leaps", "leapt", "learn", "lears", "leary", "lease", "leash", "least", "leave", "ledge",
    "leech", "leeks", "leers", "leery", "lefts", "lefty", "legal", "leggy", "legit", "lemon", "lemur", "lends", "lense", "letup", "leuds", "levee", "level", "lever", "levis", "liars", "libel", "libra", "licks", "lifts", "light", "liked", "liken", "likes", "lilac", "lilos", "lilts", "limas", "limbs", "limed", "limes", "limey", "limit", "limos", "limps", "lined", "linen", "liner", "lines", "lingo", "links", "lints", "lions", "lipid", "lippy", "lisps", "lists", "lithe", "litho", "litre", "lived", "liven", "liver", "lives", "livid", "llama", "loads", "loafs", "loams", "loans", "lobby", "lobed", "lobes", "local", "locks", "locum", "locus", "lodge", "lofts", "lofty", "logic", "login", "loins", "lolly",
    "loner", "longs", "loofa", "looks", "looms", "loons", "loony", "loops", "loopy", "loose", "loots", "loper", "lords", "lores", "lorry", "loser", "loses", "lotto", "lotus", "lough", "louse", "lousy", "louts", "loved", "lover", "loves", "lowed", "lower", "lowly", "loyal", "lubed", "lubes", "lucid", "lucks", "lucky", "ludes", "luged", "luger", "lulls", "lumps", "lumpy", "lunar", "lunch", "lunge", "lungs", "lupus", "lurch", "lured", "lurer", "lures", "lurid", "lurks", "lusts", "lusty", "luted", "lutes", "lycee", "lycra", "lying", "lymph", "lynch", "lyric", "macaw", "maces", "macho", "machs", "macks", "macro", "madam", "madly", "mafia", "mages", "magic", "magma", "magot", "maids", "mails", "maims",
    "mains", "maize", "major", "maker", "makes", "males", "malls", "malms", "malts", "malty", "mamas", "mamba", "mambo", "mamma", "mammy", "maned", "manes", "manga", "mange", "mango", "mangy", "mania", "manic", "manly", "manna", "manor", "maple", "mares", "maria", "marks", "marry", "marsh", "marts", "masks", "mason", "masse", "massy", "masts", "match", "mated", "mates", "matey", "maths", "matte", "mawed", "maxed", "maxes", "maxim", "mayan", "maybe", "mayor", "mazed", "mazer", "mazes", "meads", "meals", "mealy", "means", "meant", "meany", "meath", "meats", "meaty", "mecca", "medal", "media", "medic", "melee", "melon", "melts", "melty", "memes", "memos", "mends", "mensa", "meows", "merch", "mercs",
    "mercy", "merde", "merge", "merit", "merry", "meshy", "messy", "metal", "meter", "metre", "metro", "mewed", "miaow", "micra", "micro", "midge", "midst", "miffs", "miffy", "might", "miked", "mikes", "milch", "milds", "miler", "miles", "milks", "milky", "mimed", "mimic", "mince", "minds", "mined", "miner", "mines", "mingy", "minis", "minks", "minor", "mints", "minty", "minus", "mired", "mirth", "miser", "mises", "missy", "mists", "misty", "mites", "mitre", "mixed", "mixer", "mixes", "mixup", "moans", "moats", "mocha", "mocks", "modal", "model", "modem", "modes", "modus", "moggy", "mogul", "moist", "mojos", "mokes", "molar", "molds", "moldy", "moles", "molly", "momma", "mommy", "money", "monks",
    "month", "moods", "moody", "moors", "moose", "moped", "moper", "mopes", "mopey", "moral", "moron", "morph", "morse", "moted", "motel", "motes", "moths", "motif", "motor", "motto", "mould", "mound", "mount", "mourn", "mouse", "mousy", "mouth", "moved", "mover", "moves", "movie", "mowed", "mower", "moxie", "mucho", "mucks", "mucky", "muddy", "muffs", "muggs", "muggy", "mulch", "muled", "mules", "mulls", "mummy", "mumps", "mural", "murky", "mused", "muses", "mushy", "music", "musks", "musky", "musty", "muted", "mutes", "myopy", "myths", "naans", "nacho", "nadas", "naffs", "nails", "naive", "naked", "named", "names", "nanas", "nance", "nancy", "nanny", "napes", "nappy", "narcs", "narky", "nasal",
    "nasty", "naval", "navel", "nazis", "nears", "necks", "needs", "needy", "neigh", "neons", "nerds", "nerdy", "nerve", "nervy", "nests", "never", "newer", "newly", "newsy", "newts", "nexus", "nicer", "niche", "nicks", "niece", "nifty", "night", "nines", "ninja", "ninth", "nippy", "nitro", "nitty", "nixed", "nixes", "nobby", "noble", "nobly", "noddy", "nodes", "noels", "noise", "noisy", "nomad", "nonce", "nooks", "noose", "north", "nosed", "noses", "nosey", "notch", "noted", "notes", "nouns", "novel", "noway", "nubia", "nuder", "nudes", "nudge", "nudie", "nuked", "nukes", "nulls", "numbs", "nurse", "nutty", "nylon", "nymph", "oaken", "oared", "oasis", "oaten", "oater", "oaths", "obese", "obeys",
    "oboes", "occur", "ocean", "ochre", "odder", "oddly", "odeon", "odium", "odors", "odour", "offal", "offed", "offer", "often", "ogler", "ogles", "ogres", "oiled", "oiler", "oinks", "okays", "okras", "olden", "older", "oldie", "olive", "ombre", "omega", "omens", "omits", "onion", "onset", "oomph", "oozed", "oozes", "opals", "opens", "opera", "opium", "opted", "optic", "orals", "orbed", "orbit", "orcas", "order", "organ", "other", "otter", "ought", "ounce", "ousts", "outdo", "outed", "outer", "ovals", "ovary", "ovate", "ovens", "overs", "overt", "ovoid", "ovule", "owing", "owlet", "owned", "owner", "oxbow", "oxide", "oxids", "ozone", "paced", "pacer", "paces", "packs", "pacts", "paddy", "padre",
    "pagan", "paged", "pager", "pages", "pails", "pains", "paint", "pairs", "paled", "paler", "pales", "palls", "palms", "palsy", "panda", "paned", "panel", "panes", "pangs", "panic", "pansy", "panto", "pants", "panty", "papas", "paper", "paras", "parch", "pared", "parer", "pares", "parka", "parks", "parle", "parma", "parol", "parry", "parse", "parts", "party", "pases", "pasta", "paste", "pasts", "pasty", "patch", "pated", "paten", "paths", "patio", "patsy", "patty", "pause", "paved", "paver", "paves", "pawns", "payed", "payee", "payer", "payor", "peace", "peach", "peaks", "peaky", "pearl", "pears", "peats", "pecan", "pecks", "pecky", "pedal", "pedro", "peeks", "peels", "peeps", "peers", "peeve",
    "pelts", "penal", "pence", "pends", "penne", "penny", "peony", "peppy", "perch", "peril", "perks", "perky", "perms", "perps", "perse", "pervs", "pesky", "pesto", "pests", "petal", "peter", "petit", "petty", "phase", "phial", "phone", "phono", "phony", "photo", "piano", "picks", "picky", "piece", "piety", "piggy", "pigmy", "piked", "piker", "pikes", "pilau", "piled", "piles", "pills", "pilot", "pimps", "pinch", "pined", "pines", "pings", "pinks", "pinky", "pinot", "pinto", "pints", "pious", "piped", "piper", "pipes", "pipet", "pique", "pissy", "piste", "pitch", "pivot", "pixel", "pixie", "pizza", "place", "plain", "plane", "plank", "plans", "plant", "plasm", "plate", "playa", "plays", "plaza",
    "plead", "pleas", "pleat", "plebs", "plied", "plier", "plies", "plink", "plods", "plonk", "plops", "plots", "plows", "ploys", "pluck", "plugs", "plumb", "plume", "plump", "plums", "plush", "pluto", "plyer", "poach", "pocks", "podgy", "poems", "poets", "point", "poise", "poked", "poker", "pokes", "pokey", "polar", "poled", "poles", "polio", "polka", "polls", "polos", "polyp", "polys", "pomps", "ponds", "pongs", "pooch", "pooed", "poofs", "poofy", "poohs", "pools", "poops", "poppy", "porch", "pored", "pores", "porks", "porky", "porns", "posed", "poser", "poses", "posse", "posts", "potty", "pouch", "pouff", "pound", "pours", "pouts", "pouty", "power", "poxed", "prams", "prang", "prank", "prawn",
    "prays", "preen", "preps", "press", "preys", "price", "pricy", "pride", "pried", "pries", "prima", "prime", "primo", "primp", "print", "prior", "prise", "prism", "privy", "prize", "probe", "prods", "profs", "promo", "proms", "prone", "prong", "proof", "props", "prose", "proud", "prove", "prowl", "prows", "proxy", "prude", "prune", "psalm", "psych", "pubes", "pubic", "pubis", "pucks", "pudgy", "puffs", "puffy", "puked", "pukes", "pulls", "pulps", "pulpy", "pulse", "pumps", "punch", "punks", "punky", "punny", "punto", "punts", "pupil", "puppy", "puree", "purer", "purge", "purrs", "purse", "pushy", "putts", "putty", "pygmy", "pylon", "pyrex", "pyros", "quack", "quads", "quaff", "quail", "quake",
    "quaky", "quale", "qualm", "quant", "quark", "quart", "quash", "quasi", "quays", "qubit", "queen", "quell", "query", "quest", "queue", "quick", "quids", "quiet", "quiff", "quill", "quilt", "quins", "quint", "quips", "quirk", "quite", "quits", "quota", "quote", "rabbi", "rabid", "raced", "racer", "races", "racks", "radar", "radio", "radon", "rafts", "raged", "rages", "raids", "rails", "rains", "rainy", "raise", "raked", "raker", "rakes", "rally", "ramen", "ramps", "ranch", "randy", "range", "rangy", "rants", "raped", "raper", "rapid", "rared", "rarer", "rares", "rased", "raser", "rases", "rasps", "raspy", "ratan", "ratch", "rated", "rater", "rates", "ratio", "ratty", "raved", "ravel", "raven",
    "raver", "raves", "rayon", "razed", "razer", "razor", "reach", "react", "reads", "ready", "realm", "reals", "reams", "reaps", "rearm", "rears", "rebar", "rebel", "rebus", "rebut", "rebuy", "recap", "recon", "redos", "reeds", "reedy", "reefs", "reeks", "reels", "refer", "refit", "regal", "rehab", "reign", "reins", "relax", "relay", "relic", "remix", "renal", "rends", "renew", "rents", "repay", "repeg", "repel", "reply", "repot", "rerun", "reset", "resin", "rests", "retch", "retro", "retry", "reuse", "revel", "revue", "rhino", "rhyme", "riced", "ricer", "rices", "ricin", "rider", "rides", "ridge", "riffs", "rifle", "rifts", "right", "rigid", "rigor", "riled", "riles", "rimed", "rinds", "rings",
    "rinks", "rinse", "riots", "riped", "ripen", "riper", "ripes", "risen", "riser", "rises", "risks", "risky", "rites", "ritzy", "rival", "riven", "river", "rivet", "roach", "roads", "roams", "roars", "roast", "robed", "robes", "robin", "robot", "rocks", "rocky", "rodeo", "roger", "rogue", "rolls", "roman", "romeo", "romps", "roofs", "rooks", "rooky", "rooms", "roomy", "roost", "roots", "roped", "ropes", "ropey", "rosed", "roses", "rotas", "rotes", "rotor", "rouge", "rough", "round", "roust", "route", "roved", "rover", "roves", "rowdy", "rowed", "rower", "royal", "rubby", "rubel", "rubes", "rucks", "ruddy", "ruder", "ruffs", "rugby", "ruing", "ruins", "ruled", "ruler", "rules", "rumps", "runes",
    "rungs", "runny", "runts", "rupee", "rural", "rusks", "rusts", "rusty", "saber", "sable", "sabre", "sacks", "sadly", "safer", "safes", "saggy", "sails", "saint", "salad", "sales", "salon", "salts", "salty", "salve", "salvo", "samba", "sands", "sandy", "saner", "sappy", "saree", "sarge", "sarky", "sasin", "sassy", "satay", "sated", "sates", "satin", "satyr", "sauce", "saucy", "sauna", "saute", "saved", "saver", "saves", "savin", "savor", "savoy", "savvy", "sawed", "scabs", "scags", "scald", "scale", "scalp", "scaly", "scamp", "scams", "scans", "scant", "scape", "scare", "scarf", "scarp", "scars", "scart", "scary", "scene", "scent", "scold", "scone", "scoop", "scoot", "scope", "score", "scorn",
    "scots", "scour", "scout", "scowl", "scram", "scrap", "scree", "scrim", "scrub", "scrum", "scuba", "scuds", "scuff", "sculk", "scull", "scums", "seals", "seams", "seamy", "sears", "seats", "sects", "sedan", "seeds", "seedy", "seeks", "seels", "seems", "seeps", "seers", "segue", "seize", "selfs", "sells", "semen", "semis", "sends", "sense", "sepia", "serfs", "serum", "serve", "servo", "setup", "seven", "sever", "sewed", "sewer", "sexed", "sexes", "sexts", "shack", "shade", "shady", "shaft", "shags", "shake", "shaky", "shale", "shall", "shalt", "shame", "shams", "shank", "shape", "shard", "share", "shark", "sharp", "shave", "shawl", "sheaf", "shear", "sheds", "sheen", "sheep", "sheer", "sheet",
    "sheik", "shelf", "shell", "shied", "shier", "shies", "shift", "shill", "shims", "shine", "shins", "shiny", "ships", "shire", "shirk", "shirt", "shoal", "shock", "shoed", "shoes", "shone", "shook", "shoot", "shops", "shore", "shorn", "short", "shots", "shout", "shown", "shows", "showy", "shred", "shrew", "shrub", "shrug", "shuck", "shuns", "shush", "shuts", "shyly", "sicko", "sided", "sides", "sidle", "siege", "sieve", "sifts", "sighs", "sight", "sigma", "signs", "sikes", "silks", "silky", "silly", "silos", "silts", "silty", "simps", "since", "sinew", "sings", "sinks", "sinus", "siped", "sired", "siren", "sires", "sissy", "sitar", "sited", "sites", "situp", "siver", "sixes", "sixth", "sixty",
    "sized", "sizer", "sizes", "skank", "skate", "skeed", "skeet", "skelp", "skews", "skids", "skied", "skier", "skies", "skiff", "skill", "skimp", "skims", "skins", "skint", "skirt", "skits", "skull", "skunk", "skyed", "slabs", "slack", "slags", "slain", "slams", "slang", "slant", "slaps", "slash", "slate", "slats", "slave", "slays", "sleds", "sleek", "sleep", "sleet", "slept", "slews", "slice", "slick", "slide", "slime", "slims", "slimy", "sling", "slink", "slips", "slits", "slobs", "slogs", "slope", "slops", "slosh", "sloth", "slots", "slows", "slugs", "slump", "slums", "slung", "slunk", "slurp", "slurs", "slush", "sluts", "slyly", "smack", "small", "smart", "smash", "smear", "smell", "smelt",
    "smile", "smirk", "smite", "smock", "smogs", "smoke", "smoky", "smote", "smush", "smuts", "snack", "snafu", "snags", "snail", "snake", "snaky", "snaps", "snare", "snarf", "snark", "snarl", "sneak", "sneer", "snide", "sniff", "snipe", "snips", "snobs", "snogs", "snoop", "snore", "snort", "snots", "snout", "snows", "snowy", "snubs", "snuff", "soaks", "soaps", "soapy", "soars", "sober", "socks", "sodas", "sofas", "softs", "softy", "soggy", "soils", "solar", "soled", "soles", "solid", "solos", "solus", "solve", "sonar", "songs", "sonic", "sooth", "soots", "sooty", "soppy", "sored", "sorer", "sores", "sorry", "sorts", "souls", "sound", "soups", "soupy", "sours", "south", "sowed", "sower", "space",
    "spacy", "spade", "spake", "spall", "spams", "spank", "spans", "spare", "spark", "spars", "spasm", "spate", "spawn", "speak", "spear", "speck", "specs", "speed", "speer", "spell", "spelt", "spend", "spent", "sperm", "spice", "spicy", "spied", "spies", "spike", "spiky", "spill", "spilt", "spine", "spins", "spiny", "spire", "spirt", "spite", "splay", "split", "spoil", "spoke", "spoof", "spook", "spoon", "spore", "sport", "spots", "spout", "spray", "spree", "sprig", "sprit", "spunk", "spurn", "spurs", "spurt", "squab", "squad", "squat", "squib", "squid", "stabs", "stack", "staff", "stage", "stags", "stain", "stair", "stake", "stale", "stalk", "stall", "stamp", "stand", "stank", "stare", "stark",
    "stars", "start", "stash", "state", "stats", "stave", "stays", "stead", "steak", "steal", "steam", "steed", "steel", "steep", "steer", "stent", "steps", "stern", "stews", "stewy", "stich", "stick", "stiff", "still", "stilt", "sting", "stint", "stipe", "stirs", "stoat", "stock", "stogy", "stoic", "stoke", "stole", "stomp", "stone", "stony", "stood", "stool", "stoop", "stops", "store", "stork", "storm", "story", "stout", "stove", "strap", "straw", "stray", "strep", "strew", "strip", "strop", "strut", "stuck", "studs", "study", "stuff", "stump", "stung", "stuns", "stunt", "style", "suave", "sucks", "sudsy", "suede", "sugar", "suing", "suits", "sulks", "sully", "sumos", "sunny", "super", "supes",
    "surfs", "surge", "surly", "sushi", "swabs", "swags", "swamp", "swank", "swans", "swaps", "swarm", "swath", "swats", "sways", "swear", "sweat", "swede", "sweep", "sweet", "swell", "swept", "swift", "swill", "swims", "swine", "swing", "swipe", "swirl", "swish", "swiss", "swoon", "swoop", "sword", "swore", "sworn", "swots", "swung", "sykes", "synch", "syncs", "synth", "syrup", "tabby", "table", "taboo", "tacit", "tacks", "tacky", "tacos", "tacts", "tails", "taint", "taken", "taker", "takes", "takin", "talcs", "tales", "talks", "talky", "tally", "talon", "tamed", "tames", "tango", "tangs", "tangy", "tanks", "tapas", "taped", "taper", "tapes", "tapir", "tardy", "tarot", "tarps", "tarry", "tarts",
    "tarty", "tasks", "taste", "tasty", "tatty", "taunt", "taupe", "tawed", "tawny", "taxed", "taxer", "taxes", "taxis", "teach", "teaks", "teals", "teams", "tears", "teary", "tease", "teats", "techy", "teddy", "teems", "teens", "teeny", "teeth", "teles", "telex", "tells", "telly", "tempo", "temps", "tempt", "tends", "tenor", "tense", "tenth", "tents", "tepid", "terms", "terry", "terse", "tesla", "tests", "testy", "texas", "texts", "thank", "thaws", "theft", "their", "theme", "thens", "there", "these", "theta", "thick", "thief", "thigh", "thing", "think", "thins", "third", "thong", "thorn", "those", "three", "threw", "throb", "throe", "throw", "thuds", "thugs", "thumb", "thump", "thunk", "thyme",
    "tiara", "tibia", "ticks", "tidal", "tides", "tiers", "tiffs", "tiger", "tight", "tikes", "tikka", "tiled", "tiler", "tiles", "tills", "tilts", "timed", "timer", "times", "timid", "tines", "tinge", "tings", "tints", "tippy", "tipsy", "tired", "tires", "titan", "title", "titty", "tizzy", "toads", "toady", "toast", "today", "toffs", "togas", "toils", "toked", "token", "toker", "tokes", "toled", "tolls", "tombs", "tonal", "toned", "toner", "tones", "tongs", "tonic", "tools", "toons", "tooth", "toots", "topic", "torch", "torcs", "torso", "torte", "torts", "total", "toted", "totem", "totes", "touch", "tough", "tours", "touts", "towed", "towel", "tower", "towns", "towny", "toxic", "toxin", "toyed",
    "trace", "track", "tract", "trade", "trail", "train", "trait", "tramp", "trams", "trans", "traps", "trash", "trawl", "trays", "tread", "treat", "trees", "treks", "trend", "triad", "trial", "tribe", "trice", "trick", "tried", "trier", "tries", "trike", "trill", "trims", "trios", "tripe", "trips", "trite", "troll", "troop", "trope", "trots", "trout", "trove", "truce", "truck", "truer", "truly", "trunk", "truss", "trust", "truth", "tryst", "tsars", "tubas", "tubby", "tubed", "tuber", "tubes", "tucks", "tuffs", "tulip", "tummy", "tumor", "tumps", "tunas", "tuned", "tuner", "tunes", "tunic", "turbo", "turds", "turfs", "turks", "turns", "tushy", "tusks", "tutor", "tuxes", "twain", "twang", "twats",
    "tweak", "tweed", "tween", "tweet", "twerp", "twice", "twigs", "twine", "twins", "twirl", "twirp", "twist", "twits", "twixt", "tyers", "tying", "tykes", "tynes", "typed", "types", "typos", "tyred", "tyres", "tzars", "udder", "ulcer", "ultra", "umami", "umber", "umbra", "unarm", "unbox", "uncle", "under", "undue", "unfit", "unify", "union", "unite", "units", "unity", "unpin", "untie", "until", "unzip", "upend", "upped", "upper", "upset", "urban", "urged", "urger", "urges", "urine", "usage", "users", "usher", "using", "usual", "usurp", "utter", "vague", "vails", "vales", "valet", "valid", "valor", "value", "valve", "vamps", "vampy", "vaned", "vanes", "vapid", "vapor", "vases", "vasts", "vault",
    "vaunt", "veals", "veeps", "veers", "vegan", "vegie", "veils", "veins", "veiny", "velds", "veldt", "velum", "venal", "vends", "venom", "vents", "venue", "verbs", "verge", "verse", "verso", "verts", "verve", "vests", "vexed", "vexer", "vexes", "vials", "vibes", "vicar", "viced", "vices", "video", "views", "viewy", "vigil", "vigor", "villa", "vined", "vines", "vinyl", "viola", "viper", "viral", "virus", "visas", "visit", "visor", "vista", "vital", "vitta", "vivid", "vixen", "vizor", "vocab", "vocal", "vodka", "vogue", "voice", "voids", "voila", "voled", "voles", "volta", "volte", "volts", "vomit", "voted", "voter", "votes", "vouch", "vowed", "vowel", "vroom", "vulva", "vying", "wacko", "wacks",
    "wacky", "waded", "wader", "wades", "wafer", "waffs", "wafts", "waged", "wager", "wages", "wagon", "waifs", "wails", "wains", "waist", "waits", "waive", "waked", "waken", "waker", "wakes", "wales", "walks", "walls", "waltz", "wands", "waned", "wanes", "wanks", "wants", "wards", "wares", "warms", "warns", "warps", "warts", "washy", "wasps", "waspy", "waste", "watch", "water", "watts", "waved", "waver", "waves", "wavey", "waxed", "waxen", "waxer", "waxes", "wazoo", "weald", "weals", "weans", "wears", "weary", "weave", "webby", "wedge", "wedgy", "weeds", "weedy", "weeks", "weens", "weeny", "weeps", "weepy", "weigh", "weird", "weirs", "welch", "welds", "wells", "welly", "welsh", "welts", "wench",
    "wends", "wests", "wetly", "whack", "whale", "whams", "wharf", "whats", "wheat", "wheel", "wheen", "wheep", "whelk", "whelm", "whelp", "whens", "where", "wheys", "which", "whiff", "while", "whims", "whine", "whiny", "whips", "whirl", "whisk", "whist", "white", "whits", "whity", "whizz", "whole", "whomp", "whoof", "whoop", "whose", "whump", "wicca", "wicks", "widen", "wider", "wides", "widow", "width", "wield", "wifes", "wifey", "wilds", "wiled", "wiles", "wills", "willy", "wilts", "wimps", "wimpy", "wince", "winch", "winds", "windy", "wined", "wines", "winey", "wings", "winks", "winos", "wiped", "wiper", "wipes", "wired", "wirer", "wires", "wised", "wiser", "wisps", "wispy", "wists", "witch",
    "witty", "wived", "wives", "wizen", "woful", "woken", "wolfs", "woman", "wombs", "women", "wonky", "woods", "woody", "wooed", "wooer", "woofs", "wools", "wooly", "woops", "woosh", "woozy", "words", "wordy", "works", "world", "worms", "wormy", "worry", "worse", "worst", "worth", "would", "wound", "woven", "wowed", "wraps", "wrapt", "wrath", "wreak", "wreck", "wrens", "wrest", "wring", "wrist", "write", "writs", "wrong", "wrote", "wrung", "wryly", "wurst", "xenon", "xerox", "yacht", "yacks", "yahoo", "yanks", "yards", "yarns", "yawed", "yawns", "yeahs", "yearn", "years", "yeast", "yells", "yelps", "yetis", "yield", "yikes", "yipes", "yodel", "yogas", "yogee", "yogis", "yoked", "yokel", "yokes",
    "yolks", "yolky", "yores", "young", "yours", "youse", "youth", "yucca", "yucks", "yucky", "yukky", "yummy", "yuppy", "yurts", "zaire", "zappy", "zeals", "zebra", "zeros", "zests", "zesty", "zilch", "zincs", "zincy", "zings", "zingy", "zippo", "zippy", "zombi", "zonal", "zoned", "zones",	"zonks", "zooms"];
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

logoImage.src = 'logo1.gif';

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

let scoreboarden = [];

const updateScoreboarden = (name, points) => {
    scoreboarden.push({ name, points });
    // Sort the scoreboard by points in descending order
    scoreboarden.sort((a, b) => b.points - a.points);
    localStorage.setItem('scoreboarden', JSON.stringify(scoreboarden)); // Save to localStorage
    displayScoreboarden();
};

const displayScoreboarden = () => {
    const scoreboardenDiv = document.getElementById('scoreboarden');
    scoreboardenDiv.innerHTML = `
        <h3>ENGLISH SCOREBOARD</h3>
        <div class="header">
            <span>No.</span>
            <span>Name</span>
            <span>Score</span>
        </div>
    `;
    scoreboarden.forEach((entry, index) => {
        scoreboardenDiv.innerHTML += `
            <div class="entry">
                <span>${index + 1}</span>
                <span>${entry.name}</span>
                <span>${entry.points}</span>
            </div>
        `;
    });
};

const loadScoreboarden = () => {
    const savedScoreboarden = localStorage.getItem('scoreboarden');
    if (savedScoreboarden) {
        scoreboarden = JSON.parse(savedScoreboarden);
        displayScoreboarden();
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
        updateScoreboarden(playerName, points);
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
        //    continueButton.innerText = `Continue with ${maxLives} lives left`; // Set button text
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
    continueGame();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
    if (event.target == lostModal) {
        lostModal.style.display = 'none';
        continueGame();
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
    loadScoreboarden();

    resetButton.addEventListener('click', resetGame);
});


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

document.getElementById('infoButtonflip').addEventListener('mouseover', function () {
    document.getElementById('infoText').classList.add('visible');
});

document.getElementById('infoButtonflip').addEventListener('mouseout', function () {
    document.getElementById('infoText').classList.remove('visible');
});

document.getElementById('infoButtonflip').addEventListener('click', function () {
    var infoText = document.getElementById('infoText');
    if (infoText.classList.contains('visible')) {
        infoText.classList.remove('visible');
    } else {
        infoText.classList.add('visible');
    }
});

    document.getElementById('colourButton').onclick = function() {
        var dropdown = document.getElementById('color-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    };

// Function to change the background color and save it to localStorage
function changeColor(backgroundColor, textColor) {
    document.body.style.backgroundColor = backgroundColor;
    localStorage.setItem('backgroundColor', backgroundColor);
    localStorage.setItem('textColor', textColor);

    // Change the text color for all elements
    var allElements = document.querySelectorAll('*');
    allElements.forEach(function (element) {
        element.style.color = textColor;
    });

    // Change the border color for all elements
    document.documentElement.style.setProperty('--border-color', textColor);

    document.getElementById('color-dropdown').style.display = 'none';
}

// Function to load the background and text color from localStorage
function loadColors() {
    var backgroundColor = localStorage.getItem('backgroundColor');
    var textColor = localStorage.getItem('textColor');
    if (backgroundColor) {
        document.body.style.backgroundColor = backgroundColor;
    }
    if (textColor) {
        // Apply the text color to all elements
        var allElements = document.querySelectorAll('*');
        allElements.forEach(function (element) {
            element.style.color = textColor;
        });
        document.documentElement.style.setProperty('--border-color', textColor);
    }
}

// Load the background color when the page loads
window.onload = loadColors;
