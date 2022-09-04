import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './components/UI/StylesGeneral/index.styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App className="app" />
  </React.StrictMode>
);
