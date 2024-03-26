import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { data } from "autoprefixer";

function Latestblogs() {
  const [latestblog, setlatestblogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setlatestblogs(data));
  });
  // console.log(latestblog);
  let parsedblogsA = latestblog.slice([0], [5]);
  let parsedblogsB = latestblog.slice([5], [11]);
  const blogVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const [isactive, setisactive] = useState(false);
  return (
    <>
      <h2 className="font-bold text-3xl text-center">Latest features</h2>

      <div className="mt-2 mb-3 px-1 py-2   ">
        {parsedblogsA.map((blogs) => {
          return (
            <motion.div
              key={blogs.id}
              initial="hidden"
              whileInView="visible"
              variants={blogVariants}
              className="  border border-b-2 px-2 py-2 mb-4"
            >
              <h4 className="text-2xl mt-2 mb-2">
                {blogs.title.slice([0], [15])}...
              </h4>
              <p className="mt-1 mb-1 text-gray-500">
                Published date:{blogs.published_date}
              </p>
              <div className="flex items-center justify-start gap-2 hover:text-orange-500">
                <Link to={"/blogs"} className="font-medium   ">
                  Learn More
                </Link>
                <FaArrowRight className=" cursor-pointer" />
              </div>
            </motion.div>
          );
        })}
        {!isactive ? (
          <button
            onClick={() => setisactive(!isactive)}
            className="font-medium flex self-center bg-orange-500 text-white text-xl px-2 py-1 rounded mx-[50px] mx-auto"
          >
            Show more{" "}
          </button>
        ) : null}
      </div>

      <>
        {isactive ? (
          <div className="mt-2 mb-3 px-1 py-2 transition-all ease-in duration-100">
            {parsedblogsB.map((blogs, i) => {
              return (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={blogVariants}
                  // transition={{ duration: 2 }}
                  key={blogs.id}
                  className=" border border-b-2 px-2 py-2 mb-3"
                >
                  <h6 className="text-1xl mt-2 mb-2">{blogs.title}</h6>
                  <p className="mt-1 mb-1 text-gray-500">
                    Published date:{blogs.published_date}
                  </p>
                  <div className="flex items-center justify-start gap-2 hover:text-orange-500">
                    <Link to={"/blogs"} className="font-medium   ">
                      Learn More
                    </Link>
                    <FaArrowRight className=" cursor-pointer" />
                  </div>
                </motion.div>
              );
            })}

            <button
              onClick={() => setisactive(!isactive)}
              className="font-medium flex self-center bg-orange-500 text-white text-xl px-2 py-1 rounded mx-[50px] mx-auto"
            >
              Show less{" "}
            </button>
          </div>
        ) : null}
      </>
    </>
  );
}

export default Latestblogs;
