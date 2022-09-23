import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './/App/App'
import reportWebVitals from './reportWebVitals';

const router = <BrowserRouter> <React.StrictMode> <App /> </React.StrictMode> </BrowserRouter>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(router);

reportWebVitals();


