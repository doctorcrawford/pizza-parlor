# Pizza Parlor

#### By Kyle Crawford

#### A website for a pizza company where a user can choose one or more individual toppings, a size to order a pizza, and see the final cost.

## Technologies Used

* HTML
* CSS
* Javascript
* Git

## Description

This website allows users to choose from a variety of toppings to add to their pizza as well as choose their pie size. Once selected, it will show them the total price. It also allows to pick multiple pizzas.

## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to the top level of the directory.
* Open index.html in your browser.

## Known Bugs

* None to my knowledge.

## License

[MIT](https://opensource.org/license/mit/)

Copyright (c) 2023 Kyle Crawford

////////////////

TDD

Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["pepperoni", "pineapple"], "large");
Expected Output: Pizza { toppings: ["pepperoni", "pineapple"], size: "large" }


////

Describe: Cost()

Test: "It should return a base price for any pizza"
Code: myPizza.cost();
Expected Output: 10

Test: "It should add the price of the pizza by 1 for each topping"
Code: myPizza.cost();
Expected Output: 12

Test: "It should increase the price of the pizza for bigger pies"
Code: myPizza.cost();
Expected Output: 16


////

Describe: Order()

Test: "It should create an instance of an Order object type"
Code: let order = new Order();
Expected Output: Order {pizzas: {…}}


////

Describe: AddPizza()

Test: "It should add a pizza to an order"
Code: order.addPizza(userPizza);
Expected Output: Order {pizzas: {1: Pizza}}


////

Describe: assignID()

Test: "It should add a unique ID to each pizza added to the order"
Code: order.addPizza(userPizza);
Expected Output:Order {pizzas: {1: Pizza}, currentId: 1}


////

Describe: findPizza()

Test: "It should find the pizza added to the order by unique ID"
Code: order.findPizza(1);
Expected Output:Order Pizza {toppings: Array(3), size: "large", id: 1}