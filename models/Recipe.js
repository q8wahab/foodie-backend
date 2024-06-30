const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: String,
  ingredients: [
    {
      name: String,
      //   quantity: String,
    },
  ],
  instructions: {
    type: String,
    required: true,
  },
  prepTime: {
    type: Number, // in minutes
  },
  cookTime: {
    type: Number, // in minutes
  },
  totalTime: {
    type: Number, // in minutes
    default: function () {
      return this.prepTime + this.cookTime;
    },
  },

  //   createBy: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "User",
  //     required: true,
  //   },
});

module.exports = mongoose.model("Recipe", recipeSchema);
