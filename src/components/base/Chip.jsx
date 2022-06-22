import React from "react";

/* id, className, content */
class Chip extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            className: this.props.className,

            content: this.props.content,
        };
    }

    render() {
        return (
            <div className={`chip ${this.state.className}`} id={this.state.id}>
                { this.props.content }
            </div>
        );
    }
}

export default Chip;