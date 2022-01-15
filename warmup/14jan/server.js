const express = require("express");
const bodyParser = require("body-parser");
const _ = require("underscore");

const app = express();
const PORT = 9090;

app.set("view engine", "ejs");
app.set("views", "./templates");
app.set(express.static("public"));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/url", (req, res) => {
  res.send(req.body.url);
});

app.listen(PORT, () => {
  console.log(`express is running at ${PORT}`);
});
