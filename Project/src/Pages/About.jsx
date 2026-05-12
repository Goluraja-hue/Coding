import React from 'react'
import { Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold  text-black flex items-center justify-center">
            About Page 🤗
        </h1>

        <Outlet />
    </div>
  )
}

export default About