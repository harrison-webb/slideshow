const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/images", (req, res) => {
  const imagesFolder = path.join(__dirname, "public", "images");
  fs.readdir(imagesFolder, (err, files) => {
    if (err) {
      res.status(500).send("Unable to read image files");
    } else {
      const images = files.map((file) => `/images/${file}`);
      res.json(images);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
