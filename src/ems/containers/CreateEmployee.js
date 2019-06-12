import React, { Component } from 'react';
import CreateEmployeeForm from '../components/CreateEmployeeForm';
import EmployeeTable from '../components/EmployeeTable';
import { Url } from 'url';

class CreateEmployee extends Component {

  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      location: '',
      joinDate: '',
      image: '',
      employees: []

    }
  }

  handleInputChange = (event) => {
    if (event.target.name === "image") {
      this.setState({
        image:(event.target.files && event.target.files[0]) ? URL.createObjectURL(event.target.files[0]) : ''
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  deleteEmployee = (firstName) => {
    const { employees } = this.state;
    const newEmployees = employees.filter((employee)=> (
      employee.firstName !==firstName
    ))
    this.setState({
      employees:newEmployees
    })
  }

  saveCreateEmployeeForm = () => {
    const { firstName, lastName, location, joinDate, image, employees } = this.state;
    const employee = {
      firstName,
      lastName,
      location,
      joinDate,
      image
    }
    employees.push(employee);
    this.setState({
      employees: employees
    })
  }

  render() {
    const { employees } = this.state;
    return (
      <div>
        <CreateEmployeeForm
          saveCreateEmployeeForm={this.saveCreateEmployeeForm}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeTable
          employees={employees}
          deleteEmployee = {this.deleteEmployee}
        />
      </div>
    )
  }
}

export default CreateEmployee;


