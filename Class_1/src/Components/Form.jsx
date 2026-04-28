import React from 'react'

const Form = () => {

function submitHandler(e){
    e.preventDefault();
    console.log("Form submitted");
}


  return (
    <div>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
            <input type="text" />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form