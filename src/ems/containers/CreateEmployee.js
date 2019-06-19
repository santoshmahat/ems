import React, { Component } from "react";
import CreateEmployeeForm from "../components/CreateEmployeeForm";
import EmployeeTable from "./EmployeeTable";
import { EmployeeWrapperStyle, InnerDiv } from "../style/index";
import { Link } from "react-router-dom";
import axios from "axios";
const url = "https://supremecourtreactapp.herokuapp.com/api/v1/contacts";

class CreateEmployee extends Component {
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

  saveCreateEmployeeForm = () => {
    const { fullname, phone } = this.state;
    let self = this;
    axios
      .post(url, {
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
    console.log("DATA", this.props);
    return (
      <EmployeeWrapperStyle>
        <Link to="/"> List Employee</Link>
        <CreateEmployeeForm
          setValue={this.state}
          saveCreateEmployeeForm={this.saveCreateEmployeeForm}
          handleInputChange={this.handleInputChange}
        />
      </EmployeeWrapperStyle>
    );
  }
}

export default CreateEmployee;
