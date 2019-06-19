import React, { Component } from "react";
import { EmployeeWrapperStyle } from "../style/index";
import CreateEmployeeForm from "../components/CreateEmployeeForm";
import { Link } from "react-router-dom";
import axios from "axios";

class EditEmployee extends Component {
  constructor() {
    super();
    this.state = {
      employeeDetail: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.employeeId;
    let self = this;
    axios
      .get(`https://supremecourtreactapp.herokuapp.com/api/v1/contacts/${id}`)
      .then(function(response) {
        self.setState({ employeeDetail: response.data.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    console.log("STATE VALUE", this.state.employeeDetail);
    const { employeeDetail } = this.state;
    return (
      <EmployeeWrapperStyle>
        <Link to="/"> List Employee</Link>
        <CreateEmployeeForm isEdit={true} setValue={employeeDetail} />
      </EmployeeWrapperStyle>
    );
  }
}

export default EditEmployee;
