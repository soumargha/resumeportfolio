import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import blogs from '../Assets/blogs.jpg';
import campusbuddy from '../Assets/campusbuddy.jpg';
import flappyball from '../Assets/flappyball.jpg';

const Project = ({ imageSrc, title, description }) => {
  return (
    <a className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div className="sm:flex">
        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src={imageSrc} alt={title} />
        </div>
        <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
          <h3 className="text-xl font-semibold text-gray-50 group-hover:text-gray-600  dark:group-hover:text-white">
            {title}
          </h3>
          <h2 className="mt-3 text-gray-300">
            {description}
          </h2>
          <button type="button" className="text-white mt-2 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-400 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            click here
          </button>
        </div>
      </div>
    </a>
  );
};

const Portfolio = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1 }
      });
    }
  }, [controls, inView]);

  return (
    <div id='projects-section' ref={ref}>
      <h2 className="text-4xl  font-bold mt-14 mb-12 leading-tight text-gray-100 hover:text-green-500 sm:text-4xl lg:text-5xl ">
        <br className="block sm:hidden" /> Personal Projects
      </h2>
      <motion.div
        className=" border-white border-4 max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gradient-to-r from-violet-950 via-violet-800 to-gray-950 hover:bg-gradient-to-br rounded-3xl"
        initial={{ x: '100%', opacity: 0 }} // Initial position from the right of the screen
        animate={controls}
      >
        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Project
              imageSrc={blogs}
              title="Personal Blog"
              description="Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <Project
              imageSrc={campusbuddy}
              title="Campus Buddy"
              description="Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5, delay: 0.6 }}>
            <Project
              imageSrc="https://media.istockphoto.com/id/1224339648/photo/portfolio-website-on-home-office-setup.webp?b=1&s=170667a&w=0&k=20&c=MGmNZmgjVBiAjVFN0z7io5nHZ_ygejxsFHz-mSkPL2w="
              title="Portfolio"
              description="How to make objectives and key results work for your company"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5, delay: 0.8 }}>
            <Project
              imageSrc={flappyball}
              title="Flappy ball"
              description="Six approaches to bringing your People strategy to life"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
