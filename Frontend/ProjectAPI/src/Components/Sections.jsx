import React, { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext';

const Sections = () => {

    const data = useContext(ThemeDataContext)

  return (
    <div className='bg-blue-300 p-5 h-[90%]'>
        <h1 className='text-2xl'>Sections</h1>
        <p>{data}</p>
    </div>
  )
}

export default Sections