import React from 'react';

import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './screens/Home'
import PageLock from './screens/testing/Page_Lock';
import JSONTest from './screens/testing/tests/json';

function App() {
  return (
    <div className="app">
      <Router basename='/'>
        <Routes>
          <Route exact path='/' element={<Home />} />

          {/* Testing */}
          <Route path='/testing' element={<PageLock />} />
          <Route path='/testing/tests/json' element={<JSONTest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
