/* eslint-disable no-unused-vars */
import React from 'react'

const Quote = () => {
  return (
    <div>
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
    <h2 className="mb-1 text-3xl font-extrabold leading-tight text-white first-letter: mt-12 "></h2>
    
    <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
            
            
        </div>
        <div className=" justify-center flex flex-col w-full mb-5 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-black border-2 border-blue-400 rounded-lg">
                        <div className="flex items-center -mt-1">
                            <h3 className="my-2 ml-3 text-lg font-bold text-white">Success is not final, failure is not fatal: It is the courage to continue that counts.</h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                        <p className="mb-2 text-gray-600">Winston churchill.</p>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</div>
    </div>
  )
}

export default Quote
