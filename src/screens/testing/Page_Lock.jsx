import React from "react";

import packageJson from '../../../package.json';
import { useNavigate } from "react-router-dom";

class PageLock extends React.Component {
    constructor(props) {
        super(props);
    }

    handlePasswordSubmit = (e) => {
        const { navigation } = this.props;

        let password = `CKJS_2022_${packageJson.version}`;
        const enteredPassword = document.getElementById('passwordInput').value;
        const passwordFeedback = document.getElementById('passwordFeedback');

        if (enteredPassword === password) {
            passwordFeedback.style.color = 'green';
            passwordFeedback.textContent = 'Correct!';
            this.props.navigate('/testing/links');
        } else {
            passwordFeedback.style.color = 'red';
            passwordFeedback.textContent = 'Incorrect.'
        }
    }

    render() {
        return (
            <div className='screen-pagelock'>
                <h1 className='title text-center'>This page is locked.</h1>
                <p className='sub-title text-center'>Please enter the password.</p>
    
                <input type='password' placeholder='Password...' id='passwordInput' />
                <p id='passwordFeedback' />
                <button className='btn-bottom' onClick={this.handlePasswordSubmit}>Submit</button>
            </div>
        );
    }
}

export default function(props) {
    const navigate = useNavigate();
    return <PageLock navigate={navigate} {...props} />
}