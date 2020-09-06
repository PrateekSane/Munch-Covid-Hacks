import React, { Component } from "react";
import Recipe from "./Recipe.component";
import Axios from "axios";
import styles from "../css/Feed.module.css";

export default class Feed extends Component {
  constructor() {
    super();
    this.state = {
      allRecipes: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/recipe/getAllRecipes")
      .then((resList) => {
        this.setState({
          allRecipes: resList.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidUpdate() {
    Axios.get("http://localhost:5000/recipe/getAllRecipes")
      .then((resList) => {
        this.setState({
          allRecipes: resList.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  recipeCollection() {
    const recipeList = this.state.allRecipes.map((data) => {
      return <Recipe info={data} key={data._id} />;
    });
    recipeList.reverse(); //Used to make the new recipes to the top
    return recipeList;
  }

  render() {
    return <div className={styles.feed}>{this.recipeCollection()}</div>;
  }
}
