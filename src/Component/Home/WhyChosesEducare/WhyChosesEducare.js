import React from "react";
import { CgShapeRhombus } from "react-icons/cg";
import {
  FaBalanceScale,
  FaBullhorn, FaCloudDownloadAlt,
  FaPaperPlane
} from "react-icons/fa";
import chosesEduCareImg from "../../../Media/img/Home-Img/choses-educare-img/chones-educare.png";
import "./WhyChosesEducare.scss";
const whyChosesEducareList = [
  {
    title: (
      <div className="whyChosesEducareList_container">
        <div className="pulss">
          <div className="pull_left">
            {" "}
            <FaCloudDownloadAlt className="pull_left_icons" />
          </div>
          <div className="pull_right">
            <CgShapeRhombus
              style={{
                fontSize: "26px",
                color: "#86bc42",
              }}
            />
          </div>
        </div>

        <div className="whyChosesEducareList_titles">
          <h5>RESIDENTIAL SERVICES</h5>
          <p>
            Backed by some of the biggest names in the industry, Firefox OS is
            an open platform that fosters greater
          </p>
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className="whyChosesEducareList_container">
        <div className="pulss">
          <div className="pull_left">
            {" "}
            <FaPaperPlane className="pull_left_icons" />
          </div>
          <div className="pull_right">
            <CgShapeRhombus
              style={{
                fontSize: "26px",
                color: "#86bc42",
              }}
            />
          </div>
        </div>

        <div className="whyChosesEducareList_titles">
          <h5>COMMERCIAL SERVICES</h5>
          <p>
            Backed by some of the biggest names in the industry, Firefox OS is
            an open platform that fosters greater
          </p>
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className="whyChosesEducareList_container">
        <div className="pulss">
          <div className="pull_left">
            {" "}
            <FaBalanceScale className="pull_left_icons" />
          </div>
          <div className="pull_right">
            <CgShapeRhombus
              style={{
                fontSize: "26px",
                color: "#86bc42",
              }}
            />
          </div>
        </div>

        <div className="whyChosesEducareList_titles">
          <h5>OUR BEST STAFF</h5>
          <p>
            Backed by some of the biggest names in the industry, Firefox OS is
            an open platform that fosters greater
          </p>
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className="whyChosesEducareList_container">
        <div className="pulss">
          <div className="pull_left">
            {" "}
            <FaBullhorn className="pull_left_icons" />
          </div>
          <div className="pull_right">
            <CgShapeRhombus
              style={{
                fontSize: "26px",
                color: "#86bc42",
              }}
            />
          </div>
        </div>

        <div className="whyChosesEducareList_titles">
          <h5>24 HOURS SERVICES</h5>
          <p>
            Backed by some of the biggest names in the industry, Firefox OS is
            an open platform that fosters greater
          </p>
        </div>
      </div>
    ),
  },
];
const WhyChosesEducare = () => {
  //

  //
  return (
    <section className="why_choses_edu_container">
      <div className="container">
        <div className="all_section_header_title">
          <big>
            WHY CHOOSE <span>Education Portal</span>
          </big>{" "}
          <div className="lines">
            <div className="lines1"></div>
            <div className="lines2"></div>
            <div className="lines3"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        {/*  */}
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="col-sm-5">
            <img src={chosesEduCareImg} alt="" style={{ width: "100%" }} />
          </div>
          <div className="col-sm-7" style={{ marginTop: "3%" }}>
            {whyChosesEducareList.map((list, i) => (
              <div key={i}>{list.title}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChosesEducare;
