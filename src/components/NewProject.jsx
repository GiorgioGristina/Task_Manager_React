import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({onAdd, onCancel}){
    const modal = useRef();
    
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();


    function handleSave(){    
        const enteredDescription = description.current.value;
        const enteredDueDate= dueDate.current.value;
        const enteredTitle = title.current.value;

        if (enteredDescription.trim() === '' || enteredTitle.trim() === '' || enteredDueDate.trim() === ''){
            // show error modal
            modal.current.open();
            return
        }
        
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        })
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Close"> 
                <h2 className="text-xl font-bold">Invalid Input</h2>
                <p lassName="text-stone-600 mb-4">Oops ... look like you fotgot to enter a value.</p>
                <p lassName="text-stone-600 mb-4">Please make sure to provide a valid value for every input field.</p>
            </ Modal>
            <div className="w-[35rem] mt-16 " >
                <menu className="flex items-center justify-end gap-4 my-4 ">
                    <li>
                        <button onClick={onCancel} className="text-stone-700 hover:text-stone-950">Cancel</button>
                    </li>
                    <li>
                        <button onClick={handleSave} className="bg-blue-500 py-2 px-6 rounded-md hover:text-stone-700">Save</button>
                    </li>
                </menu>   
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={description} label="Description" textarea/>
                    <Input type="date" ref={dueDate} label="Due Date" />
                    
                </div>             
            </div>
        </>

    );

}