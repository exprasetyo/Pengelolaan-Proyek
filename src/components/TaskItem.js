import React from "react";
import { Button } from "@mui/material";

const TaskItem = ({ task, setfetchTasks }) => {
  const updateStatus = (newStatus) => {
    fetch(`https://test-fe.sidak.co.id/api/tasks/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    })
      .then(() => {
        alert("Status tugas berhasil diperbarui!");
        setfetchTasks(true); // Trigger a refresh of the task list
      })
      .catch(() => alert("Gagal memperbarui status."));
  };

  return (
    <div>
      <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={() => updateStatus("In Progress")}
        disabled={task.status === "In Progress" || task.status === "Completed"}
      >
        In Progress
      </Button>
      <Button
        variant="contained"
        sx={{ mt: 2, ml: 1 }}
        onClick={() => updateStatus("Completed")}
        disabled={task.status === "Completed"}
      >
        Completed
      </Button>
    </div>
  );
};

export default TaskItem;
