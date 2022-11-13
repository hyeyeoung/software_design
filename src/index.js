import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import KakaoMap from "./pages/KakaoMap"
import reportWebVitals from './reportWebVitals';
import Radio from "./pages/input"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <App />
  <Radio />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
