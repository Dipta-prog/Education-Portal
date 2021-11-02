import React from "react";
import "./DepartmentOverview.css";
import { FaCheck } from "react-icons/fa";
import courseDetlsOverAllImg from "../../../../../../Media/img/Department/course-details-1.jpg";
import { FaUser, FaRegClock, FaDiceD20 } from "react-icons/fa";
import { IoDiamond } from "react-icons/io";
import { GiWhiteBook } from "react-icons/gi";
import { useHistory } from "react-router";
const listt = [
  {
    list: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,",
    total: "Total Student",
    icons: (
      <div className="depOverview_icon">
        <FaUser /> 50
      </div>
    ),
  },
  {
    list: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,",
    total: "COURSE DURATION",
    icons: (
      <div className="depOverview_icon">
        <FaDiceD20 /> 4yrs
      </div>
    ),
  },
  {
    list: "Es eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,",
    total: "COURSE CREDITS",
    icons: (
      <div className="depOverview_icon">
        <FaRegClock /> 125
      </div>
    ),
  },
  {
    total: "TOTAL SEMESTER",
    icons: (
      <div className="depOverview_icon">
        <GiWhiteBook /> 12
      </div>
    ),
  },
];
const DepartmentOverview = ({ findCourses, selctedDepartment }) => {
  const history = useHistory();
  return (
    <div className="courseOverView_container">
      <div className="courseOverView_header">
        <h5>DEPARTMENT DETAILS</h5>
        <h6> Department base courses overview & details</h6>
      </div>
      <br />

      <p>
        magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor incid.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi m aperiam, eaque
        ipsa quae abaspernatur aut odit aut fugit, sed quia consequuntur magni
        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
      <br />
      {findCourses.map((find) => (
        <li
          onClick={() =>
            history.push("/subject/" + selctedDepartment.departmentName)
          }
        >
          <FaCheck style={{ color: "#86bc42", marginRight: "10px" }} />
          {find.courseName}
        </li>
      ))}
      <br />
      <img src={courseDetlsOverAllImg} alt="" style={{ width: "100%" }} />
      <div className="course_overview_data">
        {listt.map((list) => (
          <div className="course_overview_data_list">
            <h4>{list.total}</h4>
            {list.icons}
          </div>
        ))}
      </div>
      <br />
      <br />
      <p>
        magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor incid.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi m aperiam, eaque
        ipsa quae abaspernatur aut odit aut fugit, sed quia consequuntur magni
        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
  );
};

export default DepartmentOverview;
