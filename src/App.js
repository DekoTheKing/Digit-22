import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home'
import Navbar from './components/Navbar.js';
import LoginForm from './components/LoginForm.js'
import './components/NavbarStyles.css';
import DemoForm from './components/DemoForm';
import CoffeeProducts from './components/CoffeeProducts';


function App() {
  return (

    <>
    <Navbar></Navbar>
    <Routes>
      <Route path=''  element ={<Home />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/signup' element={<DemoForm/>} />
      <Route path='/products' element={<CoffeeProducts/>} />
    </Routes>
   
    </>
  );
}

export default App;
