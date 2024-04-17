const firstName = prompt("Inserisci il tuo nome");
// alert( "Il tuo nome è: " + firstName );
console.log( `Il tuo nome è: ${firstName}` );

const surname = prompt("Inserisci il tuo cognome");
console.log( `Il tuo cognome è: ${surname}` );

const color = prompt("Inserisci il tuo colore preferito");
console.log( `Il tuo colore preferito è: ${color}` );

// let newPassword = "" + firstName + surname + color + "#23";
const newPassword = `${firstName}${surname}${color}#23`;
console.log( `La nuova password sarà: ${newPassword}` );

document.getElementById("password").innerHTML = newPassword;