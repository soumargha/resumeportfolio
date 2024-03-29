import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import cpp from "../Assets/cpp.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getColor = (icon) => {
    switch (icon) {
      case faHtml5:
        return "text-orange-600";
      case faCss3:
        return "text-blue-500";
      case faJs:
        return "text-yellow-500";
      case faReact:
        return "text-sky-500";
      case faNodeJs:
        return "text-green-500";
      case faPython:
        return "text-yellow-300";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div id="bread">
      <h2 className="ml-5 text-3xl mb-[-3rem] font-bold mt-32 leading-tight text-gray-100 hover:text-green-500 sm:text-4xl lg:text-5xl">
        <br className="block sm:hidden" /> I am proficient in working with
      </h2>
      <section
        id="skills"
        className="bg-black mt-14 rounded-3xl dark:bg-dark lg:py-[120px] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-black"></div>
        <div className="container mx-auto relative z-10" ref={ref}>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                {[faHtml5, faCss3, faJs].map((icon, index) => (
                  <motion.div
                    key={index}
                    initial={inView ? { x: -1000 } : { x: 0 }}
                    animate={inView ? { x: 0 } : { x: -1000 }}
                    transition={{ delay: index * 0.2, duration: 1 }}
                    className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
                    <FontAwesomeIcon
                      icon={icon}
                      className={`text-8xl ${getColor(icon)}`}
                    />
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center mt-4">
                {[faReact, faNodeJs, faPython].map((icon, index) => (
                  <motion.div
                    key={index}
                    initial={inView ? { x: -1000 } : { x: 0 }}
                    animate={inView ? { x: 0 } : { x: -1000 }}
                    transition={{ delay: index * 0.2, duration: 1 }}
                    className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
                    <FontAwesomeIcon
                      icon={icon}
                      className={`text-8xl ${getColor(icon)}`}
                    />
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center mt-5">
                <motion.div
                  initial={inView ? { x: -1000 } : { x: 0 }}
                  animate={inView ? { x: 0 } : { x: -1000 }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="mx-4 w-[140px] h-[140px] object-cover ml-10"
                >
                  <img src={cpp} alt="Image 1" />
                </motion.div>
                <motion.div
                  initial={inView ? { x: -1000 } : { x: 0 }}
                  animate={inView ? { x: 0 } : { x: -1000 }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="mx-4 w-[140px] h-[140px] object-cover ml-10"
                >
                  <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="Image 2" />
                </motion.div>
                <motion.div
                  initial={inView ? { x: -1000 } : { x: 0 }}
                  animate={inView ? { x: 0 } : { x: -1000 }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="mx-4 w-[140px] h-[140px] object-cover ml-10"
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png" alt="Image 3" />
                </motion.div>
              </div>
            </div>
          </div>
          <button
            onClick={() => window.open("https://drive.google.com/file/d/1aoavn6yRT1H2sCdmOzAX5F7kqxQfpHoa/view?usp=sharing", "_blank")}
            className="ml-8 mt-14 relative inline-block text-lg group"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-900 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-teal-500"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-teal-900 group-hover:-rotate-200 ease"></span>
              <span className="relative">Download Resume</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-lime-500 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
