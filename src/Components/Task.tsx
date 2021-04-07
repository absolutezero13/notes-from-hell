import { Button, Container, Typography } from "@material-ui/core";
import { DeleteOutlineOutlined } from "@material-ui/icons";
import React, { useContext } from "react";
import { context } from "../Context/Context";

interface TaskProps {
  task: {
    text: string;
    id: number;
  };
}
const Task: React.FC<TaskProps> = ({ task }) => {
  const { setTasks } = useContext(context);

  const deleteTask = (id: number) => {
    setTasks((prevTasks: any) => {
      return prevTasks.filter((task: any) => id !== task.id);
    });
  };

  return (
    <Container>
      <Typography variant="h6"> {task.text} </Typography>
      <Button
        onClick={() => deleteTask(task.id)}
        endIcon={<DeleteOutlineOutlined />}
      >
        Remove
      </Button>
      <hr />
    </Container>
  );
};

export default Task;
