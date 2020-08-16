import React, { Component } from 'react';
import axios from 'axios';
import NavMenu from './NavMenu';
import '../custom.css'

export class ResetPassword extends Component {
    static displayName = ResetPassword.name;

    constructor(props) {
        super(props);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
        this.state = {
         
        }
    }
    updatePassword = (newPassword) => {
        axios.request({
            method: 'put',
            url: `https://localhost:44399/Login/${newPassword.userId}/${newPassword.password}`,
            data: newPassword
        }).then(response => {
            this.props.history.push('/login');
        }).catch(err => console.log(err));
    }
    handleSubmitClick = (e) => {
        const newPassword = {
            userId: this.refs.userId.value,
            password: this.refs.password.value,
            title: this.refs.title.value,
                  }
        this.updatePassword(newPassword);
        e.preventDefault();
    }

    render() {
        return (
            <div>
            <NavMenu />
                <div className="fill-window resetform">
            <div className="text-center">
                <form className="form-signin" onSubmit={this.onSubmit}>
                            <label htmlFor="userId" className="sr-only">Email address</label>
                            <input type="email" ref="userId" name="userId" className="form-control" placeholder="Email address" required="required" autoFocus /><br/>
                    <label htmlFor="oldPassword" className="sr-only">Password</label>
                            <input type="password" name="oldPassword" ref="oldPassword" className="form-control" placeholder="Old Password" required="required" /><br/>
                    <label htmlFor="NewPassword" className="sr-only">Password</label>
                            <input type="password" name="NewPassword" ref="NewPassword" className="form-control" placeholder="New Password" required="required" /><br/>
                    <button className="btn btn-lg btn-primary" type="submit">Reset Password</button>

                </form>
            </div>
                </div>
            </div>
    );
  }
}
