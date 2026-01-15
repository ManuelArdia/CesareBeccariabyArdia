function mostraMessaggio() {
    alert("Cesare Beccaria è considerato uno dei padri del diritto penale moderno.");
}

/* CITAZIONI CHE CAMBIANO */
const citazioni = [
    "È meglio prevenire i delitti che punirli.",
    "Ogni pena che non deriva dall’assoluta necessità è tirannica.",
    "La certezza della pena è più efficace della sua severità.",
    "La giustizia deve essere guidata dalla ragione."
];

let indice = 0;
const elementoCitazione = document.getElementById("citazione");

setInterval(() => {
    indice = (indice + 1) % citazioni.length;
    elementoCitazione.textContent = "“" + citazioni[indice] + "”";
}, 5000);

function mostraIlluminismo() {
    alert(
        "L’Illuminismo ha posto le basi dei moderni diritti civili, " +
        "della democrazia e della giustizia moderna."
    );
}

function curiositaBeccaria() {
    alert(
        "Curiosità: Cesare Beccaria scrisse 'Dei delitti e delle pene' in soli 3 mesi, " +
        "e l'opera ebbe un enorme impatto in tutta Europa!"
    );
}

function curiositaOpere() {
    alert(
        "Curiosità: L’opera di Beccaria fu tradotta in molte lingue subito dopo la pubblicazione " +
        "e influenzò riforme legislative in tutta Europa!"
    );
}

function curiositaOggi() {
    alert(
        "Curiosità: I principi di Beccaria sono ancora citati nelle costituzioni moderne " +
        "e nella Dichiarazione Universale dei Diritti Umani!"
    );
}

function curiositaPensiero() {
    alert(
        "Curiosità: Le idee di Beccaria furono discusse nei salotti illuministi di tutta Europa, " +
        "influenzando persino legislatori e re illuminati come Giuseppe II d'Austria!"
    );
}





