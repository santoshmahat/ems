import React from 'react';

export default (props) => (
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
      {props.employees.map((employe) => {
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
      }
    </tbody>
  </table>
)