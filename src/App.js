import React, { useState, useEffect } from "react";
import Navbar from "./component/navbar/navbar";
import Navlist from "./component/navbar/navlist";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import QueueHistory from "./page/QueueHistory";
import QueueStatus from "./page/QueueStatus";
import BookingPage from "./page/BookingPage";
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
          
        <Route path="/history" element={<QueueHistory />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/history/:queue_id" element={<QueueStatus/>} />
      </Routes>
    </div>
  );
}

export default App;
