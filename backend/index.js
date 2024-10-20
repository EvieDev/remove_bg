const express = require("express");
const app = express();
var cors = require("cors");
const fileUpload = require("express-fileupload");

var fs = require("fs");

app.use(fileUpload());

app.use(cors());

app.use(express.static("noBgImage"));
app.use(express.static("uploadImage"));

app.post("/get_img", async function (req, res) {
  let date = new Date().getTime();
  let fileName = date + "_" + req.files.file.name;
  filePath = __dirname + "/uploadImage/" + fileName;
  let color = req.body.color;

  req.files.file.mv(filePath, async function (err) {
    if (err) {
      console.log(err);
    } else {
      const inputPath = filePath;
      const fileBlob = await fs.openAsBlob(inputPath);
      const rbgResultData = await removeBg(fileBlob, color);
      fs.writeFileSync(
        __dirname + "/noBgImage/" + "no_bg_" + fileName,
        Buffer.from(rbgResultData)
      );
      res.send(fileName);
    }
  });
});

async function removeBg(blob, color) {
  const formData = new FormData();
  formData.append("size", "auto");
  formData.append("image_file", blob);
  formData.append("bg_color", color);

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

console.log("server start at port 3001...");

app.listen(3001);
