import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Spin, message, Popconfirm } from "antd";

const url = "https://supremecourtreactapp.herokuapp.com/api/v1/contacts";

class EmployeeTable extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      loading: true
    };
  }

  componentDidMount() {
    let self = this;
    axios
      .get(url)
      .then(function(response) {
        self.setState({ employees: response.data.data, loading: false });
        message.success("Data loading successfully");
      })
      .catch(function(error) {
        self.setState({ loading: false });
        message.error("Failed to load data");
      });
  }

  handleDelete = id => {
    const filterEmployees = this.state.employees.filter(employee => {
      return employee.id !== id;
    });
    this.setState({
      employees: filterEmployees
    });
    let self = this;
    axios
      .delete(
        `https://supremecourtreactapp.herokuapp.com/api/v1/contacts/${id}`
      )
      .then(function(response) {
        self.setState({
          loading: false
        });
        message.success("data loading Successfully");
      })
      .catch(function(error) {
        self.setState({ loading: false });
      });
  };

  render() {
    return (
      <div>
        <Link to="/"> Back To Home</Link>
        <Link to="/create"> Create</Link>
        <Spin spinning={this.state.loading}>
          <table className="table">
            <thead>
              <tr>
                <td>Fullname</td>
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
                    <td>
                      <Popconfirm
                        title="Are you sure delete this task?"
                        onConfirm={() => this.handleDelete(employee.id)}
                        okText="Yes"
                        cancelText="No"
                      >
                        <button type="button" className="btn btn-danger">
                          Delete
                        </button>
                      </Popconfirm>
                      <Link to={`/detail/${employee.id}`}>
                        <button className="btn btn-primary" type="button">
                          View
                        </button>
                      </Link>
                      <Link to={`/edit/${employee.id}`}>
                        <button className="btn btn-success" type="button">
                          Edit
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
