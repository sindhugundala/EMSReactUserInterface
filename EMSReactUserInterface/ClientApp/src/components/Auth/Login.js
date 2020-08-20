import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import {Nav}  from 'react-bootstrap';
import  NavigationInMenu  from './NavigationInMenu';
import { EmployeeLeaves } from '../LeavePortal/EmployeeLeaves';
import { Profile } from './Profile';

export class Login extends Component {
    static displayName = Login.name;
   // _isMounted = false;

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username: '',
            password: '',
            errorMessage: '',
        }
    }
    handleSubmit = (loginDetails) => {
       // this._isMounted = true;
        axios.request({
            method: 'GET',
            url: `https://localhost:44399/Login/${loginDetails.userId}/${loginDetails.password}`,
        }).then(response => {
            if (response.data) {
                this.setState({ username: loginDetails.userId });

                this.props.history.push('/home');
               
            }
            this.setState({ errorMessage: 'Your login credentials could not be verified, please try again' })
        }).catch(err => this.setState({ errorMessage: err.message }));

    }
    onSubmit(e) {
        const loginDetails = {
            userId: this.refs.userId.value,
            password: this.refs.password.value,
        }
        
        this.handleSubmit(loginDetails);
        e.preventDefault();
    }

    handleSubmitClick = () => {
        this.props.history.push("/home");

    }
   
    //componentWillUnmount() {
    //    this._isMounted = false;
    //}

    render() {
    
        return (
         
            <div className="bg fill-window">
            
                <div className="text-center">
                    <form className="form-signin" onSubmit={this.onSubmit}>
                        <img className="mb-4" src="logoT4S.png" alt="" width="230" height="45" />
                        <h1 className="h3 mb-3 font-weight-normal signin">SIGN IN</h1>
                        <label htmlFor="userId" className="sr-only">Email address</label>
                        <input type="email" ref="userId" name="userId" className="form-control" placeholder="Email address" required="required" autoFocus />&nbsp;
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input type="password" name="password" ref="password" className="form-control" placeholder="Password" required="required" />
                        <div>
                            <a className="hyperlink" href="/resetpassword">Reset Password</a>
                            <a className="hyperlink" href="/forgotpassword">Forgot Password</a>
                        </div>
                        <button className="btn btn-lg btn-primary" type="submit">Login</button>
                        {this.state.errorMessage &&
                            <label className="mb-3 font-weight-normal error"> {this.state.errorMessage} </label>}
                        {this.state.username && <NavigationInMenu value={this.state.username} />}
                    </form>
                </div>
            </div>
        );
    }

}