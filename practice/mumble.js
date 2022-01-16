//Prompt:

// Write a function called mumble that accepts a single string argument.
// The function should return a string that has each character repeated the number of times according to its position within the string arg. In addition, each repeated section of characters should be separated by a hyphen (-).

const mumble = (strinput) => {
  return strinput
    .split("")
    .map((char, idx) => char.repeat(idx + 1))
    .join("-");
};

console.log(mumble("X")); //=> 'X'
console.log(mumble("abc")); //=> 'a-bb-ccc'
console.log(mumble("121")); //=> '1-22-111'
console.log(mumble("!A 2")); //=> '!-AA-   -2222'
