const Category = require("../../models/Category");
const Recipe = require("../../models/Recipe");

const getAllRecipes = async (req, res, next) => {
  try {
    const Recipes = await Recipe.find()
      .populate("category")
      .populate("ingredients");
    res.status(201).json(Recipes);
  } catch (error) {
    next(error);
  }
};

const CreateRecipe = async (req, res, next) => {
  try {
    req.body.user = req.user._id;
    const recipe = await Recipe.create(req.body);
    await Category.findOneAndUpdate(
      { _id: req.body.categoryId },
      { $push: { recipes: recipe._id } },
      { new: true, useFindAndModify: false }
    );
    return res.status(201).json(recipe);
  } catch (error) {
    next(error);
  }
};

const delOneRecipe = async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletedrecipe = await Recipe.findByIdAndDelete(id, req.body).populate(
      "category"
    );
    if (deletedrecipe) {
      return res.status(201).json(deletedrecipe);
    } else {
      return res.status(404).json({ msg: "delete recipe faild!" });
    }
  } catch (error) {
    next(error);
  }
};

const updateOneRecipe = async (req, res, next) => {
  const id = req.params.id;
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(id, req.body).populate(
      "category"
    );
    if (updatedRecipe) {
      return res.status(201).json(updatedRecipe);
    } else {
      return res.status(404).json({ msg: "update recipe faild!" });
    }
  } catch (error) {
    next(error);
  }
};

const searchRecipes = async (req, res, next) => {
  const query = req.query.q;
  try {
    const recipes = await Recipe.find({
      title: { $regex: query, $options: "i" },
    }).populate("category");
    if (recipes) {
      return res.status(200).json(recipes);
    } else {
      return res.status(404).json({ msg: "No recipe found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllRecipes,
  CreateRecipe,
  delOneRecipe,
  updateOneRecipe,
  searchRecipes,
};
