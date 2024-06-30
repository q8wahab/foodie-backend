const express = require("express");
const {
  CreateIngredient,
  getAllIngredients,
  updateOneIngredient,
  delOneIngredient,
} = require("./controllers");

const IngredientRouter = express.Router();

IngredientRouter.post("/", CreateIngredient);
IngredientRouter.get("/", getAllIngredients);
IngredientRouter.put("/:id", updateOneIngredient);
IngredientRouter.delete("/:id", delOneIngredient);

module.exports = IngredientRouter;
