import React from "react";
import everyStepSectionImg from "../../../../Media/img/Home-Img/every-step-section-img/every-step-section.jpg";
import "./EveryStepSection.scss";
const EveryStepSection = () => {
  return (
    <div className="everyStep_section_container">
      <div className="container">
        <h3>
          {" "}
          We Are With You Every Step <br />
          Get Started Easily.
        </h3>
        <h6>Make your Website Faster, Safer & Better Support.</h6>
        <button className="btn btn-success">GET STARTED NOW !</button>
      </div>
    </div>
  );
};

export default EveryStepSection;
