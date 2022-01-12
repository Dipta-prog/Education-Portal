import React from "react";
import "./WhyChosesEducare.scss";

import chosesEduCareImg from "../../../Media/img/Home-Img/choses-educare-img/choses-educare-book.e38756c2.png";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fadOcta } from "@fortawesome/free-solid-svg-icons";

// import chosesEduCareImg from "../../../Media/img/Home-Img/choses-educare-img/chones-educare.png";

import {
  FaBalanceScale,
  FaBullhorn,
  FaCloudDownloadAlt,
  FaPaperPlane,
  FaSquare,
} from "react-icons/fa";
// import chosesEduCareImg from "../../../Media/img/Home-Img/choses-educare-img/chones-educare.png";
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
            <FaSquare className="pull_right_icons" />
          </div>
        </div>

        <div data-aos="fade-left" className="whyChosesEducareList_titles">
          <h5>BEST TEACHERS</h5>
          <p>Teaching is done by experienced and helpful teachers.</p>
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
            <FaSquare className="pull_right_icons" />
          </div>
        </div>

        <div data-aos="fade-left" className="whyChosesEducareList_titles">
          <h5>EXTERA CARENESS</h5>
          <p>Weak students are quided separetly.</p>
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
            <FaSquare className="pull_right_icons" />
          </div>
        </div>

        <div data-aos="fade-left" className="whyChosesEducareList_titles">
          <h5>PRACTICAL CLASSES VIDEOS.</h5>
          <p>
            Recoded videos are realiased to better understand practical classes.
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
            <FaSquare className="pull_right_icons" />
          </div>
        </div>

        <div data-aos="fade-up" className="whyChosesEducareList_titles">
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
            Education portal focuses more on skill development as a result, the
            students have a beautifull future career.
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
          <div className="col-sm-12 col-md-5 col-lg-6 col-xl-5 why_choses_educare_book_img">
            <img src={chosesEduCareImg} alt="" className="" />
          </div>
          <div
            className="col-sm-12 col-md-7 col-lg-6 col-xl-7"
            style={{ marginTop: "3%" }}
          >
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
