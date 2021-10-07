import React from "react";
import { useForm } from "react-hook-form";
import studentBgImg from "../../../Media/img/login-img/student-img/st-bg.jpg";
import teacherBgImg from "../../../Media/img/login-img/teacher-img/T-bg.jpg";
import admainBgImg from "../../../Media/img/login-img/admain-img/a-bg.jpg";
const LoginFrom = ({ chosesOption }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="col-sm-5">
          {chosesOption.role === "Student" && (
            <img
              src={studentBgImg}
              alt=""
              style={{ width: "100%", height: "340px" }}
            />
          )}
          {chosesOption.role === "Teacher" && (
            <img
              src={teacherBgImg}
              alt=""
              style={{ width: "100%", height: "340px" }}
            />
          )}
          {chosesOption.role === "Admain" && (
            <img
              src={admainBgImg}
              alt=""
              style={{ width: "100%", height: "340px" }}
            />
          )}
        </div>
        <div className="col-sm-7" style={{ paddingLeft: "3%" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="name"
              {...register("role", { required: true })}
              className="form-control w-100"
              style={{ fontWeight: "bold" }}
              defaultValue={chosesOption.role}
            />
            {errors.role && <span>This field is required</span>}
            <br />
            <input
              type="email"
              {...register("email", { required: true })}
              className="form-control w-100"
              placeholder="Email"
            />
            {errors.email && <span>This field is required</span>}
            <br />
            <input
              type="password"
              {...register("password", { required: true })}
              className="form-control w-100"
              placeholder="Password"
            />
            {errors.password && <span>This field is required</span>} <br />
            <input type="submit" className="resister_btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginFrom;
