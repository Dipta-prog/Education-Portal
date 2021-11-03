import React from "react";
import FindTeacher from "../../../../AllTeacher/FindTeacher/FindTeacher";

const DepartmentInstructor = ({ findTeacher }) => {
  return (
    <div>
      <div className="courseOverView_header">
        <br />
        <h5>INSTRUCTOR</h5>
        <h6>Head Of The Department</h6>
      </div>
      <FindTeacher findTeacher={findTeacher}></FindTeacher>
    </div>
  );
};

export default DepartmentInstructor;
