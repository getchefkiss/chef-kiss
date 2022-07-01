import React from "react";
import { useState } from "react";

import './style.css';

import { Link } from 'react-router-dom';

const BottomNavItem = ({ id, index, icon, label, location, isSelected, onClick }) => {
    const [selected, setSelected] = useState(false);

    const handleClick = () => onClick(index);

    return (
        <>
            <Link id={id} className={`bottom-nav-item flex flex-column center ${selected ? 'selected' : 'not_selected'}`}
            to={location} onClick={ handleClick }>
                {icon}
            </Link>
        </>
    );
}

export default BottomNavItem;