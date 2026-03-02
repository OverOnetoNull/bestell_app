let cart = [];

function renderPizza() {
  let htmlString = "";
  for (let i = 0; i < (arrPizza ? arrPizza.length : 0); i++) {
    htmlString += `<div class="gericht">
        <img src="${arrPizza[i].imgDBsrc}" class="imgDBsrcClass" alt="${arrPizza[i].name}">
        <h2>${arrPizza[i].name}</h2>
        <p>${arrPizza[i].beschreibung}</p>
        <p>${arrPizza[i].preis.toFixed(2)}€</p>
        <button onclick="renderBestellen(${i}, 'Pizza')">Bestellen</button>
        </div>`;
  }

  const container = document.getElementById("pizzaContainer");
  if (!container) {
    console.error("#pizzaContainer not found in DOM");
  } else {
    container.innerHTML = htmlString;
  }
}

let renderPasta = function () {
  let htmlString = "";
  for (let i = 0; i < (arrPasta ? arrPasta.length : 0); i++) {
    htmlString += `<div class="gericht">
          <img src="${arrPasta[i].imgDBsrc}" class="imgDBsrcClass" alt="${arrPasta[i].name}">
          <h2>${arrPasta[i].name}</h2>
          <p>${arrPasta[i].beschreibung}</p>
          <p>${arrPasta[i].preis.toFixed(2)}€</p>
          <button onclick="renderBestellen(${i}, 'Pasta')">Bestellen</button>
          </div>`;
  }

  const container = document.getElementById("pastaContainer");
  if (!container) console.error("#pastaContainer missing");
  else container.innerHTML = htmlString;
};

let renderVegetarische = function () {
  let htmlString = "";
  for (let i = 0; i < (arrVegetarische ? arrVegetarische.length : 0); i++) {
    htmlString += `<div class="gericht">
          <img src="${arrVegetarische[i].imgDBsrc}" class="imgDBsrcClass" alt="${arrVegetarische[i].name}">
          <h2>${arrVegetarische[i].name}</h2>
          <p>${arrVegetarische[i].beschreibung}</p>
          <p>${arrVegetarische[i].preis.toFixed(2)}€</p>
          <button onclick="renderBestellen(${i}, 'Vegetarische')">Bestellen</button>
          </div>`;
  }
  const container = document.getElementById("vegiContainer");
  if (!container) console.error("#vegiContainer missing");
  else container.innerHTML = htmlString;
};
let renderBestellen = function (index, gericht) {
  const daten = {
    Pizza: arrPizza,
    Pasta: arrPasta,
    Vegetarische: arrVegetarische,
  };

  const bestellung = daten[gericht]?.[index];
  if (!bestellung) return;

  const existing = cart.find((item) => item.name === bestellung.name);
  existing
    ? (existing.menge = (existing.menge || 1) + 1)
    : cart.push({ ...bestellung, menge: 1 });

  document.getElementById("bestellung").innerHTML =
    `<p>${bestellung.name} für ${bestellung.preis}€ hinzugefügt</p>`;

  renderEinkaufswagen();
  renderBestellSumme();
  renderEndsumme();
};

let renderEinkaufswagen = function () {
  let htmlString = "";
  cart.forEach((item, index) => {
    const qty = item.menge || 1;
    const zwischensumme = (item.preis * qty).toFixed(2);
    htmlString += `<div class="gerichtEinkaufswagen">
          <p>${item.name}</p> <p>Einzelpreis: ${item.preis}€</p>
          <p>Menge: ${qty}</p>
          <button onclick="renderMengePlus(${index})">+</button>
          <button onclick="renderMengeMinus(${index})">-</button>
          <button onclick="renderRemoveItem(${index})">Entfernen</button>
          <p>Zwischensumme: ${zwischensumme}€</p> </div>`;
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

  editedsum = total;
  newVersion();
  renderEndsumme();
};

let clearCart = function () {
  cart = [];
  document.getElementById("bestellung").innerHTML = "";
  renderEinkaufswagen();
  renderBestellSumme();
  renderEndsumme();
};

let renderMengePlus = function (index) {
  if (cart[index]) {
    cart[index].menge = (cart[index].menge || 1) + 1;
    renderEinkaufswagen();
    renderBestellSumme();
    renderEndsumme();
  }
};

let renderMengeMinus = function (index) {
  if (cart[index]) {
    cart[index].menge = (cart[index].menge || 1) - 1;
    if (cart[index].menge <= 0) {
      cart.splice(index, 1);
    }
    renderEinkaufswagen();
    renderBestellSumme();
    renderEndsumme();
  }
};

let renderRemoveItem = function (index) {
  if (cart[index]) {
    cart.splice(index, 1);
    renderEinkaufswagen();
    renderBestellSumme();
    renderEndsumme();
  } else {
    alert("Item not found in cart.");
  }
};

let renderEndsumme = function () {
  const total = cart.reduce(
    (sum, item) => sum + Number(item.preis) * (item.menge || 1),
    0,
  );

  const deliveryFee = Status && total < 20 ? 6 : 0;
};

let Status = true;
let Fahrtkosten = 6;
let editedsum = 0;

function newVersion() {
  if (editedsum >= 20) {
    Fahrtkosten = 0;
  } else {
    Fahrtkosten = Status ? 6 : 0;
  }

  const Endsumme = editedsum + Fahrtkosten;

  const meinText = `
    <p>Zwischensumme: ${editedsum.toFixed(2)} €</p>
    <p>Fahrtkosten: ${Fahrtkosten.toFixed(2)} €</p>
    <p><b>Endsumme: ${Endsumme.toFixed(2)} €</b></p>
    <button onclick="toggleStatus()">
      ${Status ? "Zum Abholen wechseln" : "Liefern lassen"}
    </button>
  `;

  document.getElementById("title").innerHTML = meinText;
}

function toggleStatus() {
  Status = !Status;
  newVersion();
  renderEndsumme();
}

function meinFalseButton() {
  console.log("Status = false");
  Status = false;
  newVersion();
}

function meinTrueButton() {
  console.log("Status = true");
  Status = true;
  newVersion();
}
