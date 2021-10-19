import AOS from "aos";
import "aos/dist/aos.css";
import React, { useContext, useEffect, useState } from "react";
import CountUp from "react-countup";
import { useForm } from "react-hook-form";
import Bounce from "react-reveal/Bounce";
import { useHistory } from "react-router";
import { animated, useSpring } from "react-spring";
import { UseSelcCourseContext } from "../../../../App";
import basicElecricity from "../../../../Media/img/pages/Deshbord-img/basic-slectricity-2.jpg";
import basicElectronics from "../../../../Media/img/pages/Deshbord-img/subject/basic-electronics.jpg";
import javaScript from "../../../../Media/img/pages/Deshbord-img/subject/java-script.jpg";
import php from "../../../../Media/img/pages/Deshbord-img/subject/php.jpg";
import "./CategoryWiseCourseSubject.scss";
/////////////////////

const courseSubject = [
  {
    slcCorse: "EEE",
    checkboxValueSubject: "Basic Electricity",
    subjectName: "basicElectricity",
    finishDate: "August 4, 2022",
    updateTimming: "5.00 pm - 7.00 pm",
    subjectFenishLength: "5 months",
    subjectImg: basicElecricity,
  },
  {
    slcCorse: "EEE",
    checkboxValueSubject: "Basic Electronics",
    subjectName: "basicElectronics",
    finishDate: "August 4, 2022",
    updateTimming: "5.00 pm - 7.00 pm",
    subjectFenishLength: "5 months",
    subjectImg: basicElectronics,
  },
  {
    slcCorse: "CSE",
    checkboxValueSubject: "Java Script",
    subjectName: "javaScript",
    finishDate: "August 4, 2022",
    updateTimming: "5.00 pm - 7.00 pm",
    subjectFenishLength: "5 months",
    subjectImg: javaScript,
  },
  {
    slcCorse: "CSE",
    checkboxValueSubject: "PHP",
    subjectName: "php",
    finishDate: "August 4, 2022",
    updateTimming: "5.00 pm - 7.00 pm",
    subjectFenishLength: "5 months",
    subjectImg: php,
  },
];
console.log(courseSubject);
///
const CategoryWiseCourseSubject = ({ subject, selactedDepartment }) => {
  console.log("selactedDepartment", selactedDepartment);
  const [courseSubjectFilter, setCourseSubjectFilter] = useState([]);

  const history = useHistory();
  const [studentSelactedCourse, setStudentSelactedCourse] =
    useContext(UseSelcCourseContext);
  console.log("studentSelactedCourse", studentSelactedCourse);
  console.log(selactedDepartment);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setStudentSelactedCourse({
      selactedDepartment,
      ...data,
    });
    history.push("/student-register");
  };
  ////get////
  const [departmentSubjectData, setDepartmentSubjectData] = useState([]);
  useEffect(() => {
    fetch("https://education-portal-1.herokuapp.com/course")
      .then((res) => res.json())
      .then((data) => {
        console.log("2", data);
        // setDepartmentSubjectData(data.rasult);
        const filterAllNews = data.result.filter(
          (subject) => subject.departmentName === selactedDepartment.course
        );
        console.log("f", filterAllNews);
        setCourseSubjectFilter(filterAllNews);
      });
  }, []);
  console.log("niha", departmentSubjectData);
  /////////////

  ///////////////////////
  // useEffect(() => {
  //   const filterAllNews = courseSubject.filter(
  //     (pro) => pro.slcCorse === selactedDepartment.course
  //   );
  //   setCourseSubjectFilter(filterAllNews);
  // }, []);
  //////
  useEffect(() => {}, []);

  //////////
  console.log("courseSubjectFilter", courseSubjectFilter);
  ///////
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
  });
  //////
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {courseSubjectFilter.length === 0 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "8%",
            }}
          >
            <animated.div
              style={{
                width: 50,
                height: 50,
                backgroundColor: "#1eaace",
                borderRadius: 10,
                ...styles,
              }}
            >
              Loading...
            </animated.div>
          </div>
        ) : (
          <>
            {" "}
            {courseSubjectFilter.map((sub, i) => (
              <Bounce up>
                <div
                  key={i}
                  style={{
                    paddingTop: "8%",
                    paddingBottom: "3%",
                    borderBottom: "1px solid #e4e7e8",
                  }}
                >
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
                          Finished on{" "}
                          <span>
                            {" "}
                            {new Date().toDateString(
                              sub.courseFinishedDate
                            )}{" "}
                          </span>
                        </h4>
                      </div>
                      <div className="col-sm-4">
                        {" "}
                        {/* <h4>{sub.updateTimming}</h4> */}
                        <h4>5.00 pm - 7.00 pm</h4>
                      </div>
                      <div className="col-sm-4">
                        <h4>Length {sub.courseFinishedLength} months</h4>
                      </div>
                    </div>
                  </div>
                  {/* {sub.timming} */}
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
                      <div className="course_subject_detls">
                        <div className="row">
                          <div className="col-sm-9">
                            {" "}
                            <small>
                              <big
                                style={{ fontStyle: "italic", color: "#222" }}
                              >
                                Subject :
                              </big>{" "}
                              {sub.courseName}
                            </small>
                            <span>About the Subject</span>{" "}
                          </div>
                          <div className="col-sm-3">
                            {" "}
                            <img
                              // src={sub.subjectImg}
                              src={sub.image}
                              alt=""
                              style={{ width: "100px", height: "100px" }}
                            />
                          </div>
                        </div>
                        <p>
                          This course is a demonstration of how customers can
                          receive an access to the classes. If you try to open
                          any of the lessons (check below, in the “Learning
                          Plan” section), access will be denied.
                          <br /> <br />
                          However, if you authorize using the following data:
                          Login: <br />
                          test_customer Password: test <br /> <br />
                          you will be able to open the first and the second
                          classes; as for the third class, it will become
                          available from the date specified.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-5">
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
                                data-aos="fade-right"
                                className="course_subject_student_retings"
                                style={{
                                  backgroundColor: "#86bc42",
                                  width: "57%",
                                }}
                              >
                                <p> Tutorials</p>
                              </div>
                            </div>
                            <p
                              style={{
                                paddingTop: "3%",
                                paddingLeft: "1%",
                                color: "#222",
                              }}
                            >
                              <CountUp
                                start={0}
                                end="57"
                                duration={3.5}
                                separator=","
                              />
                              %
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
                                data-aos="fade-right"
                                className="course_subject_student_retings"
                                style={{
                                  backgroundColor: "#1eaace",
                                  width: "65%",
                                }}
                              >
                                <p>Training programm</p>
                              </div>
                            </div>
                            <p
                              style={{
                                paddingTop: "3%",
                                paddingLeft: "1%",
                                color: "#222",
                              }}
                            >
                              <CountUp
                                start={0}
                                end="65"
                                duration={3.5}
                                separator=","
                              />
                              %
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
                                data-aos="fade-right"
                                className="course_subject_student_retings"
                                style={{
                                  backgroundColor: "#ffb20e",
                                  width: "47%",
                                }}
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
                              <CountUp
                                start={0}
                                end="47"
                                duration={3.5}
                                separator=","
                              />
                              %
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
                              Summary rating from 8 user's marks. You can set
                              own marks for this article - just click on stars
                              above and press "Accept".
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
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="vehicle3"
                      value={sub.courseName}
                      {...register(`${sub.checkboxValueSubject}`)}
                    />
                    <label
                      for="vehicle3"
                      style={{
                        fontStyle: "italic",
                        fontSize: "18px",
                        color: "#1eaace",
                        padding: "0 10px",
                        paddingTop: "2%",
                      }}
                    >
                      {" "}
                      Choose this Course
                    </label>{" "}
                    <br />
                    {/* {errors.subb && <span>This field is required</span>} */}
                    <br />
                  </div>
                </div>
              </Bounce>
            ))}
          </>
        )}
        {/*  */}
        {courseSubjectFilter.length !== 0 && (
          <div style={{ textAlign: "end", margin: "3%" }}>
            {" "}
            <input
              type="submit"
              value="Register Now !!"
              className="resister_btn"
              // onClick={() => history.push("/student-register")}
            />
          </div>
        )}
      </form>
    </div>
  );
};
export default CategoryWiseCourseSubject;
