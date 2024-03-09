import React from 'react'
import Donation from '../../Assets/Images/DonationPage.png'
import FutureProjectsComponent from './FutureProjectsComponent'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
const FutureProjects = () => {
    const futureProjectList = [
        {
            img: Donation,
            title: "Computer Classes",
            description: "Today in this world without basic knowledge of computer it's difficult to get job, also very necessary to know in our daily life, to realize the value of education usage of advanced equipments and moral value, Hence we have planned to start computer classes for the people who are not affordable.",
            flexStyle: "flex-row"
        },
        {
            img: Donation,
            title: "Computer Classes",
            description: "Today in this world without basic knowledge of computer it's difficult to get job, also very necessary to know in our daily life, to realize the value of education usage of advanced equipments and moral value, Hence we have planned to start computer classes for the people who are not affordable.",
            flexStyle: "flex-row-reverse"
        },
        {
            img: Donation,
            title: "Computer Classes",
            description: "Today in this world without basic knowledge of computer it's difficult to get job, also very necessary to know in our daily life, to realize the value of education usage of advanced equipments and moral value, Hence we have planned to start computer classes for the people who are not affordable.",
            flexStyle: "flex-row"
        }
    ]
    return (
        <>
            <div>
                <div className=''>

                <Header color={'black'}/></div>
                
                <div className="flex flex-col justify-center items-center text-center md:py-6 pt-4">
                    <p className="md:text-5xl text-3xl font-bold">
                        For the Upcoming Projects
                    </p>
                    <p className='text-center xl:px-72 md:px-32 px-4 mt-5 text-sm'>
                        Unveiling Our Visionary Roadmap, Where Every Project Paves the Way to a Brighter Future Supporting a cause you're passionate about can make a big difference. Whether it's time or a small donation, your contribution matters
                    </p>
                </div>

                <div>
                    {futureProjectList.map((item, index) => {
                        return (
                            <FutureProjectsComponent key={index} img={item.img} title={item.title} description={item.description} flexStyle={item.flexStyle} />
                        )
                    })}
                </div>
                <div><Footer/> </div>
            </div>
        </>
    )
}

export default FutureProjects
