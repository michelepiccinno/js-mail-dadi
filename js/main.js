/*******PARTE 1 ARRAY MAIL************/

//CREO UN ARRAY CONTENENTE UN ELENCO DI INDIRIZZI E-MAIL
const arrayMail = ["mario@gmail.com", "luca@gmail.com", "angelo@gmail.com", "grazia@gmail.com"];

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
  for (let i = 0; i < arrayMail.length; i++) {
    switch (mail) {
      case arrayMail[i]:
        authorization = true;
      //CAMBIO FORZATAMENTE IL VALORE DEL CONTATORE PER USCIRE DAL CICLO
      //i = arrayMail.length;
    }
    //ALTERNATIVA PROBABILMENTE PIU' CORRETTA PER USCIRE DAL CICLO
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
  console.log('dadoB: ' + dadoB);

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

/********BONUS********/

//RECUPERO GLI ELEMENTI HTML INPUT E BUTTON
const myLancio1InputElement = document.getElementById("my-lancio-dado1");
const myLancio2InputElement = document.getElementById("my-lancio-dado2");
const myLancio3InputElement = document.getElementById("my-lancio-dado3");
const btnInviaDadi = document.querySelector(".invia-dadi-pc");

//-----PARTE GIOCATORE UTENTE------//
//CREO UN BLOCCO DI CODICE CHE VIENE ESEGUITO SOLO QUANDO AVVIENE L'EVENTO CLICK SUL BUTTON SUL QUALE HO AGGIUNTO L'EVENTLISTENER 
btnInviaDadi.addEventListener("click", function () {
  const Lancio1 = myLancio1InputElement.value;
  const Lancio2 = myLancio2InputElement.value;
  const Lancio3 = myLancio3InputElement.value;
  //INSERISCO GLI ELEMENTI RECUPERATI DAI 3 INPUT IN UN ARRAY
  const arrayLanciUtente = [Lancio1, Lancio2, Lancio3];
  //CICLO L'ARRAY PER SOMMARE I VALORI DEI SUOI ELEMENTI
  sommaUser = 0;
  for (let i = 0; i < arrayLanciUtente.length; i++) {
    sommaUser += parseInt(arrayLanciUtente[i]);
  }
  console.log("contenuto dell'array Utente: " + arrayLanciUtente);
  console.log('la somma dei dadi utente è: ' + sommaUser);
  //INIETTO LA SOMMA DEI DADI UTENTE NELL'HTML
document.getElementById("dado-utente-msg").innerHTML = sommaUser;


//--------PARTE GIOCATORE PC------//
//CREO UN ARRAY RANDOM DI 3 ELEMENTI PER IL COMPUTER E SOMMO IL VALORE DEI SUOI ELEMENTI
let arrayPC = [];
let lanciaDado = 0;
let sommaPc = 0;
for (i = 0; i < 3; i++) {
  lanciaDado = Math.floor(Math.random() * (7 - 1) + 1);
  arrayPC.push(lanciaDado);
  sommaPc += lanciaDado;
}
console.log("contenuto dell'array PC: " + arrayPC);
console.log('somma dei 3 dadi del PC: ' + sommaPc);

//INIETTO LA SOMMA DEI DADI PC NELL'HTML
document.getElementById("dado-pc-msg").innerHTML = sommaPc;

//VERIFICO CHI HA VINTO
if (sommaUser < sommaPc) {
  console.log('HA VINTO IL PC !');
  document.getElementById("winner-msg").innerHTML = ('HA VINTO IL PC !');
} else if (sommaUser > sommaPc) {
  console.log('HAI VINTO TU !');
  document.getElementById("winner-msg").innerHTML = ('HAI VINTO TU !');
} else {
  console.log('PAREGGIO !');
  document.getElementById("winner-msg").innerHTML = ('PAREGGIO !');
}
});


