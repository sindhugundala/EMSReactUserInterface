import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

export class Login extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username: '',
            password: '',
            errorMessage: ''
           
        }
    }
    handleSubmit = (loginDetails) => {
        axios.request({
            method: 'GET',
            url: `https://localhost:44399/Login/${loginDetails.userId}/${loginDetails.password}`,
        }).then(response => {
            if (response.data) {
                this.props.history.push('/home')
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

    render() {

        return (
            <div className="bg fill-window">
                <div className="text-center">
                    <form className="form-signin" onSubmit={this.onSubmit}>
                        <img className="mb-4" src="logoT4S.png" alt="" width="230" height="45" />
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label htmlFor="userId" className="sr-only">Email address</label>
                        <input type="email" ref="userId" name="userId" className="form-control" placeholder="Email address" required="required" autoFocus />
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input type="password" name="password" ref="password" className="form-control" placeholder="Password" required="required" />
                        <button className="btn btn-lg btn-primary" type="submit">Sign in</button>
                        {this.state.errorMessage &&
                            <label className="mb-3 font-weight-normal error"> {this.state.errorMessage} </label>}
                    </form>
                </div>
            </div>
        );
    }

}