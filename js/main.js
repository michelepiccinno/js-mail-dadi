//CREO UN ARRAY CONTENENTE UN ELENCO DI INDIRIZZI E-MAIL
const arrayMail = ["mario@gmail.com", "luca@gmail.com", "angelo@gmail.com", "grazia@gmail.com"]

//RECUPERO GLI ELEMENTI HTML INPUT E BUTTON
const mailInputElement = document.querySelector("[name='mail']");
const btnInvia = document.querySelector(".invia-dati");

//CREO UN EVENT LISTENER CHE AL CLICK SUL BUTTON ESEGUE IL BLOCCO DI CODICE SOTTO RIPORTATO
btnInvia.addEventListener("click", function () {

  // PRELEVO IL CONTENUTO INSERITO NELL'INPUT E LO ASSEGNO ALLA CONST MAIL
  const mail = mailInputElement.value;

  //IMPOSTO UNA VARIABILE CHE MI INDICA LO STATO DELL'AUTORIZZAZIONE ALL'ACCESSO
  let authorization = false;

  //IMPOSTO UN CICLO PER LEGGERE TUTTI GLI ELEMENTI DELL'ARRAY
  for (i = 0; i < arrayMail.length; i++) {
    switch (mail) {
      case arrayMail[i]:
        console.log('AUTORIZZATO!!!');
        authorization = true;
        //CAMBIO FORZATAMENTE IL VALORE DEL CONTATORE PER USCIRE DAL CICLO
        i = arrayMail.length;
        break;
    }
  }

  //IN BASE ALLO STATO (true-false) DELLA VARIABILE "authorization" INVIO MESSAGGIO DI STATO
  if (authorization == true) {
    document.getElementById("output-msg").innerHTML = "MAIL AUTORIZZATA!!!"
  } else {
    document.getElementById("output-msg").innerHTML = "MAIL NON AUTORIZZATA!!!"
  }
})
