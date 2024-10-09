const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

console.log("server start at port 3001...");

app.listen(3001);
