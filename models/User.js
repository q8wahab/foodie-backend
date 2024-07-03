const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, requiered: true },
  password: { type: String, requiered: true },
  recipe: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],
  image: String,
});

module.exports = mongoose.model("User", UserSchema);
