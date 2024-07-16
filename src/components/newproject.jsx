import { useRef } from 'react';
import Input from './Input.jsx';
import Modal from './Errormodal.jsx';

export default function Newproject({onadd,oncancle}){

    const modal=useRef();
    const title=useRef();
    const description=useRef();
    const dueDate=useRef();

    function handleSave(){
const enteredTitle=title.current.value;
const enteredDescription=description.current.value;
const enteredDuedate=dueDate.current.value;

if(enteredTitle.trim()===''||enteredDescription.trim()===''||enteredDuedate.trim()===''){
modal.current.open();
return ;
}
onadd({
  title: enteredTitle,
  description: enteredDescription,
  dueDate:enteredDuedate
})
    }

    return (
        <>
        <Modal ref={modal}>
            <h2 className="text-stone-500 text-xl font-bold my-4 ">Invalid Input</h2>
            <p  className="text-stone-400 mb-4">Oops.... looks like you forgot to enter a value</p>
            <p  className='text-stone-400 mb-4'>Please make sure you provide a valid value</p>
        </Modal>
        <div className="w-[36rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
<li><button className="text-stone-800 hover:text-stone-950" onClick={oncancle}>Cancel</button></li>
<li><button className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button></li>
            </menu>
            <div>
<Input ref={title} label="Title" type="text"/>
<Input ref={description} label="Description" textarea/>
<Input  ref={dueDate} label="Due Date" type="date"/>
             
            </div>

        </div>
        </>
    )
}