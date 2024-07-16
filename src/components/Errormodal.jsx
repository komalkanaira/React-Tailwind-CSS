import {createPortal} from 'react-dom';
import { forwardRef,useImperativeHandle,useRef } from 'react';


const Modal =  forwardRef(function Errormodal({children},ref){

    const dialog=useRef();
    useImperativeHandle(ref,()=>{
        return {
            open(){
dialog.current.showModal();
            }
        };
    });

    return    createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">{children}
    <form method="dialog">
        <button>Close</button> 
    </form>
     </dialog>
,document.getElementById('modal-root')
);
});

export default Modal;