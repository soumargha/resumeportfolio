/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';
import cpp from '../Assets/cpp.png'




// Import your image files

const Navbar = () => {
  return (
    <div>
      <h2 className="text-3xl mb-[-3rem] font-bold mt-24 leading-tight text-gray-100 hover:text-green-500 sm:text-4xl lg:text-5xl">
        <br className="block sm:hidden" /> I am proficient in working with
      </h2>
      <section className="bg-black mt-16 rounded-3xl dark:bg-dark lg:py-[120px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                {[faHtml5, faCss3, faJs].map((icon, index) => (
                  <a
                    key={index}
                    href="javascript:void(0)"
                    className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
                    <FontAwesomeIcon icon={icon} className={`text-8xl ${getColor(icon)}`} />
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center mt-4">
                {[faReact, faNodeJs, faPython].map((icon, index) => (
                  <a
                    key={index}
                    href="javascript:void(0)"
                    className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
                    <FontAwesomeIcon icon={icon} className={`text-8xl ${getColor(icon)}`} />
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center mt-5">
                {/* Add images in each box */}
                <img src={cpp} alt="Image 1" className="mx-4 w-[140px] h-[140px] object-cover ml-10" />
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png" alt="Image 2" className="mx-4 mt-10 ml-12 w-[140px] h-[130px] object-cover" />
                <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="Image 3" className="mx-4 ml-12 w-[150px] h-[150px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  );
};

// Helper function to get the color based on the icon
const getColor = (icon) => {
  switch (icon) {
    case faHtml5:
      return 'text-orange-600';
    case faCss3:
      return 'text-blue-500';
    case faJs:
      return 'text-yellow-500';
    case faReact:
      return 'text-sky-500';
    case faNodeJs:
      return 'text-green-500';
    case faPython:
      return 'text-yellow-500';
    default:
      return 'text-gray-500';
  }
};



export default Navbar;


