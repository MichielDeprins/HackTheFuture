// fetchDrones.tsx
import React, { useEffect, useState } from "react";
import { Animal, Drone } from "../types";
import { FetchDroneWithID } from "./Drone";
import { API_URL } from "../constants";
import { DRONES_API_URL } from "../constants";

function FetchAllDrones() {
  const [allDronesList, setDroneList] = useState<Drone[]>([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(DRONES_API_URL);
      const data: Drone[] = await response.json();
      console.log(data);
      setDroneList(data);
    }
    fetchData();
  }, []);
  return allDronesList;
}

export function FetchDrones() {
  const [fetchedAnimal, setAnimal] = useState<Animal | undefined>();
  console.log("Fetched drones");
  const drones = FetchAllDrones();
  if (fetchedAnimal != undefined) {
    drones.forEach((drone) => {
      const distance = Math.sqrt(
        Math.pow(drone.longitude - fetchedAnimal.longitude, 2) +
          Math.pow(drone.latitude - fetchedAnimal.latitude, 2)
      );

      if (distance <= drone.range) {
        drone.inRange = true;
      } else {
        drone.inRange = false;
      }
    });

    drones.sort((a: Drone, b: Drone) => {
      const aDistance = Math.sqrt(
        Math.pow(a.longitude - fetchedAnimal.longitude, 2) +
          Math.pow(a.latitude - fetchedAnimal.latitude, 2)
      );
      const bDistance = Math.sqrt(
        Math.pow(b.longitude - fetchedAnimal.longitude, 2) +
          Math.pow(b.latitude - fetchedAnimal.latitude, 2)
      );

      if (aDistance > bDistance) {
        return -1;
      }
      if (aDistance < bDistance) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  // return aDistance - bDistance;
  return (
    <div>
      <h1>sorted Drones</h1>
      <ul>
        {drones.length > 0 ? (
          drones.map((drone) => (
            <li>
              <div
                style={{
                  border: "1px solid #000",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                <img
                  src={API_URL + "/" + drone.image}
                  alt={drone.name}
                  style={{ width: "100%" }}
                />
                <h2>{drone.name}</h2>
                <p>Altitude: {drone.altitude}</p>
                <p>Range: {drone.range}</p>
                <p>Longitude: {drone.longitude}</p>
                <p>Latitude: {drone.latitude}</p>
                <p>in range: {drone.inRange}</p>
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
