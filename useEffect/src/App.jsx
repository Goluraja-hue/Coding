import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {

const [User, setUser] = useState('')

  const getQuote = async () =>{
     const response = await axios.get("https://randomuser.me/api/");
    setUser((response.data.results[0].name.first)+ " " + (response.data.results[0].name.last))
    
  }

  useEffect( function (){
    getQuote();
  },[])



  return (
    <div className='main'>
    
     {User}
      
    <button className="btn" onClick={()=>{
      getQuote();
    }}>Click</button>
      
    
    </div>
  )
}

export default App