import {
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  makeStyles,
} from "@material-ui/core";

import PersonIcon from "@material-ui/icons/Person";
import React, { useContext, useState } from "react";
import { context } from "../Context/Context";

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    padding: "1rem 1rem",
    height: "100vh",
    backgroundColor: "#f3f3f3",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
  },
  cardHeader: {
    fontWeight: 700,
  },
});

const UserCard = () => {
  const [category, setCategory] = useState("");
  const classes = useStyles();
  const { userInfo } = useContext(context);

  return (
    <Card className={classes.card} elevation={5}>
      <CardHeader
        className={classes.cardHeader}
        avatar={<PersonIcon fontSize="large" />}
        title={`${userInfo.name} ${userInfo.surName}`}
      />
      <CardContent className={classes.cardContent}>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Work"
          value="work"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="School"
          value="school"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Hobbies"
          value="hobbies"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Friends"
          value="friends"
        />
      </CardContent>
    </Card>
  );
};

export default UserCard;
