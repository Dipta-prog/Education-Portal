import React, { useEffect, useState } from "react";
import t1 from "../../../Media/img/Department/teacher/t-1.jpg";
import t2 from "../../../Media/img/Department/teacher/t-2.jpg";
import t3 from "../../../Media/img/Department/teacher/t-3.jpg";
import facebook from "../../../Media/img/Department/social_img/facebook.png";
import insta from "../../../Media/img/Department/social_img/insta.png";
import twitter from "../../../Media/img/Department/social_img/twitter.png";
import youtube from "../../../Media/img/Department/social_img/youtube.png";
import Bounce from "react-reveal/Bounce";
import "./AllTeacher.css";
const allteacherdetls = [
  {
    teacherImg: t1,
    teachername: "Charlie Brown",
    teacherSelcDepartment: "EEE",
  },
  {
    teacherImg: t2,
    teachername: " Emily Foster",
    teacherSelcDepartment: "EEE",
  },
  {
    teacherImg: t3,
    teachername: " Emily Foster",
    teacherSelcDepartment: "EEE",
  },
];

const AllTeacher = () => {
  const [allTeacher, setAllTeacher] = useState([]);
  useEffect(() => {
    const url = "https://education-portal-1.herokuapp.com/admin/allTeacher";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllTeacher(data.result));
  }, []);
  console.log(allTeacher);
  return (
    <div>
      <h5 className="department_sources">BROWSE BY TEACHER</h5>
      <div className="n_line"></div>
      <p className="department_text">
        Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="row">
        {allTeacher.map((teacher) => (
          <div className="all_teacher_list">
            {" "}
            <Bounce up>
              <div className="col-sm-3">
                <img
                  src={teacher.image}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <div className="col-sm-8 all_teacher_list_basicInfo">
                {" "}
                <span>{teacher.name}</span>
                <small>{teacher.department}</small>
                <li className="teacher_social">
                  <img src={facebook} alt="" style={{ width: "6%" }} />
                  <img src={insta} alt="" style={{ width: "6%" }} />
                  <img src={twitter} alt="" style={{ width: "6%" }} />
                  <img src={youtube} alt="" style={{ width: "6%" }} />
                </li>
              </div>
            </Bounce>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTeacher;
