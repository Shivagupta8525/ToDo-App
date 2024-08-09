import React, { useState } from 'react'

function From({setTakeInput,updateVal}) {
    const [value,setValue] =useState("");
    function handleCancel(){
        setTakeInput(false)
    }
    function handleInptChange(e){
        setValue(e.target.value);

    }
    function handleUpdateVal(){
         updateVal(value);

    }
  return (
    <>
    <div className=' border flex flex-col rounded-md pl-4 w-full'>
        <h1 className="text-xl py-5">Create a todo</h1>
      <input type="text" placeholder="Add a New Task" className=' border ' onChange={handleInptChange} value={value}/>
    <div className=' space-x-10 my-5'> 
        <button onClick={handleUpdateVal} className=' bg-blue-500 hover:bg-blue-700 text-white border rounded py-2 px-3'>Save</button>
        <button className=' text-black border rounded py-2 px-3 ' onClick={handleCancel}>Cancel</button>
        </div>
    </div>
    </>
  )
}

export default From;
