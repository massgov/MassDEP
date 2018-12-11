import 'react-app-polyfill/ie11';
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import './assets/mayflower-artifacts/css/index-generated.css';
import './assets/mayflower-artifacts/css/base-theme-generated.css';
import './assets/css/app.css';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
