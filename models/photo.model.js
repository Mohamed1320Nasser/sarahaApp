const mongoose = require("mongoose");
const Schema = mongoose.Schema({
  title: String,
  path: String,
});
module.exports = mongoose.model("photo", Schema);
