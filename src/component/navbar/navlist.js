import React from "react";
import { Link, useLocation } from "react-router-dom";
function Navlist(props) {
  const { toggle, isOpen } = props;
  const location = useLocation();
  return (
    <div
      className={
        isOpen == true
          ? "block text-center items-center space-y-5 bg-uColor "
          : "hidden"
      }
      onClick={toggle}
    >
      {location.pathname == "/staff" ? (
        ""
      ) : (
        <>
          <div className="pt-3 text-base hover:text-lg hover:font-semibold transition duration-0 hover:duration-700">
            <Link className="p-4  " to="/">
              จองคิว
            </Link>
          </div>
          <div className=" text-base hover:text-lg hover:font-semibold transition duration-0 hover:duration-700">
            <Link className="p-4 " to="/history">
              ประวัติการจองคิว
            </Link>
          </div>
        </>
      )}

      <div className="pb-4">
        {/* {sessionStorage.getItem("token") == null ? ( */}
        <Link to="/login">
          <p
            href="#"
            className="inline-block text-sm text-[#ffffff] px-4 py-2  rounded-full   lg:mt-0 bg-uColor-green"
          >
            Log in
          </p>
        </Link>
        {/* ) : (
                <a
                  href="#"
                  class="inline-block text-sm text-white px-4 py-2  rounded-full lg:mt-0 bg-[#FB743D]"
                //   onClick={logOut}
                >
                  Log out
                </a>
              )} */}
      </div>
    </div>
  );
}

export default Navlist;
