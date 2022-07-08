import React, { useEffect } from 'react'

import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import AuthCheck from './screens/auth/AuthCheck';

import SignIn from './screens/auth/Sign-In'
import Home from './screens/Home'
import Settings from './screens/Settings'

import packageJson from '../package.json';
import ViewRecipe from './screens/recipes/ViewRecipe';
import NewRecipe from './screens/recipes/NewRecipe';

function App() {

  return (
    <div className="app flex flex-dir-col gap-15">
      <Router basename='/'>
        <Routes>
          <Route exact path='/' element={<AuthCheck />} />

          <Route path='/signin' element={<SignIn />} />
          <Route path='/home' element={<Home />} />
          <Route path='/settings' element={<Settings />} />
 
          <Route path='/recipe/new' element={<NewRecipe />} />
          <Route path='/recipe/:recipeID' element={<ViewRecipe />} />
        </Routes>
        <p className='text-center fg-white-30'>
          {packageJson.version} | Chef Kiss 2022
        </p>
      </Router>
    </div>
  );
}

export default App;
