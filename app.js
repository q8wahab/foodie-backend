const express = require("express");
const app = express();
const connectDb = require("./database");
const morgan = require("morgan");
const cors = require("cors");
const CategoryRouter = require("./api/category/routes");

connectDb();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/category", CategoryRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Internal Server Error",
  });
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
