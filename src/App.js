import React, { useEffect } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import AuthCheck from './screens/auth/AuthCheck'

import SignIn from './screens/auth/Sign-In'
import Home from './screens/Home'
import Settings from './screens/Settings'

import packageJson from '../package.json'
import ViewRecipe from './screens/recipes/ViewRecipe'
import NewRecipe from './screens/recipes/NewRecipe'
import Search from './screens/Search'
import DisabledAccount from './screens/auth/Disabled'

function App() {
  return (
    <div className="app">
      <Router basename="/">
        <Routes>
          <Route exact path="/" element={<AuthCheck />} />

          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />

          {/* Account */}
          <Route path="/settings" element={<Settings />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/acc/disabled" element={<DisabledAccount />} />

          {/* Recipe */}
          <Route path="/recipe/new" element={<NewRecipe />} />
          <Route path="/recipe/:recipeID" element={<ViewRecipe />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
