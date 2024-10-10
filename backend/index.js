const express = require("express");
const app = express();
var cors = require("cors");
const fileUpload = require("express-fileupload");

var fs = require("fs");

app.use(fileUpload());

app.use(cors());

async function removeBg(blob) {
  const formData = new FormData();
  formData.append("size", "auto");
  formData.append("image_file", blob);

  const response = await fetch("https://api.remove.bg/v1.0/removebg", {
    method: "POST",
    headers: { "X-Api-Key": "2UshpyWFM3pRXUhuB3Se75Po" },
    body: formData,
  });

  if (response.ok) {
    return await response.arrayBuffer();
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
}

app.post("/get_img", async function (req, res) {
  //   console.log(req.files);

  let fileName = req.files.file.name;
  filePath = __dirname + "/uploadImage/" + fileName;

  req.files.file.mv(filePath, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("uploaded");
    }
  });

  console.log(filePath);
  const inputPath = filePath;
  const fileBlob = await fs.openAsBlob(inputPath);
  console.log(fileBlob);
  const rbgResultData = await removeBg(fileBlob);
  fs.writeFileSync(
    __dirname + "/noBgImage/" + fileName,
    Buffer.from(rbgResultData)
  );

  res.send("200");
});

console.log("server start at port 3001...");

app.listen(3001);
