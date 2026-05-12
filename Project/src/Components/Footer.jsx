import React from 'react'
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate(); // use to onclick btn and redirect to product page

  return (
    <div>
       <div className='flex absolute w-full justify-between p-10 bottom-0'>
         <h3 className="text-3xl font-bold  text-black flex">Footer</h3>
        <button onClick={()=>{
            navigate('/Product/Men')
        }} className='px-2 py-2 bg-cyan-300 active:scale-95 cursor-pointer border text-xl font-semibold '>Explore Product</button>
       </div>
    </div>
  )
}

export default Footer