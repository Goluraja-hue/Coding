import React, { useState } from 'react'
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import Sections from './Components/Sections';
import Footer from './Components/Footer';

const App = () => {

  const [Theme, setTheme] = useState('Light')

  const changeTheme = (newTheme) =>{
    setTheme(newTheme);
  }

  return (
    <div className='bg-gray-400 w-screen h-screen'>
      {/* <h1>This is {Theme}</h1> */}
  {/* <Form changeTheme = {changeTheme} /> */}
    <Navbar />
    <Sections />
    <Footer />
    </div>
  )
}

export default App