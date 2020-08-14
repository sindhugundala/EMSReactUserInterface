import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export class AddEmployee extends Component {
    static displayName = AddEmployee.name;

  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = { isChecked: false, selectedItem: "" }
      this.onChange = this.onChange.bind(this);
      this.toggleChangeCheckbox = this.toggleChangeCheckbox.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('https://localhost:44399/Employee', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                EmployeeId: event.target.inputEmployeeid.value,
                IsActive: this.state.isChecked,
                Title: event.target.inputTitle.value,
                FirstName: event.target.inputFirstName.value,
                MiddleName: event.target.inputMiddleName.value,
                LastName: event.target.inputLastName.value,
                DateOfBirth: event.target.inputDateOfBirth.value,
                DateOfJoin: event.target.inputDateOfJoining.value,
                MaritalStatus: event.target.selectItem.value,
                Designation: event.target.inputDesignation.value,
                ContactNumber: event.target.inputContactNumber.value,
                EmergencyContactNumber: event.target.inputEmergencyContactNumber.value,
                Email: event.target.inputEmail.value,
                LinkedinURL: event.target.inputLinkedInUrl.value,
                Experience: event.target.inputExperience.value,
                Salary: event.target.inputSalary.value,
                LastWorkingDay: event.target.inputLastWorkingDay.value
            })
        })
            .then(response => response.json(),
                alert("Successfully Added"),
                this.props.history.push('/employee'))
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
    }

    toggleChangeCheckbox() {
        this.setState({
            isChecked: !this.state.isChecked // flip boolean value
        }, function () {
            console.log(this.state);
        }.bind(this));
    }
    
    onChange = ({ target: { value } }) => {
        this.setState({ selectedItem: value })
    }


    render() {
        return (
            <div className="tablem4">
                <NavMenu />
                <Link to={'/employee/'}> <ArrowBackIcon /> Back</Link><br />
                <form className="inputstyle" onSubmit={this.handleSubmit}>
                    <label htmlFor="inputEmployeeid">Employee ID</label>
                    <input type="text" id="inputEmployeeid" className="form-control" placeholder="Employee Id" required="required" autoFocus />
                    <label htmlFor="inputTitle">Title</label>
                    <input type="text" id="inputTitle" className="form-control" placeholder="Title" required="required" autoFocus />
                    <label htmlFor="inputFirstName">First Name</label>
                    <input type="text" id="inputFirstName" className="form-control" placeholder="First Name" required="required" autoFocus />
                    <label htmlFor="inputMiddleName">Middle Name</label>
                    <input type="text" id="inputMiddleName" className="form-control" placeholder="Middle Name" required="required" autoFocus />
                    <label htmlFor="inputLastName">Last Name</label>
                    <input type="text" id="inputLastName" className="form-control" placeholder="Last Name" required="required" autoFocus />
                    <label htmlFor="inputEmail">Email</label>
                    <input type="text" id="inputEmail" className="form-control" placeholder="Email" required="required" />
                    <label htmlFor="inputContactNumber">Contact Number</label>
                    <input type="text" id="inputContactNumber" className="form-control" placeholder="Contact Number" required="required" autoFocus />
                    <label htmlFor="inputEmergencyContactNumber">Emergency Contact Number</label>
                    <input type="text" id="inputEmergencyContactNumber" className="form-control" placeholder="Emergency ContactNumber" required="required" autoFocus />
                    <label htmlFor="inputDateOfBirth">Date Of Birth</label>
                    <input type="datetime-local" id="inputDateOfBirth" className="form-control" placeholder="Date Of Birth" required="required" autoFocus />
                    <label htmlFor="inputDateOfJoining">Date Of Joining</label>
                    <input type="datetime-local" id="inputDateOfJoining" className="form-control" placeholder="Date Of Joining" required="required" autoFocus />
                    <label htmlFor="inputDesignation">Designation</label>
                    <input type="text" id="inputDesignation" className="form-control" placeholder="Designation" required="required" autoFocus />
                    <label htmlFor="inputExperience">Experience</label>
                    <input type="text" id="inputExperience" className="form-control" placeholder="Experience" required="required" autoFocus />
                    <label htmlFor="inputLastWorkingDay">Last Working Day</label>
                    <input type="datetime-local" id="inputLastWorkingDay" className="form-control" placeholder="Last Working Day" required="required" autoFocus />
                    <label htmlFor="inputSalary">Salary</label>
                    <input type="text" id="inputSalary" className="form-control" placeholder="Salary" required="required" autoFocus />
                    <label htmlFor="inputLinkedInUrl">LinkedInUrl</label>
                    <input type="text" id="inputLinkedInUrl" className="form-control" placeholder="LinkedInUrl" required="required" autoFocus />
                    <br /><label htmlFor="selectItem">Gender</label>&nbsp;
                      <select id="selectItem" defaultValue="Male" onChange={this.onChange}>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                    <br />
                    <label htmlFor="isActive">
                        Is Active &nbsp;
                     <input id="isActive"
                            name="isActive"
                            type="checkbox"
                            checked={this.state.isChecked}
                            onChange={this.toggleChangeCheckbox}
                            />
                    </label><br/>
                    <button className="btn btn-lg bt-primary" type="submit">Submit</button>
                </form>
                </div>
    );
  }
}
