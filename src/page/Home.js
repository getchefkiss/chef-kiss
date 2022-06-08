import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

  return (
    <div className="home">
        <p>If your a developer:</p>
        <Link to='/testing'>Testing</Link>
    </div>
  );
}

export default Home;
