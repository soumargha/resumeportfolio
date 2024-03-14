import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';
import cpp from '../Assets/cpp.png';

const Navbar = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const distanceFromTop = window.scrollY + window.innerHeight;
      const sectionBottom = document.getElementById('skills').offsetTop;

      if (distanceFromTop >= sectionBottom) {
        controls.start(i => ({
          opacity: 1,
          x: 0,
          transition: { delay: i * 0.2, duration: 1 }
        }));
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

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
        return 'text-yellow-300';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div>
      <h2 className="text-3xl mb-[-3rem] font-bold mt-36 leading-tight text-gray-100 hover:text-green-500 sm:text-4xl lg:text-5xl">
        <br className="block sm:hidden" /> I am proficient in working with
      </h2>
      <section id="skills" className="bg-black mt-16 rounded-3xl dark:bg-dark lg:py-[120px] relative overflow-hidden">
        {/* Background blur effect */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-black"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                {[faHtml5, faCss3, faJs].map((icon, index) => (
                  <motion.a
                    key={index}
                    href="javascript:void(0)"
                    className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                    initial={{ opacity: 0, x: 1000 }}
                    animate={controls}
                    custom={index}
                  >
                    <FontAwesomeIcon icon={icon} className={`text-8xl ${getColor(icon)}`} />
                  </motion.a>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center mt-4">
                {[faReact, faNodeJs, faPython].map((icon, index) => (
                  <motion.a
                    key={index}
                    href="javascript:void(0)"
                    className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                    initial={{ opacity: 0, x: 1000 }}
                    animate={controls}
                    custom={index + 3} // To stagger animation after first set
                  >
                    <FontAwesomeIcon icon={icon} className={`text-8xl ${getColor(icon)}`} />
                  </motion.a>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center mt-5">
                {/* Add images in each box */}
                <motion.img
                  src={cpp}
                  alt="Image 1"
                  className="mx-4 w-[140px] h-[140px] object-cover ml-10"
                  initial={{ opacity: 0, x: 1000 }}
                  animate={controls}
                  custom={6} // Adjust delay for image animation
                />
                {/* Add other images with similar motion properties */}
                <motion.img
                  src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
                  alt="Image 2"
                  className="mx-4 w-[140px] h-[140px] object-cover ml-10"
                  initial={{ opacity: 0, x: 1000 }}
                  animate={controls}
                  custom={7} // Adjust delay for image animation
                />
                {/* Add other images with similar motion properties */}
                <motion.img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png"
                  alt="Image 3"
                  className="mx-4 w-[140px] h-[140px] object-cover ml-10"
                  initial={{ opacity: 0, x: 1000 }}
                  animate={controls}
                  custom={8} // Adjust delay for image animation
                  style={{ zIndex: 1 }} // Ensure the third image is above other elements
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
