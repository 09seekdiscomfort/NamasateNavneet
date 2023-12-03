import { useEffect, useState } from 'react';
import logo from '../../assets/Icons/logo.png'

const Header = () =>{

    return(
    <div className='header'>
        <img src={logo} className="logoIcon"/>
        <div className="headerList">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Carrer</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    )
};

export default Header;