import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Pagination.css";
import "../../src/App.css";
function Pagination({ blogs, handlepages, pagesize, activepage }) {
  const numpage = Math.ceil(blogs.length / pagesize);

  const handlepreviouspage = (AcPage) => {
    if (AcPage > 1) {
      handlepages(AcPage - 1);
    }
  };
  const handlenextpage = (AcPage) => {
    if (AcPage < numpage) {
      handlepages(AcPage + 1);
    }
  };

  return (
    <ul className="flex justify-center mt-3 mb-3">
      <li className="grid grid-cols-5 md:grid-cols-10 gap-6">
        <button
          onClick={() => handlepreviouspage(activepage)}
          className="border  border-gray-500 px-3 py-1 rounded text-[15px] bg-orange-500 text-white hover:text-orange-500 hover:bg-white transition ease-in duration-150 "
        >
          <FaArrowLeft />
        </button>
        {Array.from({ length: numpage }, (_, i) => i + 1).map((page, i) => {
          return (
            <button
              className={` ${
                activepage == page ? "activebutton" : null
              } border  border-gray-500 px-3 py-1 rounded text-[15px]  hover:text-white hover:bg-orange-500 transition ease-in duration-150  `}
              key={i}
              onClick={() => handlepages(page)}
            >
              {page}{" "}
            </button>
          );
        })}
        <button
          onClick={() => handlenextpage(activepage)}
          className="border border-gray-500 px-3 py-1 rounded text-[15px] bg-orange-500 text-white hover:text-orange-500 hover:bg-white transition ease-in duration-150"
        >
          <FaArrowRight />
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
