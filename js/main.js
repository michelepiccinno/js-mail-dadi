//CREO UN ARRAY CONTENENTE UN ELENCO DI INDIRIZZI E-MAIL
const arrayMail = ["mario@google.it", "luca@google.it", "davide@google.it", "grazia@google.it"]

//RECUPERO GLI ELEMENTI HTML INPUT E BUTTON
const mailInputElement = document.querySelector("[name='mail']");
const btnInvia = document.querySelector(".invia-dati");

//CREO UN EVENT LISTENER CHE AL CLICK SUL BUTTON ESEGUE IL BLOCCO DI CODICE SOTTO RIPORTATO
btnInvia.addEventListener("click", function () {

  // PRELEVO IL CONTENUTO INSERITO NELL'INPUT E LO ASSEGNO ALLA CONST MAIL
  const mail = mailInputElement.value;

  //IMPOSTO UN CICLO PER LEGGERE TUTTI GLI ELEMENTI DELL'ARRAY
  for (let i = 0; i < arrayMail.length; i++) {
    switch (mail) {
      case arrayMail[i]:
        console.log("la mail " + arrayMail[i] + " è autorizzata all'accesso");
        break;
    }
  }
})

