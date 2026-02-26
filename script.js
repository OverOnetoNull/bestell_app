// Arrays für die Gerichte direkt aus der Datenbank
let arrPizza = gerichteListe.Pizzas;
let arrNudeln = gerichteListe.Nudeln;
let arrVegi = gerichteListe.VegitarischeGerichte;

let init = function () {
  console.log("init Welt");

  renderPizza();
  renderNudeln();
  renderVegi();
  renderEinkaufswagen();
  renderBestellSumme();

  // cart related renderings happen when user orders something
};
