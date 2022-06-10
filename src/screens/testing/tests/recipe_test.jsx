import React, { useState } from "react";
import makeJSON from '../../../scripts/recipe-json';
import { Link } from "react-router-dom";
import Recipe from "../../../components/Recipe";
import RecipeForm from '../../../components/RecipeForm';

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
  
        <div id='recipeView'>
          <strong>Recipes</strong> <br />
        </div>
      </div>
    ); 
  }
}

export default RecipeTest;