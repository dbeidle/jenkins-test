const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("JENKINS!!!");
  res.send("Welcome to testing with Jenkins");
});

const port = process.env.PORT || 3050;

app.listen(port, () => {
  console.log("API listening on " + port);
});
