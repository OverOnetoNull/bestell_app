// Arrays für die Gerichte direkt aus der Datenbank
let arrPizza = gerichteListe.Pizzas;
// database was changed to use "Pasta" and "Vegetarische_Gerichte" keys
let arrPasta = gerichteListe.Pasta;
let arrVegetarische = gerichteListe.Vegetarische_Gerichte;
let arrEinkaufswagen = [];

let init = function () {
  console.log("init Welt");

  renderPizza();
  renderPasta();
  renderVegetarische();

  renderEinkaufswagen();
  renderBestellSumme();
  renderLiefersumme();

  // cart related renderings happen when
  // user orders something
};
