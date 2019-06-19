import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card } from "antd";

const url = "https://supremecourtreactapp.herokuapp.com/api/v1/contacts";

export default class DetailEmployee extends Component {
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
        // handle success
        console.log(response);
        self.setState({ employeeDetail: response.data.data });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    console.log("PROPS", this.props);
    const { employeeDetail } = this.state;
    return (
      <div>
        <Link to="/create"> Create Employee</Link>
        <Link to="/"> List Employee</Link>
        <br />

        <Card title="Employee Detail" style={{ width: 300 }}>
          <h1>FullName :{employeeDetail.fullname}</h1>
          <p>Phone:{employeeDetail.phone}</p>
        </Card>
      </div>
    );
  }
}
