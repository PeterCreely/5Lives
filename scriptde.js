
const words1 = ["die", "das", "der", "akt", "amt", "ate", "auf", "bär", "bau", "bei", "bin", "bis", "bus",
    "den", "dom", "ein", "eis", "elf", "eng", "fan", "fax", "fit", "fuß", "gar", "gut", "hai", "hin", "hof",
    "hut", "ice", "ich", "ind", "inn", "ins", "ist", "klo", "kuh", "lkw", "maß", "men", "mit", "mon", "mut",
    "nah", "nen", "ner", "nie", "not", "nst", "ode", "ohr", "oma", "opa", "per", "pro", "rad", "rat", "rot",
    "ruf", "sag", "see", "sie", "ski", "stu", "süß", "tal", "tee", "ton", "tor", "ums", "uni", "von", "vor",
    "wie", "wir", "wut", "zeh", "zum", "zur",
];
let selectedWord1 = words1[Math.floor(Math.random() * words1.length)];

const words2 = ["affe", "akku", "asyl", "audi", "aufs", "aula", "bach", "ball", "bank", "bart", "baum", "bein",
    "berg", "blau", "blei", "blöd", "brav", "brot", "bude", "bund", "bunt", "burg", "cafe", "chor", "city",
    "club", "cola", "dach", "damm", "deal", "dick", "doof", "dorf", "dort", "dose", "drei", "dual", "dünn",
    "echt", "ecke", "eile", "eine", "ende", "ente", "esel", "etui", "euch", "euro", "ewig", "fach", "fade",
    "fair", "farm", "faul", "fein", "feld", "fels", "fern", "fete", "fett", "flug", "flur", "föhn", "form",
    "förn", "foto", "gabe", "gang", "ganz", "gast", "geil", "gelb", "glas", "gmbh", "golf", "gott", "grab",
    "grad", "gras", "grau", "grob", "grün", "gruß", "gute", "haar", "hahn", "halb", "hals", "harz", "hase",
    "heft", "heiß", "hell", "hemd", "herd", "herr", "hier", "holz", "hose", "huhn", "hunt", "igel", "irre",
    "jazz", "jude", "juli", "juni", "jura", "jury", "kalb", "kamm", "kann", "käse", "kauf", "kein", "kinn",
    "kino", "klub", "klug", "knie", "koch", "köln", "komö", "kork", "krug", "kuba", "kühl", "kurs", "kuss",
    "lage", "lahm", "lamm", "lärm", "laus", "leer", "lieb", "lied", "lila", "lira", "loch", "lohn", "löwe",
    "lüge", "lupe", "lust", "mars", "märz", "maus", "meer", "mehl", "mode", "mond", "most", "mühe", "müll",
    "nach", "narr", "nass", "nerv", "netz", "neun", "noch", "note", "nuss", "ober", "obst", "oper", "ossi",
    "park", "pech", "peru", "pfad", "post", "puls", "punk", "qual", "rand", "rang", "rast", "real", "reif",
    "rein", "reis", "ring", "rock", "rosa", "rose", "rote", "rübe", "ruhm", "rund", "saal", "säen", "saft",
    "säge", "salz", "sand", "satt", "satz", "sehr", "seil", "sein", "sekt", "senf", "sich", "sieg", "sitz",
    "slip", "smal", "sofa", "soße", "spaß", "spur", "stab", "stau", "stil", "tanz", "taub", "taxi", "teig",
    "test", "text", "tief", "tier", "tipp", "topf", "tuch", "turm", "tüte", "üben", "ufer", "umso", "vase",
    "vati", "viel", "wald", "wand", "wann", "ware", "warm", "wein", "werk", "wert", "wien", "wild", "wind",
    "witz", "wolf", "wurm", "zahl", "zahn", "zaun", "zehn", "zelt", "zimt", "zoll", "zone", "zorn", "zwar",
    "mist", "toll", "food", "vorn",
];
let selectedWord2 = words2[Math.floor(Math.random() * words2.length)];

const words3 = ["acker", "adler", "agent", "aktie", "alarm", "allee", "ally", "allzu", "alpen", "ampel",
    "anbau", "angst", "answo", "änung", "anzug", "apfel", "april", "ärger", "ärmel", "armut", "artig",
    "asche", "außen", "außer", "autor", "azubi", "baden", "basis", "bauch", "bauen", "bauer", "beleg",
    "benen", "beruf", "beste", "beute", "bezug", "bibel", "biene", "bitte", "blatt", "blick", "blind",
    "blitz", "blond", "blume", "bluse", "bohne", "börse", "brand", "braun", "braut", "breit", "brett",
    "brust", "buche", "bühne", "bulle", "busch", "chaos", "chile", "china", "comic", "couch", "dabei",
    "dampf", "datum", "dauer", "davor", "decke", "dicht", "disco", "döner", "draht", "drama", "droge",
    "dumpf", "durst", "duzen", "eigen", "eilen", "eimer", "einan", "einen", "eines", "einst", "eisen",
    "eisig", "eklig", "enden", "enkel", "enorm", "entwe", "erste", "essen", "essig", "etwas", "exakt",
    "fabel", "faden", "fahne", "fähre", "fahrt", "farbe", "fegen", "feige", "figur", "firma", "fisch",
    "flach", "fleck", "flöte", "fluss", "folge", "frech", "freie", "fremd", "frohe", "fromm",
    "frost", "fuchs", "fügen", "gabel", "geige", "gemäß", "gerät", "getue", "glatt", "gleis", "gramm",
    "griff", "größe", "gummi", "guten", "güter", "gütig", "hafen", "hagel", "haken", "handy", "harfe",
    "härte", "hauen", "hecke", "heißt", "heute", "hitze", "hobby", "honig", "hörer", "hügel", "human",
    "humor", "hupen", "hütte", "hymne", "ideal", "ikone", "immer", "innen", "insel", "irren", "jacke",
    "jacob", "jäger", "japan", "jeans", "jedes", "jener", "jüdin", "kabel", "käfig", "kalen", "kamel",
    "kamin", "kanal", "kanar", "kanne", "karte", "kasse", "kater", "katze", "kauen", "kehle", "keine",
    "kerze", "kiosk", "klage", "kleid", "klima", "knast", "knopf", "kohle", "kommt", "konto", "korea",
    "krach", "krebs", "kreis", "kreuz", "krimi", "krise", "krone", "krumm", "küche", "kugel", "kunde",
    "kunst", "kurve", "küste", "labor", "lachs", "lager", "lampe", "länge", "laune", "ledig", "legen",
    "lehne", "lehre", "leine", "leise", "leser", "liebe", "likör", "lilie", "linie", "lippe", "liste",
    "liter", "lösen", "lügen", "luxus", "macht", "mähen", "malen", "maler", "marke", "markt", "masse",
    "mäßig", "mathe", "mauer", "meist", "messe", "meter", "miete", "milch", "mitte", "möbel", "monat",
    "motiv", "motor", "münze", "müsli", "mutig", "mutti", "mütze", "nackt", "nähen", "natur", "nebel",
    "nebst", "neffe", "nicht", "nomen", "notiz", "nstag", "nudel", "ochse", "olive", "opfer", "osten",
    "ozean", "paket", "panne", "pappe", "paras", "pause", "peter", "pfand", "pfote", "pfund", "phase",
    "pille", "pizza", "plaun", "polen", "ports", "profi", "pulli", "punkt", "puppe", "quote", "radio",
    "rasch", "rasen", "raten", "ratte", "rauch", "recht", "regal", "regel", "regen", "reich", "reihe",
    "rente", "rhein", "roman", "rowdy", "runde", "russe", "salat", "sanft", "sauer", "sauna", "schaf",
    "schal", "schoß", "schuh", "seide", "seife", "selbe", "serie", "sicht", "socke", "solch", "somit",
    "sooft", "spalt", "sport", "staat", "stahl", "stall", "stamm", "stand", "stark", "start", "statt",
    "staub", "steak", "steif", "stein", "stern", "stirn", "stoff", "strom", "stufe", "stuhl", "stumm",
    "sturm", "süden", "summe", "sünde", "suppe", "szene", "tabak", "tafel", "tango", "tante", "tasse",
    "tätig", "tenor", "teuer", "theke", "thema", "titel", "toast", "toner", "tonne", "torte", "tragö",
    "trotz", "tulpe", "türke", "übung", "umbau", "union", "unter", "uralt", "urope", "venus", "video",
    "villa", "virus", "vogel", "voran", "waage", "wachs", "warze", "weich", "welle", "wende", "wessi",
    "wiese", "wieum", "wille", "witwe", "wolke", "wolle", "woran", "wunde", "wurst", "wüste", "zeile",
    "zumal", "zunge", "zuvor", "zweck", "zwölf", "damit", "hallo", "igitt", "prima", 
];
let selectedWord3 = words3[Math.floor(Math.random() * words3.length)];

const words4 = ["abends", "abfall", "abflug", "abitur", "ablauf", "absatz", "abteil", "achten", "aktion",
    "albern", "alltag", "analog", "anfang", "angabe", "angeln", "angler", "anhand", "anlage", "anlass",
    "anonym", "ansatz", "anteil", "antike", "antrag", "anzahl", "ärgern", "athlet", "ätzend", "aufbau",
    "aufzug", "august", "auslän", "äußere", "äußern", "ausweg", "auszug", "backen", "bäcker", "balkon",
    "banane", "beamte", "becher", "bedarf", "beginn", "behint", "beisel", "beißen", "bellen", "benung",
    "benzin", "bequem", "besser", "besuch", "betrag", "betrug", "beweis", "bewunn", "bilden", "billig",
    "binden", "bisher", "bizeps", "blasen", "braten", "bremse", "brille", "brücke", "brunch", "bserve",
    "bstahl", "buchen", "büfett", "bügeln", "bündel", "bürger", "butter", "campen", "campus", "chefin",
    "chemie", "clever", "cousin", "daheim", "danke", "danken", "dauern", "daumen", "decken", "defekt",
    "detail", "deuten", "dialog", "diplom", "donner", "drehen", "dritte", "drohen", "dunkel", "dusche",
    "ebenso", "effekt", "einzig", "eliver", "e-mail", "endlos", "epoche", "erfolg", "erforn", "essbar",
    "europa", "evote", "extrem", "fabrik", "fahrer", "faktor", "fallen", "fällen", "falten", "färben",
    "farbig", "farmer", "fassen", "fehlen", "feiern", "ferien", "fertig", "fettig", "feucht", "fieber",
    "fläche", "fliege", "flügel", "formel", "forung", "förung", "fragen", "freude", "frisch", "frisur",
    "füllen", "furche", "fußweg", "futter", "gähnen", "gängig", "garage", "garobe", "garten", "gebiet",
    "gebühr", "geburt", "geduld", "gefahr", "gegend", "gegner", "gehalt", "geheim", "gehirn", "geiger",
    "gelten", "gemein", "gemüse", "genial", "gepäck", "gering", "gesamt", "gesund", "gewalt", "gewinn",
    "gießen", "gipfel", "gleich", "global", "golden", "grafik", "gratis", "grenze", "gruppe", "grüßen",
    "gucken", "gulden", "gültig", "gürtel", "haarig", "hageln", "hälfte", "hammer", "handel", "hängen",
    "hassen", "haufen", "häufig", "heftig", "heilig", "heimat", "heirat", "heiter", "heizen", "henkel",
    "herbst", "heulen", "hinauf", "hoffen", "hörbar", "hunger", "impfen", "import", "inhalt", "insekt",
    "irisch", "irland", "island", "israel", "januar", "jemand", "jenige", "jezeit", "jobben", "jockey",
    "joggen", "kaiser", "kamera", "kämmen", "kanada", "kaputt", "karton", "kasten", "käufer", "kaviar",
    "kehren", "keller", "kessel", "kinlos", "kirche", "kissen", "klagen", "klären", "kleben", "klippe",
    "kneipe", "kochen", "kochin", "koffer", "kognak", "kondom", "können", "kosmos", "kosten", "kostüm",
    "kotzen", "krampf", "kredit", "krippe", "kritik", "kuchen", "kultur", "kundin", "kürzen", "küssen",
    "lagern", "landen", "langen", "latein", "lausig", "lauten", "leblos", "lecker", "leeren", "lehren",
    "lehrer", "leiden", "leihen", "leiten", "leiter", "letzte", "locker", "lockig", "löffel", "lösung",
    "lumpen", "mangel", "mantel", "massiv", "maurer", "meiner", "melden", "merken", "messen", "messer",
    "metall", "mexiko", "mieten", "mieter", "mittag", "mittel", "mitten", "moator", "modell", "mollig",
    "montag", "morgen", "museum", "nächst", "nachts", "nähern", "nation", "neblig", "nerven", "nervös",
    "nichte", "nichts", "nicken", "niveau", "norden", "notruf", "nstags", "oberst", "objekt", "öffnen",
    "online", "orange", "ordner", "ostern", "ostsee", "outfit", "packen", "panzer", "papier", "parfüm",
    "parken", "partei", "passen", "person", "peseta", "pfanne", "pfeife", "physik", "planen", "platte",
    "pleite", "poster", "prägen", "praxis", "privat", "prüfen", "putzen", "quelle", "rabatt", "rächen",
    "rakete", "rätsel", "räumen", "rechen", "regeln", "region", "regnen", "reifen", "reisen", "reißen",
    "reiten", "reiter", "rekord", "relikt", "rennen", "rezept", "riesig", "risiko", "rostig", "rubrik",
    "rüssel", "russin", "saftig", "saison", "salami", "salzig", "sandig", "sänger", "sauber", "saugen",
    "schach", "scharf", "scheck", "schein", "schere", "schick", "schief", "schild", "schlag", "schlau",
    "schmal", "schnee", "schnei", "schock", "schopf", "schutz", "schwan", "schwül", "segeln", "seidig",
    "selten", "senden", "senior", "senken", "sessel", "shorts", "silber", "singen", "simone", "sinken",
    "sitzen", "sketch", "sofern", "soldat", "sommer", "sonnig", "soweit", "sowohl", "spalte", "sparen",
    "spinat", "spitze", "spülen", "spüren", "stabil", "stärke", "stehen", "steuer", "stören", "strand",
    "streit", "streng", "stress", "strikt", "stumpf", "sturen", "südpol", "symbol", "system", "taktik",
    "talent", "tanken", "tänzer", "tapete", "tapfer", "tatort", "teilen", "teller", "tennis", "termin",
    "terror", "tippen", "tomate", "trauer", "treppe", "trikot", "truppe", "tunnel", "türkei", "türkin",
    "turnen", "umfang", "umgang", "umland", "umsatz", "umwelt", "uneben", "unfall", "ungarn", "ungern",
    "urlaub", "urteil", "utopie", "veränn", "verben", "verein", "verlag", "vernen", "vernst", "vorbei",
    "vorort", "vulkan", "wachen", "wählen", "wahren", "warnen", "wäsche", "wecken", "wecker", "weinen",
    "wenden", "werfen", "westen", "wetten", "wetter", "widmen", "wiegen", "wiener", "wilich", "windig",
    "winter", "winzig", "witwer", "witzig", "wohnen", "wolkig", "wunsch", "wurmig", "würzig", "wütend",
    "zählen", "zauber", "zelten", "zensur", "zettel", "zeugin", "zimmer", "zinsen", "zögern", "zornig",
    "zucker", "zufall", "zugabe", "zugang", "zusatz", "arning", "coins", "herein", "schade", "servus",
    "stimmt",
];
let selectedWord4 = words4[Math.floor(Math.random() * words4.length)];

const words5 = ["abfahrt", "abgeben", "abhaken", "abholen", "ablegen", "absehen", "absicht", "absolut",
    "abstand", "abwasch", "adresse", "ähnlich", "alkohol", "analyse", "anbauen", "anfrage", "angeben",
    "angebot", "angehen", "angriff", "anhören", "anklage", "ankunft", "anlegen", "ansehen", "ansicht",
    "anstatt", "anthalb", "anzeige", "apparat", "appetit", "applaus", "armband", "artikel", "aufgabe",
    "aufsatz", "auftrag", "ausfall", "ausflug", "ausgabe", "ausgang", "ausland", "ausrede", "aussage",
    "äußerst", "ausüben", "auswahl", "auswann", "ausweis", "automat", "bahnhof", "barcode", "bargeld",
    "basteln", "baumlos", "baustil", "bedeckt", "bedroht", "beenden", "begehen", "begriff", "behörde",
    "beinahe", "bekannt", "belegen", "belgien", "beliebt", "berater", "bereich", "bereits", "bereuen",
    "bericht", "berühmt", "besetzt", "besorgt", "bestand", "besteck", "betonen", "betrieb", "betteln",
    "bewährt", "bewölkt", "bewusst", "bildung", "billard", "bislang", "blitzen", "botanik", "branche",
    "brechen", "bremsen", "brennen", "brosche", "brüllen", "brünett", "buchung", "bürsten", "buschig",
    "bußgeld", "cheddar", "chronik", "college", "cousine", "damalig", "daneben", "dänisch", "danklos",
    "darüber", "debatte", "deckung", "demnach", "deutsch", "dialekt", "digital", "donnern", "doppeln",
    "doppelt", "dorthin", "drängen", "dreckig", "dreißig", "drinnen", "drittel", "dröhnen", "drucken",
    "drücken", "drucker", "durstig", "duschen", "dutzend", "ehefrau", "ehemann", "ehepaar", "eingang",
    "einheit", "einhorn", "eintrag", "einwann", "einzeln", "eisbahn", "eiserne", "elefant", "elegant",
    "element", "empfang", "energie", "england", "enkelin", "entlang", "entwurf", "ergeben", "erheben",
    "erleben", "erobern", "erraten", "estland", "etliche", "experte", "fahrrad", "farblos", "fassade",
    "fassung", "februar", "festtag", "festung", "fischen", "flasche", "fleisch", "fleißig", "flicken",
    "flieger", "fliehen", "fließen", "flirten", "fluchen", "folgend", "formlos", "franken", "freitag",
    "fressen", "friseur", "führung", "fünfzig", "fußball", "füttern", "galaxie", "galerie", "gardine",
    "gärtner", "gasherd", "gasthof", "gebäude", "gedicht", "gehoben", "gehören", "geistig", "geladen",
    "geliebt", "gemälde", "genauso", "genetik", "genügen", "geraten", "gerücht", "gestalt", "getränk",
    "gewicht", "gewohnt", "giraffe", "gitarre", "gottlos", "gourmet", "grausam", "grenzen", "grieche",
    "gründen", "grunzen", "günstig", "gurgeln", "haarlos", "haftung", "haltung", "hamster", "handeln",
    "händler", "harmlos", "haustür", "heimweg", "heizung", "herzlos", "hierfür", "hilflos", "hinweis",
    "höflich", "hörsaal", "hügelig", "hungern", "hungrig", "illegal", "infolge", "italien", "jahraus",
    "japaner", "jenigen", "jüdisch", "känguru", "kanzler", "kapelle", "kapitel", "kariert", "karotte",
    "kellner", "klappen", "klärung", "klatsch", "klavier", "klebrig", "klingel", "klingen", "klopfen",
    "klumpen", "knipsen", "koffein", "kollege", "kommend", "kommode", "komplex", "königin", "kontakt",
    "kontext", "konzept", "konzern", "konzert", "kräftig", "kreativ", "künftig", "kutsche", "lächeln",
    "landung", "lauwarm", "lebhaft", "legende", "leisten", "leitung", "lenkrad", "letztes", "lexicon",
    "lieblos", "liefern", "lispeln", "litauen", "löschen", "machbar", "mächtig", "magazin", "malerei",
    "manager", "mancher", "manuell", "märchen", "matrose", "maximal", "medizin", "mehrere", "merkmal",
    "metzger", "million", "mittels", "modisch", "morgens", "moskito", "münchen", "murmeln", "musiker",
    "nachbar", "nachher", "nämlich", "nebenan", "negativ", "neigung", "neujahr", "neulich", "niedrig",
    "nielage", "niemand", "nieseln", "nochmal", "nordpol", "nordsee", "notfall", "nutzlos", "nutzung",
    "ohnehin", "ohrring", "oktober", "ordnung", "östlich", "packung", "parkett", "partner", "passend",
    "patient", "pendler", "pension", "perfekt", "pfarrer", "pfeffer", "pfennig", "pflanze", "pflaume",
    "pflegen", "pflicht", "pflügen", "pfosten", "pianist", "pistole", "planung", "plastik", "politik",
    "popcorn", "populär", "porträt", "postamt", "präsens", "produkt", "projekt", "protzig", "provinz",
    "prozent", "prüfung", "pudding", "quatsch", "radikal", "rasseln", "rathaus", "rauchen", "rechnen",
    "rechner", "referat", "reklame", "respekt", "rettung", "richter", "riechen", "rosarot", "rotkohl",
    "rotwein", "rückzug", "sammeln", "samstag", "sandale", "sardine", "satteln", "scanner", "schädel",
    "schaden", "schämen", "schauer", "scheibe", "schicht", "schlank", "schlips", "schloss", "schmerz",
    "schmuck", "schnaps", "schrank", "schreck", "schrift", "schüler", "schwach", "schwarz", "schweiß",
    "schweiz", "seemann", "seitdem", "seither", "sekunde", "seltsam", "seminar", "sendung", "serbien",
    "service", "sexuell", "shampoo", "sichern", "silbern", "sitzung", "softeis", "solcher", "sonntag",
    "sonstig", "spalten", "spanien", "sparsam", "spiegel", "spieler", "spinnen", "sprache", "stadion",
    "stammen", "starren", "starten", "stechen", "stecken", "stehlen", "steigen", "steuern", "stiefel",
    "stiften", "stimmen", "stinken", "stinkig", "stöhnen", "stoppel", "stoppen", "störung", "strecke",
    "strumpf", "student", "studium", "stürzen", "südlich", "suspekt", "synonym", "tabelle", "täglich",
    "taktlos", "tauchen", "tausend", "technik", "teppich", "theater", "theorie", "toaster", "tödlich",
    "torwart", "tourist", "tragbar", "trainer", "trampen", "träumen", "traurig", "treffer", "trennen",
    "triumph", "trocken", "tropfen", "t-shirt", "typisch", "übersät", "uhrzeit", "ukraine", "umarmen",
    "umfrage", "umgeben", "umgehen", "umsonst", "umstand", "unrecht", "ursache", "venedig", "verband",
    "verkehr", "verlobt", "verlust", "versuch", "verwunt", "viertel", "vierzig", "violett", "vitamin",
    "vokabel", "vorfahr", "vorfall", "vorgang", "vorhang", "vorlage", "vorname", "vorsatz", "vorteil",
    "vorwahl", "vorwurf", "wachsen", "während", "währung", "walkman", "warnung", "waschen", "website",
    "wechsel", "wegfall", "weltall", "werbung", "wertlos", "weshalb", "wickeln", "wirksam", "wistand",
    "wohnort", "wunkind", "wunvoll", "zahllos", "zahlung", "zahnlos", "zeichen", "zeitung", "zentral",
    "zentrum", "ziellos", "zigarre", "zittern", "züchten", "zugeben", "zugriff", "zuhause", "zuhören",
    "zuletzt", "zwanzig", "zweifel", "zweimal", "zwiebel", "zwingen", "tschüss",
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

logoImage.src = 'logode.png';


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
    livesDisplay.innerText = `Du hast ${maxLives} Leben`;
};

const updateincorrectGuessesDisplay = () => {
    incorrectGuessesDisplay.innerText = `Du hast nur noch ${incorrectGuesses} Versuche übrig!`;
};

const updatewordcountDisplay = () => {
    wordcountDisplay.innerText = `Es sind nur ${wordcount} Wörter...!`;
};

const updatepointsDisplay = () => {
    pointsDisplay.innerText = `Du hast ${points} Punkte`;
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
        <h3>Bestenliste</h3>
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
    gameOverMessage.innerHTML = `<strong>Spiel Vorbei!</strong><br>Du hast ${points} Punkte erzielt.<br>Geben Sie Ihren Namen für die Anzeigetafel ein:`;
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
        alert("Bitte geben Sie Ihren Namen ein.");
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
            wonMessage.innerHTML = `<br><strong>Juhuu! Gib mir fünf!<br>Es geht ihnen ALLES gut!</strong><br><br>Du hast noch ${maxLives} Leben. <br>Weitermachen!<br> `;
            pointsDisplay.innerText = `Punkte: ${points}`;
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
            lostMessage.innerHTML = `<strong>Ei Ei EI!<br>Sie haben keine Vermutungen mehr</strong><br><br>Du hast noch ${maxLives} Leben. <br><br> Die Worte waren: <br>${selectedWord1}, ${selectedWord2}, ${selectedWord3}, ${selectedWord4}, ${selectedWord5}`;
            continueButton.innerText = `Weiter mit ${maxLives} verbleibenden Leben`; // Set button text
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
        'ßüäö'
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
