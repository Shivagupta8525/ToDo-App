import React from 'react';

function Remaning({toDoVal,onDone}) {

  return (
    <>

      <h1 className='text-xl p-4 font-semibold'>Things to Do</h1>
      <div className='ml-4 w-96'>
      {toDoVal.map((p,index)=>{

           return (
            <>
            <div key={index} className='flex ml-2 gap-4'>
        <input type="checkbox" name="inptCheckbox" value="" onChange={()=> onDone(index)}></input>
           <p className=''>{p}</p>
           </div>
           </>
           )
      })


    }
    </div>
    </>
  )
}

export default Remaning;
