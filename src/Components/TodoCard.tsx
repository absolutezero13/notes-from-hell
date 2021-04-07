import { Card, CardHeader, TextField } from "@material-ui/core";

import React from "react";
interface TodoCardProps {
  title: string;
  category: string;
}
const TodoCard: React.FC<TodoCardProps> = ({ title, category }) => {
  return (
    <Card>
      <CardHeader avatar={category.slice(0, 1).toUpperCase()} title={title} />
      <TextField label="What to do?" />
    </Card>
  );
};

export default TodoCard;
