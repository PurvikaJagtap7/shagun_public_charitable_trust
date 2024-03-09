import React from 'react'
import DonationPage from '../../Assets/Images/DonationPage.png'
import Funds from './Funds'
import TopDonators from './TopDonaters'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
function Donation() {
    const donations = [
        {
            img: DonationPage,
            title: 'Education for All',
            description: 'The "Education for All" cause aims to provide equitable access to qualify education, regardless of socio-economic backgrounds. Your donation supports initiatives that create scholarships. and implement programs ensuring that every child has the opportunity to learn and thrive. Together, we can break barriers and empower individuals to build a brighter future through education.',
            createdBy: 'Campaigncreator1',
            amount: '₹7, 09, 371',
            progress: 80,
            target: '₹50'
        },
        {
            img: DonationPage,
            title: 'Education for All',
            description: 'The "Education for All" cause aims to provide equitable access to qualify education, regardless of socio-economic backgrounds. Your donation supports initiatives that create scholarships. and implement programs ensuring that every child has the opportunity to learn and thrive. Together, we can break barriers and empower individuals to build a brighter future through education.',
            createdBy: 'Campaigncreator1',
            amount: '₹7, 09, 371',
            progress: 80,
            target: '₹50'
        },
        {
            img: DonationPage,
            title: 'Education for All',
            description: 'The "Education for All" cause aims to provide equitable access to qualify education, regardless of socio-economic backgrounds. Your donation supports initiatives that create scholarships. and implement programs ensuring that every child has the opportunity to learn and thrive. Together, we can break barriers and empower individuals to build a brighter future through education.',
            createdBy: 'Campaigncreator1',
            amount: '₹7, 09, 371',
            progress: 80,
            target: '₹50'
        },
        {
            img: DonationPage,
            title: 'Education for All',
            description: 'The "Education for All" cause aims to provide equitable access to qualify education, regardless of socio-economic backgrounds. Your donation supports initiatives that create scholarships. and implement programs ensuring that every child has the opportunity to learn and thrive. Together, we can break barriers and empower individuals to build a brighter future through education.',
            createdBy: 'Campaigncreator1',
            amount: '₹7, 09, 371',
            progress: 80,
            target: '₹50'
        }
    ]
    return (
      <div className="font-roboto">
        <div className="relative min-w-full xl:h-[80vh] h-[60vh] mx-auto overflow-hidden object-cover">
          <div className="absolute top-0 right-0 z-50 w-full">
            <Header color={"white"} />
          </div>
          <div className="w-screen xl:h-[80vh] h-[60vh] relative">
            <img
              src={DonationPage}
              alt="Donation"
              className="w-full h-full object-cover bg-black "
            />
            <div className="absolute w-screen top-0 right-0 xl:h-[80vh] h-[40vh] bg-black opacity-40"></div>
          </div>

          <div className="absolute inset-0 flex flex-col justify-end items-start m-5 md:m-10 flex-wrap md:pl-5">
            <h2
              id="name"
              className="text-white text-sm sm:text-2xl lg:text-4xl font-bold md:mb-4 mb-3"
            >
              DONATE US
            </h2>
            <h2
              id="title"
              className="text-white font-semibold sm:text-md md:w-[32rem] lg:text-[22px] sm:w-80 text-start"
            >
              Donate whatever you heart wants and make your little contributions
              leading to higher impacts
            </h2>
          </div>
        </div>
        <TopDonators />
        <div className=" bg-gray-300 h-[1.5px] md:mt-4 md:mx-14 mt-8 mx-5"></div>

        <div className="px-4 pt-10 mb-5 md:px-14 md:py-8 flex flex-col justify-start">
          <p className="mb-3  font-semibold md:text-3xl text-xl">
            Raise funds for the needy ones
          </p>
          <input
            type="text"
            className="w-full bg-gray-200 outline-none px-5 py-2 rounded-[10px] placeholder-gray-400"
            placeholder="Search for where you want to donate eg: child education, health centers etc."
          />
        </div>
        <div>
          {donations.map((item, index) => {
            return (
              <Funds
                key={index}
                img={item.img}
                title={item.title}
                description={item.description}
                createdBy={item.createdBy}
                amount={item.amount}
                progress={item.progress}
                target={item.target}
              />
            );
          })}
        </div>
        <div>
            <Footer/>
        </div>
      </div>
    );
}

export default Donation
