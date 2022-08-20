import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header.js';
import Main from './Main.js'
import Footer from './Footer.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);