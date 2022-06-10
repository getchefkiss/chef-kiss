import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div className="screen-home">
          <h1>HOME PAGE</h1>

          <p>If you are a developer:</p>
          <Link to='/testing'>Testing</Link>
      </div>
    );
  }
}

export default Home;