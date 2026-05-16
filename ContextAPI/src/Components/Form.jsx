import React, { useState } from 'react'

const Form = (props) => {

    const [newTheme, setnewTheme] = useState('')

  return (
    <div className='flex gap-4'>
        <form onSubmit={(e)=>{
            e.preventDefault();
            props.changeTheme(newTheme);
            setnewTheme('')
        }}>
            <input className='border p-2'
            value={newTheme}
            onChange={(e)=>{
                console.log();
                setnewTheme(e.target.value);
            }} type="text" placeholder='Enter Your Theme' />
            <button className='border p-2'>Submit</button>
        </form>
    </div>
  )
}
export default Form