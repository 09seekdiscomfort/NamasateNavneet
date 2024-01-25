import { useEffect, useState } from 'react';
import logo from '../../assets/Icons/logo.png'
import { Link } from 'react-router-dom';
import useOnlineStatus from './utils/useCustomHooks/useOnlineStatus';
import useBrowserDetection from './utils/useCustomHooks/useBrowserDetection';

const Header = () =>{

    const status = useOnlineStatus();
    // const browserType = useBrowserDetection();

    return(
    <div className='header flex justify-between bg-pink-100 shadow-xl m-2'>
        <img src={logo} className="logoIcon w-36"/>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className='px-4'>{status ? 'Network : ✅' : 'Network : 🔴'}</li> 
                {/* <li>{'Browser Type :' + browserType}</li> */}
                <li className='px-4'>
                   <Link to='/' className='link'>Home</Link> 
                </li>
                <li className='px-4'>
                    <Link to='/about' className='link'>About</Link>
                </li>
                <li className='px-4'>
                    <Link to='/aboutClass' className='link'>AboutClass</Link>
                </li>
                <li className='px-4'>
                    <Link to='/grocery' className='link'>Grocery</Link>
                </li>
                <li className='px-4'>Carrer</li>
                <li className='px-4'>Cart</li>
            </ul>
        </div>
    </div>
    )
};

export default Header;