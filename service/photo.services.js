const photoModel = require("../models/photo.model");
module.exports.addphoto = async (req, res) => {
  const { title, path } = req.body;
  await photoModel.insertMany({ title, path });
  res.json({ message: "success" });
};
module.exports.getphoto = async (req, res) => {
  let photo = await photoModel.find({});
  res.json({ message: "success", photo });
};
