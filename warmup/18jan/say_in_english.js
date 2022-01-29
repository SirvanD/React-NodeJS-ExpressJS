// Given a number from 0 to 99, spell out that number in English.

// If the input to the program is 22, then the output should be 'twenty-two'.

// new Say(22).inEnglish() // => 'twenty-two'
// Your program should complain loudly if given a number outside the blessed range.

// Some good test cases for this program are:

//  0
// 14
// 50
// 98
// -1
// 100

// uncomment this line for English Number System

var dg = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
var tn = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
var tw = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

const say = (numInput) => {
  var outputArray = [];
  if (numInput < 0 || numInput > 99) {
    console.log("wrong entry!");
  } else {
    const output = numInput.toString().split("");

    output.forEach((num, idx) => {
      console.log(Number(num[idx]) + Number(num[idx]));
      console.log(num[0]);
      console.log(num[1]);
      if (Number(num) < 9) {
        outputArray.push(dg[num]);
      } else if (Number(num[0]) + Number(num[1]) < 19) {
        console.log(Number(num[idx]) + Number(num[idx]));
        outputArray.push();
      }
    });
    console.log(outputArray);
    return output;
  }
  return output;
};

console.log(say(17));
