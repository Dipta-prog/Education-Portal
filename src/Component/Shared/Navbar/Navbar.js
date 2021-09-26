import React from 'react';
import logo from '../../../Media/img/Shared-Images/education-portal-logo.jpg';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="nav-area">
            <input type="checkbox" id="box" />
            <label for="box" className="btn-area"><i className="fa fa-align-left"></i></label>
            <label>
                <img src={logo} alt="" className="logo" />
            </label>
            <ul className="nav-links">
                <li><a className='nav-deco' href="#home">Home</a></li>
                <li><a className='nav-deco' href="#about">About</a></li>
                <li><a className='nav-deco' href="#contact">Contact</a></li>
                <li><a className='nav-deco' href="#services">Services</a></li>
                <li><a className='nav-deco' href="#events">Events</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;