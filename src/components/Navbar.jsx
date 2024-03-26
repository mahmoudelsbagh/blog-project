import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

// import { IoCloseCircle } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

import { FaFacebook, FaDribbble, FaTwitter, FaBars } from "react-icons/fa";
import Model from "./model";
import UserLoginInfo from "./UserLoginInfo";

// import Showmenu from "./Showmenu";

function Navbar() {
  const [ismenuopen, setisopen] = useState(false);
  const [isactive, setisactive] = useState(false);
  const [ismodelopen, setismodelopen] = useState(false);
  const [isuserlogin, setisuserlogin] = useState(false);
  const [username, setusername] = useState("");

  const handleusername = (name) => {
    setusername(name);
    setisuserlogin(true);
    localStorage.setItem("user", JSON.stringify({ name, isuserlogin: true }));
  };

  console.log(isactive);
  const handlemodelopen = () => {
    setismodelopen(!ismodelopen);
  };
  const handleuserlogin = () => {
    setisuserlogin(true);
    handlemodelopen();
  };
  const nav_items = [
    { path: "/", link: "home" },
    { path: "/about", link: "about" },
    { path: "/contact", link: "contact" },
    { path: "/services", link: "services" },
    { path: "/blogs", link: "blogs" },
  ];
  return (
    <header className="bg-black fixed top-0 right-0 left-0 h-30  ">
      <Model
        setismodelopen={setismodelopen}
        username={username}
        handleusername={handleusername}
        ismodelopen={ismodelopen}
        handlemodelopen={handlemodelopen}
        isuserlogin={isuserlogin}
        handleuserlogin={handleuserlogin}
      />
      <nav className="px-4 py-4 flex justify-between max-w-5xl mx-auto items-center  ">
        <a className="text-3xl font-semibold text-white first-letter:text-orange-500 ">
          Design <span className="text-orange-400">dk</span>
        </a>
        <div className="our-links md:flex justify-between items-center gap-6 hidden ">
          {nav_items.map((element, index) => {
            return (
              <NavLink
                className={({ isActive }) => {
                  return (
                    " hover:text-orange-500 font-bold font-medium " +
                    (isActive ? "oulinks text-orange-500" : "text-white")
                  );
                }}
                onClick={() => setisactive(true)}
                key={element.path}
                to={element.path}
              >
                <i>{element.link}</i>
              </NavLink>
            );
          })}
        </div>

        <div className="flex gap-10 items-center ">
          <div className="social-icons md:flex gap-5 cursor-pointer items-center hidden">
            <a
              className="text-white hover:text-orange-500 transition-all ease-in-out duration-200 "
              href="https://www.facebook.com/mahmoud.elsbagh.79?mibextid=ZbWKwL"
            >
              <FaFacebook />
            </a>

            <i className="text-white hover:text-orange-500 transition-all ease-in-out duration-200">
              <FaDribbble />
            </i>

            <i className="text-white hover:text-orange-500 transition-all ease-in-out duration-200">
              <FaTwitter />
            </i>
          </div>

          <div className="items-center flex gap-3  ">
            <i
              className="text-white cursor-pointer  hover:text-orange-500 text-2xl md:hidden  transition-all duration-100 ease-in-out delay-75  "
              onClick={() => setisopen(!ismenuopen)}
            >
              {ismenuopen ? <IoMdClose /> : <FaBars />}
            </i>
            {/* {isuserlogin ? (
              <UserLoginInfo
                username={username}
                setisuserlogin={setisuserlogin}
              />
            ) : (
              <a
                onClick={handlemodelopen}
                className="text-white  bg-orange-400 px-5 py-3 rounded cursor-pointer hover:bg-orange-200 font-bold text-1xl hover:text-orange-500 hover:bg-white transition-all duration-200 ease-in font-medium"
              >
                Login
              </a>
            )} */}
            <UserLoginInfo
              isuserlogin={isuserlogin}
              setisuserlogin={setisuserlogin}
              username={username}
              handlemodelopen={handlemodelopen}
            />
          </div>
        </div>
      </nav>

      {ismenuopen ? (
        <div
          className={`md:hidden gap-12px px-4 py-3 transition-all ease-out duration-150 space-y-4  `}
        >
          {nav_items.map((element) => {
            return (
              <Link
                className="text-white hover:text-orange-500 font-bold font-medium block    "
                key={element.path}
                to={element.path}
                onClick={() => setisopen(!ismenuopen)}
              >
                {element.link}
              </Link>
            );
          })}
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
