// Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.cost = function() {
  let toppingsPrice = this.toppings.length;
  let sizePrice;
  if (this.size === "small") {
    sizePrice = 0;
  } else if (this.size === "medium") {
    sizePrice = 2;
  } else if (this.size === "large") {
    sizePrice = 4;
  } else if (this.size === "x-large") {
    sizePrice = 6;
  }
  return 10 + toppingsPrice + sizePrice;
}


//////
const myPizza = new Pizza(["pepperoni", "pineapple"], "large");
//////


// UI Logic

function handlePizza(event) {
  event.preventDefault();
  var toppingsArray = [];
  const toppingsSelection = document.querySelectorAll('input[type=checkbox]:checked');
  for (var i = 0; i < toppingsSelection.length; i++) {
    toppingsArray.push(toppingsSelection[i].value)
  };

  const sizeSelection = document.querySelector("select#size").value;
  const userPizza = new Pizza(toppingsArray, sizeSelection);
  console.log(userPizza);
  const pizzaCost = userPizza.cost();
  const price = document.getElementById("price");
  price.innerText = `$ ${pizzaCost} for your ${userPizza.size} pie with ${userPizza.toppings.join(" & ")} toppings.`;
}

window.addEventListener("load", function() {
  document.getElementById("pizza-selection").addEventListener("submit", handlePizza);
});
