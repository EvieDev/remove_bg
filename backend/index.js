const express = require("express");
const app = express();
var cors = require("cors");
const fileUpload = require("express-fileupload");

app.use(fileUpload());

app.use(cors());

app.post("/get_img", function (req, res) {
  console.log(req);
  res.send("Hello World");
});

console.log("server start at port 3001...");

app.listen(3001);
