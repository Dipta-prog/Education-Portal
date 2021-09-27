import React from "react";
import "./TopGraduated.scss";
const topGraduated = [
  {
    img: (
      <div className="top_graduated_imges-1">
        <div className="datesInGraduate">
          <big>
            25 <br /> Oct, 2017
          </big>
        </div>
      </div>
    ),
    title: <h6>Lorem, ipsum dolor sit amet</h6>,
    dispriction: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        ullam?
      </p>
    ),
  },
  {
    img: (
      <div className="top_graduated_imges-2">
        <div className="datesInGraduate">
          <big>
            25 <br /> Oct, 2017
          </big>
        </div>
      </div>
    ),
    title: <h6>Lorem, ipsum dolor sit amet</h6>,
    dispriction: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        ullam?
      </p>
    ),
  },
  {
    img: (
      <div className="top_graduated_imges-3">
        <div className="datesInGraduate">
          <big>
            25 <br /> Oct, 2017
          </big>
        </div>
      </div>
    ),
    title: <h6>Lorem, ipsum dolor sit amet</h6>,
    dispriction: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        ullam?
      </p>
    ),
  },
];
const TopGraduated = () => {
  return (
    <section className="container">
      <div className="all_section_header_title">
        <big>
          TOP <span>GRADUATED</span>
        </big>{" "}
        <div className="lines">
          <div className="lines1"></div>
          <div className="lines2"></div>
          <div className="lines3"></div>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
          omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Impedit, sunt!
        </p>
      </div>
      <div className="row">
        {topGraduated.map((top, i) => (
          <div key={i} className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <div className="top_graduated_container">
              {top.img}

              {top.title}
              {top.dispriction}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopGraduated;
