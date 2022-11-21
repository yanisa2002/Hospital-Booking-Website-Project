import React , { useState } from "react";
import { MapContainer, TileLayer, Marker,useMap,Popup } from "react-leaflet";
import L, { divIcon } from "leaflet";
import useGeoLocation from "./Geolocation";
import demohospital from "../demodata/hospital";
import hospital from "./marker";

function Mapview(props) {
  const {setDetail,setModalOn,test,modalOn} =props
  const userlocation = useGeoLocation();
  const defaultCenter = test;
  const [center, setCenter] = useState([13.45, 100.28]); 
  const defaultZoom = 13;
  const iconPlace = divIcon({
    html: `
    <svg class="h-12 w-12 text-[#E8E8CC]"  fill=" #064635" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>
  `,
    className: "",
    iconSize: [24, 40],
    iconAnchor: [12, 40],
  });
  function SetMapView() {
    const map = useMap();
    // map.setView(mapcenter);
    map.flyTo(center)
    return null;
  }
  
 console.log(test)
  ///hospital
  const markerElements = demohospital.map((location) => {
    const {
        hname,  
        
        coords: { lat, log },
        
    } = location;

    const iconHospital = divIcon({
      html: hospital,
      className: "",
      iconSize: [24, 40],
      iconAnchor: [12, 40],
    });
    
    return (
      
        <Marker 
            key={`${hname}`} 
            position={[lat,log]}                
            icon ={iconHospital}
                     
            eventHandlers={{ click: () =>{ setDetail(hname);setModalOn(true);setCenter([lat,log])}}}

            >
              
          
        </Marker>
       
    );
});

  

  // console.log([userlocation.coordinates.lat, userlocation.coordinates.lng]);
  return (
    <MapContainer
      center={defaultCenter}
      zoom={defaultZoom}
      scrollWheelZoom={true}
      className=" h-[92vh] z-10 h"
    >
      
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {modalOn&&<SetMapView/>}
      {userlocation.load && !userlocation.error && (
        <>
        <Marker
          position={[
            userlocation.coordinates.lat,//-0.01
            userlocation.coordinates.lng,//-0.01
          ]}
          icon={iconPlace}
        >
         
          {/* <Popup>ตำแหน่งของคุณ</Popup> */}
         
        </Marker>
        
        </>
      )}
    {markerElements}
      {/* <SetMapView mapcenter={Mapcenter} /> */}
    </MapContainer>
  );
}

export default Mapview;
