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
            this.props.navigate('/testing/links');
        } else {
            passwordFeedback.style.color = 'var(--clr-danger)';
            passwordFeedback.textContent = 'incorrect password'
        }
    }

    render() {
        return (
            <div className='screen-pagelock'>
                <div className='flex flex-column gap-15 off-center'>
                    <h1 className='title text-center'>this page is locked</h1>
                    <p className='large-text text-center second-text'>please enter the password</p>
                </div>
    
                <div className='flex flex-column gap15 lay-bottom full-width'>                    
                    <footer className='flex flex-column gap-15 bottom full-width'>
                        <p id='passwordFeedback' />
                        <input type='password' placeholder='password...' id='passwordInput' className="display-block" />
                        <button className='brand-quiet' onClick={this.handlePasswordSubmit}>continue</button>
                    </footer>
                </div>
            </div>
        );
    }
}

export default function(props) {
    const navigate = useNavigate();
    return <PageLock navigate={navigate} {...props} />
}