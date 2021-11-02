import React, { useEffect, useState } from "react";
import AllDepartment from "./AllDepartment/AllDepartment";
import dp1 from "../../../Media/img/Department/D1.jpg";
import dp2 from "../../../Media/img/Department/d2.jpg";
import dp3 from "../../../Media/img/Department/d3.jpg";
import pages from "../../../Media/img/Department/social_img/pages.png";
import "./Department.css";
import AllTeacher from "../AllTeacher/AllTeacher";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import Courses from "./Courses/Courses/Courses";
import Bounce from "react-reveal/Bounce";
const Department = () => {
  const allDepartmants = [
    {
      _id: 1,
      departmentImg: dp1,
      departmentName: "EEE - Electricas & Electronics Engineering",
      departLength: "1 year",
      clasess: "25",
      classDuration: " 7:00 - 10:00",
      overview:
        "Celebrate success right, the only way, apple. To succeed you must believe. When you believe, you will succeed.",
    },
  ];
  const [allDepartmant, setAllDepartmant] = useState([]);

  useEffect(() => {
    fetch("https://education-portal-1.herokuapp.com/department")
      .then((res) => res.json())
      .then((data) => {
        console.log("2", data.rasult);
        setAllDepartmant(data.rasult);
      });
  }, []);
  console.log(allDepartmant);
  return (
    <>
      <Navbar></Navbar>{" "}
      <div className="container">
        <div className="all_department_header">
          <div>
            {" "}
            <h4>ALL Department</h4> <div className="n_line"></div>
          </div>
          <div className="select-department-from w-25">
            {" "}
            <select className="form-control ">
              <option value="Not set">Select Department</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="coustom">Coustom</option>
            </select>
          </div>{" "}
        </div>
        <div className="row">
          <div className="col-sm-8">
            <AllDepartment
              allDepartmant={allDepartmant}
              allDepartmants={allDepartmants}
            ></AllDepartment>
          </div>
          <div className="col-sm-4 " style={{ padding: "2%" }}>
            <h5 className="department_sources">Departments</h5>
            <div className="n_line"></div>
            <div className="all_department_list">
              {" "}
              {allDepartmant.map((department) => (
                <Bounce right>
                  <li>
                    {department.departmentName}{" "}
                    <span style={{ color: "#b1b1b1" }}>(9)</span>
                  </li>
                </Bounce>
              ))}
            </div>
            <div style={{ padding: "11% 0" }}>
              <AllTeacher></AllTeacher>
            </div>
          </div>
        </div>
        <img src={pages} alt="" style={{ margin: "5% 0" }} />
      </div>
      {/* <div style={{ display: "none" }}>
        <Courses allDepartmant={allDepartmant}></Courses>
      </div> */}
      <Footer></Footer>
    </>
  );
};

export default Department;
