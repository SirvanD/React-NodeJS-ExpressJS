// built in library/apis
// also called built in apis or standard library

//module system - commonjs

const fs = require("fs");

const file = fs.readFileSync("ex1.js", "utf-8"); //utf - 8 is for when we dont want to convert it into string

console.log(file);
