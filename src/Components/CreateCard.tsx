import {
  Button,
  Card,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { AddCircleOutlined } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { context } from "../Context/Context";

const useStyles = makeStyles({
  card: {
    padding: "2rem",
  },
});

const CreateCard = () => {
  const { setTodos } = useContext(context);
  const classes = useStyles();
  const [category, setCategory] = useState("");
  const [todoTitle, setTodoTitle] = useState("");

  const submitHandler = (e: any) => {
    e.preventDefault();

    if (category) {
      const newTodo = { todoTitle, category };
      setTodos((prevTodos: any) => [...prevTodos, newTodo]);
      setTodoTitle("");
      setCategory("");
    }
  };

  return (
    <Card className={classes.card}>
      <CardHeader title="New Project" />
      <form onSubmit={submitHandler}>
        <FormControl>
          <TextField
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
            required
            label="Project Title"
          />
          <FormLabel style={{ marginTop: "2rem" }}> Category </FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel control={<Radio />} value="work" label="Work" />
            <FormControlLabel
              control={<Radio />}
              value="school"
              label="School"
            />
            <FormControlLabel
              control={<Radio />}
              value="hobbies"
              label="Hobbies"
            />
            <FormControlLabel
              control={<Radio />}
              value="friends"
              label="Friends"
            />
          </RadioGroup>
          <Button type="submit">
            <AddCircleOutlined fontSize="large" />
          </Button>
        </FormControl>
      </form>
    </Card>
  );
};

export default CreateCard;
