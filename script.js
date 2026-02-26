// Arrays für die Gerichte direkt aus der Datenbank
let arrPizza = gerichteListe.Pizzas;
let arrNudeln = gerichteListe.Nudeln;
let arrVegi = gerichteListe.VegitarischeGerichte;

let init = function () {
  console.log("Halttttlo Welt");

  renderPizza();
  renderNudeln();
  renderVegi();
};
