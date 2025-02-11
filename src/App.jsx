import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";


function App() {
  const [newProject, setNewProject] = useState(false);


  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar click={setNewProject}/>
      {newProject && <NewProject></NewProject>}
    </main>
  );
}

export default App;
