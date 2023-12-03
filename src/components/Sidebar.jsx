import React from "react";
import Button from "./Button";

const Sidebar = ({ handleAddProject, projects, handleSelectProject, selectedProjectId }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="font-bold mb-8 uppercase md: text-xl text-stone-200">
        Your Project
      </h2>
      <div>
        <Button onClick={handleAddProject}>Add Project +</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
            let cssClass = "w-full text-left px-2 py-1 rounded-sm hover:text-stone-200"
            if(project.id === selectedProjectId) {
                cssClass += "bg-stone-400 text-stone-200"
            }
            else {
                cssClass += " text-stone-400"
            }
          return (
            <li key={project.id}>
              <button
                onClick={() => handleSelectProject(project.id)}
                className={cssClass}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
