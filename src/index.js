import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/HomePage';

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

