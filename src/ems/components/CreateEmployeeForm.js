import React from 'react';

const CreateEmployeeForm = (props) => (
  <div>
    <form>
      <h2>Create Employee Form</h2>
      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <input onChange={props.handleInputChange} type="text" name="firstName" id="firstName" className="form-control" placeholder="First Name" />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <input onChange={props.handleInputChange}  type="text" name="lastName" id="lastName" className="form-control" placeholder="Last Name" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <input onChange={props.handleInputChange}  type="text" name="location" id="location" className="form-control" placeholder="Location" />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <input onChange={props.handleInputChange}  type="text" name="joinDate" id="joinDate" className="form-control" placeholder="Join Date" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <input onChange={props.handleInputChange}  type="file" name="image" id="image" className="form-control" placeholder="Upload Image" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <button onClick={props.saveCreateEmployeeForm} type="button" className="btn btn-primary" id="btnSave">Save</button>
          </div>
        </div>
      </div>
    </form>
  </div>
)
export default CreateEmployeeForm;