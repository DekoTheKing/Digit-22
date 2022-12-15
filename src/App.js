import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home'
import Navbar from './components/Navbar.js';
import LoginForm from './components/LoginForm.js'
import './components/NavbarStyles.css';
import DemoForm from './components/DemoForm';
import Imageslider from './components/Imageslider';
import { SliderData } from './components/SliderData';


function App() {
  return (

    <>
    <Navbar></Navbar>
    {/* <Imageslider slides={SliderData}/> */}
    
    <Routes>
      <Route path=''  element ={<Home />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/signup' element={<DemoForm/>} />
      {/* <Route path='/ImageSlider' element={<Imageslider/>}/> */}
    </Routes>
    <Imageslider slides={SliderData}/>
    </>
  );
}

export default App;
