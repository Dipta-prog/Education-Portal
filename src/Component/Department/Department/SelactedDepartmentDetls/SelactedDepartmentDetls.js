import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import courseDetlsImg from "../../../../Media/img/Department/course-details.jpg";
import DepartmentInstructor from "./SelactedDepartmentDetlsOverviewPart/DepartmentInstructor/DepartmentInstructor";
import "./SelactedDepartmentDetls.css";
import DepartmentOverview from "./SelactedDepartmentDetlsOverviewPart/DepartmentOverview/DepartmentOverview";
import DepartmentReviews from "./SelactedDepartmentDetlsOverviewPart/DepartmentReviews/DepartmentReviews";
import { FaHeart, FaVideo } from "react-icons/fa";
import Bounce from "react-reveal/Bounce";
const dpp = [];
const SelactedDepartmentDetls = ({
  selctedDepartment,
  findCourses,
  findTeacher,
}) => {
  console.log(selctedDepartment, findCourses);
  const [click, setClick] = useState("overView");
  console.log(click);
  return (
    <>
      <Bounce left>
        <Link to={"/subject/" + selctedDepartment.departmentName}>
          <img src={selctedDepartment.image} alt="" style={{ width: "100%" }} />
        </Link>
        {/*  */}
        <div className="deshbord_courseDetls_bottom_part">
          <div>
            {" "}
            <Link to={"/subject/" + selctedDepartment.departmentName}>
              <button className="resister_btn  ">select</button>{" "}
            </Link>
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
      </Bounce>
      {/*  */}
      <div className="department_click_overview">
        {click === "overView" ? (
          <span
            style={{ color: "#00a651", textDecoration: "line-through" }}
            onClick={() => setClick("overView")}
          >
            Over View
          </span>
        ) : (
          <span onClick={() => setClick("overView")}>Over View</span>
        )}
        {click === "instructor" ? (
          <span
            style={{ color: "#00a651", textDecoration: "line-through" }}
            onClick={() => setClick("instructor")}
          >
            Instructor
          </span>
        ) : (
          <span onClick={() => setClick("instructor")}>Instructor</span>
        )}
        {click === "reviews" ? (
          <span
            style={{ color: "#00a651", textDecoration: "line-through" }}
            onClick={() => setClick("reviews")}
          >
            Reviews
          </span>
        ) : (
          <span onClick={() => setClick("reviews")}>Reviews</span>
        )}
      </div>
      <Bounce up>
        <div>
          {click === "overView" && (
            <DepartmentOverview
              findCourses={findCourses}
              selctedDepartment={selctedDepartment}
            ></DepartmentOverview>
          )}
          {click === "instructor" && (
            <DepartmentInstructor
              findTeacher={findTeacher}
            ></DepartmentInstructor>
          )}
          {click === "reviews" && <DepartmentReviews></DepartmentReviews>}
        </div>
      </Bounce>
    </>
  );
};

export default SelactedDepartmentDetls;
