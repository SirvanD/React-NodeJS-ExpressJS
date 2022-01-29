const Monkey = require("./Monkies");

var monkey1 = new Monkey("king", "1");
monkey1.eat("apple");
monkey1.eat("banana");
monkey1.eat("tomato");
console.log(monkey1);

adam = new Monkey("Adam", "Spider Monkey");
adam.eat("fruit salad");
adam.eat("banana milkshake");
adam.introduce(); // "Hi my name is Adam. I am a Spider Monkey. I had fruit salad and banana milkshake for brunch"
console.log(adam);
