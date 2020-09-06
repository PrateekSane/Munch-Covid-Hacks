import React, { Component } from "react";
import Axios from "axios";

export default class recipeForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      ingredients: [],
      nutrition: null,
      nutritionCheck: false,
      prepTime: null,
    };
    this.createSubmit = this.createSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    console.log("enter");
  }
  onChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  createSubmit(e) {
    e.preventDefault();

    const newRecipe = {
      title: this.state.title,
      ingredients: this.state.ingredients,
      nutrition: this.state.nutrition,
      prepTime: this.state.prepTime,
    };

    Axios.post(
      "http://localhost:5000/recipe/addRecipe",
      newRecipe
    ).then((res) => console.log(res.data));
  }
  render() {
    return (
      <form onSubmit={this.createSubmit}>
        <input
          type="text"
          className="create-recipe-input"
          name="title"
          value={this.state.title}
          placeholder="Title"
          onChange={this.onChange}
        ></input>
        <br />
        <input
          type="text"
          className="create-recipe-input"
          name="ingredients"
          value={this.state.ingredients}
          placeholder="Ingredients"
          onChange={this.onChange}
        ></input>
        <br />
        <input
          type="text"
          className="create-recipe-input"
          name="nutrition"
          value={this.state.nutrition}
          placeholder="Nutrition"
          onChange={this.onChange}
        ></input>
        <br />
        <input
          type="text"
          className="create-recipe-input"
          name="prepTime"
          value={this.state.prepTime}
          placeholder="Prep Time"
          onChange={this.onChange}
        ></input>
        <br />
        <button id="button1" >Create!</button>
      </form>
    );
  }
}