import React from "react";

function BookCard(props) {
  const { toggle, time, dens} = props;

  return (
    <div className={`grid grid-cols-4  w-[60rem] h-7  text-sm ${dens == 1 ?  "bg-uColor ": "bg-red-200"}`}>
      <div className="flex justify-center items-center">24/11/2022</div>
      <div className="flex justify-center items-center">{time}</div>
      <div className="flex justify-center items-center">{dens == 1 ? "ปานกลาง": "เยอะ"}</div>
      <div className="flex justify-end items-center px-3">
        <button onClick={toggle} className={` text-white px-3 ${dens == 1 ?  "bg-uColor-green ": "bg-stone-600"}`}>
          จอง
        </button>
      </div>
    </div>
  );
}

export default BookCard;
