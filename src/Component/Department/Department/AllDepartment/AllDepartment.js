import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaStar, FaStarHalf } from "react-icons/fa";
import Courses from "../Courses/Courses/Courses";
import Bounce from "react-reveal/Bounce";
import "./AllDepartment.css";
import { UseSelcDepartmentContext } from "../../../../App";

const AllDepartment = ({ allDepartmant, allDepartmants }) => {
  const history = useHistory();
  const [departmentClick, setDepartmentClick] = useState({});
  const [selcDepartment, setSelcDepartment] = useContext(
    UseSelcDepartmentContext
  );
  const hendleSelcDepartment = (e) => {
    setSelcDepartment(e);
    // history.push("/course");
  };
  console.log(selcDepartment);
  return (
    <div style={{ marginTop: "3%" }}>
      <div className="row">
        {allDepartmants.map((departments) => (
          <>
            {allDepartmant.map((department) => (
              <div className="col-sm-12  single_all_department">
                <Bounce left>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="departmant_img">
                        <img
                          src={department.image}
                          alt=""
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <h4 style={{ fontSize: "20px", fontWeight: "550" }}>
                        {department.departmentName}
                      </h4>
                      <div className="all_department_reviews">
                        <li>
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStarHalf />
                        </li>

                        <p>25 Reviews</p>
                      </div>
                      <div>
                        <div
                          className="row shediul"
                          style={{
                            display: "flex",
                            //   textAlign: "center",
                            alignItems: "center",
                            width: "70%",
                          }}
                        >
                          <div className="col-sm-4 s_shediul">
                            <span>{departments.departLength}</span>

                            <small>Course Length</small>
                          </div>
                          <div className="col-sm-3 s_shediul">
                            <span>{departments.clasess}</span>

                            <small>Class</small>
                          </div>
                          <div className="col-sm-4 ">
                            <span>{departments.classDuration}</span>

                            <small>Class Duration</small>
                          </div>
                        </div>
                        <p className="department_text">
                          {departments.overview}
                        </p>
                      </div>
                      <Link
                        to={
                          "/departments/" +
                          department.departmentName +
                          "/" +
                          department._id
                        }
                      >
                        <button
                          className="departments_btn"
                          onClick={() => hendleSelcDepartment(department)}
                        >
                          see more
                        </button>
                      </Link>
                    </div>
                  </div>
                </Bounce>
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default AllDepartment;
