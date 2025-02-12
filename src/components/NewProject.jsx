import Input from "./Input";

export default function NewProject(){
    return (
        <div className="w-[35rem] mt-16 " >
            <menu className="flex items-center justify-end gap-4 my-4 ">
                <li>
                    <button className="text-stone-700 hover:text-stone-950">Cancel</button>
                </li>
                <li>
                    <button className="bg-blue-500 py-2 px-6 rounded-md hover:text-stone-700">Save</button>
                </li>
            </menu>   
            <div>
                <Input label="Title" />
                <Input label="Description" textarea/>
                <Input label="Due Date" />
                
            </div>             
        </div>
    );

}