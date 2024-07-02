const express = require("express");
const {
  getAllcategories,
  CreateCategory,
  delOneCategory,
  updateOneCatogry,
} = require("./controllers");
const passport = require("passport");

const CategoryRouter = express.Router();

CategoryRouter.get("/", getAllcategories);
CategoryRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  CreateCategory
);
CategoryRouter.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  delOneCategory
);
CategoryRouter.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateOneCatogry
);
// onCategory

module.exports = CategoryRouter;
