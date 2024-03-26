import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser, FaClock } from "react-icons/fa";

function Productsdetails() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(null);
  const [product, setProduct] = useState([]);
  const [isError, setError] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchingData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:5000/blogs/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchingData();
  }, [id]);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className="bg-black py-24 px-12">
        <h2 className="text-5xl text-white font-bold text-center font-sans">
          Single Blog Page
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto py-10"
      >
        {isLoading && <h3 className="text-center text-xl">Loading...</h3>}

        {product.map((p) => (
          <motion.div
            key={p.id}
            initial={{ scale: 0.8, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="product-details rounded shadow-md mb-10 md:w-8/12 mx-auto"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-64 object-cover rounded-t-md"
            />
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="p-4 flex flex-col space-y-2"
            >
              <h2 className=" font-semibold text-gray-600">
                title:<br></br>
                {p.title}
              </h2>
              <p className="font-medium  font-bold">
                content:<br></br>
                {p.content}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dignissimos, mollitia expedita repellat tempora modi voluptas
                iusto beatae, accusamus cupiditate, quam corporis. Nostrum,
                earum tempore enim corrupti dolore laudantium sunt eligendi.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
                tempore officia et error animi est, facere vero amet dolor qui
                ipsa ipsum corrupti praesentium voluptates maiores saepe sint
                earum sequi?
              </p>
              <h2 className="  text-gray-600 inline-flex items-center gap-1">
                <FaUser />:{p.author}
              </h2>
              <p className="text-sm text-gray-600 inline-flex items-center gap-1">
                <FaClock />: {p.reading_time}
              </p>
              <div className="flex flex-col items-center justify-between">
                <button
                  onClick={handleLike}
                  className={`like-button px-4 py-2 rounded-md text-center text-lg ${
                    isLiked
                      ? "bg-orange-500 text-white"
                      : "border border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {isLiked ? "Liked!" : "I Like It"}
                </button>
                {isLiked && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="text-orange-500 text-center font-medium text-lg mt-2"
                  >
                    Thanks for liking our Blog!
                  </motion.p>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default Productsdetails;
