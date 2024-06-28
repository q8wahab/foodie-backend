const Category = require("../../models/Category");

const getAllcategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(201).json(categories);
  } catch (error) {
    next(error);
  }
};

const CreateCategory = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    return res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllcategories, CreateCategory };
