import React from 'react';
import { useState } from 'react';
import { getRecipes } from '../etc/cookie-storage';

const Search = () => {
  const [searchQ, setSearchQ] = useState('');

  const search = (e) => {
    setSearchQ(document.getElementById('search-bar').value);
    const recipes = getRecipes();
    let listResults = [];

    for(let x in recipes) {
      let _recipeName = x.toLowerCase();
      let _searchQ = searchQ.toLowerCase();

      if(_recipeName.includes(_searchQ)) { listResults.push(x) }
    }

    document.getElementById('results').textContent = listResults.toString();

  }

  return (
    <>
      <div className='flex flex-column gap-50 padding-top-50'>
        <input id='search-bar' type='text' placeholder='Search...' onKeyDown={ search } onKeyUp={ search } />
        <p id='results' />
      </div>
    </>
  );
}

export default Search;