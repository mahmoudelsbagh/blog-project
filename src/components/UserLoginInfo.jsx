import React, { useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";

function UserLoginInfo({
  username,
  setisuserlogin,
  handlemodelopen,
  isuserlogin,
}) {
  const [isdropdownopenm, setisdropdown] = useState(false);
  const dropwdownRef = useRef(null);
  const [ishover, setishover] = useState(false);

  useEffect(() => {
    const storedtoken = JSON.parse(localStorage.getItem("user"));
    console.log(storedtoken);
    if (storedtoken) {
      setTimeout(() => {
        console.log(storedtoken.isuserlogin);
        setisuserlogin(storedtoken.isuserlogin);
      }, 1000);
    }
  }, []);
  const storedtoken = JSON.parse(localStorage.getItem("user"));
  console.log(storedtoken);

  const handlelogout = () => {
    setisuserlogin(false);
    localStorage.removeItem("user");
  };

  const handledropdown = () => {
    setisdropdown(!isdropdownopenm);
  };
  return (
    <>
      {isuserlogin ? (
        <div className="inline-block ">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            data-dropdown-trigger="hover"
            className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
            type="button"
            onClick={handledropdown}
          >
            <FaUser />

            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            ref={dropwdownRef}
            id="dropdown"
            className={`${
              isdropdownopenm ? "visible" : "hidden"
            }  z-50 absolute   sm:me-10 bg-white divide-y divide-gray-100 text-gray-700 rounded-lg shadow w-25 right-2 md:right-16 md:w-44 dark:bg-gray-700 transition-all duration-150 p-3 `}
          >
            <h2 className="text-center text-orange-500 text-[20px]">
              Welcome back
            </h2>
            <ul
              className="py-2 text-sm "
              aria-labelledby="dropdownDefaultButton"
            >
              <li
                onMouseEnter={() => setishover(true)}
                onMouseLeave={() => setishover(false)}
              >
                {username ? (
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 px-4 py-2  text-[20px] font-semibold"
                  >
                    <FaUser />:{username}
                  </a>
                ) : (
                  <p className="text-gray-500">
                    {storedtoken.name.split("@")[0]}
                  </p>
                )}
              </li>

              <li className="flex justify-center mt-2">
                <a
                  onClick={handlelogout}
                  className="text-white  bg-orange-400 px-3 py-2 rounded cursor-pointer hover:bg-orange-200 font-bold text-1xl hover:text-orange-500 hover:bg-white transition-all duration-200 ease-in font-medium"
                >
                  Log out
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <a
          onClick={handlemodelopen}
          className="text-white  bg-orange-400 px-5 py-3 rounded cursor-pointer hover:bg-orange-200 font-bold text-1xl hover:text-orange-500 hover:bg-white transition-all duration-200 ease-in font-medium"
        >
          Login
        </a>
      )}
    </>
  );
}

export default UserLoginInfo;
