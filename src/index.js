import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import backgroundHeader from '../src/images/header.jpg';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App
    style={{backgroundImage:`url(${backgroundHeader})` ,backgroundRepeat:"no-repeat" ,backgroundSize:"contain", width: '100vw', }}
    ></App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
