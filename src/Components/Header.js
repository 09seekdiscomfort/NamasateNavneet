import { useEffect, useState } from 'react';
import logo from '../../assets/Icons/logo.png'
import { Link } from 'react-router-dom';
import useOnlineStatus from './utils/useCustomHooks/useOnlineStatus';
import useBrowserDetection from './utils/useCustomHooks/useBrowserDetection';

const Header = () =>{

    const status = useOnlineStatus();
    // const browserType = useBrowserDetection();

    return(
    <div className='header'>
        <img src={logo} className="logoIcon"/>
        <div className="headerList">
            <ul>
                <li>{status ? 'Network : ✅' : 'Network : 🔴'}</li> 
                {/* <li>{'Browser Type :' + browserType}</li> */}
                <li>
                   <Link to='/' className='link'>Home</Link> 
                </li>
                <li>
                    <Link to='/about' className='link'>About</Link>
                </li>
                <li>
                    <Link to='/aboutClass' className='link'>AboutClass</Link>
                </li>
                <li>
                    <Link to='/grocery' className='link'>Grocery</Link>
                </li>
                <li>Carrer</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    )
};

export default Header;