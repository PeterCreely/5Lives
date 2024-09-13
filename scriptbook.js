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
    gameOverMessage.innerHTML = `<strong>Oops a Daisy!<br>YOU LOST!</strong><br><br>Come back tomorrow to try again!<br><br> The BOOKS were: <br>${selectedWord1}, ${selectedWord2}, ${selectedWord3}, ${selectedWord4}, ${selectedWord5}`;
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
            wonMessage.innerHTML = `<br><strong>Woo! High Five!<br>They're ALL Right!</strong><br><br>COME BACK TOMORROW<br>FOR FIVE MORE BOOKS<br>`;
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