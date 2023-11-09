import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FetchAllDrones } from "./assets/DroneAPI.tsx";
// import { FetchDroneWithID } from "./assets/DroneAPI.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FetchAllDrones />
  </React.StrictMode>
);
