import React from "react";
import { useState } from "react";

import { Link } from 'react-router-dom';

const BottomNav = ({ id }) => {
    const [_id, setID] = useState(id);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const itemClicked = (e) => {

    }

    return (
        <div id={_id} className='bottom-nav flex flex-row flex-grow full-width bottom'>
            <div className='bottom-nav-item flex flex-column'>
                <Link to='/home' className='bottom-nav-label'>Home</Link>
            </div>
            <div className='bottom-nav-item flex flex-column'>
                <Link to='/search' className='bottom-nav-label'>Search</Link>
            </div>
            <div className='bottom-nav-item flex flex-column'>
                <Link to='/settings' className='bottom-nav-label'>Settings</Link>
            </div>
        </div>
    );
}

export default BottomNav;