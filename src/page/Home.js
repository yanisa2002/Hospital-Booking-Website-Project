import React, { useState } from "react";
import CardBook from "../component/home/cardBook";

function Home() {
  const [change, setChange] = useState(false);
  const BookingType = [
    { title: "มีใบนัด", des: "ผู้ป่วยที่มีใบนัดพบแพทย์", np: "/booking-ma" },
    {
      title: "ไม่มีใบนัด",
      des: "ผู้ป่วยที่ไม่มีใบนัดพบแพทย์",
      np: "/booking-nma",
    },
  ];
  const handleClickScroll = () => {
    const element = document.getElementById("section-1");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const changSection = () => {
    if (window.scrollY >= 90) {
      setChange(true);
    } else {
      setChange(false);
    }
  };

  window.addEventListener("scroll", changSection);

  return (
    <>
      <div className="flex justify-center bg-uColor-bg font-prompt min-w-[800px] h-full pb-52">
        <div className=" flex-col w-[80%] min-w-[800px]">
          <div className=" xl:grid grid-cols-2 lg:block mt-10 ">
            <div className="mt-28 xl:text-left lg:text-center">
              <div className=" text-6xl font-bold">
                <p className=" mb-8">จองคิวออนไลน์</p>
                <p>กับ QHospital</p>
              </div>
              <p className=" mt-14 text-lg font-medium">
                ไม่ต้องเสียเวลานั่งรอเรียกตรวจอีกต่อไป
                <br />
                กดจองคิว และ แจ้งเตือนเมื่อใกล้ถึงคิวของคุณ
              </p>

              <div className="mt-14">
                <button
                  className="transition duration-500 ease-in-out bg-uColor-green text-[#ffff] p-3 px-10 transform hover:-translate-y-1 hover:scale-110"
                  onClick={handleClickScroll}
                >
                  จองคิว
                </button>
              </div>
            </div>
            <div className="flex">
              <img className="max-w-full " src="/img/consultancy 1.png" />
            </div>
          </div>
        </div>
      </div>
      <div className={`flex justify-center  bg-uColor-table `}>
        <div className="flex-col w-[80%] min-w-[800px]">
          <div className="xl:grid grid-cols-2 lg:block  ">
            <div className="flex">
              <img className="max-w-full " src="/img/hospital.png" />
            </div>
            <div className=" mt-28 ml-36 ">
              <div className="xl:text-left lg:text-center">
                <p className=" mb-4  text-xl font-medium">เลือกรูปแบบ</p>
                <p className=" text-5xl font-bold">รูปแบบการนัด</p>
              </div>
              <p className=" mt-14 text-lg xl:text-left lg:text-center">
                เลือกการนัดหมายตามความต้องการ และ ความสะดวกของคุณ
              </p>
              <div
                id="section-1"
                className={`grid grid-cols-1 justify-center lg:justify-items-center xl:justify-items-start mb-10 ${
                  change
                    ? " translate-x-3 ease-in duration-300 "
                    : "translate-x-0"
                }`}
              >
                <CardBook
                  title={BookingType[0].title}
                  descript={BookingType[0].des}
                  newPage={BookingType[0].np}
                />
                <CardBook
                  title={BookingType[1].title}
                  descript={BookingType[1].des}
                  newPage={BookingType[1].np}
                />
              </div>
              {/* <div className='w-full border-b border-uColor-green mb-10 mt-2'></div> */}
            </div>
          </div>
          {/* <div className='flex justify-center mt-40'>
            <div  className=' justify-center '>
              <p className='text-2xl font-bold text-center'>รูปแบบการจอง</p>
              <div className='w-full border-b border-uColor-green mb-10 mt-2'></div>
            </div>
          </div>
            <div id="section-1" className=' grid xl:grid-cols-2 lg:grid-cols-1  justify-items-center mb-10'>
                <CardBook title={BookingType[0].title} descript={BookingType[0].des} newPage={BookingType[0].np}/>
                <CardBook title={BookingType[1].title} descript={BookingType[1].des} newPage={BookingType[1].np} />
              </div> */}
        </div>
      </div>
    </>
  );
}

export default Home;
