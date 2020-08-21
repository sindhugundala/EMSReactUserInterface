import React, { Component } from 'react';
import { Employee } from './components/EmployeePortal/Employee';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './components/Auth/Login';
import './custom.css'
import { AddEmployee } from './components/EmployeePortal/AddEmployee';
import { EditEmployee } from './components/EmployeePortal/EditEmployee';
import {EmployeeLeaves } from './components/LeavePortal/EmployeeLeaves';
import  Home  from './components/Home';
import { ResetPassword } from './components/Auth/ResetPassword';
import { Profile } from './components/Auth/Profile';
import { ForgotPassword } from './components/Auth/ForgotPassword';


export default class App extends Component {
    static displayName = App.name;
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Route path='/' component={Login} exact />
                    <Switch>
                        <Route path='/home/:id' component={Home} exact />
                        <Route path='/employee' component={Employee} exact />
                        <Route path='/addEmployee' component={AddEmployee} exact />
                        <Route path='/editemployee/:id' component={EditEmployee} exact />
                        <Route path='/resetpassword' component={ResetPassword} exact />
                        <Route path='/forgotpassword' component={ForgotPassword} exact />
                        <Route path='/employeeleaves' component={EmployeeLeaves} exact />
                        <Route path='/profile/:id' component={Profile} exact />
                    </Switch>
                </div>
            </BrowserRouter>


        );
    }
}
