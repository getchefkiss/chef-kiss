import React from 'react'

import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import SignIn from './screens/acc/SignIn'
import Home from './screens/app/Home'
import AuthCheck from './screens/auth/AuthCheck'

import PageNotFound from './screens/empty/404'

function App() {
  return (
    <div className="">
      <Router basename="/">
        <AuthCheck>
          <Routes>
            <Route path="/acc/sign_in" element={<SignIn />} />

            <Route path="/app/home" element={<Home />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AuthCheck>
      </Router>
    </div>
  )
}

export default App
