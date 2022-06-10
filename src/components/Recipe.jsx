import React from "react";

/* name, description, cookTime */
class Recipe extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            description: this.props.description,
            cooktime: this.props.cookTime
        };
    }

    render() {
        return (
            <div className="component-recipe">
                <strong>{this.state.name}</strong> <br />
                <p>{this.state.description}</p> <br />
                <p>{this.state.cooktime}</p>
            </div>
        );
    }
}

export default Recipe;