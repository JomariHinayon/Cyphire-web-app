import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav id='navbar-section'>
      <div className='flex flex-row mb-10 px-2 py-0 just justify-between items-center'>
        <div>
          <Link to="/">
            <img src={Logo} width="220" alt='Logo'/>
          </Link>
        </div>
        <div className='w-1/2'>
          <ul className='flex flex-rows gap-10 text-lg'>
            <li className=''>
              <Link className='focus:bg-black focus:text-white p-2' to="/">HOME</Link>
            </li>
            <li className=''>
              <Link className='focus:bg-black focus:text-white p-2' to="about">ABOUT US</Link>
            </li>
            <li className=''>
              <Link className='focus:bg-black focus:text-white p-2' to="login">LOG IN</Link>
            </li>
            <li className=''>
              <Link className='focus:bg-black focus:text-white p-2' to="signup">SIGN UP</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar