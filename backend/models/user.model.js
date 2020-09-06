const mongoose = require("mongoose");
const { string } = require("prop-types");
const Schema = mongoose.Schema;

const userModel = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("user", userModel);
module.exports = User;
