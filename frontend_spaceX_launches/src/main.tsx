import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./AppRoutes";
import GlobalStyle from "./assets/styles/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById("root")
);
