import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Blogcards from "./Blogcards";
import { createRoutesFromElements } from "react-router-dom";
import Pagination from "./pagination";
import Categories from "./Categories";
import Latestblogs from "./Latestblogs";

export default function Blogpage() {
  const [blogs, setblogs] = useState([]);
  const [currentpage, setcurrentpage] = useState(1);
  const pagesize = 12;
  const [selectedcategory, setselectedcategory] = useState(null);
  const [isactive, setisactive] = useState(false);
  const [activepage, setactivepage] = useState(1);
  const [activecategory, setactivecategory] = useState(null);

  useEffect(() => {
    async function getdata() {
      let url = `http://localhost:5000/blogs?page=${currentpage}?limit=${pagesize}`;

      if (selectedcategory) {
        url += `&category=${selectedcategory}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setblogs(data);
      // console.log(data);
    }
    getdata();
  }, [selectedcategory, pagesize, currentpage]);

  const handlecategory = (category) => {
    setselectedcategory(category);
    setcurrentpage(1);
    setisactive(category);
    setactivecategory(category);
  };

  const handlepages = (pagenumber) => {
    setcurrentpage(pagenumber);
    setactivepage(pagenumber);
  };
  return (
    <div className=" ">
      <Categories
        blogs={blogs}
        handlecategory={handlecategory}
        activepage={activepage}
        activecategory={activecategory}
      />

      <div className="flex flex-col  md:flex-row  gap-5">
        <Blogcards
          blogs={blogs}
          selectedcategory={selectedcategory}
          pagesize={pagesize}
          currentpage={currentpage}
        />

        <div className=" w-full min-h-90">
          <Latestblogs blogs={blogs} />
        </div>
      </div>
      <Pagination
        pagesize={pagesize}
        handlepages={handlepages}
        blogs={blogs}
        activepage={activepage}
      />
    </div>
  );
}
