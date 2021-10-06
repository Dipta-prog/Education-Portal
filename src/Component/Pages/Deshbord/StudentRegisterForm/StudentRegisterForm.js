import React, { useContext, useState } from "react";
import { UseSelcCourseContext } from "../../../../App";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./StudentRegisterForm.css";
import axios from "axios";
const StudentRegisterForm = () => {
  const [studentSelactedCourse, setStudentSelactedCourse] =
    useContext(UseSelcCourseContext);
  const [studentCourse, setStudentSelcCourse] = useState({});
  console.log(studentCourse);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (datas) => {
    console.log(datas);
    setStudentSelcCourse({ studentSelactedCourse, datas });
    axios
      .post("http://localhost:1000/students", studentCourse)

      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <section className="student_form_container">
      <div className="container">
        {studentSelactedCourse.data ? (
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
            <input type="submit" className="btn btn-success" />
          </form>
        ) : (
          <Link to="/deshbord">
            <p>
              Sorry, Your n't selected subject properly ..... selected again
            </p>
          </Link>
        )}
      </div>
    </section>
  );
};

export default StudentRegisterForm;
