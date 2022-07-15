import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBmovgZ13LX0N3dRluOlD8KFqddF9kGZ9g",
  authDomain: "proyecto-reactjs-37750.firebaseapp.com",
  projectId: "proyecto-reactjs-37750",
  storageBucket: "proyecto-reactjs-37750.appspot.com",
  messagingSenderId: "197113808581",
  appId: "1:197113808581:web:f95b51db717334c89c92ac"
};
initializeApp(firebaseConfig);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
