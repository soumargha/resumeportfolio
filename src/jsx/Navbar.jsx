import React, { useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Navbar = () => {
  const { scrollYProgress } = useViewportScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define the animation variants
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Calculate the width of the scroll bar based on scroll progress
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Handle click event to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle click event to scroll to the specified section
  const handleClick = (sectionId) => (e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
      setIsMenuOpen(false); // Close the menu after clicking on a link
    }
  };

  return (
    <nav>
      {/* Scroll bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 bg-yellow-500"
        style={{ width }}
        initial="hidden"
        animate="visible"
        variants={variants}
      />
      {/* Rest of the Navbar */}
      <div className="max-w-screen-xl mt-[-1rem] flex flex-wrap items-center justify-between mx-auto p-4 relative z-10">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://avatars.githubusercontent.com/u/110277485?v=4" className="h-8 rounded-3xl" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Soumargha</span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`w-full md:flex md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border-t md:border-0 md:mt-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:bg-black bg-black md:dark:bg-black dark:border-black">
            <li>
              <a href="#" className="block py-2 px-3 text-white rounded md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={handleClick('bread')}>Technologies</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={handleClick('projects-section')}>Projects</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={handleClick('internships-section')}>Internships</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={handleClick('contact-section')}>Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
