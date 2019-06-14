import React from "react";
import { Route } from "react-router-dom";
import CreateEmployee from "./ems/containers/CreateEmployee";
import EmployeeTable from "./ems/containers/EmployeeTable";
import DetailEmployee from "./ems/containers/DetailEmployee";

function App() {
  return (
    <div>
      <Route exact path="/" component={EmployeeTable} />
      <Route path="/create" component={CreateEmployee} />
      <Route path="/detail/:categoryId" component={DetailEmployee} />
    </div>
  );
}

export default App;
