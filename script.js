let init = function () {
  console.log("Halttttlo Welt");

  renderPizza();
  renderNudeln();

  return;
};

let myReturn = function () {
  console.log(arrPizza);
  return gerichteListe.Pizzas;
};

let myReturnNudeln = function () {
  console.log(arrNudeln);
  return gerichteListe.Nudeln;
};

// hier wird das array aus db.js in die variable arrPizza gespeichert, damit sie auch ausgeführt wird
let arrPizza = myReturn();
let arrNudeln = myReturnNudeln();

function renderPizza() {
  document.getElementById("pizzaContainer").innerHTML = htmlString;

  let htmlString = "";
  for (let i = 0; i < arrPizza.length; i++) {
    htmlString += `<div class="gericht">
        <h2>${arrPizza[i].name}</h2>
        <p>${arrPizza[i].beschreibung}</p>
        <p>${arrPizza[i].preis}€</p>
        </div>`;
  }
}

let renderNudeln = function () {
  document.getElementById("nudelnContainer").innerHTML = htmlString;
  let htmlString = "";
  for (let i = 0; i < gerichteListe.Nudeln.length; i++) {
    htmlString += `<div class="gericht">
          <h2>${gerichteListe.Nudeln[i].name}</h2>
          <p>${gerichteListe.Nudeln[i].beschreibung}</p>
          <p>${gerichteListe.Nudeln[i].preis}€</p>
          </div>`;
  }
};

localStorage.setItem("gerichteListe", JSON.stringify(gerichteListe));
