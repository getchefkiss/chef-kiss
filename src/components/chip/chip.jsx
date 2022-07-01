import React from "react";

import './style.css';

const Chip = ({ id, className, content }) => {
    return (
        <div className={`chip ${className}`} id={id}>
            { content }
        </div>
    );
}

export default Chip;