import React, { Component } from 'react';
import axios from 'axios';
import NavMenu from './NavMenu';
import '../custom.css'

export class Profile extends Component {
    static displayName = Profile.name;

    constructor(props) {
        super(props);
        this.state = {
         
        }
    }
   
    render() {
        return (
            <div>
                <NavMenu />
                
               
            </div>
    );
  }
}
