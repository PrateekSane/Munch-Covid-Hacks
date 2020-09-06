import React, { Component } from "react";
import Title from "./titleCR.component";
import Ingredients from "./ingredientsCR.component";
import Procedure from "./procedureCR.component";
import Nutrition from "./nutritionCR.component";
import PrepTime from "./prepTime.component";
import Axios from "axios";
import "../css/main.css";

export default class createRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleForm: true,
      ingredientForm: false,
      procedureForm: false,
      prepForm: false,
      nutritionForm: false,
      completedForm: false,
      title: "",
      ingredients: "",
      procedure: "",
      prepTime: 0,
      nutrition: 0,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.titleHandler = this.titleHandler.bind(this);
    this.ingHandler = this.ingHandler.bind(this);
    this.prepHandler = this.prepHandler.bind(this);
    this.proHandler = this.proHandler.bind(this);
    this.nutHandler = this.nutHandler.bind(this);
  }

  titleHandler(val) {
    this.setState({
      title: val,
      titleForm: false,
      ingredientForm: true,
    });
  }

  ingHandler(val) {
    this.setState({
      ingredients: val,
      ingredientForm: false,
      procedureForm: true,
    });
  }
  proHandler(val) {
    this.setState({
      procedure: val,
      procedureForm: false,
      prepForm: true,
    });
  }
  prepHandler(val) {
    this.setState({
      prepTime: val,
      prepForm: false,
      nutritionForm: true,
    });
  }
  nutHandler(val) {
    this.setState({
      nutrition: val,
      nutritionForm: false,
      completedForm: true,
    });
    this.onSubmit();
  }

  onSubmit() {
    const newRecipe = {
      title: this.state.title,
      ingredients: this.state.ingredients,
      procedure: this.state.procedure,
      prepTime: this.state.prepTime,
      nutrition: this.state.nutrition,
    };

    Axios.post("http://localhost:5000/recipe/addRecipe", newRecipe).then(
      (res) => {
        console.log(res);
      }
    );
  }

  render() {
    return (
      <div>
        <div className="FormBackgroundImage"></div>
        <div className="Form">
          {this.state.titleForm ? <Title handle={this.titleHandler} /> : ""}
          {this.state.ingredientForm ? (
            <Ingredients handle={this.ingHandler} />
          ) : (
            ""
          )}
          {this.state.procedureForm ? <Procedure handle={this.proHandler} /> : ""}
          {this.state.prepForm ? <PrepTime handle={this.prepHandler} /> : ""}
          {this.state.nutritionForm ? <Nutrition handle={this.nutHandler} /> : ""}
          {this.state.completedForm ? <div>submitted</div> : ""}
        </div>
      </div>
      
    );
  }
}
