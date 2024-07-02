const express = require("express");
const app = express();
const connectDb = require("./database");
const morgan = require("morgan");
const cors = require("cors");
const CategoryRouter = require("./api/category/routes");
const notFoundHandler = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");
const RecipeRouter = require("./api/recipe/routes");
const IngredientRouter = require("./api/ingredient/routes");
const passport = require("passport");
const dotenv = require("dotenv");
const { localStrategy, jwtStrategy } = require("./middlewares/passport");
const router = require("./api/users/routes");

dotenv.config();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(passport.initialize());
passport.use("local", localStrategy);
passport.use("jwt", jwtStrategy);

app.use(router);
app.use("/category", CategoryRouter);
app.use("/recipe", RecipeRouter);
app.use("/ingredient", IngredientRouter);

app.use(notFoundHandler);
app.use(errorHandler);

connectDb();
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
