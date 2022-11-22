import React, { useState } from "react";
import validateInfo from "./validate";

const imageMimeType = /image\/(png|jpg|jpeg)/i;
function FormInfo() {
  const [file, setFile] = useState(null);
  const [URLfile, setURLFile] = useState(null);
  const [hSearch, sethSearch] = useState("");
  const [allInfo, setAllInfo] = useState({
    firstname: "",
    lastname: "",
    idcard: "",
    hName: "",
    bookDate: "",
    bookTime: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [open, setOpen] = useState(false);

  const infoHandler = (e) => {
    setAllInfo({ ...allInfo, [e.target.name]: e.target.value });
  };
  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
    setURLFile(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateInfo(allInfo, file));
  };

  const demoHospital = [
    { name: "รพ.กลาง" },
    { name: "รพ.เจริญกรุงประชารักษ์" },
    { name: "รพ.จุฬาลงกรณ์" },
    { name: "รพ.ตากสิน" },
    { name: "รพ.ตำรวจ" },
    { name: "รพ.พระมงกุฏเกล้า" },
    { name: "รพ.ภูมิพลอดุลยเดช" },
  ];

  console.log("file", file);
  return (
    <div className="rounded-lg shadow bg-[#FFFFFF] w-[550px] border mb-11  ">
      <form onSubmit={handleSubmit}>
        <div className=" p-5 text-center mt-5 ">
          <div className=" ">
            <h2 className="text-left mx-10 font-bold text-lg border-b-2 border-uColor-bg w-28  mb-4 ">
              ข้อมูลผู้ป่วย
            </h2>
            <div className="flex justify-center space-x-6">
              <div className="text-left mb-3">
                <p className=" font-medium mb-2">ชื่อ</p>
                <input
                  type="text"
                  name="firstname"
                  onChange={infoHandler}
                  className="border border-gray-300 rounded-lg w-full p-2"
                ></input>
                <p className="text-red-600">{formErrors.Firstname}</p>
              </div>

              <div className=" text-left mb-3">
                <p className=" font-medium mb-2">นามสกุล</p>
                <input
                  type="text"
                  name="lastname"
                  onChange={infoHandler}
                  className="border border-gray-300 rounded-lg w-full p-2"
                ></input>
                <p className="text-red-600">{formErrors.Lastname}</p>
              </div>
            </div>
            <div className="px-10 text-left mb-3">
              <p className=" font-medium mb-2">เลขประจำตัวประชาชน</p>
              <input
                type="text"
                name="idcard"
                onChange={infoHandler}
                className="border border-gray-300 rounded-lg w-full p-2"
              ></input>
              <p className="text-red-600">{formErrors.IDCard}</p>
            </div>

            <h2 className="text-left mx-10 font-bold text-lg border-b-2 border-uColor-bg w-28  mb-4 mt-5">
              การนัดหมาย
            </h2>
            <div className="px-10 text-left mb-3">
              <p className=" font-medium mb-2">เลือกโรงพยาบาล</p>
              <div
                className="bg-white w-full p-2 flex items-center  border justify-between cursor-pointer"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                {allInfo.hName != "" ? allInfo.hName : "เลือกโรงพยาบาล"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <ul
                className={`bg-white w-[430px] absolute overflow-auto ${
                  open ? "" : "hidden"
                } max-h-60 `}
              >
                <div className=" top-0 sticky">
                  <input
                    className="w-full placeholder:text-uColor-green/60 py-2 p-2"
                    type="text"
                    value={hSearch}
                    onChange={(e) => sethSearch(e.target.value)}
                    placeholder="ค้นหาชื่อโรงพยาบาล"
                  />
                </div>
                {hSearch}
                {demoHospital.map((item, i) => (
                  <li
                    name="hName"
                    onClick={() => {
                      setAllInfo({ ...allInfo, ["hName"]: item.name });
                    }}
                    className={`cursor-pointer p-2 text-sm hover:bg-uColor ${
                      item.name.startsWith(hSearch) ? "block" : "hidden"
                    }`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
              <p className="text-red-600">{formErrors.hName}</p>
            </div>
            <div className="px-10 text-left mb-3">
              <p className=" font-medium mb-2">ใบนัดพบแพทย์</p>
              <input
                type="file"
                onChange={changeHandler}
                //  value={placeEN} onChange={(event) => setPlaceEN(event.target.value)}
                accept=".png, .jpg, .jpeg"
                className="border border-gray-300 rounded-lg w-full p-2"
              ></input>
              <img src={URLfile} />
              <p className="text-red-600">{formErrors.file}</p>
            </div>
            <div className="px-10 text-left mb-3">
              <p className=" font-medium mb-2">เลือกวันที่ให้ตรงกับใบนัด</p>
              <input
                type="date"
                name="bookDate"
                onChange={infoHandler}
                className="border border-gray-300 rounded-lg w-full p-2"
              ></input>
              <p className="text-red-600">{formErrors.bookDate}</p>
            </div>
            <div className="px-10 text-left mb-3">
              <p className=" font-medium mb-2">เลือกเวลา</p>
              <input
                type="text"
                name="bookTime"
                onChange={infoHandler}
                className="border border-gray-300 rounded-lg w-full p-2"
              ></input>
              <p className="text-red-600">{formErrors.bookTime}</p>
            </div>
          </div>
        </div>

        <div className="p-10 space-x-10 rounded-b  text-center">
          <button
            type="submit"
            className="text-white bg-uColor-green border border-uColor-green hover:bg-uColor-green/80 focus:ring-4 focus:outline-none focus:ring-uColor-green/50 font-light rounded-md  px-10 py-2.5 text-center inline-flex items-center "
            onClick={() => {
              // setModalOn(false);
              // AddPlace();
            }}
          >
            จองคิว
          </button>
        </div>
      </form>
    </div>
    //   </div>
  );
}

export default FormInfo;
