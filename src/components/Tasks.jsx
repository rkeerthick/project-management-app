import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ handleAddTask, handleDeleteTask, tasks }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask
        handleAddTask={handleAddTask}   
      />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any task.
        </p>
      )}
      {tasks.length !== 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-600">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between my-4">
              <span>{task.text}</span>
              <button onClick={() => handleDeleteTask(task.id)} className="text-stone-400 hover:text-red-500">Clear</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
