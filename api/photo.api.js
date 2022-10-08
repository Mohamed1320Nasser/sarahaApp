const { addphoto, getphoto } = require("../service/photo.services");

const app = require("express").Router();

app.post("/", addphoto);
app.get("/", getphoto);

module.exports = app;
