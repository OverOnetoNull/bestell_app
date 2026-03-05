let arrPizza = gerichteListe.Pizzas;
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
};
