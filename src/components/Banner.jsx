import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
function Banner() {
  return (
    <div className=" px-4 py-28 bg-black text-white mx-auto">
      <div className="text-white text-center font-primary">
        <h1 className="  font-bold text-5xl lg:text-7xl mb-5 leading-snug">
          Welcome To Our Blog
        </h1>
        <p className=" lg:w-3/4 mx-auto text-gray-100 mb-5 ">
          Start your blog today and join a community of writers and readers who
          are passionate about sharing therir stories and ideas . we offer
          everything u need to get started ,from helpful tips and tutorial
        </p>
        <div className="flex items-center justify-center gap-2 hover:text-orange-500">
          <Link to={"/blogs"} className="font-medium   ">
            Learn More
          </Link>
          <FaArrowRight className=" cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
