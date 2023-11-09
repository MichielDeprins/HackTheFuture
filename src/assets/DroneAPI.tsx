// fetchDrones.tsx
import React, { useEffect, useState } from "react";
import { Drone } from "../types";
import { FetchDroneWithID } from "./Drone";

export function FetchAllDrones() {
  const [allDronesList, setDroneList] = useState<Drone[]>([]);
  const selectedDrone = FetchDroneWithID(1);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.htf-2023.int.icapps-projects.com/drones"
      );
      const data: Drone[] = await response.json();
      console.log(data);
      setDroneList(data);
    }

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount
  return (
    <div>
      <h1>All Drones</h1>
      <ul>
        {allDronesList.length > 0 ? (
          allDronesList.map((drone) => (
            <li>
              {/* <h2>{drone.name}</h2>
              <a>
                <strong>ID:</strong> {drone.id}
              </a> */}
              <div
                style={{
                  border: "1px solid #000",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                <img
                  src={drone.image}
                  alt={drone.name}
                  style={{ width: "100%" }}
                />
                <h2>{drone.name}</h2>
                <p>Altitude: {drone.altitude}</p>
                <p>Range: {drone.range}</p>
                <p>Longitude: {drone.longitude}</p>
                <p>Latitude: {drone.latitude}</p>
              </div>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
}
