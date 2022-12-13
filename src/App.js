import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home'
import Navbar from './components/Navbar.js';
import './components/NavbarStyles.css';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='/' element ={<Navbar />} />
    </Routes>
    </>
  );
}

export default App;
