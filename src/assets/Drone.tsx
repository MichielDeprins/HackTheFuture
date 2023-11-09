import { useEffect, useState } from "react";
import { Drone } from "../types";

type DroneCardProps = {
  drone?: Drone;
};

const DroneCard: React.FC<DroneCardProps> = ({ drone }) => {
  if (!drone) {
    return <div>No drone data available</div>;
  }

  return (
    <div style={{ border: "1px solid #000", margin: "10px", padding: "10px" }}>
      <img src={drone.image} alt={drone.name} style={{ width: "100%" }} />
      <h2>{drone.name}</h2>
      <p>Altitude: {drone.altitude}</p>
      <p>Range: {drone.range}</p>
      <p>Longitude: {drone.longitude}</p>
      <p>Latitude: {drone.latitude}</p>
    </div>
  );
};

export function FetchDroneWithID(id: number) {
  const [drone, setDrone] = useState<Drone>();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.htf-2023.int.icapps-projects.com/drones/" + id
      );
      const data: Drone = await response.json();
      console.log(data);
      setDrone(data);
    }
    fetchData();
  }, [id]);

  return <DroneCard drone={drone} />;
}
