import React, { useEffect, useState } from "react";
import Mapview from "../component/selectmap/Maphospital";
import "leaflet/dist/leaflet.css";
import Detailpopup from "../component/selectmap/detailpopup";
import useGeoLocation from "../component/selectmap/Geolocation";

function SelectHonmap() {
  const [modalOn, setModalOn] = useState(false);
  const [detail, setDetail] = useState("");
  const [test, setTest] = useState("");
  const location = useGeoLocation();

  console.log(123, detail);
  return (
    <div>
      {location.load ? (
        <Mapview
          setDetail={setDetail}
          setModalOn={setModalOn}
          modalOn={modalOn}
          test={[location.coordinates.lat, location.coordinates.lng]}
        />
      ) : (
        "location data not available yet "
      )}
      {/* {modalOn&&<ModalDetail setModalOn={setModalOn}/>} */}
      {modalOn && <Detailpopup setModalOn={setModalOn} data={detail} />}
    </div>
  );
}

export default SelectHonmap;
