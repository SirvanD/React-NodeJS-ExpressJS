const express = require("express");
const app = express();
const word = require("./models/word.js");

// static file middleware - index.html will be served automatically if the client ask for get '/'
app.use(express.static("public")); //mini router

// express json body parser middleware - built into (no installation required)

//hey express please look at the req body and if see json file convert it into object
app.use(express.json());

app.get("/api/words", (req, res) => {
  //old style async function - just callbacks
  setTimeout(() => {
    let words = word.findMany();
    res.json(words);
  }, 2000);
});

app.post("/api/words", (req, res) => {
  //expect new word from request

  //   newWord = req.body;

  word.create(req.body);

  res.json({ message: "its all good" });

  //res back to client that all is good
});

app.listen(8080, () => {
  console.log("server on 8080");
});

