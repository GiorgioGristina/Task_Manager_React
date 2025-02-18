import Button from "./Button";

export default function Sidebar({
  onStartAddProject,
  projects,
  onSelect,
  selectedProjectId,
}) {
  return (
    <aside className="h-full w-1/3 px-8 py-16 bg-blue-500 rounded-r-xl text-stone-50 md:w-72">
      <h1 className="mb-8 font-bold">YOUR PROJECTS</h1>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm  hover:text-stone-200 hover:bg-stone-800";

          if (project.id === selectedProjectId) {
            console.log("is id equal to the select it");
            cssClasses += " bg-stone-900 text-stone-200";
          } else {
            cssClasses += "text-stone-600";
          }

          return (
            <li key={project.id}>
              <button
                onClick={() => onSelect(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
