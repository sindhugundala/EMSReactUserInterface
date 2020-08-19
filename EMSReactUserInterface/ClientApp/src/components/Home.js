import React, { Component } from 'react';
import NavMenu from './NavMenu';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


export class Home extends Component {
    static displayName = Home.name;

    handleEmployees = () => {

        this.props.history.push('/employee');
    }
    handleLeaves = () => {

        this.props.history.push('/employeeleaves');
    }

    render() {
      return (

          <div className="tablem4"
              style={{ display: 'flex' }}>
            <NavMenu />

              <Card style={{ maxWidth: '360px',  marginRight: 30, flex: 1 }} >
                <CardActionArea>
                      <CardMedia 

                          component="img"
                          height="260"
                          image={require("./e1.jfif")}
                          title="Employee Portal"
                          onClick={this.handleEmployees}
                    />
                    <CardContent>
                          <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: 'Apple Chancery, cursive' }} onClick={this.handleLeaves}>
                            Employeemanagementsystem
          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p" onClick={this.handleLeaves}>
                              Employee Leave management system is a comprehensive system that allows the management to keep a track of all the employees in the organization.
          </Typography>
                    </CardContent>
                </CardActionArea>
               
              </Card>

              <Card style={{ marginRight: 30, flex: 1, maxWidth: '360px'}} >
                  <CardActionArea>
                      <CardMedia
                          component="img"
                          height="260"
                          image={require("./Leaves.jfif")}
                          title="Leaves Portal"
                          onClick={this.handleLeaves}
                      />
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: 'Apple Chancery, cursive' }} onClick={this.handleLeaves}>
                              Leavemanagementsystem
          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p" onClick={this.handleLeaves}>
                              Leave Management System allows organizations to manage employee time-off, setup leave policies, and automate leave requests approval
          </Typography>
                      </CardContent>
                  </CardActionArea>

              </Card>
        
      </div>
    );
  }
}
