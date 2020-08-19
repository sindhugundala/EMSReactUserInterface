import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, Paper } from '@material-ui/core';
import {  AccountCircle,Menu } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Select from '@material-ui/core/Select';
import './NavMenu.css'
import AccountMenu from './Auth/AccountMenu';
import {NavigationInMenu} from './Auth/NavigationInMenu';


function NavMenu() {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleDrawer = () => {
        setOpen(true);
    };
    const styles = (theme) => ({
        toolbar: theme.mixins.toolbar,
        color: 'black',
        background:'black'
    });

     return (
         <div>
             <AppBar style={{ fontFamily: 'Apple Chancery, cursive', background: 'darkblue' }}>
                <Toolbar>
                     <img src="logo.png" alt="" width="50" height="30" />
                     <Typography variant="h6" style={{ flexGrow: 1, fontFamily: 'serif', color: 'yellow', fontSize: 'xx-large' }}>
                         THINK4SOLUTIONS
                  </Typography>
                     <NavigationInMenu />
                     <AccountMenu />
                    
                </Toolbar>
             </AppBar>


        
        </div>
    );
}

export default NavMenu;