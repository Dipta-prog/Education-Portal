import React from "react";
import facebook from "../../../../Media/img/Department/social_img/facebook.png";
import insta from "../../../../Media/img/Department/social_img/insta.png";
import twitter from "../../../../Media/img/Department/social_img/twitter.png";
import youtube from "../../../../Media/img/Department/social_img/youtube.png";
const FindTeacher = ({ findTeacher }) => {
  console.log("find", findTeacher);
  return (
    <div>
      {findTeacher.map((fTeacher) => (
        <div className=" all_teacher_list">
          {" "}
          <div className="">
            <img
              src={fTeacher.image}
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div className=" all_teacher_list_basicInfo">
            {" "}
            <span>{fTeacher.name}</span>
            <small>{fTeacher.department}</small>
            <li className="teacher_social">
              <img
                src={facebook}
                alt=""
                style={{ width: "20px", paddingRight: "4px" }}
              />
              <img
                src={insta}
                alt=""
                style={{ width: "20px", paddingRight: "4px" }}
              />
              <img
                src={twitter}
                alt=""
                style={{ width: "20px", paddingRight: "4px" }}
              />
              <img
                src={youtube}
                alt=""
                style={{ width: "20px", paddingRight: "4px" }}
              />
            </li>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FindTeacher;
