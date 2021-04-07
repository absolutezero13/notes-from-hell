import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React from "react";
import OpenPage from "./Pages/OpenPage";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./Pages/MainPage";
const theme = createMuiTheme({
  typography: {
    fontFamily: "Quicksand",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <OpenPage />
          </Route>
          <Route exact path="/main-page">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
