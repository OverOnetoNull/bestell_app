// shopping cart holds ordered items
let cart = [];

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

// add item to cart and update displays
let renderBestellen = function (index, gericht) {
  let bestellung;

  if (gericht === "Pizza") {
    bestellung = arrPizza[index];
  } else if (gericht === "Nudeln") {
    bestellung = arrNudeln[index];
  } else if (gericht === "Vegi") {
    bestellung = arrVegi[index];
  }

  if (!bestellung) return;

  // if same item already in cart, increase quantity
  const existing = cart.find((item) => item.name === bestellung.name);
  if (existing) {
    existing.menge = (existing.menge || 1) + 1;
  } else {
    cart.push({ ...bestellung, menge: 1 });
  }

  document.getElementById("bestellung").innerHTML =
    `<p>Du hast ${bestellung.name} für ${bestellung.preis}€ bestellt.</p>`;
  renderEinkaufswagen();
  renderBestellSumme();
};

// const listStorage = (list, key) => {
//   localStorage.setItem(key, JSON.stringify(list));
// };

// const getStorage = (key) => {
//   const data = localStorage.getItem(key);
//   return data ? JSON.parse(data) : null;
// };

let renderEinkaufswagen = function () {
  let htmlString = "";
  cart.forEach((item, idx) => {
    const qty = item.menge || 1;
    const cost = (item.preis * qty).toFixed(2);
    htmlString += `<div class="gericht">
          <h2>${item.name}</h2>
          <p>Einzelpreis: ${item.preis}€</p>
          <p>Menge: ${qty}</p>
          
          <button onclick="renderMengePlus(${idx})">+</button>
          <button onclick="renderMengeMinus(${idx})">-</button>
          <button onclick="renderRemoveItem(${idx})">Entfernen</button>



          <p>Zwischensumme: ${cost}€</p>


          </div>`;

    return htmlString;
  });
  document.getElementById("einkaufswagenContainer").innerHTML = htmlString;
};

let renderBestellSumme = function () {
  const total = cart.reduce(
    (sum, item) => sum + item.preis * (item.menge || 1),
    0,
  );
  document.getElementById("bestellSumme").innerHTML =
    `<p>Du hast insgesamt ${total.toFixed(2)}€ bestellt.</p>`;
};

let clearCart = function () {
  cart = [];
  document.getElementById("bestellung").innerHTML = "";
  renderEinkaufswagen();
  renderBestellSumme();
};

let renderMengePlus = function (index) {
  if (cart[index]) {
    cart[index].menge = (cart[index].menge || 1) + 1;
    renderEinkaufswagen();
    renderBestellSumme();
  }
};

let renderMengeMinus = function (index) {
  if (cart[index]) {
    cart[index].menge = (cart[index].menge || 1) - 1;
    if (cart[index].menge <= 0) {
      cart.splice(index, 1); // Remove item if quantity is zero or less
    }
    renderEinkaufswagen();
    renderBestellSumme();
  }
};

let renderRemoveItem = function (index) {
  if (cart[index]) {
    cart.splice(index, 1);
    renderEinkaufswagen();
    renderBestellSumme();
  } else {
    alert("Item not found in cart.");
  }
};
