// let user = {
//     username: 'epoch',
//     email: 'dt@ga.co',

// }

// let user2 = {
//     username: 'sirvs',
//     email: 'sd@ga.co'
// }

//class is a template/factory/blueprint for creating objects
class User {}

//class name in js and ruby starts with Capital and lower case
class Car {
  constructor(color = "mistyrose") {
    console.log("constrcuting...");

    //special keyword to refer to your future object
    //"this keyword"
    this.numberOfWheels = 4;
    this.color = color;
  }

  //instant method - it's not called function because it belongs to an object hence naming method like in ruby
  drive() {
    console.log("driving...");
  }
}

//instances
let car1 = new Car();
let mycar = new Car();
let brendonsCar = new Car("tomato");
console.log(car1);
console.log(brendonsCar.drive());

//functions that belong to an object

class Say {
  constructor(num) {
    this.num = num;
  }

  isEnglish() {
    let ones = ["zero", "one"];

    ones[this.num];

    return "twenty-two";
  }
}

new Say(22).isEnglish();
console.log("============================");
//oop - properties and behavior
const Fish = require("./fish.js");

var f1 = new Fish("nemo");
var f2 = new Fish("dory");
f1.sleep();
f1.sleep();
f1.sleep();
console.log(f1);
console.log(f2);

//oop - object oriented programming - the idea is how to break down your program into smaller parts
// home entertainment system - all in one tv with vhs and speakers - this is why we have oop to make it modular
// system design
