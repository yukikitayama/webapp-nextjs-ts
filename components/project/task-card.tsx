import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface TaskCardProps {
  task: {
    id: string;
    status: string;
    project: string;
    task: string;
    priority: string;
    startDate?: string;
    dueDate: string;
    labels: string[];
  };
  cardType: string;
};

const TaskCard: React.FC<TaskCardProps> = (props) => {
  const { id, status, project, task, priority, startDate, dueDate, labels } = props.task;

  return (
    <Card sx={{ boxShadow: 3 }}>
      <CardActionArea
        // onClick={
        //   cardType === "project"
        //     ? openUpdateTaskDialogHandler
        //     : navigateToProjectPage
        // }
      >
        <CardContent>
          <Typography variant="subtitle1" component="div">
            {task}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {dueDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {priority}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TaskCard;