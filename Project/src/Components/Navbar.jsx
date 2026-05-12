import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-8 py-4 bg-gray-400'>
        <h3 className="text-2xl text-white ">Golu Blogs</h3>
        <div className='flex justify-between gap-4'>
            <NavLink
            style={({isActive})=>({
              color: isActive ? 'red':'white'
            })}
            className='text-xl font-semibold' to='/'>Home</NavLink>
            <NavLink 
            style={({isActive})=>({
              color: isActive ? 'red':'white'
            })}
            className='text-xl font-semibold' to='/About'>About</NavLink>
            <NavLink 
            style={({isActive})=>({
              color: isActive ? 'red':'white'
            })}
            className='text-xl font-semibold' to='/Product'>Product</NavLink>
        </div>
    </div>
  )
}

export default Navbar