import noprojectImage from '../assets/no-projects.png';
import Button from './button.jsx';
export default function Noprojectselected({onStartaddproject}){
    return<div className="mt-24 w-2/3 text-center">
        <img src={noprojectImage} alt="an empty task list" className="w-16 h-16 mx-auto object-contain"/>
        <h2 className="text-stone-500 text-xl font-bold my-4 ">No project selected</h2>
        <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
        <p className='mt-8'>
        <Button onClick={onStartaddproject}>Create New Project</Button>
        </p>
    </div>
}