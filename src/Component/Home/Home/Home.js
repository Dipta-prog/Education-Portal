import React from "react";
import WhyChosesEducare from "../WhyChosesEducare/WhyChosesEducare";
import AboutEducare from "./AboutEducare/AboutEducare";
import EveryStepSection from "./EveryStepSection/EveryStepSection";
import ImportantFact from "./ImportantFact/ImportantFact";
import MotivationSection from "./MotivationSection/MotivationSection";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import TopGraduated from "./TopGraduated/TopGraduated";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <AboutEducare></AboutEducare>
      <WhyChosesEducare></WhyChosesEducare>
      <EveryStepSection></EveryStepSection>

      <ImportantFact></ImportantFact>
      <PhotoGallery></PhotoGallery>
      <MotivationSection></MotivationSection>
      <TopGraduated></TopGraduated>
      <Footer/>
    </div>
  );
};

export default Home;
