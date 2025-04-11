import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');

if (!container) {
  throw new Error("Root container not found. Ensure an element with id='root' exists in index.html.");
}

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// You can pass a function here to log web vitals to analytics
reportWebVitals(console.log);