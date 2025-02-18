import Button from "./button"
import Newtasks from "./newtasks"

export default function Tasks({onAddt,onDeletet,tasks}){
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">
          Tasks
            </h2>
<Newtasks onadd={onAddt} />
         {tasks.length===0&&<p className="text-stone-800 my-4">
This project doesnot have any tasks yet.
            </p>} 
            { tasks.length>0&&<ul className="p-4 mt-8 rounded-md bg-stone-100 ">
                {tasks.map((task)=><li  className="flex justify-between my-4" key={task.id}>
                    <span>{task.text}</span>
                    <button onClick={()=>onDeletet(task.id)} className="text-stone-700 hover:text-stone-500">Clear</button>
                    </li>)}
                </ul>}
        </section>

    )
}