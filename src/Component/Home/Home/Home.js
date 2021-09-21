import React from "react";
import WhyChosesEducare from "../WhyChosesEducare/WhyChosesEducare";
import AboutEducare from "./AboutEducare/AboutEducare";
import EveryStepSection from "./EveryStepSection/EveryStepSection";
import ImportantFact from "./ImportantFact/ImportantFact";
import MotivationSection from "./MotivationSection/MotivationSection";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import TopGraduated from "./TopGraduated/TopGraduated";

const Home = () => {
  return (
    <div>
      <AboutEducare></AboutEducare>
      <WhyChosesEducare></WhyChosesEducare>
      <EveryStepSection></EveryStepSection>

      <ImportantFact></ImportantFact>
      <PhotoGallery></PhotoGallery>
      <MotivationSection></MotivationSection>
      <TopGraduated></TopGraduated>
    </div>
  );
};

export default Home;
