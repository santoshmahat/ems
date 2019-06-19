import React, { Component } from "react";
import { EmployeeWrapperStyle } from "../style/index";
import CreateEmployeeForm from "../components/CreateEmployeeForm";
import { Link } from "react-router-dom";
import axios from "axios";

class EditEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      phone: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidMount() {
    const id = this.props.match.params.employeeId;
    let self = this;
    axios
      .get(`https://supremecourtreactapp.herokuapp.com/api/v1/contacts/${id}`)
      .then(function(response) {
        const employeeDetail = response.data.data;
        self.setState({
          fullname: employeeDetail.fullname,
          phone: employeeDetail.phone
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  updateCreateEmployeeForm = () => {
    const { fullname, phone } = this.state;
    let self = this;
    const id = this.props.match.params.employeeId;
    axios
      .put(`https://supremecourtreactapp.herokuapp.com/api/v1/contacts/${id}`, {
        fullname,
        phone
      })
      .then(function(response) {
        console.log(response);
        self.props.history.push("/");
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <EmployeeWrapperStyle>
        <Link to="/"> List Employee</Link>
        <CreateEmployeeForm
          isEdit={true}
          setValue={this.state}
          updateCreateEmployeeForm={this.updateCreateEmployeeForm}
          handleInputChange={this.handleInputChange}
        />
      </EmployeeWrapperStyle>
    );
  }
}

export default EditEmployee;
