import React, { Component } from 'react';
import { Employee } from './components/Employee';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './components/Login';
import './custom.css'
import { AddEmployee } from './components/AddEmployee';
import { EditEmployee } from './components/EditEmployee';
import NavMenu  from './components/NavMenu';
import { EmployeeLeaves } from './components/EmployeeLeaves';
import { Home } from './components/Home';
import { ResetPassword } from './components/ResetPassword';

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
                        <Route path='/employeeleaves' component={EmployeeLeaves} exact />
                    </Switch>
                </div>
            </BrowserRouter>


        );
    }
}
