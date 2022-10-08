const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./config/dataBase/dbConnection");
const app = express();
const port = process.env.POTR || 3000;
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });
app.use(upload.single("path"));
dbConnection();
app.use(express.json());
app.use("/user", require("./api/user.api"));
app.use(require("./api/message.api"));
app.use("/photo", require("./api/photo.api"));
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
