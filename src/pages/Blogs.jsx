import React from "react";
import Banner from "../components/Banner";
import Blogpage from "../components/Blogpage";
import Categories from "../components/Categories";

function Blogs() {
  return (
    <>
      <div className="bg-black px-4 py-32  ">
        <h1 className=" font-primary font-bold text-5xl lg:text-7xl text-center text-white mb-5">
          Blog Page
        </h1>
      </div>

      <div className="max-w-5xl mx-auto">
        <Blogpage />
      </div>
    </>
  );
}

export default Blogs;
