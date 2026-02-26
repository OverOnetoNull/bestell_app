let renderBestellen = function (index, gericht) {
  let bestellung = "";
  if (gericht === "Pizza") {
    bestellung = arrPizza[index];
  } else if (gericht === "Nudeln") {
    bestellung = arrNudeln[index];
  }

  document.getElementById("bestellung").innerHTML =
    `<p>Du hast ${bestellung.name} für ${bestellung.preis}€ bestellt.</p>`;
};

function renderPizza() {
  let htmlString = "";
  for (let i = 0; i < arrPizza.length; i++) {
    htmlString += `<div class="gericht">
        <h2>${arrPizza[i].name}</h2>
        <p>${arrPizza[i].beschreibung}</p>
        <p>${arrPizza[i].preis}€</p>
        <button onclick="renderBestellen(${i}, 'Pizza')">Bestellen</button>
        </div>`;
  }
  document.getElementById("pizzaContainer").innerHTML = htmlString;
}

let renderNudeln = function () {
  let htmlString = "";
  for (let i = 0; i < arrNudeln.length; i++) {
    htmlString += `<div class="gericht">
          <h2>${arrNudeln[i].name}</h2>
          <p>${arrNudeln[i].beschreibung}</p>
          <p>${arrNudeln[i].preis}€</p>
          <button onclick="renderBestellen(${i}, 'Nudeln')">Bestellen</button>
          </div>`;
  }
  document.getElementById("nudelnContainer").innerHTML = htmlString;
};

let renderVegi = function () {
  let htmlString = "";
  for (let i = 0; i < arrVegi.length; i++) {
    htmlString += `<div class="gericht">
          <h2>${arrVegi[i].name}</h2>
          <p>${arrVegi[i].beschreibung}</p>
          <p>${arrVegi[i].preis}€</p>
          <button onclick="renderBestellen(${i}, 'Vegi')">Bestellen</button>
          </div>`;
  }
  document.getElementById("vegiContainer").innerHTML = htmlString;
};
