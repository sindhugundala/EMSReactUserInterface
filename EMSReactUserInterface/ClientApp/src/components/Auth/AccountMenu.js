import React, { useState } from 'react';
import {IconButton } from '@material-ui/core';
import {  AccountCircle } from '@material-ui/icons';
import  Menu  from '@material-ui/core/Menu';
import { MenuItem } from '@material-ui/core';
import '../NavMenu.css'
import { useHistory } from "react-router-dom";
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';

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
                    <AccountCircleTwoToneIcon style={{color:'white'}} />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    keepMounted
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleProfile}>Profile</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </div>
        );
    }

export default AccountMenu;