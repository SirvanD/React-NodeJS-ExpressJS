//question
//is it possible to make/send a http request with node? and how?
// in ruby we used httparty

//axios - just a library to help us send http request
// if you axios  in browser - ajax request
// if you axios  in node - normal http request

//async fn - new style - returns a promise
// whenever it returns promise you can use .then
// .then works on anything that returns a promise

// what is promise?
// promise is just an object.

const axios = require("axios");

let url = "https://www.omdbapi.com/?t=jaws&apikey=6139fe0d";
axios.get(url).then((res) => {
  console.log(res.data.Title);
});

console.log("me first");

//async fn - old style also called callbacks
setTimeout(() => {
  console.log("me last");
}, 30);
console.log("me second");

const { Client } = require("pg");
const client = new Client({
  database: "goodfoodhunting",
});

client.connect();

client.query("select * from dishes").then((res) => {
  console.log(res.rows[0]);
  client.end();
});
