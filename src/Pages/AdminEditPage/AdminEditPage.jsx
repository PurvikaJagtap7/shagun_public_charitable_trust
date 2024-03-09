import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import OurProjects from "./Our Projects/OurProjects";
import EditOurProject from "./Our Projects/Pop-Up/EditOurProject";
import { CiSquarePlus } from "react-icons/ci";
import NewsandUpdates from "./News and Updates/NewsandUpdate";
import EditNews from "./News and Updates/Pop-Up/EditNews";
import Certificate from "./Certificates/Certificate";
const AdminEditPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isNewsModalOpen, setNewsModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const openNewsModal = () => setNewsModalOpen(true);
  const closeNewsModal = () => setNewsModalOpen(false);

  
    
  
  return (
    <div className="">
      <div>
        <Header />
      </div>
      <div className="flex justify-start p-10 font-roboto font-semibold uppercase text-3xl relative">
        <p>Admin Edit Page</p>
        <span
          className="absolute bottom-6 rounded-br-lg rounded-tl-lg
 bg-orange-500 w-16 h-2.5"
        ></span>
      </div>
      <div className=" bg-slate-200 rounded-xl mx-10 mt-4 mb-10">
        <div className="flex font-roboto justify-between px-6 pt-5  relative w-full">
          <p className="text-2xl font-bold text-gray-500">Our Projects</p>{" "}
          <span className="absolute left-[10rem] w-auto text-white text-xs bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 px-1 py-0.5 rounded-lg">
            Edit Mode
          </span>
          <span
            className="px-2 py-1 border-green-600 border-2 rounded-lg bg-gradient-to-br hover:text-white hover:from-green-600 hover:shadow-lg drop-shadow-2xl- cursor-pointer transition-all ease-in-out duration-500 hover:shadow-green-300 flex gap-2  justify-center items-center font-medium hover:to-green-400"
            onClick={openModal}
          >
            Create New Event
            <CiSquarePlus size={25} />
          </span>
        </div>

        <div className=" flex justify-center px-4 py-2">
          <span className=" h-0.5 w-[99%] bg-gray-300"></span>
        </div>

        <div className="w-full">
          <OurProjects />
        </div>
      </div>
      <div className=" bg-slate-200 rounded-xl mx-10 mt-4 mb-10">
        <div className="flex font-roboto justify-between px-6 pt-5  relative w-full">
          <p className="text-2xl font-bold text-gray-500">News and Updates</p>{" "}
          <span className="absolute left-[14.2rem] w-auto text-white text-xs bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 px-1 py-0.5 rounded-lg">
            Edit Mode
          </span>
          <span
            className="px-2 py-1 border-green-600 border-2 rounded-lg bg-gradient-to-br hover:text-white hover:from-green-600 hover:shadow-lg drop-shadow-2xl- cursor-pointer transition-all ease-in-out duration-500 hover:shadow-green-300 flex gap-2  justify-center items-center font-medium hover:to-green-400"
            onClick={openNewsModal}
          >
            Create New Event
            <CiSquarePlus size={25} />
          </span>
        </div>

        <div className=" flex justify-center px-4 py-2">
          <span className=" h-0.5 w-[99%] bg-gray-300"></span>
        </div>

        <div className="w-full pb-4">
          <NewsandUpdates />
        </div>
      </div>
      <div className=" bg-slate-200 rounded-xl mx-10 mt-4 mb-10">
        <div className="flex font-roboto justify-between px-6 pt-5  relative w-full">
          <p className="text-2xl font-bold text-gray-500">Certificates</p>{" "}
          <span className="absolute left-[10rem] w-auto text-white text-xs bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 px-1 py-0.5 rounded-lg">
            Edit Mode
          </span>
          <span
            className="px-2 py-1 border-green-600 border-2 rounded-lg bg-gradient-to-br hover:text-white hover:from-green-600 hover:shadow-lg drop-shadow-2xl- cursor-pointer transition-all ease-in-out duration-500 hover:shadow-green-300 flex gap-2  justify-center items-center font-medium hover:to-green-400"
            onClick={openNewsModal}
          >
            Create New Event
            <CiSquarePlus size={25} />
          </span>
        </div>

        <div className=" flex justify-center px-4 py-2">
          <span className=" h-0.5 w-[99%] bg-gray-300"></span>
        </div>

        <div className="w-full">
          <Certificate />
        </div>
      </div>
      {isModalOpen && (
        <EditOurProject
          isModalOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
        />
      )}
      {
        <EditNews
          isModalOpen={isNewsModalOpen}
          openModal={openNewsModal}
          closeModal={closeNewsModal}
        />
      }
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminEditPage;
