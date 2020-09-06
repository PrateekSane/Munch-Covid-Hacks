const Router = require("express").Router();
let User = require("../models/user.model");

//CREATE USER (WORKS)
Router.route("/addUser").post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({
    username,
    email,
    password,
  });

  newUser
    .save()
    .then(() => res.json("user added"))
    .catch((err) => res.status("400").json("error" + err));
});

//GET ALL USERS (WORKS)
Router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status("400").json("error" + err));
});

//GET SPECIFIC USER BY ID (WORKS)
Router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((usersearch) => res.json(usersearch))
    .catch((err) => res.status("400").json("error" + err));
});

//DELETE SPECIFIC USER BY ID (WORKS)
Router.route("/delete/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("user found and deleted"))
    .catch((err) => res.status("400").json("error" + err));
});

//UPDATE SPECIFIC USER BY ID (WORKS)
Router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.username = req.body.username;
      user.password = req.body.password;
      user.email = req.body.password;

      user
        .save()
        .then(() => res.json("user Updated"))
        .catch((err) => res.status("400").json("error" + err));
    })
    .catch((err) => res.status("400").json("error" + err));
});

module.exports = Router;
