import React from 'react';
import '../styles/Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div id='Header'>
            <div className='myName'>
                <p>Eden Golan</p>
            </div>
            <div className='linkes'>
                <Link to="/" className='linkHome'>Home</Link>
                <Link to="/About" className='linkHome'>About</Link>
                <Link to="/Projects" className='linkHome'>Projects</Link>
                <Link to="/Contact" className='linkHome'>Contact</Link>
            </div>
        </div>
    );
}

export default Header;