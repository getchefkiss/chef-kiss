import React, { useState } from "react";

const Switch = ({ id, className, isOn, handleToggle }) => {
    const [_id, setID] = useState(id);
    const [_className, setClassName] = useState(className);
    const [_isOn, setIsOn] = useState(isOn);
    const [_handleToggle, setHandleToggle] = useState(handleToggle);

    return (
        <div className={`switch ${_className}`} id={_id}>
            <input 
                checked={_isOn} onChange={_handleToggle}
                className='switch-checkbox' id={`switch`} type='checkbox'
            />
            <label className='switch-label' htmlFor={`switch`}>
                <span className={`switch-button`} />
            </label>
        </div>
    );
}

export default Switch;