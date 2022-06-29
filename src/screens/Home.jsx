import React from 'react';
import recipesIsEmpty from '../etc/cookie-storage';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      isNew: recipesIsEmpty()
    };
  }

  render() {
    return (
      <div className="screen-home">
        <h1>Home page</h1>

        { !this.state.isNew && (
          <>
            <h1>no recipes found</h1>
            <p>click the 'new recipe' button to add a recipe.</p>
          </>
        )}
      </div>
    );
  }
}

export default Home;