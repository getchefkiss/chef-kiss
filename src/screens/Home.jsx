import React, { version } from 'react';
import { Link } from 'react-router-dom'
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

  render() {
    return (
      <div className="screen-home">
      </div>
    );
  }
}

export default Home;