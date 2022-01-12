import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserLoggedinContext } from "../../../App";
import TeacherSidebar from "../../Shared/TeacherSidebar/TeacherSidebar";
import WeekInputByTeacher from "./WeekInputByTeacher/WeekInputByTeacher";

const TeacherForm = () => {
  const [loggedinUser, setLoggedinUser] = useContext(UserLoggedinContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
    reset("", {
      keepValues: false,
    });

    const eventData = {
      courseCode: data.courseCode,
      program: data.program,
      faculty: data.faculty,
      courseCategory: data.courseCategory,
      courseOutline: data.courseOutline,
      // textBook: data.textBook,
      teacherName: data.teacherName,
      officeRoom: data.officeRoom,
      cellNumber: data.cellNumber,
      email: data.email,
      guideline: data.guideline,
      announcement: data.announcement,
      discussionTopics: data.discussionTopics,
      learningOutcomes: data.learningOutcomes,
    };
    console.log("eventData", eventData);
    fetch(
      "https://education-portal-1.herokuapp.com/courseInformation/addCourseDataByTeacher",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log("data", data));
  };

  // ariful coding

  const [allCourses, setAllCourses] = useState([]);
  useEffect(() => {
    fetch("https://education-portal-1.herokuapp.com/course")
      .then((res) => res.json())
      .then((data) => {
        // console.log("2", data.result);
        const findCourse = data.result.map((course) => course.courseName);
        console.log("f", findCourse);
        setAllCourses(data.result);
      });
  }, []);
  return (
    <div className="teacherForm">
      <div className="row">
        <div className="col-md-3">
          <TeacherSidebar />
        </div>
        <div className="col-md-7 mt-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6">
                <h3>Basic Information</h3>
                <label>Course Code</label>
                <input
                  className="form-control"
                  {...register("courseCode")}
                  required
                />

                <label>Program</label>
                <input
                  className="form-control"
                  {...register("program")}
                  required
                />

                <label>Faculty</label>
                <input
                  className="form-control"
                  {...register("faculty")}
                  required
                />

                <label>Course Category</label>
                <input
                  className="form-control"
                  {...register("courseCategory")}
                  required
                />

                <label>Course Outline</label>
                <textarea
                  className="form-control"
                  {...register("courseOutline")}
                  required
                ></textarea>

                {/* <h3>Text Book</h3>
                                <input className="form-control" type="file" rows="8" cols="10" /> */}
              </div>

              <div className="col-md-6">
                <h3>Course Information</h3>
                {/* arifull */}
                <label className="form-label">Course</label>
                <select
                  className="form-control "
                  {...register("coursesName", { required: true })}
                >
                  <option value="">Select Course</option>
                  {allCourses.map((all) => (
                    <option value={all.courseName}>{all.courseName}</option>
                  ))}

                  {/* <option value="department">Asia</option> */}
                  {/* <option value="world">World</option> */}
                </select>
                {/* arifull */}
                <label>Teacher Name</label>
                <input
                  className="form-control "
                  {...register("teacherName")}
                  required
                />
                <label>Teacher Email</label>
                <input
                  className="form-control"
                  defaultValue={loggedinUser.email}
                  {...register("teacherEmail")}
                  required
                />
                <label>Office Room</label>
                <input
                  className="form-control"
                  {...register("officeRoom")}
                  required
                />

                <label>Cell Number</label>
                <input
                  className="form-control"
                  {...register("cellNumber")}
                  required
                />

                <label>Email</label>
                <input
                  className="form-control"
                  {...register("email")}
                  required
                />

                <label htmlFor="cellNumber">Cell Number</label>
                <input
                  className="form-control"
                  type="number"
                  {...register("cellNumber")}
                  required
                />

                <label>Guideline</label>
                <textarea
                  className="form-control"
                  {...register("guideline")}
                  required
                ></textarea>
                {/* 
                <label htmlFor="guideline">Guideline</label>
                <input
                  className="form-control"
                  name="guideline"
                  {...register("guideline")}
                  required
                /> */}

                <label>Announcement</label>
                <textarea
                  className="form-control"
                  {...register("announcement")}
                  required
                ></textarea>
              </div>
            </div>
            <br />
            <br />
            <div>
              <h3>Weekly Topics</h3>
              <label htmlFor="discussionTopics">Discussion Topics</label>
              <textarea
                className="form-control"
                {...register("discussionTopics")}
                required
              ></textarea>

              <label htmlFor="learningOutcomes">Learning Outcomes</label>
              <textarea
                className="form-control"
                {...register("learningOutcomes")}
                required
              ></textarea>

              <label htmlFor="lectureSlide">Weekly Outcome</label>
              <input
                className="form-control"
                type="file"
                {...register("weeklyOutcome")}
              />
            </div>
            <br />{" "}
            <div className="text-center mt-5">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>

          {/* <div>
            <WeekInputByTeacher />
          </div> */}

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default TeacherForm;
