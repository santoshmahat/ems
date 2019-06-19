import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
    let self = this;
    axios
      .get(url)
      .then(function(response) {
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
                <td>Full Name</td>
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

                    <td />

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
export default EmployeeTable;
