/* eslint-disable no-unused-vars */
import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mt-4 mb-20 leading-tight text-gray-100 hover:text-green-500 sm:text-4xl lg:text-5xl">
        <br className="block sm:hidden" /> I am open to work
      </h2>
      <div className="min-h-screen rounded-2xl bg-gradient-to-r from-indigo-700 via-teal-500 to-purple-700 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="text-center pb-6">
              <h1 className="text-3xl">Contact Me</h1>
            </div>

            <form>
              <input
                className="shadow bg-purple-700 text-black mb-4 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                name="Name"
              />

              <input
                className="shadow bg-purple-700 text-black mb-4 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                name="email"
              />

              <input
                className="shadow bg-purple-700 text-black mb-4 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Subject"
                name="_subject"
              />

              <textarea
                className="shadow bg-purple-700 text-black mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Type your message here..."
                name="message"
                style={{ height: '121px' }}
              ></textarea>

              <div className="flex justify-between">
                <input
                  className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  value="Send ➤"
                />
                <input
                  className="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="reset"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
