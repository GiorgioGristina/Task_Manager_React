import { useRef } from "react";
import { useState } from "react";
import Input from "./Input";

export default function NewProject({onAdd}){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();


    function handleSave(){    
        const enteredDescription = description.current.value;
        const enteredDueDate= dueDate.current.value;
        const enteredTitle = title.current.value;
        
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        })
    }

    return (
        <div className="w-[35rem] mt-16 " >
            <menu className="flex items-center justify-end gap-4 my-4 ">
                <li>
                    <button className="text-stone-700 hover:text-stone-950">Cancel</button>
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
    );

}