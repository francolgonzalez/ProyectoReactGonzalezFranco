/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
      <nav className='flex justify-around bg-black p-4 w-100 relative'>
        <ul className='flex items-center gap-6 m-0 p-0'>
          <li className='text-4xl font-bold text-white'>
            <a>HMD</a>
          </li>
          <li className='text-xl font-bold text-white '>
            <a>Accesorios</a>
          </li>
          <li className='text-xl font-bold text-white'>
            <a>Suplementos</a>
          </li>
          <li className='text-xl font-bold text-white'>
            <a>Indumentaria</a>
          </li>
          <li className='text-4xl font-bold text-white'>
            <CartWidget/>
          </li>
        </ul>
      </nav>
  )
}

export default NavBar