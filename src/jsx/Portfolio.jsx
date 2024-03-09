/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import blogs from '../Assets/blogs.jpg'
import campusbuddy from '../Assets/campusbuddy.jpg'
import flappyball from '../Assets/flappyball.jpg'




const Portfolio = () => {
  return (
    <div>
        <h2 className="text-3xl  font-bold mt-14 mb-12 leading-tight text-gray-100 hover:text-green-500 sm:text-4xl lg:text-5xl">
        <br className="block sm:hidden" /> Personal Projects
      </h2>
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gradient-to-r from-red-950 via-red-800 to-red-950 hover:bg-gradient-to-br rounded-3xl">
 
  <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
    
    <a className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div className="sm:flex">
        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
        <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src={blogs} />
        </div>

        <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
          <h3 className="text-xl font-semibold text-gray-50 group-hover:text-gray-600  dark:group-hover:text-white">
            Personal Blog
          </h3>
          <h2 className="mt-3 text-gray-300">
            Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
          </h2>
          <button type="button" className="text-white mt-2 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            click here
            </button>
        </div>
      </div>
    </a>
    
    <a className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div className="sm:flex">
        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src={campusbuddy} />
        </div>

        <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
          <h3 className="text-xl font-semibold text-gray-50 group-hover:text-gray-600  dark:group-hover:text-white">
            Campus Buddy
          </h3>
          <p className="mt-3 text-gray-300">
            Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval
          </p>
          <button type="button" className="text-white mt-2 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            click here
            </button>
        </div>
      </div>
    </a>
    
    <a className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div className="sm:flex">
        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src="https://media.istockphoto.com/id/1224339648/photo/portfolio-website-on-home-office-setup.webp?b=1&s=170667a&w=0&k=20&c=MGmNZmgjVBiAjVFN0z7io5nHZ_ygejxsFHz-mSkPL2w=" />
        </div>

        <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
          <h3 className="text-xl font-semibold  group-hover:text-gray-600 text-gray-300 dark:group-hover:text-white">
            PortFolio
          </h3>
          <p className="mt-3 text-gray-300">
            How to make objectives and key results work for your company
          </p>
          <button type="button" className="text-white mt-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            click here
            </button>
        </div>
      </div>
    </a>
    
    <a className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div className="sm:flex">
        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src={flappyball} alt="Image Description" />
        </div>

        <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
          <h3 className="text-xl font-semibold  group-hover:text-gray-600 text-gray-300 dark:group-hover:text-white">
            Flappy ball
          </h3>
          <p className="mt-3 text-gray-300">
            Six approaches to bringing your People strategy to life
          </p>
          <button type="button" className="text-white mt-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            click here
            </button>
        </div>
      </div>
    </a>
    
  </div>
  
</div>

    </div>
  );
};

export default Portfolio;
