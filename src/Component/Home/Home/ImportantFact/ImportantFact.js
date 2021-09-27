import React from "react";
import { FaFile, FaTh, FaUsers, FaThList } from "react-icons/fa";
import "./ImportantFact.scss";
import CountUp from "react-countup";
const importanFact = [
  {
    icon: <FaFile style={{ color: "#86bc42", fontSize: "26px" }} />,
    total: 520,
    name: "teachers",
  },
  {
    icon: <FaTh style={{ color: "#86bc42", fontSize: "26px" }} />,
    total: 5620,
    name: "courses",
  },
  {
    icon: <FaUsers style={{ color: "#86bc42", fontSize: "26px" }} />,
    total: 1520,
    name: "members",
  },
  {
    icon: <FaThList style={{ color: "#86bc42", fontSize: "26px" }} />,
    total: 32,
    name: "Countries",
  },
];
const ImportantFact = () => {
  return (
    <section style={{ background: "#f6f6f6" }}>
      <div className="container">
        <div className="all_section_header_title">
          <big>
            SOME IMPORTANT <span>FACTS</span>
          </big>{" "}
          <div className="lines">
            <div className="lines1"></div>
            <div className="lines2"></div>
            <div className="lines3"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row" style={{ padding: "0 2%" }}>
          {importanFact.map((fact, i) => (
            <div
              key={i}
              className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3"
              style={{
                paddingBottom: "1%",
                paddingLeft: "1%",
                paddingRight: "1%",
                paddingTop: "1%",
              }}
            >
              <div className="single_importantFact_card">
                <div
                  style={{
                    border: "1px solid #eeeeee",
                    //  padding: "5%",
                    paddingTop: "5%",
                  }}
                >
                  {fact.icon}
                  <h5>
                    {" "}
                    <CountUp
                      start={0}
                      end={fact.total}
                      duration={4.5}
                      separator=","
                    />
                  </h5>
                  <p>{fact.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantFact;
