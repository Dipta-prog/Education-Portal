import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CourseDetails from "../src/Component/Pages/CourseDetails/CourseDetails";
import "./App.scss";
import AddCourse from "./Component/Administration/Admin Dashboard/Course/AddCourse/AddCourse";
import CourseList from "./Component/Administration/Admin Dashboard/Course/CourseList/CourseList";
import Dashboard from "./Component/Administration/Admin Dashboard/Dashboard/Dashboard";
import AddDepartment from "./Component/Administration/Admin Dashboard/Department/AddDepartment/AddDepartment";
import AddEvents from "./Component/Administration/Admin Dashboard/Events/AddEvents/AddEvents";
import MakeNewAdmin from "./Component/Administration/Admin Dashboard/MakeNewAdmin/MakeNewAdmin";
import AddStudent from "./Component/Administration/Admin Dashboard/Student/AddStudent/AddStudent";
import StudentsList from "./Component/Administration/Admin Dashboard/Student/StudentsList/StudentsList";
import StudentView from "./Component/Administration/Admin Dashboard/Student/StudentView/StudentView";
import AddTeacher from "./Component/Administration/Admin Dashboard/Teacher/AddTeacher/AddTeacher";
import TeacherList from "./Component/Administration/Admin Dashboard/Teacher/TeacherList/TeacherList";
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
import TeacherProfile from "./Component/Pages/TeacherProfile/TeacherProfile";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import TeacherSidebar from "./Component/Shared/TeacherSidebar/TeacherSidebar";
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

              <Route path="/courseDetails">
                <CourseDetails />
              </Route>
              <Route path="/teacherForm">
                <TeacherForm />
              </Route>
              {/* <Route path="/sidebar">
                <Sidebar></Sidebar>
              </Route> */}
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
              <Route path="/teachersList">
                <TeacherList />
              </Route>
              <Route path="/studentsList">
                <StudentsList />
              </Route>
              <PrivateRoute path="/addTeacher">
                <AddTeacher />
              </PrivateRoute>
              <Route path="/addStudent">
                <AddStudent />
              </Route>
              <Route path="/viewStudent">
                <StudentView />
              </Route>
              <Route path="/addCourse">
                <AddCourse />
              </Route>
              <Route path="/allCourse">
                <CourseList />
              </Route>
              <Route path="/addDepartment">
                <AddDepartment />
              </Route>
              <PrivateRoute path="/makeNewAdmin">
                <MakeNewAdmin />
              </PrivateRoute>
              <Route path="/addAnEvent">
                <AddEvents />
              </Route>
              <Route path="/adminDashboard">
                <Dashboard />
              </Route>
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
