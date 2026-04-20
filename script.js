let arrPizza = gerichteListe.Pizzas;
let arrPasta = gerichteListe.Pasta;
let arrVegetarische = gerichteListe.Vegetarische_Gerichte;
let arrEinkaufswagen = [];

function init() {
  renderPizza();
  renderPasta();
  renderVegetarische();
  renderEinkaufswagen();
  renderBestellSumme();
}
