// calculate total price of all the fruits after discount
var items = [
  { name: "apple", type: "fruit", full_price: 2, discount: 0 },
  { name: "potato", type: "vegie", full_price: 5, discount: 0 },
  { name: "banana", type: "fruit", full_price: 4, discount: 1 },
  { name: "orange", type: "fruit", full_price: 3, discount: 2 },
  { name: "brocoli", type: "vegie", full_price: 2, discount: 2 },
];

const price = (arrInput) => {
  var total = 0;
  arrInput.forEach((fruit) => {
    total += fruit.full_price - fruit.discount;
  });
  return total;
};

const price2 = (arrInput) => {
  var total = arrInput.reduce(
    (acc, current) => acc + (current.full_price - current.discount),
    0
  );
  return total;
};

console.log(price(items));
console.log(price2(items));
