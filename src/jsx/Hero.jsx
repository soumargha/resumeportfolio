/* eslint-disable no-unused-vars */
import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import soumargha2 from '../Assets/soumargha2.jpg';
import Bread from './Bread';
import Portfolio from '../jsx/Portfolio';
import Internships from './Internships';
import Contact from "../jsx/Contact";
import Footer from './Footer';

const Hero = () => {
  return (
    <>
      <section className="mt-14 pt-10 rounded-3xl overflow-hidden bg-gradient-to-r from-blue-500 via-blue-800 to-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:order-1 flex-grow">
              <h2 className="text-3xl ml-[-2rem] font-bold leading-tight text-gray-50 sm:text-4xl lg:text-5xl">Hi 👋 I am
                <br className="block sm:hidden" /> Soumargha Bhattacharjee
              </h2>
              <p className="max-w-lg mt-3 ml-4 sm:ml-14 text-xl leading-relaxed text-white md:mt-8">
                Full stack developer and data analyst with internship experience in multiple companies. Currently pursuing BTech from the National Institute of Technology Agartala.
              </p>
              <div className="mt-4 text-xl text-white md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 "></span>
                  <p className="relative"></p>
                </span>
                <h2 className="block mt-4 font-bold sm:mt-0 sm:mr-20">Connect with me </h2>
                <div className="flex mt-4 sm:mt-14 ml-4 sm:ml-48">
                  {/* Add your social media links below with appropriate URLs */}
                  <a href="https://twitter.com/soum_argha" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-twitter text-4xl mr-4 hover:text-blue-400" />
                  </a>
                  <a href="https://www.instagram.com/i_lluminated/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-instagram text-4xl mr-4 hover:text-pink-400" />
                  </a>
                  <a href="https://www.facebook.com/soumargha.bhattacharya" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-facebook text-4xl mr-4 hover:text-blue-600" />
                  </a>
                  <a href="https://www.linkedin.com/in/soumargha-bhattacharjee-54b48722a/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-linkedin text-4xl mr-4 hover:text-blue-800" />
                  </a>
                  <a href="https://github.com/soumargha" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-github text-4xl hover:text-gray-600" />
                  </a>
                </div>
              </div>
            </div>
            <div className="md:order-2 md:ml-6 mt-6 md:mt-0 relative">
              <img className="w-full md:max-w-lg md:mx-auto rounded-2xl mb-3 2xl:origin-bottom 2xl:scale-110" src={soumargha2} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Bread />
      <Portfolio />
      <Internships />
      <Contact />
      <Footer />
    </>
  );
};

export default Hero;
