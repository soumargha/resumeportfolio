/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InternshipEntry = ({ date, title, description, isLeft }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : (isLeft ? -100 : 100) }}
      transition={{ duration: 0.5 }}
      className={`mb-8 flex justify-between ${isLeft ? 'flex-row-reverse' : 'items-center'} w-full`}
    >
      <div className="order-1 w-5/12"></div>
      <div className={`order-1 w-5/12 px-1 py-4 text-${isLeft ? 'right' : 'left'}`}>
        <p className="mb-3 text-base text-yellow-300">{date}</p>
        <h4 className="mb-3 font-bold text-lg md:text-2xl">{title}</h4>
        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">{description}</p>
      </div>
    </motion.div>
  );
};

const Internships = () => {
  return (
    <div>
      <h2 className="text-3xl mb-[-3rem] font-bold mt-24 leading-tight text-gray-100 hover:text-green-500 sm:text-4xl lg:text-5xl">
        <br className="block sm:hidden" /> Internships and Hackathons
      </h2>
      <section>
        <div className="bg-black ml-20 text-white py-8">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{ right: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}
                  ></div>
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{ left: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}
                  ></div>

                  <InternshipEntry
                    date="17 - 18th january 2024"
                    title="Rajasthan Police Hackathon 1.0 Finalist"
                    description="Worked on the project System of Geo-Tagging of privately owned cameras"
                    isLeft={false} // Entry on the right
                  />

                  <InternshipEntry
                    date="1-28th December 2023"
                    title="Data analyst Intern at MedTourEasy"
                    description="Worked on the project: Analyze Death Age Difference of Right Handers with Left Handers."
                    isLeft={true} // Entry on the left
                  />

                  <InternshipEntry
                    date="1 - 30th september 2023"
                    title="Mathematics Expert at GauthMath"
                    description="Mentored students in solving complex mathematical problems"
                    isLeft={false} // Entry on the right
                  />

                  <InternshipEntry
                    date="1st may-31st june 2023"
                    title="Web Developer Intern at TEACHNOOK"
                    description="Created interactive web pages, integrated backend APIs, developed web apps, and did app testing with apps of different organizations. Also solved UI/UX bugs and contributed in the enhancement of web pages."
                    isLeft={true} // Entry on the left
                  />

                  <InternshipEntry
                    date="20 April 2023 - present"
                    title="Microsoft Learn Student Ambassador"
                    description="Gained proficiency in Microsoft Azure and leveraged it to create awareness and opportunities among students, showcasing the platform's potential for academic and career growth."
                    isLeft={false} // Entry on the right
                  />

                  {/* Add more internship entries here */}
                  
                  <div className='mt-28'>
                    <img
                      className="mx-auto -mt-36 md:-mt-36"
                      src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                      alt="Timeline"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internships;
