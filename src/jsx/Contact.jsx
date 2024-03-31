import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";


const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("bread");
      if (contactSection) {
        const scrollPosition = window.scrollY + window.innerHeight;
        const contactSectionPosition = contactSection.offsetTop;
        if (scrollPosition > contactSectionPosition) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ y: 0 });
    }
  }, [isVisible, controls]);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [userData, setUserData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  let name, value;
  const postUserData = () => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { Name, Email, Subject, Message } = userData;
    if (Name && Email && Subject && Message) {
      const res = await fetch(
        "https://portfolio-39a04-default-rtdb.asia-southeast1.firebasedatabase.app/userDataRecord.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name,
            Email,
            Subject,
            Message,
          }),
        }
      );
      if (res) {
        setUserData({
          Name: "",
          Email: "",
          Subject: "",
          Message: "",
        });
        alert("Message Sent");
      } else {
        alert("Please fill the data");
      }
    } else {
      alert("Please fill the data");
    }
  };

  return (
    <div>
      <h2
        id="contact-section"
        className="text-3xl font-bold mt-14 mb-20 leading-tight text-gray-100 hover:text-green-500 sm:text-4xl lg:text-5xl"
      >
        <br className="block sm:hidden" /> I am open to work
      </h2>
      <div className="min-h-screen rounded-2xl bg-gradient-to-r from-indigo-700 via-indigo-500 to-purple-700 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="text-center pb-6">
              <h1 className="text-3xl">Contact Me</h1>
            </div>

            <motion.form
              className="space-y-4"
              method="POST"
              initial={{ y: 100 }}
              animate={controls}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <motion.input
                className="shadow bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-700 text-white placeholder-gray-200 ::placeholder border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                value={userData.Name}
                onChange={postUserData}
                name="Name"
              />

              <motion.input
                className="shadow bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-700 text-white placeholder-gray-200 ::placeholder border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                value={userData.Email}
                onChange={postUserData}
                name="Email"
              />

              <motion.input
                className="shadow bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-700 text-white placeholder-gray-200 ::placeholder border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Subject"
                value={userData.Subject}
                onChange={postUserData}
                name="Subject"
              />

              <motion.textarea
                className="shadow bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-700 text-white placeholder-gray-200 ::placeholder border rounded h-64 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Message"
                name="Message"
                value={userData.Message}
                onChange={postUserData}
                style={{ height: "121px" }}
                initial={{ y: 100 }}
                animate={controls}
                transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
              ></motion.textarea>

              <div className="flex justify-center">
                <motion.input
                  onClick={submitData}
                  className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                  type="submit"
                  value="Send ➤"
                  initial={{ y: 100 }}
                  animate={controls}
                  transition={{ type: "spring", stiffness: 120, delay: 0.4 }}
                />
              </div>
            </motion.form>
          </div>
        </div>
      </div>

      {/* Back-to-top button */}
      {isVisible && (
        <button
          id="to-top-button"
          onClick={goToTop}
          title="Go To Top"
          className="fixed z-50 bottom-10 right-10 p-4 border-0 w-14 h-14 rounded-full shadow-md bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
          </svg>
          <span className="sr-only">Go to top</span>
        </button>
      )}
      
      {/* Scroll-to-top button */}
      <button
        id="to-top-button"
        onClick={goToTop}
        title="Go To Top"
        className="hidden fixed z-50 bottom-10 right-10 p-4 border-0 w-14 h-14 rounded-full shadow-md bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
        </svg>
        <span className="sr-only">Go to top</span>
      </button>
    </div>
  );
};

export default Contact;
