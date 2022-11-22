import React, { useState, useEffect } from "react";
import Navbar from "./component/navbar/navbar";
import Navlist from "./component/navbar/navlist";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import BookingMA from "./page/BookingMA";
import StaffManage from "./page/StaffManage";
import SelectHonmap from "./page/SelectHonmap";
import Login from "./page/login";
import Register from "./page/register";
import PatientDetails from "./page/patientDetails";
import QueueHistory from "./page/QueueHistory";
import QueueStatus from "./page/QueueStatus";
import BookingPage from "./page/BookingPage";
import Registration from "./page/Registration";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const hideMenu = () => {
    if (window.innerWidth > 750 && isOpen) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  }, []);

  console.log(isOpen);
  return (
    <div className="font-jamjuree text-uColor-green">
      <Navbar toggle={toggle} />
      <Navlist isOpen={isOpen} toggle={toggle} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/booking-nma" element={<PatientDetails/>} />
        <Route path="/booking-ma" element={<BookingMA />} />
        <Route path="/staff" element={<StaffManage/>} />
        <Route path="/select-hospital" element={<SelectHonmap/>} />
        <Route path="/history" element={<QueueHistory />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/history/:queue_id" element={<QueueStatus/>} />
      </Routes>
    </div>
  );
}

export default App;
