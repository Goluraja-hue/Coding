import React, {  useState } from 'react'

const Contact = () => {


    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Mobile, setMobile] = useState('');
    const [Image, setImage] = useState('');
   const [allUsers, setallUsers] = useState('')
   
    


    const submitHandler = (e)=>{
        e.preventDefault();
        
        const oldUser = [...allUsers]
        oldUser.push({Name,Email,Mobile,Image})
        


        setallUsers(oldUser);
        

        setName(' ')
        setEmail(' ')
        setMobile(' ')
        setImage(' ')
        
    }

  return (

    <div className='flex gap-25'>
    <div className='w-50 h-100 rounded-[10px] bg-gray-400'>
        <div className='border w-48 mt-2 h-95 p-1 ml-1 mr-0.5 rounded'>
                <form onSubmit={(e)=>{
                    submitHandler(e);
                }} className='flex flex-col gap-5 mt-5'>
                    <input onChange={(e)=>{
                        setName(e.target.value);
                        
                    }} className='border outline-0 p-1 pl-1.5 rounded ' type="text" placeholder='Enter Your Name' value={Name} />

                    <input onChange={(e)=>{
                        setEmail(e.target.value);
                        
                    }} className='border outline-0 p-1 pl-1.5 rounded ' type="email" placeholder='Enter Your Email' value={Email} />

                    <input onChange={(e)=>{
                        setMobile(e.target.value);
                        
                    }} className='border outline-0 p-1 pl-1.5 rounded ' type='text' placeholder='Enter Your Mobile No.' value={Mobile} />

                    <input onChange={(e)=>{
                        setImage(e.target.value);
                        
                    }} className='border outline-0 p-1 pl-1.5 rounded ' type='text' placeholder='Enter Image Url' value={Image} />
                    <button className='border  w-fit p-1 rounded cursor-pointer bg-green-300 active:scale-[.90] ' >Submit</button>
                </form>
        </div>
   </div>

       <div className='text-black'>
        <div className='w-50 h-100 rounded-[10px] bg-gray-400'>
            <nav className='w-full h-10  rounded-t-[10px] flex justify-between px-2 py-3  '>
                    <h2>Contacts</h2>
                    <div className='flex gap-2.5'>
                    <p><i className="ri-checkbox-fill"></i></p>
                    <p><i className="ri-search-line"></i></p>
                    <p><i className="ri-more-2-line"></i></p>
                    </div>
            </nav>

            <main className='border w-48 mt-2 h-86 p-2 ml-1 mr-0.5 rounded bg-amber-700   '>
                
             {allUsers.map(function(){
                return  <h1>Golu</h1>
             })}


{/* <div key={idx} className='flex pl-1 gap-2 items-center border '>
                    <div><img src={elem.Image} alt="" className='w-10 rounded-2xl h-8' /></div>
                        <div className='flex flex-col p-0.5 gap-0'>
                        <p className='text-[10px]  '> {elem.Name} </p>
                        <p className='text-[9px]  '>  {elem.Email} </p>
                        <p className='text-[9px]  '> {elem.Mobile} </p>
                       
                    </div> 
                    <div>
                        <i className="ri-more-2-line"></i>
                    </div>
               
                </div>
                  */}
      

            </main>
        </div>
    </div>

    </div>
    )
    
}

export default Contact