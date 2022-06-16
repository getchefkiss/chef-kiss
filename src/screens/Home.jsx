import React from 'react'
import { unmountComponentAtNode } from 'react-dom';
import { Link } from 'react-router-dom'
import Dialog from '../components/Dialog';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = { wipDialogIsOpen: true };
  }

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