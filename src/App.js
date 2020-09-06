import React from "react";
import About from "./components/about/About.component";
import Contact from "./components/about/Contact.component";
import Header from "./components/general/Header.component";
import Navbar from "./components/general/Navbar.component";
import Feed from "./components/recipeDisplay/RecipeList.component";
import CreateRecipe from "./components/recipeCreation/overallCreateRecipe.component";
import CreateAccMaterial from "./components/accounts/CreateAccMaterial.component";
import Search from "./components/search/mainSearch.component";
import LogInMaterial from "./components/accounts/LoginMaterial.component"; //this is from the material ui library, we can decide whether to use this library, use another 3rd party library, or build a form from scratch.
//also for it to work you have to run this command: npm install @material-ui/core
//and this command: npm install --save material-ui-icons
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      
        <Navbar />
        <Route path="/" exact component={Header} />
        <Route path="/" exact component={Search} />
        <Route path="/feed" exact component={Feed} />

        <br />

        <Route path="/CreateRecipe" component={CreateRecipe} />

        <Route path="/CreateAccount" component={CreateAccMaterial} />

        <Route path="/Login" component={LogInMaterial} />

        <Route path="/AboutMunch" component={About} />
        <Route path="/ContactUs" component={Contact} />
      
    </Router>
  );
}

export default App;
