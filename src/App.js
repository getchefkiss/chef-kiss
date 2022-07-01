import React from 'react';

import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import packageJson from '../package.json';

import Home from './screens/Home';
import Settings from './screens/Settings';
import Beta from './screens/Beta';
import Search from './screens/Search';

import Chip from './components/chip/chip';
import BottomNav from './components/bottom-nav/bottom-nav';
import { getShowVersionLabel } from './etc/cookie-storage';

function App() {
  return (
    <div className="app flex flex-column">
      <Router basename='/'>
        <Routes>
          <Route exact path='/' element={<Home />} />

          {/* Basic screens */}
          <Route path='/home' element={<Home />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/beta' element={<Beta />} />
          <Route path='/search' element={<Search />} />
        </Routes>

        <BottomNav />
      </Router>

      { getShowVersionLabel() && ( <Chip className='bottom-right' content={packageJson.version.split('-')[0]} /> ) }
    </div>
  );
}

export default App;
