const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  image: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },

  title: String,
  ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" }],
  instructions: {
    type: String,
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

  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Recipe", recipeSchema);
