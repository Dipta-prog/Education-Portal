import "./App.scss";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/Home/Home/Home";
import Login from "./Firebase/Login/Login/Login";
import Deshbord from "./Component/Pages/Deshbord/Deshbord";
import StudentRegisterForm from "./Component/Pages/Deshbord/StudentRegisterForm/StudentRegisterForm";
import StudentComment from "./Component/Pages/StudentComment/StudentComment";
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
            <Route path="/deshbord">
              <Deshbord></Deshbord>
            </Route>
            <Route path="/student-register">
              <StudentRegisterForm></StudentRegisterForm>
            </Route>
            <Route path="/student-comment">
              <StudentComment></StudentComment>
            </Route>
          </Switch>
        </Router>
      </UseSelcCourseContext.Provider>
    </div>
  );
}

export default App;
