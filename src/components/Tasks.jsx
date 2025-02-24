import NewTasks from "./NewTasks";

export default function Tasks({onAdd, onDelete, tasks}) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTasks onAdd={onAdd} onDelete={onDelete} />
      {tasks.length === 0 && <p className="text-stone-800 mb-4">
        This Projects does not have tasks yet.
      </p>}
      {tasks.length > 0 && <ul>
        {tasks.map(task => <li key={task.id} className="flex justify-between my-4">
            <span>{task.text}</span>
            <button onClick={() => onDelete(task.id)} className="text-stone-700 hover:texr-red-500">Clear</button>
          </li>)}
      </ul>}
    </section>
  );
}
