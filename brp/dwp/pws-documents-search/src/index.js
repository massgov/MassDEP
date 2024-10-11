import 'react-app-polyfill/ie11';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import { createRoot } from 'react-dom/client';

import './assets/mayflower-artifacts/assets/css/index-generated.css';
import './assets/css/app.css';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
