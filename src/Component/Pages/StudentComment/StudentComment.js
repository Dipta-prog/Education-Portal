import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import myImg from "../../../Media/img/student-img/arifull.jpg";
const StudentComment = () => {
  const [studentComment, setStudentComment] = useState({});
  console.log(studentComment);
  const [studentsCommentsdata, setStudentsCommentsdata] = useState([]);
  console.log(studentsCommentsdata);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setStudentComment(data);
    axios
      .post("http://localhost:1000/studentComment", studentComment)

      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  ////get////

  useEffect(() => {
    fetch("http://localhost:1000/studentComment")
      .then((res) => res.json())
      .then((data) => setStudentsCommentsdata(data.rasult));
  }, [studentsCommentsdata]);

  // /////
  return (
    <div>
      <div className="container">
        <div
          className="row"
          style={
            {
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
            }
          }
        >
          <div className="col-sm-5">
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("subject", { required: true })}
                className="form-control w-100"
                placeholder="Subject"
              />

              {errors.subject && <span>This field is required</span>}
              <br />
              <textarea
                {...register("title", { required: true })}
                className="form-control w-100"
                placeholder="Title"
              />

              {errors.title && <span>This field is required</span>}
              <br />

              <input type="submit" className="resister_btn" />
            </form>
          </div>
          <div className="col-sm-7">
            {studentsCommentsdata.map((comment, i) => (
              <>
                {" "}
                {comment.subject && (
                  <div
                    key={i}
                    style={{
                      // display: "flex",
                      // justifyContent: "center",
                      // alignItems: "center",
                      padding: "2% 0",
                      borderBottom: "1px solid #dddd",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        // justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ marginRight: "2%" }}>
                        <img
                          src={myImg}
                          alt=""
                          style={{ width: "80px", borderRadius: "100%" }}
                        />
                      </div>
                      <div style={{ height: "80px", overflowY: "auto" }}>
                        <h6>{comment.subject}</h6>
                        <p>{comment.title}</p>
                      </div>
                    </div>
                  </div>
                )}{" "}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentComment;
