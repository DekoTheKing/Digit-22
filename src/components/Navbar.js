import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
//import {} from 'react-icons';
import './NavbarStyles.css';
import "./LoginForm.css";


const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


  return (
    <div className='header'>
      <Link to='/'><h1>GrabYourCoffee</h1></Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>  
            <a href='#about-us'>About us-n</a> 
        </li>
        <li>
            <Link to='/products'>Products</Link>
        </li>
        <li>
            <Link to='/contacts'>Contact</Link>
        </li>

        <li>
          <button id='buy_button'><Link to='/signup'>Buy</Link> </button>
            
        </li>

      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: '#fff'}}/>) : ( <FaBars size={20} style={{color: '#fff'}}/>)}
       
      </div>
    </div>
  )
}

export default Navbar;
