const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeModel = new Schema({
  title: { type: String, required: true },
  ingredients: { type: Array, required: true },
  procedure: { type: Array, required: true },
  prepTime: { type: Number, required: true },
  nutrition: { type: Number, required: false },
});

const Recipe = mongoose.model("recipe", recipeModel);
module.exports = Recipe;
