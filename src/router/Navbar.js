import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <NavLink to='/'>
            <button className='navbar-btn'>
                Main
            </button>
        </NavLink>
        <NavLink to='/create'>
            <button className='navbar-btn'>
                Add Book
            </button>
        </NavLink>
    </nav>
  )
}
