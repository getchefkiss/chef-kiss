import React from 'react'
import ReactDOM from 'react-dom/client'
import './design/scss/global.scss'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { FirebaseContext } from './screens/context/FirebaseContext'
import data from '../package.json'
import { initCookies } from './etc/cookies'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <FirebaseContext>
      <App />
    </FirebaseContext>
  </React.StrictMode>
)

//initCookies()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
