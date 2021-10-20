// import React from "react";
// import { useForm } from "react-hook-form";
// import studentBgImg from "../../../Media/img/login-img/student-img/st-bg.jpg";
// import teacherBgImg from "../../../Media/img/login-img/teacher-img/T-bg.jpg";
// import admainBgImg from "../../../Media/img/login-img/admain-img/a-bg.jpg";
// const LoginFrom = ({ chosesOption }) => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => console.log(data);
//   return (
//     <div>
//       <div
//         className="row"
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <div className="col-sm-5">
//           {chosesOption.role === "Student" && (
//             <img
//               src={studentBgImg}
//               alt=""
//               style={{ width: "100%", height: "340px" }}
//             />
//           )}
//           {chosesOption.role === "Teacher" && (
//             <img
//               src={teacherBgImg}
//               alt=""
//               style={{ width: "100%", height: "340px" }}
//             />
//           )}
//           {chosesOption.role === "Admain" && (
//             <img
//               src={admainBgImg}
//               alt=""
//               style={{ width: "100%", height: "340px" }}
//             />
//           )}
//         </div>
//         <div className="col-sm-7" style={{ paddingLeft: "3%" }}>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <input
//               type="name"
//               {...register("role", { required: true })}
//               className="form-control w-100"
//               style={{ fontWeight: "bold" }}
//               defaultValue={chosesOption.role}
//             />
//             {errors.role && <span>This field is required</span>}
//             <br />
//             <input
//               type="email"
//               {...register("email", { required: true })}
//               className="form-control w-100"
//               placeholder="Email"
//             />
//             {errors.email && <span>This field is required</span>}
//             <br />
//             <input
//               type="password"
//               {...register("password", { required: true })}
//               className="form-control w-100"
//               placeholder="Password"
//             />
//             {errors.password && <span>This field is required</span>} <br />
//             <input type="submit" className="resister_btn" />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginFrom;

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { UserLoggedinContext } from "../../../App";
import admainBgImg from "../../../Media/img/login-img/admain-img/a-bg.jpg";
import studentBgImg from "../../../Media/img/login-img/student-img/st-bg.jpg";
import teacherBgImg from "../../../Media/img/login-img/teacher-img/T-bg.jpg";
import firebaseConfig from "../../firebase.config";
const LoginFrom = ({ chosesOption, role }) => {
  const [loggedinUser, setLoggedinUser] = useContext(UserLoggedinContext);
  console.log(role);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  initializeApp(firebaseConfig);
  const [user, setUser] = useState({
    email: "",
    password: "",
    error: "",
    success: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    reset("", {
      keepValues: false,
    });
    console.log(data);
    const auth = getAuth();
    console.log("yooo", auth);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const loginUser = userCredential.user;
        console.log(userCredential);
        const newUserInfo = { ...user };
        newUserInfo.email = loginUser.email;
        newUserInfo.password = data.password;
        newUserInfo.error = "";
        newUserInfo.success = true;
        newUserInfo.role = data.role;
        setUser(newUserInfo);
        setLoggedinUser(newUserInfo);
        // history.replace(from);
        history.push(role)
      })
      .catch((error) => {
        console.log(
          "code",
          error.code,
          "firebase error message",
          error.message
        );
        const newUserInfo = { ...user };
        // console.log(newUserInfo)
        newUserInfo.success = false;
        newUserInfo.error = error.message;

        setUser(newUserInfo);
      });
  };
  console.log("loggedinUser", loggedinUser);
  // hendel log out part//

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then((data) => {
        setUser({});
        // Sign-out successful.
        console.log("Log out successful");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  // ///
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
          {user.success && user.error === "" ? (
            <p className="text-success">
              Welcome <strong>{user.email}</strong>{" "}
            </p>
          ) : (
            <h6 className="text-danger">{user.error}</h6>
          )}

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
              name="email"
              placeholder="Email address"
              className="form-control w-100"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-danger">Email is required</span>
            )}

            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control w-100"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-danger">Password is required</span>
            )}

            <br />
            {/* <input className="btn btn-success" type="submit" /> */}

            {user.success && user.error === "" ? (
              <button onClick={handleLogOut} className="btn btn-danger">
                Log out
              </button>
            ) : (
              <input className="btn btn-success" type="submit" value="Login" />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginFrom;

// {
//   user.success && user.error === '' ? <p className="text-success">Welcome <strong>{user.email}</strong> </p> : <h6 className="text-danger">{user.error}</h6>
// }

// <form onSubmit={handleSubmit(onSubmit)}>
//   <input type="text" name="email" placeholder="Email address" className="form-control w-50" {...register("email", { required: true })} />
//   {errors.email && <span className="text-danger">Email is required</span>}

//   <br />
//   <input type="password" name="password" placeholder="Password" className="form-control w-50" {...register("password", { required: true })} />
//   {errors.password && <span className="text-danger">Password is required</span>}

//   <br />
//   {/* <input className="btn btn-success" type="submit" /> */}

//   {
//     user.success && user.error === '' ? <button onClick={handleLogOut} className="btn btn-danger">Log out</button> : <input className="btn btn-success" type="submit" />
//   }
// </form>
