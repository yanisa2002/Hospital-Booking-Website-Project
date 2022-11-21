import React, { useState, useRef, useEffect } from "react";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const defaultValues = {
    Email: email,
    Password: pwd,
  };

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
    setPwd("");
  };

  return (
  
      <div className="grid grid-cols-3 bg-uColor-bg font-prompt min-w-[800px] h-screen">
        <div className=" col-span-2"></div>
        <div className="bg-[#ffffff] flex flex-col justify-center">
          <div className="mt-6 text-3xl font-bold text-center text-red-600">
            QHospital
          </div>
          <div className="mt-2 text-xl font-medium text-center">
            เข้าสู่ระบบ
          </div>

          <div
            className="flex flex-col p-8 m-8 bg-[#ffffff]  md:min-w-[500px] 
     sm:min-w-[300px] min-w-[200px] "
          >
            <label className="block text-gray-darker text-lg font-bold mb-8">
              เข้าสู่บัญชีของคุณ
            </label>
            <div className="w-full">
              <p
                ref={errRef}
                className={`${
                  errMsg ? "errmsg" : "offscreen"
                } text-red-600 text-md text-center`}
                aria-live="assertive"
              >
                {errMsg}
              </p>
            </div>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              {/* <Link to="/"> */}
              <div className="mb-7">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-uColor-green border border-transparent rounded-md font-semibold capitalize text-[#ffffff] hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition"
                >
                  เข้าสู่ระบบ
                </button>
              </div>
            </form>
            {/* </Link> */}
            {/* </form> */}

            <div className="mb-2 text-center">
              ยังไม่มีบัญชีผู้ใช้ ?{" "}
              <span className="cursor-pointer  text-yellow-500">
                <a href="/register">ลงทะเบียน</a>
              </span>
            </div>
          </div>
          {/* )} */}
        </div>
      </div>
    
  );
};

export default Login;
