import classes from "*.module.css";
import { Grid, makeStyles } from "@material-ui/core";
import React, { useContext, useState } from "react";
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
  todoTitle: string;
  category: string;
}
const MainPage: React.FC = () => {
  const classes = useStyles();
  const { todos } = useContext(context);
  const [isChecked, setIsChecked] = useState({
    checkedWork: true,
    checkedFriends: true,
    checkedSchool: true,
    checkedHobbies: true,
  });

  return (
    <div className={classes.mainPage}>
      <UserCard isChecked={isChecked} setIsChecked={setIsChecked} />
      <Grid container>
        {todos.map((todo: todo, i: number) => {
          return (
            <TodoCard
              key={i}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              title={todo.todoTitle}
              category={todo.category}
            />
          );
        })}
      </Grid>
      <CreateCard />
    </div>
  );
};

export default MainPage;
