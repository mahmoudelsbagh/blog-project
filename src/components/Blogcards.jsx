import React from "react";
import { FaUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Blogcards({ blogs, selectedcategory, pagesize, currentpage }) {
  const firstindex = (currentpage - 1) * pagesize;
  const lastindex = firstindex + pagesize;
  blogs = blogs
    .filter((blog) => !selectedcategory || blog.category == selectedcategory)
    .slice(firstindex, lastindex);
  return (
    <div className="grid  md:grid-cols-3 md:gap-14 grid-cols-1 sm:grid-cols-2 transition ease-in duration-150 transition-all ease-in duration-150">
      {blogs.map((blog, i) => {
        return (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }} 
            transition={{ duration: 0.5, delay: i * 0.1 }} 
            layout 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            className="  shadow-lg p-5 max-h-[500px] rounded cursor-pointer hover:shadow-xl mt-2 mb-2 overflow-hidden transition-all ease-in-out duration-100 "
          >
            <img src={blog.image} alt="" />
            <div className="">
              <Link to={`/blogs/${blog.id}`}>
                <h2 className="font-bold mt-2 mb-2 hover:text-blue-600 cursor-pointer text-center min-h-3">
                  {blog.title}
                </h2>
              </Link>
              <p className="flex items-center gap-5 text-[20px ] cursor-pointer hover:text-blue-600 text-gray-600 mt-4 mb-2">
                <FaUser />
                {blog.author}
              </p>
              <p>Published Date:{blog.published_date}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Blogcards;
