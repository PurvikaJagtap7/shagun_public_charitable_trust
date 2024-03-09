// import { FunctionComponent } from "react";
import React from "react";
import NewsAndUpdatesContainer from "./NewsAndUpdatesContainer";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";


const NewsAndUpdatesPage= () => {
  return (
    <>
    <div><Header/></div>
    <div className="py-12">
      <div className="flex justify-center md:py-6 pt-4">
        <p className="md:text-6xl text-3xl font-bold">News and Updates</p>
      </div>
      <NewsAndUpdatesContainer upcoming={true} />
      <NewsAndUpdatesContainer upcoming={false} />
      <NewsAndUpdatesContainer upcoming={false} />
    </div>
      
      <div><Footer/></div>
    </>
  );
};

export default NewsAndUpdatesPage;