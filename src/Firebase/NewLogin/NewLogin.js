import React, { useState } from "react";
import admainImg from "../../Media/img/login-img/admain-img/a-3.png";
import studentImg from "../../Media/img/login-img/student-img/st-1.png";
import teacherImg from "../../Media/img/login-img/teacher-img/t-2.png";
import LoginFrom from "./LoginFrom/LoginFrom";
import Navbar from "../../../src/Component/Shared/Navbar/Navbar";
import Footer from "../../../src/Component/Shared/Footer/Footer";
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

const NewLogin = () => {
  const [chosesOption, setChosesOption] = useState(true);
  console.log(chosesOption);
  return (
    <div>
      <Navbar></Navbar> <br />
      <br />
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
          <LoginFrom
            chosesOption={chosesOption}
            // role={"/student-deshbord"}
          ></LoginFrom>
        )}
        {chosesOption.role === "Teacher" && (
          <LoginFrom
            chosesOption={chosesOption}
            role={"/teacherProfile"}
          ></LoginFrom>
        )}
        {chosesOption.role === "Admin" && (
          <LoginFrom
            chosesOption={chosesOption}
            role={"/adminDashboard"}
          ></LoginFrom>
        )}
      </div>
      <br />
      <br /> <br /> <Footer></Footer>
    </div>
  );
};

export default NewLogin;
