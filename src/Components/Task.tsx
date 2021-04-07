import { Button, Container, Typography } from "@material-ui/core";
import { DeleteOutlineOutlined } from "@material-ui/icons";
import React from "react";

interface TaskProps {
  task: string;
}
const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <Container>
      <Typography variant="h6"> {task} </Typography>
      <Button endIcon={<DeleteOutlineOutlined />}> Remove </Button>
      <hr />
    </Container>
  );
};

export default Task;
