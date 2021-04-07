import {
  Avatar,
  Button,
  Card,
  CardHeader,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { blue, green, grey, pink, red } from "@material-ui/core/colors";
import { AddCircleOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import Task from "./Task";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: ({ category }: any) => {
      if (category === "friends") return green[500];
      if (category === "school") return pink[700];
      if (category === "hobbies") return blue[500];
      if (category === "work") return grey[500];
    },
  },
});

interface TodoCardProps {
  title: string;
  category: string;
}
const TodoCard: React.FC<TodoCardProps> = ({ title, category }) => {
  const classes = useStyles({ category });
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task) {
      setTasks((prevTasks: string[]) => [...prevTasks, task]);
      setTask("");
    }
  };
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {category.slice(0, 1).toUpperCase()}
          </Avatar>
        }
        title={title}
      />
      <TextField
        value={task}
        onChange={(e) => setTask(e.target.value)}
        label="What to do?"
      />
      <Button onClick={addTask}>
        <AddCircleOutlined />
      </Button>
      {tasks.map((task) => {
        return <Task task={task} />;
      })}
    </Card>
  );
};

export default TodoCard;
