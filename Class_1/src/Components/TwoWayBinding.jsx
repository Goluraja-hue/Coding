import React, { useState } from 'react'

const TwoWayBinding = () => {

    const [Name, setName] = useState("");
    const [newUSer, setnewUSer] = useState([]);



    function submitHandler(e){
    e.preventDefault();
    
    const newAllUser = [...newUSer];
    newAllUser.push(Name);
    console.log(newAllUser);
    setnewUSer(newAllUser);

    setName('');
    }
  return (
    <div>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
            <input type="text"  placeholder='Enter Your Name' value={Name} onChange={(e)=>{
                setName(e.target.value);
            }} />
            <button>Submit</button>
        </form>
        {newUSer.map((elem)=>{
            return <h1>{elem}</h1>
        })}
    </div>
  )
}

export default TwoWayBinding