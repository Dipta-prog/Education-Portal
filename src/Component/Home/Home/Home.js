import React, { useEffect } from "react";
import WhyChosesEducare from "../WhyChosesEducare/WhyChosesEducare";
import AboutEducare from "./AboutEducare/AboutEducare";
import EveryStepSection from "./EveryStepSection/EveryStepSection";
import ImportantFact from "./ImportantFact/ImportantFact";
import MotivationSection from "./MotivationSection/MotivationSection";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import TopGraduated from "./TopGraduated/TopGraduated";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import Header from "./Header/Header";
import StudentReviews from "./StudentReviews/StudentReviews";
import AOS from "aos";
import "aos/dist/aos.css";
import BoolsTest from "../../BoolsTest";

const Home = () => {
  // /////
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  /////
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      <Header></Header>
      <BoolsTest></BoolsTest>
      <AboutEducare></AboutEducare>
      <WhyChosesEducare></WhyChosesEducare>

      <EveryStepSection></EveryStepSection>

      <ImportantFact></ImportantFact>
      <PhotoGallery></PhotoGallery>

      <MotivationSection></MotivationSection>

      <TopGraduated></TopGraduated>
      <StudentReviews></StudentReviews>
      <Footer />
    </div>
  );
};

export default Home;
