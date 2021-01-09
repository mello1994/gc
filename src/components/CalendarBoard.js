import React from 'react';
import CalenderElement from './CalendarElement';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const CalendarBoard = () => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableBody>
                    <TableRow>
                        <TableCell>日</TableCell>
                        <TableCell>月</TableCell>
                        <TableCell>火</TableCell>
                        <TableCell>水</TableCell>
                        <TableCell>木</TableCell>
                        <TableCell>金</TableCell>
                        <TableCell>土</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                        <TableCell><CalenderElement></CalenderElement></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
    // return <CalenderElement></CalenderElement>
}

function createCalenderElement() {
    return 1;
}

export default CalendarBoard