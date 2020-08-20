import React, { Component } from 'react';
import { Employee } from './components/EmployeePortal/Employee';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './components/Auth/Login';
import './custom.css'
import { AddEmployee } from './components/EmployeePortal/AddEmployee';
import { EditEmployee } from './components/EmployeePortal/EditEmployee';
import NavMenu  from './components/NavMenu';
import {EmployeeLeaves } from './components/LeavePortal/EmployeeLeaves';
import  Home  from './components/Home';
import { ResetPassword } from './components/Auth/ResetPassword';
import AccountMenu from './components/Auth/AccountMenu';
import { Profile } from './components/Auth/Profile';
import { ForgotPassword } from './components/Auth/ForgotPassword';
import NavigationInMenu  from './components/Auth/NavigationInMenu';

export default class App extends Component {
    static displayName = App.name;
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Route path='/' component={Login} exact />
                    <Switch>
                        <Route path='/navmenu' component={NavMenu} exact />
                        <Route path='/home' component={Home} exact />
                        <Route path='/employee' component={Employee} exact />
                        <Route path='/addEmployee' component={AddEmployee} exact />
                        <Route path='/editemployee/:id' component={EditEmployee} exact />
                        <Route path='/resetpassword' component={ResetPassword} exact />
                        <Route path='/forgotpassword' component={ForgotPassword} exact />
                        <Route path='/employeeleaves' component={EmployeeLeaves} exact />
                        <Route path='/accountmenu' component={AccountMenu} exact />
                        <Route path='/profile' component={Profile} exact />
                        <Route path='/navigationinmenu' component={NavigationInMenu} exact />
                    </Switch>
                </div>
            </BrowserRouter>


        );
    }
}
