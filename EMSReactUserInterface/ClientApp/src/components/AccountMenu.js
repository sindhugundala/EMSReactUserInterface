import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, Paper } from '@material-ui/core';
import {  AccountCircle } from '@material-ui/icons';
import  Menu  from '@material-ui/core/Menu';
import { MenuItem } from '@material-ui/core';
import './NavMenu.css'
import { Login } from './Login';
import { useHistory } from "react-router-dom";
import { ResetPassword } from './ResetPassword';

function AccountMenu() {

    const[anchorEl, setAnchorEl] = useState(null);
    let history = useHistory();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfile = () => {
        setAnchorEl(null);
        history.push('/profile')
    };
    const handleResetPassword = () => {
        setAnchorEl(null);
        history.push('/resetpassword')
    };
    const handleLogout = () => {
        setAnchorEl(null);
        history.push('/')
    };
    const handleClose = () => { setAnchorEl(null);}

        return (
            <div>
                <IconButton edge="start" onClick={handleClick}>
                    <AccountCircle />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    keepMounted
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleProfile}>Profile</MenuItem>
                    <MenuItem onClick={handleResetPassword}>Reset Password</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </div>
        );
    }

export default AccountMenu;