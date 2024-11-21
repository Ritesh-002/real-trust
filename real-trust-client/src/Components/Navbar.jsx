import React from 'react'
import logo from '../assets/logo.svg'; // Import the SVG file
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MenuComponent from './MenuComponent';
import { logout } from '../Redux/Slices/authSlice.js';

const Navbar = () => {
    const { isLoggedIn, roles } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const handleLogoutClick = () => {
        console.log("clicked logout")
        dispatch(logout());
    }
    return (
        <div className='flex justify-around items-center p-[1rem]'>
            <img className='h-10 w-auto' src={logo} alt="Logo" />
            <div className='flex gap-10 items-center'>
                <Link className='hover:text-sky-500' to={'/home'}>Home</Link>
                <Link className='hover:text-sky-500' to={'/about'}>About</Link>
                <Link className='hover:text-sky-500' to={'/contact'}>Contact</Link>
                {isLoggedIn ? <button onClick={() => handleLogoutClick()}>Logout</button> : <Link className='hover:text-sky-500' to={'/login'}>Login</Link>}
                {roles == 'ADMIN' && <MenuComponent/>}
                {!isLoggedIn && <Link className='hover:text-sky-500' to={'/sign-up'}>sign up</Link>}
                <button className='px-[1.5rem] py-[0.5rem] bg-orange-500 text-white font-semibold'>Contact</button>
            </div>
        </div>
    )
}

export default Navbar