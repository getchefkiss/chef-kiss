import React from 'react';
import { useState } from 'react';
import recipesIsEmpty, { getHomeArrangement } from '../etc/cookie-storage';

const Home = () => {
  const homeArrangement = getHomeArrangement();
  
  return (
    <>
      <h1 className='serif'>Home page</h1>
    </>
  );
}

export default Home;