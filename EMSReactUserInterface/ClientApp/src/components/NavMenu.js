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
import  AccountMenu  from './AccountMenu';

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

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

     return (
         <div>
             <AppBar style={{ background: 'rgb(4, 66, 152)',fontFamily: 'Apple Chancery, cursive'}}>
                <Toolbar>
                     <IconButton edge="start" onClick={handleDrawer}  color="inherit" aria-label="menu">
                    <Menu />
                </IconButton>
                     <Typography variant="h6" style={{ flexGrow: 1, fontFamily: 'Apple Chancery, cursive'}}>
                         EMPLOYEEMANAGEMENTSYSTEM
                  </Typography>
                     <AccountMenu/>
                </Toolbar>
             </AppBar>


             <Paper>
                 <div/>
                 <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
                 <div style={{ width: "230px" }}>
                         <nav className="blue darken-3" >
                             <div className="nav-wrapper">
                                 <ListGroup>
                                     <ListGroup.Item>
                                         Think4Solutions
                                    </ListGroup.Item>
                                     <ListGroup.Item action href="/home">
                                         Home
                                    </ListGroup.Item>
                                     <ListGroup.Item action href="/employee">
                                         Employee Portal
                                  </ListGroup.Item>
                                     <ListGroup.Item action href="/employeeleaves">
                                         Leave Portal
                                  </ListGroup.Item>
                                 </ListGroup>
                         </div>
                     </nav>
                 </div>
                 </Drawer>
                 </Paper>
        </div>
    );
}

export default NavMenu;