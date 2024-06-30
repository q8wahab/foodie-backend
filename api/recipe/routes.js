const express = require("express");
const { getAllRecipes, CreateRecipe } = require("./controllers");

const RecipeRouter = express.Router();

RecipeRouter.get("/", getAllRecipes);
RecipeRouter.post("/", CreateRecipe);

module.exports = RecipeRouter;
