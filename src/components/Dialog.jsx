import React from "react";

/* id, show, type, title, showDescription, description, content, cancelButton, canceled, confirmed */
class Dialog extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            show: this.props.show,

            type: this.props.type, // default, info, danger 
            title: this.props.title,
            description: this.props.description,
            showDescription: this.props.showDescription,
            content: this.props.content,
            cancelButton: this.props.cancelButton,
            canceled: this.props.canceled,
            confirmed: this.props.confirmed
        };
    }

    render() {
        if(!this.state.show) { return null; }

        return (
            <div id={this.state.id} className='overlay'>
                <div className='dialog'>
                    <div className='dialog-content'>
                        <div className='dialog-titles'>
                            <strong className='dialog-title'>{this.state.title}</strong>
                            { this.state.showDescription && (
                                <p className='dialog-description'>{this.state.description}</p>
                            ) }
                        </div>
                        <span className='dialog-content'>{this.state.content}</span>
                    </div>

                    <div className='dialog-buttons'>
                        { this.state.cancelButton && (
                            <button className='button-outline' onClick={this.state.canceled}>Cancel</button>
                        ) }
                        <button onClick={this.state.confirmed}>Okay</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dialog;