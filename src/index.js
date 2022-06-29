import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import packageJson from '../package.json';
import getVersionType from './etc/version-type';
import cookieInit from './etc/cookie-storage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let versionTypeSlider = '';
switch(getVersionType()) {
  case 'Work in progress': versionTypeSlider = '[ (W) T S B P ]'; break;
  case 'Test':             versionTypeSlider = '[ W (T) S B P ]'; break;
  case 'Small change':     versionTypeSlider = '[ W T (S) B P ]'; break;
  case 'Beta':             versionTypeSlider = '[ W T S (B) P ]'; break;
  case 'Production':       versionTypeSlider = '[ W T S B (P) ]'; break;
}

console.log(`--- ${packageJson.name}@${packageJson.version} ---`)
console.log(`Version type: ${versionTypeSlider}`)
console.log(`Password: CKJS_2022_${packageJson.version}`)

cookieInit();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();