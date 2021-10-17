import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import ReplyCommentList from "./ReplyCommentList/ReplyCommentList";
const StudentCommentUnderReplyComment = ({ comment }, props) => {
  console.log(props.comment);

  //////
  const [updates, setUpdates] = useState({});
  console.log("updates", updates);

  const loadPost = (id) => {
    // console.log(id);
    // let url = `http://localhost:1000/studentComment/postes/${id}`;
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("updated successfully", data);

    //     setUpdates(data);
    //   });
    setUpdates(id);
  };
  //////
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // const id = updates._id;
    const datas = {
      comments: { updates, replyComment: data.studentProblemReply },
      // id: id,
    };
    console.log(datas);
    //${id}

    fetch(`http://localhost:1000/studentComment/postes/${updates}`, {
      method: "PUT",
      body: JSON.stringify(datas),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("ras", data);
      });

    // axios
    //   .put(`http://localhost:1000/studentComment/postes/${updates}`, datas)

    //   .then((data) => {
    //     console.log("new", data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "0px 7px" }}>
        {/* <input defaultValue="test" {...register("example")} /> */}

        <div style={{ display: "flex" }}>
          <input
            onClick={() => loadPost(comment._id)}
            {...register("studentProblemReply", { required: true })}
            placeholder="Add on Your Comments"
            className="form-control"
          />

          <input type="submit" value="Send" className="resister_btn" />
        </div>
        {errors.studentProblemReply && (
          <span style={{ color: "red", fontSize: "12px" }}>
            This field is required
          </span>
        )}
      </form>
      <div>
        <>
          {comment?.commentss?.map((c) => (
            <>
              <p>{c.replyComment}</p>
            </>
          ))}
        </>
      </div>
    </div>
  );
};

export default StudentCommentUnderReplyComment;
