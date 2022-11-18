import React from "react";

function register() {
  return (
    <div className="flex justify-center bg-uColor-bg font-prompt min-w-[800px] h-full">
      <div className="grid grid-cols-2">
        <div></div>
        <div className="bg-[#ffffff]">
          <div className="mt-6 text-3xl font-bold text-center text-red-600">
            QHospital
          </div>
          <div className="mt-2 text-xl font-medium text-center">
            สร้างบัญชีผู้ใช้
          </div>

          <div
            className="flex flex-col p-8 m-8 bg-[#ffffff]  md:min-w-[600px] 
     sm:min-w-[400px] min-w-[300px] "
          >
            <label className="block text-gray-darker text-lg font-bold mb-8">
              สร้างบัญชีของคุณ
            </label>

            <div className="mb-10">
              <label
                className="block text-gray-darker text-sm font-bold mb-2"
                for="username"
              >
                ชื่อผู้ใช้
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="username"
                type="text"
                placeholder="Username"
                //autoComplete="off"
                //pattern="[A-Za-z0-9]{4,20}"
                //reduired
              />
            </div>
            <div className="mb-10">
              <label
                className="block text-gray-daker text-sm font-bold mb-2"
                for="password"
              >
                รหัสผ่าน
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="password"
                type="password"
                placeholder="Password"
                // onChange={(e) => setPwd(e.target.value)}
                // value={pwd}
                // required
              />
            </div>
            {/* <Link to="/"> */}
            <div className="mb-7">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition"
              >
                สมัคร
              </button>
            </div>
            {/* </Link> */}
            {/* </form> */}

            <div className="mb-2 text-center">
              มีบัญชีผู้ใช้แล้ว ?{" "}
              <span className="cursor-pointer text-red-600 text-uColor-bg">
                <a href="/login">เข้าสู่ระบบ</a>
              </span>
            </div>
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

export default register;
