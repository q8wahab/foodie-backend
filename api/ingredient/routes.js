const express = require("express");
const {
  CreateIngredient,
  getAllIngredients,
  updateOneIngredient,
  delOneIngredient,
} = require("./controllers");
const passport = require("passport");

const IngredientRouter = express.Router();

IngredientRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  CreateIngredient
);
IngredientRouter.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  getAllIngredients
);
IngredientRouter.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateOneIngredient
);
IngredientRouter.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  delOneIngredient
);

module.exports = IngredientRouter;
