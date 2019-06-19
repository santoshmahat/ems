import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
<<<<<<< HEAD
import { Spin, Message, message } from "antd";
const url = "https://supremecourtreactapp.herokuapp.com/api/v1/contacts/";

class EmployeeTable extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      loading: true
    };
  }

  componentDidMount() {
    // Make a request for a user with a given ID
=======
import { Spin, message } from "antd";

const url = "https://caf5c3f9.ngrok.io/api/v1/contacts/";

class EmployeeTable extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      loading: true
    };
  }

  componentDidMount() {
>>>>>>> 6380ed78e24e706e7f7f5246cbc72710be87d305
    let self = this;
    axios
      .get(url)
      .then(function(response) {
<<<<<<< HEAD
        // handle success
        self.setState({ employees: response.data.data, loading: false });
        message.success("Data loading Successfully");
        // console.log(response.data.data);
      })
      .catch(function(error) {
        // handle error
        self.setState({ loading: false });
        message.error("Failed to load Data");
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }

  handleDelete = employeeId => {
    console.log("Hello", employeeId, this.state.employees);
    const filterEmployees = this.state.employees.filter(employee => {
      return employee.id !== employeeId;
    });
    this.setState({ employees: filterEmployees });
    axios
      .delete(
        `https://supremecourtreactapp.herokuapp.com/api/v1/contacts/${employeeId}`
      )
      .then(function(response) {
        // handle success
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
=======
        self.setState({ employees: response.data.data, loading: false });
        message.success("Data loading successfully");
      })
      .catch(function(error) {
        self.setState({ loading: false });
        message.error("Failed to load data");
      });
  }

  handleDelete = id => {
    console.log("HELLO", id);
>>>>>>> 6380ed78e24e706e7f7f5246cbc72710be87d305
  };

  render() {
    console.log("EMPLOYEES", this.state.employees);
    return (
      <div>
        <Link to="/"> Back To Home</Link>
        <Link to="/create"> Create</Link>
        <Spin spinning={this.state.loading}>
          <table className="table">
            <thead>
              <tr>
<<<<<<< HEAD
                <td>Full Name</td>
=======
                <td>Fullname</td>
>>>>>>> 6380ed78e24e706e7f7f5246cbc72710be87d305
                <td>Phone</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map(employee => {
                return (
                  <tr key={employee.id}>
                    <td>{employee.fullname}</td>
                    <td>{employee.phone}</td>
<<<<<<< HEAD

                    <td />

=======
>>>>>>> 6380ed78e24e706e7f7f5246cbc72710be87d305
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(employee.id)}
                      >
                        Delete
                      </button>
                      <Link to={`/detail/${employee.id}`}>
                        <button className="btn btn-primary" type="button">
                          View
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Spin>
      </div>
    );
  }
}
<<<<<<< HEAD
=======

>>>>>>> 6380ed78e24e706e7f7f5246cbc72710be87d305
export default EmployeeTable;
