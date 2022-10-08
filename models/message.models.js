const mongoose = require("mongoose");
const Schema = mongoose.Schema({
  message: String,
  userId: mongoose.SchemaTypes.ObjectId,
});

module.exports = mongoose.model("message", Schema);
