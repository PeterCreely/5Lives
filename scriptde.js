
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

const associatedWords = {

    "die": "the", "das": "that", "der": "the", "akt": "act", "amt": "office", "ate": "ate",
    "auf": "on", "bär": "bear", "bau": "construction", "bei": "at", "bin": "am", "bis": "until",
    "bus": "bus", "den": "the", "dom": "cathedral", "ein": "one", "eis": "ice", "elf": "eleven",
    "eng": "narrow", "fan": "fan", "fax": "fax", "fit": "fit", "fuß": "foot", "gar": "done",
    "gut": "good", "hai": "shark", "hin": "there", "hof": "yard", "hut": "hat", "ice": "ice",
    "ich": "i", "ind": "ind", "inn": "inn", "ins": "into", "ist": "is", "klo": "loo", "kuh": "cow",
    "lkw": "truck", "maß": "measure", "men": "men", "mit": "with", "mon": "mon", "mut": "courage",
    "nah": "near", "nen": "nen", "ner": "ner", "nie": "never", "not": "distress", "nst": "nst",
    "ode": "ode", "ohr": "ear", "oma": "granny", "opa": "grandfather", "per": "per", "pro": "per",
    "rad": "wheel", "rat": "advice", "rot": "red", "ruf": "reputation", "sag": "tell", "see": "lake",
    "sie": "they", "ski": "ski", "stu": "stu", "süß": "sweet", "tal": "valley", "tee": "tea",
    "ton": "clay", "tor": "gate", "ums": "ums", "uni": "university", "von": "from", "vor": "before",
    "wie": "how", "wir": "we", "wut": "fury", "zeh": "toe", "zum": "to", "zur": "the", "affe": "monkey",
    "akku": "accumulator", "asyl": "asylum", "audi": "audi", "aufs": "on the", "aula": "auditorium",
    "bach": "stream", "ball": "ball", "bank": "bank", "bart": "beard", "baum": "tree", "bein": "leg",
    "berg": "mountain", "blau": "blue", "blei": "lead", "blöd": "stupid", "brav": "good", "brot": "bread",
    "bude": "booth", "bund": "bunch", "bunt": "colorful", "burg": "castle", "cafe": "cafe",
    "chor": "choir", "city": "downtown", "club": "club", "cola": "cola", "dach": "roof", "damm": "dam",
    "deal": "deal", "dick": "thick", "doof": "dumb", "dorf": "village", "dort": "there", "dose": "can",
    "drei": "three", "dual": "dual", "dünn": "thin", "echt": "genuine", "ecke": "corner", "eile": "hurry",
    "eine": "one", "ende": "end", "ente": "duck", "esel": "donkey", "etui": "case", "euch": "you",
    "euro": "euro", "ewig": "eternal", "fach": "compartment", "fade": "insipid", "fair": "fair",
    "farm": "farm", "faul": "lazy", "fein": "fine", "feld": "field", "fels": "rock", "fern": "far",
    "fete": "party", "fett": "fat", "flug": "flight", "flur": "hall", "föhn": "foehn", "form": "form",
    "förn": "förn", "foto": "photograph", "gabe": "gift", "gang": "gear", "ganz": "whole", "gast": "guest",
    "geil": "cool", "gelb": "yellow", "glas": "glass", "gmbh": "ltd", "golf": "gulf", "gott": "god",
    "grab": "grave", "grad": "degree", "gras": "grass", "grau": "grey", "grob": "coarse", "grün": "green",
    "gruß": "greeting", "gute": "good", "haar": "hair", "hahn": "rooster", "halb": "half", "hals": "neck",
    "harz": "resin", "hase": "hare", "heft": "haft", "heiß": "hot", "hell": "bright", "hemd": "shirt",
    "herd": "hearth", "herr": "lord", "hier": "here", "holz": "wood", "hose": "trousers", "huhn": "chicken",
    "hunt": "hunt", "igel": "hedgehog", "irre": "mad", "jazz": "jazz", "jude": "jew", "juli": "july",
    "juni": "june", "jura": "law", "jury": "jury", "kalb": "calf", "kamm": "comb", "kann": "can",
    "käse": "cheese", "kauf": "purchase", "kein": "no", "kinn": "chin", "kino": "cinema", "klub": "club",
    "klug": "smart", "knie": "knee", "koch": "cook", "köln": "cologne", "komö": "comedy", "kork": "cork",
    "krug": "jug", "kuba": "cuba", "kühl": "cool", "kurs": "course", "kuss": "kiss", "lage": "layer",
    "lahm": "lame", "lamm": "lamb", "lärm": "noise", "laus": "louse", "leer": "empty", "lieb": "dear",
    "lied": "song", "lila": "purple", "lira": "lira", "loch": "hole", "lohn": "wage", "löwe": "lion",
    "lüge": "lie", "lupe": "magnifying glass", "lust": "desire", "mars": "mars", "märz": "march",
    "maus": "mouse", "meer": "sea", "mehl": "flour", "mode": "fashion", "mond": "moon", "most": "cider",
    "mühe": "effort", "müll": "garbage", "nach": "after", "narr": "fool", "nass": "wet", "nerv": "nerve",
    "netz": "net", "neun": "nine", "noch": "still", "note": "note", "nuss": "nut", "ober": "upper",
    "obst": "fruit", "oper": "opera", "ossi": "ossi", "park": "park", "pech": "pitch", "peru": "peru",
    "pfad": "path", "post": "post", "puls": "pulse", "punk": "punk", "qual": "agony", "rand": "edge",
    "rang": "rank", "rast": "rest", "real": "real", "reif": "mature", "rein": "pure", "reis": "rice",
    "ring": "ring", "rock": "skirt", "rosa": "pink", "rose": "rose", "rote": "red", "rübe": "turnip",
    "ruhm": "fame", "rund": "round", "saal": "hall", "säen": "sow", "saft": "juice", "säge": "saw",
    "salz": "salt", "sand": "sand", "satt": "full", "satz": "sentence", "sehr": "very much", "seil": "rope",
    "sein": "be", "sekt": "champagne", "senf": "mustard", "sich": "oneself", "sieg": "victory",
    "sitz": "seat", "slip": "briefs", "smal": "smal", "sofa": "sofa", "soße": "sauce", "spaß": "fun",
    "spur": "trace", "stab": "rod", "stau": "traffic jam", "stil": "style", "tanz": "dance", "taub": "deaf",
    "taxi": "taxi", "teig": "dough", "test": "test", "text": "text", "tief": "deep", "tier": "animal",
    "tipp": "tip", "topf": "pot", "tuch": "cloth", "turm": "tower", "tüte": "bag", "üben": "exercise",
    "ufer": "shore", "umso": "all the more", "vase": "vase", "vati": "daddy", "viel": "a lot",
    "wald": "forest", "wand": "wall", "wann": "when", "ware": "commodity", "warm": "warm", "wein": "wine",
    "werk": "work", "wert": "value", "wien": "vienna", "wild": "wild", "wind": "wind", "witz": "joke",
    "wolf": "wolf", "wurm": "worm", "zahl": "number", "zahn": "tooth", "zaun": "fence", "zehn": "ten",
    "zelt": "tent", "zimt": "cinnamon", "zoll": "customs", "zone": "zone", "zorn": "anger", "zwar": "war",
    "mist": "dung", "toll": "terrific", "acker": "field", "adler": "eagle", "agent": "agent",
    "aktie": "share", "alarm": "alarm", "allee": "avenue", "ally": "ally", "allzu": "too", "alpen": "alps",
    "ampel": "traffic light", "anbau": "cultivation", "angst": "fear", "answo": "answo", "änung": "change",
    "anzug": "suit", "apfel": "apple", "april": "april", "ärger": "anger", "ärmel": "sleeve",
    "armut": "poverty", "artig": "good", "asche": "ash", "außen": "outside", "außer": "except",
    "autor": "author", "azubi": "trainee", "baden": "bathe", "basis": "base", "bauch": "belly",
    "bauen": "build", "bauer": "farmer", "beleg": "voucher", "benen": "benen", "beruf": "occupation",
    "beste": "best", "beute": "prey", "bezug": "reference", "bibel": "bible", "biene": "bee",
    "bitte": "please", "blatt": "leaf", "blick": "look", "blind": "blind", "blitz": "lightning",
    "blond": "blond", "blume": "flower", "bluse": "blouse", "bohne": "bean", "börse": "stock exchange",
    "brand": "fire", "braun": "brown", "braut": "bride", "breit": "wide", "brett": "board",
    "brust": "breast", "buche": "beech", "bühne": "stage", "bulle": "bull", "busch": "bush",
    "chaos": "chaos", "chile": "chile", "china": "china", "comic": "comic", "couch": "couch",
    "dabei": "thereby", "dampf": "steam", "datum": "date", "dauer": "duration", "davor": "before that",
    "decke": "ceiling", "dicht": "dense", "disco": "disco", "döner": "kebab", "draht": "wire",
    "drama": "drama", "droge": "drug", "dumpf": "dull", "durst": "thirst", "duzen": "on a first-name basis",
    "eigen": "own", "eilen": "hurry", "eimer": "bucket", "einan": "einan", "einen": "a", "eines": "a",
    "einst": "once", "eisen": "iron", "eisig": "icy", "eklig": "disgusting", "enden": "end",
    "enkel": "grandson", "enorm": "enormous", "entwe": "either", "erste": "first", "essen": "eat",
    "essig": "vinegar", "etwas": "something", "exakt": "exact", "fabel": "fable", "faden": "thread",
    "fahne": "flag", "fähre": "ferry", "fahrt": "ride", "farbe": "color", "fegen": "sweep", "feige": "fig",
    "figur": "figure", "firma": "company", "fisch": "fish", "flach": "flat", "fleck": "stain",
    "flöte": "flute", "fluss": "river", "folge": "consequence", "food": "food", "frech": "impudent",
    "freie": "free", "fremd": "strange", "frohe": "merry", "fromm": "pious", "frost": "frost",
    "fuchs": "fox", "fügen": "join", "gabel": "fork", "geige": "violin", "gemäß": "in accordance with",
    "gerät": "device", "getue": "fuss", "glatt": "smooth", "gleis": "track", "gramm": "gram",
    "griff": "handle", "größe": "size", "gummi": "rubber", "guten": "good", "güter": "goods",
    "gütig": "kind", "hafen": "port", "hagel": "hail", "haken": "hook", "handy": "cell phone",
    "harfe": "harp", "härte": "hardness", "hauen": "chop", "hecke": "hedge", "heißt": "that is",
    "heute": "today", "hitze": "heat", "hobby": "hobby", "honig": "honey", "hörer": "listener",
    "hügel": "hill", "human": "humane", "humor": "humour", "hupen": "honk", "hütte": "hut",
    "hymne": "hymn", "ideal": "ideal", "ikone": "icon", "immer": "always", "innen": "inside",
    "insel": "island", "irren": "err", "jacke": "jacket", "jacob": "jacob", "jäger": "hunter",
    "japan": "japan", "jeans": "jeans", "jedes": "every", "jener": "that", "jüdin": "jewess",
    "kabel": "cable", "käfig": "cage", "kalen": "kalen", "kamel": "camel", "kamin": "fireplace",
    "kanal": "canal", "kanar": "kanar", "kanne": "jug", "karte": "card", "kasse": "cash register",
    "kater": "hangover", "katze": "cat", "kauen": "chew", "kehle": "throat", "keine": "none",
    "kerze": "candle", "kiosk": "kiosk", "klage": "complaint", "kleid": "dress", "klima": "climate",
    "knast": "jail", "knopf": "button", "kohle": "coal", "kommt": "comes", "konto": "account",
    "korea": "korea", "krach": "noise", "krebs": "cancer", "kreis": "circle", "kreuz": "cross",
    "krimi": "detective story", "krise": "crisis", "krone": "crown", "krumm": "crooked",
    "küche": "kitchen", "kugel": "sphere", "kunde": "customer", "kunst": "art", "kurve": "curve",
    "küste": "coast", "labor": "laboratory", "lachs": "salmon", "lager": "bearing", "lampe": "lamp",
    "länge": "length", "laune": "whim", "ledig": "single", "legen": "put", "lehne": "rest",
    "lehre": "apprenticeship", "leine": "leash", "leise": "quiet", "leser": "reader", "liebe": "love",
    "likör": "liqueur", "lilie": "lily", "linie": "line", "lippe": "lip", "liste": "list", "liter": "litre",
    "lösen": "solve", "lügen": "lie", "luxus": "luxury", "macht": "power", "mähen": "mow", "malen": "paint",
    "maler": "painter", "marke": "brand", "markt": "market", "masse": "mass", "mäßig": "moderate",
    "mathe": "math", "mauer": "wall", "meist": "mostly", "messe": "mass", "meter": "metre", "miete": "rent",
    "milch": "milk", "mitte": "middle", "möbel": "furniture", "monat": "month", "motiv": "motive",
    "motor": "engine", "münze": "coin", "müsli": "muesli", "mutig": "brave", "mutti": "mommy",
    "mütze": "cap", "nackt": "naked", "nähen": "sew", "natur": "nature", "nebel": "fog", "nebst": "together with",
    "neffe": "nephew", "nicht": "not", "nomen": "noun", "notiz": "note", "nstag": "stag", "nudel": "noodle",
    "ochse": "ox", "olive": "olive", "opfer": "sacrifice", "osten": "east", "ozean": "ocean",
    "paket": "parcel", "panne": "breakdown", "pappe": "cardboard", "paras": "paras",
    "pause": "pause", "peter": "peter", "pfand": "pledge", "pfote": "paw", "pfund": "pound", "phase": "phase",
    "pille": "pill", "pizza": "pizza", "plaun": "plaun", "polen": "poland", "ports": "ports",
    "profi": "professional", "pulli": "sweater", "punkt": "point", "puppe": "doll", "quote": "quota",
    "radio": "radio", "rasch": "quick", "rasen": "lawn", "raten": "guess", "ratte": "rat",
    "rauch": "smoke", "recht": "right", "regal": "shelf", "regel": "rule", "regen": "rain",
    "reich": "rich", "reihe": "row", "rente": "pension", "rhein": "rhine", "roman": "novel",
    "rowdy": "rowdy", "runde": "round", "russe": "russian", "salat": "salad", "sanft": "gentle",
    "sauer": "sour", "sauna": "sauna", "schaf": "sheep", "schal": "shawl", "schoß": "lap",
    "schuh": "shoe", "seide": "silk", "seife": "soap", "selbe": "same", "serie": "series",
    "sicht": "view", "socke": "sock", "solch": "such", "somit": "thus", "sooft": "whenever",
    "spalt": "crack", "sport": "sport", "staat": "state", "stahl": "steel", "stall": "stable",
    "stamm": "trunk", "stand": "stand", "stark": "strong", "start": "start", "statt": "instead of",
    "staub": "dust", "steak": "steak", "steif": "stiff", "stein": "stone", "stern": "star",
    "stirn": "forehead", "stoff": "fabric", "strom": "current", "stufe": "step", "stuhl": "chair",
    "stumm": "mute", "sturm": "storm", "süden": "south", "summe": "sum", "sünde": "sin",
    "suppe": "soup", "szene": "scene", "tabak": "tobacco", "tafel": "table", "tango": "tango",
    "tante": "aunt", "tasse": "cup", "tätig": "active", "tenor": "tenor", "teuer": "expensive",
    "theke": "counter", "thema": "topic", "titel": "title", "toast": "toast", "toner": "toner",
    "tonne": "ton", "torte": "pie", "tragö": "tragedy", "trotz": "despite", "tulpe": "tulip",
    "türke": "turk", "übung": "exercise", "umbau": "reconstruction", "union": "union", "unter": "under",
    "uralt": "ancient", "urope": "urope", "venus": "venus", "video": "video", "villa": "villa",
    "virus": "virus", "vogel": "bird", "voran": "ahead", "waage": "scales", "wachs": "wax",
    "warze": "wart", "weich": "soft", "welle": "wave", "wende": "turn", "wessi": "wessi",
    "wiese": "meadow", "wieum": "why", "wille": "will", "witwe": "widow", "wolke": "cloud",
    "wolle": "wool", "woran": "whereof", "wunde": "wound", "wurst": "sausage", "wüste": "desert",
    "zeile": "line", "zumal": "especially", "zunge": "tongue", "zuvor": "previously", "zweck": "purpose",
    "zwölf": "twelve", "damit": "in order that", "hallo": "hello", "igitt": "yuck", "prima": "great",
    "abends": "in the evening", "abfall": "waste", "abflug": "departure", "abitur": "school leaving examination",
    "ablauf": "expiration", "absatz": "paragraph", "abteil": "compartment", "achten": "respect",
    "aktion": "action", "albern": "silly", "alltag": "everyday life", "analog": "analogous",
    "anfang": "beginning", "angabe": "specification", "angeln": "angling", "angler": "angler",
    "anhand": "with", "anlage": "enclosure", "anlass": "cause", "anonym": "anonymous", "ansatz": "approach",
    "anteil": "share", "antike": "antiquity", "antrag": "application", "anzahl": "number",
    "ärgern": "annoy", "athlet": "athlete", "ätzend": "corrosive", "aufbau": "construction",
    "aufzug": "lift", "august": "august", "auslän": "foreign", "äußere": "exterior", "äußern": "express", "ausweg": "way out", "auszug": "excerpt", "backen": "bake", "bäcker": "baker", "balkon": "balcony", "banane": "banana", "beamte": "civil servant", "becher": "cup", "bedarf": "need", "beginn": "beginning", "behint": "behint", "beisel": "beisel", "beißen": "bite", "bellen": "bark", "benung": "entitlement", "benzin": "petrol", "bequem": "comfortable", "besser": "better", "besuch": "visit", "betrag": "amount", "betrug": "fraud", "beweis": "proof", "bewunn": "beadunn", "bilden": "form", "billig": "cheap", "binden": "bind", "bisher": "hitherto", "bizeps": "biceps", "blasen": "blow", "braten": "roast", "bremse": "brake", "brille": "spectacles", "brücke": "bridge", "brunch": "brunch", "bserve": "bserve", "bstahl": "steel", "buchen": "book", "büfett": "buffet", "bügeln": "iron",
    "bündel": "bundle", "bürger": "citizen", "butter": "butter", "campen": "camp", "campus": "campus", "chefin": "boss", "chemie": "chemistry", "clever": "clever", "cousin": "cousin", "daheim": "at home", "danke": "thank you", "danken": "thank", "dauern": "last", "daumen": "thumb", "decken": "cover", "defekt": "defect", "detail": "detail", "deuten": "interpret", "dialog": "dialogue",
    "diplom": "diploma", "donner": "thunder", "drehen": "turn", "dritte": "third", "drohen": "threaten", "dunkel": "dark", "dusche": "shower", "ebenso": "same to you", "effekt": "effect", "einzig": "only", "eliver": "eliver", "e-mail": "email", "endlos": "endlessly", "epoche": "epoch", "erfolg": "success", "erforn": "erforn", "essbar": "edible", "europa": "europe", "evote": "evote", "extrem": "extreme",
    "fabrik": "factory", "fahrer": "driver", "faktor": "factor", "fallen": "fall", "fällen": "fell", "falten": "fold", "färben": "dye", "farbig": "colored", "farmer": "farmer", "fassen": "catch", "fehlen": "lack", "feiern": "celebrate", "ferien": "vacation", "fertig": "ready", "fettig": "greasy", "feucht": "humid", "fieber": "fever", "fläche": "area", "fliege": "fly", "flügel": "wing", "formel": "formula", "forung": "forung", "förung": "funding", "fragen": "ask", "freude": "joy", "frisch": "fresh", "frisur": "hairdo", "füllen": "fill", "furche": "furrow", "fußweg": "footpath", "futter": "fodder", "gähnen": "yawn", "gängig": "common", "garage": "garage", "garobe": "garobe", "garten": "garden", "gebiet": "area", "gebühr": "fee", "geburt": "birth", "geduld": "patience", "gefahr": "danger", "gegend": "area", "gegner": "opponent", "gehalt": "salary", "geheim": "secret", "gehirn": "brain", "geiger": "violinist", "gelten": "be valid", "gemein": "common", "gemüse": "vegetable", "genial": "ingenious", "gepäck": "baggage", "gering": "small", "gesamt": "total", "gesund": "healthy", "gewalt": "violence",
    "gewinn": "profit", "gießen": "pour", "gipfel": "top", "gleich": "equal", "global": "global", "golden": "golden", "grafik": "graphic", "gratis": "free", "grenze": "boundary", "gruppe": "group", "grüßen": "greet", "gucken": "look", "gulden": "guilder", "gültig": "valid", "gürtel": "belt", "haarig": "hairy", "hageln": "hail", "hälfte": "half", "hammer": "hammer", "handel": "trade", "hängen": "hang", "hassen": "hate", "haufen": "pile", "häufig": "frequently", "heftig": "fierce", "heilig": "sacred", "heimat": "home", "heirat": "marriage", "heiter": "cheerful", "heizen": "heat", "henkel": "handle", "herbst": "autumn", "heulen": "howl", "hinauf": "up", "hoffen": "hope", "hörbar": "audible", "hunger": "hunger", "impfen": "vaccinate", "import": "import", "inhalt": "content", "insekt": "insect",
    "irisch": "irish", "irland": "ireland", "island": "iceland", "israel": "israel", "januar": "january", "jemand": "someone", "jenige": "those", "jezeit": "anytime", "jobben": "work", "jockey": "jockey", "joggen": "jog", "kaiser": "emperor", "kamera": "camera", "kämmen": "comb", "kanada": "canada", "kaputt": "broken", "karton": "cardboard", "kasten": "box", "käufer": "buyer", "kaviar": "caviar", "kehren": "sweep", "keller": "cellar", "kessel": "kettle", "kinlos": "kinlos", "kirche": "church",
    "kissen": "cushion", "klagen": "complain", "klären": "clarify", "kleben": "glue", "klippe": "cliff", "kneipe": "pub", "kochen": "cook", "kochin": "cook", "koffer": "suitcase", "kognak": "cognac", "kondom": "condom", "können": "can", "kosmos": "cosmos", "kosten": "cost", "kostüm": "costume", "kotzen": "vomit", "krampf": "cramp", "kredit": "credit", "krippe": "crib", "kritik": "criticism", "kuchen": "cake", "kultur": "culture", "kundin": "customer", "kürzen": "shorten", "küssen": "kiss", "lagern": "store", "landen": "land", "langen": "suffice", "latein": "latin", "lausig": "lousy", "lauten": "read", "leblos": "lifeless", "lecker": "delicious", "leeren": "empty", "lehren": "teach", "lehrer": "teacher", "leiden": "suffer", "leihen": "lend", "leiten": "lead", "leiter": "ladder", "letzte": "last", "locker": "loose", "lockig": "curly", "löffel": "spoon", "lösung": "solution", "lumpen": "rag", "mangel": "shortage", "mantel": "coat", "massiv": "massive", "maurer": "bricklayer", "meiner": "mine", "melden": "announce", "merken": "notice", "messen": "measure", "messer": "knife", "metall": "metal", "mexiko": "mexico", "mieten": "hire", "mieter": "tenant", "mittag": "noon", "mittel": "medium", "mitten": "in the middle",
    "moator": "moator", "modell": "model", "mollig": "plump", "montag": "monday", "morgen": "morning", "museum": "museum", "nächst": "next", "nachts": "at night", "nähern": "approach", "nation": "nation", "neblig": "foggy", "nerven": "annoy", "nervös": "nervous", "nichte": "niece", "nichts": "nothing", "nicken": "nod", "niveau": "level", "norden": "north", "notruf": "emergency call", "nstags": "nstags", "oberst": "colonel", "objekt": "object", "öffnen": "open", "online": "online", "orange": "orange", "ordner": "folder", "ostern": "easter", "ostsee": "baltic sea", "outfit": "outfit", "packen": "pack", "panzer": "tank", "papier": "paper", "parfüm": "perfume", "parken": "park", "partei": "party", "passen": "fit", "person": "person", "peseta": "peseta", "pfanne": "pan", "pfeife": "pipe", "physik": "physics", "planen": "plan", "platte": "plate", "pleite": "broke", "poster": "poster", "prägen": "coin", "praxis": "practice", "privat": "private", "prüfen": "examine", "putzen": "clean", "quelle": "source", "rabatt": "discount", "rächen": "avenge", "rakete": "rocket", "rätsel": "riddle", "räumen": "evacuate",
    "rechen": "rake", "regeln": "regulate", "region": "region", "regnen": "rain", "reifen": "tire", "reisen": "travel", "reißen": "tear", "reiten": "ride", "reiter": "horseman", "rekord": "record", "relikt": "relic", "rennen": "run", "rezept": "prescription", "riesig": "huge", "risiko": "risk", "rostig": "rusty", "rubrik": "rubric", "rüssel": "trunk", "russin": "russian", "saftig": "juicy", "saison": "season", "salami": "salami", "salzig": "salty", "sandig": "sandy", "sänger": "singer", "sauber": "clean", "saugen": "suck", "schach": "chess", "scharf": "sharp", "scheck": "cheque", "schein": "shine", "schere": "scissors", "schick": "chic", "schief": "skew", "schild": "shield", "schlag": "blow", "schlau": "sly", "schmal": "narrow", "schnee": "snow", "schnei": "snow", "schock": "shock", "schopf": "tuft",
    "schutz": "protection", "schwan": "swan", "schwül": "sultry", "segeln": "sail", "seidig": "silky", "selten": "seldom", "senden": "send", "senior": "senior", "senken": "lower", "sessel": "armchair", "shorts": "shorts", "silber": "silver", "singen": "sing", "simone": "simone", "sinken": "sink", "sitzen": "sit", "sketch": "sketch", "sofern": "if", "soldat": "soldier", "sommer": "summer", "sonnig": "sunny", "soweit": "as far as", "sowohl": "and", "spalte": "column", "sparen": "save", "spinat": "spinach", "spitze": "top", "spülen": "rinse", "spüren": "feel", "stabil": "stable", "stärke": "starch", "stehen": "stand", "steuer": "tax", "stören": "disturb", "strand": "beach", "streit": "dispute", "streng": "severe", "stress": "stress", "strikt": "strict", "stumpf": "dull", "sturen": "stubborn", "südpol": "south pole", "symbol": "symbol", "system": "system", "taktik": "tactics", "talent": "talent", "tanken": "refuel", "tänzer": "dancer", "tapete": "wallpaper", "tapfer": "brave", "tatort": "crime scene", "teilen": "divide", "teller": "plate", "tennis": "tennis", "termin": "appointment", "terror": "terror", "tippen": "type", "tomate": "tomato", "trauer": "mourning", "treppe": "stairs", "trikot": "jersey", "truppe": "troupe",
    "tself": "tself", "tunnel": "tunnel", "türkei": "turkey", "türkin": "turk", "turnen": "gymnastics", "umfang": "circumference", "umgang": "dealings", "umland": "hinterland", "umsatz": "turnover", "umwelt": "environment", "uneben": "uneven", "unfall": "accident", "ungarn": "hungary", "ungern": "unwillingly", "urlaub": "holiday", "urteil": "judgment", "utopie": "utopia", "veränn": "change", "verben": "verbs", "verein": "association", "verlag": "publisher", "vernen": "vernen", "vernst": "vernst", "vorbei": "over", "vorort": "suburb", "vulkan": "volcano", "wachen": "be awake", "wählen": "choose", "wahren": "maintain", "warnen": "warn", "wäsche": "laundry", "wecken": "wake", "wecker": "alarm clock", "weinen": "cry", "wenden": "turn", "werfen": "throw", "westen": "west", "wetten": "bet", "wetter": "weather", "widmen": "dedicate", "wiegen": "weigh", "wiener": "viennese", "wilich": "wilich", "windig": "windy", "winter": "winter", "winzig": "tiny", "witwer": "widower", "witzig": "funny", "wohnen": "dwell", "wolkig": "cloudy", "wunsch": "wish", "wurmig": "wormy", "würzig": "spicy", "wütend": "furious", "zählen": "count", "zauber": "spell", "zelten": "camp", "zensur": "censorship", "zettel": "note", "zeugin": "witness", "zimmer": "room", "zinsen": "interest", "zögern": "hesitate", "zornig": "angry", "zucker": "sugar", "zufall": "chance", "zugabe": "encore", "zugang": "access", "zusatz": "addition", "arning": "arning", "coins": "coins", "herein": "come in", "schade": "what a pity", "servus": "servus", "abfahrt": "departure", "abgeben": "give off", "abhaken": "tick off", "abholen": "collect", "ablegen": "discard", "absehen": "foresee", "absicht": "intention", "absolut": "absolute", "abstand": "distance", "abwasch": "washing-up", "adresse": "address", "ähnlich": "similar", "alkohol": "alcohol", "analyse": "analysis", "anbauen": "cultivate", "anfrage": "inquiry", "angeben": "boast", "angebot": "offer", "angehen": "concern", "angriff": "attack", "anhören": "listen to", "anklage": "accusation", "ankunft": "arrival", "anlegen": "berth", "ansehen": "look at", "ansicht": "view", "anstatt": "instead of", "anthalb": "anthalb", "anzeige": "display", "apparat": "apparatus", "appetit": "appetite", "applaus": "applause", "armband": "bracelet", "artikel": "article", "aufgabe": "task", "aufsatz": "essay", "auftrag": "order", "ausfall": "sortie", "ausflug": "outing", "ausgabe": "edition", "ausgang": "exit", "ausland": "foreign countries", "ausrede": "excuse", "aussage": "statement", "äußerst": "extremely", "ausüben": "exert", "auswahl": "selection", "auswann": "when", "ausweis": "identity card", "automat": "automaton", "bahnhof": "railway station", "barcode": "barcode", "bargeld": "cash", "basteln": "do handicrafts", "baumlos": "treeless", "baustil": "architectural style", "bedeckt": "overcast", "bedroht": "threatened", "beenden": "finish", "begehen": "commit", "begriff": "concept", "behörde": "agency", "beinahe": "almost", "bekannt": "known", "belegen": "occupy", "belgien": "belgium", "beliebt": "popular", "berater": "consultant", "bereich": "range", "bereits": "already", "bereuen": "regret", "bericht": "report", "berühmt": "famous", "besetzt": "busy", "besorgt": "worried", "bestand": "stock", "besteck": "cutlery", "betonen": "emphasize", "betrieb": "operation", "betteln": "beg", "bewährt": "proven", "bewölkt": "cloudy", "bewusst": "conscious", "bildung": "education", "billard": "billiards", "bislang": "so far", "blitzen": "flash", "botanik": "botany", "branche": "industry", "brechen": "break", "bremsen": "brake", "brennen": "burn", "brosche": "brooch", "brüllen": "roar", "brünett": "brunette", "buchung": "booking", "bürsten": "brush", "buschig": "bushy", "bußgeld": "fine", "cheddar": "cheddar", "chronik": "chronicle", "college": "college", "cousine": "cousin", "damalig": "then", "daneben": "besides", "dänisch": "danish", "danklos": "thankless", "darüber": "over it", "debatte": "debate", "deckung": "cover", "demnach": "so", "deutsch": "german", "dialekt": "dialect", "digital": "digital", "donnern": "thunder", "doppeln": "double", "doppelt": "double", "dorthin": "thither", "drängen": "press", "dreckig": "dirty", "dreißig": "thirty", "drinnen": "inside", "drittel": "third", "dröhnen": "boom", "drucken": "print", "drücken": "press", "drucker": "printer", "durstig": "thirsty", "duschen": "shower", "dutzend": "dozen", "ehefrau": "wife", "ehemann": "husband", "ehepaar": "married couple", "eingang": "entrance", "einheit": "unit", "einhorn": "unicorn", "eintrag": "entry", "einwann": "when", "einzeln": "singly", "eisbahn": "skating rink", "eiserne": "iron", "elefant": "elephant", "elegant": "elegant", "element": "element", "empfang": "reception", "energie": "energy", "england": "england", "enkelin": "granddaughter", "entlang": "along", "entwurf": "draft", "ergeben": "loyal", "erheben": "raise", "erleben": "experience", "erobern": "conquer", "erraten": "guess", "estland": "estonia", "etliche": "several", "experte": "expert", "fahrrad": "bicycle", "farblos": "colourless", "fassade": "facade", "fassung": "socket", "februar": "february", "festtag": "feast day", "festung": "fortress", "fischen": "fish", "flasche": "bottle", "fleisch": "meat", "fleißig": "diligent", "flicken": "patch", "flieger": "aviator", "fliehen": "flee", "fließen": "flow", "flirten": "flirt", "fluchen": "swear", "folgend": "following", "formlos": "shapeless", "franken": "franc", "freitag": "friday", "fressen": "eat", "friseur": "hairdresser", "führung": "management", "fünfzig": "fifty", "fußball": "soccer", "füttern": "feed", "galaxie": "galaxy", "galerie": "gallery", "gardine": "curtain", "gärtner": "gardener", "gasherd": "gas stove", "gasthof": "inn", "gebäude": "building", "gedicht": "poem", "gehoben": "elevated", "gehören": "belong", "geistig": "mental", "geladen": "loaded", "geliebt": "beloved", "gemälde": "painting", "genauso": "just as", "genetik": "genetics", "genügen": "suffice", "geraten": "guessed", "gerücht": "rumour", "gestalt": "shape", "getränk": "drink", "gewicht": "weight", "gewohnt": "accustomed", "giraffe": "giraffe", "gitarre": "guitar", "gottlos": "godless", "gourmet": "gourmet", "grausam": "cruel", "grenzen": "border", "grieche": "greek", "gründen": "establish", "grunzen": "grunt", "günstig": "auspicious", "gurgeln": "gargle", "haarlos": "hairless", "haftung": "liability", "haltung": "attitude", "hamster": "hamster", "handeln": "act", "händler": "dealer", "harmlos": "harmless", "haustür": "front door", "heimweg": "way home", "heizung": "heating", "herzlos": "heartless", "hierfür": "therefor", "hilflos": "helpless", "hinweis": "hint", "höflich": "polite", "hörsaal": "lecture hall", "hügelig": "hilly", "hungern": "hunger", "hungrig": "hungry", "illegal": "illegal", "infolge": "owing to", "italien": "italy", "jahraus": "always", "japaner": "japanese", "jenigen": "those", "jüdisch": "jewish", "känguru": "kangaroo", "kanzler": "chancellor", "kapelle": "chapel", "kapitel": "chapter", "kariert": "checkered", "karotte": "carrot", "kellner": "waiter", "klappen": "work out", "klärung": "clarification", "klatsch": "gossip", "klavier": "piano", "klebrig": "sticky", "klingel": "bell", "klingen": "sound", "klopfen": "knock", "klumpen": "lump", "knipsen": "snap", "koffein": "caffeine", "kollege": "colleague", "kommend": "coming", "kommode": "chest of drawers", "komplex": "complex", "königin": "queen", "kontakt": "contact", "kontext": "context", "konzept": "concept", "konzern": "combine", "konzert": "concert", "kräftig": "strong", "kreativ": "creative", "künftig": "future", "kutsche": "carriage", "lächeln": "smile", "landung": "landing", "lauwarm": "lukewarm", "lebhaft": "vivid", "legende": "legend", "leisten": "achieve", "leitung": "management", "lenkrad": "steering wheel", "letztes": "last", "lexicon": "lexicon", "lieblos": "unloving", "liefern": "deliver", "lispeln": "lisp", "litauen": "lithuania", "löschen": "delete", "machbar": "feasible", "mächtig": "powerful", "magazin": "magazine", "malerei": "painting", "manager": "manager", "mancher": "many a", "manuell": "manual", "märchen": "fairy tale", "matrose": "sailor", "maximal": "maximum", "medizin": "medicine", "mehrere": "several", "merkmal": "feature", "metzger": "butcher", "million": "million", "mittels": "by means of", "modisch": "fashionable", "morgens": "in the morning", "moskito": "mosquito", "münchen": "munich", "murmeln": "mumble", "musiker": "musician", "nachbar": "neighbour", "nachher": "afterwards", "nämlich": "namely", "nebenan": "next door", "negativ": "negative", "neigung": "slope", "neujahr": "new year", "neulich": "recently", "niedrig": "low", "nielage": "nielage", "niemand": "nobody", "nieseln": "drizzle", "nochmal": "again", "nordpol": "north pole", "nordsee": "north sea", "notfall": "emergency", "nutzlos": "useless", "nutzung": "use", "ohnehin": "anyway", "ohrring": "earring", "oktober": "october", "ordnung": "order", "östlich": "eastern", "packung": "pack", "parkett": "parquet", "partner": "partner", "passend": "suitable", "patient": "patient", "pendler": "commuter", "pension": "pension", "perfekt": "perfect", "pfarrer": "pastor", "pfeffer": "pepper", "pfennig": "pfennig", "pflanze": "plant", "pflaume": "plum", "pflegen": "nurse", "pflicht": "duty", "pflügen": "plough", "pfosten": "post", "pianist": "pianist", "pistole": "pistol", "planung": "planning", "plastik": "plastic", "politik": "politics", "popcorn": "popcorn", "populär": "popular", "porträt": "portrait", "postamt": "post office", "präsens": "present tense", "produkt": "product", "projekt": "project", "protzig": "showy", "provinz": "province", "prozent": "percent", "prüfung": "examination", "pudding": "pudding", "quatsch": "nonsense", "radikal": "radical", "rasseln": "rattle", "rathaus": "town hall", "rauchen": "smoke", "rechnen": "calculate", "rechner": "computer", "referat": "report",
    "reklame": "advertisement", "respekt": "respect", "rettung": "rescue", "richter": "judge", "riechen": "smell", "rosarot": "rosy", "rotkohl": "red cabbage", "rotwein": "red wine", "rückzug": "retreat", "sammeln": "collect", "samstag": "saturday", "sandale": "sandal", "sardine": "sardine", "satteln": "saddle", "scanner": "scanner", "schädel": "skull", "schaden": "damage", "schämen": "feel ashamed", "schauer": "shower", "scheibe": "disk", "schicht": "layer", "schlank": "slender", "schlips": "tie", "schloss": "lock", "schmerz": "pain", "schmuck": "jewellery", "schnaps": "schnapps", "schrank": "cupboard", "schreck": "fright", "schrift": "writing", "schüler": "pupil", "schwach": "weak", "schwarz": "black", "schweiß": "sweat", "schweiz": "switzerland", "seemann": "sailor", "seitdem": "since", "seither": "since", "sekunde": "second", "seltsam": "strange", "seminar": "seminar", "sendung": "mission", "serbien": "serbia", "service": "service", "sexuell": "sexual", "shampoo": "shampoo", "sichern": "secure", "silbern": "silver", "sitzung": "session", "softeis": "soft ice cream", "solcher": "such", "sonntag": "sunday", "sonstig": "other", "spalten": "split", "spanien": "spain", "sparsam": "frugal", "spiegel": "mirror", "spieler": "player", "spinnen": "spin", "sprache": "language", "stadion": "stadium", "stammen": "originate", "starren": "stare", "starten": "start", "stechen": "stab", "stecken": "stick", "stehlen": "steal", "steigen": "climb", "steuern": "steer", "stiefel": "boot", "stiften": "donate", "stimmen": "tune", "stimmt": "agrees", "stinken": "stink", "stinkig": "stinky", "stöhnen": "groan", "stoppel": "stubble", "stoppen": "stop", "störung": "disturbance", "strecke": "stretch", "strumpf": "stocking", "student": "student", "studium": "study", "stürzen": "overthrow", "südlich": "southern", "suspekt": "suspect", "synonym": "synonym", "tabelle": "table", "täglich": "daily", "taktlos": "tactless", "tauchen": "dive", "tausend": "thousand", "technik": "technology", "teppich": "carpet", "theater": "theatre", "theorie": "theory", "toaster": "toaster", "tödlich": "fatal", "torwart": "goalkeeper", "tourist": "tourist", "tragbar": "portable", "trainer": "coach", "trampen": "hitchhike", "träumen": "dream", "traurig": "sad", "treffer": "hit", "trennen": "separate", "triumph": "triumph", "trocken": "dry", "tropfen": "drop", "t-shirt": "t-shirt", "typisch": "typical", "übersät": "strewn", "uhrzeit": "time", "ukraine": "ukraine", "umarmen": "hug", "umfrage": "survey", "umgeben": "surround", "umgehen": "circumvent", "umsonst": "free", "umstand": "circumstance", "unrecht": "wrong", "ursache": "cause", "venedig": "venice", "verband": "association", "verkehr": "traffic", "verlobt": "engaged", "verlust": "loss", "versuch": "attempt", "verwunt": "wounded", "viertel": "quarter", "vierzig": "forty", "violett": "violet", "vitamin": "vitamin", "vokabel": "word", "vorfahr": "ancestor", "vorfall": "incident", "vorgang": "process", "vorhang": "curtain", "vorlage": "template", "vorname": "forename", "vorsatz": "premeditation", "vorteil": "advantage", "vorwahl": "area code", "vorwurf": "reproach", "wachsen": "grow", "während": "during", "währung": "currency", "walkman": "walkman", "warnung": "warning", "waschen": "wash", "website": "website", "wechsel": "change", "wegfall": "discontinuation", "weltall": "universe", "werbung": "advertising", "wertlos": "worthless", "weshalb": "why", "wickeln": "wrap", "wirksam": "effective", "wistand": "wistand", "wohnort": "residence", "wunkind": "wunkind", "wunvoll": "wunvoll", "zahllos": "countless", "zahlung": "payment", "zahnlos": "toothless", "zeichen": "sign", "zeitung": "newspaper", "zentral": "central", "zentrum": "centre", "ziellos": "aimless", "zigarre": "cigar", "zittern": "tremble", "züchten": "breed", "zugeben": "admit", "zugriff": "access", "zuhause": "at home", "zuhören": "listen", "zuletzt": "finally", "zwanzig": "twenty", "zweifel": "doubt", "zweimal": "twice", "zwiebel": "onion", "zwingen": "compel", "tschüss": "goodbye",
    "die": "the", "das": "that", "der": "the", "akt": "act", "amt": "office", "ate": "Ate", "auf": "on", "bär": "bear", "bau": "construction", "bei": "at", "bin": "am", "bis": "until", "bus": "bus", "den": "the", "dom": "cathedral", "ein": "one", "eis": "ice", "elf": "eleven", "eng": "narrow", "fan": "fan", "fax": "fax", "fit": "fit", "fuß": "foot", "gar": "done", "gut": "good", "hai": "shark", "hin": "There", "hof": "yard", "hut": "hat", "ice": "Ice", "ich": "I", "ind": "Ind", "inn": "Inn", "ins": "into", "ist": "is", "klo": "loo", "kuh": "cow", "lkw": "truck", "maß": "measure", "men": "Men", "mit": "with", "mon": "Mon", "mut": "courage", "nah": "near", "nen": "nen", "ner": "ner", "nie": "never", "not": "distress", "nst": "Nst", "ode": "ode", "ohr": "ear", "oma": "Granny", "opa": "Grandfather", "per": "per", "pro": "per", "rad": "wheel", "rat": "advice", "rot": "red", "ruf": "reputation", "sag": "Tell", "see": "lake", "sie": "they", "ski": "ski", "stu": "Stu", "süß": "sweet", "tal": "valley", "tee": "tea", "ton": "clay", "tor": "gate", "ums": "ums", "uni": "university", "von": "from", "vor": "before", "wie": "how", "wir": "we", "wut": "fury", "zeh": "toe", "zum": "To", "zur": "the"
};

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

         wonMessage.innerHTML = `<br><strong>Juhuu! Gib mir fünf!<br>Es geht ihnen ALLES gut!</strong><br><br>the words were:${associatedWordsMessage}<br>Du hast noch ${maxLives} Leben. <br>Weitermachen!<br> `;
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
         const selectedWords = [selectedWord1, selectedWord2, selectedWord3, selectedWord4, selectedWord5];
         associatedWordsMessage = "";
         selectedWords.forEach(word => {
             const cleanWord = word.replace(/\s+/g, '').trim();
             if (associatedWords[cleanWord]) {
                 associatedWordsMessage += `${cleanWord} = ${associatedWords[cleanWord]}<br>`;
             }
         });
         lostMessage.innerHTML = `<strong>Ei Ei EI!<br>Sie haben keine Vermutungen mehr</strong><br><br>Du hast noch ${maxLives} Leben. <br><br> Die Worte waren:<br>${associatedWordsMessage} <br>`;
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
