const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.DB;
const port = process.env.PORT || 5000;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("connected to mongoDB");
});

const userRoute = require("./routes/users.route");
const recipeRoute = require("./routes/recipe.route");

app.use("/user", userRoute);
app.use("/recipe", recipeRoute);

app.listen(port, () => {
  console.log(`app connected to port ${port}`);
});
