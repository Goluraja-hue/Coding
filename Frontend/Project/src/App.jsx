import React from 'react'
import {  Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Product from './Pages/Product.jsx';
import Navbar from './Components/Navbar.jsx';
import Men from './Pages/men.jsx';
import Women from './Pages/Women.jsx';
import AboutAnything from './Pages/AboutAnything.jsx';
import NotFound from './Pages/NotFound.jsx';
import Footer from './Components/Footer.jsx';

const App = () => {

// const allRoutes = createBrowserRouter([
//   {
//     path:'/',
//     element:<Home />
//   },
//   {
//     path:'/Product',
//     element:<Product />,
//     children:[
//       {
//       path:'/Product/Men',
//     element:<Men />,
//       },
//       {
//       path:'/Product/Women',
//     element:<Womenn />,
//       }
//     ]
//   },
// ]) // to use routes with any package  and import these "createBrowserRouter" library module



  return (
    <div className='w-screen h-screen '>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/About/:id' element={<AboutAnything />} />
      <Route path='/Product' element={<Product />} />
      <Route path='/Product/Men' element={<Men />} />
      <Route path='/Product/Women' element={<Women />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>

{/* <RouterProvider element={allRoutes} /> */} // to call Function allroutes
    <Footer />

    </div>
    
  )
}

export default App