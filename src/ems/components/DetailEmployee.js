import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DetailEmployee extends Component {
  render() {
    console.log("PROPS", this.props);
    return (
      <div>
        <Link to="/"> Create Employee</Link>
        <Link to="/list"> List Employee</Link>
        <br />
        Details Page
      </div>
    );
  }
}
