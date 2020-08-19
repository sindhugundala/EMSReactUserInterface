import React, { Component } from 'react';
import axios from 'axios';
import NavMenu from '../NavMenu';
import { IconButton } from '@material-ui/core';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import { Login } from './Login';


export class NavigationInMenu extends Component {
    static displayName = NavigationInMenu.name;
    _isMounted = false;
    abortController = new AbortController();

    constructor(props) {
        super(props);
        this.state = {
            users: '',
            name:''
        }
       // this.setState({ name: this.props.value });
    }
  
    componentDidMount() {
        console.log("call");
        this._isMounted = true;
        this.handleClick = this.handleClick.bind(this);
        this.setState({ name: this.props.value });
        console.log("Name", this.props.value);

        fetch('https://localhost:44399/Employee', { signal: this.abortController.signal })
                .then(response => response.json())
                .then(data => {
                    if (data.email === this.props.value) {
                        this.setState({ users: data.firstName });
                        console.log("FirstName", this.state.users);
                    }

                    this.setState({ deps: data });
                });
        
    
    }
    componentWillUnmount() {
        this._isMounted = false;
        this.abortController.abort();
    }

    handleClick = () => {
        this.props.history.push('/');
    }
    

render() {

        return (
         
            <div>

                <IconButton edge="start" onClick={this.handleClick}>
                    <HomeTwoToneIcon style={{ color: 'white' }} />
                </IconButton>          
              
                    </div>
        );
  }
}
