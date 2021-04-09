import { Button, Checkbox, Container, Typography } from "@material-ui/core";
import { DeleteOutlineOutlined } from "@material-ui/icons";
import React from "react";

interface TaskProps {
  task: {
    text: string;
    id: number;
  };
  setTasks: (task: any) => void;
}
const Task: React.FC<TaskProps> = ({ task, setTasks }) => {
  const deleteTask = (id: number) => {
    setTasks((prevTasks: any) => {
      return prevTasks.filter((task: any) => id !== task.id);
    });
  };

  return (
    <Container>
      <Typography variant="body1"> {task.text} </Typography>
      <Button
        onClick={() => deleteTask(task.id)}
        endIcon={<DeleteOutlineOutlined />}
      ></Button>
      <Checkbox />
      <hr />
    </Container>
  );
};

export default Task;
