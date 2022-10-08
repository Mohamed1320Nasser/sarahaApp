const { signup, signin, emailVerify } = require("../service/user.service");

const app = require("express").Router();

app.post("/signup", signup);
app.post("/signin", signin);
app.get("/verify/:token", emailVerify);

module.exports = app;
