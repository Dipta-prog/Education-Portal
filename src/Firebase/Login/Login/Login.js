// import { initializeApp } from 'firebase/app';
// import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useHistory, useLocation } from 'react-router';
// import loginImg from "../../../Media/img/login-img/bg.svg";
// import firebaseConfig from "../../firebase.config";

// const Login = () => {

//   const [user, setUser] = useState({
//     email: '',
//     password: '',
//     error: '',
//     success: false,
//   })

//   const history = useHistory();
//   const location = useLocation();

//   let { from } = location.state || { from: { pathname: "/" } };

//   initializeApp(firebaseConfig);

//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div className="container">
//         <div
//           className="row"
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <div className="col-sm-5">
//             <img src={loginImg} alt="" style={{ width: "100%" }} />
//           </div>
//           <div className="col-sm-7">

//             {
//               user.success && user.error === '' ? <p className="text-success">Welcome <strong>{user.email}</strong> </p> : <h6 className="text-danger">{user.error}</h6>
//             }

//             <form onSubmit={handleSubmit(onSubmit)}>
//               <input type="text" name="email" placeholder="Email address" className="form-control w-50" {...register("email", { required: true })} />
//               {errors.email && <span className="text-danger">Email is required</span>}

//               <br />
//               <input type="password" name="password" placeholder="Password" className="form-control w-50" {...register("password", { required: true })} />
//               {errors.password && <span className="text-danger">Password is required</span>}

//               <br />
//               {/* <input className="btn btn-success" type="submit" /> */}

//               {
//                 user.success && user.error === '' ? <button onClick={handleLogOut} className="btn btn-danger">Log out</button> : <input className="btn btn-success" type="submit" />
//               }
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import admainImg from "../../../Media/img/login-img/admain-img/a-3.png";
import studentImg from "../../../Media/img/login-img/student-img/st-1.png";
import teacherImg from "../../../Media/img/login-img/teacher-img/t-2.png";
import firebaseConfig from "../../firebase.config";
import LoginFrom from "../../NewLogin/LoginFrom/LoginFrom";

const chosesLoginOption = [
  {
    img: studentImg,
    role: "Student",
  },
  {
    img: teacherImg,
    role: "Teacher",
  },
  {
    img: admainImg,
    role: "Admin",
  },
];
const Login = () => {
  //
  const [chosesOption, setChosesOption] = useState(true);
  console.log(chosesOption);

  //
  const [user, setUser] = useState({
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  initializeApp(firebaseConfig);

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
    console.log(auth);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const loginUser = userCredential.user;
        console.log(userCredential);
        const newUserInfo = { ...user };
        newUserInfo.email = loginUser.email;
        newUserInfo.password = data.password;
        newUserInfo.error = "";
        newUserInfo.success = true;
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo)
        history.replace(from);
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

  return (
    <div>
      <div className="container">
        <h3 style={{ textAlign: "center", padding: "3%", fontSize: "40px" }}>
          Login - Choose Option
        </h3>
        <div className="row">
          {chosesLoginOption.map((option) => (
            <div className="col-sm-4">
              <div
                style={{
                  textAlign: "center",
                  border: "1px solid #dddd",
                  padding: "2%",
                  paddingTop: "4%",
                  cursor: "pointer",
                }}
                onClick={() =>
                  setChosesOption({
                    ...option,
                  })
                }
              >
                <img src={option.img} alt="" style={{ width: "100px" }} />
                <h5
                  style={{
                    paddingTop: "7%",
                    color: "#161616cf",
                  }}
                >
                  {option.role}
                </h5>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />
        {chosesOption.role === "Student" && (
          <LoginFrom chosesOption={chosesOption}></LoginFrom>
        )}
        {chosesOption.role === "Teacher" && (
          <LoginFrom chosesOption={chosesOption}></LoginFrom>
        )}
        {chosesOption.role === "Admin" && (
          <LoginFrom chosesOption={chosesOption}></LoginFrom>
        )}
      </div>
    </div>
  );
};

export default Login;

{
  /* <div className="col-sm-7">

{
  user.success && user.error === '' ? <p className="text-success">Welcome <strong>{user.email}</strong> </p> : <h6 className="text-danger">{user.error}</h6>
}

<form onSubmit={handleSubmit(onSubmit)}>
  <input type="text" name="email" placeholder="Email address" className="form-control w-50" {...register("email", { required: true })} />
  {errors.email && <span className="text-danger">Email is required</span>}

  <br />
  <input type="password" name="password" placeholder="Password" className="form-control w-50" {...register("password", { required: true })} />
  {errors.password && <span className="text-danger">Password is required</span>}

  <br />
  {/* <input className="btn btn-success" type="submit" /> */
}

//   {
//     user.success && user.error === '' ? <button onClick={handleLogOut} className="btn btn-danger">Log out</button> : <input className="btn btn-success" type="submit" />
//   }
// </form>
// </div> */}
