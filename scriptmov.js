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
    group1: ["love", "jaws", "heat", "fury", "kids", "juno", "coco", "vice", "room", "chef", "here", "soul", "argo", "rush", "luca", "rudy", "moon", "fear", "lion", "mask", "hugo", "ezra", "cats", "noah", "bolt", "this", "babe", "wild", "jack", "1922", "emma", "kate", "stay", "okja", "rent", "once", "rope", "fame", "zulu", "nine", "wolf", "dual", "womb", "spun", "judy", "gold", "taps", "made", "race", "milk", "jade", "toys", "hard", "tess", "coma", "dope", "scum", "jobs", "hick", "narc", "rush", "pets", "mean", "nana", "fuzz", "cake", "tank", "anna", "land", "jude", "bent", "wolf", "dude", "hush", "shut", "prey", "edtv", "iris", "kilo", "luce", "king", "wide", "camp", "silk", "good", "meet", "lisa", "poms", "tape", "viva", "fido", "russ", "kuso", "mutt", "dare", "bait", "girl", "fled", "duma", "zoom", "more", "rams", "blue", "pimp", "cass", "tony", "play", "gone", "café", "kane", "nora", "pure", "love", "five", "bone", "rain", "howl", "look", "nina", "here", "hair", "anak", "park", "lili", "camp", "sing", "dean", "joni", "phil", "skin", "nana", "styx", "iona", "dawn", "fyre", "hit!", "ruby", "anna", "away", "wake", "high", "sold", "mary", "hurt", "four", "eden", "stir", "love", "rain", "take", "pups", "rage", "moth", "nick", "slam", "dust", "riot", "tilt", "best", "trio", "test", "sand", "gold", "liam", "emma", "duke", "west", "here", "bear", "help", "duck", "ciao", "mojo", "slim", "lola", "bwoy", "rick", "alex", "juan", "zigs", "open", "muna", "dark", "alex", "germ", "dust", "hyde", "repo", "bell", "gaby", "runt", "fell", "jump", "kawa", "jump", "home", "andy", "fran", "blue", "life", "rage", "gaia", "alma", "tish", "anak", "high", "girl", "pigs", "only", "cass", "melt", "step", "emma", "fuel", "bull", "solo", "wear", "take", "snow", "sofi", "anna", "w.c.", "time", "huck", "maya", "opal", "dali", "deal", "maya", "hurt", "east", "year", "will", "city", "grim", "alex", "anna", "echo", "nina", "away", "seed", "trip", "bits", "four", "dune", "leon"],
    group2: ["aloha", "joker", "pearl", "se7en", "logan", "drive", "signs", "after", "atlas", "rocky", "elvis", "holes", "ghost", "alone", "crash", "enemy", "focus", "annie", "emma.", "jules", "naked", "glory", "crash", "sully", "frida", "click", "babel", "mulan", "spawn", "lucas", "carol", "thief", "doubt", "gummo", "annie", "creed", "beast", "green", "lucky", "greta", "bully", "chaos", "havoc", "class", "filth", "chloe", "buddy", "youth", "hanna", "locke", "birth", "nerve", "alive", "timer", "giant", "beast", "relic", "awake", "bitch", "pride", "radio", "speak", "belle", "becky", "brick", "juice", "tully", "dumbo", "bambi", "tommy", "nixon", "alpha", "honey", "candy", "awake", "balto", "north", "magic", "laura", "fresh", "carny", "emily", "rings", "swung", "agora", "truth", "karla", "heist", "bobby", "risen", "rogue", "evita", "selma", "dutch", "gotti", "trust", "diner", "shine", "bugsy", "frank", "yentl", "lenny", "alfie", "titus", "whore", "stone", "smoke", "alfie", "music", "heist", "birdy", "choke", "diana", "gerry", "gator", "faces", "julia", "close", "wilde", "keith", "proof", "hoffa", "tetro", "hours", "gypsy", "crumb", "trade", "alone", "cyrus", "elegy", "foxes", "manic", "hondo", "equus", "benji", "blaze", "viral", "angus", "chéri", "virus", "fluke", "basil", "angel", "kafka", "touch", "kings", "punch", "dread", "venus", "charm", "wanda", "flood", "angel", "stuck", "greed", "kites", "sonny", "porto", "vicki", "sicko", "bliss", "terri", "blaze", "clara", "plush", "duets", "chuck", "aisha", "pinky", "'doc'", "bezos", "flesh", "barry", "freud", "proof", "steel", "trust", "limbo", "wendy", "klimt", "lemon", "grimm", "limbo", "whore", "skins", "stone", "amen.", "angie", "madly", "grace", "nadja", "marie", "syrup", "sodom", "gayby", "julia", "bella", "fanny", "shank", "stick", "drift", "molly", "becks", "three", "blood", "shame", "diane", "joshy", "daddy", "rosie", "crash", "kicks", "macao", "helen", "beans", "angel", "celia", "hyena", "sugar", "lepke", "holly", "fiona", "shank", "misty", "stoic", "hisss", "lydia", "amigo", "siren", "kotch", "touch", "steam", "tully", "live!", "hotel", "robby", "leave", "mercy", "eleni", "jimmy", "blood", "weeds", "misty", "angel", "bliss", "stop!"],
    group3: ["reagan", "zodiac", "daddio", "lolita", "casino", "gidget", "nobody", "wonder", "looper", "dogman", "legend", "blonde", "munich", "misery", "closer", "gifted", "midway", "flight", "brazil", "friday", "solace", "lolita", "tarzan", "willow", "carrie", "chisum", "living", "fallen", "cocoon", "fences", "mid90s", "nimona", "broken", "allied", "enough", "spread", "cherry", "stoker", "inside", "onward", "jungle", "freaks", "powder", "sliver", "capote", "buried", "midway", "colors", "sirens", "tatami", "convoy", "widows", "damage", "freaks", "adrift", "hunger", "patton", "nitram", "bernie", "selena", "hamlet", "spring", "capone", "saved!", "gloria", "serena", "always", "beirut", "maniac", "arctic", "ondine", "domino", "dahmer", "genius", "trance", "wounds", "mayday", "sergio", "barfly", "unsane", "harvey", "equals", "trumbo", "if....", "pecker", "exodus", "snitch", "maggie", "butter", "london", "driven", "paulie", "tekken", "cyrano", "hamlet", "looker", "breach", "enigma", "breezy", "gothic", "breath", "martin", "asylum", "cracks", "radius", "spider", "eureka", "gringo", "sahara", "harper", "summer", "lizzie", "charly", "boléro", "eulogy", "burden", "twelve", "kundun", "bullet", "aporia", "samson", "meteor", "daphne", "hawaii", "evelyn", "madame", "cherry", "alaska", "luther", "amelia", "salome", "onegin", "sylvia", "edmond", "g.b.f.", "hamlet", "angela", "lilith", "images", "jigsaw", "damage", "krisha", "jinnah", "savior", "animal", "iceman", "sleuth", "target", "making", "shiloh", "malone", "zipper", "melody", "casino", "fatima", "prison", "mojave", "stuck!", "pariah", "wolves", "daniel", "london", "hustle", "mcbain", "walker", "stella", "caught", "fedora", "kissed", "lassie", "winged", "bottom", "ararat", "danika", "siesta", "juliet", "outlaw", "ashley", "joshua", "triage", "mental", "shrink", "vulgar", "felony", "inchon", "mahler", "groove", "recoil", "odette", "cowboy", "behind", "yellow", "plenty", "crusoe", "earwig", "agatha", "hunted", "harlow", "rafiki", "attack", "wilson", "static", "vinyan", "tobruk", "ratboy", "bonobo", "yellow", "thirst", "jeremy", "luster", "mohawk", "pickup", "bubble", "stacey", "tigers", "caught", "iguana", "nicole", "domino", "icarus", "framed", "teresa", "jordan", "romero", "deluge", "chance", "spiral", "angela", "beauty", "charly", "wolves", "choose", "bolden", "lianna", "auggie", "phobia", "brides", "payday", "hamlet", "balibo", "secret", "asthma", "ginger", "august", "pinero", "wilson"],
    group4: ["titanic", "babylon", "arrival", "watcher", "spencer", "amadeus", "ferrari", "dunkirk", "shooter", "gattaca", "cruella", "mother!", "contact", "m*a*s*h", "everest", "boyhood", "cabrini", "monster", "hackers", "gravity", "network", "savages", "elysium", "lincoln", "missing", "maestro", "traffic", "witness", "lawless", "jarhead", "reality", "frailty", "payback", "hancock", "oliver!", "volcano", "chaplin", "silence", "serpico", "tootsie", "belfast", "bronson", "tuesday", "rebecca", "rebecca", "revenge", "copycat", "stepmom", "newsies", "inferno", "chappie", "tolkien", "soldier", "sabrina", "airport", "pompeii", "exposed", "macbeth", "singles", "passion", "haywire", "maurice", "miracle", "freeway", "antlers", "nowhere", "harriet", "beaches", "swallow", "bizarre", "beastly", "calvary", "carnage", "amistad", "chained", "matewan", "mowgli:", "colette", "solaris", "colonia", "breathe", "flyboys", "hidalgo", "syriana", "frantic", "starlet", "trapped", "scandal", "control", "chopper", "exotica", "shelter", "annette", "dracula", "twister", "hostage", "weekend", "shirley", "ophelia", "orlando", "victory", "slacker", "siberia", "peacock", "martyrs", "hangman", "beckett", "titanic", "missing", "suspect", "michael", "valmont", "memoria", "archive", "stander", "mummies", "traitor", "matinee", "junebug", "pollock", "twisted", "quartet", "falling", "flipper", "sanctum", "hostile", "willard", "beloved", "bunraku", "rampart", "frances", "emperor", "tadpole", "scorpio", "seeking", "laggies", "spartan", "gunless", "friends", "glitter", "villain", "inferno", "jessica", "petulia", "unknown", "lowlife", "shuttle", "descent", "highway", "jeffrey", "captive", "krystal", "brother", "smashed", "jezebel", "macbeth", "lantana", "marlowe", "wedlock", "perfume", "patrick", "shelley", "sweetie", "outlaws", "evening", "siberia", "telefon", "uncanny", "vampire", "scrooge", "tracers", "jubilee", "journey", "juniper", "denmark", "monster", "convict", "swelter", "sparkle", "inserts", "villain", "redbelt", "shottas", "prancer", "quartet", "isadora", "sounder", "cthulhu", "uptight", "hammett", "mcvicar", "phoenix", "désirée", "winning", "inferno", "octavia", "robbery", "trucker", "citadel", "whisper", "homeboy", "streets", "justine", "plastic", "madison", "mixtape", "houdini", "panther", "diggers", "oleanna", "georgia", "despair", "goliath", "whitney", "frankie", "madigan", "tracker", "realive", "megaman", "bullies", "choices", "tension", "camille", "monsoon", "fingers", "outrage", "screwed", "busting", "endgame", "soldier", "secrets", "rappin'", "mammoth", "cheetah", "macbeth", "cyclone", "ulysses", "hoffman", "godless", "hellion", "foxtrot", "smother", "custody", "bootmen", "humpday", "leather"],
    group5: ["napoleon", "coraline", "twilight", "aftersun", "scarface", "pleasure", "cashback", "caligula", "suspiria", "hamilton", "thirteen", "magnolia", "brothers", "unbroken", "hannibal", "sleepers", "fracture", "intimacy", "kandahar", "swingers", "dogville", "precious", "matilda:", "sideways", "papillon", "hustlers", "mermaids", "southpaw", "wargames", "valkyrie", "hypnotic", "monolith", "papillon", "cocktail", "brooklyn", "chocolat", "serenity", "sneakers", "rounders", "incident", "rushmore", "sorcerer", "colossal", "lovelace", "dinosaur", "defiance", "fearless", "blockers", "felicity", "cruising", "revolver", "badlands", "survival", "daylight", "passages", "prospect", "carriers", "waitress", "paterson", "outbreak", "barnyard", "shoshana", "casanova", "silkwood", "scrooged", "trespass", "invictus", "nebraska", "derailed", "sabotage", "ricochet", "obsessed", "replicas", "basquiat", "polaroid", "waterloo", "automata", "bandidas", "terminal", "mudbound", "columbus", "backbeat", "imperium", "wildlife", "mandingo", "breakin'", "windfall", "paranoia", "fandango", "marshall", "scrapper", "hounddog", "songbird", "ironclad", "dogfight", "twilight", "bulworth", "killshot", "absentia", "querelle", "margaret", "salvador", "tomahawk", "flawless", "morituri", "forsaken", "babygirl", "thursday", "downhill", "remember", "invasion", "carmilla", "fighting", "ironweed", "clockers", "cornered", "suburbia", "parallel", "flirting", "infamous", "brubaker", "khartoum", "zandalee", "patterns", "sabotage", "reckless", "deranged", "wildling", "sunshine", "palmetto", "betrayed", "husbands", "national", "teachers", "lipstick", "instinct", "woodlawn", "millions", "flywheel", "mobsters", "infamous", "puncture", "freeheld", "apostasy", "deceived", "asteroid", "suddenly", "wildlike", "shanghai", "loverboy", "pushover", "pasolini", "undertow", "manpower", "hellhole", "standoff", "reprisal", "deadline", "benjamin", "sapphire", "peterloo", "deceiver", "sleeping", "defendor", "angelica", "amnesiac", "sweeney!", "stiletto", "virginia", "deadfall", "bathory:", "discreet", "cimarron", "darkroom", "barabbas", "consumed", "factotum", "cimarron", "lovesong", "shopping", "buttons,", "chatroom", "prevenge", "paradise", "franklyn", "overlord", "timecode", "pendulum", "boychoir", "clemency", "werewolf", "moontide", "clearcut", "assholes", "barquero", "mitchell", "defiance", "stardust", "awaydays", "metropia", "neverwas", "svengali", "mistress", "eichmann", "aberdeen", "carolina", "downhill", "gigantic", "eadweard", "faithful", "strapped", "shooters", "bridgend", "adopting", "disgrace", "moonrise", "downtown", "beefcake", "shadrach", "chastity", "deadline", "audition", "salesman", "bartleby", "nijinsky", "viulisti", "evilenko", "ruthless", "calendar", "chrystal", "deserted", "bartleby", "sweepers", "mccanick", "hennessy", "pandemic", "american", "betrayed", "delusion", "slipaway", "fishbowl", "bluebird", "wrangler", "weakness", "monogamy", "svengali"]
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
    setLastAttempt();
    gameOverMessage.innerHTML = `<strong>Oops a Daisy!<br>YOU LOST!</strong><br><br>Come back tomorrow to try again!<br><br> The MOVIES were: <br>${selectedWord1}, ${selectedWord2}, ${selectedWord3}, ${selectedWord4}, ${selectedWord5}`;
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
  if (!checkLastAttempt()) {
      return; // Exit if the player has already played today
    }
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
            wonMessage.innerHTML = `<br><strong>Woo! High Five!<br>They're ALL Right!</strong><br><br>COME BACK TOMORROW<br>FOR FIVE MORE MOVIES<br>`;
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
