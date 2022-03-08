const express = require("express");

const app = express();
const _ = require("underscore");

// express only does routing

//manual setup if you want to use templates
app.set("view engine", "ejs");
app.use(express.static("public"));

// which folder you want to put your ejs templates
//you can skip the template part
app.set("views", "./templates"); //require ejs for you

app.get("/hello/:name", (req, res) => {
  console.log(req.params);
  res.send(`well hello there ${req.params.name}`);
});

app.get("/about", (req, res) => {
  console.log(req.query);
  res.send("hello express " + req.query.name);
});

app.get("/contact", (req, res) => {
  //   res.send("<h1>Contact US</h1>");
  res.render("show");
});
//port open
app.listen(7070);
