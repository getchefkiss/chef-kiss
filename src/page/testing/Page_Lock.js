import packageJson from '../../../package.json';
import { useNavigate } from 'react-router-dom';

const PageLock = () => {
    const navigate = useNavigate();

    const handlePasswordSubmit = (e) => {
        const enteredPassword = document.getElementById('password').value;
        const passwordFeedback = document.getElementById('password-feedback');
        let password = `CKJS2022@${packageJson.version}`;

        console.log(`Correct password: ${password}`);

        if (enteredPassword == password) { 
            passwordFeedback.style.color = 'green';
            passwordFeedback.textContent = 'Correct.';

            navigate('/testing/json')
        }
        else {
            passwordFeedback.style.color = 'red';
            passwordFeedback.textContent = 'Incorrect password.'
        }
    }

    return (
        <div className='page-lock' id='page-lock'>
            <h1 className='dialog-title'>This page is locked.</h1>
            <p className='dialog-description'>Please enter the password.</p>

            <input type='password' placeholder="Password..." id="password" />
            <p id="password-feedback" />
            <button className='btn-brand' onClick={handlePasswordSubmit}>Submit</button>
        </div>
    );
}

export default PageLock;