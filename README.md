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