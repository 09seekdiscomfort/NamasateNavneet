import { useEffect, useState } from 'react';
import logo from '../../assets/Icons/logo.png'
import { Link } from 'react-router-dom';

const Header = () =>{

    return(
    <div className='header'>
        <img src={logo} className="logoIcon"/>
        <div className="headerList">
            <ul>
                <li>
                   <Link to='/' className='link'>Home</Link> 
                </li>
                <li>
                    <Link to='/about' className='link'>About</Link>
                </li>
                <li>Carrer</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    )
};

export default Header;