import React from 'react';
import { useState } from 'react';
import IconLargeLogo from '../components/icons/logo-large';
import IconSmallLogo from '../components/icons/logo-small';
import IconSearch from '../components/icons/search';

import recipesIsEmpty, { getHomeArrangement } from '../etc/cookie-storage';

const Home = () => {
  const homeArrangement = getHomeArrangement();
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1 className='serif'>Home page</h1>
    </>
  );
}

export default Home;