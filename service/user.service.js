const userModels = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../email/user.email");

module.exports.signup = async (req, res) => {
  const { name, email, password, age } = req.body;
  let user = await userModels.findOne({ email });
  if (user) {
    res.json({ message: "email already exist " });
  } else {
    let hash = await bcrypt.hash(password, 4);
    await userModels.insertMany({ name, email, password: hash, age });
    let token = jwt.sign({ email }, "mohamed");
    await sendEmail({ email, token, subject: "hello" });
    res.json({ message: "succes" });
  }
};
module.exports.signin = async (req, res) => {
  const { email, password } = req.body;
  user = await userModel.findOne({ email });
  if (user) {
    let match = await bcrypt.compare(password, user.password);
    if (match) {
      let token = jwt.sign(
        {
          role: "user",
          id: user._id,
          email: user.email,
          password: user.password,
          name: user.name,
        },
        "mohamedNasser"
      );
      if (user.emailConfirm == true) {
        res.json({ message: "succes", token });
      } else {
        res.json({ message: "this email not confirm" });
      }
    } else {
      res.json({ message: "the password is incorrect" });
    }
  } else {
    res.json({ message: "email incorrect" });
  }
};
module.exports.emailVerify = async (req, res) => {
  const { token } = req.params;
  jwt.verify(token, "mohamed", async (err, decoded) => {
    if (err) {
      res.json({ message: "email in valid" });
    } else {
      let user = await userModels.findOne({ email: decoded.email });
      if (user) {
        await userModels.findOneAndUpdate(
          { email: decoded.email },
          { emailConfirm: true }
        );
        res.json({ message: "verified" });
      } else {
        res.json({ message: "email not found" });
      }
    }
  });
};
