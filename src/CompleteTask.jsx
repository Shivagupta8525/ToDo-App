import React from 'react'
import { ImCross } from "react-icons/im";
function ThingsDone({thingsDone,AgainDo,removeItem}) {

  
  return (
   <>
    <h1 className='text-xl p-4 font-semibold'>Things Done</h1>
    <div className=' flex flex-col gap-4 ml-2 '>
   {thingsDone.map((p,index)=>{

           return (
            <>
            <div key={index} className='flex ml-2 w-80 gap-4 '>
        <input type="checkbox"  name="inptCheckbox" className='' value="" onChange={()=> AgainDo(index)}></input>
           <p className='grow'>{p}</p>
           <button className="" onClick={()=> removeItem(index)}>
           <ImCross className="text-xl" />
           </button>
           </div>
           </>
           )
      })


    }
    </div>
   </>
  )
}

export default ThingsDone
