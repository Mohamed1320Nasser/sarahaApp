const msgmodel = require("../models/message.models");

module.exports.addmsg = async (req, res) => {
  const { message, userId } = req.body;
  let id = msgmodel.findById(userId);
  if (id) {
    await msgmodel.insertMany({ message, userId });
    res.json({ message: "succes" });
  } else {
    res.json({ message: "user not found" });
  }
};
module.exports.getMsg = async (req, res) => {
  const userId = req.header("userId");
  let Msgs = await msgmodel.find({ userId });
  res.json({ message: "add" });
};
