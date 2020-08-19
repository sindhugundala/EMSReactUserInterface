import React, { Component } from 'react';
import axios from 'axios';
import NavMenu from '../NavMenu';


export class ResetPassword extends Component {
    static displayName = ResetPassword.name;

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            showSubmit: false,
            users: [],
            count: 0,
            errorMessage:''
        }
    }
  

    componentDidMount () {
            axios.request({
                method: 'GET',
                url: `https://localhost:44399/Login`,
            }).then(response => {
                this.setState({ users: response.data });
            }).catch(err => console.log(err));
    }

    updatePassword = (newPassword) => {
        console.log(newPassword);
        axios.request({
            method: 'put',
            url: `https://localhost:44399/Login/${newPassword.userId}`,
            data: newPassword
        }).then(response => {
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }
    onSubmit = (e) => {
        const newPassword = {
            userId: this.refs.userId.value,
            password: this.refs.NewPassword.value,
        }
        if (this.state.users.map(x => {

            if (x.password === this.refs.oldPassword.value) {
                this.updatePassword(newPassword);
                this.setState({ count: 1, errorMessage: '' });
            }
            
        }))
        
            this.setState({ errorMessage: 'Old Password doesnot match with your previous password.So, couldnot update your password.' });
        
        e.preventDefault();
    }

    render() {
        const { errorMessage } = this.state;
        const { users =[]} = this.state;

        return (
                    <div>
                        <NavMenu />
                    <div className="fill-window resetform">
                        <div className="text-center">

                        <form className="form-signin" onSubmit={this.onSubmit}>

                            <div class="form-group">
                                <label className="lblShow">Email address </label>
                                <input type="email" ref="userId" name="userId" className="form-control" placeholder="Email address" required="required" autoFocus />
                            </div>
                            <div class="form-group">
                            <label className="lblShow" htmlFor="oldPassword">Password</label>
                                <input type="password" name="oldPassword" ref="oldPassword" className="form-control" placeholder="Old Password" required="required" />
                            </div>
                            <div class="form-group">
                            <label className="lblShow" htmlFor="NewPassword">Password</label>
                                <input type="password" name="NewPassword" ref="NewPassword" className="form-control" placeholder="New Password" required="required" />
                            </div>
                            <div class="form-group">
                            <label className="lblShow" htmlFor="confirmPassword">Confirm Password</label>
                                <input type="password" name="confirmPassword" ref="confirmPassword" className="form-control" placeholder="Confirm Password" required="required" />
                            </div>
                            <button className="btn btn-lg btn-primary" type="submit">Submit</button>
                            {this.state.errorMessage &&
                                <div><h8 className="error"> {this.state.errorMessage} </h8></div>}
                            </form>
                        </div>
                        </div>
                    </div>
        );
  }
}
