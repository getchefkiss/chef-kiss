import React from "react";

class RecipeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 1
        };
    }

    handleSubmit(e) {
        this.setState({ count: this.state.count + 1 }, () => {
            if(this.props.onChange) {
                this.props.onChange(this.state);
            }
        });
    }

    render() {
        return (
            <form className='component-recipeform' onSubmit={this.handleSubmit}>
                <h1>{this.state.count}</h1>
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
                <input type='text' id="recipeSteps"  />
                <br></br>

                <label>Ingredients (seperate by just ',')</label>
                <input type='text' id="recipeIngredients"  />
                <br></br>

                <button>Add</button>
            </form>
        );
    }
}

export default RecipeForm;