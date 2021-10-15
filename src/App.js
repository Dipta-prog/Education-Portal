import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CourseDetails from "../src/Component/Pages/CourseDetails/CourseDetails";
import "./App.scss";
import Home from "./Component/Home/Home/Home";
import AdminDashboard from "./Component/Pages/Admin/AdminDashboard/AdminDashboard";
import Deshbord from "./Component/Pages/Deshbord/Deshbord";
import StudentRegisterForm from "./Component/Pages/Deshbord/StudentRegisterForm/StudentRegisterForm";
import StudentComment from "./Component/Pages/StudentComment/StudentComment";
import TeacherForm from "./Component/Pages/TeacherForm/TeacherForm";
import TeacherProfile from "./Component/Pages/TeacherProfile/TeacherProfile";
import Sidebar from "./Component/Shared/Sidebar/Sidebar";
import NewLogin from "./Firebase/NewLogin/NewLogin";
import Assign from "./Component/Pages/Assign/Assign";
import TeacherSidebar from "./Component/Shared/TeacherSidebar/TeacherSidebar";

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
          <Sidebar />
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
        <Route path="/login">
          <NewLogin></NewLogin>
        </Route>
        <Route path="/admin">
          <AdminDashboard />
        </Route>
        <Route path='/teacherProfile'>
          <TeacherProfile />
        </Route>
        <Route path="/assign">
            <Assign />
          </Route>
          <Route path='/teacherSidebar'>
            <TeacherSidebar />
          </Route>
          <Route path='/teacherProfile'>
            <TeacherProfile />
          </Route>
        {/*  */}
      </Switch>
    </Router>
  </UseSelcCourseContext.Provider>
    </div >
  );
}

export default App;
