let tacoCounter = 0;
let pizzaCount = 0;
let totalValue=0;
const pizzaCountDisplay = document.getElementById("pizzacountHolder");
const tacoCountDisplay = document.getElementById("tacoCountHolder");
const totalDisplay= document.getElementById("displayTotal");


function addTaco() {
    tacoCounter++;
    tacoCountDisplay.textContent = tacoCounter;
    totalValue=(tacoCounter*3.99)+(pizzaCount*12.99);
    totalDisplay.textContent="Total $" + totalValue.toFixed(2);
}

function addPizza() {
    pizzaCount++;
    pizzaCountDisplay.textContent = pizzaCount;
    totalValue=(tacoCounter*3.99)+(pizzaCount*12.99);
    totalDisplay.textContent="Total $" + totalValue.toFixed(2);
}

function removeTaco() {
    if (tacoCounter > 0) {
        tacoCounter--;
        tacoCountDisplay.textContent = tacoCounter;
        totalValue=(tacoCounter*3.99)+(pizzaCount*12.99);
        totalDisplay.textContent="Total $" + totalValue.toFixed(2);
    }
}

function removePizza() {
    if (pizzaCount > 0) {
        pizzaCount--;
        pizzaCountDisplay.textContent = pizzaCount;
        totalValue=(tacoCounter*3.99)+(pizzaCount*12.99);
        totalDisplay.textContent="Total $" + totalValue.toFixed(2);
    }
}

function removeAllPizzas() {
    pizzaCount = 0;
    pizzaCountDisplay.textContent = pizzaCount;
    totalValue=(tacoCounter*3.99)+(pizzaCount*12.99);
    totalDisplay.textContent="Total $" + totalValue.toFixed(2);
}

function removeAllTacos() {
    tacoCounter = 0;
    tacoCountDisplay.textContent = tacoCounter;
    totalValue=(tacoCounter*3.99)+(pizzaCount*12.99);
    totalDisplay.textContent="Total $" + totalValue.toFixed(2);
}
