const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },

  title: String,
  ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" }],
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
