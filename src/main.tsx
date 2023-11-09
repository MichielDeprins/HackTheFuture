import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FetchAllDrones } from "./assets/DroneAPI.tsx";
import FetchAllAnimals from "./AnimalAPI.tsx";
import MyMap from "./map.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FetchAllAnimals />
    {/* <FetchAllDrones />
    <FetchAllAnimals /> */}
  </React.StrictMode>
);
