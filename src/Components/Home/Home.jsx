import React , {useState} from 'react'
import Project from "./Projects/Project";
import Aboutus from "./About/Aboutus";
import Welfare from "./Welfare/Welfare";
import Donate from "./Donate/Donate";
import Certificate from "./Certificate/Certificate";
import Banner from "./Banner/Banner";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ListedDonationPage from "../../Pages/ListedDonationpage/ListedDonationPage";
const Home = () => {
  const [color, setColor] = useState("white");

  return (
    <>
      <div className="relative overflow-x-hidden">
        <div className="z-30 w-screen absolute top-0">
          <Header color={color} />
        </div>
        <div className="-z-10">
          <Banner />
        </div>
        <div>
          <Project />
        </div>
        <div>
          <Aboutus />
        </div>
        <div>
          <Welfare />
        </div>
        <div>
          <Donate />
        </div>
        <div>
          <Certificate />
        </div>
        
        <Footer />
      </div>
    </>
  );
}

export default Home