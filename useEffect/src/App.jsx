import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {

const [User, setUser] = useState('')
 const [Num, setNum] = useState(0)
  const getQuote = async () =>{
     const response = await axios.get("https://randomuser.me/api/");
    setUser((response.data.results[0].name.first)+ " " + (response.data.results[0].name.last))
    
  }

  useEffect( function (){
    getQuote();
  },[Num])



  return (
    <div className='main'>
    
     {User}
      
    <button className="btn" onClick={()=>{
      setNum(Num + 1);
    }}>Click</button>
      
    
    </div>
  )
}

export default App