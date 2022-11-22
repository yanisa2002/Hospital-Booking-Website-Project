import { React, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import { CardComponent } from "../component/Booking";

import axios from "axios";

function BookingPage() {
  const hname = useLocation();
  const hospital_n = hname.state;
  const [isOpenBook, setIsOpenBook] = useState(false);
  const [isOpenTel, setIsOpenTel] = useState(false);
  const [TelNum, setTelNum] = useState("");
  const [err, setErr] = useState("");

  const postBooking = async () => {
    console.log("post")
    const response = await axios.post({})
    if (response.status) window.location = `/queue/${response.item_id}`
    setErr(response.message)
    
  }
  const validTel = () =>{
    if (TelNum == "") {
      setErr("กรุณากรอกเบอร์โทรศัพท์");
    } else if (!TelNum.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
      setErr("กรุณากรอกเป็นตัวเลข");
    }
    else{
      setErr("pass")
    }
  }
  const handlerSubmit = (event) => {
    event.preventDefault()
    validTel()
    // postBooking()
    console.log(event)
  }



  const SubmitButton = (event) =>{
    console.log(event)
    if (event == true){
      document.getElementById('submit').disabled = false;
    }
    else if(event == false){
      document.getElementById('submit').disabled = true;
    }
    else if (event == "oldPatient"){
      setIsOpenTel(false);
      document.getElementById('submit').disabled = false;
    }
    else if (event == "newPatient"){
      setIsOpenTel(true);
      document.getElementById('submit').disabled = true;
    }

  }
  const toggleBooking = () => {
    setIsOpenBook(!isOpenBook);
    setIsOpenTel(false);
    if (isOpenBook) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      setErr("")
      document.body.style.overflow = "";
    }
  };

  // console.log(hospital_n.hname);

  return (
    <div className=" bg-uColor-bg font-prompt min-w-[800px] h-screen flex flex-col items-center pt-7">
      {isOpenBook && (
        <div className="w-screen h-screen flex justify-center items-center absolute top-0 left-0">
          <div
            className="w-screen h-screen bg-black/70 absolute top-0 left-0"
            onClick={toggleBooking}
          ></div>
          <form
            className="bg-white p-8 rounded absolute flex flex-col justify-center items-center min-w-[20rem]"
            onSubmit={handlerSubmit}
          >
            <h1 className="font-semibold text-xl">ใบจองคิว</h1>
            <p className="py-2">โรงพยาบาล: </p>
            <div className="flex">
              <input
                name="Patient"
                type="radio"
                value="oldPatient"
                onClick={(event) => SubmitButton(event.target.value)}
              />
              <p className="pr-4">ผู้ป่วยเก่า</p>
              <input
                name="Patient"
                className="px-2"
                type="radio"
                value="newPatient"
                onClick={(event) => SubmitButton(event.target.value)}
              />
              <p>ผู้ป่วยใหม่</p>
            </div>

            <p className="py-2">วันที่ 1/11/2022</p>
            <p className="py-2">เวลา 10:30 - 11:00น </p>
            {isOpenTel && (
              <div className="flex flex-col items-center">
                <input
                 onChange={(event) => setTelNum(event.target.value)}
                  className="border-2 border-uColor-green h-8 "
                  type="tel"
                  placeholder="กรุณากรอกเบอร์โทรศัพท์"
                />
                <p className='text-red-600 text-sm'>{err}</p>
                <div className="flex mt-4">
                  <input id ='checkAccept' onClick={(event) => SubmitButton(event.target.checked)} type="checkbox" />
                  <p className="text-sm ">
                    ยินยอมให้ใช้ข้อมูลส่วนบุคคลตามนโยบายความเป็นส่วนตัว
                  </p>
                </div>
              </div>
            )}

              <button id='submit' className="bg-uColor-green text-white p-2 disabled:opacity-50">
                ดำเนินการต่อ
              </button>
          </form>
        </div>
      )}
      <div className="grid  grid-cols-4  w-[60rem] h-8 bg-uColor-green text-white font-medium">
        <div className="flex justify-center items-center">วันที่</div>
        <div className="flex justify-center items-center">เวลา</div>
        <div className=" flex justify-center items-center">สถานะ</div>
      </div>
      <CardComponent toggle={toggleBooking} />
      <CardComponent toggle={toggleBooking} />
      <CardComponent toggle={toggleBooking} />
      <CardComponent toggle={toggleBooking} />
      <CardComponent toggle={toggleBooking} />
      <CardComponent toggle={toggleBooking} />
      <CardComponent toggle={toggleBooking} />
      <CardComponent toggle={toggleBooking} />
      <CardComponent toggle={toggleBooking} />
      <CardComponent toggle={toggleBooking} />
      <CardComponent toggle={toggleBooking} />
      <CardComponent toggle={toggleBooking} />
      <CardComponent toggle={toggleBooking} />
      <CardComponent toggle={toggleBooking} />
      <CardComponent toggle={toggleBooking} />
      <CardComponent toggle={toggleBooking} />
      <CardComponent toggle={toggleBooking} />
      <CardComponent toggle={toggleBooking} />
      <CardComponent toggle={toggleBooking} />
      <CardComponent toggle={toggleBooking} />
    </div>
  );
}

export default BookingPage;
