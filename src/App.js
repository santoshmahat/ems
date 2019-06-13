import React from "react";
import CreateEmployee from "./ems/containers/CreateEmployee";
import { Route } from "react-router-dom";
import EmployeeTable from "./ems/components/EmployeeTable";
import DetailEmployee from "./ems/components/DetailEmployee";

function App() {
  return (
    <div>
      <Route exact path="/" component={CreateEmployee} />
      <Route path="/list" component={EmployeeTable} />
      <Route path="/detail/:categoryId" component={DetailEmployee} />
    </div>
  );
}

export default App;
