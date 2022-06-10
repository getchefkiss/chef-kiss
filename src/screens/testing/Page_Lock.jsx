import React from "react";

import packageJson from '../../../package.json';
import { useNavigate } from "react-router-dom";

class PageLock extends React.Component {
    handlePasswordSubmit = (e) => {
        const navigate = useNavigate();

        let password = `CKJS_2022_${packageJson.version}`;
        const enteredPassword = document.getElementById('passwordInput').value;
        const passwordFeedback = document.getElementById('passwordFeedback');

        if (enteredPassword === password) {
            passwordFeedback.style.color = 'green';
            passwordFeedback.textContent = 'Correct!';
            navigate('/testing/links');
        } else {
            passwordFeedback.style.color = 'red';
            passwordFeedback.textContent = 'Incorrect.'
        }
    }

    render() {
        return (
            <div className='screen-pagelock'>
                <h1 className='dialog-title'>This page is locked.</h1>
                <p className='dialog-description'>Please enter the password.</p>
    
                <input type='password' placeholder='Password...' id='passwordInput' />
                <p id='passwordFeedback' />
                <button className='com-btn cta' onClick={this.handlePasswordSubmit}>Submit</button>
            </div>
        );
    }
}

export default PageLock;