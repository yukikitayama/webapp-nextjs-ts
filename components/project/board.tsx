import { useState } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

import TaskCard from "./task-card";

const tasks = [
  { id: "0", status: "to-do", project: "web-application", task: "Do A", priority: "medium", dueDate: "2022-12-01", labels: ["typescript"] },
  { id: "1", status: "to-do", project: "web-application", task: "Do A", priority: "medium", dueDate: "2022-12-01", labels: ["typescript"] },
  { id: "2", status: "to-do", project: "web-application", task: "Do A", priority: "medium", dueDate: "2022-12-01", labels: ["typescript"] },
];

const Board = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Grid container spacing={2} direction="row" alignItems="flex-start">
      {isLoading && (
        <Grid item xs={12}>
          <Stack alignItems="center">
            <CircularProgress />
          </Stack>
        </Grid>
      )}
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }} square elevation={3}>
          <Alert
            icon={false}
            severity="warning"
            variant="outlined"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            TO DO
          </Alert>
          {!isLoading && tasks.filter((task) => task.status === "to do").map((task) => (
            <Grid item key={task.id} my={1}>
              <TaskCard task={task} cardType="project"/>
            </Grid>
          ))}
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }} square elevation={3}>
          <Alert
            icon={false}
            severity="info"
            variant="outlined"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            IN PROGRESS
          </Alert>
          {!isLoading &&
            tasks
              .filter((task) => task.status === "in progress")
              .map((task) => (
                <Grid item key={task.id} my={1}>
                  <TaskCard task={task} cardType="project" />
                </Grid>
              ))}
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }} square elevation={3}>
          <Alert
            icon={false}
            severity="success"
            variant="outlined"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            DONE
          </Alert>
          {!isLoading && tasks.filter((task) => task.status === "done").map((task) => (
            <Grid item key={task.id} my={1}>
              <TaskCard task={task} cardType="project" />
            </Grid>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );  
};

export default Board;