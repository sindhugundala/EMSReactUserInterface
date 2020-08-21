import React, { Component } from 'react';
import axios from 'axios';


export class Profile extends Component {
    static displayName = Profile.name;

    constructor(props) {
        super(props);
        this.state = {
            employeeInfo: [],
            user:''
        }
        console.log("id", this.props.id);
    }

    componentWillMount() {
        this.getIdWithEmail();
    }
    handleback() {
        this.props.history.push('/home/' + this.props.id)
    }
    getIdWithEmail() {

        let id = this.props.match.params.id;
        fetch('https://localhost:44399/Employee')
            .then(response => response.json())
            .then(data => {
                this.setState({ employeeInfo: data })
                if (this.state.employeeInfo.map(x => {
                    if (x.email === id)
                        this.setState({ user: x });
                    console.log("user", this.state.user);
                })); });
    }

    getDetails() {
        let id = this.props.match.params.id;
        fetch('https://localhost:44399/Employee/' + this.props.id)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    employeeId: id,
                    title: data.title,
                    firstName: data.firstName,
                    middleName: data.middleName,
                    lastName: data.lastName,
                    designation: data.designation,
                    contactNumber: data.contactNumber,
                    emergencyContactNumber: data.emergencyContactNumber,
                    email: data.email
                    
                }));
    }
   
    render() {
   
        return (
            <div>
                <button className="btn btn-lg bt-primary" type="submit" onClick={this.handleback}>Back</button>
                <form className="tablem4 inputstyle" style={{ float: "left" }}>
                    
                    <label htmlFor="employeeId" className="input-field">Employee ID</label>
                    <input type="text" className="form-control" name="employeeId" ref="employeeId" value={this.state.user.employeeId} disabled />
                    <label htmlFor="title" className="input-field">Title</label>
                    <input type="text" className="form-control" name="title" ref="title" value={this.state.user.title} placeholder="Title" required="required" onChange={this.hadleInputChange}  disabled autoFocus />
                    <label htmlFor="firstName" className="input-field">First Name</label>
                    <input type="text" className="form-control" value={this.state.user.firstName} name="firstName" ref="firstName" onChange={this.hadleInputChange} placeholder="First Name" required="required" disabled autoFocus />
                    <label htmlFor="middleName" className="input-field">Middle Name</label>
                    <input type="text" className="form-control" placeholder="Middle Name" value={this.state.user.middleName} name="middleName" ref="middleName" onChange={this.hadleInputChange} required="required" disabled autoFocus />
                    <label htmlFor="lastName" className="input-field">Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name" value={this.state.user.lastName} name="lastName" ref="lastName" onChange={this.hadleInputChange} required="required" disabled autoFocus />
                    <label htmlFor="email" className="input-field">Email</label>
                    <input type="text" className="form-control" placeholder="Email" value={this.state.user.email} name="email" ref="email" onChange={this.hadleInputChange} disabled required="required" />
                    <label htmlFor="contactNumber" className="input-field">Contact Number</label>
                    <input type="text" className="form-control" placeholder="Contact Number" value={this.state.user.contactNumber} name="contactNumber" ref="contactNumber" onChange={this.hadleInputChange} required="required" autoFocus /><br/>
                    <div>
                        <label htmlFor="reset password" >Reset Password</label> &nbsp;
                         <a className="hyperlink" href="/resetpassword">Reset Password</a>
                        
                    </div>
                        <button className="btn btn-lg bt-primary" type="submit">Submit</button>&nbsp;
                  
                    </form>
                   
            </div>
    );
  }
}
