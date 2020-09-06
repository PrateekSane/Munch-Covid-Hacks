const Router = require("express").Router();
let Recipe = require("../models/recipe.model");

//ADD RECIPE (WORKS)
Router.route("/addRecipe").post((req, res) => {
  const title = req.body.title;
  const ingredients = req.body.ingredients;
  const prepTime = req.body.prepTime;
  const nutrition = req.body.nutrition;
  const procedure = req.body.procedure;

  const newRecipe = new Recipe({
    title,
    ingredients,
    prepTime,
    nutrition,
    procedure,
  });

  newRecipe
    .save()
    .then(() => res.json("recipe added"))
    .catch((err) => res.status("400").json("error" + err));
});

//GET ALL RECIPES (WORKS)
Router.route("/getAllRecipes").get((req, res) => {
  Recipe.find()
    .then((recipes) => res.json(recipes))
    .catch((err) => res.status("400").json("error" + err));
});

//GET RECIPE BY ID (WORKS)
Router.route("/get/:id").get((req, res) => {
  Recipe.findById(req.params.id)
    .then((recipefound) => res.json(recipefound))
    .catch((err) => res.status("400").json("error" + err));
});

//UPDATE RECIPE BY ID (WORKS)
Router.route("/update/:id").post((req, res) => {
  Recipe.findById(req.params.id)
    .then((recipe) => {
      recipe.title = req.body.title;
      recipe.ingredients = req.body.ingredients;
      recipe.prepTime = req.body.prepTime;
      recipe.nutrition = req.body.nutrition;
      recipe.procedure = req.body.procedure;

      recipe
        .save()
        .then(() => res.json("recipe updated"))
        .catch((err) => res.status("400").json("error" + err));
    })
    .catch((err) => res.status("400").json("error" + err));
});

//DELETE RECIPE BY ID (WORKS)
Router.route("/delete/:id").delete((req, res) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then(() => res.json("deleted recipe"))
    .catch((err) => res.status("400").json("error" + err));
});

module.exports = Router;
