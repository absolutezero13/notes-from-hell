import {
  Button,
  Checkbox,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { DeleteOutlineOutlined } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles({
  container: {
    display: "flex",
    borderBottom: "1px solid grey",
    alignItems: "center",
  },
  text: {
    marginRight: "auto",
  },
});

interface TaskProps {
  task: {
    text: string;
    id: number;
  };
  setTasks: (task: any) => void;
}
const Task: React.FC<TaskProps> = ({ task, setTasks }) => {
  const classes = useStyles();

  const deleteTask = (id: number) => {
    setTasks((prevTasks: any) => {
      return prevTasks.filter((task: any) => id !== task.id);
    });
  };

  return (
    <Container className={classes.container}>
      <Typography className={classes.text} variant="body1">
        {" "}
        {task.text}{" "}
      </Typography>
      <Button
        onClick={() => deleteTask(task.id)}
        endIcon={<DeleteOutlineOutlined />}
      ></Button>
      <Checkbox />
    </Container>
  );
};

export default Task;
