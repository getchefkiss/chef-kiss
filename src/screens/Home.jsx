import React, { version } from 'react';
import { Link } from 'react-router-dom'
import Dialog from '../components/Dialog';
import getVersionType from '../etc/version-type';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      isDangerBuild: false
    };
  }

  testVersionType() {
    let versionType = getVersionType();
    if (versionType === 'Work in progress' || versionType === 'Beta') {
      console.log('Dangerbuild');
    }
  }

  componentDidMount(e) {
    console.log(this.state);

    this.testVersionType();
  }

  wipConfirmed(e) {
    console.log('Confirmed');
  }

  wipCanceled(e) {

  }

  render() {
    return (
      <div className="screen-home">
        <Dialog 
          type='danger'
          title='WIP'
          show={true}
          showDescription={true} description='Work in progress'
          content='You are currently running a WIP build. There could be bugs or even rewrites of features.'
          cancelButton={true} canceled={this.wipCanceled}
          confirmed={this.wipConfirmed}
        />

        <h1>HOME PAGE</h1>

        <p>If you are a developer:</p>
        <Link to='/testing'>Testing</Link>
      </div>
    );
  }
}

export default Home;