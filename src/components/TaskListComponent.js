import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import TaskItem from "./TaskItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const TaskListComponent = ({ projectId, fetchTasksrefresh, setfetchTasks }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    fetch(`https://test-fe.sidak.co.id/api/projects/${projectId}/tasks`)
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  };

  useEffect(() => {
    if (projectId) {
      fetchTasks();
    }
  }, [projectId]);

  useEffect(() => {
    if (fetchTasksrefresh) {
      fetchTasks();
    }
  }, [fetchTasksrefresh]);

  return (
    <div>
      <Box marginBottom={3}>
        <Grid container alignItems="right" justifyContent="space-between">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => window.location.reload()}
              startIcon={<ArrowBackIcon />}
              style={{
                textTransform: "none",
                fontWeight: "bold",
                color: "white",
                backgroundColor: "gray",
              }}
            >
              Back
            </Button>
          </Grid>
          <Grid item xs>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              style={{ textAlign: "left", marginLeft: "16px" }}
            >
              Tugas dalam Proyek
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2}>
        {tasks.map((task) => (
          <Grid item key={task.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">{task.name}</Typography>
                <TaskItem task={task} setfetchTasks={setfetchTasks} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TaskListComponent;
