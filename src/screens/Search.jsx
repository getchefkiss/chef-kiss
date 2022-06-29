import React from 'react';
import { getRecipes } from '../etc/cookie-storage';

class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        searchQ: 'Search'
    }
  }

  search(e) {
    let search = this.state.searchQ;
    let results = document.getElementById('results');

    results.innerText(search);
  }

  render() {
    return (
      <>
        <h1>Search page</h1>

        <input type='text' placeholder='Search...' onChange={this.search} value={this.state.searchQ} />
        <p id='results'>No results...</p>
      </>
    );
  }
}

export default Search;