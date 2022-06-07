import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./page/Home";
import packageJson from '../package.json';
import PageLock from './page/testing/Page_Lock';
import JSONTest from './page/testing/JSON_Test';

const versionString = `(DEV) ${packageJson.name}@${packageJson.version} 6.7.22`

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path='/chef-kiss/' exact element={<Home />} />

          {/* --- Testing --- */}
          <Route path='/chef-kiss/testing' exact element={<PageLock />} />
          <Route path='/chef-kiss/testing/json' exact element={<JSONTest />} />
        </Routes>
      </Router>      

      <p className='version-string'>{versionString}</p>
    </div>
  );
}

export default App;