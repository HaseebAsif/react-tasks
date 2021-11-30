import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NotificationContext from "./contexts/notificationContext";

ReactDOM.render(
  <NotificationContext>
    <App />
  </NotificationContext>,
  document.getElementById("root")
);
