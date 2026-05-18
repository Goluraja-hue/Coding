import React from 'react'
import { Outlet } from 'react-router-dom';

const Product = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold  text-black flex items-center justify-center">
            Product Page 🎁
        </h1>

        <Outlet />
    </div>
  )
}

export default Product