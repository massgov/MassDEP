import 'react-app-polyfill/ie11';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';

import './assets/mayflower-artifacts/assets/css/index-generated.css';
import './assets/css/app.css';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
