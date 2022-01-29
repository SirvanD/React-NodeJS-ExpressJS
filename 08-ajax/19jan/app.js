//You have an array of integers. Find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// For Example: [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], the answer is 5 since it is the only number that appears an odd number of times.

const findOdd = (arrInput) => {
  let obj = {};
  for (let i = 0; i < arrInput.length; i++) {
    if (obj[arrInput[i]]) {
      obj[arrInput[i]] += 1;
    } else {
      obj[arrInput[i]] = 1;
    }
  }
  for (let j = 0; j < Object.keys(obj).length; j++) {
    if (Object.values(obj)[j] % 3 == 0) {
        console.log(Object.keys(obj)[j]) 
      return Object.keys(obj)[j]; //?
    }
  }
};

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); //=>5
console.log(findOdd([2, 2, 2, 2, 2, 2, 3, 3, 6, 6])); //=>2
