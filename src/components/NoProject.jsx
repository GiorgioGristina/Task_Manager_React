import noproject from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProject({onStartAddProject}){
    return (
        <div className="flex flex-col justify-center items-center mt-24 tex-center w-2/3 my-4">
           <img className="object-contain mx-auto w-16 h-16" src={noproject}  alt="an empty task list"/>
           <h2 className="text-xl font-bold">No Project Selected</h2>
           <p className="text-stone-600 mb-4">Select a project or create one</p>
           <div>
            {/* <button className=" mt-8 py2 px-6 bg-blue-300 w-16 rounded-md hover:text"> Create New Project</button>     */}
            <Button onClick={onStartAddProject} >Create New Project</Button>
           </div>
            
        </div>
    );
}