//Mail
//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere
// (createvi una piccola lista di email),
//stampa un messaggio appropriato sull’esito del controllo.

const mailList = [ "ale.27@gmail.com","mario.rossi34@gmail.com", "marco.marchesi22@libero.it", "marta.43@virgilio.it", "gianna.giannetti@gmail.com",
                    "franca99@libero.it", "paperella_pazza@paperella.com"
                ]
const mailName = (prompt("inserisci la tua mail"));

//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.includes("Banana", 3);

if (mailList.includes(mailName)) {
    console.log("La tua mail è valida");
}
else {
    console.log("La tua mail non è valida");
}