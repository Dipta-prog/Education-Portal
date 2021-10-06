import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CourseDetails from '../src/Component/Pages/CourseDetails/CourseDetails';
import "./App.scss";
import Home from "./Component/Home/Home/Home";
import AdminDashboard from "./Component/Pages/Admin/AdminDashboard/AdminDashboard";
import Assign from "./Component/Pages/Assign/Assign";
// import Overview from './Component/Pages/Admin/AdminDashboard/Overview';
// import { Reports, ReportsOne, ReportsThree, ReportsTwo } from './Component/Pages/Admin/AdminDashboard/Reports';
// import Team from './Component/Pages/Admin/AdminDashboard/Team';
import TeacherForm from "./Component/Pages/TeacherForm/TeacherForm";
import Sidebar from "./Component/Shared/Sidebar/SIdebar";
import Login from "./Firebase/Login/Login/Login";


function App() {
  return (
    <div>
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
          <Route path="/admin">
            <AdminDashboard />
          </Route>

          <Route path="/assign">
            <Assign />
          </Route>
          
       

        </Switch>

        
      </Router>
    </div>
  );
}

export default App;
