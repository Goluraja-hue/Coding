import React, { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext';

const Footer = () => {

    const data = useContext(ThemeDataContext)

  return (
    <div className='bg-gray-600 p-5 absolute bottom-0 w-screen'>
        <h1 className='text-2xl text-white'>Footer</h1>
        <p>{data}</p>
    </div>
  )
}

export default Footer