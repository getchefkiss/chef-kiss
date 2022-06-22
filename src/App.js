import React from 'react';

import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import packageJson from '../package.json';

import Home from './screens/Home'
import PageLock from './screens/testing/Page_Lock';
import DialogTest from './screens/testing/tests/dialog_test';
import RecipeTest from './screens/testing/tests/recipe_test';
import TestingLinks from './screens/testing/tests/Testing_Links';
import WIP from './screens/WIP';

import Chip from './components/base/Chip';

function App() {
  return (
    <div className="app flex flex-column">
      <Router basename='/'>
        <Routes>
          <Route exact path='/' element={<WIP />} />

          <Route path='/home' element={<Home />} />

          {/* Testing */}
          <Route path='/testing' element={<PageLock />} />
          <Route path='/testing/links' element={<TestingLinks />} />
          <Route path='/testing/tests/recipe' element={<RecipeTest />} />
          <Route path='/testing/tests/dialog' element={<DialogTest />} />
        </Routes>
      </Router>

      <Chip className='bottom-right' content={packageJson.version.split('-')[0]} />
    </div>
  );
}

export default App;
