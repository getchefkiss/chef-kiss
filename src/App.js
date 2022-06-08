import React from 'react';

import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom'

import Home from "./page/Home";
import packageJson from '../package.json';
import PageLock from './page/testing/Page_Lock';
import JSONTest from './page/testing/tests/JSON_Test';

const versionString = `(DEV) ${packageJson.name}@${packageJson.version} 6.8.22`

function App() {
  return (
    <Router basename='/'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        
        {/* Testing */}
        <Route path='/testing' element={<PageLock />} />
        <Route path='/testing/tests/json_test' element={<JSONTest />} />
      </Routes>
    </Router>
  );
}

export default App;