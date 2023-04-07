// Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.cost = function() {
  let toppingsPrice = this.toppings.length;
  let sizePrice;
  if (this.size === "medium") {
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
  const sizeSelection = document.querySelector("select#size").value;
  const toppingsSelection = document.querySelector("input[name='topping']:checked").value;
  
}

window.addEventListener("load", function() {
  document.getElementById("pizza-selection").addEventListener("submit", handlePizza);
});