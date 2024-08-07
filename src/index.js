// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './GlobalStyles';

ReactDOM.render(
  <GlobalStyles>
    <App />
  </GlobalStyles>,
  document.getElementById('root')
);
