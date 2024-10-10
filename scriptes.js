
const words1 = ["acá", "adn", "ahí", "ajá", "ají", "ajo", "ala", "alá", "aló", "ama", "amo", "ana", "anj", "año", "app", "arn", "aro", "asa", "así", "ate", "aun", "aún", "ave", "ayo", "bah", "bar", "bet", "bit", "bla", "boa", "boj", "bpd", "buf", "cal", "can", "cas", "coa", "col", "con", "coz", "cuy", "dar", "del", "día", "dls", "don", "dos", "dúo", "dux", "eco", "efe", "ego", "eje", "ele", "eme", "emú", "ene", "eñe", "eón", "epa", "era", "ere", "esa", "ésa", "ese", "ése", "eso", "eta", "eve", "evo", "fan", "fax", "faz", "feo", "fin", "gas", "gay", "gen", "gil", "gis", "gol", "haz", "hez", "hoy", "hoz", "huy", "ida", "ión", "ira", "iro", "lar", "las", "lea", "leo", "ley", "lía", "lid", "lío", "mal", "más", "mil", "mío", "muy", "oír", "ojo", "olé", "por", "que", "qué", "ser", "sin", "tal", "tan", "uno", "ver", "vía"
];
let selectedWord1 = words1[Math.floor(Math.random() * words1.length)];

const words2 = ["¡ca!", "¡ja!", "¡jo!", "a.m.", "algo", "allá", "allí", "alto", "amar", "añil", "ante", "aquí", "asar", "asia", "ayer", "azul", "bajo", "bien", "bobo", "buzo", "cabe", "cada", "caer", "caro", "casi", "cero", "chic", "cía.", "cian", "cien", "cojo", "como", "cómo", "cuál", "cuán", "dado", "diez", "dime", "dña.", "doce", "dra.", "duro", "este", "fiel", "fijo", "fino", "frío", "gafe", "gago", "galo", "gran", "gris", "guay", "huir", "irse", "kaki", "kilo", "leal", "leer", "lego", "leve", "lgbt", "lila", "liso", "loco", "lolo", "majo", "malo", "mijo", "mono", "moto", "nada", "ocho", "oler", "once", "oral", "otro", "oval", "p.m.", "para", "paso", "peor", "pero", "perú", "poco", "pues", "puro", "raro", "real", "reír", "rico", "rojo", "roto", "sano", "seco", "seis", "sexy", "sino", "solo", "soso", "sra.", "tabú", "todo", "torá", "tras", "tres", "usar", "útil", "vago", "vale", "viva", "vivo", "yeah"
];
let selectedWord2 = words2[Math.floor(Math.random() * words2.length)];

const words3 = ["¡oye!", "¡zas!", "abajo", "abrir", "ácido", "adiós", "agrio", "agudo", "ahora", "ajeno", "ambos", "amigo", "ancho", "andar", "añejo", "anexo", "ánimo", "antes", "arduo", "árido", "aries", "armar", "asado", "atrás", "audaz", "avaro", "bajar", "basta", "basto", "batir", "beato", "beber", "beige", "bello", "besar", "borde", "bravo", "breve", "brujo", "bruto", "bueno", "burdo", "burro", "cabal", "caber", "cafre", "calvo", "capar", "capaz", "caqui", "casar", "cazar", "ceder", "cenar", "cerca", "chafa", "chico", "chido", "chile", "chino", "choto", "ciego", "cinco", "civil", "claro", "clave", "cocer", "coger", "colar", "comer", "común", "corán", "corto", "coser", "crear", "creer", "criar", "crudo", "culto", "curar", "cursi", "dañar", "deber", "débil", "decir", "dejar", "depre", "desde", "digno", "doble", "dócil", "docto", "doler", "domar", "donar", "donde", "dónde", "dorar", "dpto.", "dudar", "dulce", "durar", "ebrio", "echar", "entre", "estar", "fácil", "falaz", "falso", "fatal", "feliz", "feroz", "fiado", "fiero", "fijar", "final", "flaco", "flojo", "freír", "frito", "fuera", "fugaz", "fumar", "fútil", "gacho", "ganar", "ganso", "girar", "gordo", "grato", "grave", "guapo", "güero", "haber", "hábil", "hacer", "hacia", "harto", "hasta", "hecho", "hello", "hondo", "hosco", "hueco", "huido", "ideal", "igual", "ileso", "impío", "jalar", "jamás", "japón", "jesús", "joven", "jugar", "junto", "jurar", "justo", "lacio", "laico", "largo", "lavar", "legal", "lejos", "lento", "lgtbi", "libre", "lindo", "listo", "llano", "lleno", "local", "luego", "macho", "magno", "magro", "manco", "manso", "marte", "matar", "mayor", "medio", "medir", "mejor", "menor", "menos", "mirar", "mismo", "moler", "moral", "morir", "mosca", "mover", "móvil", "mucho", "mutuo", "nacer", "nadar", "nadie", "negar", "negro", "nevar", "noble", "nueve", "nuevo", "nunca", "obeso", "odiar", "ojalá", "pagar", "parar", "pasar", "pedir", "pegar", "pelar", "pesar", "picar", "pinto", "pisar", "pitar", "pobre", "podar", "poder", "poner", "posar", "punki", "quien", "quién", "quizá", "rajar", "recto", "regar", "regio", "regir", "remar", "rezar", "rival", "robar", "rodar", "rogar", "rubio", "rural", "rusia", "saber", "sabio", "sacar", "sagaz", "salir", "salvo", "secar", "según", "serio", "sexto", "siete", "sobre", "soler", "sonar", "soñar", "sordo", "srta.", "subir", "sucio", "sudar", "sumar", "tañer", "tanto", "tarde", "tasar", "tauro", "tejer", "temer", "tener", "teñir", "tenso", "terco", "tibio", "tieso", "tirar", "tocar", "tomar", "torpe", "tosco", "toser", "total", "traer", "trece", "único", "usado", "usted", "usual", "vacío", "valer", "vamos", "venir", "venus", "verde", "viejo", "virgo", "visto", "vital", "viudo", "vivir", "volar", "votar", "zurdo"
];
let selectedWord3 = words3[Math.floor(Math.random() * words3.length)];

const words4 = ["¡anjá!", "¡chau!", "¡dale!", "¡guau!", "¡hola!", "acabar", "activo", "actual", "actuar", "acudir", "acuoso", "acusar", "además", "adicto", "adonde", "adónde", "adorar", "afinar", "áfrica", "afuera", "agotar", "alegre", "alguno", "amable", "amante", "amargo", "amplio", "añadir", "animar", "anoche", "anotar", "anular", "apagar", "apelar", "apenas", "apoyar", "arañar", "arriba", "astuto", "atacar", "atento", "atraer", "aunque", "ayudar", "baboso", "bacano", "bailar", "bajito", "barato", "barrer", "básico", "basura", "batear", "bélico", "bésame", "blanco", "blando", "bonico", "bonito", "borrar", "brasil", "brioso", "bronco", "brusco", "brutal", "bucear", "burlón", "buscar", "caerse", "calato", "cálido", "canadá", "cáncer", "canijo", "canino", "canoso", "cantar", "captor", "cargar", "carnal", "casado", "cascar", "casual", "catete", "catrín", "celoso", "cerrar", "chocar", "chucho", "chueco", "chutar", "ciento", "cierto", "cínico", "cobrar", "cocido", "colgar", "cómico", "cómodo", "contar", "contra", "copero", "copiar", "correr", "cortar", "cortés", "costar", "crecer", "creído", "cruzar", "cuando", "cuándo", "cuanto", "cuánto", "cuarto", "cuatro", "cubrir", "cuidar", "dañado", "dañino", "dañoso", "debajo", "debido", "décimo", "dejado", "déjalo", "dentro", "desear", "detrás", "diario", "difuso", "diurno", "doblar", "dolido", "dorado", "dormir", "drenar", "dudoso", "echado", "editar", "educar", "eficaz", "electo", "elegir", "emitir", "empero", "encima", "enjuto", "enorme", "entero", "entrar", "enviar", "eólico", "escaso", "españa", "eterno", "étnico", "europa", "evitar", "exacto", "exento", "exigir", "fallar", "faltar", "famoso", "fausto", "febril", "felino", "filoso", "fingir", "firmar", "físico", "floral", "formal", "fregar", "frente", "fresco", "frugal", "fuerte", "fundar", "fundir", "futuro", "galano", "gastar", "gatuno", "gaucho", "gélido", "gemelo", "genial", "gentil", "global", "golear", "goloso", "gótico", "gozoso", "grabar", "grande", "gratis", "gritar", "gritón", "gruñir", "guarro", "guasón", "gustar", "guyana", "habano", "hablar", "helado", "herido", "hervir", "hombre", "hostil", "húmedo", "huraño", "hurtar", "idiota", "idóneo", "ilegal", "imitar", "inglés", "íntimo", "italia", "jocoso", "jovial", "jugado", "jugoso", "júnior", "juzgar", "ladrar", "ladrón", "lanzar", "latino", "lejano", "lícito", "ligado", "ligero", "limpio", "lírico", "lívido", "llamar", "llegar", "llenar", "llevar", "llorar", "llover", "loable", "locuaz", "lodoso", "lógico", "lograr", "luchar", "lúdico", "lujoso", "macaco", "macizo", "maduro", "mágico", "malito", "mañana", "mandar", "mañoso", "marcar", "masivo", "máximo", "médico", "menear", "mentir", "méxico", "mínimo", "mítico", "mohoso", "mojado", "montar", "morado", "mordaz", "morder", "moreno", "mortal", "movido", "muchas", "muerto", "multar", "narrar", "ningún", "normal", "noveno", "obtuso", "octavo", "ocupar", "odioso", "ojalar", "online", "opinar", "oscuro", "otoñal", "pagado", "pagano", "pálido", "panamá", "parado", "parejo", "pasado", "pasear", "patear", "pelado", "pelear", "peludo", "pensar", "perder", "perdón", "pesado", "pescar", "pésimo", "pícaro", "picoso", "pillar", "pintar", "pirata", "piscis", "placar", "plutón", "ponqué", "porque", "postal", "prever", "probar", "pronto", "propio", "puesto", "pulcro", "pulsar", "quedar", "quemar", "querer", "quince", "quinto", "quitar", "rallar", "rapear", "rápido", "raptar", "rascar", "rayado", "reírse", "remoto", "repeat", "restar", "ritual", "rizado", "romper", "rosado", "salado", "saltar", "salvar", "seguir", "seguro", "sénior", "sentir", "servir", "simple", "social", "sólido", "sonoro", "suelto", "sufrir", "surgir", "tacaño", "tardar", "tender", "tímido", "típico", "tóxico", "tozudo", "tragar", "tratar", "trepar", "triple", "triste", "trotar", "último", "urbano", "vaciar", "varios", "veinte", "vencer", "vender", "verbal", "verter", "viajar", "violar", "visual", "volver", "vulgar", "zampar", "zurrar"
];
let selectedWord4 = words4[Math.floor(Math.random() * words4.length)];

const words5 = ["¡caray!", "¡órale!", "abatido", "abdicar", "abierto", "abismal", "abonado", "abordar", "abrazar", "abrupto", "absurdo", "aburrir", "abyecto", "acampar", "aclarar", "acuario", "adjunto", "admitir", "afanoso", "afectar", "agorero", "agotado", "agreste", "ahorita", "ahorrar", "ahumado", "aislado", "alcista", "aleluya", "alguien", "amateur", "amoroso", "anciano", "anfibio", "angosto", "animado", "ansioso", "antiguo", "apagado", "aparear", "aplicar", "aportar", "apostar", "apresar", "aprobar", "aquella", "arrojar", "asaltar", "asistir", "atender", "aterido", "atracar", "atrapar", "ausente", "avanzar", "avisado", "bañarse", "bárbaro", "barbudo", "bellaco", "benigno", "bizarro", "blindar", "bohemio", "bolivia", "bordado", "boricua", "borroso", "brincar", "brindar", "bromear", "brumoso", "búlgaro", "burdeos", "cabezón", "cabrero", "callado", "cambiar", "caminar", "campero", "canalla", "cansado", "caótico", "carmesí", "casarse", "casposo", "castrar", "cazurro", "celeste", "central", "cercano", "cerrado", "certero", "charlar", "chatear", "chicano", "chillar", "clásico", "cobrizo", "cochino", "cocinar", "colocar", "comprar", "confiar", "conmigo", "conocer", "contado", "contigo", "cordial", "crítico", "cuidado", "cumplir", "curioso", "dañarse", "decidir", "decimal", "decorar", "deforme", "delante", "delator", "delgado", "demente", "deprisa", "después", "detener", "diáfano", "dibujar", "diestro", "difícil", "difunto", "digital", "directo", "dirigir", "díscolo", "diseñar", "diverso", "dividir", "dormido", "driblar", "durante", "ecuador", "educado", "efímero", "egoísta", "elevado", "empatar", "empeñar", "empezar", "empujar", "encasar", "encinta", "endeble", "enemigo", "enfermo", "engañar", "enlazar", "enojado", "enojoso", "ensayar", "enseñar", "erizado", "erudito", "esbozar", "escalar", "escapar", "escoger", "escolar", "escrito", "español", "esperar", "esquiar", "estable", "estatal", "estival", "europeo", "evaluar", "excavar", "excepto", "excitar", "existir", "exitoso", "externo", "extinto", "extraño", "fachoso", "facundo", "fashion", "fecundo", "federal", "festivo", "flipado", "fodongo", "forense", "fornido", "forrado", "francés", "francia", "fregado", "frontal", "fúnebre", "furioso", "galante", "gallego", "galopar", "ganador", "gangoso", "garboso", "garrido", "gaseoso", "géminis", "general", "gigante", "golpear", "gordito", "gracias", "granate", "grasoso", "greñudo", "grosero", "guardar", "guglear", "gustoso", "habitar", "hacerse", "hackear", "haragán", "hechizo", "heredar", "hermoso", "heroico", "hervido", "hidalgo", "hirsuto", "hispano", "holgado", "honesto", "honrado", "hornear", "huesudo", "humilde", "ignorar", "ilícito", "ilustre", "impedir", "incapaz", "incauto", "incluir", "incluso", "indicar", "inédito", "influir", "inhalar", "injusto", "intenso", "invicto", "invitar", "irlanda", "jamaica", "japonés", "jóvenes", "júpiter", "laboral", "labrado", "lampiño", "lascivo", "lateral", "lechoso", "leonado", "letrado", "liberal", "limpiar", "límpido", "líquido", "literal", "liviano", "llámame", "lloroso", "lóbrego", "lúgubre", "macabro", "maestro", "maldito", "malvado", "mancebo", "manejar", "maníaco", "mareado", "marrano", "mediano", "mejorar", "mellizo", "mendigo", "menguar", "mensual", "merecer", "métrico", "mezclar", "mineral", "modelar", "moderno", "modesto", "molesto", "montado", "mórbido", "morirse", "mostrar", "mudarse", "mundano", "mundial", "musical", "naranja", "natural", "navegar", "neptuno", "ninguna", "ninguno", "noquear", "notable", "noventa", "nublado", "nuestro", "numeral", "obtener", "oceanía", "ochenta", "ocupado", "ocurrir", "offline", "ofrecer", "olvidar", "oprimir", "opuesto", "ordenar", "oriundo", "otorgar", "oxidado", "padecer", "pararse", "parecer", "patinar", "pequeño", "perdido", "perrear", "piadoso", "picante", "planear", "platino", "plisado", "ponerse", "popular", "posible", "preciso", "prender", "prestar", "primero", "proveer", "próximo", "público", "puntear", "puntual", "quemado", "querido", "químico", "rabioso", "radical", "recetar", "recibir", "recoger", "redondo", "reducir", "reflejo", "regalar", "regular", "relleno", "reparar", "repasar", "repetir", "resumir", "revelar", "revisar", "robusto", "ruidoso", "sabroso", "sagrado", "salobre", "saltado", "saltear", "saludar", "salvaje", "saturno", "secarse", "secular", "segundo", "semanal", "sembrar", "sensato", "sentado", "separar", "séptimo", "sesenta", "setenta", "siempre", "similar", "sincero", "sofrito", "soleado", "soltero", "sonreír", "suceder", "sugerir", "superar", "suponer", "también", "tampoco", "tarumba", "teclear", "temible", "tercero", "térmico", "todavía", "umbroso", "urgente", "ustedes", "valorar", "vámonos", "ventoso", "vestido", "viciado", "virtual", "visible", "visitar", "voltear", "vuestro"
];
let selectedWord5 = words5[Math.floor(Math.random() * words5.length)];


const associatedWords = {
    "acá": "here", "adn": "DNA", "ahí": "there", "ajá": "aha", "ají": "chili", "ajo": "garlic", "ala": "wing", "alá": "come on! let's go!", "aló": "hello,", "ama": "housekeeper, head maid", "amo": "master", "ana": "Anna (Biblical prophetess)", "anj": "ankh", "año": "year", "app": "application", "arn": "RNA, ribonucleic acid", "aro": "hoop", "asa": "handle", "así": "like this; like that; as such; thus; so", "ate": "Mexican jelly candy", "aun": "even", "aún": "still, yet", "ave": "bird", "ayo": "Person who takes care of children; tutor", "bah": "indicates disdain or unbelief", "bar": "Bar, pub", "bet": "beth; the Hebrew letter ב", "bit": "bit (binary digit)", "bla": "blah (idle talk)", "boa": "(snake)", "boj": "box (tree), boxwood", "bpd": "abbreviation of barriles por día (barrels per day)", "buf": "expresses unpleasantness", "cal": "lime (calcium oxide)", "can": "dog, hound", "cas": "The fruit of a very tart species of guava", "coa": "low class or criminal jargon", "col": "cabbage", "con": "with", "coz": "kick (of an animal)", "cuy": "guinea pig", "dar": "+ por to assume", "del": "of the, from the (+ a masculine noun in singular)", "día": "Period of daylight: day", "dls": "dollars", "don": "A title of respect to a man, prefixed to Christian names", "dos": "two", "dúo": "duo (twosome, especially musicians)", "dux": "doge (chief magistrate in the republics of Venice and Genoa)", "eco": "echo", "efe": "Name of the letter f", "ego": "ego", "eje": "axis", "ele": "Name of the letter l", "eme": "Name of the letter m", "emú": "emu", "ene": "a huge amount of, lots of, many", "eñe": "Name of the letter ñ", "eón": "eon, eternity", "epa": "hey", "era": "era", "ere": "Name of the letter r", "esa": "feminine form of ese that", "ésa": "feminine form of ése that one", "ese": "that", "ése": "that one (near you)", "eso": "neuter form of ése that", "eta": "eta; the Greek letter Η, η", "eve": "female given name", "evo": "eternity", "fan": "fan", "fax": "fax", "faz": "(geometry) face (of a polyhedron or solid)", "feo": "in poor condition", "fin": "end", "gas": "gas", "gay": "gay", "gen": "gene", "gil": "naïve, innocent, dumb, dummy", "gis": "piece of chalk", "gol": "goal (in football)", "haz": "beam", "hez": "dregs, sediment", "hoy": "today", "hoz": "sickle", "huy": "expression of pain, anguish, fright", "ida": "going", "ión": "ion", "ira": "ire, wrath", "iro": "A Mohawk hairstyle", "lar": "home", "las": "the", "lea": "female given name", "leo": "Leo, the constellation", "ley": "law", "lía": "female given name", "lid": "fight", "lío": "bundle", "mal": "bad", "más": "more", "mil": "thousand", "mío": "mine", "muy": "very", "oír": "to hear", "ojo": "be careful", "olé": "bravo", "por": "because of", "que": "that", "qué": "what", "ser": "to be", "sin": "without", "tal": "such", "tan": "so", "uno": "one", "ver": "to see", "vía": "via", "¡ca!": "Nonsense!", "¡ja!": "Ha!", "¡jo!": "Wow!", "a.m.": "a.m.", "algo": "a little", "allá": "there", "allí": "there", "alto": "tall", "amar": "to love", "añil": "indigo", "ante": "before", "aquí": "here", "asar": "to roast", "asia": "Asia",
    "ayer": "yesterday", "azul": "blue", "bajo": "short", "bien": "well", "bobo": "silly", "buzo": "alert", "cabe": "close to", "cada": "every", "caer": "to fall", "caro": "expensive", "casi": "almost", "cero": "zero", "chic": "chic", "cía.": "Co.", "cian": "cyan", "cien": "one hundred", "cojo": "lame", "como": "as", "cómo": "how", "cuál": "which", "cuán": "how", "dado": "given", "diez": "ten", "dime": "tell me", "dña.": "Ms.", "doce": "twelve", "dra.": "Dr.", "duro": "tough", "este": "this", "fiel": "faithful", "fijo": "fixed", "fino": "fine", "frío": "cold", "gafe": "jinxed", "gago": "stammering", "galo": "French", "gran": "large", "gris": "gray", "guay": "cool", "huir": "to flee", "irse": "to leave", "kaki": "khaki", "kilo": "kilo", "leal": "loyal", "leer": "to read", "lego": "lay", "leve": "slight", "lgbt": "LGBT", "lila": "lilac", "liso": "smooth", "loco": "crazy", "lolo": "teenage", "majo": "nice", "malo": "bad", "mijo": "dear", "mono": "cute", "moto": "abandoned", "nada": "nothing", "ocho": "eight", "oler": "to smell", "once": "eleven", "oral": "oral", "otro": "another", "oval": "oval", "p.m.": "p.m.", "para": "for", "paso": "dried", "peor": "worse", "pero": "but", "perú": "Peru", "poco": "little", "pues": "well", "puro": "sheer", "raro": "rare", "real": "real", "reír": "to laugh", "rico": "rich", "rojo": "red", "roto": "broken", "sano": "healthy", "seco": "dry", "seis": "six", "sexy": "sexy", "sino": "but", "solo": "only", "soso": "bland", "sra.": "Ms.", "tabú": "taboo", "todo": "all", "torá": "Torah", "tras": "after", "tres": "three", "usar": "to use", "útil": "useful", "vago": "lazy", "vale": "okay", "viva": "hurrah", "vivo": "alive", "yeah": "right!", "¡oye!": "Hey!", "¡zas!": "Bang!", "abajo": "down", "abrir": "to open", "ácido": "acid", "adiós": "goodbye", "agrio": "sour", "agudo": "keen", "ahora": "now", "ajeno": "alien", "ambos": "both", "amigo": "friendly", "ancho": "wide", "andar": "to walk", "añejo": "mature", "anexo": "attached", "ánimo": "come on", "antes": "before", "arduo": "arduous", "árido": "arid", "aries": "Aries", "armar": "to assemble", "asado": "grilled", "atrás": "behind", "audaz": "daring", "avaro": "miserly", "bajar": "to go down", "basta": "enough", "basto": "coarse", "batir": "to whisk", "beato": "blessed", "beber": "to drink", "beige": "beige", "bello": "beautiful", "besar": "to kiss", "borde": "rude", "bravo": "fierce", "breve": "brief", "brujo": "bewitching", "bruto": "stupid", "bueno": "good", "burdo": "crude", "burro": "stupid", "cabal": "upright", "caber": "to fit", "cafre": "brutish", "calvo": "bald", "capar": "to castrate", "capaz": "able", "caqui": "khaki", "casar": "to go together", "cazar": "to hunt", "ceder": "to give in", "cenar": "to have dinner", "cerca": "close", "chafa": "crappy", "chico": "small", "chido": "awesome", "chile": "Chile", "chino": "Chinese", "choto": "senile", "ciego": "blind", "cinco": "five", "civil": "civil", "claro": "clear", "clave": "key", "cocer": "to cook", "coger": "to take", "colar": "to strain", "comer": "to eat", "común": "common", "corán": "Koran", "corto": "short", "coser": "to sew", "crear": "to create", "creer": "to believe", "criar": "to raise", "crudo": "undercooked", "culto": "cultured", "curar": "to cure", "cursi": "corny", "dañar": "to damage", "deber": "should", "débil": "weak", "decir": "to say", "dejar": "to leave", "depre": "low", "desde": "from", "digno": "worthy", "doble": "double", "dócil": "docile", "docto": "learned", "doler": "to hurt", "domar": "to tame", "donar": "to donate", "donde": "where", "dónde": "where", "dorar": "to brown", "dpto.": "dept", "dudar": "to doubt", "dulce": "sweet", "durar": "to last", "ebrio": "drunk", "echar": "to throw", "entre": "between", "estar": "to be", "fácil": "easy", "falaz": "FALSE", "falso": "FALSE", "fatal": "terrible", "feliz": "happy", "feroz": "fierce", "fiado": "trusting", "fiero": "ferocious", "fijar": "to set", "final": "final", "flaco": "thin", "flojo": "loose", "freír": "to fry", "frito": "fried", "fuera": "out", "fugaz": "fleeting", "fumar": "to smoke", "fútil": "futile", "gacho": "drooping", "ganar": "to win", "ganso": "lazy", "girar": "to turn", "gordo": "fat", "grato": "pleasant", "grave": "grave", "guapo": "handsome", "güero": "fair-haired", "haber": "to have", "hábil": "skillful", "hacer": "to do", "hacia": "toward", "harto": "full", "hasta": "until", "hecho": "made", "hello": "how are you?", "hondo": "deep", "hosco": "sullen", "hueco": "hollow", "huido": "fugitive", "ideal": "ideal", "igual": "equal", "ileso": "unharmed", "impío": "impious", "jalar": "to pull", "jamás": "never", "japón": "Japan", "jesús": "Jesus", "joven": "young", "jugar": "to play", "junto": "together", "jurar": "to swear", "justo": "fair", "lacio": "straight", "laico": "lay", "largo": "long", "lavar": "to wash", "legal": "legal", "lejos": "far", "lento": "slow", "lgtbi": "LGBTI", "libre": "free", "lindo": "pretty", "listo": "smart", "llano": "flat", "lleno": "full", "local": "local", "luego": "then", "macho": "tough", "magno": "great", "magro": "lean", "manco": "one-armed", "manso": "tame", "marte": "Mars", "matar": "to kill", "mayor": "older", "medio": "average", "medir": "to measure", "mejor": "better", "menor": "minor", "menos": "less", "mirar": "to look at", "mismo": "same", "moler": "to grind", "moral": "moral", "morir": "to die", "mosca": "suspicious", "mover": "to move", "móvil": "mobile", "mucho": "a lot", "mutuo": "mutual", "nacer": "to be born", "nadar": "to swim", "nadie": "no one", "negar": "to deny", "negro": "black", "nevar": "to snow", "noble": "noble", "nueve": "nine", "nuevo": "new", "nunca": "never", "obeso": "obese", "odiar": "to hate", "ojalá": "hopefully", "pagar": "to pay", "parar": "to stop", "pasar": "to pass", "pedir": "to ask for", "pegar": "to paste", "pelar": "to peel", "pesar": "to weigh", "picar": "to itch", "pinto": "spotted", "pisar": "to strike", "pitar": "to call", "pobre": "poor", "podar": "to prune", "poder": "to be able to", "poner": "to put", "posar": "to pose", "punki": "punk", "quien": "who", "quién": "who", "quizá": "maybe", "rajar": "to rip", "recto": "right", "regar": "to water", "regio": "great", "regir": "to govern", "remar": "to row", "rezar": "to pray", "rival": "rival", "robar": "to steal", "rodar": "to shoot", "rogar": "to beg", "rubio": "blond", "rural": "rural", "rusia": "Russia", "saber": "to know", "sabio": "wise", "sacar": "to take out", "sagaz": "clever", "salir": "to go out", "salvo": "safe", "secar": "to dry", "según": "as", "serio": "serious", "sexto": "sixth", "siete": "seven", "sobre": "on", "soler": "to use to", "sonar": "to ring", "soñar": "to dream", "sordo": "deaf", "srta.": "Miss", "subir": "to go up", "sucio": "dirty", "sudar": "to sweat", "sumar": "to add", "tañer": "to strum", "tanto": "so much", "tarde": "late", "tasar": "to value", "tauro": "Taurus", "tejer": "to knit", "temer": "to fear", "tener": "to have", "teñir": "to dye", "tenso": "tense", "terco": "stubborn", "tibio": "lukewarm", "tieso": "stiff", "tirar": "to throw away", "tocar": "to touch", "tomar": "to take", "torpe": "clumsy", "tosco": "crude", "toser": "to cough", "total": "complete", "traer": "to bring", "trece": "thirteen", "único": "only", "usado": "used", "usted": "you", "usual": "usual", "vacío": "shallow", "valer": "to be worth", "vamos": "let's go", "venir": "to come", "venus": "Venus", "verde": "green", "viejo": "old", "virgo": "Virgo", "visto": "exposed", "vital": "vital", "viudo": "widowed", "vivir": "to live", "volar": "to fly", "votar": "to vote", "zurdo": "left-handed", "¡anjá!": "sure", "¡chau!": "Bye!", "¡dale!": "Go ahead!", "¡guau!": "Wow!", "¡hola!": "Hello!", "acabar": "to finish", "activo": "working", "actual": "current", "actuar": "to act", "acudir": "to come", "acuoso": "watery", "acusar": "to accuse", "además": "besides", "adicto": "addicted", "adonde": "where", "adónde": "where", "adorar": "to adore", "afinar": "to tune", "áfrica": "Africa", "afuera": "outside", "agotar": "to exhaust", "alegre": "happy", "alguno": "some", "amable": "kind", "amante": "loving", "amargo": "bitter", "amplio": "wide", "añadir": "to add", "animar": "to encourage", "anoche": "last night", "anotar": "to note down", "anular": "ring-shaped", "apagar": "to turn off", "apelar": "to appeal", "apenas": "hardly", "apoyar": "to support", "arañar": "to scratch", "arriba": "above", "astuto": "shrewd", "atacar": "to attack", "atento": "attentive", "atraer": "to attract", "aunque": "even though", "ayudar": "to help", "baboso": "slimy", "bacano": "awesome", "bailar": "to dance", "bajito": "shortish", "barato": "cheap", "barrer": "to sweep", "básico": "basic", "basura": "junk", "batear": "to hit", "bélico": "warlike", "bésame": "kiss me", "blanco": "white", "blando": "soft", "bonico": "honey", "bonito": "pretty", "borrar": "to delete", "brasil": "Brazil", "brioso": "spirited", "bronco": "harsh", "brusco": "brusque", "brutal": "brutal", "bucear": "to scuba dive", "burlón": "mocking", "buscar": "to look for", "caerse": "to fall", "calato": "naked", "cálido": "warm", "canadá": "Canada", "cáncer": "Cancer", "canijo": "tiny", "canino": "canine", "canoso": "gray-haired", "cantar": "to sing", "captor": "capturing", "cargar": "to charge", "carnal": "blood", "casado": "married", "cascar": "to crack", "casual": "chance", "catete": "annoying", "catrín": "well-dressed", "celoso": "jealous", "cerrar": "to close", "chocar": "to crash", "chucho": "mean", "chueco": "crooked", "chutar": "to shoot", "ciento": "one hundred", "cierto": "TRUE", "cínico": "cynical", "cobrar": "to charge for", "cocido": "cooked", "colgar": "to hang", "cómico": "funny", "cómodo": "comfortable", "contar": "to tell", "contra": "against", "copero": "cup", "copiar": "to copy", "correr": "to run", "cortar": "to cut", "cortés": "polite", "costar": "to cost", "crecer": "to grow", "creído": "conceited", "cruzar": "to cross", "cuando": "when", "cuándo": "when", "cuanto": "the more",
    "cuánto": "how much", "cuarto": "fourth", "cuatro": "four", "cubrir": "to cover", "cuidar": "to take care of", "dañado": "spoiled", "dañino": "harmful", "dañoso": "harmful", "debajo": "underneath", "debido": "proper", "décimo": "tenth", "dejado": "careless", "déjalo": "it's OK", "dentro": "inside", "desear": "to want", "detrás": "behind", "diario": "daily", "difuso": "diffuse", "diurno": "diurnal", "doblar": "to turn", "dolido": "hurt", "dorado": "golden", "dormir": "to sleep", "drenar": "to drain", "dudoso": "dubious", "echado": "lying down", "editar": "to publish", "educar": "to bring up", "eficaz": "effective", "electo": "elect", "elegir": "to choose", "emitir": "to emit", "empero": "nonetheless", "encima": "on top", "enjuto": "lean", "enorme": "huge", "entero": "whole", "entrar": "to enter", "enviar": "to send", "eólico": "eolian", "escaso": "scarce", "españa": "Spain", "eterno": "eternal", "étnico": "ethnic", "europa": "Europe", "evitar": "to avoid", "exacto": "exact", "exento": "exempt", "exigir": "to demand", "fallar": "to fail", "faltar": "to miss", "famoso": "famous", "fausto": "happy", "febril": "feverish", "felino": "feline", "filoso": "sharp", "fingir": "to pretend", "firmar": "to sign", "físico": "physical", "floral": "floral", "formal": "formal", "fregar": "to mop", "frente": "against", "fresco": "fresh", "frugal": "frugal", "fuerte": "strong", "fundar": "to found", "fundir": "to melt", "futuro": "future", "galano": "smart", "gastar": "to spend", "gatuno": "catlike", "gaucho": "helpful", "gélido": "icy", "gemelo": "twin", "genial": "great", "gentil": "courteous", "global": "overall", "golear": "to score a lot of goals against", "goloso": "sweet-toothed", "gótico": "Gothic", "gozoso": "joyful", "grabar": "to record", "grande": "big", "gratis": "free", "gritar": "to shout", "gritón": "loudmouthed", "gruñir": "to growl", "guarro": "dirty", "guasón": "mocking", "gustar": "to like", "guyana": "Guyana", "habano": "tan", "hablar": "to speak", "helado": "freezing", "herido": "hurt", "hervir": "to boil", "hombre": "you bet", "hostil": "hostile", "húmedo": "humid", "huraño": "shy", "hurtar": "to steal", "idiota": "idiotic", "idóneo": "fit", "ilegal": "illegal", "imitar": "to imitate", "inglés": "English", "íntimo": "romantic", "italia": "Italy", "jocoso": "humorous", "jovial": "jovial", "jugado": "experienced", "jugoso": "juicy", "júnior": "junior", "juzgar": "to judge", "ladrar": "to bark", "ladrón": "thieving", "lanzar": "to launch", "latino": "Latin", "lejano": "distant", "lícito": "legal", "ligado": "bound", "ligero": "light", "limpio": "clean", "lírico": "lyric", "lívido": "pale", "llamar": "to call", "llegar": "to arrive", "llenar": "to fill", "llevar": "to take", "llorar": "to cry", "llover": "to rain", "loable": "laudable", "locuaz": "talkative", "lodoso": "muddy", "lógico": "logical", "lograr": "to achieve", "luchar": "to fight", "lúdico": "playful", "lujoso": "luxurious", "macaco": "ugly", "macizo": "solid", "maduro": "ripe", "mágico": "magic", "malito": "sick", "mañana": "tomorrow", "mandar": "to send", "mañoso": "crafty", "marcar": "to mark", "masivo": "massive", "máximo": "maximum", "médico": "medical", "menear": "to shake", "mentir": "to lie", "méxico": "Mexico", "mínimo": "minimum", "mítico": "mythical", "mohoso": "moldy", "mojado": "wet", "montar": "to ride", "morado": "purple", "mordaz": "scathing", "morder": "to bite", "moreno": "dark-skinned", "mortal": "fatal", "movido": "blurred", "muchas": "many", "muerto": "dead", "multar": "to fine", "narrar": "to tell", "ningún": "none of", "normal": "normal", "noveno": "ninth", "obtuso": "obtuse", "octavo": "eighth", "ocupar": "to take up", "odioso": "hateful", "ojalar": "to make buttonholes on", "online": "online", "opinar": "to believe", "oscuro": "dark", "otoñal": "autumnal", "pagado": "paid", "pagano": "pagan", "pálido": "pale", "panamá": "Panama", "parado": "stopped", "parejo": "level", "pasado": "past", "pasear": "to go for a walk", "patear": "to kick", "pelado": "broke", "pelear": "to fight", "peludo": "furry", "pensar": "to think", "perder": "to lose", "perdón": "excuse me", "pesado": "heavy", "pescar": "to fish", "pésimo": "awful", "pícaro": "crafty", "picoso": "spicy", "pillar": "to get", "pintar": "to paint", "pirata": "pirated", "piscis": "Pisces", "placar": "to block", "plutón": "Pluto", "ponqué": "pound cake", "porque": "because", "postal": "postal", "prever": "to foresee", "probar": "to taste", "pronto": "quick", "propio": "own", "puesto": "well-dressed", "pulcro": "neat", "pulsar": "to press", "quedar": "to be left", "quemar": "to burn", "querer": "to want", "quince": "fifteen", "quinto": "fifth", "quitar": "to take away", "rallar": "to grate", "rapear": "to rap", "rápido": "fast", "raptar": "to kidnap", "rascar": "to scratch", "rayado": "scratched", "reírse": "to laugh", "remoto": "remote", "repeat": "please", "restar": "to subtract", "ritual": "ritual", "rizado": "curly", "romper": "to break", "rosado": "pink", "salado": "salty", "saltar": "to jump", "salvar": "to save", "seguir": "to follow", "seguro": "sure", "sénior": "senior", "sentir": "to feel", "servir": "to serve", "simple": "simple", "social": "social", "sólido": "solid", "sonoro": "loud", "suelto": "loose", "sufrir": "to suffer", "surgir": "to arise", "tacaño": "stingy", "tardar": "to take", "tender": "to set", "tímido": "shy", "típico": "typical", "tóxico": "toxic", "tozudo": "stubborn", "tragar": "to swallow", "tratar": "to treat", "trepar": "to climb", "triple": "triple", "triste": "sad", "trotar": "to jog", "último": "last", "urbano": "urban", "vaciar": "to empty", "varios": "several", "veinte": "twenty", "vencer": "to defeat", "vender": "to sell", "verbal": "verbal", "verter": "to pour", "viajar": "to travel", "violar": "to rape", "visual": "visual", "volver": "to return", "vulgar": "vulgar", "zampar": "to wolf down", "zurrar": "to wallop", "¡caray!": "Wow!", "¡órale!": "Alright!", "abatido": "dejected", "abdicar": "to abdicate", "abierto": "open", "abismal": "vast", "abonado": "fertilized", "abordar": "to board", "abrazar": "to hug", "abrupto": "steep", "absurdo": "absurd", "aburrir": "to bore", "abyecto": "abject", "acampar": "to camp", "aclarar": "to clarify", "acuario": "Aquarius", "adjunto": "attached", "admitir": "to admit", "afanoso": "industrious", "afectar": "to affect", "agorero": "ominous", "agotado": "exhausted", "agreste": "rough", "ahorita": "right now", "ahorrar": "to save", "ahumado": "smoked", "aislado": "isolated", "alcista": "bull", "aleluya": "hurray", "alguien": "someone", "amateur": "amateur", "amoroso": "loving", "anciano": "elderly", "anfibio": "amphibious", "angosto": "narrow", "animado": "lively", "ansioso": "anxious", "antiguo": "old", "apagado": "off", "aparear": "to mate", "aplicar": "to apply", "aportar": "to contribute", "apostar": "to bet", "apresar": "to apprehend", "aprobar": "to pass", "aquella": "that", "arrojar": "to throw", "asaltar": "to hold up", "asistir": "to attend", "atender": "to attend to", "aterido": "freezing", "atracar": "to mug", "atrapar": "to catch", "ausente": "absent", "avanzar": "to advance", "avisado": "sensible", "bañarse": "to take a bath", "bárbaro": "cruel", "barbudo": "bearded", "bellaco": "wicked", "benigno": "benign", "bizarro": "brave", "blindar": "to armor-plate", "bohemio": "bohemian", "bolivia": "Bolivia", "bordado": "embroidered", "boricua": "Puerto Rican", "borroso": "blurred", "brincar": "to skip", "brindar": "to toast", "bromear": "to joke", "brumoso": "misty", "búlgaro": "Bulgarian", "burdeos": "burgundy", "cabezón": "pigheaded", "cabrero": "bad-tempered", "callado": "silent", "cambiar": "to change", "caminar": "to walk", "campero": "country", "canalla": "rotten", "cansado": "tired", "caótico": "chaotic", "carmesí": "crimson", "casarse": "to get married", "casposo": "covered in dandruff", "castrar": "to neuter", "cazurro": "stupid", "celeste": "sky-blue", "central": "central", "cercano": "close", "cerrado": "closed", "certero": "well-aimed", "charlar": "to chat", "chatear": "to chat", "chicano": "Chicano", "chillar": "to clash", "clásico": "classical", "cobrizo": "copper", "cochino": "filthy", "cocinar": "to cook", "colocar": "to place", "comprar": "to buy", "confiar": "to confide", "conmigo": "with me", "conocer": "to know", "contado": "numbered", "contigo": "with you", "cordial": "cordial", "crítico": "critical", "cuidado": "be careful", "cumplir": "to achieve", "curioso": "curious", "dañarse": "to get hurt", "decidir": "to decide", "decimal": "decimal", "decorar": "to decorate", "deforme": "deformed", "delante": "in front", "delator": "incriminating", "delgado": "thin", "demente": "crazy", "deprisa": "quickly", "después": "after", "detener": "to stop", "diáfano": "clear", "dibujar": "to draw", "diestro": "right-handed", "difícil": "difficult", "difunto": "deceased", "digital": "digital", "directo": "direct", "dirigir": "to run", "díscolo": "unruly", "diseñar": "to design", "diverso": "diverse", "dividir": "to divide", "dormido": "asleep", "driblar": "to dribble", "durante": "during", "ecuador": "Ecuador", "educado": "polite", "efímero": "ephemeral", "egoísta": "selfish", "elevado": "high", "empatar": "to tie", "empeñar": "to pawn", "empezar": "to start", "empujar": "to push", "encasar": "to set", "encinta": "pregnant", "endeble": "weak", "enemigo": "enemy", "enfermo": "sick", "engañar": "to deceive", "enlazar": "to link", "enojado": "angry", "enojoso": "annoying", "ensayar": "to rehearse", "enseñar": "to teach", "erizado": "spiky", "erudito": "erudite", "esbozar": "to sketch", "escalar": "to climb", "escapar": "to escape", "escoger": "to choose", "escolar": "school", "escrito": "written", "español": "Spanish", "esperar": "to wait for", "esquiar": "to ski", "estable": "stable", "estatal": "state", "estival": "summer", "europeo": "European", "evaluar": "to assess", "excavar": "to excavate", "excepto": "except for", "excitar": "to arouse",
    "existir": "to exist", "exitoso": "successful", "externo": "external", "extinto": "extinct", "extraño": "strange", "fachoso": "scruffy", "facundo": "eloquent", "fashion": "trendy", "fecundo": "prolific", "federal": "federal", "festivo": "festive", "flipado": "flabbergasted", "fodongo": "slovenly", "forense": "forensic", "fornido": "well-built", "forrado": "lined", "francés": "French", "francia": "France", "fregado": "annoying", "frontal": "frontal", "fúnebre": "gloomy", "furioso": "furious", "galante": "gallant", "gallego": "Galician", "galopar": "to gallop", "ganador": "winning", "gangoso": "nasal", "garboso": "graceful", "garrido": "beautiful", "gaseoso": "gaseous", "géminis": "Gemini", "general": "general", "gigante": "giant", "golpear": "to hit", "gordito": "chubby", "gracias": "thank you", "granate": "maroon", "grasoso": "greasy", "greñudo": "tangled", "grosero": "rude", "guardar": "to save", "guglear": "to Google", "gustoso": "tasty", "habitar": "to inhabit", "hacerse": "to make oneself", "hackear": "to hack", "haragán": "lazy", "hechizo": "fake", "heredar": "to inherit", "hermoso": "beautiful", "heroico": "heroic", "hervido": "boiled", "hidalgo": "generous", "hirsuto": "wiry", "hispano": "Hispanic", "holgado": "loose-fitting", "honesto": "honest", "honrado": "honest", "hornear": "to bake", "huesudo": "bony", "humilde": "humble", "ignorar": "to not know", "ilícito": "illicit", "ilustre": "illustrious", "impedir": "to prevent", "incapaz": "incapable", "incauto": "unsuspecting", "incluir": "to include", "incluso": "even", "indicar": "to indicate", "inédito": "unpublished", "influir": "to influence", "inhalar": "to inhale", "injusto": "unfair", "intenso": "intense", "invicto": "unbeaten", "invitar": "to invite", "irlanda": "Ireland", "jamaica": "Jamaica", "japonés": "Japanese", "jóvenes": "kids", "júpiter": "Jupiter", "laboral": "labor", "labrado": "cultivated", "lampiño": "hairless", "lascivo": "lascivious", "lateral": "lateral", "lechoso": "milky", "leonado": "tawny", "letrado": "learned", "liberal": "liberal", "limpiar": "to clean", "límpido": "limpid", "líquido": "liquid", "literal": "literal", "liviano": "light", "llámame": "call me", "lloroso": "tearful", "lóbrego": "gloomy", "lúgubre": "dismal", "macabro": "macabre", "maestro": "master", "maldito": "wretched", "malvado": "evil", "mancebo": "young", "manejar": "to drive", "maníaco": "manic", "mareado": "dizzy", "marrano": "disgusting", "mediano": "medium", "mejorar": "to improve", "mellizo": "twin", "mendigo": "mean", "menguar": "to wane", "mensual": "monthly", "merecer": "to deserve", "métrico": "metric", "mezclar": "to blend", "mineral": "mineral", "modelar": "to model", "moderno": "modern", "modesto": "modest", "molesto": "upset", "montado": "mounted", "mórbido": "morbid", "morirse": "to die", "mostrar": "to show", "mudarse": "to move", "mundano": "worldly", "mundial": "worldwide", "musical": "musical", "naranja": "orange", "natural": "natural", "navegar": "to sail", "neptuno": "Neptune", "ninguna": "no", "ninguno": "no", "noquear": "to knock out", "notable": "notable", "noventa": "ninety", "nublado": "cloudy", "nuestro": "our", "numeral": "numeral", "obtener": "to obtain", "oceanía": "Oceania", "ochenta": "eighty", "ocupado": "busy", "ocurrir": "to happen", "offline": "offline", "ofrecer": "to offer", "olvidar": "to forget", "oprimir": "to press", "opuesto": "opposite", "ordenar": "to order", "oriundo": "native", "otorgar": "to grant", "oxidado": "rusty", "padecer": "to suffer from", "pararse": "to stand up", "parecer": "to seem", "patinar": "to skate", "pequeño": "small", "perdido": "lost", "perrear": "to twerk", "piadoso": "devout", "picante": "hot", "planear": "to plan", "platino": "platinum", "plisado": "pleated", "ponerse": "to put on", "popular": "popular", "posible": "possible", "preciso": "accurate", "prender": "to turn on", "prestar": "to lend", "primero": "first", "proveer": "to provide", "próximo": "next", "público": "public", "puntear": "to pluck", "puntual": "on time", "quemado": "burnt", "querido": "dear", "químico": "chemical", "rabioso": "rabid", "radical": "radical", "recetar": "to prescribe", "recibir": "to receive", "recoger": "to pick up", "redondo": "round", "reducir": "to reduce", "reflejo": "reflex", "regalar": "to give", "regular": "regular", "relleno": "stuffed", "reparar": "to repair", "repasar": "to revise", "repetir": "to repeat", "resumir": "to summarize", "revelar": "to develop", "revisar": "to review", "robusto": "robust", "ruidoso": "noisy", "sabroso": "tasty", "sagrado": "holy", "salobre": "salty", "saltado": "bulging", "saltear": "to sauté", "saludar": "to greet", "salvaje": "wild", "saturno": "Saturn", "secarse": "to dry", "secular": "secular", "segundo": "second", "semanal": "weekly", "sembrar": "to plant", "sensato": "sensible", "sentado": "seated", "separar": "to separate", "séptimo": "seventh", "sesenta": "sixty", "setenta": "seventy", "siempre": "always", "similar": "similar", "sincero": "sincere", "sofrito": "sautéed", "soleado": "sunny", "soltero": "single", "sonreír": "to smile", "suceder": "to happen", "sugerir": "to suggest", "superar": "to overcome", "suponer": "to suppose", "también": "also", "tampoco": "neither", "tarumba": "goofy", "teclear": "to type", "temible": "fearful", "tercero": "third", "térmico": "thermal", "todavía": "still", "umbroso": "shady", "urgente": "urgent", "ustedes": "you", "valorar": "to value", "vámonos": "let's go", "ventoso": "windy", "vestido": "dressed", "viciado": "contaminated", "virtual": "virtual", "visible": "visible", "visitar": "to visit", "voltear": "to turn over", "vuestro": "your"
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

logoImage.src = 'logoes.png';

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
    livesDisplay.innerText = `Tienes ${maxLives} vidas`;
};

const updateincorrectGuessesDisplay = () => {
    incorrectGuessesDisplay.innerText = `¡Solo te quedan ${incorrectGuesses} intentos!`;
};

const updatewordcountDisplay = () => {
    wordcountDisplay.innerText = `Solo hay ${wordcount} palabras...!`;
};

const updatepointsDisplay = () => {
    pointsDisplay.innerText = `Tienes ${points} puntos!`;
};

let scoreboardes = [];

const updateScoreboardes = (name, points) => {
    scoreboardes.push({ name, points });
    // Sort the scoreboard by points in descending order
    scoreboardes.sort((a, b) => b.points - a.points);
    localStorage.setItem('scoreboardes', JSON.stringify(scoreboardes)); // Save to localStorage
    displayScoreboardes();
};

const displayScoreboardes = () => {
    const scoreboardesDiv = document.getElementById('scoreboardes');
    scoreboardesDiv.innerHTML = `
        <h3>Marcador</h3>
        <div class="header">
            <span>No.</span>
            <span>Nombre</span>
            <span>Puntaje</span>
        </div>
    `;
    scoreboardes.forEach((entry, index) => {
        scoreboardesDiv.innerHTML += `
            <div class="entry">
                <span>${index + 1}</span>
                <span>${entry.name}</span>
                <span>${entry.points}</span>
            </div>
        `;
    });
};

const loadScoreboardes = () => {
    const savedScoreboardes = localStorage.getItem('scoreboardes');
    if (savedScoreboardes) {
        scoreboardes = JSON.parse(savedScoreboardes);
        displayScoreboardes();
    }
};

const handleGameOver = () => {
    gameOverMessage.innerHTML = `<strong>¡Juego terminado!</strong><br>Obtuviste ${points} puntos.<br>Introduce tu nombre para el marcador:`;
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
        updateScoreboardes(playerName, points);
        gameOverModal.style.display = 'none';
        location.reload(); // Reload the page or reset the game as needed
    } else {
        alert("Por favor, introduzca su nombre.");
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
            wonMessage.innerHTML = `<br><strong>¡Guau! ¡Choca esos cinco!<br>¡Están TODOS bien!</strong><br><br>Las palabras fueron:${associatedWordsMessage}<br>Te quedan ${maxLives} vidas <br>¡Sigue adelante!<br> `;
            pointsDisplay.innerText = `Puntos ${points}`;
            wonModal.style.display = 'block';
        }

    } else {
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
            lostMessage.innerHTML = `<strong>¡Oh, no!<br>Te quedaste sin conjeturas</strong><br><br>Te quedan ${maxLives} vidas. <br><br> Las palabras fueron:<br>${associatedWordsMessage} <br>`;
            continueButton.innerText = `Lean ar aghaidh le ${maxLives} shaol fágtha`; // Set button text
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
        'áéíóúñ¡'
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
    loadScoreboardes();

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

document.getElementById('open-mov-image').addEventListener('click', () => {
    window.open('indexmov.html', '_blank'); // Opens the new page in a new tab
});

document.getElementById('infoButtonflip').addEventListener('mouseover', function () {

