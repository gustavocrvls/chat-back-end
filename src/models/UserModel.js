const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: String,
    userType: Number
  },
  { timestamps: { currentTime: () => Math.floor(Date.now() / 1000) } }
);

module.exports = mongoose.model("user", UserSchema, 'user');
