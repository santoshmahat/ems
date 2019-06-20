import React from "react";
import { Route } from "react-router-dom";
import CreateEmployee from "./ems/containers/CreateEmployee";
import EmployeeTable from "./ems/containers/EmployeeTable";
import DetailEmployee from "./ems/containers/DetailEmployee";
import EditEmployee from "./ems/containers/EditEmployee";

function App() {
  return (
    <div>
      <Route exact path="/" component={EmployeeTable} />
      <Route path="/create" component={CreateEmployee} />
      <Route path="/detail/:employeeId" component={DetailEmployee} />
      <Route path="/edit/:employeeId" component={EditEmployee} />
    </div>
  );
}

export default App;
