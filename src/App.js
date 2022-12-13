import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home'
import Navbar from './components/Navbar.js';
import LoginForm from './components/LoginForm.js'
import SigninForm from './components/SigninForm'
import './components/NavbarStyles.css';


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path=''  element ={<Home />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/signin' element={<SigninForm/>} />
    </Routes>
   
    </>
  );
}

export default App;
