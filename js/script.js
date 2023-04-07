// Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.cost = function() {
  let toppingsPrice = this.toppings.length;
  return 10 + toppingsPrice;
}


//////
const myPizza = new Pizza(["pepperoni", "pineapple"], "large");
//////