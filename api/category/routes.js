const express = require("express");
const {
  getAllcategories,
  CreateCategory,
  delOneCategory,
  updateOneCatogry,
} = require("./controllers");
const CategoryRouter = express.Router();

CategoryRouter.get("/", getAllcategories);
CategoryRouter.post("/", CreateCategory);
CategoryRouter.delete("/:id", delOneCategory);
CategoryRouter.put("/:id", updateOneCatogry);

module.exports = CategoryRouter;
