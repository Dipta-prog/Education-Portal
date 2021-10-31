import React, { useEffect, useState } from "react";
import { FaHeart, FaVideo } from "react-icons/fa";
import Bounce from "react-reveal/Bounce";
import eeeImg from "../../../Media/img/pages/Deshbord-img/eee.jpg";
import cevilImg from "../../../Media/img/pages/Deshbord-img/subject/cevil-1.jpeg";
import cseImg from "../../../Media/img/pages/Deshbord-img/subject/cse.jpg";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import CategoryWiseCourseSubject from "./CategoryWiseCourseSubject/CategoryWiseCourseSubject";
import "./Deshbord.scss";

const courses = [
  {
    img: eeeImg,
    course: "EEE",
    courseTypes: "Engineering Students",
  },
  {
    img: cseImg,
    course: "CSE",
    courseTypes: "Engineering Students",
  },
  {
    img: cevilImg,
    course: "CIVIL",
    courseTypes: "Engineering Students",
  },
];

// ////////////////////////
const Deshbord = () => {
  const [selactedDepartment, setSelactedDepartment] = useState({});

  console.log(selactedDepartment);
  const [deshbordData, setDeshbordData] = useState([]);

  ////get////

  useEffect(() => {
    fetch("https://education-portal-1.herokuapp.com/department")
      .then((res) => res.json())
      .then((data) => {
        console.log("2", data.rasult);
        setDeshbordData(data.rasult);
      });
  }, []);
  console.log("gvfds", deshbordData);
  /////////////
  return (
    <div className="deshbord_container">
      <Navbar></Navbar>
      <div className="container">
        <div className="row" style={{ marginTop: "3%" }}>
          {deshbordData.map((department, i) => (
            <>
              {" "}
              {/* {courses.map((course, i) => ( */}
              <div key={i} className="col-sm-4">
                <Bounce left>
                  <div
                    //boxShadow: "0 0 5px 1px rgb(0 0 0 / 15%)"
                    style={{
                      border: "1px solid #e5e5e5",
                      borderRadius: "3px",
                    }}
                    // onClick={() => setSelactedCourse({ ...selactedCourse, course })}
                  >
                    <div>
                      <img
                        // src={course.img}
                        src={department.image}
                        alt=""
                        style={{ width: "100%", height: "150px" }}
                      />
                      <div className="deshbord_description">
                        <h4>
                          {department.departmentName}{" "}
                          <span>
                            Only, {department.departmentName} Department
                            Available
                          </span>
                        </h4>
                        <p>There are 24, Teachers for this course</p>
                        {/* <small>{department.details}</small> */}
                      </div>
                      {/*  */}
                      <div className="deshbord_courseDetls_bottom_part">
                        <div>
                          {" "}
                          {selactedDepartment.course ? (
                            <button
                              className="resister_btn nav-link disabled"
                              onClick={() =>
                                setSelactedDepartment({
                                  ...selactedDepartment,
                                  // course: course.course,
                                  course: department.departmentName,
                                })
                              }
                            >
                              SEE
                            </button>
                          ) : (
                            <button
                              className="resister_btn  "
                              onClick={() =>
                                setSelactedDepartment({
                                  ...selactedDepartment,
                                  // course: course.course,
                                  course: department.departmentName,
                                })
                              }
                            >
                              select
                            </button>
                          )}
                        </div>

                        <div className="deshbord_courseDetls_bottom_part_icons_part">
                          <div className="deshbord_courseDetls_bottom_part_icons">
                            <FaHeart />
                          </div>
                          <div className="deshbord_courseDetls_bottom_part_icons">
                            <FaVideo />
                          </div>
                        </div>
                      </div>
                      {/*  */}
                    </div>
                  </div>
                </Bounce>
              </div>
              {/* ))} */}
            </>
          ))}
        </div>
        {/*  */}
        {/* === "EEE" || selactedCourse.course === "CSE" */}
        {selactedDepartment.course ? (
          <>
            <CategoryWiseCourseSubject
              selactedDepartment={selactedDepartment}
            ></CategoryWiseCourseSubject>
          </>
        ) : (
          <p style={{ color: "#ff5260", padding: "1%" }}>
            Please Select the course{" "}
          </p>
        )}
      </div>
      <div style={{ paddingTop: "10%" }}>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Deshbord;
