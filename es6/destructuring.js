//destructuring
//deconstructing
// pattern matching
//=================================================
//array

// var fruits =
// console.log(fruits);

// var favfruit = fruits[0];

var [favFruit, ...rest] = ["mango", "apple", "banana", "kiwi"];
console.log(favFruit);
console.log(rest);
//==================================================

//teh rest operator
//the spread operator

//example of use

// var cities = [
//   ["sydney", "syd"],
//   ["austin", "atx"],
//   ["new yc", "nyc"],
// ];

// cities.forEach(([label, id]) => {
//   let option = document.createElement("option");
//   // let label = pair[0]
//   // let id = pair[1]
//   //   let [label, id] = pair;

//   option.textContent = label;
//   option.value = id;
// });

//===================
// url = "https://www.omdbapi.com/?t=jaws&apikey=6139fe0d"[(url, queryString)] =
//   url.split("?");
// queryString.split("&");
//======================================================

//objects destructuring

function getUser() {
  return {
    username: "dt",
    balance: 999,
  };
}

var { username: nickname } = getUser();
var { username } = getUser();
console.log(nickname);
console.log(username);

//======================
// const { Client: Client } = require('pg')

// class Client {

// }

// const pg = {
//     Client: Client
// }

// module.exports = pg
