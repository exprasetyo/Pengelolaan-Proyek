import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const AddTaskForm = ({ projectId, onTaskAdded }) => {
  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState("To Do");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://test-fe.sidak.co.id/api/projects/${projectId}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: taskName, status }),
    })
      .then(() => {
        alert("Tugas berhasil ditambahkan!");
        onTaskAdded(true); // Trigger a refresh of the task list
      })
      .catch(() => alert("Gagal menambahkan tugas."));
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nama Tugas"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          select
          SelectProps={{ native: true }}
          fullWidth
          required
          sx={{ mb: 2 }}
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </TextField>
        <Button variant="contained" type="submit" fullWidth>
          Tambah Tugas
        </Button>
      </form>
    </Box>
  );
};

export default AddTaskForm;
