import React, { useContext } from 'react'
import { UserDataContext } from '../Context/UserContext';


const Sections = () => {

  const data = useContext(UserDataContext)

  return (
    <div className='w-screen h-[90%] bg-white'>
        <h1 className='text-2xl'>All sections</h1>
        {data.map(function(e){
         return <h1>{e.title}</h1>
        })}
    </div>
  )
}

export default Sections