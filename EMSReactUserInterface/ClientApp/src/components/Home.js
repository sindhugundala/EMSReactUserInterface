import React, { Component } from 'react';
import NavMenu from './NavMenu';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div className="tablem4">
            <NavMenu />
            <p>
                Welcome To Think4Solutions!
                </p>
            <p>
We are Digital consulting firm offering end - to- end solutions to Enterprises, Digital Agencies and Startups.
Think 4 solutions has achieved a well-known position in IT management services. We have been providing the best solutions to all our clients and have established ourselves very strong in the market just in a few years.

              
            </p>
      </div>
    );
  }
}
