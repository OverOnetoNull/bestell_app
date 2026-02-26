// hier wollen wir die Funktion renderPizza() ausführen,
// damit die Seite auch etwas anzeigt, wenn sie geladen wird
// wenn wir die Funktion renderPizza() aufrufen, dann soll sie die
// Pizza aus dem Array in der HTML-Seite anzeigen

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

// hier soll die Funktion renderBestellen() die bestellte
//  Pizza oder Nudel mit dem Preis anzeigen, damit wir
//  wissen was wir bestellt haben und wie viel es kostet;
// beachte: die Funktion renderBestellen() soll die bestellte
// Pizza oder Nudel mit dem Preis anzeigen, damit wir wissen
// was wir bestellt haben und wie viel es kostet

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
// hier soll die Funktion renderBestellen()
// die bestellte Pizza oder Nudel mit dem Preis
// anzeigen, damit wir wissen was wir bestellt
// haben und wie viel es kostet; beachte: die Funktion
//  renderBestellen() soll die bestellte Pizza oder
// Nudel mit dem Preis anzeigen, damit wir wissen
// was wir bestellt haben und wie viel es kostet
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

// renderBestellen function shows selected item in the bestellung div
let renderBestellen = function (index, gericht) {
  let bestellung = "";
  if (gericht === "Pizza") {
    bestellung = arrPizza[index];
  } else if (gericht === "Nudeln") {
    bestellung = arrNudeln[index];
  } else if (gericht === "Vegi") {
    bestellung = arrVegi[index];
  }

  document.getElementById("bestellung").innerHTML =
    `<p>Du hast insgesamt ${bestellung.name} für ${bestellung.preis}€ bestellt.</p>`;
};

let einkaufswagen = function () {
  let htmlString = "";
  for (let i = 0; i < arrVegi.length; i++) {
    htmlString += `<div class="gericht">
          <h2>${arrVegi[i].name}</h2>
          <p>${arrVegi[i].beschreibung}</p>
          <p>${arrVegi[i].preis}€</p>
          <button onclick="renderBestellen(${i}, 'Vegi')">Bestellen</button>
          </div>`;
  }
  document.getElementById("pizzaContainer").innerHTML = htmlString;
  document.getElementById("nudelnContainer").innerHTML = htmlString;
  document.getElementById("vegiContainer").innerHTML = htmlString;
  document.getElementById("einkaufswagenContainer").innerHTML = htmlString;
};
