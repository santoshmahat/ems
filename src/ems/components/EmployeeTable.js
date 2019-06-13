import React from "react";
import { Link } from "react-router-dom";

export default props => (
  <div>
    <Link to="/"> Back To Home</Link>
    <table className="table">
      <thead>
        <tr>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Location</td>
          <td>Joined Date</td>
          <td>Image</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Arjun</td>
          <td>Ghimire</td>
          <td>Kathmandu</td>
          <td />
          <td>
            <img src="" style={{ height: "40px", width: "40px" }} />
          </td>
          <td>
            <button
              type="button"
              className="btn btn-danger"
              // onClick={() => props.deleteEmployee(employe.firstName)}
            >
              Delete
            </button>
            <Link to="/detail/1">
              <button className="btn btn-primary" type="button">
                View
              </button>
            </Link>
          </td>
        </tr>

        {/* {props.employees.map((employe) => {
        return (
          <tr key={employe.firstName}>
            <td>{employe.firstName}</td>
            <td>{employe.lastName}</td>
            <td>{employe.location}</td>
            <td>{employe.joinDate}</td>
            <td><img src={employe.image} style={{height:"40px", width:"40px"}}/></td>
            <td>
              <button type="button" className="btn btn-danger" onClick={()=>props.deleteEmployee(employe.firstName)}>Delete</button>
            </td>
          </tr>
        )
      })
      } */}
      </tbody>
    </table>
  </div>
);
