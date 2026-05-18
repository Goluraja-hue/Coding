import React from 'react'
import Navbar from './Components/Navbar';
import Sections from './Components/Sections';
import Footer from './Components/Footer';
import axios from 'axios'




const App = () => {

  const getData = async () =>{
   const response =await axios.get('https://fakestoreapi.com/products');
   console.log(response.data);
  }
 
  getData();


  return (
    <div className='bg-gray-300 w-screen h-screen'>
      <Navbar />
      <Sections />
      <Footer />
    </div>
  )
}

export default App