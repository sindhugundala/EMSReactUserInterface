import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

export class EmployeeLeaves extends Component {
    static displayName = EmployeeLeaves.name;

  render () {
    return (
        <div className="tablem4">
        <NavMenu />
            Welcome to Leave Portal
      </div>
    );
  }
}
