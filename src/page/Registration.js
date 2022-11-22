import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import validateInfo from "../component/registration/validate";

function Registration() {
  const [formErrors, setFormErrors] = useState({});

  const [allInfo, setAllInfo] = useState({
    id_card: "",
    title_name: "",
    first_name: "",
    last_name: "",
    gender: "",
    nationality: "",
    country: "",
    province: "",
    religion: "",
    marital_status: "",
    blood_group: "",
    occupation: "",
    mother_title_name: "",
    mother_first_name: "",
    mother_last_name: "",
    father_title_name: "",
    father_first_name: "",
    father_last_name: "",
    allergy: "",
    birthday:"",
  });
  let navigate = useNavigate();
  const infoHandler = (e) => {
    setAllInfo({ ...allInfo, [e.target.name]: e.target.value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateInfo(allInfo));
  };

  // console.log(new Date(allInfo.birthday).toISOString())

  return (
    <div className="grid grid-cols-3  bg-uColor-bg font-prompt min-w-[800px] h-screen">
      <div className=" col-span-1"></div>
      <div className="col-span-2 bg-[#ffffff] flex flex-col">
        <div className=" mt-6 text-3xl font-bold text-center text-red-600 ">
          QHospital
        </div>
        <div className="mt-2 text-xl font-medium text-center">
        กรอกข้อมูลส่วนตัว
        </div>

        <div className="flex flex-col px-8 mx-8 bg-[#ffffff]   ">
          
          <form onSubmit={handleSubmit}>
            <div className=" mb-2">
              <label
                className="flex text-gray-darker text-sm font-bold mb-2"
                
              >
                เลขบัตรประชาชน:<p className="text-red-500">*</p>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                name="id_card"
                type="text"
                placeholder="เลขบัตรประชาชน"
                onChange={infoHandler}
              />
              <p className="text-red-600 text-xs ">{formErrors.id_card}</p>
            </div>
            <div className="mb-2 grid grid-cols-3 gap-4">
              <div>
                <label
                  className="flex text-gray-darker text-sm font-bold mb-2"
                 
                >
                  คำนำหน้า:<p className="text-red-500 text-xs ">*</p>
                </label>

                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="title_name"
                  onChange={infoHandler}
                >
                  <option selected disabled={true} value="">
                    เลือกคำนำหน้า
                  </option>

                  <option value='นาย'>นาย</option>
                  <option value='นาง'>นาง</option>
                  <option value='นางสาว'>นางสาว</option>
                </select>
                <p className="text-red-600 text-xs">{formErrors.title_name}</p>
              </div>
              <div>
                <label
                  className="flex text-gray-darker text-sm font-bold mb-2"
                  
                >
                  ชื่อ:<p className="text-red-500">*</p>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="first_name"
                  type="text"
                  placeholder="ชื่อ"
                  onChange={infoHandler}
                />
                <p className="text-red-600 text-xs">{formErrors.first_name}</p>
              </div>
              <div>
                <label
                  className="flex text-gray-darker text-sm font-bold mb-2"
                
                >
                  นามสกุล:<p className="text-red-500">*</p>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="last_name"
                  type="text"
                  placeholder="คำนำหน้า"                  
                  onChange={infoHandler}
                />
                <p className="text-red-600 text-xs">{formErrors.last_name}</p>
              </div>
            </div>

            <div className="mb-2 grid grid-cols-3 gap-4">
              <div>
                <label
                  className="flex text-gray-darker text-sm font-bold mb-2"
                 
                >
                  เพศ:<p className="text-red-500">*</p>
                </label>

                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="gender"
                  onChange={infoHandler}
                >
                  <option selected disabled={true} value="">
                    เลือกเพศ
                  </option>

                  <option value='ชาย'>ชาย</option>
                  <option value='หญิง'>หญิง</option>
                </select>
                <p className="text-red-600 text-xs">{formErrors.gender}</p>
              </div>
              <div>
                <label
                  className="flex text-gray-darker text-sm font-bold mb-2"
                 
                >
                  วัน/เดือน/ปีเกิด:<p className="text-red-500">*</p>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="birthday"
                  type="date"
                  onChange={infoHandler}
                />
                <p className="text-red-600 text-xs">{formErrors.birthday}</p>
              </div>
              <div>
                <label
                  className="flex text-gray-darker text-sm font-bold mb-2"
                
                >
                  สัญชาติ:<p className="text-red-500">*</p>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="nationality"
                  type="text"
                  placeholder="สัญชาติ"
                  onChange={infoHandler}
                />
                <p className="text-red-600 text-xs">{formErrors.nationality}</p>
              </div>
            </div>

            <div className="mb-2 grid grid-cols-3 gap-4">
              <div>
                <label
                  className="flex text-gray-darker text-sm font-bold mb-2"
                 
                >
                  ประเทศที่เกิด:<p className="text-red-500">*</p>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="country"
                  type="text"
                  placeholder="ประเทศที่เกิด"
                  onChange={infoHandler}
                />
                <p className="text-red-600 text-xs">{formErrors.country}</p>
              </div>
              <div>
                <label
                  className="flex text-gray-darker text-sm font-bold mb-2"
                 
                >
                  จังหวัดที่เกิด:<p className="text-red-500">*</p>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="province"
                  type="text"
                  placeholder="จังหวัดที่เกิด"
                  onChange={infoHandler}
                />
                 <p className="text-red-600 text-xs">{formErrors.province}</p>
              </div>
              <div>
                <label
                  className="flex text-gray-darker text-sm font-bold mb-2"
                  
                >
                  ศาสนา:<p className="text-red-500">*</p>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="religion"
                  type="text"
                  placeholder="สัญชาติ"
                  onChange={infoHandler}
                />
                <p className="text-red-600 text-xs">{formErrors.religion}</p>
              </div>
            </div>

            <div className="mb-2 grid grid-cols-4 gap-4">
              <div>
                <label
                  className="flex text-gray-darker text-sm font-bold mb-2"
                 
                >
                  สถานะภาพสมรส:<p className="text-red-500">*</p>
                </label>
             
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="marital_status"
                  onChange={infoHandler}
                >
                  <option selected disabled={true} value="">
                    กดเลือก
                  </option>

                  <option value='โสด'>โสด</option>
                  <option value='คู่'>คู่</option>
                  <option value='หย่าร้าง'>หย่าร้าง</option>
                  <option value='หม้าย'>หม้าย</option>
                  <option value='แยกกันอยู่'>แยกกันอยู่</option>
                  
                </select>
                <p className="text-red-600 text-xs">{formErrors.marital_status}</p>
              </div>
              <div>
                <label
                  className="flex text-gray-darker text-sm font-bold mb-2"
                
                >
                  อาชีพ:<p className="text-red-500">*</p>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="occupation"
                  type="text"
                  placeholder="อาชีพ"
                  onChange={infoHandler}
                />
                <p className="text-red-600 text-xs">{formErrors.occupation}</p>
              </div>
              <div>
                <label
                  className="flex text-gray-darker text-sm font-bold mb-2"
                  
                >
                  กรุ๊ปเลือด <p className="text-red-500">*</p>
                </label>

                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="blood_group"
                  onChange={infoHandler}
                >
                  <option selected disabled={true} value="">
                    เลือกกรุ๊ปเลือก
                  </option>

                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="AB">AB</option>
                  <option value="O">O</option>
                  <option value="ไม่ทราบ">ไม่ทราบ</option>
                </select>
                <p className="text-red-600 text-xs">{formErrors.blood_group}</p>
              </div>
              <div>
                <label
                  className="flex text-gray-darker text-sm font-bold mb-2"
                  
                >
                  ประวัติการแพ้ (ยา/อาหาร/อื่นๆ):
                  <p className="text-red-500">*</p>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="allergy"
                  type="text"
                  placeholder="การแพ้ ไม่มีใส่:ไม่มี"
                  onChange={infoHandler}
                />
                <p className="text-red-600 text-xs">{formErrors.allergy}</p>
              </div>
            </div>

            <div className="mb-2 grid grid-cols-3 gap-4">
              <div>
                <label
                  className="flex text-gray-darker text-sm font-bold mb-2"
                 
                >
                  คำนำบิดา:<p className="text-red-500">*</p>
                </label>

                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="father_title_name"
                  onChange={infoHandler}
                >
                  <option selected disabled={true} value="">
                    เลือกคำนำหน้า
                  </option>

                  <option value='นาย'>นาย</option>
                  <option value='นาง'>นาง</option>
                  <option value='นางสาว'>นางสาว</option>
                </select>
                <p className="text-red-600 text-xs">{formErrors.father_title_name}</p>
              </div>
              <div>
                <label
                  className="flex text-gray-darker text-sm font-bold mb-2"
                 
                >
                  ชื่อบิดา:<p className="text-red-500">*</p>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="father_first_name"
                  type="text"
                  placeholder="ชื่อบิดา"
                  onChange={infoHandler}
                />
                <p className="text-red-600 text-xs">{formErrors.father_first_name}</p>
              </div>
              <div>
                <label
                  className="flex text-gray-darker text-sm font-bold mb-2"
                  
                >
                  นามสกุลบิดา:<p className="text-red-500">*</p>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="father_last_name"
                  type="text"
                  placeholder="นามสกุลบิดา"
                  onChange={infoHandler}
                />
                <p className="text-red-600 text-xs">{formErrors.father_last_name}</p>
              </div>
            </div>
            <div className="mb-10 grid grid-cols-3 gap-4">
              <div>
                <label
                  className="flex text-gray-darker text-sm font-bold mb-2"
                  
                >
                  คำนำหน้าชื่อมารดา:<p className="text-red-500">*</p>
                </label>

                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="mother_title_name"
                  onChange={infoHandler}
                >
                  <option selected disabled={true} value="">
                    เลือกคำนำหน้า
                  </option>

                  <option value='นาย'>นาย</option>
                  <option value='นาง'>นาง</option>
                  <option value='นางสาว'>นางสาว</option>
                </select>
                <p className="text-red-600 text-xs">{formErrors.mother_title_name}</p>
              </div>
              <div>
                <label
                  className="flex text-gray-darker text-sm font-bold mb-2"
                  
                >
                  ชื่อมารดา:<p className="text-red-500">*</p>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="mother_first_name"
                  type="text"
                  placeholder="ชื่อมารดา"
                  onChange={infoHandler}
                />
                <p className="text-red-600 text-xs">{formErrors.mother_first_name}</p>
              </div>
              <div>
                <label
                  className="flex text-gray-darker text-sm font-bold mb-2"
                  
                >
                  นามสกุลมารดา:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="mother_last_name"
                  type="text"
                  placeholder="นามสกุลมารดา"
                  onChange={infoHandler}
                />
                <p className="text-red-600 text-xs">{formErrors.mother_last_name}</p>

              </div>
            </div>

            <div className="mb-7 ">
              <button
                onClick={() => {
                  navigate("/registration", { replace: true });
                }}
                type="submit"
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-uColor-green border border-transparent rounded-md  capitalize text-[#ffffff] active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition"
              >
                <a href="/registration">ยืนยัน และ เข้าสู่ระบบ</a>
              </button>
            </div>
          </form>
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default Registration;
