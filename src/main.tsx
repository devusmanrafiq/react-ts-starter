import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { config } from 'configs/index.ts';

import App from './App.tsx';

import './index.css';

// eslint-disable-next-line no-console
console.log(
  `%cWELCOME TO REACT STARTER\n%cYou are running in ${config.mode} Mode`,
  'font-size: 20px; font-weight: bold; color: #B40F20;', // Style for "1-platform"
  'font-size: 16px; color: #FF5722;' // Style for "You are running in Development Mode"
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
