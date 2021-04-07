import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GlobalProvider from "./Context/Context";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
