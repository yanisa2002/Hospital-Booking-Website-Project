import React, { useState } from "react";
import validate from "./validation";
function ModalDetail(props) {
  const { setModalOn, type } = props;
  const [approve, setApprove] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [allInfo, setAllInfo] = useState({
    department: "",
    comment: "",
  });
  const infoHandler = (e) => {
    setAllInfo({ ...allInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(allInfo, approve));
  };

  const depart = [
    "แผนกผู้ป่วยนอก – Outpatient Department",
    "แผนกผู้ป่วยใน – Inpatient Department",
    "แผนกรังสีกรรม – Radiology Department",
    "แผนกศัลยกรรม – Surgical Department",
    "แผนกวิสัญญี – Department of Anaesthesia",
    "แผนกกุมารเวชกรรม – Pediatrics Department",
    "แผนกสูตินรีเวชกรรม – Obstretic – Gynecology Department",
    "แผนกเวชศาสตร์ฟื้นฟู – Physical Therapy Department",
    "แผนกอายุรกรรม – Medicine Department",
    "แผนกจักษุ – Ophthalmology Department",
    "แผนกหู คอ จมูก – Ear nose and throat Department",
    "แผนกเภสัชกรรม – Phamarceutical Department",
    "แผนกจิตเวช – Psychology Department",
    "แผนกอื่น",
  ];
  return (
    <div class=" fixed inset-0 z-50 bg-black  bg-opacity-50 ">
      <div class="flex h-screen justify-center items-center  ">
        <div class="relative rounded-lg shadow bg-[#FFFFFF] w-[550px] border ">
          {/* Modal header */}

          <div class="flex justify-center items-center  p-5 rounded-t ">
            <h1 className=" text-3xl font-medium">ข้อมูลการจองคิว</h1>
          </div>

          <div class="p-2 text-center ">
            <div className="h-[420px] overflow-y-auto">
              <h2 className="text-left mx-10 font-bold text-lg border-b-2 border-uColor-green w-28  mb-4 ">
                ข้อมูลผู้ป่วย
              </h2>
              <div className="grid grid-cols-2 px-10 space-x-3 w-full ">
                <div className="text-left mb-3">
                  <p className=" font-medium mb-2">ชื่อ</p>
                  <div className="border border-gray-300 rounded-lg w-full p-2 h-10"></div>
                </div>

                <div className=" text-left mb-3">
                  <p className=" font-medium mb-2">นามสกุล</p>
                  <div className="border border-gray-300 rounded-lg w-full p-2 h-10"></div>
                </div>
              </div>
              <div className="px-10 text-left mb-3">
                <p className=" font-medium mb-2">เลขประจำตัวประชาชน</p>
                <div className="border border-gray-300 rounded-lg w-full p-2 h-10"></div>
              </div>
              {type == "NP" && (
                <div className="px-10 text-left mb-3">
                  <p className=" font-medium mb-2">เบอร์โทร</p>
                  <div className="border border-gray-300 rounded-lg w-full p-2 h-10"></div>
                </div>
              )}

              <h2 className="text-left mx-10 font-bold text-lg border-b-2 border-uColor-green w-28  mb-4 ">
                การนัดหมาย
              </h2>
              <div className="grid grid-cols-2 px-10 space-x-3 w-full  ">
                <div className="text-left mb-3">
                  <p className=" font-medium mb-2">วันที่นัด</p>
                  <div className="border border-gray-300 rounded-lg w-full p-2 h-10"></div>
                </div>

                <div className=" text-left mb-3">
                  <p className=" font-medium mb-2">เวลาที่นัด</p>
                  <div className="border border-gray-300 rounded-lg w-full p-2 h-10"></div>
                </div>
              </div>
              {type == "MA" && (
                <div className="px-10 text-left mb-3">
                  <p className=" font-medium mb-2">รูปใบนัด</p>
                  <div className="border border-gray-300 rounded-lg w-full p-2 h-10"></div>
                </div>
              )}

              <h2 className="text-left mx-10 font-bold text-lg border-b-2 border-uColor-green w-52  mb-4 ">
                อาการที่ต้องการพบแพทย์
              </h2>
              <div className="px-10 text-left mb-3">
                <p className=" font-medium mb-2">อาการที่พบ</p>
                <div className="border border-gray-300 rounded-lg w-full p-2 h-10"></div>
              </div>
              <div className="px-10 text-left mb-3">
                <p className=" font-medium mb-2">คำอธิบายเพิ่มเติม</p>
                <div className="border border-gray-300 rounded-lg w-full p-2 h-10"></div>
              </div>
              <div className="px-10 text-left mb-3">
                <p className=" font-medium mb-2">ระยะเวลาที่เกิดอาการ </p>
                <div className="border border-gray-300 rounded-lg w-full p-2 h-10"></div>
              </div>

              <h2 className="text-left mx-10 font-bold text-lg border-b-2 border-uColor-green w-36  mb-4 ">
                ส่วนของเจ้าหน้าที่
              </h2>
              <form onSubmit={handleSubmit}>
              <div className="bg-uColor-bg py-8 mx-10 rounded-lg">
                <p className="flex font-medium mb-2 mx-10">
                  เลือกแผนก <p className="text-red-600">*</p>  <p className="text-red-600 text-xs ">{formErrors.approve}</p>
                </p>
                <div className="px-10 text-left mb-3 grid grid-cols-2 gap-3 ">
                  <div
                    className="flex items-center pl-4 rounded border border-gray-200 bg-white"
                    onClick={() => {
                      setApprove(1);
                    }}
                  >
                    <input
                      id="bordered-radio-1"
                      type="radio"
                      value={approve}
                      name="choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                    />
                    <label
                      for="bordered-radio-1"
                      className="py-4 ml-2 w-full text-sm font-medium  "
                    >
                      อนุมัติ
                    </label>
                  </div>

                  <div
                    className="flex items-center pl-4 rounded border border-gray-200 bg-white"
                    onClick={() => {
                      setApprove(0);
                    }}
                  >
                    <input
                      id="bordered-radio-2"
                      type="radio"
                      value={approve}
                      name="choice"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      for="bordered-radio-2"
                      className="py-4 ml-2 w-full text-sm font-medium  "
                    >
                      ไม่อนุมัติ
                    </label>
                  </div>
                </div>
                <div className="px-10 text-left mb-3">
                  <p className="flex font-medium mb-2">
                    เลือกแผนก <p className="text-red-600">*</p> <p className="text-red-600 text-xs ">{formErrors.department}</p>
                  </p>
                  <select
                    className="shadow border rounded w-full py-2 px-3 "
                    name="department"
                    onChange={infoHandler}
                  >
                    <option selected disabled={true} value="">
                      เลือกแผนก
                    </option>
                    {depart.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </select>
                </div>
                <div className="px-10 text-left mb-3">
                  <p className=" font-medium mb-2">หมายเหตุ</p><p className="text-red-600 text-xs ">{formErrors.comment}</p>
                  <textarea
                    name="comment"
                    onSubmit={handleSubmit}
                    className="border border-gray-300 rounded-lg w-full p-2 "
                  ></textarea>
                </div>
                <div className="text-right mx-10">
                  <button
                    type="submit"
                    className="text-white  bg-uColor-green  hover:bg-bg-uColor-green/80 focus:ring-4 focus:outline-none focus:ring-bg-uColor-green/50 font-light text-sm px-5 py-2.5 text-center inline-flex items-center "
                    onClick={() => {}}
                  >
                    บันทึก
                  </button>
                </div>
              </div>
              </form>
            </div>
          </div>

          {/* <!-- Modal footer --> */}
          <div className="p-10 space-x-5 rounded-b  text-right">
            <button
              className=" border-b border-uColor-green "
              onClick={() => {
                setModalOn(false);
              }}
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDetail;
