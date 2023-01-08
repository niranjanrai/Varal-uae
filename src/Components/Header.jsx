import React from 'react'
import {Ellipse} from '../Assets/Ellipse 21.png'
// import logo from ''
import './Header.css'

const Header = ( ) => {

  return (
    <>
    <div className='container'>
        <div className='logo__container'>
            <p className='logo'>Varal <span>uae</span></p>
        </div>
       <div>
        <ul className='nav__container'>
          <img  alt="" />
            <li className='nav-item ' id='active'> Home</li>
            <li className='nav-item'> Service</li>
            <li className='nav-item'> Pricing</li>
            <li className='nav-item'> About Us</li>
            <li className='nav-item company'> Start a Company</li>
        </ul>
       </div>
    </div>
    </>
  )
}

export default Header