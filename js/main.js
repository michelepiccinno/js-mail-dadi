/*******PARTE 1 ARRAY MAIL************/

//CREO UN ARRAY CONTENENTE UN ELENCO DI INDIRIZZI E-MAIL
const arrayMail = ["mario@gmail.com", "luca@gmail.com", "angelo@gmail.com", "grazia@gmail.com"]

//RECUPERO GLI ELEMENTI HTML INPUT E BUTTON
const mailInputElement = document.querySelector("[name='mail']");
const btnInvia = document.querySelector(".invia-dati-mail");

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
        authorization = true;
      //CAMBIO FORZATAMENTE IL VALORE DEL CONTATORE PER USCIRE DAL CICLO
      //i = arrayMail.length;
    }
    //ALTERNATIVA PROBABILMENTE PIU' GIUSTA PER USCIRE DAL CICLO
    //FUORI DALLO SWITCH MA DENTRO AL CICLO IMPOSTO:
    if (authorization == true) {
      break;
    }
  }

  //IN BASE ALLO STATO (true-false) DELLA VARIABILE "authorization" INVIO MESSAGGIO DI STATO
  if (authorization == true) {
    console.log('AUTORIZZATO!!!');
    //INIETTO UNA STRINGA NELL'ELEMENTO
    document.getElementById("output-msg").innerHTML = "MAIL AUTORIZZATA!!!"
  } else {
    console.log('NON AUTORIZZATO!!!');
    //INIETTO UNA STRINGA NELL'ELEMENTO
    document.getElementById("output-msg").innerHTML = "MAIL NON AUTORIZZATA!!!"
  }
})


/*QUESTO ERA UN TEST PER LA CREAZIONE DEL H4 TRAMITE JS
  //RICHIAMO IL CONTAINER div class .box-msg-status
  const boxMsgStatus = document.querySelector(".box-msg-status");
  //CREO UN ELEMENTO VIRTUALE H4 CHE CONTERRA' IL MESSAGGIO IN OUTPUT
  const boxValue = document.createElement("h4");
  //INSERISCO LA CLASSE output-msg NEL boxValue
  boxValue.classList.add("output-msg");
  //INIETTO L'ELEMENTO boxValue NEL CONTENITORE PADRE boxMsgStatus
  boxMsgStatus.append(boxValue);
  */



/*******PARTE 2 GIOCO DADI************/
//RECUPERO L'ELEMENTO BUTTON GAME
const btnInviaGame = document.querySelector(".invia-dati-game");

//CREO UN EVENT LISTENER CHE AL CLICK SUL BUTTON ESEGUE IL BLOCCO DI CODICE SOTTO RIPORTATO
btnInviaGame.addEventListener("click", function () {

  //CREO 2 VARIABILI E ASSEGNO UN NUMERO CASUALE DA 1 A 6
  const dadoA = Math.floor(Math.random() * (7 - 1) + 1);
  console.log('dadoA: ' + dadoA);
  const dadoB = Math.floor(Math.random() * (7 - 1) + 1);
  console.log('dadoB: ' + dadoA);

  //RECUPERO GLI ELEMENTI NEI QUALI INIETTEREMO I VALORI DEI DADI GENERATI SOPRA
  document.getElementById("A-dice-value").innerHTML = dadoA;
  document.getElementById("B-dice-value").innerHTML = dadoB;
  console.log('A' + dadoA);
  console.log('B' + dadoB);

  //VERIFICO CHI E' IL VINCITORE 
  if (dadoA === dadoB) {
    console.log('PAREGGIO');
    document.getElementById("msg-game-result").innerHTML = "PAREGGIO !"
  } else if (dadoA > dadoB) {
    console.log('IL COMPUTER HA VINTO !');
    document.getElementById("msg-game-result").innerHTML = "IL COMPUTER HA VINTO !"
  } else {
    console.log('IL IL GIOCATORE HA VINTO !');
    document.getElementById("msg-game-result").innerHTML = "IL GIOCATORE HA VINTO !"
  }
})