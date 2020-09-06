import React, { Component } from "react";
// eslint-disable-next-line
import "./recipe.css";
export default class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.info.title,
      ingredients: props.info.ingredients,
      prepTime: props.info.prepTime,
      nutrition: props.info.nutrition,
      imgUrl: props.info.imgUrl,
    };
  }

  render() {
    return (
      <div className="overallrecipe">
        <div className="row">
          <div className="centered">
            <a href="/">
              <img
                className="recipeImage img-fluid mb-3 mb-md-0"
                src={this.state.imgUrl}
                alt=""
              ></img>
            </a>
            <br />
          </div>
          <div className="col-md-5">
            <h3 className="recipeTitle">{this.state.title}</h3>


            <p className="recipeDescription">This recipe takes {this.state.prepTime} minutes</p>
            <p className="recipeDescription">Has a nutritional value of {this.state.nutrition} Calories</p>

            <p className="recipeDescription">The ingredients required are: </p>
            <p className="recipeDescription">
              {this.state.ingredients.map((person) => (
                <li>{person}</li>
              ))}
            </p>
            <p></p>
            <br></br>
            <a
              className="btn btn-primary"
              style={{
                padding: 15 + "px",
                fontSize: 15 + "px",
                borderRadius: 12 + "px",
              }}
              href="/"
            >
              View Recipe
            </a>
            <h3 className="recipeQuickInfo">
              {this.state.prepTime} Minutes | {this.state.nutrition} Calories
            </h3>
          </div>
          <br />
        </div>
        <hr className="recipePageBreak"></hr>
      </div>
    );
  }
}
