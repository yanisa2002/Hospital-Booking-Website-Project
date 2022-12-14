import React, { useState } from "react";
import { Link } from "react-router-dom";
const PatientDetails = () => {
  const [formErrors, setFormErrors] = useState({});
  // const [isChecked, setIsChecked] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [idCard, setIDCard] = useState("");
  const [illness, setIllness] = useState("");

  const [moreDetail, setMoreDetail] = useState("");
  const [duration, setDuration] = useState("");

  const [checked, setChecked] = useState([]);
  const illList = [
    "ปวดหัว",
    "ปวดตา ตาพร่า",
    "เจ็บคอ",
    "เจ็บหน้าอก",
    "มีไข้",
    "ปวดท้อง",
    "ปวดเข่า ปวดเมื่อย",
    "ปัสสาวะหรืออุจจาระผิดปกติ",
    "บาดเจ็บเป็นแผล",
    "เป็นผื่น แพ้",
    "คลื่นไส้ อาเจียน",
    "อื่นๆ",
  ];

  let defaultValues = {
    Firstname: firstname,
    Lastname: lastname,
    IDCard: idCard,
    illness: illness,
  };

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    setIllness(updatedList);
  };

  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(defaultValues));
    console.log(defaultValues);
  };

  const validate = (values) => {
    console.log(values);
    let errors = {};
    const thai_regex = /^[ก-๏]{0,31}$/;

    if (firstname === "") {
      errors["Firstname"] = "กรุณากรอกชื่อ";
    } else if (!thai_regex.test(firstname)) {
      errors["Firstname"] = "กรุณากรอกเป็นภาษาไทย";
    }

    if (lastname === "") {
      errors["Lastname"] = "กรุณากรอกนามสกุล";
    } else if (!/^[ก-๏\s]{0,31}$/.test(lastname)) {
      errors["Lastname"] = "กรุณากรอกเป็นภาษาไทย";
    }

    if (idCard === "") {
      errors["IDCard"] = "กรุณากรอกเลขประจำตัวประชาชน";
    } else if (!/^\d+$/.test(idCard)) {
      errors["IDCard"] = "กรุณากรอกเป็นตัวเลข";
    } else if (idCard.length !== 13) {
      errors["IDCard"] = "กรุณากรอกให้ครบ 13 หลัก";
    }

    if (idCard === "") {
      errors["Duration"] = "กรุณาเลือกระยะเวลา";
    }
    console.log("error -> ", errors);
    return errors;
  };
  return (
    <div className="flex justify-center bg-uColor-bg font-prompt min-w-[800px] h-full">
      <div className=" flex-col w-[70%] min-w-[800px]">
        <div className="mt-28">
          <div className=" text-center">
            <p className="text-5xl font-bold mb-6">รายละเอียดผู้ป่วย</p>
            <p className="text-2xl mb-8">กรุณากรอกข้อมูลให้ถูกต้องและครบถ้วน</p>
          </div>
        </div>
        <div className="flex flex-col p-10 m-8 bg-[#ffffff] rounded-xl shadow-xl">
          <p className="text-xl font-bold mb-2">ข้อมูลผู้ป่วย</p>
          <div className=" flex-col grid grid-cols-2 gap-9">
            <div className="flex flex-col">
              <label
                className="block text-uColor-green text-xl mt-2 mb-2"
                htmlFor="Firstname"
              >
                ชื่อ *
              </label>
              <input
                class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
                name="Firstname"
                type="text"
                placeholder="Firstname"
                value={firstname}
                onChange={(event) => setFirstname(event.target.value)}
              ></input>
              <p className="text-[#FF0000]">{formErrors.Firstname}</p>
            </div>
            <div className="flex flex-col">
              <label
                className="block text-uColor-green text-xl mt-2 mb-2"
                htmlFor="Lastname"
              >
                นามสกุล *
              </label>
              <input
                class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
                name="Lastname"
                type="text"
                placeholder="Lastname"
                value={lastname}
                onChange={(event) => setLastname(event.target.value)}
              ></input>
              <p className="text-[#FF0000]">{formErrors.Lastname}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <label
              className="block text-uColor-green text-xl mt-2 mb-2"
              htmlFor="IDCard"
            >
              เลขประจำตัวประชาชน *
            </label>
            <input
              class="shadow appearance-none border w-full rounded py-2 px-3 text-uColor-green"
              name="IDCard"
              type="text"
              placeholder="Personal ID"
              maxLength={13}
              value={idCard}
              onChange={(event) => setIDCard(event.target.value)}
            ></input>
            <p className="text-[#FF0000]">{formErrors.IDCard}</p>
          </div>
        </div>
        <div className="flex flex-col p-10 m-8 bg-[#ffffff] rounded-xl shadow-xl">
          <p className="text-xl text-uColor-green font-bold mb-2">
            ข้อมูลอาการเบื้องต้น
          </p>
          <label
            className="block text-uColor-green font-bold text-xl mt-2 mb-2"
            htmlFor="Symptoms"
          >
            อาการที่พบ : *
          </label>

          <div className="illList  ">
            <div className="list-container text-xl text-uColor-green">
              {illList.map((item, index) => (
                <div key={index}>
                  <input
                    class="form-checkbox h-5 w-5 mr-2 accent-uColor-green "
                    value={item}
                    type="checkbox"
                    onChange={handleCheck}
                  />
                  <span className={isChecked(item)}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* <div>{`Items checked are: ${checkedItems}`}</div> */}
          {/* <div class="flex flex-col">
            <label class="flex items-center mb-2">
              <input
                type="checkbox"
                class="form-checkbox h-6 w-6 accent-uColor-green "
              />
              <span class="ml-2 text-xl text-uColor-green">ปวดหัว</span>
            </label>

            <label class="flex items-center mb-2">
              <input
                type="checkbox"
                class="form-checkbox h-6 w-6 accent-uColor-green "
              />
              <span class="ml-2 text-xl text-uColor-green">ปวดตา ตาพร่า</span>
            </label>

            <label class="flex items-center mb-2">
              <input
                type="checkbox"
                class="form-checkbox h-6 w-6 accent-uColor-green "
              />
              <span class="ml-2 text-xl text-uColor-green">เจ็บคอ</span>
            </label>

            <label class="flex items-center mb-2">
              <input
                type="checkbox"
                class="form-checkbox h-6 w-6 accent-uColor-green "
              />
              <span class="ml-2 text-xl text-uColor-green">เจ็บหน้าอก</span>
            </label>

            <label class="flex items-center mb-2">
              <input
                type="checkbox"
                class="form-checkbox h-6 w-6 accent-uColor-green "
              />
              <span class="ml-2 text-xl text-uColor-green">มีไข้</span>
            </label>

            <label class="flex items-center mb-2">
              <input
                type="checkbox"
                class="form-checkbox h-6 w-6 accent-uColor-green "
              />
              <span class="ml-2 text-xl text-uColor-green">ปวดท้อง</span>
            </label>

            <label class="flex items-center mb-2">
              <input
                type="checkbox"
                class="form-checkbox h-6 w-6 accent-uColor-green "
              />
              <span class="ml-2 text-xl text-uColor-green">
                ปวดเข่า ปวดเมื่อย
              </span>
            </label>

            <label class="flex items-center mb-2">
              <input
                type="checkbox"
                class="form-checkbox h-6 w-6 accent-uColor-green "
              />
              <span class="ml-2 text-xl text-uColor-green">
                ปัสสาวะหรืออุจจาระผิดปกติ
              </span>
            </label>

            <label class="flex items-center mb-2">
              <input
                type="checkbox"
                class="form-checkbox h-6 w-6 accent-uColor-green "
              />
              <span class="ml-2 text-xl text-uColor-green">บาดเจ็บเป็นแผล</span>
            </label>

            <label class="flex items-center mb-2">
              <input
                type="checkbox"
                class="form-checkbox h-6 w-6 accent-uColor-green "
              />
              <span class="ml-2 text-xl text-uColor-green">เป็นผื่น แพ้</span>
            </label>

            <label class="flex items-center mb-2">
              <input
                type="checkbox"
                class="form-checkbox h-6 w-6 accent-uColor-green "
              />
              <span class="ml-2 text-xl text-uColor-green">
                คลื่นไส้ อาเจียน
              </span>
            </label>

            <label class="flex items-center mb-2">
              <input
                type="checkbox"
                class="form-checkbox h-6 w-6 accent-uColor-green "
              />
              <span class="ml-2 text-xl text-uColor-green">อื่นๆ</span>
            </label>
          </div> */}

          <div>
            <label
              className="block text-uColor-green font-bold text-xl mt-2 "
              htmlFor="Symptoms"
            >
              คำอธิบายอาการเพิ่มเติม :
            </label>
            <p className="text-xl text-uColor-green mb-2">
              (ตัวอย่าง : สาเหตุของอาการ, ฯลฯ)
            </p>
            <input
              class="shadow appearance-none border w-full rounded py-2 px-3 text-uColor-green"
              name="Symptoms"
              type="text"
              placeholder="Detail"
              value={moreDetail}
              onChange={(event) => setMoreDetail(event.target.value)}
            ></input>
          </div>

          <div>
            <label
              className="block text-uColor-green font-bold text-xl mt-4 mb-2 "
              htmlFor="Durations"
            >
              ระยะเวลาที่เกิดอาการ : *
            </label>

            <select
              className="border border-gray-300 rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
              name="Duration"
              value={duration}
              onChange={(event) => setDuration(event.target.value)}
            >
              <option value="">เลือก</option>
              <option value="1">1 วัน</option>
              <option value="2">2-3 วัน</option>
              <option value="3">4-7 วัน</option>
              <option value="4">มากกว่า 7 วัน</option>
            </select>
            <p className="text-[#FF0000]">{formErrors.Title}</p>
          </div>

          <div className="  mt-7 mb-7">
            <Link to="/select-hospital">
              <button className="w-full h-10 p-10 py-2 px-4 bg-[#064635] rounded text-[#ffffff] transition duration-300 text-xl font-semibold drop-shadow-xl">
                ต่อไป
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
