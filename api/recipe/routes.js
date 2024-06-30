const express = require("express");
const {
  getAllRecipes,
  CreateRecipe,
  delOneRecipe,
  updateOneRecipe,
  searchRecipes,
} = require("./controllers");

const RecipeRouter = express.Router();

RecipeRouter.get("/", getAllRecipes);
RecipeRouter.post("/", CreateRecipe);
RecipeRouter.delete("/:id", delOneRecipe);
RecipeRouter.put("/:id", updateOneRecipe);
RecipeRouter.get("/search", searchRecipes);
module.exports = RecipeRouter;
