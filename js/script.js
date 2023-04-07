// Business Logic

function Order() {
  this.pizzas = {};
  this.currentId = 0;
}

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
}

Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Order.prototype.findPizza = function(id) {
  if (this.pizzas[id] !== undefined) {
    return this.pizzas[id];
  }
  return false;
};

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = price;
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
  this.price = 10 + toppingsPrice + sizePrice;
}


// UI Logic

let order = new Order();
const ul = document.createElement("ul");
const li = document.createElement("li");

function listPizzas(pizzaOrderToDisplay){
  let orderDiv = document.querySelector("div#pizzas-div");
  orderDiv.innerText = null;
  const ul = document.createElement("ul");
  Object.keys(pizzaOrderToDisplay.pizzas).forEach(function(key) {
    const pizza = pizzaOrderToDisplay.findPizza(key);
    const li = document.createElement("li");
    li.append(`Pizza numero ${pizza.id}`);
    li.setAttribute("id", pizza.id);
    ul.append(li);
    console.log(pizza);
  });
  orderDiv.append(ul);
}

function listPrices(priceToDisplay){
  let priceDiv = document.querySelector("div#price-div");
  priceDiv.innerText = null;
  const ul = document.createElement("ul");
  Object.keys(priceToDisplay.pizzas).forEach(function(key) {
    const pizza = priceToDisplay.findPizza(key);
    const li = document.createElement("li");
    li.append(`Pizza numero ${pizza.id}`);
    li.setAttribute("id", pizza.id);
    ul.append(li);
    console.log(pizza);
  });
  priceDiv.append(ul);
}

// const totalPrice = 0;
// Object.keys(totalPrice.pizzas).forEach(function(key) {
//   totalPrice += findPizza(key);
//   price.innerText = totalPrice
// });

function handlePizza(event) {
  event.preventDefault();
  var toppingsArray = [];
  const toppingsSelection = document.querySelectorAll('input[type=checkbox]:checked');
  for (var i = 0; i < toppingsSelection.length; i++) {
    toppingsArray.push(toppingsSelection[i].value)
  };

  const sizeSelection = document.querySelector("select#size").value;
  const userPizza = new Pizza(toppingsArray, sizeSelection);
  const pizzaCost = userPizza.cost();
  const price = document.getElementById("price");

 

  if (toppingsArray.indexOf("pineapple") === -1) {
    order.addPizza(userPizza);
    price.innerText = `$ ${userPizza.price} for your ${userPizza.size} pie with ${userPizza.toppings.join(" & ")} toppings. Yum!`;
  } else {
    price.innerText = "Sorry, pineapple doesn't belong on pizza."
  }
  listPizzas(order);
}

window.addEventListener("load", function() {
  document.getElementById("pizza-selection").addEventListener("submit", handlePizza);
  document.querySelector("div#pizzas-div").addEventListener("click", displayPizzaDetails);
});
