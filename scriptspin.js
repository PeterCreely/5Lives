
const spinwords = ["aargh", "abash", "abate", "abbey", "abbot", "abhor", "abide", "abled", "abler", "ables", "abode", "abort", "about", "above", "abuse", "abuzz", "abyss", "ached", "aches", "achoo", "acids", "acidy", "acing", "acmes", "acnes", "acorn", "acres", "acrid", "acted", "actor", "acute", "adage", "adapt", "added", "adder", "addle", "adept", "adieu", "adios", "admit", "adobe", "adopt", "adore", "adorn", "adult", "aeons", "affix", "afoot", "afoul", "after", "again", "agent", "agile", "aging", "agism", "agist", "aglet", "aglow", "agony", "agree", "ahead", "aided", "aides", "ailed", "aimed", "aimer", "aired", "aisle", "alamo", "alarm", "album", "alder", "alert", "algae", "alibi", "alien", "align",
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
    "yolks", "yolky", "yores", "young", "yours", "youse", "youth", "yucca", "yucks", "yucky", "yukky", "yummy", "yuppy", "yurts", "zaire", "zappy", "zeals", "zebra", "zeros", "zests", "zesty", "zilch", "zincs", "zincy", "zings", "zingy", "zippo", "zippy", "zombi", "zonal", "zoned", "zones", "zonks", "zooms"
];

let selectedWords = [];

// Function to select random words from the list
function getRandomWords(count) {
    const selectedWords = [];
    while (selectedWords.length < count) {
        const word = spinwords[Math.floor(Math.random() * spinwords.length)];
        if (!selectedWords.includes(word)) {
            selectedWords.push(word);
        }
    }
    return selectedWords;
}

// Function to set letters on the faces of the cubes
function setCubeLetters() {
    selectedWords = getRandomWords(4); // Select four words
    document.querySelectorAll('.cube').forEach((cube, cubeIndex) => {
        const faces = cube.querySelectorAll('.face');
        faces[0].textContent = selectedWords[0][cubeIndex] || ''; // Front face
        faces[1].textContent = selectedWords[1][cubeIndex] || ''; // Back face
        faces[2].textContent = selectedWords[2][cubeIndex] || ''; // Top face
        faces[3].textContent = selectedWords[3][cubeIndex] || ''; // Bottom face

        // Set random initial rotation angle
        let angleX = Math.floor(Math.random() * 4) * 90; // Random multiple of 90 degrees
        cube.style.transform = `rotateX(${angleX}deg)`;
        cube.setAttribute('data-rotation', angleX); // Store the rotation angle
    });
}

// Function to update the displayed letters as the cubes spin
function updateSpinLetters() {
    let frontLetters = '';
    let backLetters = '';
    let topLetters = '';
    let bottomLetters = '';

    document.querySelectorAll('.cube').forEach(cube => {
        const angleX = parseInt(cube.getAttribute('data-rotation') || 0) % 360;
        const faces = cube.querySelectorAll('.face');

        switch (angleX) {
            case 0:
                frontLetters += faces[0].textContent; // Front
                backLetters += faces[1].textContent; // Back
                topLetters += faces[2].textContent; // Top
                bottomLetters += faces[3].textContent; // Bottom
                break;
            case 90:
                frontLetters += faces[2].textContent; // Top becomes Front
                backLetters += faces[3].textContent; // Bottom becomes Back
                topLetters += faces[1].textContent; // Back becomes Top
                bottomLetters += faces[0].textContent; // Front becomes Bottom
                break;
            case 180:
                frontLetters += faces[1].textContent; // Back becomes Front
                backLetters += faces[0].textContent; // Front becomes Back
                topLetters += faces[3].textContent; // Bottom becomes Top
                bottomLetters += faces[2].textContent; // Top becomes Bottom
                break;
            case 270:
                frontLetters += faces[3].textContent; // Bottom becomes Front
                backLetters += faces[2].textContent; // Top becomes Back
                topLetters += faces[0].textContent; // Front becomes Top
                bottomLetters += faces[1].textContent; // Back becomes Bottom
                break;
            default:
                console.error(`Unexpected rotation angle: ${angleX}`);
        }
    });

    console.log(`Front: ${frontLetters}`);
    console.log(`Top: ${topLetters}`);
    console.log(`Bottom: ${bottomLetters}`);
    console.log(`Back: ${backLetters}`);

    const displayedLetters = `Front: ${frontLetters}<br>
                              Top: ${topLetters}<br>
                              Bottom: ${bottomLetters}<br>
                              Back: ${backLetters}`;

    document.getElementById('spinLetter').innerHTML = displayedLetters;
}

// Function to check if any face matches the selected words
function checkWords() {
    let frontLetters = '';
    let backLetters = '';
    let topLetters = '';
    let bottomLetters = '';

    document.querySelectorAll('.cube').forEach(cube => {
        const angleX = parseInt(cube.getAttribute('data-rotation') || 0) % 360;
        const faces = cube.querySelectorAll('.face');

        switch (angleX) {
            case 0:
                frontLetters += faces[0].textContent; // Front
                backLetters += faces[1].textContent; // Back
                topLetters += faces[2].textContent; // Top
                bottomLetters += faces[3].textContent; // Bottom
                break;
            case 90:
                frontLetters += faces[2].textContent; // Top becomes Front
                backLetters += faces[3].textContent; // Bottom becomes Back
                topLetters += faces[1].textContent; // Back becomes Top
                bottomLetters += faces[0].textContent; // Front becomes Bottom
                break;
            case 180:
                frontLetters += faces[1].textContent; // Back becomes Front
                backLetters += faces[0].textContent; // Front becomes Back
                topLetters += faces[3].textContent; // Bottom becomes Top
                bottomLetters += faces[2].textContent; // Top becomes Bottom
                break;
            case 270:
                frontLetters += faces[3].textContent; // Bottom becomes Front
                backLetters += faces[2].textContent; // Top becomes Back
                topLetters += faces[0].textContent; // Front becomes Top
                bottomLetters += faces[1].textContent; // Back becomes Bottom
                break;
            default:
                console.error(`Unexpected rotation angle: ${angleX}`);
        }
    });

    const correctWords = [frontLetters, backLetters, topLetters, bottomLetters];
    const matchResults = selectedWords.map(word => correctWords.includes(word));

    let resultMessage = '';
    if (matchResults.every(Boolean)) {
        resultMessage = `Correct! All the selected words are present on the cubes:\n${selectedWords.join(', ')}`;
    } else {
        resultMessage = 'Incorrect. Not all selected words are present on the cubes.\n\nDetails:';
        selectedWords.forEach((word, index) => {
            if (matchResults[index]) {
                resultMessage += `\n${word} is present.`;
            }
        });
    }

    alert(resultMessage);
}

// Initialize cubes with letters and random rotations
setCubeLetters();
updateSpinLetters(); // Display initial letters

document.querySelectorAll('.cube').forEach((cube, index) => {
    let angleX = parseInt(cube.getAttribute('data-rotation') || 0);
    cube.style.height = `${cube.offsetHeight}px`; // Set the height based on initial rendering
    cube.style.width = `${cube.offsetWidth}px`; // Set the width based on initial rendering

    cube.addEventListener('click', () => {
        angleX += 90; // Rotate 90 degrees on each click
        cube.style.transform = `rotateX(${angleX}deg)`;
        cube.setAttribute('data-rotation', angleX); // Store the rotation angle

        // Ensure consistent height and width after transformation
        setTimeout(() => {
            cube.style.height = `${cube.offsetHeight}px`;
            cube.style.width = `${cube.offsetWidth}px`;
            updateSpinLetters();
        }, 1000); // Update after transition
    });
});

// Position the cubes at different heights from the top
const playArea = document.getElementById('playAreaspin');
const cubes = playArea.querySelectorAll('.cube');
const heightsFromTop = [120, 130, 140, 150, 160]; // Heights for each cube

cubes.forEach((cube, index) => {
    cube.style.position = 'absolute';
    cube.style.left = `${(playArea.offsetWidth - 60 * cubes.length) / (cubes.length + 1) * (index + 1) + 60 * index}px`; // Evenly distribute horizontally
    cube.style.top = `${heightsFromTop[index]}px`;
});





// Add event listener to the submit button
document.getElementById('submitwordButton').addEventListener('click', checkWords);

document.getElementById('colourButton').onclick = function () {
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