import React, { useState } from "react";
import logo from "../../Assets/Images/SPCT Logo.png";
import logo_w from "../../Assets/svgs/logo_w.svg";
import Headercomponent from "./Headercomponent";
import { useNavigate } from "react-router-dom";
function Header({ color }) {
  const navigate = useNavigate();

  console.log(color);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="w-full h-11 sticky top-0 bg-transparent font-roboto">
      <div
        className={`flex my-4 px-8 justify-between items-center ${
          color === "white" ? "text-white" : "text-black"
        }`}
      >
        <a className="hover:scale-125 transition-all transform duration-[1500ms]">
          {color === "white" ? (
            <img src={logo_w} alt="" width={100} />
          ) : (
            <img src={logo} alt="" width={100} />
          )}
        </a>

        <div className="hidden lg:flex gap-10 font-sans   xl:visible items-center ">
          <div
            onClick={() => {
              navigate("/");
            }}
          >
            <Headercomponent text={"Home"} />
          </div>{" "}
          <Headercomponent text={"About"} />
          <div
            onClick={() => {
              navigate("/newAndUpdates");
            }}
          >
            <Headercomponent text={"News"} />
          </div>
          <div
            onClick={() => {
              navigate("/trusteeRegister");
            }}
          >
            <Headercomponent text={"Join us"} />
          </div>
          <div
            onClick={() => {
              navigate("/donation");
            }}
          >
            <Headercomponent text={"Donate"} />
          </div>
          <div
            onClick={() => {
              navigate("/login");
            }}
            className="relative inline-flex items-center justify-center  cursor-pointer p-2 px-4 py-1 overflow-hidden font-medium text-orange-600 rounded-3xl shadow-2xl group hover:scale-105 transition ease-in-out duration-500"
          >
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-orange-600 rounded-full blur-md ease"></span>
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-orange-500 rounded-full blur-md"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-orange-600 rounded-full blur-md"></span>
            </span>
            <span className="relative text-white">Start a fundraise</span>
          </div>
        </div>
        <div className="lg:hidden relative z-10">
          <button
            className="relative group"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <div
              className={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 ${
                isMenuOpen ? "group-focus:ring-4" : "group-focus:ring-0"
              } ring-opacity-30 duration-200 shadow-md`}
            >
              <div
                className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden`}
              >
                <div
                  className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                    isMenuOpen
                      ? "group-focus:translate-x-10"
                      : "group-focus:translate-x-0"
                  }`}
                ></div>
                <div
                  className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${
                    isMenuOpen
                      ? "group-focus:translate-x-10"
                      : "group-focus:translate-x-0"
                  } delay-75`}
                ></div>
                <div
                  className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                    isMenuOpen
                      ? "group-focus:translate-x-10"
                      : "group-focus:translate-x-0"
                  } delay-150`}
                ></div>

                <div
                  className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${
                    isMenuOpen
                      ? "group-focus:translate-x-0"
                      : "group-focus:-translate-x-10"
                  } flex w-0 group-focus:w-12`}
                >
                  <div
                    className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${
                      isMenuOpen
                        ? "group-focus:rotate-45"
                        : "group-focus:rotate-0"
                    }`}
                  ></div>
                  <div
                    className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${
                      isMenuOpen
                        ? "group-focus:-rotate-45"
                        : "group-focus:-rotate-0"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </button>

          {isMenuOpen && (
            <div className="absolute w-[60vw] top-0 right-16  z-50">
              <div className=" flex flex-col rounded-2xl  items-center gap-5 bg-gray-400 py-10 px-10 ">
                <div
                  onClick={() => {
                    toggleMenu();
                    navigate("/");
                  }}
                >
                  <Headercomponent text={"Home"} />
                </div>{" "}
                <Headercomponent text={"About"} />
                <div
                  onClick={() => {
                    navigate("/newAndUpdates");
                  }}
                >
                  <Headercomponent text={"News"} />
                </div>
                <div
                onClick={()=>{
                  navigate("/trusteeRegister");
                }}>
                <Headercomponent text={"Join us"} /></div>
                <div
                  onClick={() => {
                    toggleMenu();
                    navigate("/donation");
                  }}
                >
                  <Headercomponent text={"Donate"} />
                </div>
                <div
                  onClick={() => {
                    toggleMenu();
                    navigate("/login");
                  }}
                >
                  <Headercomponent text={"Start Fund Raiser"} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
