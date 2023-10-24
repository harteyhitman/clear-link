import React from 'react'
import ClearLinkLogoNav from '../Assets/clearlink-logo.png'
import Button from './Button';
import NavSelect from './NavSelect';

const Navbar = () => {

    const handleClick = () => {
        alert('Button clicked!');
      };

      
  return (
    <nav className='navbar-container'>
        <div className="clearlink-logo-nav"><img src={ClearLinkLogoNav} alt="" /></div>
        <div className="navbar-list">
            <NavSelect />
        </div>
        <div className="nav-button">
        <Button label="Talk to sales" onClick={handleClick} className="custom-button" />
        <Button label="Sign up for free" onClick={handleClick} className="custom-button blue-btn" />
        </div>
    </nav>
  )
}

export default Navbar