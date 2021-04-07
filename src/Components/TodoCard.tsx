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
import React, { useContext, useState } from "react";
import { context } from "../Context/Context";
import Task from "./Task";

const useStyles = makeStyles({
  card: {
    padding: "2rem",
  },
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
  const [tasks, setTasks] = useState<any>([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task) {
      setTasks((prevTasks: Object[]) => [
        ...prevTasks,
        { text: task, id: Math.random() },
      ]);
      setTask("");
    }
  };
  return (
    <Card className={classes.card}>
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
      {tasks.map((task: any) => {
        return <Task key={Math.random()} task={task} setTasks={setTasks} />;
      })}
    </Card>
  );
};

export default TodoCard;
