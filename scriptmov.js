let guessedLetters = [];
let incorrectGuesses = 5;
let maxLives = 1;
let points = 0;
let wordcount = 5;
let clickCount = 0;
let currentStreakmovie = localStorage.getItem('currentStreakmovie') ? parseInt(localStorage.getItem('currentStreakmovie')) : 0;
let highestStreakmovie = localStorage.getItem('highestStreakmovie') ? parseInt(localStorage.getItem('highestStreakmovie')) : 0;

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
const highestStreakmovieDisplay = document.getElementById('highestStreakmovie-display');
const currentStreakmovieDisplay = document.getElementById('currentStreakmovie-display');

logoImage.src = 'logo1.gif';

let selectedWord1, selectedWord2, selectedWord3, selectedWord4, selectedWord5;

const wordGroups = {
    group1: ["babe", "lion", "stir", "hail", "zero", "kali", "feed", "dune", "fire", "goon", "cube", "dots", "ryan", "mama", "gina", "flux", "blue", "fido", "tusk", "rude", "once", "room", "gaza", "snap", "viva", "rain", "if….", "blue", "scum", "boom", "wasp", "moon", "amy!", "1917", "zulu", "bait", "1984", "ctrl", "snow", "food", "rush", "trog", "jude", "host", "home", "troy", "face", "emma", "soft", "gold", "link", "judy", "xtro", "prey", "aria", "i.d.", "who?", "jaws", "tabu", "heat", "safe", "reds", "rope", "duel", "hair", "luna", "kids", "hugo", "dune", "cops", "fury", "time", "13th", "head", "juno", "fame", "dig!", "amor", "film", "bird", "kiss", "nope", "rudy", "tron", "milk", "gigi", "dope", "coco", "wait", "roar", "vice", "erie", "slam", "hero", "soul", "1941", "i...", "clue", "cobb", "heat", "jack", "mank", "fury", "hulk", "pulp", "argo", "hook", "envy", "antz", "lili", "futz", "zola", "2012", "wolf", "jane", "thor", "cujo", "****", "rain", "taps", "mask", "bros", "noah", "vamp", "2010", "wild", "hit!", "will", "1408", "cars", "lmno", "eden", "duma", "lupe", "fear", "prey", "kuso", "chef", "luca", "life", "gook", "they", "life", "tape", "kedi", "home", "narc", "p.s.", "zaza", "ciao", "made", "paul", "blow", "1918", "coma", "i.q.", "stay", "bait", "love", "five", "fear", "fuji", "camp", "1776", "gunn"],
    group2: ["proof", "bliss", "kenny", "celia", "jisoe", "resan", "shine", "stone", "relic", "pawno", "south", "truth", "noise", "jedda", "cargo", "rogue", "shame", "candy", "tanna", "crash", "léolo", "mommy", "enemy", "water", "uncut", "crac!", "rabid", "earth", "heist", "tower", "sabah", "88:88", "dirty", "ocean", "canon", "vinyl", "taxi!", "21-87", "shoot", "angel", "kings", "korea", "greta", "patu!", "ngati", "vigil", "naked", "carol", "trust", "rocks", "shame", "tommy", "maeve", "selma", "senna", "dredd", "frank", "locke", "help!", "bang!", "pride", "alfie", "helen", "beats", "crush", "colin", "venus", "limbo", "daddy", "emma.", "mandy", "creep", "otley", "gorgo", "khush", "steel", "great", "yanks", "nasty", "shell", "filth", "salma", "goal!", "water", "fire!", "david", "noose", "kipps", "venom", "greed", "alien", "wanda", "fargo", "faces", "shane", "se7en", "laura", "rocky", "bambi", "zelig", "dumbo", "gummo", "angel", "gilda", "crumb", "giant", "fuses", "klute", "shoes", "drive", "trash", "gerry", "bound", "moana", "diner", "dames", "wings", "belly", "thief", "couch", "shaft", "still", "birdy", "them!", "grass", "ghost", "lenny", "shrek", "smoke", "speed", "lemon", "glory", "signs", "juice", "sodom", "flesh", "crash", "coffy", "evita", "magic", "joker", "marty", "brick", "creed", "julia", "model", "logan", "keane", "elvis", "aspen", "vinyl", "blind", "rango", "bang!", "rambo", "nadja", "lapis", "alaya", "hoffa", "yentl", "decoy", "topaz", "nixon", "freud", "foxes", "kotch", "mandy", "bliss", "crank", "topaz", "brüno", "table", "caged", "blade", "junun", "limbo", "bugsy", "ronin", "elegy", "linda", "sonny", "t - men", "x - men", "annie", "twixt", "smile", "frida", "moana", "hanna", "swoon", "belle", "waves", "sugar", "hondo", "brave", "lucas", "vamps", "tyson", "brats", "glass", "sicko", "loads", "light", "alice", "mulan", "sully", "weeds", "v / h / s", "titus", "dogma", "flora", "crawl", "hitch", "teeth", "g - men", "hype!", "habit", "frogs", "fresh", "hexed", "chain", "chuka", "steps", "creep", "bliss", "house", "tully", "diane", "tower", "power", "bobby", "gizmo", "terri", "45365", "elves", "golub", "dolls", "holes", "elvis", "alone", "horse", "steel", "flirt", "bones", "chuck", "abuse", "sleep", "georg", "super", "fresh", "nanny", "smile", "mayor", "agnes", "split", "mimic", "spawn", "shaft", "venom", "manic", "dudes", "fraud", "u - 571", "focus", "punks", "roman", "below", "lemmy", "alibi", "alive", "chang", "prime", "congo", "milch", "cobra", "posse", "class", "heavy", "pound", "touch", "lorna", "macao", "star!", "diane", "vixen", "shock", "lured", "vicki", "julie", "tevye", "bread", "c - man", "offon", "peege", "eegah", "carny", "angel"],
    group3: ["sherpa", "cousin", "mullet", "thirst", "tracks", "balibo", "praise", "breath", "caddie", "warrah", "sirens", "spider", "kissed", "lilies", "mosaic", "ararat", "maudie", "camera", "splice", "stereo", "things", "hunger", "masala", "garage", "kisses", "poitín", "brazil", "hunger", "lolita", "frenzy", "gandhi", "hamlet", "london", "blight", "victim", "gasman", "aerial", "zardoz", "mahler", "exodus", "melody", "onegin", "launch", "asylum", "purple", "odette", "breath", "images", "priest", "damage", "censor", "widows", "legend", "loving", "joanna", "stoker", "duffer", "clouds", "moment", "sylvia", "frieda", "broken", "ghosts", "robbie", "possum", "fright", "jigsaw", "united", "rabbit", "stevie", "escape", "gothic", "psycho", "freaks", "marnie", "aliens", "casino", "carrie", "wall-e", "zodiac", "detour", "gloria", "avatar", "empire", "baraka", "lilith", "scream", "eureka", "grease", "poison", "clerks", "pariah", "ishtar", "martin", "picnic", "report", "patton", "primer", "batman", "ruskin", "exodus", "snatch", "munich", "looper", "frozen", "stevie", "sleuth", "carrie", "misery", "friday", "barfly", "shulie", "fletch", "selena", "caught", "d.o.a.", "harvey", "hamlet", "attica", "suture", "salomé", "ballet", "popeye", "breezy", "domino", "cheese", "psycho", "minari", "marley", "oculus", "jeremy", "alien³", "convoy", "beauty", "pneuma", "unrest", "bernie", "sandow", "essene", "hitman", "eureka", "sahara", "jivaro", "carmen", "marjoe", "maniac", "mid90s", "batman", "capote", "cyborg", "kundun", "apache", "postal", "avalon", "quills", "speedy", "looker", "sxxx80", "walker", "xanadu", "spring", "arthur", "willow", "asylum", "wolfen", "ransom", "cocoon", "fences", "desire", "s.o.b.", "ronnie", "ramrod", "tumult", "splash", "hostel", "krisha", "orange", "wilson", "skidoo", "killed", "agatha", "aubade", "flight", "levity", "lianna", "sliver", "bubble", "juarez", "weiner", "cowboy", "allied", "hooper", "triste", "crisis", "liliom", "switch", "cypher", "becket", "payday", "hustle", "topper", "nobody", "freaky", "unsane", "daniel", "wanted", "s1m0ne", "eskimo", "norbit", "hawaii", "gidget", "billie", "hamlet", "crisis", "mirage", "slaves", "breach", "mother", "kismet", "margie", "edmond", "casbah", "kaboom", "powder", "bedlam", "bataan", "blotto", "escape", "barbie", "junior", "malice", "onward", "deluge", "reggae", "damsel", "wounds", "groove", "mayhem", "gemini", "g.b.f.", "casper", "trolls", "savior", "pickup", "vessel", "robots", "saved!", "caught", "carrie", "frozen", "carver", "topaze", "yantra", "static", "winter", "o.s.s.", "l.i.e.", "hombre", "charly", "sunday", "prison", "nomads", "tarzan", "pecker", "sphere", "sogobi", "closer", "trumbo", "pinero", "harper", "framed", "kinsey", "loving", "impact", "d.o.a.", "maniac", "jubilo", "jigsaw", "vortex", "mingus", "gambit", "arruza", "latino", "bolero", "squirm", "tracks", "tattoo", "d.o.a.", "always", "plenty"],
    group4: ["sweetie", "chopper", "malcolm", "patrick", "bedevil", "blessed", "knowing", "waiting", "vincent", "manless", "healing", "rampage", "exotica", "shivers", "careful", "porky's", "jumping", "stander", "citadel", "keyhole", "genesis", "riddick", "wolfcop", "amreeka", "rituals", "trigger", "octobre", "calvary", "silence", "cousins", "tickled", "fantail", "runaway", "orlando", "dracula", "variety", "weekend", "petulia", "darling", "dunkirk", "babylon", "belfast", "maurice", "oliver!", "macbeth", "jubilee", "control", "skyfall", "scrooge", "deadpan", "citadel", "glimpse", "farming", "temenos", "trishna", "isadora", "chaplin", "gumshoe", "murder!", "morgan!", "inserts", "mclibel", "lilting", "robbery", "payroll", "virunga", "villain", "bronson", "knuckle", "scrooge", "orphans", "othello", "apaches", "quartet", "colette", "anthony", "assault", "cowboys", "jawbone", "bedelia", "citadel", "impulse", "marilyn", "vertigo", "sunrise", "cabaret", "amadeus", "network", "boyhood", "tootsie", "hatari!", "shadows", "rebecca", "titanic", "robocop", "ben-hur", "morocco", "memento", "welfare", "m*a*s*h", "arrival", "witness", "holiday", "gravity", "avanti!", "charade", "platoon", "seconds", "pursued", "eniaios", "missing", "shampoo", "slacker", "bullitt", "matewan", "serpico", "gattaca", "decasia", "birdman", "outrage", "dracula", "fingers", "camille", "sleeper", "silence", "sankofa", "primary", "sisters", "amistad", "contact", "primate", "nowhere", "monster", "allures", "targets", "solaris", "america", "society", "macbeth", "aladdin", "niagara", "quixote", "traffic", "bananas", "sicario", "jumanji", "elysium", "buddies", "samsara", "college", "liberty", "baxter!", "jezebel", "darkman", "starman", "uptight", "sanctus", "lincoln", "sounder", "camelot", "frantic", "passing", "shirley", "haircut", "sabrina", "ballast", "redskin", "quintet", "gloria!", "singles", "chicago", "tremors", "gymkata", "tangled", "attack!", "hellboy", "matinee", "wildcat", "tempest", "actress", "rapture", "lawless", "roxanne", "topkapi", "piranha", "wizards", "missile", "blacula", "mogambo", "syriana", "junebug", "jollies", "pitfall", "wichita", "freaked", "tension", "mother!", "matilda", "deseret", "miracle", "haywire", "kingpin", "warlock", "airport", "busting", "parents", "machete", "ragtime", "outland", "frailty", "detroit", "stripes", "madigan", "firefox", "catfish", "beloved", "imagine", "warrior", "roberta", "v/h/s/2", "twister", "hidalgo", "hackers", "krampus", "ant-man", "slither", "scandal", "chappie", "starlet", "drácula", "chi-raq", "perfect", "willard", "payback", "zapped!", "prancer", "victory", "pollock", "scratch", "equinox", "mantrap", "babylon", "encanto", "spencer", "memphis", "jeffrey", "cropsey", "conrack", "volcano", "upgrade", "tabloid", "impulse", "beaches", "dragnet", "beowulf", "redbelt", "hohokam", "ulysses", "twister", "dracula", "dolores", "georgia", "corsair", "samadhi", "kitchen", "species", "swimfan", "bottoms", "soldier", "timecop", "willard", "gleason", "freeway", "harriet", "strike!", "aquaman", "kolobos", "refugee", "hancock", "orgazmo", "notfilm", "caveman", "grandma", "chemsex", "humpday", "altered", "cooties", "inferno", "armored", "hammett", "rabbits", "rockula", "flipped", "shelter", "rawhide", "bandido", "impulse", "impulse", "kolkata", "traitor", "foxfire", "vincent", "maytime", "rampage", "wendigo", "olympia", "android", "scorpio", "ivanhoe", "ransom!", "chained", "romance", "parnell", "adynata", "trapped", "algiers", "larceny", "sirocco", "illegal", "marlowe", "frances", "destiny", "modesta", "parable", "felicia", "chicana", "slither"],
    group5: ["snowtown", "backlash", "toomelah", "flirting", "heatwave", "fortress", "bastardy", "partisan", "disgrace", "radiance", "petersen", "calendar", "existenz", "scanners", "presents", "remember", "scaffold", "sonatine", "elbowing", "hellions", "roadkill", "stations", "croupier", "brooklyn", "saviours", "scarfies", "accident", "sabotage", "pressure", "comrades", "bodysong", "drifters", "monsters", "aftersun", "gaslight", "mangrove", "wetherby", "backbeat", "saint-ex", "millions", "terminus", "prevenge", "together", "sapphire", "vampyres", "triangle", "hardware", "symptoms", "hannibal", "overlord", "messages", "festival", "khartoum", "tideland", "grenfell", "benjamin", "sweeney!", "radiator", "downhill", "queerama", "aquarela", "svengali", "soulmate", "grabbers", "thriller", "shipyard", "aberdeen", "cromwell", "daybreak", "stardust", "badlands", "magnolia", "husbands", "fantasia", "elephant", "scarface", "rushmore", "salesman", "margaret", "scarface", "clueless", "sideways", "superman", "sorcerer", "midnight", "whiplash", "suspense", "cruising", "predator", "election", "lonesome", "salvador", "gremlins", "crooklyn", "paterson", "gaslight", "fearless", "moonrise", "papillon", "heathers", "notebook", "candyman", "superbad", "shortbus", "commando", "face/off", "catch-22", "tokyo-ga", "phantasm", "precious", "fingered", "coraline", "silkwood", "swingers", "bulworth", "watchmen", "manhatta", "shirkers", "sinister", "nebraska", "dolemite", "sunshine", "wellness", "ravenous", "lifeboat", "wargames", "serenity", "breakin'", "fandango", "claudine", "redacted", "cocktail", "whoopee!", "kalendar", "d.e.b.s.", "hoosiers", "applause", "cinnamon", "blackhat", "re-entry", "begotten", "timecode", "soapdish", "ruthless", "manpower", "zootopia", "kick-ass", "mandingo", "marooned", "deadpool", "protocol", "gunsmoke", "dementia", "columbus", "suburbia", "barabbas", "waitress", "suddenly", "thirteen", "saboteur", "laughter", "sneakers", "pushover", "suburbia", "cry-baby", "stardust", "twilight", "champion", "wattstax", "brubaker", "vampires", "insomnia", "colossal", "dogfight", "mudbound", "godzilla", "hercules", "scrooged", "rejected", "invictus", "clockers", "mermaids", "blockers", "overlord", "restless", "sleepers", "hardcore", "thirteen", "calcutta", "hamilton", "casanova", "criminal", "moonbird", "hustlers", "defiance", "intruder", "c.h.u.d.", "wildcats", "reckless", "deranged", "moontide", "basquiat", "cornered", "trancers", "carousel", "megamind", "piercing", "francine", "grounded", "bullseye", "restrepo", "stargate", "excision", "lowlands", "caligula", "dynamite", "sangaree", "maverick", "kon-tiki", "brothers", "lovesong", "ambition", "promises", "godspell", "rounders", "riverrun", "funnyman", "counting", "mistress", "superman", "sextette", "moonplay", "collapse", "boundin'", "prophecy", "oblivion", "calcutta", "outbreak", "eternals", "geostorm", "twilight", "festival", "depraved", "werewolf", "impulses", "stigmata", "mahogany", "carefree", "wildlife", "carriers", "defiance", "lovesong", "h.o.t.s.", "mcconkey", "undertow", "splinter", "deadgirl", "lovetrue", "unbroken", "detropia", "lymelife", "spookies", "tenement", "pathogen", "anaconda", "surfwise", "trespass", "palmetto", "critters", "drumline", "ricochet", "wordplay", "mallrats", "sparrows", "jacknife", "backlash", "conquest", "disraeli", "chocolat", "homicide", "mudhoney", "crack-up", "nocturne", "tomorrow", "jeopardy", "suspense", "patterns", "svengali", "conflict", "whiplash", "loophole", "crashout", "backfire", "delusion", "pardners", "guncrazy", "playgirl", "cimarron", "undertow", "jealousy", "jennifer", "backlash", "violence", "unmasked", "violated", "incident", "manzanar", "unmasked", "groupies", "chandler", "sayonara", "ironweed", "galaxina",]
};

const associatedWords = {
    "babe": "Dir: Noonan, Chris - Year: 1995", "lion": "Dir: Davis, Garth - Year: 2016", "stir": "Dir: Wallace, Stephen - Year: 1980", "hail": "Dir: Courtin-Wilson, Amiel - Year: 2011", "zero": "Dir: Kezelos, Christopher - Year: 2010", "kali": "Dir: Stretch, Brendon - Year: 1975", "feed": "Dir: Leonard, Brett - Year: 2005", "dune": "Dir: Villeneuve, Denis - Year: 2021", "fire": "Dir: Mehta, Deepa - Year: 1996", "goon": "Dir: Dowse, Michael - Year: 2011", "cube": "Dir: Natali, Vincenzo - Year: 1997", "dots": "Dir: McLaren, Norman - Year: 1940", "ryan": "Dir: Landreth, Chris - Year: 2004", "mama": "Dir: Muschietti, Andy - Year: 2013", "gina": "Dir: Arcand, Denys - Year: 1975", "flux": "Dir: Hinton, Christopher - Year: 2002", "blue": "Dir: McKellar, Don - Year: 1992", "fido": "Dir: Currie, Andrew - Year: 2006", "tusk": "Dir: Smith, Kevin - Year: 2014", "rude": "Dir: Virgo, Clement - Year: 1995", "once": "Dir: Carney, John - Year: 2007", "room": "Dir: Abrahamson, Lenny - Year: 2015", "gaza": "Dir: Keane, Garry & Andrew McConnell - Year: 2019", "snap": "Dir: Winters, Carmel - Year: 2010", "viva": "Dir: Breathnach, Paddy - Year: 2015", "rain": "Dir: Jeffs, Christine - Year: 2001", "if….": "Dir: Anderson, Lindsay - Year: 1968", "blue": "Dir: Jarman, Derek - Year: 1993", "scum": "Dir: Clarke, Alan - Year: 1979", "boom": "Dir: Losey, Joseph - Year: 1968", "wasp": "Dir: Arnold, Andrea - Year: 2003", "moon": "Dir: Jones, Duncan - Year: 2009", "amy!": "Dir: Mulvey, Laura & Peter Wollen - Year: 1979", "1917": "Dir: Mendes, Sam - Year: 2019", "zulu": "Dir: Endfield, Cy - Year: 1964", "bait": "Dir: Jenkin, Mark - Year: 2019", "1984": "Dir: Radford, Michael - Year: 1984", "ctrl": "Dir: Townsend, Nigel - Year: 2016", "snow": "Dir: Jones, Geoffrey - Year: 1963", "food": "Dir: Švankmajer, Jan - Year: 1992", "rush": "Dir: Howard, Ron - Year: 2013", "trog": "Dir: Francis, Freddie - Year: 1970", "jude": "Dir: Winterbottom, Michael - Year: 1996", "host": "Dir: Savage, Rob - Year: 2020", "home": "Dir: McKinnon, Morag - Year: 1998", "troy": "Dir: Petersen, Wolfgang - Year: 2004", "face": "Dir: Bird, Antonia - Year: 1997", "emma": "Dir: McGrath, Douglas - Year: 1996", "soft": "Dir: Ellis, Simon - Year: 2007", "gold": "Dir: Hunt, Peter R. - Year: 1974", "link": "Dir: Franklin, Richard - Year: 1986", "judy": "Dir: Goold, Rupert - Year: 2019", "xtro": "Dir: Davenport, Harry Bromley - Year: 1983", "prey": "Dir: Warren, Norman J. - Year: 1977", "aria": "Dir: Various Directors - Year: 1987", "i.d.": "Dir: Davis, Philip - Year: 1994", "who?": "Dir: Gold, Jack - Year: 1974", "jaws": "Dir: Spielberg, Steven - Year: 1975", "tabu": "Dir: Murnau, F.W. - Year: 1931", "heat": "Dir: Mann, Michael - Year: 1995", "safe": "Dir: Haynes, Todd - Year: 1995", "reds": "Dir: Beatty, Warren - Year: 1981", "rope": "Dir: Hitchcock, Alfred - Year: 1948", "duel": "Dir: Spielberg, Steven - Year: 1971", "hair": "Dir: Forman, Milos - Year: 1979", "luna": "Dir: Bertolucci, Bernardo - Year: 1979", "kids": "Dir: Clark, Larry - Year: 1995", "hugo": "Dir: Scorsese, Martin - Year: 2011", "dune": "Dir: Lynch, David - Year: 1984", "cops": "Dir: Keaton, Buster/Eddie Cline - Year: 1922", "fury": "Dir: Lang, Fritz - Year: 1936", "time": "Dir: Bradley, Garrett - Year: 2020", "13th": "Dir: DuVernay, Ava - Year: 2016", "head": "Dir: Rafelson, Bob - Year: 1968", "juno": "Dir: Reitman, Jason - Year: 2007", "fame": "Dir: Parker, Alan - Year: 1980", "dig!": "Dir: Timoner, Ondi - Year: 2004", "amor": "Dir: Beavers, Robert - Year: 1980", "film": "Dir: Schneider, Alan - Year: 1965", "bird": "Dir: Eastwood, Clint - Year: 1988", "kiss": "Dir: Warhol, Andy - Year: 1963", "nope": "Dir: Peele, Jordan - Year: 2022", "rudy": "Dir: Anspaugh, David - Year: 1993", "tron": "Dir: Lisberger, Steven - Year: 1982", "milk": "Dir: Van Sant, Gus - Year: 2008", "gigi": "Dir: Minnelli, Vincente - Year: 1958", "dope": "Dir: Famuyiwa, Rick - Year: 2015", "coco": "Dir: Unkrich, Lee - Year: 2017", "wait": "Dir: Gehr, Ernie - Year: 1968", "roar": "Dir: Marshall, Noel - Year: 1981", "vice": "Dir: McKay, Adam - Year: 2018", "erie": "Dir: Everson, Kevin Jerome - Year: 2010", "slam": "Dir: Levin, Marc - Year: 1998", "hero": "Dir: Frears, Stephen - Year: 1992", "soul": "Dir: Docter, Pete - Year: 2020", "1941": "Dir: Spielberg, Steven - Year: 1979", "i...": "Dir: Brakhage, Stan - Year: 1995", "clue": "Dir: Lynn, Jonathan - Year: 1985", "cobb": "Dir: Shelton, Ron - Year: 1994", "heat": "Dir: Morrissey, Paul - Year: 1972", "jack": "Dir: Coppola, Francis Ford - Year: 1996", "mank": "Dir: Fincher, David - Year: 2020", "fury": "Dir: Ayer, David - Year: 2014", "hulk": "Dir: Lee, Ang - Year: 2003", "pulp": "Dir: Hodges, Mike - Year: 1972", "argo": "Dir: Affleck, Ben - Year: 2012", "hook": "Dir: Spielberg, Steven - Year: 1991", "envy": "Dir: Wynn, Natalie - Year: 2021", "antz": "Dir: Darnell, Eric & Tim Johnson - Year: 1998", "lili": "Dir: Walters, Charles - Year: 1953", "futz": "Dir: O'Horgan, Tom - Year: 1969", "zola": "Dir: Bravo, Janicza - Year: 2020", "2012": "Dir: Emmerich, Roland - Year: 2009", "wolf": "Dir: Nichols, Mike - Year: 1994", "jane": "Dir: Morgen, Brett - Year: 2017", "thor": "Dir: Branagh, Kenneth - Year: 2011", "cujo": "Dir: Teague, Lewis - Year: 1983", "****": "Dir: Warhol, Andy - Year: 1967", "rain": "Dir: Milestone, Lewis - Year: 1932", "taps": "Dir: Becker, Harold - Year: 1981", "mask": "Dir: Bogdanovich, Peter - Year: 1985", "bros": "Dir: Stoller, Nicholas - Year: 2022", "noah": "Dir: Aronofsky, Darren - Year: 2014", "vamp": "Dir: Wenk, Richard - Year: 1986", "2010": "Dir: Hyams, Peter - Year: 1984", "wild": "Dir: Vallée, Jean-Marc - Year: 2014", "hit!": "Dir: Furie, Sidney J. - Year: 1973", "will": "Dir: Maple, Jessie - Year: 1981", "1408": "Dir: Håfström, Mikael - Year: 2007", "cars": "Dir: Lasseter, John - Year: 2006", "lmno": "Dir: Breer, Robert - Year: 1978", "eden": "Dir: Goldberg, Howard - Year: 1996", "duma": "Dir: Ballard, Carroll - Year: 2005", "lupe": "Dir: Warhol, Andy - Year: 1966", "fear": "Dir: Foley, James - Year: 1996", "prey": "Dir: Trachtenberg, Dan - Year: 2022", "kuso": "Dir: Lotus, Flying - Year: 2017", "chef": "Dir: Favreau, Jon - Year: 2014",
    "luca": "Dir: Casarosa, Enrico - Year: 2021", "life": "Dir: Demme, Ted - Year: 1999", "gook": "Dir: Chon, Justin - Year: 2017", "they": "Dir: Ghazvinizadeh, Anahita - Year: 2017", "life": "Dir: Espinosa, Daniel - Year: 2017", "tape": "Dir: Linklater, Richard - Year: 2001", "kedi": "Dir: Torun, Ceyda - Year: 2016", "home": "Dir: Johnson, Tim - Year: 2015", "narc": "Dir: Carnahan, Joe - Year: 2002", "p.s.": "Dir: Kidd, Dylan - Year: 2004", "zaza": "Dir: Cukor, George - Year: 1938", "ciao": "Dir: Tan Yen - Year: 2008", "made": "Dir: Favreau, Jon - Year: 2001", "paul": "Dir: Mottola, Greg - Year: 2011", "blow": "Dir: Demme, Ted - Year: 2001", "1918": "Dir: Harrison, Ken - Year: 1984", "coma": "Dir: Crichton, Michael - Year: 1978", "i.q.": "Dir: Schepisi, Fred - Year: 1994", "stay": "Dir: Forster, Marc - Year: 2005", "bait": "Dir: Haas, Hugo - Year: 1954", "love": "Dir: Goulding, Edmund - Year: 1927", "five": "Dir: Oboler, Arch - Year: 1951", "fear": "Dir: Zeisler, Alfred - Year: 1946", "fuji": "Dir: Breer, Robert - Year: 1974", "camp": "Dir: Graff, Todd - Year: 2003", "1776": "Dir: Hunt, Peter H. - Year: 1972", "gunn": "Dir: Edwards, Blake - Year: 1967", "proof": "Dir: Moorhouse, Jocelyn - Year: 1991", "bliss": "Dir: Lawrence, Ray - Year: 1985", "kenny": "Dir: Jacobson, Clayton - Year: 2006", "celia": "Dir: Turner, Ann - Year: 1989", "jisoe": "Dir: Martin, Eddie - Year: 2005", "resan": "Dir: Watkins, Peter - Year: 1987", "shine": "Dir: Hicks, Scott - Year: 1996", "stone": "Dir: Harbutt, Sandy - Year: 1974", "relic": "Dir: James, Natalie Erika - Year: 2020", "pawno": "Dir: Ireland, Paul - Year: 2015", "south": "Dir: Hurley, Frank - Year: 1919", "truth": "Dir: Vanderbilt, James - Year: 2015", "noise": "Dir: Saville, Matthew - Year: 2007", "jedda": "Dir: Chauvel, Charles - Year: 1955", "cargo": "Dir: Howling, Ben & Yolanda Ramke - Year: 2017", "rogue": "Dir: McLean, Greg - Year: 2007", "shame": "Dir: Jodrell, Steve - Year: 1988", "candy": "Dir: Armfield, Neil - Year: 2006", "tanna": "Dir: Dean, Bentley & Martin Butler - Year: 2015", "crash": "Dir: Cronenberg, David - Year: 1996", "léolo": "Dir: Lauzon, Jean-Claude - Year: 1992", "mommy": "Dir: Dolan, Xavier - Year: 2014", "enemy": "Dir: Villeneuve, Denis - Year: 2013", "water": "Dir: Mehta, Deepa - Year: 2005", "uncut": "Dir: Greyson, John - Year: 1997", "crac!": "Dir: Back, Frédéric - Year: 1980", "rabid": "Dir: Cronenberg, David - Year: 1977", "earth": "Dir: Mehta, Deepa - Year: 1998", "heist": "Dir: Mamet, David - Year: 2001", "tower": "Dir: Radwanski, Kazik - Year: 2012", "sabah": "Dir: Nadda, Ruba - Year: 2005", "88:88": "Dir: Medina, Isiah - Year: 2015", "dirty": "Dir: Sweeney, Bruce - Year: 1998", "ocean": "Dir: Martin, Catherine - Year: 2002", "canon": "Dir: McLaren, Norman & Grant Munro - Year: 1964", "vinyl": "Dir: Zweig, Alan - Year: 2000", "taxi!": "Dir: Greenwald, Barry - Year: 1982", "21-87": "Dir: Lipsett, Arthur - Year: 1964", "shoot": "Dir: Hart, Harvey - Year: 1976", "angel": "Dir: Jordan, Neil - Year: 1982", "kings": "Dir: Collins, Tom - Year: 2007", "korea": "Dir: Black, Cathal - Year: 1995", "greta": "Dir: Jordan, Neil - Year: 2018", "patu!": "Dir: Mita, Merata - Year: 1983", "ngati": "Dir: Barclay, Barry - Year: 1987", "vigil": "Dir: Ward, Vincent - Year: 1984", "naked": "Dir: Leigh, Mike - Year: 1993", "carol": "Dir: Haynes, Todd - Year: 2015", "trust": "Dir: Hartley, Hal - Year: 1990", "rocks": "Dir: Gavron, Sarah - Year: 2019", "shame": "Dir: McQueen, Steve - Year: 2011", "tommy": "Dir: Russell, Ken - Year: 1975", "maeve": "Dir: Murphy, Pat - Year: 1981", "selma": "Dir: DuVernay, Ava - Year: 2014", "senna": "Dir: Kapadia, Asif - Year: 2010",	"dredd": "Dir: Travis, Pete - Year: 2012",	"frank": "Dir: Abrahamson, Lenny - Year: 2014",	"locke": "Dir: Knight, Steven - Year: 2013",	"help!": "Dir: Lester, Richard - Year: 1965",	"bang!": "Dir: Godfrey, Bob - Year: 1967",	"pride": "Dir: Warchus, Matthew - Year: 2014",	"alfie": "Dir: Gilbert, Lewis - Year: 1966",	"helen": "Dir: Molloy, Christine & Joe Lawlor - Year: 2008",	"beats": "Dir: Welsh, Brian - Year: 2018",	"crush": "Dir: McKay, John - Year: 2001",	"colin": "Dir: Price, Marc - Year: 2008",	"venus": "Dir: Michell, Roger - Year: 2006",	"limbo": "Dir: Sharrock, Ben - Year: 2020",	"daddy": "Dir: De Saint Phalle, Niki & Peter Whitehead - Year: 1973",	"emma.": "Dir: de Wilde, Autumn - Year: 2020",	"mandy": "Dir: Mackendrick, Alexander - Year: 1952",	"creep": "Dir: Smith, Christopher - Year: 2004",	"otley": "Dir: Clement, Dick - Year: 1969",	"gorgo": "Dir: Lourie, Eugene - Year: 1961",	"khush": "Dir: Parmar, Pratibha - Year: 1991",	"steel": "Dir: Riley, Ronald H. - Year: 1945",	"great": "Dir: Godfrey, Bob - Year: 1975",	"yanks": "Dir: Schlesinger, John - Year: 1979",	"nasty": "Dir: Bailey - Bond, Prano - Year: 2015",	"shell": "Dir: Graham, Scott - Year: 2012",	"filth": "Dir: Baird, Jon S. - Year: 2013",	"salma": "Dir: Longinotto, Kim - Year: 2013",	"goal!": "Dir: Cannon, Danny - Year: 2005",	"water": "Dir: Clement, Dick - Year: 1985",	"fire!": "Dir: Williamson, James - Year: 1901",	"david": "Dir: Dickson, Paul - Year: 1951",	"noose": "Dir: Gréville, Edmond T. - Year: 1948",	"kipps": "Dir: Reed, Carol - Year: 1941",	"venom": "Dir: Haggard, Piers - Year: 1982",	"greed": "Dir: von Stroheim, Erich - Year: 1924",	"alien": "Dir: Scott, Ridley - Year: 1979",	"wanda": "Dir: Loden, Barbara - Year: 1970",	"fargo": "Dir: Coen, Joel & Ethan Coen - Year: 1996",	"faces": "Dir: Cassavetes, John - Year: 1968",	"shane": "Dir: Stevens, George - Year: 1953",	"se7en": "Dir: Fincher, David - Year: 1995",	"laura": "Dir: Preminger, Otto - Year: 1944",	"rocky": "Dir: Avildsen, John G. - Year: 1976",	"bambi": "Dir: Hand, David - Year: 1942",	"zelig": "Dir: Allen, Woody - Year: 1983",	"dumbo": "Dir: Sharpsteen, Ben - Year: 1941",	"gummo": "Dir: Korine, Harmony - Year: 1997",	"angel": "Dir: Lubitsch, Ernst - Year: 1937",	"gilda": "Dir: Vidor, Charles - Year: 1946",	"crumb": "Dir: Zwigoff, Terry - Year: 1994",	"giant": "Dir: Stevens, George - Year: 1956",	
    "fuses": "Dir: Schneemann, Carolee - Year: 1967", "klute": "Dir: Pakula, Alan J. - Year: 1971", "shoes": "Dir: Weber, Lois - Year: 1916", "drive": "Dir: Refn, Nicolas Winding - Year: 2011", "trash": "Dir: Morrissey, Paul - Year: 1970", "gerry": "Dir: Van Sant, Gus - Year: 2002", "bound": "Dir: Wachowski, Lana & Lilly Wachowski - Year: 1996", "moana": "Dir: Flaherty, Robert J. & Frances H.Flaherty - Year: 1926", "diner": "Dir: Levinson, Barry - Year: 1982", "dames": "Dir: Enright, Ray - Year: 1934", "wings": "Dir: Wellman, William - Year: 1927", "belly": "Dir: Williams, Hype - Year: 1998", "thief": "Dir: Mann, Michael - Year: 1981", "couch": "Dir: Warhol, Andy - Year: 1964", "shaft": "Dir: Parks, Gordon - Year: 1971", "still": "Dir: Gehr, Ernie - Year: 1969", "birdy": "Dir: Parker, Alan - Year: 1984", "them!": "Dir: Douglas, Gordon - Year: 1954", "grass": "Dir: Cooper, Merian C. & Ernest B.Schoedsack - Year: 1925", "ghost": "Dir: Zucker, Jerry - Year: 1990", "lenny": "Dir: Fosse, Bob - Year: 1974", "shrek": "Dir: Adamson, Andrew & Vicky Jenson - Year: 2001", "smoke": "Dir: Wang, Wayne - Year: 1995", "speed": "Dir: De Bont, Jan - Year: 1994", "lemon": "Dir: Frampton, Hollis - Year: 1969", "glory": "Dir: Zwick, Edward - Year: 1989", "signs": "Dir: Shyamalan, M.Night - Year: 2002", "juice": "Dir: Dickerson, Ernest R. - Year: 1992", "sodom": "Dir: Price, Luther - Year: 1989", "flesh": "Dir: Morrissey, Paul - Year: 1968", "crash": "Dir: Haggis, Paul - Year: 2004", "coffy": "Dir: Hill, Jack - Year: 1973", "evita": "Dir: Parker, Alan - Year: 1996", "magic": "Dir: Attenborough, Richard - Year: 1978", "joker": "Dir: Phillips, Todd - Year: 2019", "marty": "Dir: Mann, Delbert - Year: 1955", "brick": "Dir: Johnson, Rian - Year: 2005", "creed": "Dir: Coogler, Ryan - Year: 2015", "julia": "Dir: Zinnemann, Fred - Year: 1977", "model": "Dir: Wiseman, Frederick - Year: 1980", "logan": "Dir: Mangold, James - Year: 2017", "keane": "Dir: Kerrigan, Lodge - Year: 2004", "elvis": "Dir: Luhrmann, Baz - Year: 2022", "aspen": "Dir: Wiseman, Frederick - Year: 1991", "vinyl": "Dir: Warhol, Andy - Year: 1965", "blind": "Dir: Wiseman, Frederick - Year: 1987", "rango": "Dir: Verbinski, Gore - Year: 2011", "bang!": "Dir: Breer, Robert - Year: 1986", "rambo": "Dir: Stallone, Sylvester - Year: 2008", "nadja": "Dir: Almereyda, Michael - Year: 1995", "lapis": "Dir: Whitney, James - Year: 1966", "alaya": "Dir: Dorsky, Nathaniel - Year: 1987", "hoffa": "Dir: DeVito, Danny - Year: 1992", "yentl": "Dir: Streisand, Barbra - Year: 1983", "decoy": "Dir: Bernhard, Jack - Year: 1946", "topaz": "Dir: Tatsuno, Dave - Year: 1945", "nixon": "Dir: Stone, Oliver - Year: 1995", "freud": "Dir: Huston, John - Year: 1962", "foxes": "Dir: Lyne, Adrian - Year: 1980", "kotch": "Dir: Lemmon, Jack - Year: 1971", "mandy": "Dir: Cosmatos, Panos - Year: 2018", "bliss": "Dir: Markopoulos, Gregory J. - Year: 1967", "crank": "Dir: Neveldine, Mark & Brian Taylor - Year: 2006", "topaz": "Dir: Hitchcock, Alfred - Year: 1969", "brüno": "Dir: Charles, Larry - Year: 2009", "table": "Dir: Gehr, Ernie - Year: 1976", "caged": "Dir: Cromwell, John - Year: 1950", "blade": "Dir: Norrington, Stephen - Year: 1998", "junun": "Dir: Anderson, Paul Thomas - Year: 2015", "limbo": "Dir: Sayles, John - Year: 1999", "bugsy": "Dir: Levinson, Barry - Year: 1991", "ronin": "Dir: Frankenheimer, John - Year: 1998", "elegy": "Dir: Coixet, Isabel - Year: 2007", "linda": "Dir: Davenport, Dorothy - Year: 1929", "sonny": "Dir: Cage, Nicolas - Year: 2002", "t - men": "Dir: Mann, Anthony - Year: 1947", "x - men": "Dir: Singer, Bryan - Year: 2000", "annie": "Dir: Huston, John - Year: 1982", "twixt": "Dir: Coppola, Francis Ford - Year: 2011", "smile": "Dir: Ritchie, Michael - Year: 1975", "frida": "Dir: Taymor, Julie - Year: 2002", "moana": "Dir: Musker, John / Ron Clements - Year: 2016", "hanna": "Dir: Wright, Joe - Year: 2011", "swoon": "Dir: Kalin, Tom - Year: 1991", "belle": "Dir: Asante, Amma - Year: 2013", "waves": "Dir: Shults, Trey Edward - Year: 2019", "sugar": "Dir: Boden, Anna & Ryan Fleck - Year: 2008", "hondo": "Dir: Farrow, John - Year: 1953", "brave": "Dir: Andrews, Mark & Brenda Chapman - Year: 2012", "lucas": "Dir: Seltzer, David - Year: 1986", "vamps": "Dir: Heckerling, Amy - Year: 2012", "tyson": "Dir: Toback, James - Year: 2008", "brats": "Dir: Parrott, James - Year: 1930", "glass": "Dir: Shyamalan, M.Night - Year: 2019", "sicko": "Dir: Moore, Michael - Year: 2007", "loads": "Dir: McDowell, Curt - Year: 1985", "light": "Dir: Belson, Jordan - Year: 1974", "alice": "Dir: Allen, Woody - Year: 1990", "mulan": "Dir: Cook, Barry & Tony Bancroft - Year: 1998", "sully": "Dir: Eastwood, Clint - Year: 2016", "weeds": "Dir: Hancock, John D. - Year: 1987", "v / h / s": "Dir: Various Directors - Year: 2012", "titus": "Dir: Taymor, Julie - Year: 1999", "dogma": "Dir: Smith, Kevin - Year: 1999", "flora": "Dir: Švankmajer, Jan - Year: 1989", "crawl": "Dir: Aja, Alexandre - Year: 2019", "hitch": "Dir: Tennant, Andy - Year: 2005", "teeth": "Dir: Lichtenstein, Mitchell - Year: 2007", "g - men": "Dir: Keighley, William - Year: 1935", "hype!": "Dir: Pray, Doug - Year: 1996", "habit": "Dir: Fessenden, Larry - Year: 1995", "frogs": "Dir: McCowan, George - Year: 1972", "fresh": "Dir: Yakin, Boaz - Year: 1994", "hexed": "Dir: Spencer, Alan - Year: 1993", "chain": "Dir: Cohen, Jem - Year: 2004", "chuka": "Dir: Douglas, Gordon - Year: 1967", "steps": "Dir: Rybczynski, Zbigniew - Year: 1987", "creep": "Dir: Brice, Patrick - Year: 2014", "bliss": "Dir: Begos, Joe - Year: 2019", "house": "Dir: Miner, Steve - Year: 1985", "tully": "Dir: Reitman, Jason - Year: 2018", "diane": "Dir: Jones, Kent - Year: 2018", "tower": "Dir: Maitland, Keith - Year: 2016", "power": "Dir: Lumet, Sidney - Year: 1986", "bobby": "Dir: Estevez, Emilio - Year: 2006", "gizmo": "Dir: Smith, Howard - Year: 1977", "terri": "Dir: Jacobs, Azazel - Year: 2011", "45365": "Dir: Ross IV, Bill & Turner Ross - Year: 2009", "elves": "Dir: Mandel, Jeffrey - Year: 1989", "golub": "Dir: Blumenthal, Jerry & Gordon Quinn - Year: 1989", "dolls": "Dir: Gordon, Stuart - Year: 1987", "holes": "Dir: Davis, Andrew - Year: 2003",
    "elvis": "Dir: Mekas, Jonas - Year: 2001", "alone": "Dir: Dwoskin, Stephen - Year: 1964", "horse": "Dir: Warhol, Andy - Year: 1965", "steel": "Dir: Carver, Steve - Year: 1979", "flirt": "Dir: Hartley, Hal - Year: 1995", "bones": "Dir: Dickerson, Ernest R. - Year: 2001", "chuck": "Dir: Falardeau, Philippe - Year: 2016", "abuse": "Dir: Bressan Jr., Arthur J. - Year: 1983", "sleep": "Dir: Warhol, Andy - Year: 1963", "georg": "Dir: Kaye, Stanton - Year: 1964", "super": "Dir: Gunn, James - Year: 2011", "fresh": "Dir: Cave, Mimi - Year: 2022", "nanny": "Dir: Jusu, Nikyatu - Year: 2022", "smile": "Dir: Finn, Parker - Year: 2022", "mayor": "Dir: Osit, David - Year: 2020", "agnes": "Dir: Reece, Mickey - Year: 2021", "split": "Dir: Shyamalan, M.Night - Year: 2016", "mimic": "Dir: del Toro, Guillermo - Year: 1997", "spawn": "Dir: Dippe, Mark A.Z. - Year: 1997", "shaft": "Dir: Singleton, John - Year: 2000", "venom": "Dir: Fleischer, Ruben - Year: 2018", "manic": "Dir: Melamed, Jordan - Year: 2001", "dudes": "Dir: Spheeris, Penelope - Year: 1987", "fraud": "Dir: Fleischer Camp, Dean - Year: 2016", "u - 571": "Dir: Mostow, Jonathan - Year: 2000", "focus": "Dir: Ficarra, Glenn & John Requa - Year: 2015", "punks": "Dir: Polk, Patrik - Ian - Year: 2000", "roman": "Dir: Bettis, Angela - Year: 2006", "below": "Dir: Twohy, David - Year: 2002", "lemmy": "Dir: Olliver, Greg & Wes Orshoski - Year: 2010", "alibi": "Dir: West, Roland - Year: 1929", "alive": "Dir: Marshall, Frank - Year: 1993", "chang": "Dir: Cooper, Merian C. & Ernest B.Schoedsack - Year: 1927", "prime": "Dir: Younger, Ben - Year: 2005", "congo": "Dir: Marshall, Frank - Year: 1995", "milch": "Dir: Kovalyov, Igor - Year: 2005", "cobra": "Dir: Cosmatos, George P. - Year: 1986", "posse": "Dir: Van Peebles, Mario - Year: 1993", "class": "Dir: Carlino, Lewis John - Year: 1983", "heavy": "Dir: Mangold, James - Year: 1995", "pound": "Dir: Downey Sr., Robert - Year: 1970", "touch": "Dir: Schrader, Paul - Year: 1997", "lorna": "Dir: Meyer, Russ - Year: 1964", "macao": "Dir: von Sternberg, Josef - Year: 1952", "star!": "Dir: Wise, Robert - Year: 1968", "diane": "Dir: Miller, David - Year: 1956", "vixen": "Dir: Meyer, Russ - Year: 1968", "shock": "Dir: Werker, Alfred L. - Year: 1946", "lured": "Dir: Sirk, Douglas - Year: 1947", "vicki": "Dir: Horner, Harry - Year: 1953", "julie": "Dir: Stone, Andrew L. - Year: 1956", "tevye": "Dir: Schwartz, Maurice - Year: 1939", "bread": "Dir: Park, Ida May - Year: 1918", "c - man": "Dir: Lerner, Joseph - Year: 1949", "offon": "Dir: Bartlett, Scott - Year: 1968", "peege": "Dir: Kleiser, Randal - Year: 1972", "eegah": "Dir: Hall Sr., Arch - Year: 1963", "carny": "Dir: Kaylor, Robert - Year: 1980", "angel": "Dir: O'Neill, Robert Vincent - Year: 1984", "sherpa": "Dir: Peedom, Jennifer - Year: 2015", "cousin": "Dir: Elliot, Adam - Year: 1999", "mullet": "Dir: Caesar, David - Year: 2001", "thirst": "Dir: Hardy, Rod - Year: 1979", "tracks": "Dir: Curran, John - Year: 2013", "balibo": "Dir: Connolly, Robert - Year: 2009", "praise": "Dir: Curran, John - Year: 1998", "breath": "Dir: Baker, Simon - Year: 2017", "caddie": "Dir: Crombie, Donald - Year: 1976", "warrah": "Dir: Cantrill, Corinne & Arthur Cantrill - Year: 1982", "sirens": "Dir: Duigan, John - Year: 1994", "spider": "Dir: Cronenberg, David - Year: 2002", "kissed": "Dir: Stopkewich, Lynne - Year: 1996", "lilies": "Dir: Greyson, John - Year: 1996", "mosaic": "Dir: Lambart, Evelyn & Norman McLaren - Year: 1966", "ararat": "Dir: Egoyan, Atom - Year: 2002", "maudie": "Dir: Walsh, Aisling - Year: 2016", "camera": "Dir: Cronenberg, David - Year: 2000", "splice": "Dir: Natali, Vincenzo - Year: 2010", "stereo": "Dir: Cronenberg, David - Year: 1969", "things": "Dir: Jordan, Andrew - Year: 1989", "hunger": "Dir: Foldes, Peter - Year: 1974", "masala": "Dir: Krishna, Srinivas - Year: 1991", "garage": "Dir: Abrahamson, Lenny - Year: 2007", "kisses": "Dir: Daly, Lance - Year: 2008", "poitín": "Dir: Quinn, Bob - Year: 1978", "brazil": "Dir: Gilliam, Terry - Year: 1985", "hunger": "Dir: McQueen, Steve - Year: 2008", "lolita": "Dir: Kubrick, Stanley - Year: 1962", "frenzy": "Dir: Hitchcock, Alfred - Year: 1972", "gandhi": "Dir: Attenborough, Richard - Year: 1982", "hamlet": "Dir: Olivier, Laurence - Year: 1948", "london": "Dir: Keiller, Patrick - Year: 1994", "blight": "Dir: Smith, John - Year: 1996", "victim": "Dir: Dearden, Basil - Year: 1961", "gasman": "Dir: Ramsay, Lynne - Year: 1997", "aerial": "Dir: Tait, Margaret - Year: 1974", "zardoz": "Dir: Boorman, John - Year: 1974", "mahler": "Dir: Russell, Ken - Year: 1974", "exodus": "Dir: McQueen, Steve - Year: 1997", "melody": "Dir: Hussein, Waris - Year: 1971", "onegin": "Dir: Fiennes, Martha - Year: 1998", "launch": "Dir: Martin, Murray & Peter Roberts - Year: 1974", "asylum": "Dir: Baker, Roy Ward - Year: 1972", "purple": "Dir: Akomfrah, John - Year: 2017", "odette": "Dir: Wilcox, Herbert - Year: 1950", "breath": "Dir: Murakami, Jimmy T. - Year: 1967", "images": "Dir: Altman, Robert - Year: 1972", "priest": "Dir: Bird, Antonia - Year: 1994", "damage": "Dir: Malle, Louis - Year: 1992", "censor": "Dir: Bailey-Bond, Prano - Year: 2021", "widows": "Dir: McQueen, Steve - Year: 2018", "legend": "Dir: Scott, Ridley - Year: 1985", "loving": "Dir: Nichols, Jeff - Year: 2016", "joanna": "Dir: Sarne, Michael - Year: 1968", "stoker": "Dir: Park Chan-wook - Year: 2013", "duffer": "Dir: Despins, Joseph & William Dumaresq - Year: 1971", "clouds": "Dir: Gidal, Peter - Year: 1969", "moment": "Dir: Dwoskin, Stephen - Year: 1968", "sylvia": "Dir: Jeffs, Christine - Year: 2003", "frieda": "Dir: Dearden, Basil - Year: 1947", "broken": "Dir: Norris, Rufus - Year: 2012", "ghosts": "Dir: Broomfield, Nick - Year: 2006", "robbie": "Dir: Dunkley, Ronald - Year: 1979", "possum": "Dir: Holness, Matthew - Year: 2017", "fright": "Dir: Collinson, Peter - Year: 1971", "jigsaw": "Dir: Guest, Val - Year: 1962", "united": "Dir: Strong, James - Year: 2011", "rabbit": "Dir: Wrake, Run - Year: 2005", "stevie": "Dir: Enders, Robert - Year: 1978", "escape": "Dir: Mankiewicz, Joseph L. - Year: 1948", "gothic": "Dir: Russell, Ken - Year: 1986", "psycho": "Dir: Hitchcock, Alfred - Year: 1960",
    "freaks": "Dir: Browning, Tod - Year: 1932", "marnie": "Dir: Hitchcock, Alfred - Year: 1964", "aliens": "Dir: Cameron, James - Year: 1986", "casino": "Dir: Scorsese, Martin - Year: 1995", "carrie": "Dir: De Palma, Brian - Year: 1976", "wall-e": "Dir: Stanton, Andrew - Year: 2008", "zodiac": "Dir: Fincher, David - Year: 2007", "detour": "Dir: Ulmer, Edgar G. - Year: 1945", "gloria": "Dir: Cassavetes, John - Year: 1980", "avatar": "Dir: Cameron, James - Year: 2009", "empire": "Dir: Warhol, Andy - Year: 1964", "baraka": "Dir: Fricke, Ron - Year: 1992", "lilith": "Dir: Rossen, Robert - Year: 1964", "scream": "Dir: Craven, Wes - Year: 1996", "eureka": "Dir: Roeg, Nicolas - Year: 1983", "grease": "Dir: Kleiser, Randal - Year: 1978", "poison": "Dir: Haynes, Todd - Year: 1991", "clerks": "Dir: Smith, Kevin - Year: 1994", "pariah": "Dir: Rees, Dee - Year: 2011", "ishtar": "Dir: May, Elaine - Year: 1987", "martin": "Dir: Romero, George A. - Year: 1977", "picnic": "Dir: Logan, Joshua - Year: 1955", "report": "Dir: Conner, Bruce - Year: 1965", "patton": "Dir: Schaffner, Franklin J. - Year: 1970", "primer": "Dir: Carruth, Shane - Year: 2004", "batman": "Dir: Burton, Tim - Year: 1989", "ruskin": "Dir: Beavers, Robert - Year: 1974", "exodus": "Dir: Preminger, Otto - Year: 1960", "snatch": "Dir: Ritchie, Guy - Year: 2000", "munich": "Dir: Spielberg, Steven - Year: 2005", "looper": "Dir: Johnson, Rian - Year: 2012", "frozen": "Dir: Buck, Chris & Jennifer Lee - Year: 2013", "stevie": "Dir: James, Steve - Year: 2002", "sleuth": "Dir: Mankiewicz, Joseph L. - Year: 1972", "carrie": "Dir: Wyler, William - Year: 1952", "misery": "Dir: Reiner, Rob - Year: 1990", "friday": "Dir: Gray, F. Gary - Year: 1995", "barfly": "Dir: Schroeder, Barbet - Year: 1987", "shulie": "Dir: Subrin, Elisabeth - Year: 1998", "fletch": "Dir: Ritchie, Michael - Year: 1985", "selena": "Dir: Nava, Gregory - Year: 1997", "caught": "Dir: Ophüls, Max - Year: 1949", "d.o.a.": "Dir: Maté, Rudolph - Year: 1950", "harvey": "Dir: Koster, Henry - Year: 1950", "hamlet": "Dir: Branagh, Kenneth - Year: 1996", "attica": "Dir: Firestone, Cinda - Year: 1974", "suture": "Dir: McGehee, Scott & David Siegel - Year: 1993", "salomé": "Dir: Bryant, Charles - Year: 1922", "ballet": "Dir: Wiseman, Frederick - Year: 1995", "popeye": "Dir: Altman, Robert - Year: 1980", "breezy": "Dir: Eastwood, Clint - Year: 1973", "domino": "Dir: Scott, Tony - Year: 2005", "cheese": "Dir: Rottenberg, Mika - Year: 2008", "psycho": "Dir: Van Sant, Gus - Year: 1998", "minari": "Dir: Chung, Lee Isaac - Year: 2020", "marley": "Dir: Macdonald, Kevin - Year: 2012", "oculus": "Dir: Flanagan, Mike - Year: 2013", "jeremy": "Dir: Barron, Arthur - Year: 1973", "alien³": "Dir: Fincher, David - Year: 1992", "convoy": "Dir: Peckinpah, Sam - Year: 1978", "beauty": "Dir: Dosunmu, Andrew - Year: 2022", "pneuma": "Dir: Dorsky, Nathaniel - Year: 1983", "unrest": "Dir: Brea, Jennifer - Year: 2017", "bernie": "Dir: Linklater, Richard - Year: 2011", "sandow": "Dir: Dickson, W.K.L. - Year: 1896", "essene": "Dir: Wiseman, Frederick - Year: 1972", "hitman": "Dir: Gens, Xavier - Year: 2007", "eureka": "Dir: Gehr, Ernie - Year: 1974", "sahara": "Dir: Korda, Zoltan - Year: 1943", "jivaro": "Dir: Ludwig, Edward - Year: 1954", "carmen": "Dir: DeMille, Cecil B. - Year: 1915", "marjoe": "Dir: Smith, Howard & Sarah Kernochan - Year: 1972", "maniac": "Dir: Lustig, William - Year: 1980", "mid90s": "Dir: Hill, Jonah - Year: 2018", "batman": "Dir: Martinson, Leslie H. - Year: 1966", "capote": "Dir: Miller, Bennett - Year: 2005", "cyborg": "Dir: Pyun, Albert - Year: 1989", "kundun": "Dir: Scorsese, Martin - Year: 1997", "apache": "Dir: Aldrich, Robert - Year: 1954", "postal": "Dir: Boll, Uwe - Year: 2007", "avalon": "Dir: Levinson, Barry - Year: 1990", "quills": "Dir: Kaufman, Philip - Year: 2000", "speedy": "Dir: Wilde, Ted - Year: 1928", "looker": "Dir: Crichton, Michael - Year: 1981", "sxxx80": "Dir: Cazazza, Monte & Tana Emmolo Smith - Year: 1980", "walker": "Dir: Cox, Alex - Year: 1987", "xanadu": "Dir: Greenwald, Robert - Year: 1980", "spring": "Dir: Benson, Justin & Aaron Moorhead - Year: 2014", "arthur": "Dir: Gordon, Steve - Year: 1981", "willow": "Dir: Howard, Ron - Year: 1988", "asylum": "Dir: Robinson, Peter - Year: 1972", "wolfen": "Dir: Wadleigh, Michael - Year: 1981", "ransom": "Dir: Howard, Ron - Year: 1996", "cocoon": "Dir: Howard, Ron - Year: 1985", "fences": "Dir: Washington, Denzel - Year: 2016", "desire": "Dir: Borzage, Frank - Year: 1936", "s.o.b.": "Dir: Edwards, Blake - Year: 1981", "ronnie": "Dir: McDowell, Curt - Year: 1972", "ramrod": "Dir: de Toth, André - Year: 1947", "tumult": "Dir: Demissie, Yemane I. - Year: 1996", "splash": "Dir: Howard, Ron - Year: 1984", "hostel": "Dir: Roth, Eli - Year: 2005", "krisha": "Dir: Shults, Trey Edward - Year: 2015", "orange": "Dir: Johnson, Karen - Year: 1971", "wilson": "Dir: King, Henry - Year: 1944", "skidoo": "Dir: Preminger, Otto - Year: 1968", "killed": "Dir: Jones, William E. - Year: 2009", "agatha": "Dir: Apted, Michael - Year: 1979", "aubade": "Dir: Dorsky, Nathaniel - Year: 2010", "flight": "Dir: Zemeckis, Robert - Year: 2012", "levity": "Dir: Solomon, Ed - Year: 2002", "lianna": "Dir: Sayles, John - Year: 1983", "sliver": "Dir: Noyce, Phillip - Year: 1993", "bubble": "Dir: Soderbergh, Steven - Year: 2005", "juarez": "Dir: Dieterle, William - Year: 1939", "weiner": "Dir: Kriegman, Josh & Elyse Steinberg - Year: 2016", "cowboy": "Dir: Daves, Delmer - Year: 1958", "allied": "Dir: Zemeckis, Robert - Year: 2016", "hooper": "Dir: Needham, Hal - Year: 1978", "triste": "Dir: Dorsky, Nathaniel - Year: 1996", "crisis": "Dir: Brooks, Richard - Year: 1950", "liliom": "Dir: Borzage, Frank - Year: 1930", "switch": "Dir: Edwards, Blake - Year: 1991", "cypher": "Dir: Natali, Vincenzo - Year: 2002", "becket": "Dir: Glenville, Peter - Year: 1964", "payday": "Dir: Duke, Daryl - Year: 1973", "hustle": "Dir: Aldrich, Robert - Year: 1975", "topper": "Dir: McLeod, Norman Z. - Year: 1937", "nobody": "Dir: Naishuller, Ilya - Year: 2021", "freaky": "Dir: Landon, Christopher - Year: 2020", "unsane": "Dir: Soderbergh, Steven - Year: 2018", "daniel": "Dir: Lumet, Sidney - Year: 1983",
    "wanted": "Dir: Bekmambetov, Timur - Year: 2008", "s1m0ne": "Dir: Niccol, Andrew - Year: 2002", "eskimo": "Dir: Van Dyke, W.S. - Year: 1933", "norbit": "Dir: Robbins, Brian - Year: 2007", "hawaii": "Dir: Hill, George Roy - Year: 1966", "gidget": "Dir: Wendkos, Paul - Year: 1959", "billie": "Dir: Weis, Don - Year: 1965", "hamlet": "Dir: Almereyda, Michael - Year: 2000", "crisis": "Dir: Kline, Herbert - Year: 1939", "mirage": "Dir: Dmytryk, Edward - Year: 1965", "slaves": "Dir: Biberman, Herbert J. - Year: 1969", "breach": "Dir: Ray, Billy - Year: 2006", "mother": "Dir: Brooks, Albert - Year: 1996", "kismet": "Dir: Minnelli, Vincente - Year: 1955", "margie": "Dir: King, Henry - Year: 1946", "edmond": "Dir: Gordon, Stuart - Year: 2005", "casbah": "Dir: Berry, John - Year: 1948", "kaboom": "Dir: Araki, Gregg - Year: 2010", "powder": "Dir: Salva, Victor - Year: 1995", "bedlam": "Dir: Robson, Mark - Year: 1946", "bataan": "Dir: Garnett, Tay - Year: 1943", "blotto": "Dir: Parrott, James - Year: 1930", "escape": "Dir: LeRoy, Mervyn - Year: 1940", "barbie": "Dir: Gerwig, Greta - Year: 2023", "junior": "Dir: Reitman, Ivan - Year: 1994", "malice": "Dir: Becker, Harold - Year: 1993", "onward": "Dir: Scanlon, Dan - Year: 2020", "deluge": "Dir: Feist, Felix E. - Year: 1933", "reggae": "Dir: Ové, Horace - Year: 1971", "damsel": "Dir: Zellner, David & Nathan Zellner - Year: 2018", "wounds": "Dir: Anvari, Babak - Year: 2019", "groove": "Dir: Harrison, Greg - Year: 2000", "mayhem": "Dir: Lynch, Joe - Year: 2017", "gemini": "Dir: Katz, Aaron - Year: 2017", "g.b.f.": "Dir: Stein, Darren - Year: 2013", "casper": "Dir: Silberling, Brad - Year: 1995", "trolls": "Dir: Mitchell, Mike - Year: 2016", "savior": "Dir: Antonijevic, Predrag - Year: 1997", "pickup": "Dir: Haas, Hugo - Year: 1951", "vessel": "Dir: Whitten, Diana - Year: 2014", "robots": "Dir: Wedge, Chris - Year: 2005", "saved!": "Dir: Dannelly, Brian - Year: 2004", "caught": "Dir: Kiley, Maggie - Year: 2015", "carrie": "Dir: Peirce, Kimberly - Year: 2013", "frozen": "Dir: Green, Adam - Year: 2009", "carver": "Dir: DiPrimio, Emily - Year: 2015", "topaze": "Dir: d'Arrast, Harry - Year: 1933", "yantra": "Dir: Whitney, James - Year: 1957", "static": "Dir: Romanek, Mark - Year: 1985", "winter": "Dir: Dorsky, Nathaniel - Year: 2008", "o.s.s.": "Dir: Pichel, Irving - Year: 1946", "l.i.e.": "Dir: Cuesta, Michael - Year: 2001", "hombre": "Dir: Ritt, Martin - Year: 1967", "charly": "Dir: Nelson, Ralph - Year: 1968", "sunday": "Dir: Nossiter, Jonathan - Year: 1997", "prison": "Dir: Harlin, Renny - Year: 1988", "nomads": "Dir: McTiernan, John - Year: 1986", "tarzan": "Dir: Lima, Kevin & Chris Buck - Year: 1999", "pecker": "Dir: Waters, John - Year: 1998", "sphere": "Dir: Levinson, Barry - Year: 1998", "sogobi": "Dir: Benning, James - Year: 2002", "closer": "Dir: Nichols, Mike - Year: 2004", "trumbo": "Dir: Roach, Jay - Year: 2015", "pinero": "Dir: Ichaso, Leon - Year: 2001", "harper": "Dir: Smight, Jack - Year: 1966", "framed": "Dir: Wallace, Richard - Year: 1947", "kinsey": "Dir: Condon, Bill - Year: 2004", "loving": "Dir: Kershner, Irvin - Year: 1970", "impact": "Dir: Lubin, Arthur - Year: 1949", "d.o.a.": "Dir: Morton, Rocky / Annabel Jankel - Year: 1988", "maniac": "Dir: Esper, Dwain - Year: 1934", "jubilo": "Dir: Badger, Clarence G. - Year: 1919", "jigsaw": "Dir: Markle, Fletcher - Year: 1949", "vortex": "Dir: B., Beth & Scott B. - Year: 1982", "mingus": "Dir: Reichman, Thomas - Year: 1968", "gambit": "Dir: Neame, Ronald - Year: 1966", "arruza": "Dir: Boetticher, Budd - Year: 1972", "latino": "Dir: Wexler, Haskell - Year: 1985", "bolero": "Dir: Derek, John - Year: 1984", "squirm": "Dir: Lieberman, Jeff - Year: 1976", "tracks": "Dir: Jaglom, Henry - Year: 1976", "tattoo": "Dir: Brooks, Bob - Year: 1981", "d.o.a.": "Dir: Kowalski, Lech - Year: 1981", "always": "Dir: Jaglom, Henry - Year: 1985", "plenty": "Dir: Schepisi, Fred - Year: 1985", "sweetie": "Dir: Campion, Jane - Year: 1989", "chopper": "Dir: Dominik, Andrew - Year: 2000", "malcolm": "Dir: Tass, Nadia - Year: 1986", "patrick": "Dir: Franklin, Richard - Year: 1978", "bedevil": "Dir: Moffatt, Tracey - Year: 1993", "blessed": "Dir: Kokkinos, Ana - Year: 2009", "knowing": "Dir: Proyas, Alex - Year: 2009", "waiting": "Dir: McKimmie, Jackie - Year: 1990", "vincent": "Dir: Cox, Paul - Year: 1987", "manless": "Dir: Kozic, Maria - Year: 1981", "healing": "Dir: Monahan, Craig - Year: 2014", "rampage": "Dir: Gittoes, George - Year: 2006", "exotica": "Dir: Egoyan, Atom - Year: 1994", "shivers": "Dir: Cronenberg, David - Year: 1975", "careful": "Dir: Maddin, Guy - Year: 1992", "porky's": "Dir: Clark, Bob - Year: 1981", "jumping": "Dir: Tezuka, Osamu - Year: 1984", "stander": "Dir: Hughes, Bronwen - Year: 2003", "citadel": "Dir: Egoyan, Atom - Year: 2006", "keyhole": "Dir: Maddin, Guy - Year: 2011", "genesis": "Dir: Lesage, Philippe - Year: 2018", "riddick": "Dir: Twohy, David - Year: 2013", "wolfcop": "Dir: Dean, Lowell - Year: 2014", "amreeka": "Dir: Dabis, Cherien - Year: 2009", "rituals": "Dir: Carter, Peter - Year: 1978", "trigger": "Dir: McDonald, Bruce - Year: 2010", "octobre": "Dir: Falardeau, Pierre - Year: 1994", "calvary": "Dir: McDonagh, John Michael - Year: 2014", "silence": "Dir: Collins, Pat - Year: 2012", "cousins": "Dir: Gardiner, Ainsley & Briar Grace Smith - Year: 2020", "tickled": "Dir: Farrier, David & Dylan Reeve - Year: 2016", "fantail": "Dir: Vowell, Curtis - Year: 2013", "runaway": "Dir: O'Shea, John - Year: 1964", "orlando": "Dir: Potter, Sally - Year: 1992", "dracula": "Dir: Fisher, Terence - Year: 1958", "variety": "Dir: Gordon, Bette - Year: 1983", "weekend": "Dir: Haigh, Andrew - Year: 2011", "petulia": "Dir: Lester, Richard - Year: 1968", "darling": "Dir: Schlesinger, John - Year: 1965", "dunkirk": "Dir: Nolan, Christopher - Year: 2017", "babylon": "Dir: Rosso, Franco - Year: 1980", "belfast": "Dir: Branagh, Kenneth - Year: 2021", "maurice": "Dir: Ivory, James - Year: 1987", "oliver!": "Dir: Reed, Carol - Year: 1968", "macbeth": "Dir: Polanski, Roman - Year: 1971", "jubilee": "Dir: Jarman, Derek - Year: 1978", "control": "Dir: Corbijn, Anton - Year: 2007", "skyfall": "Dir: Mendes, Sam - Year: 2012",
    "scrooge": "Dir: Hurst, Brian Desmond - Year: 1951", "deadpan": "Dir: McQueen, Steve - Year: 1997", "citadel": "Dir: Smith, John - Year: 2021", "glimpse": "Dir: Cleary, Benjamin & Michael O'Connor - Year: 2021", "farming": "Dir: Akinnuoye-Agbaje, Adewale - Year: 2018", "temenos": "Dir: Danino, Nina - Year: 1998", "trishna": "Dir: Winterbottom, Michael - Year: 2011", "isadora": "Dir: Reisz, Karel - Year: 1968", "chaplin": "Dir: Attenborough, Richard - Year: 1992", "gumshoe": "Dir: Frears, Stephen - Year: 1972", "murder!": "Dir: Hitchcock, Alfred - Year: 1930", "morgan!": "Dir: Reisz, Karel - Year: 1966", "inserts": "Dir: Byrum, John - Year: 1975", "mclibel": "Dir: Armstrong, Franny - Year: 2005", "lilting": "Dir: Hong Khaou - Year: 2013", "robbery": "Dir: Yates, Peter - Year: 1967", "payroll": "Dir: Hayers, Sidney - Year: 1961", "virunga": "Dir: von Ensiedel, Orlando - Year: 2014", "villain": "Dir: Tuchner, Michael - Year: 1971", "bronson": "Dir: Refn, Nicolas Winding - Year: 2008", "knuckle": "Dir: Palmer, Ian - Year: 2011", "scrooge": "Dir: Neame, Ronald - Year: 1970", "orphans": "Dir: Mullan, Peter - Year: 1997", "othello": "Dir: Burge, Stuart - Year: 1965", "apaches": "Dir: Mackenzie, John - Year: 1977", "quartet": "Dir: Annakin, Ken/Arthur Crabtree/Harold French/Ralph Smart - Year: 1949", "colette": "Dir: Westmoreland, Wash - Year: 2018", "anthony": "Dir: van Tulleken, Jonathan - Year: 2014", "assault": "Dir: Hayers, Sidney - Year: 1971", "cowboys": "Dir: Mulloy, Phil - Year: 1991", "jawbone": "Dir: Napper, Thomas - Year: 2016", "bedelia": "Dir: Comfort, Lance - Year: 1946", "citadel": "Dir: Foy, Ciaran - Year: 2012", "impulse": "Dir: Endfield, Cy - Year: 1954", "marilyn": "Dir: Rilla, Wolf - Year: 1953", "vertigo": "Dir: Hitchcock, Alfred - Year: 1958", "sunrise": "Dir: Murnau, F.W. - Year: 1927", "cabaret": "Dir: Fosse, Bob - Year: 1972", "amadeus": "Dir: Forman, Milos - Year: 1984", "network": "Dir: Lumet, Sidney - Year: 1976", "boyhood": "Dir: Linklater, Richard - Year: 2014", "tootsie": "Dir: Pollack, Sydney - Year: 1982", "hatari!": "Dir: Hawks, Howard - Year: 1962", "shadows": "Dir: Cassavetes, John - Year: 1959", "rebecca": "Dir: Hitchcock, Alfred - Year: 1940", "titanic": "Dir: Cameron, James - Year: 1997", "robocop": "Dir: Verhoeven, Paul - Year: 1987", "ben-hur": "Dir: Wyler, William - Year: 1959", "morocco": "Dir: von Sternberg, Josef - Year: 1930", "memento": "Dir: Nolan, Christopher - Year: 2000", "welfare": "Dir: Wiseman, Frederick - Year: 1975", "m*a*s*h": "Dir: Altman, Robert - Year: 1970", "arrival": "Dir: Villeneuve, Denis - Year: 2016", "witness": "Dir: Weir, Peter - Year: 1985", "holiday": "Dir: Cukor, George - Year: 1938", "gravity": "Dir: Cuarón, Alfonso - Year: 2013", "avanti!": "Dir: Wilder, Billy - Year: 1972", "charade": "Dir: Donen, Stanley - Year: 1963", "platoon": "Dir: Stone, Oliver - Year: 1986", "seconds": "Dir: Frankenheimer, John - Year: 1966", "pursued": "Dir: Walsh, Raoul - Year: 1947", "eniaios": "Dir: Markopoulos, Gregory J. - Year: 1990", "missing": "Dir: Costa-Gavras, Constantin - Year: 1982", "shampoo": "Dir: Ashby, Hal - Year: 1975", "slacker": "Dir: Linklater, Richard - Year: 1991", "bullitt": "Dir: Yates, Peter - Year: 1968", "matewan": "Dir: Sayles, John - Year: 1987", "serpico": "Dir: Lumet, Sidney - Year: 1973", "gattaca": "Dir: Niccol, Andrew - Year: 1997", "decasia": "Dir: Morrison, Bill - Year: 2002", "birdman": "Dir: González Iñárritu, Alejandro - Year: 2014", "outrage": "Dir: Lupino, Ida - Year: 1950", "dracula": "Dir: Browning, Tod - Year: 1931", "fingers": "Dir: Toback, James - Year: 1978", "camille": "Dir: Cukor, George - Year: 1936", "sleeper": "Dir: Allen, Woody - Year: 1973", "silence": "Dir: Scorsese, Martin - Year: 2016", "sankofa": "Dir: Gerima, Haile - Year: 1993", "primary": "Dir: Drew, Robert - Year: 1960", "sisters": "Dir: De Palma, Brian - Year: 1973", "amistad": "Dir: Spielberg, Steven - Year: 1997", "contact": "Dir: Zemeckis, Robert - Year: 1997", "primate": "Dir: Wiseman, Frederick - Year: 1974", "nowhere": "Dir: Araki, Gregg - Year: 1997", "monster": "Dir: Jenkins, Patty - Year: 2003", "allures": "Dir: Belson, Jordan - Year: 1961", "targets": "Dir: Bogdanovich, Peter - Year: 1968", "solaris": "Dir: Soderbergh, Steven - Year: 2002", "america": "Dir: Bradley, Garrett - Year: 2019", "society": "Dir: Yuzna, Brian - Year: 1989", "macbeth": "Dir: Welles, Orson - Year: 1948", "aladdin": "Dir: Musker, John/Ron Clements - Year: 1992", "niagara": "Dir: Hathaway, Henry - Year: 1953", "quixote": "Dir: Baillie, Bruce - Year: 1965", "traffic": "Dir: Soderbergh, Steven - Year: 2000", "bananas": "Dir: Allen, Woody - Year: 1971", "sicario": "Dir: Villeneuve, Denis - Year: 2015", "jumanji": "Dir: Johnston, Joe - Year: 1995", "elysium": "Dir: Blomkamp, Neill - Year: 2013", "buddies": "Dir: Bressan Jr., Arthur J. - Year: 1985", "samsara": "Dir: Fricke, Ron - Year: 2011", "college": "Dir: Keaton, Buster & James W. Horne - Year: 1927", "liberty": "Dir: McCarey, Leo - Year: 1929", "baxter!": "Dir: Jeffries, Lionel - Year: 1973", "jezebel": "Dir: Wyler, William - Year: 1938", "darkman": "Dir: Raimi, Sam - Year: 1990", "starman": "Dir: Carpenter, John - Year: 1984", "uptight": "Dir: Dassin, Jules - Year: 1968", "sanctus": "Dir: Hammer, Barbara - Year: 1990", "lincoln": "Dir: Spielberg, Steven - Year: 2012", "sounder": "Dir: Ritt, Martin - Year: 1972", "camelot": "Dir: Logan, Joshua - Year: 1967", "frantic": "Dir: Polanski, Roman - Year: 1988", "passing": "Dir: Hall, Rebecca - Year: 2021", "shirley": "Dir: Decker, Josephine - Year: 2020", "haircut": "Dir: Warhol, Andy - Year: 1963", "sabrina": "Dir: Wilder, Billy - Year: 1954", "ballast": "Dir: Hammer, Lance - Year: 2008", "redskin": "Dir: Schertzinger, Victor - Year: 1929", "quintet": "Dir: Altman, Robert - Year: 1979", "gloria!": "Dir: Frampton, Hollis - Year: 1979", "singles": "Dir: Crowe, Cameron - Year: 1992", "chicago": "Dir: Marshall, Rob - Year: 2002", "tremors": "Dir: Underwood, Ron - Year: 1989", "gymkata": "Dir: Clouse, Robert - Year: 1985", "tangled": "Dir: Greno, Nathan & Byron Howard - Year: 2010", "attack!": "Dir: Aldrich, Robert - Year: 1956", "hellboy": "Dir: del Toro, Guillermo - Year: 2004",
    "matinee": "Dir: Dante, Joe - Year: 1993", "wildcat": "Dir: Frost, Trevor & Melissa Lesh - Year: 2022", "tempest": "Dir: Mazursky, Paul - Year: 1982", "actress": "Dir: Greene, Robert - Year: 2014", "rapture": "Dir: Guillermin, John - Year: 1965", "lawless": "Dir: Hillcoat, John - Year: 2011", "roxanne": "Dir: Schepisi, Fred - Year: 1987", "topkapi": "Dir: Dassin, Jules - Year: 1964", "piranha": "Dir: Dante, Joe - Year: 1978", "wizards": "Dir: Bakshi, Ralph - Year: 1977", "missile": "Dir: Wiseman, Frederick - Year: 1988", "blacula": "Dir: Crain, William - Year: 1972", "mogambo": "Dir: Ford, John - Year: 1953", "syriana": "Dir: Gaghan, Stephen - Year: 2005", "junebug": "Dir: Morrison, Phil - Year: 2005", "jollies": "Dir: Benning, Sadie - Year: 1990", "pitfall": "Dir: de Toth, André - Year: 1948", "wichita": "Dir: Tourneur, Jacques - Year: 1955", "freaked": "Dir: Stern, Tom & Alex Winter - Year: 1993", "tension": "Dir: Berry, John - Year: 1950", "mother!": "Dir: Aronofsky, Darren - Year: 2017", "matilda": "Dir: DeVito, Danny - Year: 1996", "deseret": "Dir: Benning, James - Year: 1995", "miracle": "Dir: O'Connor, Gavin - Year: 2004", "haywire": "Dir: Soderbergh, Steven - Year: 2011", "kingpin": "Dir: Farrelly, Bob / Peter Farrelly - Year: 1996", "warlock": "Dir: Dmytryk, Edward - Year: 1959", "airport": "Dir: Seaton, George - Year: 1970", "busting": "Dir: Hyams, Peter - Year: 1974", "parents": "Dir: Balaban, Bob - Year: 1989", "machete": "Dir: Rodriguez, Robert & Ethan Maniquis - Year: 2010", "ragtime": "Dir: Forman, Milos - Year: 1981", "outland": "Dir: Hyams, Peter - Year: 1981", "frailty": "Dir: Paxton, Bill - Year: 2001", "detroit": "Dir: Bigelow, Kathryn - Year: 2017", "stripes": "Dir: Reitman, Ivan - Year: 1981", "madigan": "Dir: Siegel, Don - Year: 1968", "firefox": "Dir: Eastwood, Clint - Year: 1982", "catfish": "Dir: Joost, Henry & Ariel Schulman - Year: 2010", "beloved": "Dir: Demme, Jonathan - Year: 1998", "imagine": "Dir: Rybczynski, Zbigniew - Year: 1987", "warrior": "Dir: O'Connor, Gavin - Year: 2011", "roberta": "Dir: Seiter, William A. - Year: 1935", "v/h/s/2": "Dir: Various Directors - Year: 2013", "twister": "Dir: De Bont, Jan - Year: 1996", "hidalgo": "Dir: Johnston, Joe - Year: 2003", "hackers": "Dir: Softley, Iain - Year: 1995", "krampus": "Dir: Dougherty, Michael - Year: 2015", "ant-man": "Dir: Reed, Peyton - Year: 2015", "slither": "Dir: Gunn, James - Year: 2006", "scandal": "Dir: Caton-Jones, Michael - Year: 1989", "chappie": "Dir: Blomkamp, Neill - Year: 2015", "starlet": "Dir: Baker, Sean - Year: 2012", "drácula": "Dir: Melford, George - Year: 1931", "chi-raq": "Dir: Lee, Spike - Year: 2015", "perfect": "Dir: Bridges, James - Year: 1985", "willard": "Dir: Mann, Daniel - Year: 1971", "payback": "Dir: Helgeland, Brian - Year: 1999", "zapped!": "Dir: Rosenthal, Robert J. - Year: 1982", "prancer": "Dir: Hancock, John D. - Year: 1989", "victory": "Dir: Tourneur, Maurice - Year: 1919", "pollock": "Dir: Harris, Ed - Year: 2000", "scratch": "Dir: Pray, Doug - Year: 2001", "equinox": "Dir: Rudolph, Alan - Year: 1992", "mantrap": "Dir: Fleming, Victor - Year: 1926", "babylon": "Dir: Chazelle, Damien - Year: 2022", "encanto": "Dir: Bush, Jared & Byron Howard - Year: 2021", "spencer": "Dir: Larraín, Pablo - Year: 2021", "memphis": "Dir: Sutton, Tim - Year: 2013", "jeffrey": "Dir: Ashley, Christopher - Year: 1995", "cropsey": "Dir: Brancaccio, Barbara & Joshua Zeman - Year: 2009", "conrack": "Dir: Ritt, Martin - Year: 1974", "volcano": "Dir: Jackson, Mick - Year: 1997", "upgrade": "Dir: Whannell, Leigh - Year: 2018", "tabloid": "Dir: Morris, Errol - Year: 2010", "impulse": "Dir: Locke, Sondra - Year: 1990", "beaches": "Dir: Marshall, Garry - Year: 1988", "dragnet": "Dir: Mankiewicz, Tom - Year: 1987", "beowulf": "Dir: Zemeckis, Robert - Year: 2007", "redbelt": "Dir: Mamet, David - Year: 2008", "hohokam": "Dir: Ross, Frank V. - Year: 2007", "ulysses": "Dir: Strick, Joseph - Year: 1967", "twister": "Dir: Almereyda, Michael - Year: 1990", "dracula": "Dir: Badham, John - Year: 1979", "dolores": "Dir: Bratt, Peter - Year: 2017", "georgia": "Dir: Grosbard, Ulu - Year: 1995", "corsair": "Dir: West, Roland - Year: 1931", "samadhi": "Dir: Belson, Jordan - Year: 1967", "kitchen": "Dir: Warhol, Andy - Year: 1965", "species": "Dir: Donaldson, Roger - Year: 1995", "swimfan": "Dir: Polson, John - Year: 2002", "bottoms": "Dir: Seligman, Emma - Year: 2023", "soldier": "Dir: Anderson, Paul W.S. - Year: 1998", "timecop": "Dir: Hyams, Peter - Year: 1994", "willard": "Dir: Morgan, Glen - Year: 2003", "gleason": "Dir: Tweel, Clay - Year: 2016", "freeway": "Dir: Bright, Matthew - Year: 1996", "harriet": "Dir: Lemmons, Kasi - Year: 2019", "strike!": "Dir: Kernochan, Sarah - Year: 1998", "aquaman": "Dir: Wan, James - Year: 2018", "kolobos": "Dir: Liatowitsch, Daniel & David Todd Ocvirk - Year: 1999", "refugee": "Dir: Nakasako, Spencer - Year: 2003", "hancock": "Dir: Berg, Peter - Year: 2008", "orgazmo": "Dir: Parker, Trey - Year: 1997", "notfilm": "Dir: Lipman, Ross - Year: 2015", "caveman": "Dir: Gottlieb, Carl - Year: 1981", "grandma": "Dir: Weitz, Paul - Year: 2015", "chemsex": "Dir: Fairman, William & Max Gogarty - Year: 2015", "humpday": "Dir: Shelton, Lynn - Year: 2009", "altered": "Dir: Sánchez, Eduardo - Year: 2006", "cooties": "Dir: Milott, Jonathan & Cary Murnion - Year: 2014", "inferno": "Dir: Baker, Roy Ward - Year: 1953", "armored": "Dir: Antal, Nimród - Year: 2009", "hammett": "Dir: Wenders, Wim - Year: 1982", "rabbits": "Dir: Lynch, David - Year: 2002", "rockula": "Dir: Bercovici, Luca - Year: 1990", "flipped": "Dir: Reiner, Rob - Year: 2010", "shelter": "Dir: Markowitz, Jonah - Year: 2007", "rawhide": "Dir: Hathaway, Henry - Year: 1951", "bandido": "Dir: Fleischer, Richard - Year: 1956", "impulse": "Dir: Baker, Graham - Year: 1984", "impulse": "Dir: Grefe, William - Year: 1974", "kolkata": "Dir: Lapore, Mark - Year: 2006", "traitor": "Dir: Nachmanoff, Jeffrey - Year: 2008", "foxfire": "Dir: Haywood-Carter, Annette - Year: 1996", "vincent": "Dir: Burton, Tim - Year: 1982", "maytime": "Dir: Leonard, Robert Z. - Year: 1937", "rampage": "Dir: Friedkin, William - Year: 1988", "wendigo": "Dir: Fessenden, Larry - Year: 2001",
    "olympia": "Dir: Feyder, Jacques - Year: 1930", "android": "Dir: Lipstadt, Aaron - Year: 1982", "scorpio": "Dir: Winner, Michael - Year: 1973", "ivanhoe": "Dir: Thorpe, Richard - Year: 1952", "ransom!": "Dir: Segal, Alex - Year: 1956", "chained": "Dir: Brown, Clarence - Year: 1934", "romance": "Dir: Brown, Clarence - Year: 1930", "parnell": "Dir: Stahl, John M. - Year: 1937", "adynata": "Dir: Thornton, Leslie - Year: 1983", "trapped": "Dir: Fleischer, Richard - Year: 1949", "algiers": "Dir: Cromwell, John - Year: 1938", "larceny": "Dir: Sherman, George - Year: 1948", "sirocco": "Dir: Bernhardt, Curtis - Year: 1951", "illegal": "Dir: Allen, Lewis - Year: 1955", "marlowe": "Dir: Bogart, Paul - Year: 1969", "frances": "Dir: Clifford, Graeme - Year: 1982", "destiny": "Dir: Le Borg, Reginald - Year: 1944", "modesta": "Dir: Doniger, Benjamin - Year: 1956", "parable": "Dir: Forsberg, Rolf & Tom Rook - Year: 1964", "felicia": "Dir: Dickson, Bob/Alan Gorg/Trevor Greenwoof - Year: 1965", "chicana": "Dir: Morales, Sylvia - Year: 1979", "slither": "Dir: Zieff, Howard - Year: 1973", "snowtown": "Dir: Kurzel, Justin - Year: 2011", "backlash": "Dir: Bennett, Bill - Year: 1986", "toomelah": "Dir: Sen, Ivan - Year: 2011", "flirting": "Dir: Duigan, John - Year: 1989", "heatwave": "Dir: Noyce, Phillip - Year: 1983", "fortress": "Dir: Nicholson, Arch - Year: 1985", "bastardy": "Dir: Courtin-Wilson, Amiel - Year: 2008", "partisan": "Dir: Kleiman, Ariel - Year: 2015", "disgrace": "Dir: Jacobs, Steve - Year: 2007", "radiance": "Dir: Perkins, Rachel - Year: 1998", "petersen": "Dir: Burstall, Tim - Year: 1974", "calendar": "Dir: Egoyan, Atom - Year: 1993", "existenz": "Dir: Cronenberg, David - Year: 1999", "scanners": "Dir: Cronenberg, David - Year: 1981", "presents": "Dir: Snow, Michael - Year: 1981", "remember": "Dir: Egoyan, Atom - Year: 2015", "scaffold": "Dir: Radwanski, Kazik - Year: 2017", "sonatine": "Dir: Lanctot, Micheline - Year: 1984", "elbowing": "Dir: Driessen, Paul - Year: 1979", "hellions": "Dir: McDonald, Bruce - Year: 2015", "roadkill": "Dir: McDonald, Bruce - Year: 1989", "stations": "Dir: MacGillivray, William D. - Year: 1983", "croupier": "Dir: Hodges, Mike - Year: 1998", "brooklyn": "Dir: Crowley, John - Year: 2015", "saviours": "Dir: Nolan, Liam & Ross Whitaker - Year: 2007", "scarfies": "Dir: Sarkies, Robert - Year: 1999", "accident": "Dir: Losey, Joseph - Year: 1967", "sabotage": "Dir: Hitchcock, Alfred - Year: 1936", "pressure": "Dir: Ové, Horace - Year: 1976", "comrades": "Dir: Douglas, Bill - Year: 1986", "bodysong": "Dir: Pummell, Simon - Year: 2003", "drifters": "Dir: Grierson, John - Year: 1929", "monsters": "Dir: Edwards, Gareth - Year: 2010", "aftersun": "Dir: Wells, Charlotte - Year: 2022", "gaslight": "Dir: Dickinson, Thorold - Year: 1940", "mangrove": "Dir: McQueen, Steve - Year: 2020", "wetherby": "Dir: Hare, David - Year: 1985", "backbeat": "Dir: Softley, Iain - Year: 1993", "saint-ex": "Dir: Tucker, Anand - Year: 1996", "millions": "Dir: Boyle, Danny - Year: 2004", "terminus": "Dir: Schlesinger, John - Year: 1961", "prevenge": "Dir: Lowe, Alice - Year: 2016", "together": "Dir: Mazzetti, Lorenza & Denis Horne - Year: 1956", "sapphire": "Dir: Dearden, Basil - Year: 1959", "vampyres": "Dir: Larraz, José Ramón - Year: 1974", "triangle": "Dir: Smith, Christopher - Year: 2009", "hardware": "Dir: Stanley, Richard - Year: 1990", "symptoms": "Dir: Larraz, José Ramón - Year: 1974", "hannibal": "Dir: Scott, Ridley - Year: 2001", "overlord": "Dir: Cooper, Stuart - Year: 1975", "messages": "Dir: Sherwin, Guy - Year: 1981-84", "festival": "Dir: Griffin, Annie - Year: 2005", "khartoum": "Dir: Dearden, Basil - Year: 1966", "tideland": "Dir: Gilliam, Terry - Year: 2005", "grenfell": "Dir: McQueen, Steve - Year: 2023", "benjamin": "Dir: Amstell, Simon - Year: 2018", "sweeney!": "Dir: Wickes, David - Year: 1977", "radiator": "Dir: Browne, Tom - Year: 2014", "downhill": "Dir: Hitchcock, Alfred - Year: 1927", "queerama": "Dir: Asquith, Daisy - Year: 2017", "aquarela": "Dir: Kossakovsky, Victor - Year: 2018", "svengali": "Dir: Langley, Noel - Year: 1954", "soulmate": "Dir: Carolyn, Axelle - Year: 2013", "grabbers": "Dir: Wright, Jon - Year: 2012", "thriller": "Dir: Potter, Sally - Year: 1979", "shipyard": "Dir: Rotha, Paul - Year: 1935", "aberdeen": "Dir: Moland, Hans Petter - Year: 2000", "cromwell": "Dir: Hughes, Ken - Year: 1970", "daybreak": "Dir: Bennett, Compton - Year: 1948", "stardust": "Dir: Apted, Michael - Year: 1975", "badlands": "Dir: Malick, Terrence - Year: 1973", "magnolia": "Dir: Anderson, Paul Thomas - Year: 1999", "husbands": "Dir: Cassavetes, John - Year: 1970", "fantasia": "Dir: Various Directors - Year: 1940", "elephant": "Dir: Van Sant, Gus - Year: 2003", "scarface": "Dir: Hawks, Howard - Year: 1932", "rushmore": "Dir: Anderson, Wes - Year: 1998", "salesman": "Dir: Maysles, Albert/David Maysles/Charlotte Zwerin - Year: 1969", "margaret": "Dir: Lonergan, Kenneth - Year: 2011", "scarface": "Dir: De Palma, Brian - Year: 1983", "clueless": "Dir: Heckerling, Amy - Year: 1995", "sideways": "Dir: Payne, Alexander - Year: 2004", "superman": "Dir: Donner, Richard - Year: 1978", "sorcerer": "Dir: Friedkin, William - Year: 1977", "midnight": "Dir: Leisen, Mitchell - Year: 1939", "whiplash": "Dir: Chazelle, Damien - Year: 2014", "suspense": "Dir: Weber, Lois & Phillips Smalley - Year: 1913", "cruising": "Dir: Friedkin, William - Year: 1980", "predator": "Dir: McTiernan, John - Year: 1987", "election": "Dir: Payne, Alexander - Year: 1999", "lonesome": "Dir: Fejös, Pál - Year: 1928", "salvador": "Dir: Stone, Oliver - Year: 1986", "gremlins": "Dir: Dante, Joe - Year: 1984", "crooklyn": "Dir: Lee, Spike - Year: 1994", "paterson": "Dir: Jarmusch, Jim - Year: 2016", "gaslight": "Dir: Cukor, George - Year: 1944", "fearless": "Dir: Weir, Peter - Year: 1993", "moonrise": "Dir: Borzage, Frank - Year: 1948", "papillon": "Dir: Schaffner, Franklin J. - Year: 1973", "heathers": "Dir: Lehmann, Michael - Year: 1989", "notebook": "Dir: Menken, Marie - Year: 1963", "candyman": "Dir: Rose, Bernard - Year: 1992", "superbad": "Dir: Mottola, Greg - Year: 2007", "shortbus": "Dir: Mitchell, John Cameron - Year: 2006", "commando": "Dir: Lester, Mark L. - Year: 1985",
    "face/off": "Dir: Woo, John - Year: 1997", "catch-22": "Dir: Nichols, Mike - Year: 1970", "tokyo-ga": "Dir: Wenders, Wim - Year: 1985", "phantasm": "Dir: Coscarelli, Don - Year: 1979", "precious": "Dir: Daniels, Lee - Year: 2009", "fingered": "Dir: Kern, Richard - Year: 1988", "coraline": "Dir: Selick, Henry - Year: 2009", "silkwood": "Dir: Nichols, Mike - Year: 1983", "swingers": "Dir: Liman, Doug - Year: 1996", "bulworth": "Dir: Beatty, Warren - Year: 1998", "watchmen": "Dir: Snyder, Zack - Year: 2009", "manhatta": "Dir: Sheeler, Charles & Paul Strand - Year: 1921", "shirkers": "Dir: Tan, Sandi - Year: 2018", "sinister": "Dir: Derrickson, Scott - Year: 2012", "nebraska": "Dir: Payne, Alexander - Year: 2013", "dolemite": "Dir: Martin, D'Urville - Year: 1975", "sunshine": "Dir: Boyle, Danny - Year: 2007", "wellness": "Dir: Mahaffy, Jake - Year: 2008", "ravenous": "Dir: Bird, Antonia - Year: 1999", "lifeboat": "Dir: Hitchcock, Alfred - Year: 1944", "wargames": "Dir: Badham, John - Year: 1983", "serenity": "Dir: Whedon, Joss - Year: 2005", "breakin'": "Dir: Silberg, Joel - Year: 1984", "fandango": "Dir: Reynolds, Kevin - Year: 1985", "claudine": "Dir: Berry, John - Year: 1974", "redacted": "Dir: De Palma, Brian - Year: 2007", "cocktail": "Dir: Donaldson, Roger - Year: 1988", "whoopee!": "Dir: Freeland, Thornton - Year: 1930", "kalendar": "Dir: Uman, Naomi - Year: 2008", "d.e.b.s.": "Dir: Robinson, Angela - Year: 2004", "hoosiers": "Dir: Anspaugh, David - Year: 1986", "applause": "Dir: Mamoulian, Rouben - Year: 1929", "cinnamon": "Dir: Everson, Kevin Jerome - Year: 2006", "blackhat": "Dir: Mann, Michael - Year: 2015", "re-entry": "Dir: Belson, Jordan - Year: 1964", "begotten": "Dir: Merhige, E. Elias - Year: 1990", "timecode": "Dir: Figgis, Mike - Year: 2000", "soapdish": "Dir: Hoffman, Michael - Year: 1991", "ruthless": "Dir: Ulmer, Edgar G. - Year: 1948", "manpower": "Dir: Walsh, Raoul - Year: 1941", "zootopia": "Dir: Howard, Byron & Rich Moore - Year: 2016", "kick-ass": "Dir: Vaughn, Matthew - Year: 2010", "mandingo": "Dir: Fleischer, Richard - Year: 1975", "marooned": "Dir: Sturges, John - Year: 1969", "deadpool": "Dir: Miller, Tim - Year: 2016", "protocol": "Dir: Ross, Herbert - Year: 1984", "gunsmoke": "Dir: Juran, Nathan - Year: 1953", "dementia": "Dir: Parker, John - Year: 1955", "columbus": "Dir: Kogonada - Year: 2017", "suburbia": "Dir: Spheeris, Penelope - Year: 1983", "barabbas": "Dir: Fleischer, Richard - Year: 1962", "waitress": "Dir: Shelly, Adrienne - Year: 2007", "suddenly": "Dir: Allen, Lewis - Year: 1954", "thirteen": "Dir: Williams, David D. - Year: 1997", "saboteur": "Dir: Hitchcock, Alfred - Year: 1942", "laughter": "Dir: d'Arrast, Harry - Year: 1930", "sneakers": "Dir: Robinson, Phil Alden - Year: 1992", "pushover": "Dir: Quine, Richard - Year: 1954", "suburbia": "Dir: Linklater, Richard - Year: 1996", "cry - baby": "Dir: Waters, John - Year: 1990", "stardust": "Dir: Vaughn, Matthew - Year: 2007", "twilight": "Dir: Hardwicke, Catherine - Year: 2008", "champion": "Dir: Robson, Mark - Year: 1949", "wattstax": "Dir: Stuart, Mel - Year: 1973", "brubaker": "Dir: Rosenberg, Stuart - Year: 1980", "vampires": "Dir: Carpenter, John - Year: 1998", "insomnia": "Dir: Nolan, Christopher - Year: 2002", "colossal": "Dir: Vigalondo, Nacho - Year: 2016", "dogfight": "Dir: Savoca, Nancy - Year: 1991", "mudbound": "Dir: Rees, Dee - Year: 2017", "godzilla": "Dir: Edwards, Gareth - Year: 2014", "hercules": "Dir: Musker, John / Ron Clements - Year: 1997", "scrooged": "Dir: Donner, Richard - Year: 1988", "rejected": "Dir: Hertzfeldt, Don - Year: 2000", "invictus": "Dir: Eastwood, Clint - Year: 2009", "clockers": "Dir: Lee, Spike - Year: 1995", "mermaids": "Dir: Benjamin, Richard - Year: 1990", "blockers": "Dir: Cannon, Kay - Year: 2018", "overlord": "Dir: Avery, Julius - Year: 2018", "restless": "Dir: Van Sant, Gus - Year: 2011", "sleepers": "Dir: Levinson, Barry - Year: 1996", "hardcore": "Dir: Schrader, Paul - Year: 1979", "thirteen": "Dir: Hardwicke, Catherine - Year: 2003", "calcutta": "Dir: Malle, Louis - Year: 1969", "hamilton": "Dir: Porterfield, Matthew - Year: 2006", "casanova": "Dir: Hallström, Lasse - Year: 2005", "criminal": "Dir: Jacobs, Gregory - Year: 2004", "moonbird": "Dir: Hubley, John - Year: 1959", "hustlers": "Dir: Scafaria, Lorene - Year: 2019", "defiance": "Dir: Zwick, Edward - Year: 2008", "intruder": "Dir: Spiegel, Scott - Year: 1989", "c.h.u.d.": "Dir: Cheek, Douglas - Year: 1984", "wildcats": "Dir: Ritchie, Michael - Year: 1986", "reckless": "Dir: Fleming, Victor - Year: 1935", "deranged": "Dir: Gillen, Jeff / Alan Ormsby - Year: 1974", "moontide": "Dir: Mayo, Archie - Year: 1942", "basquiat": "Dir: Schnabel, Julian - Year: 1996", "cornered": "Dir: Dmytryk, Edward - Year: 1945", "trancers": "Dir: Band, Charles - Year: 1985", "carousel": "Dir: King, Henry - Year: 1956", "megamind": "Dir: McGrath, Tom - Year: 2010", "piercing": "Dir: Pesce, Nicolas - Year: 2018", "francine": "Dir: Cassidy, Brian M. & Melanie Shatzky - Year: 2012", "grounded": "Dir: Feig, Paul - Year: 2006", "bullseye": "Dir: Prister, Alex - Year: 2014", "restrepo": "Dir: Hetherington, Tim & Sebastian Junger - Year: 2010", "stargate": "Dir: Emmerich, Roland - Year: 1994", "excision": "Dir: Bates Jr., Richard - Year: 2012", "lowlands": "Dir: Thompson, Peter - Year: 2009", "caligula": "Dir: Brass, Tinto - Year: 1980", "dynamite": "Dir: DeMille, Cecil B. - Year: 1929", "sangaree": "Dir: Ludwig, Edward - Year: 1953", "maverick": "Dir: Donner, Richard - Year: 1994", "kon - tiki": "Dir: Heyerdahl, Thor - Year: 1951", "brothers": "Dir: Sheridan, Jim - Year: 2009", "lovesong": "Dir: Brakhage, Stan - Year: 2001", "ambition": "Dir: Hartley, Hal - Year: 1991", "promises": "Dir: Bolado, Carlos / B.Z.Goldberg / Justine Shapiro - Year: 2001", "godspell": "Dir: Greene, David - Year: 1973", "rounders": "Dir: Dahl, John - Year: 1998", "riverrun": "Dir: Korty, John - Year: 1970", "funnyman": "Dir: Korty, John - Year: 1967", "counting": "Dir: Cohen, Jem - Year: 2015", "mistress": "Dir: Primus, Barry - Year: 1992", "superman": "Dir: Fleischer, Dave - Year: 1941", "sextette": "Dir: Hughes, Ken - Year: 1978", "moonplay": "Dir: Menken, Marie - Year: 1962", "collapse": "Dir: Smith, Chris - Year: 2009",
    "boundin'": "Dir: Luckey, Bud - Year: 2003", "prophecy": "Dir: Frankenheimer, John - Year: 1979", "oblivion": "Dir: Kosinski, Joseph - Year: 2013", "calcutta": "Dir: Farrow, John - Year: 1947", "outbreak": "Dir: Petersen, Wolfgang - Year: 1995", "eternals": "Dir: Zhao, Chloé - Year: 2021", "geostorm": "Dir: Devlin, Dean - Year: 2017", "twilight": "Dir: Benton, Robert - Year: 1998", "festival": "Dir: Lerner, Murray - Year: 1967", "depraved": "Dir: Fessenden, Larry - Year: 2019", "werewolf": "Dir: Zarindast, Tony - Year: 1995", "impulses": "Dir: Davis, James - Year: 1959", "stigmata": "Dir: Wainwright, Rupert - Year: 1999", "mahogany": "Dir: Gordy, Berry - Year: 1975", "carefree": "Dir: Sandrich, Mark - Year: 1938", "wildlife": "Dir: Dano, Paul - Year: 2018", "carriers": "Dir: Pastor, Àlex & David Pastor - Year: 2009", "defiance": "Dir: Flynn, John - Year: 1980", "lovesong": "Dir: Kim So Yong - Year: 2016", "h.o.t.s.": "Dir: Sindell, Gerald Seth - Year: 1979", "mcconkey": "Dir: Bruce, Rob/Scott Gaffney/Murray Wais/Steve Winter/David Zieff - Year: 2013", "undertow": "Dir: Green, David Gordon - Year: 2004", "splinter": "Dir: Wilkins, Toby - Year: 2008", "deadgirl": "Dir: Sarmiento, Michael & Gadi Harel - Year: 2008", "lovetrue": "Dir: Har'el, Alma - Year: 2016", "unbroken": "Dir: Jolie, Angelina - Year: 2014", "detropia": "Dir: Ewing, Heidi E. & Rachel Grady - Year: 2012", "lymelife": "Dir: Martini, Derick - Year: 2008", "spookies": "Dir: Joseph, Genie - Year: 1986", "tenement": "Dir: Findlay, Roberta - Year: 1985", "pathogen": "Dir: Hagins, Emily - Year: 2006", "anaconda": "Dir: Llosa, Luis - Year: 1997", "surfwise": "Dir: Pray, Doug - Year: 2007", "trespass": "Dir: Hill, Walter - Year: 1992", "palmetto": "Dir: Schlöndorff, Volker - Year: 1998", "critters": "Dir: Herek, Stephen - Year: 1986", "drumline": "Dir: Stone III, Charles - Year: 2002", "ricochet": "Dir: Mulcahy, Russell - Year: 1991", "wordplay": "Dir: Creadon, Patrick - Year: 2006", "mallrats": "Dir: Smith, Kevin - Year: 1995", "sparrows": "Dir: Beaudine, William - Year: 1926", "jacknife": "Dir: Jones, David - Year: 1989", "backlash": "Dir: Sturges, John - Year: 1956", "conquest": "Dir: Brown, Clarence - Year: 1937", "disraeli": "Dir: Green, Alfred E. - Year: 1929", "chocolat": "Dir: Hallström, Lasse - Year: 2000", "homicide": "Dir: Mamet, David - Year: 1991", "mudhoney": "Dir: Meyer, Russ - Year: 1965", "crack - up": "Dir: Reis, Irving - Year: 1946", "nocturne": "Dir: Marin, Edwin L. - Year: 1946", "tomorrow": "Dir: Anthony, Joseph - Year: 1972", "jeopardy": "Dir: Sturges, John - Year: 1953", "suspense": "Dir: Tuttle, Frank - Year: 1946", "patterns": "Dir: Cook, Fielder - Year: 1956", "svengali": "Dir: Mayo, Archie - Year: 1931", "conflict": "Dir: Bernhardt, Curtis - Year: 1945", "whiplash": "Dir: Seiler, Lewis - Year: 1948", "loophole": "Dir: Schuster, Harold D. - Year: 1954", "crashout": "Dir: Foster, Lewis R. - Year: 1955", "backfire": "Dir: Sherman, Vincent - Year: 1950", "delusion": "Dir: Colpaert, Carl - Year: 1991", "pardners": "Dir: Taurog, Norman - Year: 1956", "guncrazy": "Dir: Davis, Tamra - Year: 1992", "playgirl": "Dir: Pevney, Joseph - Year: 1954", "cimarron": "Dir: Ruggles, Wesley - Year: 1931", "undertow": "Dir: Castle, William - Year: 1949", "jealousy": "Dir: Machatý, Gustav - Year: 1945", "jennifer": "Dir: Newton, Joel - Year: 1953", "backlash": "Dir: Forde, Eugene - Year: 1947", "violence": "Dir: Bernhard, Jack - Year: 1947", "unmasked": "Dir: Blair, George - Year: 1950", "violated": "Dir: Strate, Walter - Year: 1953", "incident": "Dir: Beaudine, William - Year: 1948", "manzanar": "Dir: Nakamura, Robert A. - Year: 1971", "unmasked": "Dir: Cunard, Grace & Francis Ford - Year: 1917", "groupies": "Dir: Dorfman, Ron - Year: 1970", "chandler": "Dir: Magwood, Paul - Year: 1971", "sayonara": "Dir: Logan, Joshua - Year: 1957", "ironweed": "Dir: Babenco, Hector - Year: 1987", "galaxina": "Dir: Sachs, William - Year: 1980",
};


const updatehighestStreakmovieDisplay = () => {
    if (highestStreakmovieDisplay) {
        highestStreakmovieDisplay.innerText = `Hottest Streak ! ${highestStreakmovie} ! days in a row`;
    }
};

const updatecurrentStreakmovieDisplay = () => {
    if (currentStreakmovieDisplay) {
        currentStreakmovieDisplay.innerText = `Current Streak ${currentStreakmovie} days in a row`;
    }
};

function displayStreaksmovies() {
    console.log(`Current Streak: ${currentStreakmovie}, Highest Streak: ${highestStreakmovie}`);
    updatehighestStreakmovieDisplay();
    updatecurrentStreakmovieDisplay();// Ensure the highest streak display is always updated
}

/*
function updatePoints(newPoints) {
    if (newPoints > 0) {
        points += newPoints;
        currentStreakmovie += newPoints;
        localStorage.setItem('currentStreakmovie', currentStreakmovie);
        if (currentStreakmovie > highestStreakmovie) {
            highestStreakmovie = currentStreakmovie;
            localStorage.setItem('highestStreakmovie', highestStreakmovie); // Save to local storage
            updatehighestStreakmovieDisplay();
            updatecurrentStreakmovieDisplay();
        }
    } else {
        currentStreakmovie = 0; // Reset current streak if no points are gained
        localStorage.setItem('currentStreakmovie', currentStreakmovie);
    }
    displayStreaksmovies();
}

const checkLastAttemptmovie = () => {
    const lastAttemptmovie = localStorage.getItem('lastAttemptmovie');
    const today = new Date().toISOString().split('T')[0]; // Get YYYY-MM-DD format

    if (lastAttemptmovie === today) {
        alert("You have already played today. Come back tomorrow!");
        window.location.href = "index.html";
        return false;

    }

    return true;
};
*/

function updatePoints(correctAttempt) {
    if (correctAttempt) {
        currentStreakmovie += 1;
        localStorage.setItem('currentStreakmovie', currentStreakmovie);

        if (currentStreakmovie > highestStreakmovie) {
            highestStreakmovie = currentStreakmovie;
            localStorage.setItem('highestStreakmovie', highestStreakmovie); // Save to local storage
        }
    } else {
        currentStreakmovie = 0; // Reset current streak if the attempt is incorrect
        localStorage.setItem('currentStreakmovie', currentStreakmovie);
    }
    displayStreaksmovies();
}

const checkLastAttemptmovie = () => {
    const lastAttemptmovie = localStorage.getItem('lastAttemptmovie');
    const today = new Date().toISOString().split('T')[0]; // Get YYYY-MM-DD format

    if (lastAttemptmovie === today) {
        // alert("You have already played today. Come back tomorrow!");
        document.getElementById('streakModal').style.display = 'block';
        // window.location.href = "index.html";
        return false;
    }

    const yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0];
    if (lastAttemptmovie !== yesterday) {
        currentStreakmovie = 0; // Reset streak if the last attempt was not yesterday
        localStorage.setItem('currentStreakmovie', currentStreakmovie);
       updatecurrentStreakmovieDisplay();
    }

    return true;
};

const setLastAttemptmovie = () => {
    const today = new Date().toISOString().split('T')[0]; // Get YYYY-MM-DD format
    localStorage.setItem('lastAttemptmovie', today);
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
  //  console.log('Selected words:', selectedWord1, selectedWord2, selectedWord3, selectedWord4, selectedWord5);
    // Initialize your game with the daily words
    updateWordDisplay1(selectedWord1);
    updateWordDisplay2(selectedWord2);
    updateWordDisplay3(selectedWord3);
    updateWordDisplay4(selectedWord4);
    updateWordDisplay5(selectedWord5);
    updatehighestStreakmovieDisplay();
    updatecurrentStreakmovieDisplay();
    checkLastAttemptmovie();
    displayStreaksmovies();
};

const updateWordDisplay1 = (selectedWord1) => {
  //  console.log('Updating word display 1:', selectedWord1);
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
    wordcountDisplay.innerText = `There are only ${wordcount} MOVIES...!`;
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
    setLastAttemptmovie();
    const selectedWords = [selectedWord1, selectedWord2, selectedWord3, selectedWord4, selectedWord5];
    associatedWordsMessage = "";
    selectedWords.forEach(word => {
        const cleanWord = word.replace(/\s+/g, ' ').trim();
        if (associatedWords[cleanWord]) {
            associatedWordsMessage += `${cleanWord} = ${associatedWords[cleanWord]}<br>`;
        }
    });
    gameOverMessage.innerHTML = `<strong>Oops a Daisy!<br>YOU LOST!</strong><br><br>Come back tomorrow to try again!<br><br> The MOVIES were: <br>${associatedWordsMessage}`;
    gameOverModal.style.display = 'block';
};

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        wonModal.style.display = 'none';
        if (button.id === 'continueButton') {
            startGame();
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
/*
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
};*/

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
        '.,!#-'
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
    createKeyboard();

    const dailyWords = getDailyWords();
    [selectedWord1, selectedWord2, selectedWord3, selectedWord4, selectedWord5] = dailyWords;

  //  console.log('Selected words:', selectedWord1, selectedWord2, selectedWord3, selectedWord4, selectedWord5); // Add this line

    if (selectedWord1) updateWordDisplay1(selectedWord1);
    if (selectedWord2) updateWordDisplay2(selectedWord2);
    if (selectedWord3) updateWordDisplay3(selectedWord3);
    if (selectedWord4) updateWordDisplay4(selectedWord4);
    if (selectedWord5) updateWordDisplay5(selectedWord5);

    updateLivesDisplay();
    updateIncorrectGuessesDisplay();
    updatepointsDisplay();
    updatewordcountDisplay();
    displayStreaksmovies();
    if (!checkLastAttemptmovie()) return;
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
            updatePoints(1);
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
            wonMessage.innerHTML = `<br><strong>Woo! High Five!<br>They're ALL Right!</strong><br>The movies were:<br> ${associatedWordsMessage}<br>COME BACK TOMORROW<br>FOR FIVE MORE MOVIES<br>`;
            pointsDisplay.innerText = `You WON!`;
            wonModal.style.display = 'block';
            setLastAttemptmovie();
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
