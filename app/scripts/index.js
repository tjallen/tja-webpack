// global postcss. tdo future maybe css modules instead?
require('../styles/style.css');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.getElementById('app');

ReactDOM.render(
  <App />,
  rootElement
);
