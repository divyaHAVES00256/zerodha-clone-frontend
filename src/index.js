import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import SignUpPage from './landing_page/signup/SignUpPage';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/product/ProductPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  //routing setup
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes>
    <Routes>
      <Route path="/signup" element={<div>Hello, World!</div>} />
    </Routes>
    <Routes>
      <Route path="/about" element={<div>Hello, World!</div>} />
    </Routes>
    <Routes>
      <Route path="/product" element={<div>Hello, World!</div>} />
    </Routes>
    <Routes>
      <Route path="/pricing" element={<div>Hello, World!</div>} />
    </Routes>
    <Routes>
      <Route path="/pricing" element={<div>Hello, World!</div>} />
    </Routes>
  </BrowserRouter>

);

