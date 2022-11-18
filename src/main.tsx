import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
