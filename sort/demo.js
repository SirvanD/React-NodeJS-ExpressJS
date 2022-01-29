var numbers = [3, 2, 7];
var numbers2 = [3, 2, 7, 6];

numbers.sort();

console.log(numbers); //[ 2, 3, 7 ]

//filter / callback function signature

function isEven(num) {
  return num % 2 === 0; //it has to return a boolean , if ture filter it in
}

console.log(numbers2.filter(isEven));

//function where you have to pass in another function
//function that returns another function
//it's called higher order function
