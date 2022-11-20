import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ toggle }) => {
  const location = useLocation();
  return (
    <nav
      className={`flex items-center justify-between flex-wrap  p-4 relative shadow-md ${
        location.pathname == "/staff" ? "bg-white shadow-md" : " bg-uColor-bg"
      } text-uColor-green `}
    >
      <div className="flex items-center flex-shrink-0  mr-10">
        <Link to="/" className="pl-8  text-3xl">
          QHospital
        </Link>
      </div>

      <div className="px-4 cusor-ponter md:hidden lg:hidden" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 relative"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      <div className="w-full  flex-grow md:flex md:items-center md:w-auto hidden">
        <div className="text-sm flex md:flex-grow">
          {location.pathname == "/" ? (
            ""
          ) : (
            <>
              <div>
                <Link className="navlink" to="/">
                  จองคิว
                </Link>
              </div>
              <div className="pl-4 ">
                <Link className="navlink" to="/">
                  ประวัติการจองคิว
                </Link>
              </div>
            </>
          )}
        </div>

        <div className="flex  items-center text-[#ffffff] ">
          <div className="flex flex-row  space-x-10  ml-auto ">
            <a className="px-3 py-2 flex items-center"></a>
            {/* {sessionStorage.getItem("token") == null ? ( */}
            <Link to="/">
              <p className="inline-block text-sm text-white px-4 py-3    mt-0 bg-uColor-green">
                Log in
              </p>
            </Link>
            {/* ) : (
              <a
                class="inline-block text-sm text-white px-4 py-3 rounded-full mt-0"
                // onClick={logOut}
              >
                Log out
              </a>
            )} */}
          </div>
        </div>
      </div>
      {/* {modalOn && <ModalLogout setModalOn={setModalOn} />} */}
    </nav>
  );
};

export default Navbar;
