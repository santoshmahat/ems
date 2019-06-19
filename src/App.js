import React from "react";
import CreateEmployee from "./ems/containers/CreateEmployee";
import { Route } from "react-router-dom";
import EmployeeTable from "./ems/containers/EmployeeTable";
import DetailEmployee from "./ems/containers/DetailEmployee";

function App() {
  return (
    <div>
      <Route exact path="/" component={EmployeeTable} />
      <Route path="/create" component={CreateEmployee} />
      <Route path="/detail/:employeeId" component={DetailEmployee} />
    </div>
  );
}

export default App;
