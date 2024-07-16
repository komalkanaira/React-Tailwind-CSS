import Tasks from "./tasks.jsx";

export default function Selectedproject({project,onDelete,onAddtask,onDeletetask,tasks}){

const formattedDate=new Date(project.dueDate).toLocaleDateString('en-US',{
    year:'numeric',
    day:'numeric',
    month:'short'
});

    return (
        <div className="w-[35rem] mt-16"> 
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h2>
                    <button  onClick={onDelete} className="text-stone-600 hover:text-stone-950">Delete</button>
                </div>
                <p className="mb-4 text-stone-600">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Tasks onAddt={onAddtask} onDeletet={onDeletetask} tasks={tasks} />
        </div>
    )
}