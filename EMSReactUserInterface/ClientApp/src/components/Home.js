import React, { Component } from 'react';
import NavMenu from './NavMenu';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import { useHistory } from "react-router";

const useStyles = makeStyles({
    root: {
        minWidth: 10,
        backgroundColor: green[500]
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
        backgroundColor: red[500]
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
  
     const classes = useStyles();
     const c = uStyle();
     const history = useHistory();
   
     const handleLeaves = (event) => {

        props.history.push('/employeeleaves');
    }
     const handleEmployees = (event) => {
         props.history.push('/employee');
     }
   
      return (

          <div className="tablem4"
              style={{ display: 'flex' }}>
            <NavMenu />

              <Card className={c.root} style={{ maxWidth: '350px' }} onClick={handleEmployees} >
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
    );
  
}

export default Home;