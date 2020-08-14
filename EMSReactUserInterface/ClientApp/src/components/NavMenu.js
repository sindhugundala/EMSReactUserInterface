import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, Paper } from '@material-ui/core';
import { Menu, AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { EmployeeLeaves } from './EmployeeLeaves';
import { Home } from './Home';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

function NavMenu() {
    const [open, setOpen] = useState(false);

    const [openL, setOpenL] = useState(false);
    
    const handleDrawer = () => {
        setOpen(true);
    };
    const styles = (theme) => ({
        toolbar: theme.mixins.toolbar,
    });


    const handleClick = () => {
        setOpenL(!openL);
    };

     return (
      <div>
            <AppBar >
                <Toolbar>
                     <IconButton edge="start" onClick={handleDrawer}  color="inherit" aria-label="menu">
                    <Menu />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: 1}}>
                         EMPLOYEE MANAGEMENT SYSTEM
                  </Typography>


                   
                        
                        
                     <ListGroup>
                         <ListGroup.Item action href="/register">
                             Reset Password
                                    </ListGroup.Item>
                     </ListGroup>

                    

                    


                </Toolbar>
             </AppBar>


             <Paper>
                 <div style={{ styles }} />
                <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
                 <div style={{ width: "230px" }}>
                         <img className="mb-4" src="logoT4S.png" alt="" width="230" height="60" />
                     <nav className="blue darken-3">
                         <div className="nav-wrapper">
                                 <ListGroup>
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