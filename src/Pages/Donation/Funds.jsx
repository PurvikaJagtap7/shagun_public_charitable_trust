import React from 'react'
import Progress from './Progress'

function Funds({ img, title, description, createdBy, amount, progress, target }) {
  return (
    <>
      <div className="mt-6 font-roboto mb-3">
        <div className="container mx-auto xl:flex xl:justify-center block">
          <div className="xl:w-[33%] w-[90%] xl:mx-0 mx-auto overflow-hidden rounded-xl ">
            <img
              src={img}
              alt=""
              className="w-[100%] rounded-xl hover:scale-110 transition-all ease-in-out duration-700"
            />
          </div>
          <div className="xl:px-10 md:px-11 px-6 xl:w-[50%] w-full xl:mt-0 mt-3">
            <p className="font-semibold text-4xl">{title}</p>
            <p className="text-sm font-light mt-1">{description}</p>
            <p className="md:text-sm text-xs mt-1">
              <span className="text-orange-400 font-semibold mr-[26px]">
                Campaign created by
              </span>
              : {createdBy}
            </p>
            <p className="md:text-sm text-xs">
              <span className="text-orange-400 font-semibold md:mr-[4px] mr-[6px]">
                Raised amount in rupees
              </span>
              : {amount}
            </p>
            <div className="flex md:items-center md:flex-row flex-col items-start">
              <div className="flex items-center w-full md:w-[85%]">
                <p className="md:text-sm text-xs">
                  <span className="text-orange-400 font-semibold md:mr-[37px] mr-[35px]">
                    Campaign progress
                  </span>
                  :
                </p>
                <Progress progress={progress} />
              </div>
              <p className="md:text-sm text-xs ml-0 font-medium mt-1 md:mt-0">
                Target : {target}
              </p>
            </div>

            <button  className="bg-orange-400 hover:bg-orange-600 px-12 py-3 mt-5 text-white rounded-md">
              Donate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Funds
