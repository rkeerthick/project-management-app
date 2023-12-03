import React from "react";
import Tasks from "./Tasks";

const SelectedProject = ({
  title,
  description,
  dueDate,
  handleDeleteProject,
  tasks,
  handleAddTask,
  handleDeleteTask,
}) => {
  const formattedDate = new Date(dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem]">
      <header className="pb-4 mb-4 border-b-4 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
          <button
            onClick={handleDeleteProject}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
      </header>
      <Tasks
        handleAddTask={handleAddTask}
        handleDeleteTask={handleDeleteTask}
        tasks={tasks}
      />
    </div>
  );
};

export default SelectedProject;
