import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import "./map.css";
import { Animal } from "./types";

const MyMap = ({ animals }: { animals: Animal[] }) => {
  if (animals.length < 1) {
    return;
  }
  return (
    <MapContainer
      center={[-3.4646412281852252, -62.21588050000003]}
      zoom={12}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {animals.map((p) => (
        <Marker position={[p.latitude, p.longitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MyMap;
