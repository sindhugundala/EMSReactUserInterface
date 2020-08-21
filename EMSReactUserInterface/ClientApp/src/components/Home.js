import React, { Component, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';
import cyan from '@material-ui/core/colors/cyan';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import { useHistory } from "react-router";
import { Profile } from './Auth/Profile';
import { IconButton } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import { MenuItem } from '@material-ui/core';
import './NavMenu.css'
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import { AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 10,
        backgroundColor: pink[500]
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
const uStyle = makeStyles({
    root: {
        minWidth: 10,
        backgroundColor: cyan[500]
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

 function Home (props){

     /*Home*/
     const classes = useStyles();
     const c = uStyle();
     const history = useHistory();
     let id = props.match.params.id;
     console.log("id", id);

     const handleLeaves = (event) => {

        props.history.push('/employeeleaves');
    }
     const handleEmployees = (event) => {
         props.history.push('/employee');
     }

     /*Account Menu*/
     const [anchorEl, setAnchorEl] = useState(null);
   /* let history = useHistory();*/

     const handleClick = (event) => {
         setAnchorEl(event.currentTarget);
     };

     const handleProfile = () => {
         setAnchorEl(null);
         history.push('/profile/' + id);
     };
     const handleResetPassword = () => {
         setAnchorEl(null);
         history.push('/resetpassword')
     };
     const handleLogout = () => {
         setAnchorEl(null);
         history.push('/')
     };
     const handleClose = () => { setAnchorEl(null); }

     /*Home Icon
     let history = useHistory();*/
     const handleClickHomeIcon = (event) => {
         history.push('/home' + id);
     };

   
      return (
          <div>
              <AppBar style={{ fontFamily: 'Apple Chancery, cursive', background: 'cadetblue' }}>
                  <Toolbar>
                      <img src="logo.png" alt="" width="50" height="30" />
                      <Typography variant="h6" style={{ flexGrow: 1, fontFamily: 'serif', color: 'yellow', fontSize: 'xx-large' }}>
                          THINK4SOLUTIONS
                  </Typography>

                      <IconButton edge="start" onClick={handleClickHomeIcon}>
                       
                          <HomeTwoToneIcon style={{ color: 'white' }} onClick={handleClickHomeIcon} />
                          <label edge="start">Welcome</label>
          </IconButton>

                 
          <IconButton edge="start" onClick={handleClick}>
              <AccountCircleTwoToneIcon style={{ color: 'white' }} />
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


                  </Toolbar>
              </AppBar>

          <div className="tablem4"
              style={{ display: 'flex' }}>

                  <Card className={c.root} style={{ maxWidth: '350px', maxHeight: '250px' }} onClick={handleEmployees} >
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: 'Apple Chancery, cursive' }} >
                          Employeemanagementsystem
          </Typography>
                      <Typography variant="body2" color="textSecondary" component="p" onClick={handleEmployees}>
                          Employee Leave management system is a comprehensive system that allows the management to keep a track of all the employees in the organization.
          </Typography>
                  </CardContent>
                  <CardActions>
                      <Button size="small">Click to Navigate</Button>
                  </CardActions>
              </Card> 

              <Card className={classes.root} style={{ maxWidth: '350px', marginLeft: '50px' }} onClick={handleLeaves}>
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: 'Apple Chancery, cursive' }} onClick={handleLeaves}>
                          Leavemanagementsystem
          </Typography>
                      <Typography variant="body2" color="textSecondary" component="p" onClick={handleLeaves}>
                          Leave Management System allows organizations to manage employee time-off, setup leave policies, and automate leave requests approval
          </Typography>
                  </CardContent>
                  <CardActions>
                      <Button size="small">Click to Navigate</Button>
                  </CardActions>
              </Card>
          
                      </div>



              </div>
    );
  
}

export default Home;