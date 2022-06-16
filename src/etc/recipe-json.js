/* recipeID, recipeName, recipeDescription, cookTime, recipeSteps, recipeIngredients */
const makeJSON = (recipeID, recipeName, recipeDescription, cookTime, recipeSteps, recipeIngredients) => {
    let aRecipeSteps = recipeSteps.split(',');
    let aRecipeIngredients = recipeIngredients.split(',');

    let recipe = {
      id: recipeID,
      recipeName: recipeName,
      recipeDescription: recipeDescription,
      cookTime: cookTime,
      recipeSteps: aRecipeSteps,
      recipeIngredients: aRecipeIngredients,
    }
    return recipe;
}

export default makeJSON;