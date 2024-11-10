import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./Context/Context.jsx"; //import context provider content from context folder

ReactDOM.createRoot(document.getElementById("root")).render(
  // remove react strict mode and add context provider tag
  <ContextProvider>
    <App />
  </ContextProvider>
);
