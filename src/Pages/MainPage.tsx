import classes from "*.module.css";
import { makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import CreateCard from "../Components/CreateCard";
import TodoCard from "../Components/TodoCard";
import UserCard from "../Components/UserCard";
import { context } from "../Context/Context";

const useStyles = makeStyles({
  mainPage: {
    display: "flex",
    gap: "1rem",
    alignItems: "flex-start",
  },
});

interface todo {
  title: string;
  category: string;
}
const MainPage: React.FC = () => {
  const classes = useStyles();
  const { userInfo } = useContext(context);
  const { todos } = useContext(context);

  return (
    <div className={classes.mainPage}>
      <UserCard />
      <CreateCard />
      {todos.map((todo: todo, i: number) => {
        return <TodoCard key={i} title={todo.title} category={todo.category} />;
      })}
    </div>
  );
};

export default MainPage;
