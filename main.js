// document.writeln("Hello JS World");




// Dichiaro (con let) una variabile, senza assegnare valore 
let miaStringa;
// Assegno il valore a una variabile già esistente (senza let)
miaStringa = 'Ciao';
// utilizzo/richiamo (senza let)
alert(miaStringa);




//Creo una variabile e la ri-assegno più volte
let variabileCheVaria = "Ciao";
variabileCheVaria = "NuovoValore";
variabileCheVaria = "Benvenuto";
alert(variabileCheVaria); //stampo: benvenuto




//Scrivo del testo nel DOM della pagina
document.getElementById("titolo").innerHTML = "Hello External JS World"




//Eseguo una moltiplicazione
const a = 21; 
const b = 2;
const risultato = a	* b;

//Riscrivo il testo nell'H1, sostituendolo con il risultato
// document.getElementById("titolo").innerHTML = risultato;

//Riscrivo il testo nell'H1, sostituendolo con il risultato e un messaggino (uso backtick)
document.getElementById("titolo").innerHTML = `Il risultato di ${a}x${b} è: ${risultato}`;



//Nota le differenze
miaStringa = 'Una stringa può contenere anche degli \'apici\' o "virgolette" al suo interno.';
miaStringa = "Una stringa può contenere anche degli 'apici' o \"virgolette\" al suo interno.";



/*
Esempio di hoisting
alert(x); //x=undefined, ma nessun errore
var x = "ciao";
alert(x);
*/

/*
Naming conventions:
camelCaseConAltreParole
PascalCaseConAltreParole
snake_case_con_altre_parole
kebab-case-con-altre-parole (ok per CSS ma non per JS)
*/