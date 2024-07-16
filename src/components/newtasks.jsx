import { useState } from "react";


export default function Newtasks({onadd}){

    const[enteredTask,setEnteredTask]=useState('');
    function handlechange(event){
        setEnteredTask(event.target.value);
    }

    function handleclick(){
        if(enteredTask.trim()===''){
            return ;
        }
        onadd(enteredTask);
        setEnteredTask(''); 
    }
    return(
        <div className="flex items-center gap-4">
            <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handlechange} value={enteredTask}/>
            <button  onClick={handleclick}className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
    )
} 