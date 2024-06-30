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

const delOneCategory = async (req, res, next) => {
  const id = req.params.id;
  try {
    const delcatogry = await Category.findByIdAndDelete(id, req.body);
    if (delcatogry) {
      return res.status(201).json(delcatogry);
    } else {
      return res.status(404).json({ msg: "delete catogry faild!" });
    }
  } catch (error) {
    next(error);
  }
};

const updateOneCatogry = async (req, res, next) => {
  const id = req.params.id;
  try {
    const updatedcatogry = await Category.findByIdAndUpdate(id, req.body);
    if (updatedcatogry) {
      return res.status(201).json(updatedcatogry);
    } else {
      return res.status(404).json({ msg: "update catogry faild!" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllcategories,
  CreateCategory,
  delOneCategory,
  updateOneCatogry,
};
