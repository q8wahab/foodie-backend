const Ingredient = require("../../models/Ingredient");

const CreateIngredient = async (req, res, next) => {
  try {
    const ingredient = await Ingredient.create(req.body);
    return res.status(201).json(ingredient);
  } catch (error) {
    next(error);
  }
};

const getAllIngredients = async (req, res, next) => {
  try {
    const ingredient = await Ingredient.find();
    res.status(201).json(ingredient);
  } catch (error) {
    next(error);
  }
};

const delOneIngredient = async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletedingredient = await Ingredient.findByIdAndDelete(id, req.body);
    if (deletedingredient) {
      return res.status(201).json(deletedingredient);
    } else {
      return res.status(404).json({ msg: "delete ingredient faild!" });
    }
  } catch (error) {
    next(error);
  }
};

const updateOneIngredient = async (req, res, next) => {
  const id = req.params.id;
  try {
    const updatedIngredient = await Ingredient.findByIdAndUpdate(id, req.body);
    if (updatedIngredient) {
      return res.status(201).json(updatedIngredient);
    } else {
      return res.status(404).json({ msg: "update ingredient faild!" });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  CreateIngredient,
  getAllIngredients,
  delOneIngredient,
  updateOneIngredient,
};
