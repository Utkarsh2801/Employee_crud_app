import React from "react";
import "./style.css";

import Newform from "./components/NewForm";
import EmployeeList from "./components/EmployeeList";
import EditEmployee from "./components/EditEmployee";
import Nomatch from "./components/Nomatch";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/add" component={Newform} />
        <Route exact path="/" component={EmployeeList} />
        <Route exact path="/edit/:id" component={EditEmployee} />
        <Route exact component={Nomatch} />
      </Switch>
    </div>
  );
}

export default App;
