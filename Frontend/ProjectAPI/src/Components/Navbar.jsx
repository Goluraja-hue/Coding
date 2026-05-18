import React, { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext';

const Navbar = () => {

    const [Theme, setTheme] = useContext(ThemeDataContext)

  return (
    <div className='bg-emerald-300 p-5 flex justify-between'>
        <h1 className='text-2xl'>Navbar</h1>
        <h2>{Theme}</h2>
        <button onClick={()=>{
            if(Theme == 'Light'){
                setTheme('Dark');
            }else{
                setTheme('Light')
            }
        }} className='border p-2 rounded cursor-pointer '>Change Theme</button>
    </div>
  )
}

export default Navbar