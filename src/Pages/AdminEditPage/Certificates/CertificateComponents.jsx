import React, { useState } from "react";
import img from "../../../Assets/Images/Certificate.png";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const CertificateComponent = () => {
  const openImageInNewTab = () => {
    const imageUrl = img;
    window.open(imageUrl, "_blank");
  };
  return (
    <div className="my-10 mx-auto w-[90%] md:w-[85%] xl:w-[90%] rounded-lg shadow-xl relative group bg-white bg-opacity-70 h-fit transform transition-transform hover:scale-105 overflow-hidden duration-1000">
      <div className="h- w-full bg-slate-700 rounded-lg">
        <img
          src={img}
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="absolute h-full top-0 rounded-lg flex flex-col justify-center items-baseline bg-black p-4 text-white transform group-hover:translate-y-0 bg-opacity-90 group-hover:opacity-85 translate-y-80  transition-transform duration-500 ease-in-out ">
        <button
          className="bg-slate-500  self-end z-10 flex gap-2 md:gap-3 items-center my-2 xl:my-4 px-2 py-2 rounded-lg"
          onClick={openImageInNewTab}
        >
          <BsBoxArrowInUpRight />
        </button>
        <p className="font-bold font-roboto text-base md:text-2xl xl:text-2xl -z-10">
          Certificate Title Here
        </p>
        <p className="font-roboto text-xs md:text-base xl:text-base py-4">
          Project description Here. Project description Here. Project
          description Here. Project description Here. Project description Here.
          Project description Here.
        </p>
      </div>
    </div>
  );
};

export default CertificateComponent;
