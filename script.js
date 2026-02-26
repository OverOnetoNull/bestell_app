let init = function () {
  console.log("Halttttlo Welt");

  renderPizza();
  renderNudeln();
  renderVegi();

  return;
};

// im Html soll die bestellte Pizza oder Nudel mit dem
// Preis angezeigt werden, damit wir wissen was wir bestellt
//  haben und wie viel es kostet; beachte: die Funktion
// renderBestellen() soll die bestellte Pizza oder Nudel
// mit dem Preis anzeigen, damit wir wissen was wir
// bestellt haben und wie viel es kostet

let myReturnPizza = function () {
  console.log(gerichteListe.Pizzas);
  return gerichteListe.Pizzas;
};

let myReturnNudeln = function () {
  console.log(gerichteListe.Nudeln);
  return gerichteListe.Nudeln;
};

let myReturnVegi = function () {
  console.log(gerichteListe.VegitarischeGerichte);
  return gerichteListe.VegitarischeGerichte;
};

// hier wird das array aus db.js in die variable arrPizza gespeichert, damit sie auch ausgeführt wird
let arrPizza = myReturnPizza();
let arrNudeln = myReturnNudeln();
let arrVegi = myReturnVegi();

// localStorage.setItem("gerichteListe", JSON.stringify(gerichteListe));

// wenn wir auf den Button "Bestellen" klicken, dann soll die
// Bestellung abgesendet werden

// wir wollen die Funktion init() ausführen,
// damit die Seite auch etwas anzeigt, wenn sie
// geladen wird
// wenn wir die Funktion renderPizza() aufrufen,
// dann soll sie die  Pizza aus dem Array in der
// HTML-Seite anzeigen

// renderNudeln() soll die Nudeln aus dem Array
//  in der HTML-Seite anzeigen

// wir zeigen durch das json an welche Gerichte es
//  gibt, damit wir sie später in der Seite
// anzeigen können

// wenn wir die Funktion renderPizza() aufrufen,
// dann soll sie die  Pizza aus dem Array in der
// HTML-Seite anzeigen

// wenn wir auf die Funktion renderNudeln() aufrufen,
// dann soll sie die  Nudeln aus dem Array in der
// HTML-Seite anzeigen

// wenn wir die Funktion renderBestellen()  aufrufen, dann soll
// sie in einen einkaufskorb legen, damit wir sie später
// bestellen können die bestellung soll in einem Array oder local storage
//  gespeichert werden, damit wir sie später abrufen können
//  und wissen was wir bestellt haben

//  im einkaufswagen soll dann die bestellte Pizza oder Nudel
//  mit dem Preis angezeigt werden, damit wir wissen was wir
// bestellt haben und wie viel es kostet
// wenn wir auf den Button "Bestellen" klicken,
// dann soll die Bestellung abgesendet werden

// wir wollen, dass die summe der bestellten Gerichte
// angezeigt wird, die wir bestellt haben, damit wir
// wissen wie viel gerichte es sind

// und die summe des preises damit wir wissen wie viel
//  wir bezahlen müssen

// wir brauchen einen restor button, damit wir die
// bestellung zurücksetzen können, wenn wir uns
// umentscheiden oder einen fehler gemacht haben,
// damit wir die bestellung löschen können und von
// vorne anfangen können

// und wir müssen die anzahal der bstwelleten gerichte
// mit plus undminus buttons erhöhen oder verringern
// können, was sich dynamisch auf die summe der bestellten
// gerichte und den preis auswirkt, damit wir die bestellung
// anpassen können, wenn wir uns umentscheiden oder einen
// fehler gemacht haben

//
//
