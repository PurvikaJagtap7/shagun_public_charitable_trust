import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import img from "../../Assets/Images/c4.png";
import img2 from "../../Assets/Images/img.png";
import qr from "../../Assets/svgs/qrimg.svg";
const ListedDonationPage = () => {
  const [color, setColor] = useState("white");

  return (
    <div className="relative overflow-x-hidden">
      <div className="z-30 w-screen absolute top-0">
        <Header color={color} />
      </div>
      <div className="-z-10">
        <div className="relative">
          <img src={img} alt="" className="h-[90vh] w-screen object-cover " />

          <div className="absolute top-0 bg-opacity-60 bg-black h-[90vh] w-screen"></div>
        </div>
      </div>
      <div className="flex flex-col w-full px-10 md:px-20 lg:px-44 xl:px-44 py-16 gap-10">
        <p className="text-5xl font-bold">Donation Title</p>
        <p className="text-base text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugit
          eius sunt error molestiae modi quasi, quos vitae quod temporibus
          repellendus inventore totam ad rerum corrupti nemo impedit dicta
          veritatis architecto! Pariatur vero amet sapiente minima perferendis
          tenetur saepe eius eligendi quidem quae facere non ex corrupti minus
          deleniti, iure fugiat molestias natus vitae sed accusantium? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Earum, maiores
          suscipit. Nesciunt labore maxime magnam dignissimos autem cumque
          impedit, laboriosam debitis quibusdam eius minus asperiores recusandae
          corrupti incidunt officia sint cum deserunt. Quisquam, dolor
          exercitationem alias optio vero nemo voluptatem ex debitis possimus,
          nulla enim obcaecati dolores inventore, illum iure sunt earum error
          itaque quia asperiores fugit! Perferendis laborum error iste non?
          Velit odio quibusdam sequi id iste alias possimus doloribus
          accusantium libero blanditiis nisi obcaecati magnam iure
          exercitationem pariatur omnis, tempora perspiciatis ut ullam! Minus
          maiores voluptate officiis odit!
        </p>
      </div>
      <div className="flex w-full px-12 flex-col md:flex-row md:px-24 lg:px-44 xl:px-48 justify-center py-16 gap-10 xl:gap-28">
        <div className="">
          <img
            src={img2}
            alt=""
            className=" hover:scale-105 md:w-56 md:h-56 xl:w-60 xl:h-60 rounded-2xl"
          />{" "}
        </div>
        <img
          src={img2}
          alt=""
          className="overflow-hidden md:w-56 md:h-56 xl:w-60 xl:h-60 rounded-2xl"
        />
        <img
          src={img2}
          alt=""
          className="overflow-hidden md:w-56 md:h-56 xl:w-60 xl:h-60 rounded-2xl"
        />
      </div>

      <div className="flex flex-col items-center font-roboto font-bold md:flex-row md:px-20 lg:px-44 xl:px-44 justify-center py-16 gap-10 xl:gap-28">
        <img
          src={qr}
          alt=""
          className="overflow-hidden w-80 h-80 rounded-2xl"
        />
        <p className="text-3xl md:text-4xl xl:text-5xl w-[70%] text-start md:w-[70%] xl:w-[43%]">
          Together, make this world a{" "}
          <span className="text-orange-500">better</span> place with us.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default ListedDonationPage;
