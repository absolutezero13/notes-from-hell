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

const UserCard: React.FC<any> = ({ setIsChecked, isChecked }) => {
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
          onChange={() =>
            setIsChecked((prevChecks: any) => ({
              ...prevChecks,
              checkedWork: !isChecked.checkedWork,
            }))
          }
          control={<Checkbox checked={isChecked.checkedWork} />}
          label="Work"
          value="work"
        />
        <FormControlLabel
          onChange={() =>
            setIsChecked((prevChecks: any) => ({
              ...prevChecks,
              checkedSchool: !isChecked.checkedSchool,
            }))
          }
          control={<Checkbox checked={isChecked.checkedSchool} />}
          label="School"
          value="school"
        />
        <FormControlLabel
          onChange={() =>
            setIsChecked((prevChecks: any) => ({
              ...prevChecks,
              checkedHobbies: !isChecked.checkedHobbies,
            }))
          }
          control={<Checkbox checked={isChecked.checkedHobbies} />}
          label="Hobbies"
          value="hobbies"
        />
        <FormControlLabel
          onChange={() =>
            setIsChecked((prevChecks: any) => ({
              ...prevChecks,
              checkedFriends: !isChecked.checkedFriends,
            }))
          }
          control={<Checkbox checked={isChecked.checkedFriends} />}
          label="Friends"
          value="friends"
        />
      </CardContent>
    </Card>
  );
};

export default UserCard;
