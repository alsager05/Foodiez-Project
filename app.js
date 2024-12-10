const express = require("express");
const app = express();
const connectDB = require("./database");
const usersRoute = require("./api/users/users.route");

app.use(express.json());

app.use("/api/users", usersRoute);

connectDB();

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
