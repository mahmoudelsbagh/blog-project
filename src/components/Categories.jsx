import React from "react";
import Latestblogs from "./Latestblogs";

export default function Categories({
  activecategory,
  handlecategory,
  activepage,
  blogs,
}) {
  const categories = [...new Set(blogs.map((blogs) => blogs.category))];
  // const categories = [
  //   "all",
  //   "Health",
  //   "Fintech",
  //   "Startups",
  //   "Enterprise",
  //   "AI",
  //   "Apps",
  //   "Tech",
  // ];

  return (
    <div className="flex flex-wrap    gap-3 px-5 mt-5 mb-7 max-w-5xl mx-auto border border-b-2 px-2 py-2 rounded shadow-lg">
      <button
        onClick={() => {
          handlecategory(null);
        }}
        className={`border  px-4 py-2 rounded text-[13px] hover:bg-orange-500 hover:text-white transition ease-in duration-150 ${
          activecategory ? " " : "activebutton"
        }`}
      >
        All
      </button>
      {categories.map((category, i) => {
        return (
          <button
            className={`${
              activecategory == category ? "activebutton " : null
            } border   px-3 py-2 rounded text-[15px] hover:text-white hover:bg-orange-500 transition ease-in duration-150`}
            key={category}
            onClick={() => handlecategory(category)}
          >
            {categories[i]}
          </button>
        );
      })}
    </div>
  );
}
