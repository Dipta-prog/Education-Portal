import { Skeleton } from "@material-ui/lab";
import React from "react";
import eeeImg from "../../../Media/img/student-deshbord/1.jpg";
import eeeImg2 from "../../../Media/img/student-deshbord/2.jpg";
import eeeImg3 from "../../../Media/img/student-deshbord/3.jpg";
import eeeImg4 from "../../../Media/img/student-deshbord/4.jpg";
import eeeImg5 from "../../../Media/img/student-deshbord/5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import StudentComment from "../StudentComment/StudentComment";
import Header from "../../Home/Home/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import CountUp from "react-countup";
const studentDeshbordCatagory = [
  {
    img: eeeImg,
    course: "EEE (BSC)",
    subject: " Digital Communication Lab",
  },
  {
    img: eeeImg2,
    course: "EEE (BSC)",
    subject: " Transmission Distribution of Electrical Power",
  },
  {
    img: eeeImg3,
    course: "EEE (BSC)",
    subject: " Radio Engineering",
  },
  {
    img: eeeImg4,
    course: "EEE (BSC)",
    subject: "Testing Equipment Electrical",
  },
  {
    img: eeeImg5,
    course: "EEE (BSC)",
    subject: " AC Machines",
  },
];
const StudentDeshbord = () => {
  const history = useHistory();
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div
          style={{
            borderBottom: "3px solid gray",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            background: "#8080805c",
            marginTop: "5%",
          }}
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "green", fontSize: "20px" }}
          />{" "}
          <h4
            style={{
              fontSize: "19px",
              paddingTop: "1%",
              paddingLeft: "2%",
              lineHeight: "24px",
            }}
          >
            Course Overview
          </h4>
        </div>
        <div
          style={{
            background: "#dddddd4d",
            padding: "6% 3%",
            paddingTop: "3%",
          }}
        >
          <div className="row">
            {studentDeshbordCatagory.map((catagory) => (
              <div
                className=" col-xl-3 col-lg-4 col-md-6 col-sm-6 "
                style={{ marginBottom: "2%" }}
              >
                <div
                  onClick={() => history.push("/courseDetails")}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={catagory.img}
                    alt=""
                    style={{ width: "100%", height: "200px" }}
                  />
                  <div
                    style={{
                      border: "1px solid #dddd",
                      padding: "5%",
                      background: "white",
                      height: "159px",
                      overflowY: "auto",
                    }}
                  >
                    <small style={{ textDecoration: "none" }}>
                      {catagory.course}
                    </small>
                    <h4
                      style={{
                        fontSize: "20px",
                        padding: "3% 0",
                        color: "#555",
                      }}
                    >
                      {catagory.subject}
                    </h4>
                    <div
                      style={{
                        display: "flex",
                        // justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "80%",
                          height: "30px",
                          border: "1px solid #dddd",
                          borderRadius: "5px",
                        }}
                      >
                        <div
                          style={{
                            width: "40%",
                            height: "28px",
                            background: "#3189b3",
                            borderRadius: "5px",
                          }}
                        ></div>
                      </div>
                      <div style={{ paddingLeft: "6%" }}>
                        <span style={{ fontSize: "17px", color: "#555" }}>
                          <CountUp
                            start={0}
                            end="57"
                            duration={3.5}
                            separator=","
                          />
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ padding: "4%" }}>
        {" "}
        <StudentComment></StudentComment>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default StudentDeshbord;
