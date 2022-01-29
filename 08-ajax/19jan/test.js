function double(num) {
  return num * 2;
}

console.time("double");
for (let i = 0; i < 1000; i++) {
  double(5);
}
console.timeEnd("double");


// how does my algorithm scales

// worst case - not feasible 

// notation - big O notation 

// example : problem

// I want to watch GOT - in 4k - 1st season - 9 seasons
// big O: this solution scales linear O(n)

// 1 season - sample size
//solution:
// bittorrents - education purpose - 20hrs * 9
// amazon and buy the blue ray - 2 days 
// big O: this solution scales constant O(1)

