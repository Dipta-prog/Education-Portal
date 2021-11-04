import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { UseSelcDepartmentContext } from "../../../../../App";
import AllTeacher from "../../../AllTeacher/AllTeacher";
import FindTeacher from "../../../AllTeacher/FindTeacher/FindTeacher";
import Navbar from "../../../../Shared/Navbar/Navbar";
import Footer from "../../../../Shared/Footer/Footer";
import AllDepartment from "../../AllDepartment/AllDepartment";
import Department from "../../Department";
import SelactedDepartmentDetls from "../../SelactedDepartmentDetls/SelactedDepartmentDetls";
import { Link } from "react-router-dom";

const Courses = () => {
  const history = useHistory();
  const { departmentNames, departmentKey } = useParams();
  const [selctedDepartment, setSelctedDepartment] = useState({});
  const [allDepartment, setAllDepartment] = useState({});

  // const [selcDepartment, setSelcDepartment] = useContext(
  //   UseSelcDepartmentContext
  // );
  useEffect(() => {
    fetch("https://education-portal-1.herokuapp.com/department")
      .then((res) => res.json())
      .then((data) => {
        console.log("2", data.rasult);
        const dataa = data.rasult;
        dataa.map((dp) => setAllDepartment(dp));
        let findDepartment = data.rasult.find((dp) => dp._id === departmentKey);

        setSelctedDepartment(findDepartment);
      });
  }, []);
  console.log("alls", allDepartment);
  console.log(selctedDepartment.departmentName);
  // let findDepartment = allDepartmant.map((dp) => dp._id);
  // console.log(findDepartment);

  // const [findTeachers, setFindTeacher] = useState([]);
  // useEffect(() => {
  //   const url = "https://education-portal-1.herokuapp.com/admin/allTeacher";
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.rasult);
  //       // let findTeacher = data.rasult.filter(
  //       //   (t) => t.department === selctedDepartment.departmentName
  //       // );

  //       // setFindTeacher(findTeacher);
  //     });
  // }, []);
  // console.log("findTeacher", findTeachers);

  const [findTeacher, setFindTeacher] = useState([]);
  useEffect(() => {
    const url = "https://education-portal-1.herokuapp.com/admin/allTeacher";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const fT = data.result.filter(
          (t) => t.department === selctedDepartment.departmentName
        );
        console.log("ft", fT);
        setFindTeacher(fT);
        // setFindTeacher(findTeacher);
      });
  }, []);
  console.log("f", findTeacher);
  console.log("n", selctedDepartment.departmentName);
  // let findTeacher = findTeachers.filter(
  //   (t) => t.department === selctedDepartment.departmentName
  // );
  // console.log("finddd teacher", findTeacher);

  // console.log(findTeachers);
  //////////////////////////////////////
  const [findCourses, setFindCourses] = useState([]);
  useEffect(() => {
    fetch("https://education-portal-1.herokuapp.com/course")
      .then((res) => res.json())
      .then((data) => {
        // console.log("2", data.result);
        const findCourse = data.result.filter(
          (course) => course.departmentName === departmentNames
        );
        setFindCourses(findCourse);
      });
  }, []);

  /////////////////////////////////////
  return (
    <>
      <Navbar></Navbar>

      <div className="container">
        <p>Department : {departmentNames}</p>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
            {/* <h1>{departmentKey}</h1> */}
            <SelactedDepartmentDetls
              selctedDepartment={selctedDepartment}
              findCourses={findCourses}
              findTeacher={findTeacher}
            ></SelactedDepartmentDetls>
          </div>
          <div
            className="col-sm-12  col-md-12 col-lg-4 col-xl-4"
            style={{ marginTop: "4% " }}
          >
            <h5 className="department_sources">Courses</h5>
            <div className="n_line"></div>
            <div className="all_department_list">
              {" "}
              {findCourses.map((course) => (
                <li
                  onClick={() =>
                    history.push("/subject/" + selctedDepartment.departmentName)
                  }
                >
                  {course.courseName}{" "}
                  <span style={{ color: "#b1b1b1" }}>(9)</span>{" "}
                </li>
              ))}
            </div>
            {/* <AllTeacherDetls findTeacher={findTeacher}></AllTeacherDetls> */}
            <div style={{ paddingTop: "12% " }}>
              <h5 className="department_sources">BROWSE BY TEACHER</h5>
              <div className="n_line"></div>
              <p className="department_text">
                Lorem ipsum sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <FindTeacher findTeacher={findTeacher}></FindTeacher>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer></Footer>
    </>
  );
};

export default Courses;
