import React, { useEffect, useState } from "react";
import Mapview from "../component/selectmap/Maphospital";
import "leaflet/dist/leaflet.css";
import Detailpopup from "../component/selectmap/detailpopup";


function SelectHonmap() {
  const [modalOn,setModalOn] = useState(false);
  const [detail,setDetail] = useState('');
  console.log(123,detail)
  return (
    <div>
      {/* {location.load?JSON.stringify(location):"location data not available yet "} */}
      <Mapview setDetail={setDetail} />
      {/* {modalOn&&<ModalDetail setModalOn={setModalOn}/>} */}
      {/* <Detailpopup setModalOn={setModalOn} data={detail}/> */}
    </div>
  );
}

export default SelectHonmap;
