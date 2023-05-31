import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import initMocks from './mocks';

if (process.env.NODE_ENV === 'development') {
  await initMocks();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
