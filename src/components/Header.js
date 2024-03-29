import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { AuthContext } from '../context/AuthProvider';
import { FaUserAlt, } from "react-icons/fa";
import { useState } from 'react';

const Header = () => {
    const { p, user, logOut } = useContext(AuthContext)
    const [toggle, setToggle] = useState(true)
    const handleToggleDarkmode = () => {
        if (toggle) {
            setToggle(false)
        }
        else {
            setToggle(true)
        }

    }


    return (

        <div className="navbar bg-orange-100 sticky top-0  z-50 px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-orange-100 rounded-box w-52">
                        <li><Link to='/courses'>COURSES</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/blog'>BLOG</Link></li>

                        {
                            user ? <li className='hover:bg-orange-200 rounded-lg'><Link onClick={logOut} >LOG OUT</Link></li> : <li className='hover:bg-orange-200 rounded-lg'><Link to='/login'>LOG IN</Link></li>
                        }
                    </ul>

                </div>
                <Link to='/'><img className='w-10' src={logo} alt="logo" /></Link>
                <Link to='/' className="btn btn-ghost normal-case text-xl font-extrabold">CODE FIRE</Link>

            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-medium">

                    <li className='hover:bg-orange-200 rounded-lg'><Link to='/courses'>COURSES</Link></li>
                    <li className='hover:bg-orange-200 rounded-lg'><Link to='/faq'>FAQ</Link></li>
                    <li className='hover:bg-orange-200 rounded-lg'><Link to='/blog'>BLOG</Link></li>
                    {
                        user ? <li className='hover:bg-orange-200 rounded-lg'><Link onClick={logOut} >LOG OUT</Link></li> : <li className='hover:bg-orange-200 rounded-lg'><Link to='/login'>LOG IN</Link></li>
                    }
                </ul>


            </div>

            <div className='lg:ml-0 ml-8'>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {
                            user ? <img src={user.photoURL || p} title={user?.displayName} alt="" /> : <FaUserAlt className='mt-3 ml-2'></FaUserAlt>
                        }
                    </div>
                </label>
                <div>
                    <input onClick={handleToggleDarkmode} type="checkbox" className="toggle" readOnly checked={toggle} />

                </div>
                <div className='text-sm font-semibold'>
                    {
                        toggle ? <p>Light Mode</p> : <p>Dark Mode</p>
                    }
                </div>
            </div>


        </div >

    );
};

export default Header;