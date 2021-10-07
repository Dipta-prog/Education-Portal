import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CourseDetails from '../src/Component/Pages/CourseDetails/CourseDetails';
import "./App.scss";
import AddCourse from "./Component/Administration/Admin Dashboard/Course/AddCourse/AddCourse";
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
import TeacherForm from "./Component/Pages/TeacherForm/TeacherForm";
import SIdebar from "./Component/Shared/Sidebar/SIdebar";
import Login from "./Firebase/Login/Login/Login";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div>
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
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
          <Route path="/teachersList">
            <TeacherList />
          </Route>
          <Route path="/studentsList">
            <StudentsList />
          </Route>
          <Route path="/addTeacher">
            <AddTeacher />
          </Route>
          <Route path="/addStudent">
            <AddStudent />
          </Route>
          <Route path="/viewStudent">
            <StudentView />
          </Route>
          <Route path="/addCourse">
            <AddCourse />
          </Route>
          <Route path="/addDepartment">
            <AddDepartment />
          </Route>
          <Route path="/makeNewAdmin">
            <MakeNewAdmin />
          </Route>
          <Route path="/addAnEvent">
            <AddEvents />
          </Route>
          <Route path="/adminDashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
