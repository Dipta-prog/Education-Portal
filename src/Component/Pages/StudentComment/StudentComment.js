import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import myImg from "../../../Media/img/student-img/arifull.jpg";
import "./StudentComment.scss";
import StudentCommentUnderReplyComment from "./StudentCommentUnderReplyComment/StudentCommentUnderReplyComment";
const StudentComment = () => {
  const [clicked, setClicked] = useState("web");
  const [studentComment, setStudentComment] = useState({});
  console.log(studentComment);
  const [studentsCommentsdata, setStudentsCommentsdata] = useState([]);
  console.log(studentsCommentsdata);
  // const [repeat, setrepeat] = useState("");
  // useEffect(() => {
  //   setrepeat(studentsCommentsdata);
  // }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    const datas = { ...data, commentss: [] };
    console.log("data", datas);
    setStudentComment(datas);
    axios
      .post("https://education-portal-1.herokuapp.com/studentComment", datas)

      .then((data) => {
        console.log("1", data);
      })
      .catch((error) => {
        console.error(error);
      });
    // e.target.reset();
  };
  ////get////

  useEffect(() => {
    fetch("https://education-portal-1.herokuapp.com/studentComment")
      .then((res) => res.json())
      .then((data) => {
        console.log("2", data.rasult);
        setStudentsCommentsdata(data.rasult);
      });
  }, []);

  // ///java script code read more//////

  // ///////////
  return (
    <div>
      <div className="container">
        <br />
        <h3>Shere, Your Problem</h3>
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
                    id="student_problem_container"
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
                    <>
                      {" "}
                      {clicked === "readMore" ? (
                        <StudentCommentUnderReplyComment
                          comment={comment}
                        ></StudentCommentUnderReplyComment>
                      ) : (
                        <div style={{ display: "none" }}>
                          <StudentCommentUnderReplyComment
                            comment={comment}
                          ></StudentCommentUnderReplyComment>
                        </div>
                      )}
                      {clicked !== "readMore" ? (
                        <big
                          onClick={() => setClicked("readMore")}
                          id="read-moree-btn"
                        >
                          See More...
                        </big>
                      ) : (
                        <big
                          id="read-moree-btn"
                          onClick={() => setClicked("readLess")}
                        >
                          See Less...
                        </big>
                      )}
                    </>
                  </div>
                )}{" "}
              </>
            ))}
            <></>
          </div>
        </div>
      </div>
      {/* {studentsCommentsdata.map((replyComments) => (
        <>
          {replyComments.commentss.map((c) => (
            <>
              <p>{c.replyComment}</p>
            </>
          ))}
        </>
      ))} */}
    </div>
  );
};

export default StudentComment;
