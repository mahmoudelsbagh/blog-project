import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [issent, setIsSent] = useState(false);
  const form = useRef();
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup
  useEffect(() => {
    const handleclickindocument = (event) => {
      if (isPopupOpen && event.target !== form.current) {
        setIsPopupOpen(false);
        setIsSent(false);
      }
    };
    document.addEventListener("click", handleclickindocument);
    return () => {
      document.removeEventListener("click", handleclickindocument);
    };
  }, [isPopupOpen]);
  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.sendForm(
        "service_bvanpsw",
        "template_86ydtsk",
        form.current,
        { publicKey: "HklJlwomCh_Vu5FI8" }
      );
      console.log("SUCCESS!", response.status, response.text);
      setIsSent(true);
      setIsPopupOpen(true); // Set sent state for success message
      form.current.reset(); // Clear form fields after successful send
    } catch (error) {
      console.error("FAILED...", error.text);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setIsSent(false);
  };

  return (
    <section className="bg-white py-20">
      <div className="py-8 lg:py-10 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-3 lg:mb-10 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Have a question or suggestion?
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Your email
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Your message
            </label>
            <textarea
              name="message"
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            value="send"
            className={`py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-500 sm:w-fit hover:shadow-lg  focus:outline-none  ${
              issent ? "bg-green-500 hover:bg-green-700" : ""
            }`}
          >
            {issent ? "Sent" : "Send message"}
          </button>
        </form>
        {isPopupOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75 p-4">
            <div className="bg-white rounded-lg shadow-lg px-8 py-5 text-center">
              <p className="text-green-500 font-medium">Success!</p>
              <p>Your message has been sent. Thank you for contacting us!</p>
              <button
                onClick={closePopup}
                className="mt-4 inline-flex items-center px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
