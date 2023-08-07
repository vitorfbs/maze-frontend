import './styles.css';

import { initializeApp } from 'firebase/app';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';

import { config } from './config';
import { Router } from './routes';

if ('serviceWorker' in navigator) {
  // && !/localhost/.test(window.location)) {
  registerSW();
}

initializeApp(config.firebaseConfig);

window.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

  root.render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>,
  );
});
