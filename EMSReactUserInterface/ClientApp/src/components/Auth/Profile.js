import React, { Component } from 'react';
import axios from 'axios';
import NavMenu from '../NavMenu';

export class Profile extends Component {
    static displayName = Profile.name;

    constructor(props) {
        super(props);
        this.state = {
         
        }
        console.log(props);
    }


   
    render() {
        return (
            <div>
                <NavMenu />
                <form className="tablem4 inputstyle" style={{ float: "left" }}>
                    <label htmlFor="employeeId" className="input-field">Employee ID</label>
                    <input type="text" className="form-control" name="employeeId" ref="employeeId" value={this.state.employeeId} disabled />
                    <label htmlFor="title" className="input-field">Title</label>
                    <input type="text" className="form-control" name="title" ref="title" value={this.state.title} placeholder="Title" required="required" onChange={this.hadleInputChange} autoFocus />
                    <label htmlFor="firstName" className="input-field">First Name</label>
                    <input type="text" className="form-control" value={this.state.firstName} name="firstName" ref="firstName" onChange={this.hadleInputChange} placeholder="First Name" required="required" autoFocus />
                    <label htmlFor="middleName" className="input-field">Middle Name</label>
                    <input type="text" className="form-control" placeholder="Middle Name" value={this.state.middleName} name="middleName" ref="middleName" onChange={this.hadleInputChange} required="required" autoFocus />
                    <label htmlFor="lastName" className="input-field">Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name" value={this.state.lastName} name="lastName" ref="lastName" onChange={this.hadleInputChange} required="required" autoFocus />
                    <label htmlFor="email" className="input-field">Email</label>
                    <input type="text" className="form-control" placeholder="Email" value={this.state.email} name="email" ref="email" onChange={this.hadleInputChange} required="required" />
                    <label htmlFor="contactNumber" className="input-field">Contact Number</label>
                    <input type="text" className="form-control" placeholder="Contact Number" value={this.state.contactNumber} name="contactNumber" ref="contactNumber" onChange={this.hadleInputChange} required="required" autoFocus /><br/>
                    <div>
                        <label htmlFor="reset password" >Reset Password</label> &nbsp;
                         <a className="hyperlink" href="/resetpassword">Reset Password</a>
                    </div>
                        <button className="btn btn-lg bt-primary" type="submit">Submit</button>
                     
                    </form>
                   
            </div>
    );
  }
}
