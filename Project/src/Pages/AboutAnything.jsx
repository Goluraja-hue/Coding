import React from 'react'
import { useParams } from 'react-router-dom';

const AboutAnything = () => {

    const params = useParams()

  return (
    <div>
        <h2 className="text-3xl font-bold mt-4  text-black flex items-center justify-center">
           {params.id} About Page 🚞
        </h2>
    </div>
  )
}

export default AboutAnything