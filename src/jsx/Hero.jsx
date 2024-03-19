import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import soumarghaphoto from '../Assets/soumarghaphoto.jpg';
import Bread from './Bread';
import Portfolio from '../jsx/Portfolio';
import Internships from './Internships';
import Contact from "../jsx/Contact";
import Footer from './Footer';
import Quote from './Quote';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const imageControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    const animateSection = async () => {
      await imageControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 }
      });
      await textControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 }
      });
    };
    animateSection();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-14 pt-10 rounded-3xl overflow-hidden bg-black md:pt-0 sm:pt-16 2xl:pt-16 md:border-4 md:border-white"
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={imageControls}
              whileHover={{ scale: 1.1 }} // Add hover effect
              className={`md:order-2 md:ml-6 mt-6 md:mt-0 relative ${isMobile ? 'mt-[-1rem]' : 'sm:mt-0'}`}
            >
              <img className="w-full md:max-w-lg md:mx-auto rounded-2xl mb-3 2xl:origin-bottom 2xl:scale-110 mt-[-1rem] sm:mt-0" src={soumarghaphoto} alt="" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={textControls}
              className="md:order-1 flex-grow"
            >
              <h2 className="text-3xl md:ml-[-2rem] font-bold leading-tight text-gray-50 sm:text-4xl lg:text-5xl">Hi 👋 I am
                <br className="block sm:hidden" /> Soumargha Bhattacharjee
              </h2>
              <p className="max-w-lg mt-9  ml-4 sm:ml-16 box-border text-xl italic leading-relaxed text-white md:mt-8">
                Full stack developer and data analyst with internship experience in multiple companies. Currently pursuing BTech from the National Institute of Technology Agartala (2021-2025).
              </p>
              <div className="mt-4 text-xl text-white md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 "></span>
                  <p className="relative"></p>
                </span>
                <h2 className="block mt-4 ml-2 font-bold sm:mt-0 sm:mr-20">Connect with me </h2>
                <div className="flex mt-4 sm:mt-14 ml-9 sm:ml-40">
                  <a href="https://twitter.com/soum_argha" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-twitter text-4xl mr-4 sm:mr-4 lg:mr-8 hover:text-blue-400" />
                  </a>
                  <a href="https://www.instagram.com/i_lluminated/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-instagram text-4xl mr-4 sm:mr-4 lg:mr-8 hover:text-pink-400" />
                  </a>
                  <a href="https://www.facebook.com/soumargha.bhattacharya" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-facebook text-4xl mr-4 sm:mr-4 lg:mr-8 hover:text-blue-600" />
                  </a>
                  <a href="https://www.linkedin.com/in/soumargha-bhattacharjee-54b48722a/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-linkedin text-4xl mr-4 sm:mr-4 lg:mr-8 hover:text-blue-800" />
                  </a>
                  <a href="https://github.com/soumargha" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-github text-4xl  hover:text-gray-600" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <Bread />
      <Portfolio />
      <Internships />
      <Contact />
      <Quote/>
      <Footer />
    </>
  );
};

export default Hero;
