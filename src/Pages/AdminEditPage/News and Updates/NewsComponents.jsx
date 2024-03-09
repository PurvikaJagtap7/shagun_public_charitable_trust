import React from 'react';
import Donation from '../../../Assets/Images/DonationPage.png';
import { BiMessageSquareEdit } from "react-icons/bi";
const NewsComponents = ({upcoming}) => {
 return (
   <>
     {/* <div>
          
          <div className='mt-6 mb-3'>
        <div className='container mx-auto xl:flex xl:justify-center block'>
          <div className='xl:w-[33%] w-[90%] xl:mx-0 mx-auto'>
            <img src={Donation} alt="" className='w-[100%] rounded-xl' />
          </div>
          <div className='xl:px-10 md:px-11 px-6 xl:w-[50%] w-full xl:mt-3 mt-3'>
            <p className='font-semibold md:text-2xl text-xl'>Equipping Young Minds: Shagun Trust Provides Essential Educational Stationery</p>
            <p className='text-sm font-normal mt-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, totam odio illum numquam, voluptates molestiae nostrum eveniet maxime quos at libero recusandae! Ab, repellat assumenda. Amet, accusantium vel. Voluptatibus blanditiis pariatur sed. Quas, quis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo corrupti. Inventore adipisci molestiae perspiciatis porro reiciendis beatae excepturi accusantium provident, aut omnis soluta alias perferendis delectus aperiam et mollitia.</p>
            
        <div className="mt-2">
        {upcoming && <span className="bg-orange-500 text-xs px-1 py-1 text-white rounded">Upcoming Project</span>}
            <p className="text-sm mt-4 text-gray-500">Monday, February 19, 2024</p>
        </div>
          </div>
        </div>
      </div>
        </div> */}

 <div className=" mx-10 flex flex-col  mt-5 rounded-xl p-4 bg-slate-100 relative">
<div className='absolute top-3 right-3 text-gray-400'><BiMessageSquareEdit size={25}/></div>
       <div className="flex">
         <div className="xl:w-[28%] w-[90%] xl:mx-0 mx-auto">
           <img src={Donation} alt="" className="w-[100%] rounded-xl" />
         </div>
         <div className="xl:px-10 md:px-11 px-6 xl:w-[50%] w-full xl:mt-3 mt-3">
           <p className="font-semibold md:text-2xl text-xl">
             Equipping Young Minds: Shagun Trust Provides Essential Educational
             Stationery
           </p>
           <p className="text-sm font-normal mt-1">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
             totam odio illum numquam, voluptates molestiae nostrum eveniet
             maxime quos at libero recusandae! Ab, repellat assumenda. Amet,
             accusantium vel. Voluptatibus blanditiis pariatur sed. Quas, quis!
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
             quo corrupti. Inventore adipisci molestiae perspiciatis porro
             reiciendis beatae excepturi accusantium provident, aut omnis soluta
             alias perferendis delectus aperiam et mollitia.
           </p>

           <div className="mt-2">
             {upcoming && (
               <span className="bg-orange-500 text-xs px-1 py-1 text-white rounded">
                 Upcoming Project
               </span>
             )}
             <p className="text-sm mt-4 text-gray-500">
               Monday, February 19, 2024
             </p>
           </div>
         </div>
       </div>
     </div>
   </>
 );
}

export default NewsComponents;