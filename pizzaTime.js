let pizzaPlace = "Spider-man Pizza Place";

let numberOfToppings = 10;

console.log(pizzaPlace);
console.log(numberOfToppings);

console.log(`Welcome to ${pizzaPlace}. We have ${numberOfToppings} different type of of toppings.`);

if (numberOfToppings <= 10) {
  console.log("Quality, not quantity.");
}
else {
  console.log("A whole lot of pizza.");
}

for (let i = 2; i <= numberOfToppings; i+=2) {
  console.log(i);
}
