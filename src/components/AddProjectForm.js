import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const AddProjectForm = ({ onProjectAdded }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://test-fe.sidak.co.id/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description }),
    })
      .then((response) => response.json())
      .then(() => {
        setMessage("Proyek berhasil ditambahkan!");
        onProjectAdded(); // Callback to refresh project list
        window.location.reload(); // Reload the page after successful submission
      })
      .catch(() => setMessage("Gagal menambahkan proyek."));
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Tambah Proyek
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nama Proyek"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Deskripsi"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          required
          multiline
          rows={4}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" type="submit" fullWidth>
          Tambah Proyek
        </Button>
      </form>
      {message && (
        <Typography color="primary" sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default AddProjectForm;
