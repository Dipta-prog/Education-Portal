import React from "react";
import loginImg from "../../../Media/img/login-img/bg.svg";

const Login = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="col-sm-5">
            <img src={loginImg} alt="" style={{ width: "100%" }} />
          </div>
          <div className="col-sm-7">
            <h3>Log in</h3> <br />
            <input
              type="name"
              className="form-control w-50"
              placeholder="Your Name"
            />{" "}
            <br />
            <input
              type="email"
              className="form-control w-50"
              placeholder="Enter Your Email address"
            />
            <br />
            <input
              type="password"
              className="form-control w-50"
              placeholder="Password"
            />{" "}
            <br />
            <button className="btn btn-success">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
