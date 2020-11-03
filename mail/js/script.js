// 1. Chiedo all'utente la mail

var mailUtente = prompt("Benvenuto! Inserisci la tua mail");

// 2. Confronto il dato con l'array delle mail

var listaMail = ["bea.giuggi@gmail.com", "a.bianchi@gmail.com", "filippo.presti@libero.it", "lauracolotto88@gmail.com"];

var mailTrovata = false;

for (var i = 0; i < listaMail.length; i++) {
  if(mailUtente == listaMail[i]){
    mailTrovata = true;
  }
}

if(mailTrovata == true){
  console.log("Accesso consentito");
} else {
  console.log("Accesso negato");
}
