const express = require("express");
const {
  getAllRecipes,
  CreateRecipe,
  delOneRecipe,
  updateOneRecipe,
  searchRecipes,
} = require("./controllers");
const passport = require("passport");

const RecipeRouter = express.Router();

RecipeRouter.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  getAllRecipes
);
RecipeRouter.post("/", CreateRecipe);
RecipeRouter.delete("/:id", delOneRecipe);
RecipeRouter.put("/:id", updateOneRecipe);
RecipeRouter.get("/search", searchRecipes);
module.exports = RecipeRouter;
