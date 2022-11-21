import React, { useState, useRef } from "react";

const Register = () => {
  const [formErrors, setFormErrors] = useState({});

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  let defaultValues = {
    Email: email,
    Password: pwd,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(defaultValues);
  };

  return (
    <div className="grid grid-cols-3  bg-uColor-bg font-prompt min-w-[800px] h-screen">
      
        <div className=" col-span-2"></div>
        <div className="bg-[#ffffff] flex flex-col justify-center">
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
            <form onSubmit={handleSubmit}>
              <div className="mb-10">
                <label
                  className="block text-gray-darker text-sm font-bold mb-2"
                  for="email"
                >
                  อีเมลผู้ใช้
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="email"
                  type="text"
                  placeholder="Email"
                  pattern="/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i"
                  reduired
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
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                />
              </div>

              <div className="mb-7">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-uColor-green border border-transparent rounded-md font-semibold capitalize text-[#ffffff] active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition"
                >
                  สมัคร
                </button>
              </div>
            </form>

            <div className="mb-2 text-center">
              มีบัญชีผู้ใช้แล้ว ?{" "}
              <span className="cursor-pointer text-yellow-500">
                <a href="/login">เข้าสู่ระบบ</a>
              </span>
            </div>
          </div>
          {/* )} */}
        </div>
      
    </div>
  );
};

export default Register;
