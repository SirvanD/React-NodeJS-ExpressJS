//write a cli program that reads a file and work out the number of lines

//hint = new line character

// % node ex4.js ex1.5
// % 5

const fs = require("fs"); //using a built in library named fs
const file = fs.readFileSync(`${process.argv[2]}`, "utf-8");
console.log(file.split("\n").length);
