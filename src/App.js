import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./Component/Home/Home/Home";
import CourseDetails from "./Component/Pages/CourseDetails/CourseDetails";
import TeacherForm from "./Component/Pages/TeacherForm/TeacherForm";
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
