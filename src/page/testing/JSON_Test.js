const JSONTest = () => {
  let currentID = 0;


  function newRecipe(e) {

    const sRecipeName = document.getElementById('recipeName').value;
    const sRecipeDescription = document.getElementById('recipeDescription').value;
    const iCookTime = document.getElementById('cookTime').value;
    const sRecipeSteps = document.getElementById('recipeSteps').value;
    const sRecipeIngredients = document.getElementById('recipeIngredients').value;

    let aRecipeSteps = sRecipeSteps.split(',');
    let aRecipeIngredients = sRecipeIngredients.split(',');

    let jRecipe = {
      id: currentID,
      recipeName: sRecipeName,
      recipeDescription: sRecipeDescription,
      cookTime: iCookTime,
      recipeSteps: aRecipeSteps,
      recipeIngredients: aRecipeIngredients,
    }

    currentID++;

    console.log(jRecipe);
    alert(
      `id ${jRecipe.id} \n` + 
      `recipeName ${jRecipe.recipeName} \n` + 
      `recipeDescription ${jRecipe.recipeDescription} \n` + 
      `cookTime ${jRecipe.cookTime} \n` + 
      `recipeSteps ${jRecipe.recipeSteps} \n` + 
      `recipeIngredients ${jRecipe.recipeIngredients}`
    );
  }

  return (
    <div className="DEMO">
      <label>Recipe Name</label>
      <input type='text' id='recipeName' />
      <br></br>

      <label>Recipe Description</label>
      <input type='text' id='recipeDescription' />
      <br></br>

      <label>Cook Time (mins)</label>
      <input type='number' id="cookTime" />
      <br></br>

      <label>Steps (seperate by just ',')</label>
      <input type='text' id="recipeSteps" />
      <br></br>

      <label>Ingredients (seperate by just ',')</label>
      <input type='text' id="recipeIngredients" />
      <br></br>

      <button onClick={newRecipe}>Add</button>
    </div>
  );
}

export default JSONTest;
