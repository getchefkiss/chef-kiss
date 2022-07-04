import React from 'react';

import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import packageJson from '../package.json';

import Register from './screens/auth/Register';
import SignIn from './screens/auth/Sign-In';

import { auth } from './etc/firebase';

function App() {
  return (
    <div className="app flex flex-dir-col">
      <Router basename='/'>
        <Routes>
          <Route exact path='/' element={<SignIn />} />

          {/* User accounts */}
          <Route path='/register' element={<Register />} />
          <Route path='/sign-in' element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
