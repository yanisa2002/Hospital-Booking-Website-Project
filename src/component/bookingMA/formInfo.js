import React,{useState} from 'react';

const imageMimeType = /image\/(png|jpg|jpeg)/i;
function FormInfo() {
    const [file, setFile] = useState(null);
    const changeHandler = (e) => {
        const file = e.target.files[0];
        if (!file.type.match(imageMimeType)) {
          alert("Image mime type is not valid");
          return;
        }
        setFile(file);
      }
  return (
    // <div class="flex h-screen justify-center items-center  ">
        <div class="rounded-lg shadow bg-[#FFFFFF] w-[550px] border mb-11  ">
          {/* header */}

        

          <div class=" p-5 text-center mt-5 ">
            <div className=" ">
            <h2 className="text-left mx-10 font-bold text-lg border-b-2 border-uColor-bg w-28  mb-4 ">
            ข้อมูลผู้ป่วย
            </h2>
            <div className="flex justify-center space-x-6">
                <div className="text-left mb-3">
                  <p className=" font-medium mb-2">ชื่อ</p>
                  <input
                    type="text"
                    name="latitude"
                    // value={coord.latitude}
                    // onChange={(e) => handleChange(e)}
                    //    value={rName} onChange={(event) => setrName(event.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2"
                  ></input>
                </div>

                <div className=" text-left mb-3">
                  <p className=" font-medium mb-2">นามสกุล</p>
                  <input
                    type="text"
                    name="longitude"
                    // value={coord.longitude}
                    // onChange={(e) => handleChange(e)}
                    //    value={rName} onChange={(event) => setrName(event.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2"
                  ></input>
                </div>
              </div>
              <div className="px-10 text-left mb-3">
                <p className=" font-medium mb-2">เลขประจำตัวประชาชน</p>
                <input
                  type="text"
                    //  value={placeEN} onChange={(event) => setPlaceEN(event.target.value)}
                  className="border border-gray-300 rounded-lg w-full p-2"
                ></input>
              </div>

              <h2 className="text-left mx-10 font-bold text-lg border-b-2 border-uColor-bg w-28  mb-4 mt-5">
                การนัดหมาย
              </h2>
              <div className="px-10 text-left mb-3">
                <p className=" font-medium mb-2">เลือกโรงพยาบาล</p>
                <input
                  type="text"
                    //  value={placeEN} onChange={(event) => setPlaceEN(event.target.value)}
                  className="border border-gray-300 rounded-lg w-full p-2"
                ></input>
              </div>
              <div className="px-10 text-left mb-3">
                <p className=" font-medium mb-2">ใบนัดพบแพทย์</p>
                <input
                  type="file"
                  onChange={changeHandler}
                    //  value={placeEN} onChange={(event) => setPlaceEN(event.target.value)}
                  accept='.png, .jpg, .jpeg'
                  className="border border-gray-300 rounded-lg w-full p-2"
                ></input>
              </div>
              <div className="px-10 text-left mb-3">
                <p className=" font-medium mb-2">เลือกวันที่ให้ตรงกับใบนัด</p>
                <input
                  type="text"
                    //  value={placeEN} onChange={(event) => setPlaceEN(event.target.value)}
                  className="border border-gray-300 rounded-lg w-full p-2"
                ></input>
              </div>
              <div className="px-10 text-left mb-3">
                <p className=" font-medium mb-2">เลือกเวลา</p>
                <input
                  type="text"
                    //  value={placeEN} onChange={(event) => setPlaceEN(event.target.value)}
                  className="border border-gray-300 rounded-lg w-full p-2"
                ></input>
              </div>

          
              {/* <div className="px-10 text-left mb-3"> 
              
                 
                 
                 
              </div> */}
            </div>
          </div>

          {/* <!-- Modal footer --> */}
          <div className="p-10 space-x-10 rounded-b  text-center">
            <button
              className="text-white bg-uColor-green border border-uColor-green hover:bg-uColor-green/80 focus:ring-4 focus:outline-none focus:ring-uColor-green/50 font-light rounded-md  px-10 py-2.5 text-center inline-flex items-center "
              onClick={() => {
                // setModalOn(false);
                // AddPlace();
              }}
            >
              ตกลง
            </button>
         
          </div>
        </div>
    //   </div>
  )
}

export default FormInfo