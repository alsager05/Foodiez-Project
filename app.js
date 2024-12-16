const express = require("express");
const app = express();
const connectDB = require("./database");
const usersRoute = require("./api/users/users.route");
const recipeRoute = require("./api/recipes/recipes.route");
const categoryRoute = require("./api/category/category.route");
const ingredientRoute = require("./api/ingredient/ingredient.route");
const path = require("path");
app.use(express.json());

app.use("/media", express.static(path.join(__dirname, "media")));

app.use("/api/users", usersRoute);
app.use("/api/recipes", recipeRoute);
app.use("/api/category", categoryRoute);
app.use("/api/ingredient", ingredientRoute);
connectDB();

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
