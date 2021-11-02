import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CourseDetails from "../src/Component/Pages/CourseDetails/CourseDetails";
import "./App.scss";
import AddCourse from "./Component/Administration/Admin Dashboard/Course/AddCourse/AddCourse";
import CourseList from "./Component/Administration/Admin Dashboard/Course/CourseList/CourseList";
import Dashboard from "./Component/Administration/Admin Dashboard/Dashboard/Dashboard";
import AddDepartment from "./Component/Administration/Admin Dashboard/Department/AddDepartment/AddDepartment";
import DepartmentList from "./Component/Administration/Admin Dashboard/Department/DepartmentList/DepartmentList";
import AddEvents from "./Component/Administration/Admin Dashboard/Events/AddEvents/AddEvents";
import MakeNewAdmin from "./Component/Administration/Admin Dashboard/MakeNewAdmin/MakeNewAdmin";
import AddStudent from "./Component/Administration/Admin Dashboard/Student/AddStudent/AddStudent";
import StudentsList from "./Component/Administration/Admin Dashboard/Student/StudentsList/StudentsList";
import StudentView from "./Component/Administration/Admin Dashboard/Student/StudentView/StudentView";
import AddTeacher from "./Component/Administration/Admin Dashboard/Teacher/AddTeacher/AddTeacher";
import TeacherList from "./Component/Administration/Admin Dashboard/Teacher/TeacherList/TeacherList";
import TeacherView from "./Component/Administration/Admin Dashboard/Teacher/TeacherView/TeacherView";
import Home from "./Component/Home/Home/Home";
import NotFound from "./Component/NotFound/NotFound";
// <<<<<<< HEAD
import AdminDashboard from "./Component/Pages/Admin/AdminDashboard/AdminDashboard";
import Assign from "./Component/Pages/Assign/Assign";
import Deshbord from "./Component/Pages/Deshbord/Deshbord";
import StudentRegisterForm from "./Component/Pages/Deshbord/StudentRegisterForm/StudentRegisterForm";
import OurTeachers from "./Component/Pages/OurTeachers/OurTeachers";
import StudentComment from "./Component/Pages/StudentComment/StudentComment";
import StudentDeshbord from "./Component/Pages/StudentDeshbord/StudentDeshbord";
import TeacherForm from "./Component/Pages/TeacherForm/TeacherForm";
import TeacherProfile from "./Component/Teacher/TeacherProfile/TeacherProfile";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Sidebar from "./Component/Shared/Sidebar/Sidebar";
import TeacherSidebar from "./Component/Shared/TeacherSidebar/TeacherSidebar";
import EnrolledStudent from "./Component/Teacher/EnrolledStudent/EnrolledStudent";
import TeacherCourse from "./Component/Teacher/TeacherCourses/TeacherCourse";
import NewLogin from "./Firebase/NewLogin/NewLogin";

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

              <PrivateRoute path="/courseDetails">
                <CourseDetails />
              </PrivateRoute>
              <Route path="/teacherForm">
                <TeacherForm />
              </Route>
              <PrivateRoute path="/adminDashboard">
                <Dashboard />
              </PrivateRoute>
              {/* arif */}
              <Route path="/deshboard">
                <Deshbord></Deshbord>
              </Route>
              <PrivateRoute path="/student-register">
                <StudentRegisterForm></StudentRegisterForm>
              </PrivateRoute>
              <Route path="/student-comment">
                <StudentComment></StudentComment>
              </Route>
              <PrivateRoute path="/student-deshbord">
                <StudentDeshbord></StudentDeshbord>
              </PrivateRoute>
              <Route path="/login">
                <NewLogin></NewLogin>
              </Route>
              <Route path="/admin">
                <AdminDashboard />
              </Route>
              <PrivateRoute path="/teacherProfile">
                <TeacherProfile />
              </PrivateRoute>
              <PrivateRoute path="/assign">
                <Assign />
              </PrivateRoute>
              <PrivateRoute path="/teacherSidebar">
                <TeacherSidebar />
              </PrivateRoute>
              <PrivateRoute path="/teacherProfile">
                <TeacherProfile />
              </PrivateRoute>
              <PrivateRoute path="/enrolledStudent">
                <EnrolledStudent />
              </PrivateRoute>
              <PrivateRoute path="/teachersList">
                <div className="row">
                  <div className="col-md-3"><Sidebar /></div>
                  <div className="col-md-9"><TeacherList /></div>
                </div>
              </PrivateRoute>
              <Route path="/studentsList">
                <div className="row">
                  <div className="col-md-3"><Sidebar /></div>
                  <div className="col-md-9"><StudentsList /></div>
                </div>
              </Route>
              <PrivateRoute path="/addTeacher">
                <div className="row">
                  <div className="col-md-3"><Sidebar /></div>
                  <div className="col-md-9"><AddTeacher /></div>
                </div>
              </PrivateRoute>
              <PrivateRoute path="/viewTeacher">
                <div className="row">
                  <div className="col-md-3"><Sidebar /></div>
                  <div className="col-md-9"><TeacherView /></div>
                </div>
              </PrivateRoute>
              <PrivateRoute path="/addStudent">
                <div className="row">
                  <div className="col-md-3"><Sidebar /></div>
                  <div className="col-md-9"><AddStudent /></div>
                </div>
              </PrivateRoute>
              <PrivateRoute path="/viewStudent">
                <div className="row">
                  <div className="col-md-3"><Sidebar /></div>
                  <div className="col-md-9"><StudentView /></div>
                </div>
              </PrivateRoute>
              <PrivateRoute path="/addCourse">
                <div className="row">
                  <div className="col-md-3"><Sidebar /></div>
                  <div className="col-md-9"><AddCourse /></div>
                </div>
              </PrivateRoute>
              <PrivateRoute path="/allCourse">
                <div className="row">
                  <div className="col-md-3"><Sidebar /></div>
                  <div className="col-md-9"><CourseList /></div>
                </div>
              </PrivateRoute>
              <PrivateRoute path="/allDepartment">
                <div className="row">
                  <div className="col-md-3"><Sidebar /></div>
                  <div className="col-md-9"><DepartmentList /></div>
                </div>
              </PrivateRoute>
              <PrivateRoute path="/addDepartment">
                <div className="row">
                  <div className="col-md-3"><Sidebar /></div>
                  <div className="col-md-9"><AddDepartment /></div>
                </div>
              </PrivateRoute>
              <PrivateRoute path="/teacher/teacherCourse">
                <div className="row">
                  <div className="col-md-3">
                    <TeacherSidebar />
                  </div>
                  <div className="col-md-9">
                    <TeacherCourse />
                  </div>
                </div>
              </PrivateRoute>
              <PrivateRoute path="/makeNewAdmin">
                <div className="row">
                  <div className="col-md-3"><Sidebar /></div>
                  <div className="col-md-9"><MakeNewAdmin /></div>
                </div>
              </PrivateRoute>
              <PrivateRoute path="/addAnEvent">
                <div className="row">
                  <div className="col-md-3"><Sidebar /></div>
                  <div className="col-md-9"><AddEvents /></div>
                </div>
              </PrivateRoute>
              <PrivateRoute path="/adminDashboard">
                <Dashboard />
              </PrivateRoute>
              <Route to="/ourTeachers">
                <OurTeachers />
              </Route>
              <Route path="/*">
                <NotFound />
              </Route>
              {/*  */}
            </Switch>
          </Router>
        </UseSelcCourseContext.Provider>
      </UserLoggedinContext.Provider>
    </div>
  );
}

//api key for imageBB
// 3a55021cd0e8e960fecdb61ee3bca9f2

export default App;
