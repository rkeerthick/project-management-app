import React from "react";
import noProject from "../assets/no-projects.png";
import Button from "./Button";

const NoProjectSelected = ({handleAddProject}) => {
  return (
    <div className="w-2/3 mt-24 text-center">
      <img
        className="w-16 h-16 mx-auto object-contain"
        src={noProject}
        alt=""
      />
      <h2 className="text-xl font-bold text-stone-500 my-6">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">Select a project or get started with new one.</p>
      <p className="mt-8">
        <Button onClick={handleAddProject}>Create new project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
