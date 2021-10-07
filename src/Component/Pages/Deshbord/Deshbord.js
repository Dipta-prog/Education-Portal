import React, { useEffect, useState } from "react";
import eeeImg from "../../../Media/img/pages/Deshbord-img/eee.jpg";
import cseImg from "../../../Media/img/pages/Deshbord-img/subject/cse.jpg";
import cevilImg from "../../../Media/img/pages/Deshbord-img/subject/cevil-1.jpeg";
import CategoryWiseCourseSubject from "./CategoryWiseCourseSubject/CategoryWiseCourseSubject";

import "./Deshbord.css";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
const courses = [
  {
    img: eeeImg,
    course: "EEE",
  },
  {
    img: cseImg,
    course: "CSE",
  },
  {
    img: cevilImg,
    course: "CVE",
  },
];

// ////////////////////////
const Deshbord = () => {
  const [selactedCourse, setSelactedCourse] = useState({});

  console.log(selactedCourse);

  return (
    <div className="deshbord_container">
      <Navbar></Navbar>
      <div className="container">
        <div className="row" style={{ marginTop: "3%" }}>
          {courses.map((course, i) => (
            <div key={i} className="col-sm-4">
              <div
                style={{ border: "1px solid gray" }}
                // onClick={() => setSelactedCourse({ ...selactedCourse, course })}
              >
                <div>
                  <img
                    src={course.img}
                    alt=""
                    style={{ width: "100%", height: "150px" }}
                  />
                  <div className="deshbord_description">
                    <h4>{course.course}</h4>
                    {selactedCourse.course ? (
                      <button
                        className="resister_btn nav-link disabled"
                        onClick={() =>
                          setSelactedCourse({
                            ...selactedCourse,
                            course: course.course,
                          })
                        }
                      >
                        SEE
                      </button>
                    ) : (
                      <button
                        className="resister_btn  "
                        onClick={() =>
                          setSelactedCourse({
                            ...selactedCourse,
                            course: course.course,
                          })
                        }
                      >
                        select
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*  */}
        {selactedCourse.course === "EEE" || selactedCourse.course === "CSE" ? (
          <>
            <CategoryWiseCourseSubject
              selactedCourse={selactedCourse}
            ></CategoryWiseCourseSubject>
          </>
        ) : (
          <p style={{ color: "#86bc42" }}>Please Chose the course </p>
        )}
      </div>
      <div style={{ paddingTop: "10%" }}>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Deshbord;

// {/* <form onSubmit={handleSubmit(onSubmit)}>
//               {selactedCourse.course === "EEE" && (
//                 <>
//                   {eeeSubject.map((sub, i) => (
//                     <div key={i}>{sub.subject}</div>
//                   ))}

//                   <br />
//                   {/* <input type="submit" value="Submit" /> */}
//                 </>
//               )}
//               {/* cse */}
//   {selactedCourse.course === "CSE" && (
//     <>
//       {cseSubject.map((sub, i) => (
//         <div key={i}>{sub.subject}</div>
//       ))}

//       <br />
//     </>
//   )}
//   <Link to="/student-register">
//     {" "}
//     <input type="submit" value="Get Register" />
//   </Link>
// </form> */}
