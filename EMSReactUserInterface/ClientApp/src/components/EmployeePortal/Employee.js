import React, {useState, Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { EditEmployee } from './EditEmployee';
import { Link } from 'react-router-dom';
import MaterialTable from 'material-table';
import { IconButton } from '@material-ui/core';
import { Icon } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'black',
        height: 48,
        padding: '0 30px',
    },
});

export class Employee extends Component {
    static displayName = Employee.name;
     

    constructor(props) {
        super(props);
        this.sampleList = this.sampleList.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.state = { deps: [] , edit:false}

    }
    handleEditClick = (employeeId) => {
        this.props.history.push("/editemployee/"+ employeeId);
    }
    addEmployee = () => {
        this.props.history.push("/addEmployee");
    }
   
    sampleList() {
        fetch('https://localhost:44399/Employee')
            .then(response => response.json())
            .then(data =>
                this.setState({ deps: data }));
    }
    componentDidMount() {
        fetch('https://localhost:44399/Employee')
            .then(response => response.json())
            .then(data =>
                this.setState({ deps: data }));

    }
    componentDidUpdate() { //to refresh the grid
        this.sampleList();
    }
    componentWillUnmount() {
        this.sampleList();
    }
    deleteEmployee(employeeid) {

        if (window.confirm('Are you sure?')) {

            fetch('https://localhost:44399/Employee/' + employeeid, {

                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
        }
    }
   

    render() {
     
        const { deps } = this.state;//declare object again from state
        const { classes } = this.props;

          const  columns =[
                { title: 'EMPLOYEEID', field: 'employeeId' },
                { title: 'FIRSTNAME', field: 'firstName' },
                { title: 'LASTNAME', field: 'lastName' },
                { title: 'EMAIL', field: 'email' },
                { title: 'CONTACTNUMBER', field: 'contactNumber' },
              { title: 'Date Of Joining', field: 'dateOfJoin' },
              { title: 'Designation', field: 'designation' },
              { title: 'Experienece', field: 'experience' },
              { title: 'salary', field: 'salary' }
          
            ]
        const actions = [
            {
                icon: 'edit',
                tooltip: 'Edit Employee',
                onClick: (event, rowData) => {
                    console.log('Event',event);
                    console.log('RowData',rowData);
                    this.handleEditClick(rowData.employeeId);
                   
                }
            },
            {
                icon: 'delete',
                tooltip: 'Delete Employee',
                onClick: (event, rowData) => {
                    this.deleteEmployee(rowData.employeeId);

                }
            },
        ];
        return (
            <div className="tablem4">
                <div>
                </div>
                <div>
                    <button className="btn btn-lg bt-primary" onClick={this.addEmployee}>Add Employee</button><br />&nbsp;
                    <MaterialTable className="classes.root"
                        data={deps} columns={styles(columns)}
                        title="Employees"
                        options={{ search: false, exportButton:true }}
                        actions={actions}
                        style={{
                            overflow: 'hidden' }}

                   />
                <br/>
               
                </div>
            </div>
        );
    }

}
export default Employee;