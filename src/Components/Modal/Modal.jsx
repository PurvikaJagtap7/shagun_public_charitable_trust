import React from 'react';
import { IoClose } from "react-icons/io5";
const Modal = ({ isOpen, onClose, children }) => {
  const modalClasses = isOpen ? 'fixed inset-0 overflow-y-auto' : 'hidden';

  return (
    <>
    
    <div className={`none ${modalClasses}`}>
      <div className=" inset-0 bg-gray-700 opacity-90 fixed top-0 right-0 left-0 bottom-0" onClick={onClose}></div>
 
        <div className="xl:max-w-[60%] max-w-[90%] my-[10%] mx-auto  rounded-lg p-5 bg-slate-200 relative">
            <IoClose className="absolute -top-2 -right-2 text-xl cursor-pointer bg-slate-100 border-2 rounded-full border-gray-400 hover:border-orange-400 focus:bg-orange-300 p-2 text-gray-500 hover:text-orange-500" size={40} onClick={onClose}/>
          {children}
        </div>
     
    </div>
    </>
  );
};

export default Modal;