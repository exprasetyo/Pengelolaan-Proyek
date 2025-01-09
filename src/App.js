import React, { useState } from "react";
import ProjectListComponent from "./components/ProjectListComponent";
import AddProjectForm from "./components/AddProjectForm";
import TaskListComponent from "./components/TaskListComponent";
import AddTaskForm from "./components/AddTaskForm";
function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [fetchTasks, setfetchTasks] = useState(false);

  const handleProjectAdded = () => {
    setSelectedProject(null); // Reset selection to show project list again
  };

  return (
    <div style={{ padding: "20px" }}>
      {!selectedProject && (
        <AddProjectForm onProjectAdded={handleProjectAdded} />
      )}
      {selectedProject ? (
        <>
          <TaskListComponent
            projectId={selectedProject.id}
            fetchTasksrefresh={fetchTasks}
            setfetchTasks={setfetchTasks}
          />
          <AddTaskForm
            projectId={selectedProject.id}
            onTaskAdded={setfetchTasks}
          />
        </>
      ) : (
        <ProjectListComponent setSelectedProject={setSelectedProject} />
      )}
    </div>
  );
}

export default App;
