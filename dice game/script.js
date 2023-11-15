//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

const userNumber = Math.floor(Math.random() * 6) + 1;
    console.log(userNumber);
const computerNumber = Math.floor(Math.random() *6) +1;
    console.log(computerNumber);
if ( userNumber > computerNumber) {
    console.log("user win");
}
else if ( userNumber == computerNumber) {
    console.log("parity");
}
else {
    console.log("computer win");
}

