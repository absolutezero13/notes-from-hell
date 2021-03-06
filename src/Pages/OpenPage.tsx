import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { ArrowForwardIos } from "@material-ui/icons";
import { userInfo } from "node:os";

import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { context } from "../Context/Context";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  subContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "10rem",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginBottom: "2rem",
  },
});

const OpenPage: React.FC = () => {
  const classes = useStyles();
  const [name, setName] = useState<string>("");
  const [surName, setSurName] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { setUserInfo, userInfo } = useContext(context);
  const history = useHistory();

  useEffect(() => {
    if (userInfo.name && userInfo.surName) {
      setIsLoggedIn(true);
      setTimeout(() => {
        history.push("/main-page");
      }, 1500);
    }
  }, []);

  const submitHandler = (e: any) => {
    e.preventDefault();
    setUserInfo({
      name,
      surName,
    });

    history.push("/main-page");
  };

  return (
    <Container className={classes.container} maxWidth="lg">
      <Typography style={{ marginBottom: "5rem" }} variant="h3">
        Welcome to the best todo application!
      </Typography>
      <form onSubmit={submitHandler} className={classes.subContainer}>
        <TextField
          value={name}
          id="standard-basic"
          className={classes.input}
          required
          label="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          value={surName}
          id="standard-basic"
          className={classes.input}
          onChange={(e) => setSurName(e.target.value)}
          required
          label="Surname"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIos />}
        >
          Let's Go!
        </Button>
      </form>
      {isLoggedIn && (
        <Typography variant="body1">
          ALREADY LOGGED IN. REDIRECTING...
        </Typography>
      )}
    </Container>
  );
};

export default OpenPage;
