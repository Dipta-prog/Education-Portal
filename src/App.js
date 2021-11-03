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
import Courses from "./Component/Department/Department/Courses/Courses/Courses";
import Department from "./Component/Department/Department/Department";
import OurCourses from "./Component/Department/Department/OurCourses/OurCourses/OurCourses";
import Home from "./Component/Home/Home/Home";
import NotFound from "./Component/NotFound/NotFound";
// <<<<<<< HEAD
import AdminDashboard from "./Component/Pages/Admin/AdminDashboard/AdminDashboard";
import Assign from "./Component/Pages/Assign/Assign";
import Deshbord from "./Component/Pages/Deshbord/Deshbord";
import StudentRegisterForm from "./Component/Pages/Deshbord/StudentRegisterForm/StudentRegisterForm";
import StudentComment from "./Component/Pages/StudentComment/StudentComment";
import SetTimes from "./Component/Pages/StudentDeshbord/StudentAssignment/SetTimes/SetTimes";
import StudentAssignment from "./Component/Pages/StudentDeshbord/StudentAssignment/StudentAssignment";
import StudentDeshbord from "./Component/Pages/StudentDeshbord/StudentDeshbord";
import TodoList from "./Component/Pages/StudentDeshbord/StudentTodo/TodoList/TodoList/TodoList";
import TeacherForm from "./Component/Pages/TeacherForm/TeacherForm";
import TeacherProfile from "./Component/Pages/TeacherProfile/TeacherProfile";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Sidebar from "./Component/Shared/Sidebar/Sidebar";
import TeacherSidebar from "./Component/Shared/TeacherSidebar/TeacherSidebar";
import EnrolledStudent from "./Component/Teacher/EnrolledStudent/EnrolledStudent";
import NewLogin from "./Firebase/NewLogin/NewLogin";

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
export const UseSelcDepartmentContext = createContext();
export const UserLoggedinContext = createContext();
function App() {
  const [studentSelactedCourse, setStudentSelactedCourse] = useState({});
  const [selcDepartment, setSelcDepartment] = useState({});
  console.log(studentSelactedCourse);
  const [loggedinUser, setLoggedinUser] = useState({});
  return (
    <div>
      <UseSelcDepartmentContext.Provider
        value={[selcDepartment, setSelcDepartment]}
      >
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
                <Route path="/enrolledStudent">
                  <EnrolledStudent />
                </Route>
                <PrivateRoute path="/teachersList">
                  <div className="row">
                    <div className="col-md-3">
                      {" "}
                      <Sidebar />{" "}
                    </div>
                    <div className="col-md-9">
                      <TeacherList />
                    </div>
                  </div>
                </PrivateRoute>
                <Route path="/studentsList">
                  <div className="row">
                    <div className="col-md-3">
                      <Sidebar />{" "}
                    </div>
                    <div className="col-md-9">
                      <StudentsList />
                    </div>
                  </div>
                </Route>
                <PrivateRoute path="/addTeacher">
                  <div className="row">
                    <div className="col-md-3">
                      {" "}
                      <Sidebar />{" "}
                    </div>
                    <div className="col-md-9">
                      <AddTeacher />
                    </div>
                  </div>
                </PrivateRoute>
                <PrivateRoute path="/viewTeacher">
                  <div className="row">
                    <div className="col-md-3">
                      {" "}
                      <Sidebar />{" "}
                    </div>
                    <div className="col-md-9">
                      <TeacherView />
                    </div>
                  </div>
                </PrivateRoute>
                <PrivateRoute path="/addStudent">
                  <div className="row">
                    <div className="col-md-3">
                      <Sidebar />
                    </div>
                    <div className="col-md-9">
                      <AddStudent />
                    </div>
                  </div>
                </PrivateRoute>
                <PrivateRoute path="/viewStudent">
                  <div className="row">
                    <div className="col-md-3">
                      {" "}
                      <Sidebar />{" "}
                    </div>
                    <div className="col-md-9">
                      <StudentView />
                    </div>
                  </div>
                </PrivateRoute>
                <PrivateRoute path="/addCourse">
                  <div className="row">
                    <div className="col-md-3">
                      <Sidebar />{" "}
                    </div>
                    <div className="col-md-9">
                      <AddCourse />
                    </div>
                  </div>
                </PrivateRoute>
                <PrivateRoute path="/allCourse">
                  <div className="row">
                    <div className="col-md-3">
                      {" "}
                      <Sidebar />{" "}
                    </div>
                    <div className="col-md-9">
                      <CourseList />
                    </div>
                  </div>
                </PrivateRoute>
                <PrivateRoute path="/allDepartment">
                  <div className="row">
                    <div className="col-md-3">
                      {" "}
                      <Sidebar />{" "}
                    </div>
                    <div className="col-md-9">
                      <DepartmentList />
                    </div>
                  </div>
                </PrivateRoute>
                <PrivateRoute path="/addDepartment">
                  <div className="row">
                    <div className="col-md-3">
                      <Sidebar />{" "}
                    </div>
                    <div className="col-md-9">
                      <AddDepartment />
                    </div>
                  </div>
                </PrivateRoute>
                <PrivateRoute path="/makeNewAdmin">
                  <div className="row">
                    <div className="col-md-3">
                      {" "}
                      <Sidebar />{" "}
                    </div>
                    <div className="col-md-9">
                      <MakeNewAdmin />
                    </div>
                  </div>
                </PrivateRoute>
                <PrivateRoute path="/addAnEvent">
                  <div className="row">
                    <div className="col-md-3">
                      {" "}
                      <Sidebar />{" "}
                    </div>
                    <div className="col-md-9">
                      <AddEvents />
                    </div>
                  </div>
                </PrivateRoute>
                <PrivateRoute path="/adminDashboard">
                  <Dashboard />
                </PrivateRoute>
                {/* arif */}
                <Route path="/task">
                  <StudentAssignment></StudentAssignment>
                </Route>
                <Route path="/times">
                  <SetTimes></SetTimes>
                </Route>
                <Route path="/todo">
                  <TodoList></TodoList>
                </Route>
                {/* arif */}
                <Route path="/department">
                  <Department />
                </Route>
                <Route path="/departments/:departmentNames/:departmentKey">
                  <Courses />
                </Route>
                <Route path="/subject/:departmentName">
                  <OurCourses />
                </Route>
                {/* arif */}
                {/*  */}
                <Route path="/*">
                  <NotFound />
                </Route>
                {/*  */}
              </Switch>
            </Router>
          </UseSelcCourseContext.Provider>
        </UserLoggedinContext.Provider>
      </UseSelcDepartmentContext.Provider>
    </div>
  );
}

//api key for imageBB
// 3a55021cd0e8e960fecdb61ee3bca9f2

export default App;
