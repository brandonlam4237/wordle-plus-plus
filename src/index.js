import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ScoreContextProvider } from "./context/ScoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ScoreContextProvider>
    <App />
  </ScoreContextProvider>
);
