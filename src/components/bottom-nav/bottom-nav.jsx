import React from "react";
import { useState } from "react";

import './style.css';

import BottomNavItem from "./nav-item";
import IconSearch from '../icons/search';
import IconHome from '../icons/home';
import IconSettings from "../icons/settings";

const BottomNav = ({ id }) => {
    const [_id, setID] = useState(id);
    const [activeIndex, setActiveIndex] = useState(0);

    function handleItemClick(index) {
        setActiveIndex(index);
    }

    return (
        <div id={_id} className='bottom-nav flex flex-row flex-grow full-width bottom'>
            <BottomNavItem id='home' label='Home' 
            location='/home' index={0} isSelected={activeIndex === 2} onClick={handleItemClick}
            icon={<IconHome stroke={getComputedStyle(document.body).getPropertyValue("--clr-foreground-2")} fill='none' width='24' height='24' />} />

            <BottomNavItem id='search' label='Search' 
            location='/search' index={1} isSelected={activeIndex === 1} onClick={handleItemClick}
            icon={<IconSearch stroke={getComputedStyle(document.body).getPropertyValue("--clr-foreground-2")} fill='none' width='24' height='24' />} />

            <BottomNavItem id='settings' label='Settings' 
            location='/settings' index={2} isSelected={activeIndex === 3} onClick={handleItemClick}
            icon={<IconSettings stroke={getComputedStyle(document.body).getPropertyValue("--clr-foreground-2")} fill='none' width='24' height='24' />} />
        </div>
    );
}

export default BottomNav;