import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { blue, green, grey, pink, red } from "@material-ui/core/colors";
import { AddCircleOutlined, DeleteForeverOutlined } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { context } from "../Context/Context";
import Task from "./Task";

const useStyles = makeStyles({
  card: {
    width: "20rem",

    padding: "2rem",
    display: ({ isChecked, category }: any) => {
      if (category === "friends" && !isChecked.checkedFriends) return "none";

      if (!isChecked.checkedHobbies && category === "hobbies") return "none";
      if (!isChecked.checkedSchool && category === "school") return "none";
      if (!isChecked.checkedWork && category === "work") return "none";
      else {
        return "flex";
      }
    },
    flexDirection: "column",
    flexWrap: "wrap",
  },
  avatar: {
    backgroundColor: ({ category }: any) => {
      if (category === "friends") return green[500];
      if (category === "school") return pink[700];
      if (category === "hobbies") return blue[500];
      if (category === "work") return grey[500];
    },
  },
  content: {
    display: "flex",
    alignItems: "center",
  },
});

interface TodoCardProps {
  title: string;
  category: string;
  isChecked: {};
  setIsChecked: any;
}
const TodoCard: React.FC<TodoCardProps> = ({ title, category, isChecked }) => {
  const classes = useStyles({ category, isChecked });
  const { setTodos } = useContext(context);
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

  const deleteTodo = (title: string) => {
    setTodos((prevTodos: any) => {
      return prevTodos.filter((todo: any) => todo.todoTitle !== title);
    });
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
      <CardContent className={classes.content}>
        <TextField
          value={task}
          onChange={(e) => setTask(e.target.value)}
          label="What to do?"
        />
        <Button onClick={addTask}>
          <AddCircleOutlined />
        </Button>
      </CardContent>
      {tasks.map((task: any) => {
        return <Task key={Math.random()} task={task} setTasks={setTasks} />;
      })}

      <Button onClick={() => deleteTodo(title)}>
        <DeleteForeverOutlined />
      </Button>
    </Card>
  );
};

export default TodoCard;
