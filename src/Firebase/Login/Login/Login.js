import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';
import loginImg from "../../../Media/img/login-img/bg.svg";
import firebaseConfig from "../../firebase.config";


const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  

  const [user, setUser] = useState({
    email: '',
    password: '',
    error: '',
    success: false,
  })

  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  initializeApp(firebaseConfig);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = data => {
    reset('', {
      keepValues: false,
    })
    console.log(data)
    const auth = getAuth();
    console.log(auth)
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const loginUser = userCredential.user
        console.log(userCredential)
        const newUserInfo = { ...user };
        newUserInfo.email = loginUser.email;
        newUserInfo.password = data.password;
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo)
        history.replace(from);
      })
      .catch((error) => {
        console.log("code",error.code, "firebase error message", error.message)
        const newUserInfo = { ...user }
        // console.log(newUserInfo)
        newUserInfo.success = false;
        newUserInfo.error = error.message;
        
        setUser(newUserInfo);
      });
  }

  const handleLogOut = () => {

    const auth = getAuth();
    signOut(auth).then((data) => {
      setUser({});
      // Sign-out successful.
      console.log("Log out successful")
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }

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
              {/* <input className="btn btn-success" type="submit" /> */}

              {
                user.success && user.error === '' ? <button onClick={handleLogOut} className="btn btn-danger">Log out</button> : <input className="btn btn-success" type="submit" />
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
