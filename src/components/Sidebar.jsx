import Button from "./Button";

export default function Sidebar({click}){

    function handleClick(){
        click(true);
        console.log(" the form has been open");
    }
    
    return(

        <aside className="h-full w-1/3 px-8 py-16 bg-blue-500 rounded-r-xl text-stone-50 md:w-72">
            <h1 className="mb-8 font-bold">YOUR PROJECTS</h1>
            <div>
                {/* <button onClick={handleClick} className="bg-stone-700 px-4 py-2 rounded-md hover:bg-stone-800 hover:text-stone-100">+ Add Project</button>     */}
                <Button  click={click}>+ Add Project</Button>
            </div>
            <ul></ul>

        </aside>
    );
}