/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className='flex justify-between bg-black p-4 w-full relative mb-2'>
      <div>
        <Link className='hover:opacity-75' to={"/"}> <img src="../hmd-logo.jpeg" alt="HMD" className='w-28'/> </Link>
      </div>
      <ul className='flex items-center gap-6 m-0 p-0'>
        <li className='text-lg font-bold text-white transition duration-300 ease-in-out hover:text-gray-300'>
          <NavLink className='no-underline text-white' activeClassName='text-gray-300' to={"/category/accesorios"}>Accesorios</NavLink>
        </li>
        <li className='text-lg font-bold text-white transition duration-300 ease-in-out hover:text-gray-300'>
          <NavLink className='no-underline text-white' activeClassName='text-gray-300' to={"/category/suplemento"}>Suplementos</NavLink>
        </li>
        <li className='text-lg font-bold text-white transition duration-300 ease-in-out hover:text-gray-300'>
          <NavLink className='no-underline text-white' activeClassName='text-gray-300' to={"/category/indumentaria"}>Indumentaria</NavLink>
        </li>
        <li className='text-4xl font-bold text-white transition duration-300 ease-in-out hover:text-gray-300'>
          <NavLink className='text-white' to={"/cart"}><CartWidget/></NavLink>
        </li>
      </ul>
    </nav>
  )
}


export default NavBar