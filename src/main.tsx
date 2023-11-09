import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FetchDrones } from "./assets/DroneAPI.tsx";
import FetchAllAnimals from "./AnimalAPI.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FetchDrones />
    <FetchAllAnimals />
  </React.StrictMode>
);
