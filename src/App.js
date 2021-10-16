import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CourseDetails from "../src/Component/Pages/CourseDetails/CourseDetails";
import "./App.scss";
import Home from "./Component/Home/Home/Home";
// <<<<<<< HEAD
import AdminDashboard from "./Component/Pages/Admin/AdminDashboard/AdminDashboard";
import Deshbord from "./Component/Pages/Deshbord/Deshbord";
import StudentRegisterForm from "./Component/Pages/Deshbord/StudentRegisterForm/StudentRegisterForm";
import StudentComment from "./Component/Pages/StudentComment/StudentComment";
import TeacherForm from "./Component/Pages/TeacherForm/TeacherForm";
import TeacherProfile from "./Component/Pages/TeacherProfile/TeacherProfile";

import NewLogin from "./Firebase/NewLogin/NewLogin";
import Assign from "./Component/Pages/Assign/Assign";
import TeacherSidebar from "./Component/Shared/TeacherSidebar/TeacherSidebar";
import StudentDeshbord from "./Component/Pages/StudentDeshbord/StudentDeshbord";
import Sidebar from "./Component/Shared/Sidebar/Sidebar";
// =======

// import Deshbord from "./Component/Pages/Deshbord/Deshbord";
// import StudentRegisterForm from "./Component/Pages/Deshbord/StudentRegisterForm/StudentRegisterForm";
// import StudentComment from "./Component/Pages/StudentComment/StudentComment";
// import StudentDeshbord from "./Component/Pages/StudentDeshbord/StudentDeshbord";
// import AdminDashboard from "./Component/Pages/Admin/AdminDashboard/AdminDashboard";
// // import Overview from './Component/Pages/Admin/AdminDashboard/Overview';
// // import { Reports, ReportsOne, ReportsThree, ReportsTwo } from './Component/Pages/Admin/AdminDashboard/Reports';
// // import Team from './Component/Pages/Admin/AdminDashboard/Team';
// import TeacherForm from "./Component/Pages/TeacherForm/TeacherForm";

// import Login from "./Firebase/Login/Login/Login";
// import NewLogin from "./Firebase/NewLogin/NewLogin";
// import Sidebar from "./Component/Shared/Sidebar/Sidebar";
// >>>>>>> Ariful_Islam

export const UseSelcCourseContext = createContext();
export const UserLoggedinContext = createContext();
function App() {
  const [studentSelactedCourse, setStudentSelactedCourse] = useState({});
  console.log(studentSelactedCourse);
  const [loggedinUser, setLoggedinUser] = useState({});
  return (
    <div>
      <UserLoggedinContext.Provider value={[loggedinUser, setLoggedinUser]}>
        <UseSelcCourseContext.Provider
          value={[studentSelactedCourse, setStudentSelactedCourse]}
        >
          <Router>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              {/* <Route path="/login">
              <Login></Login>
            </Route> */}
              <Route path="/courseDetails">
                <CourseDetails />
              </Route>
              <Route path="/teacherForm">
                <TeacherForm />
              </Route>
              <Route path="/sidebar">
                <Sidebar></Sidebar>
              </Route>
              {/* arif */}
              <Route path="/deshboard">
                <Deshbord></Deshbord>
              </Route>
              <Route path="/student-register">
                <StudentRegisterForm></StudentRegisterForm>
              </Route>
              <Route path="/student-comment">
                <StudentComment></StudentComment>
              </Route>
              <Route path="/student-deshbord">
                <StudentDeshbord></StudentDeshbord>
              </Route>
              <Route path="/login">
                <NewLogin></NewLogin>
              </Route>
              <Route path="/admin">
                <AdminDashboard />
              </Route>
              <Route path="/teacherProfile">
                <TeacherProfile />
              </Route>
              <Route path="/assign">
                <Assign />
              </Route>
              <Route path="/teacherSidebar">
                <TeacherSidebar />
              </Route>
              <Route path="/teacherProfile">
                <TeacherProfile />
              </Route>
              {/*  */}
            </Switch>
          </Router>
        </UseSelcCourseContext.Provider>
      </UserLoggedinContext.Provider>
    </div>
  );
}

export default App;
