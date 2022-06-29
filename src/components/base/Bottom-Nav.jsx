import React from "react";

import { Link } from 'react-router-dom';

/* id */
class BottomNav extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            
            selectedIndex: 1
        };
    }

    itemClicked(e) {

    }

    render() {
        return (
            <div id={this.state.id} className='bottom-nav'>
                <Link to='/settings' onClick={this.itemClicked} className='bottom-nav-item'>settings</Link>
                <Link to='/home' className='bottom-nav-item selected'>home</Link>
                <Link to='/beta' className='bottom-nav-item'>beta</Link>
                <Link to='/search' className='bottom-nav-item'>search</Link>
            </div>
        );
    }
}

export default BottomNav;