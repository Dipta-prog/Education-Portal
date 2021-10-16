import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import aboutRducareImg from "../../../../Media/img/about-educare-img/about-educare.png";
import "./AboutEducare.scss";
const goalList = [
  {
    title: (
      <p className="about_educare_list">
        <FaCheckSquare style={{ color: "#86bc42", fontSize: "15px" }} />{" "}
        Pleasure and praising pain was born
      </p>
    ),
  },
  {
    title: (
      <p className="about_educare_list">
        <FaCheckSquare style={{ color: "#86bc42", fontSize: "15px" }} /> The
        great explorer of the truth
      </p>
    ),
  },
  {
    title: (
      <p className="about_educare_list">
        <FaCheckSquare style={{ color: "#86bc42", fontSize: "15px" }} /> Anyone
        who loves or pursues or desires
      </p>
    ),
  },
  {
    title: (
      <p className="about_educare_list">
        <FaCheckSquare style={{ color: "#86bc42", fontSize: "15px" }} /> The
        printing and typesetting industry.
      </p>
    ),
  },
];
const AboutEducare = () => {
  return (
    <section>
      <div className="container">
        <div
          className="row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-7">
            <div className="about_educare_title">
              <div className="about_educare_header_title">
                <h2>
                  ABOUT EDUCATION <span>PORTAL COURSES</span>
                </h2>

                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
              <div className="about_educare_header_description">
                <h4>
                  A little about us and a brief history of how we started.
                </h4>
                <p>
                  Since its establishment, Education Portal has been focusing on
                  assisting the students in facing the challenges of the
                  ever-advancing world. EP is a platform where students can rise
                  to the highest level of their capability. It provides an
                  outstanding and supportive environment for both undergraduate
                  and postgraduate students. A talented and dedicated group of
                  academics provide guidance and tutelage the students need to
                  pursue their research and academic goals. The dynamic teaching
                  and learning environment of EPbrims with talent, creativity,
                  and international connections.
                </p>
                <div className="row">
                  {goalList.map((list) => (
                    <div key={Math.random()} className="col-6 ">
                      {list.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12  col-md-6 col-lg-6 col-xl-5">
            <img src={aboutRducareImg} alt="" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEducare;
