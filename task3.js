#!/usr/bin/env node
const readline = require("readline-sync");

const pizzaPrice = 10;
const toppingPrice = 2;

let numberOfToppings = Number(
  readline.question("How many toppings do you want: "),
);

let totalPrize = pizzaPrice + toppingPrice * numberOfToppings;

console.log(
  `You ordered a pizza with ${numberOfToppings} toppings at $${toppingPrice} each. The total cost is $${String(totalPrize)}`,
);
