// write a cli program to calculate the total

// example how to run this program
// % node ex2.js 1 2 3
// % 6

// % node ex2.js 2 2
// % 4

// % node ex2.js 1 1 1 2
// % 5
let total = 0;
for (let i = 2; i < process.argv.length; i++) {
  total += Number(process.argv[i]);
}
console.log(total);
