import React, { useState } from "react";
import makeJSON from '../../../etc/recipe-json';
import { Link } from "react-router-dom";
import RecipeForm from '../../../components/recipe/RecipeForm';
import RecipeView from "../../../components/recipe/RecipeView";

class RecipeTest extends React.Component {

  newReicpe(e) {
    let recipeID = 0;
    recipeID++;
    
    console.log(e);
  }

  render() {
    return (
      <div className="RecipeTest">
        <Link to='/testing/links'>Back</Link> <br />
  
        <RecipeForm onChange={this.newReicpe} />
        <RecipeView />
      </div>
    ); 
  }
}

export default RecipeTest;