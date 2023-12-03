import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddProject = () => {
    setProjectState((prev) => {
      return { ...prev, selectedProject: null };
    });
  };

  const addProject = (newProject) => {
    const ID = Math.random();
    const project = {
      ...newProject,
      id: ID,
    };
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProject: undefined,
        projects: [...prev.projects, project],
      };
    });
  };

  const handleCancelProject = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProject: undefined,
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProject: id,
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProject: undefined,
        projects: prev.projects.filter(
          (project) => project.id !== prev.selectedProject
        ),
      };
    });
  };

  const handleAddTask = (task) => {
    setProjectState((prev) => {
      const newTask = {
        text: task,
        projectId: projectState.selectedProject,
        id: Math.random(),
      };
      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
  };

  const handleDeleteTask = (taskId) => {
    setProjectState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((task) => task.id !== taskId),
      };
    });
  };

  const projectDetails = projectState.projects.find(
    (project) => project.id === projectState.selectedProject
  );

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        handleAddProject={handleAddProject}
        projects={projectState.projects}
        handleSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProject}
      />
      {projectState.selectedProject === null && (
        <NewProject
          addProject={addProject}
          handleCancelProject={handleCancelProject}
        />
      )}
      {projectState.selectedProject === undefined && (
        <NoProjectSelected handleAddProject={handleAddProject} />
      )}
      {projectState.selectedProject && (
        <SelectedProject
          title={projectDetails.title}
          description={projectDetails.description}
          dueDate={projectDetails.dueDate}
          handleDeleteProject={handleDeleteProject}
          handleAddTask={handleAddTask}
          handleDeleteTask={handleDeleteTask}
          tasks={projectState.tasks}
        />
      )}
    </main>
  );
}

export default App;
