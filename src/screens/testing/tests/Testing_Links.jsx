import React from "react";

import { Link } from "react-router-dom";

class TestingLinks extends React.Component {
    render() {
        return (
            <div className='screen-pagelock'>
                <strong>Testing links</strong> <br />
    
                <Link to='/testing/tests/recipe'>01: Recipe</Link> <br />
            </div>
        );
    }
}

export default TestingLinks;