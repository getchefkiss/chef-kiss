import React from "react";

import { Link, useNavigate } from "react-router-dom";

class WIP extends React.Component {
    constructor(props) {
        super(props);
    }

    previewClick(e) {
      alert('Coming soon!');
    }
  

    render() {
        return (
            <>
              <div className='flex flex-column gap-15 center'>
                <h1 className='xl-title text-center'>wip</h1>
                <p className='large-text text-center second-text'>chef kiss is currently being developed. come back later.</p>
              </div>
      
              <footer className='bottom full-width flex flex-column gap-15 just-content-center'>
                <Link className='button brand-quiet' to='/testing'>developer login</Link>
                <button className='brand-outline opacity-50' onClick={this.previewClick}>preview</button>
              </footer>
          </>
        );
    }
}

export default WIP;