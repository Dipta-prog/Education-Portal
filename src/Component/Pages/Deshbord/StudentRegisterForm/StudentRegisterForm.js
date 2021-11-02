import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { UserLoggedinContext, UseSelcCourseContext } from "../../../../App";
import "./StudentRegisterForm.scss";

const StudentRegisterForm = () => {
  const history = useHistory();
  const [loggedinUser, setLoggedinUser] = useContext(UserLoggedinContext);
  const [studentSelactedCourse, setStudentSelactedCourse] =
    useContext(UseSelcCourseContext);
  console.log("000", studentSelactedCourse);
  const [studentCourse, setStudentSelcCourse] = useState({});
  // console.log("*", studentCourse);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    //setStudentSelcCourse({ studentSelactedCourse, data, loggedinUser });
    const datas = { studentSelactedCourse, data, loggedinUser };
    console.log("datas", datas);
    axios
      .post("http://localhost:1000/students", datas)

      .then((data) => {
        console.log("new", data);
        Swal.fire("Good job!", "Your register was successfully", "success");
        history.push("/student-deshbord");
      })
      .catch((error) => {
        console.error(error);
      });
    e.target.reset();
  };
  ////////
  const [studentDeshboardData, setStudentDeshboardData] = useState([]);
  useEffect(() => {
    fetch("https://education-portal-1.herokuapp.com/students")
      .then((res) => res.json())
      .then((data) => {
        console.log("222", data);
        const filterRoleAndLoginUser = data.rasult.map(
          (filter) => filter.loggedinUser.email
          // filter.loggedinUser.role === "Student"
        );

        setStudentDeshboardData(filterRoleAndLoginUser);
      });
  }, []);
  ///////
  return (
    <section className="student_form_container">
      {studentDeshboardData === loggedinUser.email ? (
        <div className="container">
          <h3
            style={{
              textAlign: "center",
              paddingBottom: "3%",
              fontSize: "40px",
            }}
          >
            Student Course Request !!!
          </h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <span>Your Name</span>
            <input
              type="text"
              name="name"
              {...register("studentName", { required: true })}
              className="form-control w-100"
            />
            {errors.studentName && (
              <span className="input_err">This field is required</span>
            )}
            <br />
            <div className="row">
              <div className="col-sm-6">
                {" "}
                <span>Father Name</span>{" "}
                <input
                  type="name"
                  {...register("fatherName", { required: true })}
                  className="form-control w-100"
                />
                {errors.fatherName && (
                  <span className="input_err">This field is required</span>
                )}{" "}
                <br />
              </div>
              <div className="col-sm-6">
                {" "}
                <span>Mother Name</span>{" "}
                <input
                  type="name"
                  {...register("motherName", { required: true })}
                  className="form-control w-100"
                />
                {errors.motherName && (
                  <span className="input_err">This field is required</span>
                )}{" "}
                <br />
              </div>
              <div className="col-sm-6">
                {" "}
                <span>Phone Number</span>
                <input
                  defaultValue="+88"
                  type="tel"
                  {...register("studentPhoneNumber", { required: true })}
                  className="form-control w-100"
                />
                {errors.studentPhoneNumber && (
                  <span className="input_err">This field is required</span>
                )}{" "}
                <br />
              </div>
              <div className="col-sm-6">
                <span>Gender</span>
                <select
                  className="form-control w-100"
                  {...register("gender", { required: true })}
                >
                  <option disabled={true} value="Not set">
                    Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="coustom">Coustom</option>
                </select>
                <br />
              </div>
            </div>
            <span>Address</span>
            <textarea
              {...register("description", { required: true })}
              className="form-control w-100"
              placeholder="Description"
            />
            {errors.description && (
              <span className="input_err">This field is required</span>
            )}{" "}
            <br />
            <input type="submit" className="resister_btn  " />
          </form>
          {/*  */}
        </div>
      ) : (
        <div id="notFound-div">
          <div class="notFound">
            <div class="notFound-404"></div>
            {/* <h1>404</h1> */}
            <h2>Oops! Page Not Be Found</h2>
            <p>
              Sorry, you already have our course request, which will no longer
              be approved
            </p>
            <Link to="/student-deshbord" class="back-link btn btn-primary">
              Back to your Deshboard
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default StudentRegisterForm;
