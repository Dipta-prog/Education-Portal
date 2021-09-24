import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/Home/Home/Home";
import Login from "./Firebase/Login/Login/Login";
function App() {
  return (
    <div>
      {/* <h1>Hello I am Joti</h1> */}
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
