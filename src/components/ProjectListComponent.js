import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";

const ProjectListComponent = ({ setSelectedProject }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://test-fe.sidak.co.id/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Daftar Proyek
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">{project.name}</Typography>
                <Typography variant="body2">{project.description}</Typography>
                <Button
                  variant="contained"
                  onClick={() => setSelectedProject(project)}
                  sx={{ mt: 2 }}
                >
                  Lihat Tugas
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProjectListComponent;
