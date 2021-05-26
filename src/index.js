import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './routes/routes.js';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);