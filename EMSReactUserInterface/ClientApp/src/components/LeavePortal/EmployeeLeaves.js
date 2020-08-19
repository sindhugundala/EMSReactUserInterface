import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavMenu from '../NavMenu';
import MaterialTable from 'material-table';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export class EmployeeLeaves extends Component {
    static displayName = EmployeeLeaves.name;

    constructor(props) {
        super(props);
        console.log(this.props.title);
    }

    render() {

        const columns = [
            { title: 'LEAVETYPE', field: 'LEAVETYPE' },
            { title: 'LEAVEUSED', field: 'LEAVEUSED' },
            { title: 'AVAILABLE', field: 'AVAILABLE' },
            { title: 'TOTALUSEDPERYEAR', field: 'TOTALUSEDPERYEAR' }
        ]

        return (
            <div>
                <NavMenu />
                <label style={{ marginRight: '60%' }} className="tablem4" >Employee ID: {this.props.title}</label>
                <img src={require('./leavesimg1.jfif')} width="400" height="250" style={{ marginLeft: '60%', marginTop: '2.0rem !important'}} />
                <div className="tablem4">
                    <div>
                        <MaterialTable
                            columns={columns}
                            title=" "
                            options={{ search: false }}
                            style={{ overflow: 'hidden' }}

                        />
                    </div>
                </div>

            </div>
        );
    }
}