import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './components/Footer';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>  
      <Route path="/" element={<Footer />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();




