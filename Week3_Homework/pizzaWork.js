const pizzaToppings = ["Pepperoni", " Sausage", " Bacon", " Chicken"];

function greetCustomer() {
  console.log(
    "Welcome to Pizza Time, our toppings are: Pepperoni, Sausage, Bacon, and Chicken"
  );

  for (let pizza of pizzaToppings) {
    console.log(pizza);
  }
}

function getPizzaOrder(size, crust, ...toppings) {
  console.log(`One ${size} ${crust} crust pizza with ${toppings} coming up!`);
  return [size, crust, ...toppings];
}

function preparePizza([size, crust, toppings]) {
  console.log("...Cooking pizza");
  const pizzaType = {
    size: size,
    crust: crust,
    toppings: toppings
  };
  return pizzaType;
}

let order = preparePizza(getPizzaOrder("small", "thick", pizzaToppings));

function servePizza(pizzaType) {
  console.log(
    `Order up! Here's your ${pizzaType.size} ${pizzaType.crust} crust pizza with ${pizzaType.toppings} Enjoy!`
  );
  return pizzaType;
}

greetCustomer();

getPizzaOrder("small", "thick", pizzaToppings);

servePizza(order);
