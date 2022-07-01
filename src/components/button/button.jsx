import React from "react";

import './style.css';

import { Link } from 'react-router-dom';

const Button = ({ id, className, type, style, content, location, onClick }) => {
    if (type === 'button') {
        return (
            <button id={id} className={`button ${style}`} onClick={ onClick }>{ content }</button>
        );
    } else {
        return (
            <Link id={id} className={`button ${style}`} to={ location } onClick={ onClick }>{ content }</Link>
        );
    }
}

export default Button;