import React from 'react';
import ReactDOM from 'react-dom/client';
import './vendor/normalize.scss';
import './vendor/fonts.scss';
import './index.scss';
import App from './app/app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
