import { useEffect, useState } from 'react'
import Navbar from './Header'
import  Form from './Form'
import Remaining from './RemaninigTask'
import  Complete from './CompleteTask'
 

function App() {
 const [takeInput,setTakeInput]=useState(false)
 const Data=localStorage.getItem("toDoTask")||"[]"
 const storedData=JSON.parse(Data)
 const [toDo,setToDo]=useState(storedData)
 const [Done,setDone]=useState([])
 function setComponent(){
     setTakeInput(true)
 }
 function updateVal(newVal){
   console.log(newVal.length);
   if(newVal.length>0){
     const newToDo=[...toDo,newVal]
   setToDo(newToDo)

   setTakeInput(false);
   }

 }
 useEffect(()=>{
   const setToDoItem=JSON.stringify(toDo)
   localStorage.setItem("toDoTask",setToDoItem)
 },[toDo])

 function onDone(index){
     const newDo=[...toDo]
       const completed=newDo.splice(index,1)[0]
       setToDo(newDo)
       setTimeout(() => {
         setDone([...Done, completed]);
       }, 100);
 }
 function handleAgainDo(index){
       const againDo=Done.splice(index,1)[0]
       setTimeout(() => {
         setToDo([...toDo, againDo]);
       }, 100);
 }
 function handleRemoveItems(index){
   const newDone=[...Done]

   newDone.splice(index,1)


   setDone(newDone)
 }

   return (
     <div className="max-w-7xl mx-auto">   
     <Navbar></Navbar>
       <hr/>
     <div className='flex flex-col justify-start items-start'>
     <h1 className='text-3xl my-6 p-4 font-bold'>Things to get Done</h1> 

     <Remaining toDoVal={toDo} onDone={onDone}/>
 {takeInput?(< Form setTakeInput={setTakeInput} updateVal={updateVal} /> ):
     <button onClick={setComponent} className='border border-black rounded-2xl py-1 px-3 mt-4 ml-2 bg-blue-300 hover:bg-blue-500'>+ Add a todo</button>
   }

   < Complete thingsDone={Done} AgainDo={handleAgainDo} removeItem={handleRemoveItems}/>
   </div>
     </div>
   )
 }


 export default App
