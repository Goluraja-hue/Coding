import React, { useState } from 'react'
const App = () => {


const [Name, setName] = useState('');
const [Role, setRole] = useState('');
const [Desc, setDesc] = useState('');
const [Image, setImage] = useState('');
const [User, setUser] = useState([])


const submitHandler = (e)=>{
  e.preventDefault();

  const allUsers = [...User];
  allUsers.push({Name,Role,Desc,Image});
  setUser(allUsers);


  setName('');
  setRole('');
  setDesc('');
  setImage('');
}

  const deleteHandler = (idx)=>{
    const copyUser = [...User];
    copyUser.splice(idx,1)

    setUser(copyUser)
  
  }

  return (
    <div className='p-5 h-screen  bg-black   text-white'>
      
    <div className='flex flex-wrap  '>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className=' flex flex-2  flex-col gap-3 m-5   '>
        <input onChange={(e)=>{
         setName(e.target.value);
        }}
         className='border p-1.5 rounded ' value={Name}  type="text" placeholder='Enter your Name'/>


        <input onChange={(e)=>{
          setRole(e.target.value)
        }}
         className='border p-1.5 rounded ' value={Role}  type="text" placeholder='Enter your Role'/>


        <input onChange={(e)=>{
          setDesc(e.target.value)
        }}
        className='border p-1.5 rounded ' value={Desc} type="text" placeholder='Enter your Description'/>


        <input onChange={(e)=>{
          setImage(e.target.value)
        }}
        className='border p-1.5 rounded ' value={Image} type="text" placeholder='Enter your Image Url'/>


        <button className='border font-semibold active:scale-90 cursor-pointer bg-green-500 p-1.5 rounded '>Submit</button>
      </form>
    </div>

<div className='flex flex-wrap gap-3'>
        {User.map((elem,idx)=>{
          return <div key={idx} className='w-60 ml-5 flex flex-col   text-center rounded border p-3 items-center justify-center bg-black '>
              <img className='w-22 rounded-4xl h-20  object-center' src={elem.Image} alt="" />
        <h2 className=' font-semibold mt-1.5 '>{elem.Name}</h2>
        <h6 className=' text-blue-400 '>{elem.Role}</h6>
        <p className='text-gray-400 text-[12px] '>{elem.Desc}</p>
        <button  onClick={()=>{
          deleteHandler(idx);
        }}
        className='border p-1.5 rounded bg-red-600 active:scale-95 cursor-pointer font-semibold tracking-wide mt-1'>Remove</button>
            </div>
        
  
        })}
</div>
    
      
    </div>
  )
}

export default App
