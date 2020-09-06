import React, { Component } from "react";
import Axios from "axios";
import Recipe from "../recipeDisplay/Recipe.component";
// eslint-disable-next-line
import "../css/search.css";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerms: "",
      submitted: false,
      id: "",
      target: [],
      dis: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.showDisplay = this.showDisplay.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  //Document Distance Algorithm
  onSubmit() {
    const terms = this.state.searchTerms.split(/[ ,]+/);
    var a_words = {};

    for (var i = 0; i < terms.length; i++) {
      const word = terms[i].trim().toLowerCase();
      if (a_words[word]) {
        a_words[word] += 1;
      } else a_words[word] = 1;
    }

    Axios.get("http://localhost:5000/recipe/getAllRecipes").then((res) => {
      //Get the recipe data from the database. For scale can be optimized through including tags for the data
      const allRecipes = res.data;

      var cur_min = 5;
      for (var j = 0; j < allRecipes.length; j++) {
        //Find Matching Words
        const title = allRecipes[j].title.split(" ");
        const ing = allRecipes[j].ingredients;
        const temp_words = title.concat(ing[0].split(","));
        const recipe_words = {};
        var vis = [];
        for (var t = 0; t < temp_words.length; t++) {
          const temp = temp_words[t].toLowerCase().trim();
          if (a_words[temp]) {
            if (recipe_words[temp]) {
              recipe_words[temp] += 1;
            } else recipe_words[temp] = 1;
            vis.push(temp);
          }
        }

        //See if this is the closest match
        var dot_prod = 0;
        for (var word = 0; word < vis.length; word++) {
          const cur = vis[word];
          dot_prod += recipe_words[cur] * a_words[cur];
        }
        dot_prod = Math.acos(dot_prod / (terms.length * temp_words.length));

        if (dot_prod < cur_min) {
          cur_min = dot_prod;
          this.setState({
            id: allRecipes[j]._id,
          });
        }
      }
      this.setState({
        target: res.data,
      });
    });
    this.setState({
      submitted: true,
    });
  }

  showDisplay() {
    const recipeList = this.state.target.map((data) => {
      if (data._id === this.state.id) {
        return <Recipe info={data} key={data._id} />;
      } else return "";
    });
    return recipeList;
  }

  render() {
    return (
      <div className="searchform">
        <br />
        <br />
        <form>
          <input
            type="text"
            name="searchTerms"
            value={this.state.searchTerms}
            onChange={this.handleChange}
            placeholder="What are you craving?"
            className="searchtext"
          />
          <br />
          <br />
          <input
            type="button"
            value="Munch!"
            onClick={this.onSubmit}
            className="searchbutton"
          />
        </form>
        <br />
        {this.showDisplay()}
      </div>
    );
  }
}
