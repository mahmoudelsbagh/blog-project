import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IoCloseCircle, IoCloudyNight, IoScanCircle } from "react-icons/io5";

function Model({
  ismodelopen,
  handlemodelopen,
  handleuserlogin,
  isuserlogin,
  username,
  handleusername,
  setismodelopen,
}) {
  const [isnotvalid, setisnotvalid] = useState(false);
  const form = useRef(null);

 
  const handleform = (e) => {
    e.preventDefault();
    let newusername = e.target.elements.email.value;
    let newpassword = e.target.elements.password.value;
    console.log(newusername);
    console.log(newpassword);
    const isvalid = newusername.length > 0 && newpassword.length > 7;

    if (!isvalid) {
      setisnotvalid(true);
    }
    e.target.elements.password.value = "";
  };
  const handlecloselogin = () => {
    handlemodelopen();
    console.log("model open ", ismodelopen);
  };

  console.log(ismodelopen);
  return (
    <>
      {ismodelopen ? (
        <div className="fixed z-50 inset-0 flex justify-center items-center bg-gray-600 opacity-90 ">
          <div className="bg-white relative flex flex-col justify-center  px-10  rounded-md shadow z-0 transition-all duration-200">
            <i className="absolute top-3 end-3">
              <IoCloseCircle
                className="text-[20px] cursor-pointer"
                onClick={handlecloselogin}
              />
            </i>

            <h3 className="font-semibold  text-orange-500 text-2xl m-3 my-7">
              {" "}
              Log In & Explore More
            </h3>

            <form
              className="space-y-4 md:space-y-6"
              action="#"
              ref={form}
              onSubmit={handleform}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  onChange={(e) => {
                    handleusername(e.target.value);
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className={`    ${isnotvalid ? "border-red-500" : null}    
                  
                        bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 
                  `}
                  required=""
                />
                <p className="text-gray-500 opacity-50 text-sm">
                  Strong passwords are essential! Use a mix of uppercase and{" "}
                  <br></br>
                  lowercase letters, numbers, and symbols.
                </p>
              </div>
              {isnotvalid ? (
                <p className="text-red-500 text-sm">
                  please enter a valid username and password
                </p>
              ) : null}
              <div className="flex  gap-y-2 justify-center ">
                <button
                  type="submit"
                  className=" text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-500-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-3 "
                  onClick={handleuserlogin}
                >
                  Login{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Model;
