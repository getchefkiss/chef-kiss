import React from "react";

import './style.css';

const SearchBar = ({ id, className, value, setValue, onKeyDown }) => {
    return (
        <input id={ id } className={ className } type='text' placeholder='Search...' value={ value } onChange={ (e) => { setValue(e.target.value) }}
         onKeyDown={ onKeyDown } />
    );
}

export default SearchBar;