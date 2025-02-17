import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";


function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject(){
    setProjectState(prevState => {
      return {...prevState,
      selectedProjectId: null,
      }
    });
  }
  function handleAddProject(projectData){
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {
      ...prevState,
      projects: [...prevState.projects, newProject],
      
      }
    });
  }
  console.log(projectState);

  let content;

  if (projectState.selectedProjectId === null){
    content = <NewProject  onAdd={handleAddProject}/>;
  }
  else if (projectState.selectedProjectId === undefined){
    content = <NoProject onStartAddProject={handleStartAddProject} />
  }
  
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject}/>    
      {content}

    </main>
  );
}

export default App;
