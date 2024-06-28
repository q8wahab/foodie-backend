const express = require("express");
const { getAllcategories, CreateCategory } = require("./controllers");
const CategoryRouter = express.Router();

CategoryRouter.get("/", getAllcategories);
CategoryRouter.post("/", CreateCategory);

module.exports = CategoryRouter;
