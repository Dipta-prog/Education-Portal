import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OurCourses from "../src/Component/Department/Department/OurCourses/OurCourses/OurCourses";
import CourseDetails from "../src/Component/Pages/CourseDetails/CourseDetails";
import TodoList from "../src/Component/Pages/StudentDeshbord/StudentTodo/TodoList/TodoList/TodoList";
import Footer from "../src/Component/Shared/Footer/Footer";
import Navbar from "../src/Component/Shared/Navbar/Navbar";
import "./App.scss";
import AddCourse from "./Component/Administration/Admin Dashboard/Course/AddCourse/AddCourse";
import CourseList from "./Component/Administration/Admin Dashboard/Course/CourseList/CourseList";
import Dashboard from "./Component/Administration/Admin Dashboard/Dashboard/Dashboard";
import AddDepartment from "./Component/Administration/Admin Dashboard/Department/AddDepartment/AddDepartment";
import DepartmentList from "./Component/Administration/Admin Dashboard/Department/DepartmentList/DepartmentList";
import AddEvents from "./Component/Administration/Admin Dashboard/Events/AddEvents/AddEvents";
import MakeNewAdmin from "./Component/Administration/Admin Dashboard/MakeNewAdmin/MakeNewAdmin";
import AddStudent from "./Component/Administration/Admin Dashboard/Student/AddStudent/AddStudent";
import EditStudent from "./Component/Administration/Admin Dashboard/Student/EditStudent/EditStudent";
import StudentsList from "./Component/Administration/Admin Dashboard/Student/StudentsList/StudentsList";
import AddTeacher from "./Component/Administration/Admin Dashboard/Teacher/AddTeacher/AddTeacher";
import EditTeacher from "./Component/Administration/Admin Dashboard/Teacher/EditTeacher/EditTeacher";
import TeacherList from "./Component/Administration/Admin Dashboard/Teacher/TeacherList/TeacherList";
import Courses from "./Component/Department/Department/Courses/Courses/Courses";
import Department from "./Component/Department/Department/Department";
import Home from "./Component/Home/Home/Home";
import NotFound from "./Component/NotFound/NotFound";
// <<<<<<< HEAD
import AdminDashboard from "./Component/Pages/Admin/AdminDashboard/AdminDashboard";
import Assign from "./Component/Pages/Assign/Assign";
import Deshbord from "./Component/Pages/Deshbord/Deshbord";
import StudentRegisterForm from "./Component/Pages/Deshbord/StudentRegisterForm/StudentRegisterForm";
import NoticePeriod from "./Component/Pages/NoticePeriod/NoticePeriod";
import StudentComment from "./Component/Pages/StudentComment/StudentComment";
import CoundDownTimes from "./Component/Pages/StudentDeshbord/CoundDownTimes/CoundDownTimes";
import StudentAssignment from "./Component/Pages/StudentDeshbord/StudentAssignment/StudentAssignment";
// import SetTimes from "./Component/Pages/StudentDeshbord/StudentAssignment/SetTimes/SetTimes";
// import StudentAssignment from "../src/Component/Pages/StudentDeshbord/";
import StudentDeshbord from "./Component/Pages/StudentDeshbord/StudentDeshbord";
import TeacherCourseDetails from "./Component/Pages/TeacherCourseDetails/TeacherCourseDetails";
import TeacherForm from "./Component/Pages/TeacherForm/TeacherForm";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Sidebar from "./Component/Shared/Sidebar/Sidebar";
import TeacherSidebar from "./Component/Shared/TeacherSidebar/TeacherSidebar";
import EnrolledStudent from "./Component/Teacher/EnrolledStudent/EnrolledStudent";
import TeacherCourse from "./Component/Teacher/TeacherCourses/TeacherCourse";
import TeacherProfile from "./Component/Teacher/TeacherProfile/TeacherProfile";
import NewLogin from "./Firebase/NewLogin/NewLogin";
export const UseSelcCourseContext = createContext();
export const UserLoggedinContext = createContext();
export const UseSelcDepartmentContext = createContext();
function App() {
  const [selcDepartment, setSelcDepartment] = useState({});
  const [studentSelactedCourse, setStudentSelactedCourse] = useState({});
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
                  <Navbar />
                  <TeacherForm />
                  <Footer />
                </Route>
                <PrivateRoute path="/adminDashboard">
                  <Navbar />
                  <Dashboard />
                  <Footer />
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
                {/* <PrivateRoute path="/teacherProfile">
                  <TeacherProfile />
                </PrivateRoute> */}
                <Route path="/assign">
                  <Assign />
                </Route>
                <Route path="/teacherSidebar">
                  <TeacherSidebar />
                </Route>
                <PrivateRoute path="/teacherProfile">
                  <Navbar />
                  <TeacherProfile />
                  <Footer />
                </PrivateRoute>
                <Route path="/enrolledStudent">
                  <Navbar />
                  <EnrolledStudent />
                  <Footer />
                </Route>
                <PrivateRoute path="/teachersList">
                  <div>
                    <Navbar></Navbar>
                    <div className="row">
                      <div className="col-md-3">
                        {" "}
                        <Sidebar />{" "}
                      </div>
                      <div className="col-md-9">
                        <TeacherList />
                      </div>
                    </div>
                    <div style={{ paddingTop: "5%" }}>
                      <Footer></Footer>
                    </div>
                  </div>
                </PrivateRoute>
                <Route path="/studentsList">
                  <div>
                    <Navbar></Navbar>
                    <div>
                      <div className="row">
                        <div className="col-md-3">
                          <Sidebar />{" "}
                        </div>
                        <div className="col-md-9">
                          <StudentsList />
                        </div>
                        <div style={{ paddingTop: "5%" }}>
                          <Footer></Footer>
                        </div>
                      </div>
                      <Footer></Footer>
                    </div>
                  </div>
                </Route>
                <PrivateRoute path="/addTeacher">
                  <div>
                    <Navbar></Navbar>
                    <div className="row">
                      <div className="col-md-3">
                        {" "}
                        <Sidebar />{" "}
                      </div>
                      <div className="col-md-9">
                        <AddTeacher />
                      </div>
                      <div style={{ paddingTop: "5%" }}>
                        <Footer></Footer>
                      </div>
                    </div>
                  </div>
                </PrivateRoute>
                <PrivateRoute path="/editTeacher">
                  <div>
                    {" "}
                    <Navbar></Navbar>
                    <div className="row">
                      <div className="col-md-3">
                        {" "}
                        <Sidebar />{" "}
                      </div>
                      <div className="col-md-9">
                        <EditTeacher />
                      </div>{" "}
                      <div style={{ paddingTop: "5%" }}>
                        <Footer></Footer>
                      </div>
                    </div>
                  </div>
                </PrivateRoute>
                <PrivateRoute path="/addStudent">
                  <div>
                    {" "}
                    <Navbar></Navbar>
                    <div className="row">
                      <div className="col-md-3">
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <AddStudent />
                      </div>{" "}
                      <div style={{ paddingTop: "5%" }}>
                        <Footer></Footer>
                      </div>
                    </div>
                  </div>
                </PrivateRoute>
                <PrivateRoute path="/editStudent">
                  <div>
                    <Navbar></Navbar>
                    <div className="row">
                      <div className="col-md-3">
                        {" "}
                        <Sidebar />{" "}
                      </div>
                      <div className="col-md-9">
                        <EditStudent />
                      </div>{" "}
                      <div style={{ paddingTop: "5%" }}>
                        <Footer></Footer>
                      </div>
                    </div>
                  </div>
                </PrivateRoute>
                <PrivateRoute path="/addCourse">
                  <Navbar />
                  <div className="row">
                    <div className="col-md-3">
                      <Sidebar />{" "}
                    </div>
                    <div className="col-md-9">
                      <AddCourse />
                    </div>
                  </div>
                  <Footer />
                </PrivateRoute>
                <PrivateRoute path="/allCourse">
                  <Navbar />
                  <div className="row">
                    <div className="col-md-3">
                      {" "}
                      <Sidebar />{" "}
                    </div>
                    <div className="col-md-9">
                      <CourseList />
                    </div>
                  </div>
                  <Footer />
                </PrivateRoute>
                <PrivateRoute path="/allDepartment">
                  <Navbar />
                  <div className="row">
                    <div className="col-md-3">
                      {" "}
                      <Sidebar />{" "}
                    </div>
                    <div className="col-md-9">
                      <DepartmentList />
                    </div>
                  </div>
                  <Footer />
                </PrivateRoute>
                <PrivateRoute path="/addDepartment">
                  <Navbar />
                  <div className="row">
                    <div className="col-md-3">
                      <Sidebar />{" "}
                    </div>
                    <div className="col-md-9">
                      <AddDepartment />
                    </div>
                  </div>
                  <Footer />
                </PrivateRoute>
                <PrivateRoute path="/makeNewAdmin">
                  <Navbar />
                  <div className="row">
                    <div className="col-md-3">
                      {" "}
                      <Sidebar />{" "}
                    </div>
                    <div className="col-md-9">
                      <MakeNewAdmin />
                    </div>
                  </div>
                  <Footer />
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
                <PrivateRoute path='/teacher/teacherCourseDetails'>
                  <div className="row">
                    <div className="col-md-3">
                      <TeacherSidebar />
                    </div>
                    <div className="col-md-9">
                      <TeacherCourseDetails />
                    </div>
                  </div>
                </PrivateRoute>
                <PrivateRoute>
                  <div className="row">
                    <div className="col-md-3">
                      <TeacherSidebar />
                    </div>
                    <div className="col-md-9">
                      <NoticePeriod />
                    </div>
                  </div>
                </PrivateRoute>
                <PrivateRoute path="/addAnEvent">
                  <Navbar />
                  <div className="row">
                    <div className="col-md-3">
                      {" "}
                      <Sidebar />{" "}
                    </div>
                    <div className="col-md-9">
                      <AddEvents />
                    </div>
                  </div>
                  <Footer />
                </PrivateRoute>
                <PrivateRoute path="/makeNewAdmin">
                  <div className="row">
                    <div className="col-md-3">
                      <Sidebar />
                    </div>
                    <div className="col-md-9">
                      <MakeNewAdmin />
                    </div>
                  </div>
                </PrivateRoute>
                <PrivateRoute path="/addAnEvent">
                  <div className="row">
                    <div className="col-md-3">
                      <Sidebar />
                    </div>
                    <div className="col-md-9">
                      <AddEvents />
                    </div>
                  </div>
                </PrivateRoute>
                <PrivateRoute path="/adminDashboard">
                  <Dashboard />
                </PrivateRoute>
                {/* <Route to="/ourTeachers">
                  <OurTeachers />
                </Route> */}
                {/* arif */}
                <Route path="/quiz">
                  <StudentAssignment></StudentAssignment>
                </Route>
                <Route path="/times">
                  <CoundDownTimes></CoundDownTimes>
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
