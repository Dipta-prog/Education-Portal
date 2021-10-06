import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import basicElecricity from "../../../../Media/img/pages/Deshbord-img/basic-slectricity-2.jpg";
import basicElectronics from "../../../../Media/img/pages/Deshbord-img/subject/basic-electronics.jpg";
import javaScript from "../../../../Media/img/pages/Deshbord-img/subject/java-script.jpg";
import php from "../../../../Media/img/pages/Deshbord-img/subject/php.jpg";
import { useHistory } from "react-router";
import { UseSelcCourseContext } from "../../../../App";
import "./CategoryWiseCourseSubject.css";
const CategoryWiseCourseSubject = ({ subject, selactedCourse }) => {
  const history = useHistory();
  const [studentSelactedCourse, setStudentSelactedCourse] =
    useContext(UseSelcCourseContext);
  console.log("studentSelactedCourse", studentSelactedCourse);
  console.log(selactedCourse);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setStudentSelactedCourse({
      selactedCourse,
      data,
    });
    history.push("/student-register");
  };
  /////////////////////

  const eeeSubject = [
    {
      subject: (
        <div>
          <input
            type="checkbox"
            id="vehicle1"
            value="Basic electricity"
            {...register("basicElecricity")}
          />
          <label
            for="vehicle1"
            style={{
              fontStyle: "italic",
              fontSize: "18px",
              color: "#1eaace",
              padding: "0 10px",
              paddingTop: "2%",
            }}
          >
            {" "}
            Chosess this subject
          </label>
          <br />
        </div>
      ),
      timming: (
        <div className="course_subject_timming">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-sm-4">
              {" "}
              <h4>
                Finished on <span> August 4, 2022</span>
              </h4>
            </div>
            <div className="col-sm-4">
              {" "}
              <h4>5.00 pm - 7.00 pm</h4>
            </div>
            <div className="col-sm-4">
              <h4>Length 5 months</h4>
            </div>
          </div>
        </div>
      ),
      courseSubjectDetls: (
        <div className="course_subject_detls">
          <div className="row">
            <div className="col-sm-9">
              {" "}
              <small>
                <big style={{ fontStyle: "italic", color: "#222" }}>
                  Subject :
                </big>{" "}
                Basic Electricity
              </small>
              <span>About the Subject</span>{" "}
            </div>
            <div className="col-sm-3">
              {" "}
              <img
                src={basicElecricity}
                alt=""
                style={{ width: "100px", height: "100px" }}
              />
            </div>
          </div>
          <p>
            This course is a demonstration of how customers can receive an
            access to the classes. If you try to open any of the lessons (check
            below, in the “Learning Plan” section), access will be denied.
            <br /> <br />
            However, if you authorize using the following data: Login: <br />
            test_customer Password: test <br /> <br />
            you will be able to open the first and the second classes; as for
            the third class, it will become available from the date specified.
          </p>
        </div>
      ),
      courseSubjectReatingcard: (
        <div>
          <div className="course_subject_reating_card">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="course_subject_reating">
                <div
                  className="course_subject_student_retings"
                  style={{ backgroundColor: "#86bc42", width: "57%" }}
                >
                  <p> Tutorials</p>
                </div>
              </div>
              <p style={{ paddingTop: "3%", paddingLeft: "1%", color: "#222" }}>
                57%
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="course_subject_reating">
                <div
                  className="course_subject_student_retings"
                  style={{ backgroundColor: "#1eaace", width: "65%" }}
                >
                  <p>Training programm</p>
                </div>
              </div>
              <p style={{ paddingTop: "3%", paddingLeft: "1%", color: "#222" }}>
                65%
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="course_subject_reating">
                <div
                  className="course_subject_student_retings"
                  style={{ backgroundColor: "#ffb20e", width: "47%" }}
                >
                  <p> Teacher</p>
                </div>
              </div>
              <p
                style={{
                  paddingTop: "3%",
                  paddingLeft: "1%",
                  color: "#222222c7",
                }}
              >
                47%
              </p>
            </div>
          </div>
          <div
            className="row"
            style={{
              background: "#f4f7f9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 1px",
              height: "100px",
              overflowY: "auto",
            }}
          >
            <div className="col-sm-8">
              {" "}
              <p
                style={{
                  color: "#555",
                  lineHeight: "22px",
                  fontSize: "14px",
                  padding: "2%",
                }}
              >
                Summary rating from 8 user's marks. You can set own marks for
                this article - just click on stars above and press "Accept".
              </p>
            </div>
            <div
              className="col-sm-4"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#1eaace",
                height: "100px",
                borderBottomLeftRadius: "50%",
                borderTopLeftRadius: "14%",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "45px",
                    color: "white",
                    fontWeight: "100",
                  }}
                >
                  57%
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      subject: (
        <div>
          <input
            type="checkbox"
            id="vehicle2"
            value="Basic Electronics"
            {...register("basicElectronics")}
          />
          <label
            for="vehicle2"
            style={{
              fontStyle: "italic",
              fontSize: "18px",
              color: "#1eaace",
              padding: "0 10px",
              paddingTop: "2%",
            }}
          >
            {" "}
            Chosess this subject
          </label>
          <br />
        </div>
      ),
      timming: (
        <div className="course_subject_timming">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-sm-4">
              {" "}
              <h4>
                Finished on <span> August 4, 2022</span>
              </h4>
            </div>
            <div className="col-sm-4">
              {" "}
              <h4>5.00 pm - 7.00 pm</h4>
            </div>
            <div className="col-sm-4">
              <h4>Length 5 months</h4>
            </div>
          </div>
        </div>
      ),
      courseSubjectDetls: (
        <div className="course_subject_detls">
          <div className="row">
            <div className="col-sm-9">
              {" "}
              <small>
                <big style={{ fontStyle: "italic", color: "#222" }}>
                  Subject :
                </big>{" "}
                Basic Electronics
              </small>
              <span>About the Subject</span>{" "}
            </div>
            <div className="col-sm-3">
              {" "}
              <img
                src={basicElectronics}
                alt=""
                style={{ width: "100px", height: "100px" }}
              />
            </div>
          </div>
          <p>
            This course is a demonstration of how customers can receive an
            access to the classes. If you try to open any of the lessons (check
            below, in the “Learning Plan” section), access will be denied.
            <br /> <br />
            However, if you authorize using the following data: Login: <br />
            test_customer Password: test <br /> <br />
            you will be able to open the first and the second classes; as for
            the third class, it will become available from the date specified.
          </p>
        </div>
      ),
      courseSubjectReatingcard: (
        <div>
          <div className="course_subject_reating_card">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="course_subject_reating">
                <div
                  className="course_subject_student_retings"
                  style={{ backgroundColor: "#86bc42", width: "57%" }}
                >
                  <p> Tutorials</p>
                </div>
              </div>
              <p style={{ paddingTop: "3%", paddingLeft: "1%", color: "#222" }}>
                57%
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="course_subject_reating">
                <div
                  className="course_subject_student_retings"
                  style={{ backgroundColor: "#1eaace", width: "65%" }}
                >
                  <p>Training programm</p>
                </div>
              </div>
              <p style={{ paddingTop: "3%", paddingLeft: "1%", color: "#222" }}>
                65%
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="course_subject_reating">
                <div
                  className="course_subject_student_retings"
                  style={{ backgroundColor: "#ffb20e", width: "47%" }}
                >
                  <p> Teacher</p>
                </div>
              </div>
              <p
                style={{
                  paddingTop: "3%",
                  paddingLeft: "1%",
                  color: "#222222c7",
                }}
              >
                47%
              </p>
            </div>
          </div>
          <div
            className="row"
            style={{
              background: "#f4f7f9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 1px",
              height: "100px",
              overflowY: "auto",
            }}
          >
            <div className="col-sm-8">
              {" "}
              <p
                style={{
                  color: "#555",
                  lineHeight: "22px",
                  fontSize: "14px",
                  padding: "2%",
                }}
              >
                Summary rating from 8 user's marks. You can set own marks for
                this article - just click on stars above and press "Accept".
              </p>
            </div>
            <div
              className="col-sm-4"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#1eaace",
                height: "100px",
                borderBottomLeftRadius: "50%",
                borderTopLeftRadius: "14%",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "45px",
                    color: "white",
                    fontWeight: "100",
                  }}
                >
                  57%
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  ///
  const cseSubject = [
    {
      subject: (
        <div>
          <input
            type="checkbox"
            id="vehicle1"
            value="Java"
            {...register("java")}
          />
          <label
            for="vehicle1"
            style={{
              fontStyle: "italic",
              fontSize: "18px",
              color: "#1eaace",
              padding: "0 10px",
              paddingTop: "2%",
            }}
          >
            {" "}
            Chosess this subject
          </label>
          <br />
        </div>
      ),
      timming: (
        <div className="course_subject_timming">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-sm-4">
              {" "}
              <h4>
                Finished on <span> August 4, 2022</span>
              </h4>
            </div>
            <div className="col-sm-4">
              {" "}
              <h4>5.00 pm - 7.00 pm</h4>
            </div>
            <div className="col-sm-4">
              <h4>Length 5 months</h4>
            </div>
          </div>
        </div>
      ),
      courseSubjectDetls: (
        <div className="course_subject_detls">
          <div className="row">
            <div className="col-sm-9">
              {" "}
              <small>
                <big style={{ fontStyle: "italic", color: "#222" }}>
                  Subject :
                </big>{" "}
                Java Script
              </small>
              <span>About the Subject</span>{" "}
            </div>
            <div className="col-sm-3">
              {" "}
              <img
                src={javaScript}
                alt=""
                style={{ width: "100px", height: "100px" }}
              />
            </div>
          </div>
          <p>
            This course is a demonstration of how customers can receive an
            access to the classes. If you try to open any of the lessons (check
            below, in the “Learning Plan” section), access will be denied.
            <br /> <br />
            However, if you authorize using the following data: Login: <br />
            test_customer Password: test <br /> <br />
            you will be able to open the first and the second classes; as for
            the third class, it will become available from the date specified.
          </p>
        </div>
      ),
      courseSubjectReatingcard: (
        <div>
          <div className="course_subject_reating_card">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="course_subject_reating">
                <div
                  className="course_subject_student_retings"
                  style={{ backgroundColor: "#86bc42", width: "57%" }}
                >
                  <p> Tutorials</p>
                </div>
              </div>
              <p style={{ paddingTop: "3%", paddingLeft: "1%", color: "#222" }}>
                57%
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="course_subject_reating">
                <div
                  className="course_subject_student_retings"
                  style={{ backgroundColor: "#1eaace", width: "65%" }}
                >
                  <p>Training programm</p>
                </div>
              </div>
              <p style={{ paddingTop: "3%", paddingLeft: "1%", color: "#222" }}>
                65%
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="course_subject_reating">
                <div
                  className="course_subject_student_retings"
                  style={{ backgroundColor: "#ffb20e", width: "47%" }}
                >
                  <p> Teacher</p>
                </div>
              </div>
              <p
                style={{
                  paddingTop: "3%",
                  paddingLeft: "1%",
                  color: "#222222c7",
                }}
              >
                47%
              </p>
            </div>
          </div>
          <div
            className="row"
            style={{
              background: "#f4f7f9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 1px",
              height: "100px",
              overflowY: "auto",
            }}
          >
            <div className="col-sm-8">
              {" "}
              <p
                style={{
                  color: "#555",
                  lineHeight: "22px",
                  fontSize: "14px",
                  padding: "2%",
                }}
              >
                Summary rating from 8 user's marks. You can set own marks for
                this article - just click on stars above and press "Accept".
              </p>
            </div>
            <div
              className="col-sm-4"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#1eaace",
                height: "100px",
                borderBottomLeftRadius: "50%",
                borderTopLeftRadius: "14%",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "45px",
                    color: "white",
                    fontWeight: "100",
                  }}
                >
                  57%
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      subject: (
        <div>
          <input
            type="checkbox"
            id="vehicle2"
            value="PHP"
            {...register("php")}
          />
          <label
            for="vehicle2"
            style={{
              fontStyle: "italic",
              fontSize: "18px",
              color: "#1eaace",
              padding: "0 10px",
              paddingTop: "2%",
            }}
          >
            {" "}
            Chosess this subject
          </label>
          <br />
        </div>
      ),
      timming: (
        <div className="course_subject_timming">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-sm-4">
              {" "}
              <h4>
                Finished on <span> August 4, 2022</span>
              </h4>
            </div>
            <div className="col-sm-4">
              {" "}
              <h4>5.00 pm - 7.00 pm</h4>
            </div>
            <div className="col-sm-4">
              <h4>Length 5 months</h4>
            </div>
          </div>
        </div>
      ),
      courseSubjectDetls: (
        <div className="course_subject_detls">
          <div className="row">
            <div className="col-sm-9">
              {" "}
              <small>
                <big style={{ fontStyle: "italic", color: "#222" }}>
                  Subject :
                </big>{" "}
                PHP
              </small>
              <span>About the Subject</span>{" "}
            </div>
            <div className="col-sm-3">
              {" "}
              <img
                src={php}
                alt=""
                style={{ width: "100px", height: "100px" }}
              />
            </div>
          </div>
          <p>
            This course is a demonstration of how customers can receive an
            access to the classes. If you try to open any of the lessons (check
            below, in the “Learning Plan” section), access will be denied.
            <br /> <br />
            However, if you authorize using the following data: Login: <br />
            test_customer Password: test <br /> <br />
            you will be able to open the first and the second classes; as for
            the third class, it will become available from the date specified.
          </p>
        </div>
      ),
      courseSubjectReatingcard: (
        <div>
          <div className="course_subject_reating_card">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="course_subject_reating">
                <div
                  className="course_subject_student_retings"
                  style={{ backgroundColor: "#86bc42", width: "57%" }}
                >
                  <p> Tutorials</p>
                </div>
              </div>
              <p style={{ paddingTop: "3%", paddingLeft: "1%", color: "#222" }}>
                57%
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="course_subject_reating">
                <div
                  className="course_subject_student_retings"
                  style={{ backgroundColor: "#1eaace", width: "65%" }}
                >
                  <p>Training programm</p>
                </div>
              </div>
              <p style={{ paddingTop: "3%", paddingLeft: "1%", color: "#222" }}>
                65%
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="course_subject_reating">
                <div
                  className="course_subject_student_retings"
                  style={{ backgroundColor: "#ffb20e", width: "47%" }}
                >
                  <p> Teacher</p>
                </div>
              </div>
              <p
                style={{
                  paddingTop: "3%",
                  paddingLeft: "1%",
                  color: "#222222c7",
                }}
              >
                47%
              </p>
            </div>
          </div>
          <div
            className="row"
            style={{
              background: "#f4f7f9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 1px",
              height: "100px",
              overflowY: "auto",
            }}
          >
            <div className="col-sm-8">
              {" "}
              <p
                style={{
                  color: "#555",
                  lineHeight: "22px",
                  fontSize: "14px",
                  padding: "2%",
                }}
              >
                Summary rating from 8 user's marks. You can set own marks for
                this article - just click on stars above and press "Accept".
              </p>
            </div>
            <div
              className="col-sm-4"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#1eaace",
                height: "100px",
                borderBottomLeftRadius: "50%",
                borderTopLeftRadius: "14%",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "45px",
                    color: "white",
                    fontWeight: "100",
                  }}
                >
                  57%
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  ///////////////////////
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {selactedCourse.course === "EEE" && (
          <>
            {eeeSubject.map((sub, i) => (
              <div
                key={i}
                style={{
                  paddingTop: "8%",
                  paddingBottom: "3%",
                  borderBottom: "1px solid #e4e7e8",
                }}
              >
                {sub.timming}
                <div
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "4%",
                  }}
                >
                  <div className="col-sm-12 col-md-12 col-lg-7">
                    {sub.courseSubjectDetls}
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-5">
                    {sub.courseSubjectReatingcard}
                  </div>
                </div>
                {sub.subject}
              </div>
            ))}
          </>
        )}
        {/*  */}
        {selactedCourse.course === "CSE" && (
          <>
            {cseSubject.map((sub, i) => (
              <div
                key={i}
                style={{
                  paddingTop: "8%",
                  paddingBottom: "3%",
                  borderBottom: "1px solid #e4e7e8",
                }}
              >
                {sub.timming}
                <div
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "4%",
                  }}
                >
                  <div className="col-sm-12 col-md-12 col-lg-7">
                    {sub.courseSubjectDetls}
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-5">
                    {sub.courseSubjectReatingcard}
                  </div>
                </div>
                {sub.subject}
              </div>
            ))}
          </>
        )}

        <div style={{ textAlign: "end", margin: "3%" }}>
          {" "}
          <input
            type="submit"
            value="Register Now !!"
            className="resister_btn"
            // onClick={() => history.push("/student-register")}
          />
        </div>

        {/* <p onClick={() => history.push("/student-register")}>
          Register from Now
        </p> */}
      </form>
    </div>
  );
};

export default CategoryWiseCourseSubject;

//   <input
//       type="checkbox"
//       value="besic electricity"
//       {...register("subject")}
//     />
//     <img
//       src={basicElecricity}
//       alt=""
//       style={{ width: "2%", borderRadius: "3px", marginLeft: "2%" }}
//     />{" "}
//     <label for="vehicle1"> Basic Electricity</label>
//     <br />
//     <br />

// <input
// type="checkbox"
// value="besic electricity"
// {...register("subject")}
// />
// <img
// src={basicElecricity}
// alt=""
// style={{ width: "2%", borderRadius: "3px", marginLeft: "2%" }}
// />{" "}
// <label for="vehicle1"> Basic Electricity</label>
// <br />
// <br />
// <input type="submit" value="Submit" />
// </>
