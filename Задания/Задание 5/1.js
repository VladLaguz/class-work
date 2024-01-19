const friends = [
  { name: "alex", pizzas: ["cheese", "pepperoni"] },
  { name: "mike", pizzas: ["salami", "pepperoni"] },
  { name: "stas", pizzas: ["meat"] },
  { name: "anna", pizzas: ["fish"] },
];

const pizzas = friends.reduce((accum, current) => {
  return [...accum, ...current.pizzas];
}, []);

console.log(pizzas);
