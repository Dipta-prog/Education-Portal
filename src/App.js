import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CourseDetails from "../src/Component/Pages/CourseDetails/CourseDetails";
import "./App.scss";
import Home from "./Component/Home/Home/Home";
import Deshbord from "./Component/Pages/Deshbord/Deshbord";
import StudentRegisterForm from "./Component/Pages/Deshbord/StudentRegisterForm/StudentRegisterForm";
import StudentComment from "./Component/Pages/StudentComment/StudentComment";
import AdminDashboard from "./Component/Pages/Admin/AdminDashboard/AdminDashboard";
// import Overview from './Component/Pages/Admin/AdminDashboard/Overview';
// import { Reports, ReportsOne, ReportsThree, ReportsTwo } from './Component/Pages/Admin/AdminDashboard/Reports';
// import Team from './Component/Pages/Admin/AdminDashboard/Team';
import TeacherForm from "./Component/Pages/TeacherForm/TeacherForm";
import Sidebar from "./Component/Shared/Sidebar/SIdebar";
import Login from "./Firebase/Login/Login/Login";
import NewLogin from "./Firebase/NewLogin/NewLogin";
export const UseSelcCourseContext = createContext();
function App() {
  const [studentSelactedCourse, setStudentSelactedCourse] = useState({});
  return (
    <div>
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
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/courseDetails">
              <CourseDetails />
            </Route>
            <Route path="/teacherForm">
              <TeacherForm />
            </Route>
            <Route path="/sidebar">
              <SIdebar />
            </Route>
            {/* arif */}
            <Route path="/deshbord">
              <Deshbord></Deshbord>
            </Route>
            <Route path="/student-register">
              <StudentRegisterForm></StudentRegisterForm>
            </Route>
            <Route path="/student-comment">
              <StudentComment></StudentComment>
            </Route>
            <Route path="/newLogin">
              <NewLogin></NewLogin>
            </Route>
            <Route path="/admin">
              <AdminDashboard />
            </Route>
            {/*  */}
          </Switch>
        </Router>
      </UseSelcCourseContext.Provider>
    </div>
  );
}

export default App;
