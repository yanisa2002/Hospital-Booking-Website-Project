import React from 'react'
import {
    MapContainer,
    TileLayer,
  } from "react-leaflet";
function Mapview() {
  const defaultCenter =[13,100];
  const defaultZoom = 11;

  return (
    <MapContainer
    center={defaultCenter}
    zoom={defaultZoom}
    scrollWheelZoom={true}
    className=" h-[100vh]"
    
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
   

    {/* <SetMapView mapcenter={Mapcenter} /> */}
  </MapContainer>
  )
}

export default Mapview