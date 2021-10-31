import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import CountUp from "react-countup";
import { useHistory } from "react-router";
import { UserLoggedinContext } from "../../../App";
import eeeImg2 from "../../../Media/img/student-deshbord/2.jpg";
import myImg from "../../../Media/img/student-img/arifull.jpg";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import StudentComment from "../StudentComment/StudentComment";
const studentDeshbordCatagory = [
  {
    img: eeeImg2,
    course: "EEE (BSC)",
    subject: " Radio Engineering",
  },
];
const StudentDeshbord = () => {
  const [loggedinUser, setLoggedinUser] = useContext(UserLoggedinContext);
  const [studentDeshboardData, setStudentDeshboardData] = useState([]);
  const history = useHistory();
  ////
  const [test, setTest] = useState({});

  ////
  ////get////

  useEffect(() => {
    fetch("https://education-portal-1.herokuapp.com/students")
      .then((res) => res.json())
      .then((data) => {
        // console.log("2", data);
        const filterRoleAndLoginUser = data.rasult.filter(
          (filter) => filter.loggedinUser.email === loggedinUser.email
          // filter.loggedinUser.role === "Student"
        );

        setStudentDeshboardData(filterRoleAndLoginUser);
      });
  }, []);
  console.log("raju", studentDeshboardData);
  /////////////

  useEffect(() => {
    fetch("https://education-portal-1.herokuapp.com/course")
      .then((res) => res.json())
      .then((data) => {
        console.log("2", data);
        // setDepartmentSubjectData(data.rasult);
        const courses = data.result.map((subject) => setTest(subject));
        // console.log("/", courses);
      });
  }, []);
  console.log("test", test);
  ///////
  return (

    loggedinUser.role === 'student' ?
      <div>
        <Navbar></Navbar>
        <div className="container">
          <div className="row">
            {studentDeshboardData.map((studentDeshboard) => (
              <div className="col-sm-4">
                <div
                  style={{
                    display: "flex",

                    alignItems: "center",
                    marginTop: "3%",
                  }}
                >
                  <div>
                    <img
                      src={myImg}
                      alt=""
                      style={{ width: "80px", borderRadius: "100%" }}
                    />
                  </div>
                  <div style={{ paddingLeft: "1%" }}>
                    <h4>{studentDeshboard.loggedinUser.role}</h4>
                    <p>{studentDeshboard.loggedinUser.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              borderBottom: "3px solid gray",
              padding: "10px 20px",
              display: "flex",
              alignItems: "center",
              background: "#8080805c",
              marginTop: "3%",
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
                <>
                  {studentDeshboardData.map((data) => (
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
                            {data.studentSelactedCourse.course} (BSC)
                          </small>
                          <h4
                            style={{
                              fontSize: "16px",
                              padding: "3% 0",
                              color: "#555",
                            }}
                          >
                            <p
                              style={{
                                fontSize: "14px",
                                marginBottom: "3%",
                                color: "gray",
                                fontStyle: "italic",
                                fontWeight: "400",
                              }}
                            >
                              Enroll Course :
                            </p>
                            {/* {catagory.subject} */}
                            {data?.studentSelactedCourse?.subject?.map((sub) => (
                              <li>{sub}</li>
                            ))}
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
                </>
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

      : <div className="m-5 p-5">
        <div className="text-danger text-center p-5 m-5"> <h4 className="text-danger p-5 m-5" >You are not authorized for this route</h4></div>
      </div>
  );
};

export default StudentDeshbord;
