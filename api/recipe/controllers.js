const Recipe = require("../../models/Recipe");

const getAllRecipes = async (req, res, next) => {
  try {
    const Recipes = await Recipe.find();
    res.status(201).json(Recipes);
  } catch (error) {
    next(error);
  }
};

const CreateRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.create(req.body);
    return res.status(201).json(recipe);
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllRecipes, CreateRecipe };
