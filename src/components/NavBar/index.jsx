import React, {useState} from 'react';
import logo from '../../img/logo.svg';
import {NavLink} from 'react-router-dom';
import './style.css'

const NavBar = () => {
  const [show, setShow] = useState(false)
  const showHandler = () => {
    setShow(!show)
  }
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary px-0 px-lg-5'>

      <div className='container-fluid align-items-center align-items-lg-end'>
        <a className='navbar-brand' href='#'><img src={logo} alt=''/></a>
        <button onClick={showHandler} className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'
                aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className={`collapse navbar-collapse ${show ? 'active' : ''}`}>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <NavLink className='nav-link nav-link-custom ' to='/'>Home</NavLink>{' '}
            </li>
            <li className='nav-item ms-0 ms-lg-5'>
              <NavLink className='nav-link nav-link-custom' to='/about'>About</NavLink>
            </li>
            <li className='nav-item ms-0 ms-lg-5'>
              <NavLink className='nav-link nav-link-custom' to='/blog'>Blog</NavLink>
            </li>

            <li className='nav-item  ms-0 ms-lg-5'>
              <NavLink className='nav-link nav-link-custom' to='/contact'>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;