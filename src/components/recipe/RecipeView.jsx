import React from "react";

class RecipeView extends React.Component {

    render() {
        return (
            <div className='com-recipeView'>
                <h1 className='type-title'>Recipes</h1>

                <div className='com-recipeView-list' id='recipeList' />
            </div>
        );
    }
}

export default RecipeView;