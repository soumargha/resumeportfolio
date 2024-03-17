import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  useEffect(() => {
    // Get the 'to top' button element by ID
    var toTopButton = document.getElementById("to-top-button");

    // Check if the button exists
    if (toTopButton) {
      // On scroll event, toggle button visibility based on scroll position
      window.onscroll = function() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
          toTopButton.classList.remove("hidden");
        } else {
          toTopButton.classList.add("hidden");
        }
      };

      // Function to scroll to the top of the page smoothly
      window.goToTop = function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    }
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <h2 id='contact-section' className="text-3xl font-bold mt-4 mb-20 leading-tight text-gray-100 hover:text-green-500 sm:text-4xl lg:text-5xl">
        <br className="block sm:hidden" /> I am open to work
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="min-h-screen rounded-2xl bg-gradient-to-r from-indigo-700 via-indigo-500 to-purple-700 py-6 flex flex-col justify-center sm:py-12"
      >
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="text-center pb-6">
              <h1 className="text-3xl">Contact Me</h1>
            </div>

            <form className="space-y-4">
              <motion.input
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="shadow bg-purple-700 text-white placeholder-white::placeholder border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                name="Name"
              />

              <motion.input
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="shadow bg-purple-700 text-white placeholder-white::placeholder border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                name="email"
              />

              <motion.input
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="shadow bg-purple-700 text-white placeholder-white::placeholder border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Subject"
                name="_subject"
              />

              <motion.textarea
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="shadow bg-purple-700 text-white placeholder-white::placeholder border rounded h-64 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Type your message here..."
                name="message"
                style={{ height: '121px' }}
              ></motion.textarea>

              <div className="flex justify-center">
                <motion.input
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                  type="submit"
                  value="Send ➤"
                />
              </div>
            </form>
          </div>
        </div>
      </motion.div>

      {/* Back-to-top button */}
      <button
        id="to-top-button"
        onClick={goToTop}
        title="Go To Top"
        className="hidden fixed z-50 bottom-10 right-10 p-4 border-0 w-14 h-14 rounded-full shadow-md bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
        </svg>
        <span className="sr-only">Go to top</span>
      </button>
    </div>
  );
};

export default Contact;
