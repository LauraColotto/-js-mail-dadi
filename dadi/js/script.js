// 1. Chiedo all'utente d'inserire un numero da 1 a 6
var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 6"));

// 2. Genero un numero casuale da 1 a 6

var numeroPc = Math.round(Math.random()*5+1);

if (numeroUtente < 7 && numeroUtente > 0)
{
  // Confronto i due numeri e decreto il vincitore o pareggio
  //
  if(numeroUtente > numeroPc)
  {
    alert("Complimenti, hai vinto!!");
  }
  else if (numeroUtente < numeroPc)
  {
    alert("Uff, hai perso =_=");
  }
  else 
  {
    alert("Pareggio!!");
  }

} else {
  alert("Non hai inserito il numero corretto, riprova!");
}
