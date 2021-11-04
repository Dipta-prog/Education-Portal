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
import TodoList from "./StudentTodo/TodoList/TodoList/TodoList";
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
  const [allTeachers, setAllTeachers] = useState([]);
  const [departmentTeachers, setDepartmentTeachers] = useState([]);

  useEffect(() => {
    fetchStudentDashboardData()
    fetchAllTeacher()
  }, []);

  const fetchStudentDashboardData = async () => {
    const res = await fetch("https://education-portal-1.herokuapp.com/students");
    let data = await res.json()
    data = data.rasult
    console.log("🚀 ~ file: StudentDeshbord.js ~ line 37 ~ loadStudentDashboardData ~ data", data)
    const filterRoleAndLoginUser = data.filter((course) => course.loggedinUser.email === loggedinUser.email);
    setStudentDeshboardData(filterRoleAndLoginUser);
  }

  const fetchAllTeacher = async () => {
    const url = "https://education-portal-1.herokuapp.com/admin/allTeacher";
    const res = await fetch(url);
    let data = await res.json();
    data = data.result;
    setAllTeachers(data);
  }
  console.log("Dipta", studentDeshboardData);

// I suggest you to do this work via an api, It has performance issue, but its working
  const findDepTeacher = () => {
    if ((studentDeshboardData.length > 0)) {
      let temp = [];
      if (temp.length > 0) return;
      const deptName = studentDeshboardData[0].studentSelactedCourse.courseSubjectFilters.departmentName
      console.log("student-dashboard data", deptName, "allTeachers", allTeachers);
      for (let i = 0; i < allTeachers.length - 1; i++) {
        const element = allTeachers[i];
        console.log("all teacher loop", element.department === deptName)
        if (element.department === deptName) {
          temp = [...temp, element]
        }
      }
      console.log("filtered dept teacher", temp)
      setDepartmentTeachers(temp)
    }
  };
  setTimeout(() => {
    findDepTeacher()
  }, 3000);

  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        {" "}
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
        <div className="row">
          <div className="col-sm-8">
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
                        className=" col-xl-4 col-lg-4 col-md-6 col-sm-6 "
                        style={{ marginBottom: "2%" }}
                      >
                        <div style={{ cursor: "pointer" }}>
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
                              {
                                data.studentSelactedCourse.courseSubjectFilters
                                  .departmentName
                              }{" "}
                              (BSC)
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
                              {data?.studentSelactedCourse?.subject?.map(
                                (sub) => (
                                  <li
                                    onClick={() =>
                                      history.push("/courseDetails")
                                    }
                                  >
                                    {sub}
                                  </li>
                                )
                              )}
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
                                <span
                                  style={{ fontSize: "17px", color: "#555" }}
                                >
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
          <div className="col-sm-4">
            <h1>Dept. teachers</h1>
            <ul>
              {
                departmentTeachers.map((teacher, i) => (
                  <li key={i}>{teacher.name}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      <div style={{ padding: "4%" }}>
        {" "}
        <TodoList></TodoList>
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
