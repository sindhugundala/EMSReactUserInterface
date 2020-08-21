import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export class EditEmployee extends Component {
    static displayName = EditEmployee.name;

    constructor(props) {
        super(props);
        this.state = {
            employeeId: '', isChecked: false,title:'',firstName: '',middleName: '',lastName: '',dateOfBirth: '',dateOfJoin: '',maritalStatus: '',designation: '',contactNumber: '',emergencyContactNumber: '', email: '',linkedinURL: '',experience: '',salary:0,lastWorkingDay: '' }
        this.hadleInputChange = this.hadleInputChange.bind(this);
        this.toggleChangeCheckbox = this.toggleChangeCheckbox.bind(this);
    }

    componentWillMount() {
        this.getDetails();
    }

    getDetails() {
        let id = this.props.match.params.id;
        fetch('https://localhost:44399/Employee/' + this.props.match.params.id )
            .then(response => response.json())
            .then(data =>
                this.setState({
                    employeeId:id,
                    isChecked: data.isChecked,
                    title: data.title,
                    firstName: data.firstName,
                    middleName: data.middleName,
                    lastName: data.lastName,
                    dateOfBirth: data.dateOfBirth,
                    dateOfJoin: data.dateOfJoin,
                    maritalStatus: data.maritalStatus,
                    designation: data.designation,
                    contactNumber: data.contactNumber,
                    emergencyContactNumber: data.emergencyContactNumber,
                    email: data.email,
                    linkedinURL: data.linkedinURL,
                    experience: data.experience,
                    salary: data.salary,
                    lastWorkingDay: data.lastWorkingDay,
                    address1: data.address1,
                    state: data.state,
                    country: data.country
                }));
    }

    editEmployee(newEmployee) {
        let eId = this.props.match.params.id;
         axios.request({
            method: 'put',
             url: `https://localhost:44399/Employee/${eId}`,
             data: newEmployee
        }).then(response => {
            this.props.history.push('/employee');
        }).catch(err => console.log(err));
    }

    hadleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });

    }
    toggleChangeCheckbox() {
        this.setState({
            isChecked: !this.state.isChecked // flip boolean value
        }, function () {
            console.log(this.state);
        }.bind(this));
    }

    onSubmit(e) {
        const newEmployee = {
            employeeId: this.refs.employeeId.value,
            isChecked: this.refs.isChecked.value,
            title: this.refs.title.value,
            firstName: this.refs.firstName.value,
            middleName: this.refs.middleName.value,
            lastName: this.refs.lastName.value,
            dateOfBirth: this.refs.dateOfBirth.value,
            dateOfJoin: this.refs.dateOfJoin.value,
            maritalStatus: this.refs.maritalStatus.value,
            designation: this.refs.designation.value,
            contactNumber: this.refs.contactNumber.value,
            emergencyContactNumber: this.refs.emergencyContactNumber.value,
            email: this.refs.email.value,
            linkedinURL: this.refs.linkedinURL.value,
            experience: this.refs.experience.value,
            salary: this.refs.salary.value,
            lastWorkingDay: this.refs.lastWorkingDay.value,
            address1: this.refs.address1.value,
            state: this.refs.state.value,
            country: this.refs.country.value
        }
        this.editEmployee(newEmployee);
        e.preventDefault();
    }

    render() {
      return (
          <div className="tablem4">
              <Link to={'/employee/'}> <ArrowBackIcon /> Back</Link><br />
              <form className="inputstyle" onSubmit={this.onSubmit.bind(this)}>
                  <label htmlFor="employeeId" className="input-field">Employee ID</label>
                  <input type="text" className="form-control" name="employeeId" ref="employeeId" value={this.state.employeeId} disabled />
                  <label htmlFor="title"  className="input-field">Title</label>
                  <input type="text" className="form-control" name="title" ref="title" value={this.state.title} placeholder="Title" required="required" onChange={this.hadleInputChange} autoFocus />
                  <label htmlFor="firstName" className="input-field">First Name</label>
                  <input type="text" className="form-control" value={this.state.firstName} name="firstName" ref="firstName" onChange={this.hadleInputChange} placeholder="First Name" required="required" autoFocus />
                  <label htmlFor="middleName" className="input-field">Middle Name</label>
                  <input type="text" className="form-control" placeholder="Middle Name" value={this.state.middleName} name="middleName" ref="middleName" onChange={this.hadleInputChange} required="required" autoFocus />
                  <label htmlFor="lastName"  className="input-field">Last Name</label>
                  <input type="text" className="form-control" placeholder="Last Name" value={this.state.lastName} name="lastName" ref="lastName" onChange={this.hadleInputChange} required="required" autoFocus />
                  <label htmlFor="email" className="input-field">Email</label>
                  <input type="text" className="form-control" placeholder="Email" value={this.state.email} name="email" ref="email" onChange={this.hadleInputChange} required="required" />
                  <label htmlFor="contactNumber" className="input-field">Contact Number</label>
                  <input type="text" className="form-control" placeholder="Contact Number" value={this.state.contactNumber} name="contactNumber" ref="contactNumber"  onChange={this.hadleInputChange} required="required" autoFocus />
                  <label htmlFor="emergencyContactNumber" className="input-field">Emergency ContactNumber</label>
                  <input type="text" className="form-control" placeholder="Emergency ContactNumber" value={this.state.emergencyContactNumber} name="emergencyContactNumber" ref="emergencyContactNumber" onChange={this.hadleInputChange}  required="required" autoFocus />
                  <label htmlFor="dateOfBirth" className="input-field">Date Of Birth</label>
                  <input type="datetime-local" className="form-control" placeholder="Date Of Birth" value={this.state.dateOfBirth} name="dateOfBirth" ref="dateOfBirth" onChange={this.hadleInputChange} required="required" autoFocus />
                  <label htmlFor="dateOfJoin" className="input-field">Date Of Joining</label>
                  <input type="datetime-local" className="form-control" placeholder="Date Of Joining" value={this.state.dateOfJoin} name="dateOfJoin" ref="dateOfJoin" onChange={this.hadleInputChange}  required="required" autoFocus />
                  <label htmlFor="designation" className="input-field">Designation</label>
                  <input type="text" className="form-control" placeholder="Designation" value={this.state.designation} name="designation" ref="designation" onChange={this.hadleInputChange} required="required" autoFocus />
                  <label htmlFor="experience"  className="input-field">Experience</label>
                  <input type="text" className="form-control" placeholder="Experience" value={this.state.experience} name="experience" ref="experience" onChange={this.hadleInputChange}  required="required" autoFocus />
                  <label htmlFor="lastWorkingDay" className="input-field">Last Working Day</label>
                  <input type="datetime-local" className="form-control" placeholder="Last Working Day" value={this.state.lastWorkingDay} name="lastWorkingDay" ref="lastWorkingDay" onChange={this.hadleInputChange} required="required" autoFocus />
                  <label htmlFor="salary" className="input-field">Salary</label>
                  <input type="text" className="form-control" placeholder="Salary" value={this.state.salary} onChange={this.hadleInputChange} name="salary" ref="salary" required="required" autoFocus />
                  <label htmlFor="linkedinURL" className="input-field">LinkedInUrl</label>
                  <input type="text" className="form-control" placeholder="LinkedInUrl" value={this.state.linkedinURL} name="linkedinURL" ref="linkedinURL" onChange={this.hadleInputChange} required="required" autoFocus />
                  <label htmlFor="address1">Address</label>
                  <input type="text" className="form-control" placeholder="address1" value={this.state.address1} name="address1" ref="address1" onChange={this.hadleInputChange} required="required" autoFocus />
                  <label htmlFor="state">State</label>&nbsp;
                      <select className="form-control" name="state" ref="state" value={this.state.state} onChange={this.hadleInputChange}>
                      <option value="Telangana">Telangana</option>
                      <option value="AndhraPradesh">Andhra Pradesh</option>
                  </select>
                  <label htmlFor="country">Country</label>&nbsp;
                      <select className="form-control" name="country" ref="country" value={this.state.country} onChange={this.hadleInputChange}>
                      <option value="IND">India</option>
                      <option value="USA">United Sattes Of America</option>
                  </select>
                  <br /><label>Gender</label>&nbsp;
                      <select  name="maritalStatus" ref="maritalStatus" value={this.state.maritalStatus} onChange={this.hadleInputChange}>
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                  </select>
                  <br />
                  <label htmlFor="isChecked">
                      Is Active &nbsp;
                     <input id="isChecked"
                          name="isChecked"
                          type="checkbox"
                          ref="isChecked"
                          checked={this.state.isChecked}
                          onChange={this.toggleChangeCheckbox}
                      />
                  </label><br />
                  <button className="btn btn-lg bt-primary" type="submit">Submit</button>
              </form>
          </div>
    );
  }
}
