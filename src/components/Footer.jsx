import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaDribbble, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const [subscribedEmails, setSubscribedEmails] = useState(["mahmoud elsbagh"]);
  const [isnotvalid, setisnotvalid] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const date = new Date();
  let year = date.getFullYear();

  console.log(year);

  const form = useRef();

  useEffect(() => {
    const clickonDocument = (e) => {
      if (isPopupOpen && e.target != form.current) {
        setIsPopupOpen(false);
      }
    };

    document.addEventListener("click", clickonDocument);
    return () => {
      document.removeEventListener("click", clickonDocument);
    };
  });
  const handleclosepopup = () => {
    setIsPopupOpen(false);
  };

  const handleSubscribe = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const newEmail = event.target.elements.email.value;

    // Basic email validation (optional, consider a more robust library)
    if (!/\S+@\S+\.\S+/.test(newEmail)) {
      setisnotvalid(true);
      return;
    }

    setSubscribedEmails([...subscribedEmails, newEmail]); // Add new email to array
    event.target.elements.email.value = ""; // Clear the input field
    console.log(isnotvalid);
    setIsPopupOpen(true);
  };

  console.log(subscribedEmails);

  const footercombonents = [
    ["News", "World", "Games", "Refrences"],
    ["Web", "eCommerce", "Business", "Entertainment", "Portflio"],
    ["Media", "Prochure", "Nonprofit", "Education", "Projects"],
    ["Infoopernier", "personal", "Wikic", "Forum", "Projects"],
  ];

  return (
    <footer className="bg-black  mt-7 px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-4 rounded ">
      <div className="grid sm:grid-cols-1 md:grid-cols-6 gap-12 md:px-24">
        {footercombonents.map((category, index) => (
          <div key={index} className="sm:flex flex-col ">
            <p className="text-white font-semibold text-[16px] first-letter:uppercase">
              {category[0]}
            </p>
            <ul className="">
              <li className="flex flex-col justify-center gap-y-1">
                {/* Directly render category items from the array */}
                {category.slice(1).map((cat) => (
                  <a
                    href=""
                    className="text-gray-500 text-base transition-colors duration-300 hover:text-orange-500"
                    key={cat}
                  >
                    {cat}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        ))}
        {/* Subscribe section with flexbox and flex-shrink-0 */}
        <div className="flex flex-col flex-shrink-0 md:max-w-md lg:col-span-2">
          <p className="text-white font-semibold text-[16px]">
            {" "}
            Subscribe for updates
          </p>

          <form
            action=""
            className="mt-3 flex flex-col md:flex-row md:items-center   gap-3 w-3/4 md:w-full"
            onSubmit={handleSubscribe}
            ref={form}
          >
            <input
              type="email"
              name="email"
              required
              onChange={(e) =>
                setSubscribedEmails(...subscribedEmails, e.target.value)
              }
              className="flex-grow border border-gray-300 h-12 rounded mb-3 bg-white focus:border-purple-500  focus:outline-none shadow-sm appearance-none leading-tight w-full"
            />
            <button
              type="submit"
              className="inline-flex justify-center items-center h-12 mb-3 font-medium px-5 py-2 hover:bg-orange-500 focus:outline-none transition duration-150 ease-in-out text-white rounded border border-gray-300 "
            >
              {" "}
              Subscribe
            </button>
          </form>
          {isnotvalid ? (
            <p className="text-red-600">please enter a valid email address .</p>
          ) : null}

          <p className="text-gray-500 text-sm mt-2 mx-1 w-3/4 md:w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat
            dolorum saepe ea veritatis iure sint eligendi nulla provident,
            quibusdam non voluptatibus expedita odit! Reprehenderit ad natus
            fugiat laudantium beatae.
          </p>
        </div>
        {isPopupOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} // Start hidden and slightly shrunk
            animate={{ opacity: 1, scale: 1 }} // Fade in and scale up smoothly
            transition={{ duration: 0.3 }} // Control animation duration
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-80 p-4"
          >
            <div className="bg-white px-8 py-6 text-center shadow-lg rounded-lg">
              <p className="font-medium text-green-500">
                Your subscription is done!
              </p>
              <button
                className="mt-4 inline-flex items-center px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300"
                onClick={handleclosepopup} // Use consistent naming convention
              >
                Close
              </button>
            </div>
          </motion.div>
        ) : null}
      </div>

      <div className="text-gray-500 mt-5 flex-col justify-between text-center">
        <p className="">©Copyright {year} All rights are reserved </p>
        <div className="flex justify-center items-center gap-7 md:gap-12  my-3">
          <a
            href=""
            className="h-6 w-6 transition-all duration-150 hover:text-orange-500"
          >
            <FaFacebook />
          </a>{" "}
          <a
            href=""
            className="h-6 w-6 transition-all duration-150 hover:text-orange-500"
          >
            <FaDribbble />
          </a>
          <a
            href=""
            className="h-6 w-6 transition-all duration-150 hover:text-orange-500"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
