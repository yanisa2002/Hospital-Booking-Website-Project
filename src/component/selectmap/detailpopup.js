import React, { useState } from "react";
import { Link } from "react-router-dom";

function Detailpopup(props) {
  const { setModalOn, data } = props;
  const [approve, setApprove] = useState("");
  return (
    <div className="flex justify-center ">
      <div className=" inset-48 fixed z-50  h-64 w-[440px] bg-white rounded-md">
        {/* <div className=""></div> */}
        <div className="flex p-5">
          <div className="flex-1 ">
            <div className="flex mb-2">
              <p className="mr-2">ชื่อโรงพยาบาล:</p>
              <p className="mr-2">{data}</p>
            </div>
            <div className="flex mb-2">
              <p className="mr-2">ตำแหน่ง:</p>
            </div>
            <div className="flex mb-2">
              <p className="mr-2">เบอร์โทร:</p>
           
            </div>
          </div>
          <div className=" inline-flex items-start  ">
            <div className=" w-24 h-24  bg-slate-300">picture</div>
          </div>
        </div>
        
        <div className="flex p-5 justify-center">
          <div className=" mt-6">
            <Link to='/booking' state={{hname:data}}>
            <button className="transition duration-500 ease-in-out bg-uColor-green text-[#ffff] p-3 px-10 transform hover:-translate-y-1 hover:scale-110">
              จองคิว
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailpopup;
