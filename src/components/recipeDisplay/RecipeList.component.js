import React, { Component } from "react";
import axios from "axios";
import "../css/Feed.module.css";
import Recipe from "./Recipe.component";

export default class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = { recipes: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/recipe/getAllRecipes")
      .then((response) => {
        this.setState({ recipes: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:5000/recipe/getAllRecipes")
      .then((response) => {
        this.setState({ recipes: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  todoList() {
    return this.state.recipes.map(function (currentRecipe, i) {
      return <Recipe info={currentRecipe} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <div className="spacer"></div>
        <br />
        <br />
        {this.todoList()}
      </div>
    );
  }
}
