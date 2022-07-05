import React, { useEffect } from 'react'

import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import AuthCheck from './screens/auth/AuthCheck';

import SignIn from './screens/auth/Sign-In'
import Home from './screens/Home'

function App() {

  return (
    <div className="app flex flex-dir-col gap-15">
      <Router basename='/'>
        <Routes>
          <Route exact path='/' element={<AuthCheck />} />

          <Route path='/signin' element={<SignIn />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
