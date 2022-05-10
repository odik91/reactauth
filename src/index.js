import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './common/Header';
import axios from 'axios';

// set main base url
axios.defaults.baseURL = 'http://localhost:8000/api'

// Bearer token for authorization
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
