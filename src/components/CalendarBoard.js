import React, { useState } from 'react';
import CalenderElement from './CalendarElement';
import { getCalender } from '../common/dateUtil';
import '../Calender.css';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"]

const CalendarBoard = () => {
    const classes = useStyles();


    const weeks = getCalender(new Date());
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableBody className={classes.tableBody}>
                    <TableRow>
                        {weeks.slice(0, 7).map((day) => (
                            day.getDate() === 1 ? (
                                <React.Fragment>
                                    <TableCell style={{ textAlign:'center',border: '1px solid #e0e0e0' }}><p>{dayOfWeekStr[day.getDay()]}</p><p>{day.getMonth() + 1}月{day.getDate()}日</p><CalenderElement></CalenderElement></TableCell>
                                </React.Fragment>
                            ) : (
                                    <React.Fragment>
                                        <TableCell style={{ textAlign:'center',border: '1px solid #e0e0e0' }}><p>{dayOfWeekStr[day.getDay()]}</p><p>{day.getDate()}</p><CalenderElement></CalenderElement></TableCell>
                                    </React.Fragment>
                                )
                        ))}
                    </TableRow>
                    <TableRow>
                        {weeks.slice(7, 14).map((day) => (
                            day.getDate() === 1 ? (
                                <React.Fragment>
                                    <TableCell style={{ textAlign:'center',border: '1px solid #e0e0e0' }}><p>{dayOfWeekStr[day.getDay()]}</p><p>{day.getMonth() + 1}月{day.getDate()}日</p><CalenderElement></CalenderElement></TableCell>
                                </React.Fragment>
                            ) : (
                                    <React.Fragment>
                                        <TableCell style={{ textAlign:'center',border: '1px solid #e0e0e0' }}><p>{dayOfWeekStr[day.getDay()]}</p><p>{day.getDate()}</p><CalenderElement></CalenderElement></TableCell>
                                    </React.Fragment>
                                )
                        ))}
                    </TableRow>
                    <TableRow>
                        {weeks.slice(14, 21).map((day) => (
                            day.getDate() === 1 ? (
                                <React.Fragment>
                                    <TableCell style={{ textAlign:'center',border: '1px solid #e0e0e0' }}><p>{dayOfWeekStr[day.getDay()]}</p><p>{day.getMonth() + 1}月{day.getDate()}日</p><CalenderElement></CalenderElement></TableCell>
                                </React.Fragment>
                            ) : (
                                    <React.Fragment>
                                        <TableCell style={{ textAlign:'center',border: '1px solid #e0e0e0' }}><p>{dayOfWeekStr[day.getDay()]}</p><p>{day.getDate()}</p><CalenderElement></CalenderElement></TableCell>
                                    </React.Fragment>
                                )
                        ))}
                    </TableRow>
                    <TableRow>
                        {weeks.slice(21, 28).map((day) => (
                            day.getDate() === 1 ? (
                                <React.Fragment>
                                    <TableCell style={{ textAlign:'center',border: '1px solid #e0e0e0' }}><p>{dayOfWeekStr[day.getDay()]}</p><p>{day.getMonth() + 1}月{day.getDate()}日</p><CalenderElement></CalenderElement></TableCell>
                                </React.Fragment>
                            ) : (
                                    <React.Fragment>
                                        <TableCell style={{ textAlign:'center',border: '1px solid #e0e0e0' }}><p>{dayOfWeekStr[day.getDay()]}</p><p>{day.getDate()}</p><CalenderElement></CalenderElement></TableCell>
                                    </React.Fragment>
                                )
                        ))}
                    </TableRow>
                    <TableRow>
                        {weeks.slice(28, 35).map((day) => (
                            day.getDate() === 1 ? (
                                <React.Fragment>
                                    <TableCell style={{ textAlign:'center',border: '1px solid #e0e0e0' }}><p>{dayOfWeekStr[day.getDay()]}</p><p>{day.getMonth() + 1}月{day.getDate()}日</p><CalenderElement></CalenderElement></TableCell>
                                </React.Fragment>
                            ) : (
                                    <React.Fragment>
                                        <TableCell style={{ textAlign:'center',border: '1px solid #e0e0e0' }}><p>{dayOfWeekStr[day.getDay()]}</p><p>{day.getDate()}</p><CalenderElement></CalenderElement></TableCell>
                                    </React.Fragment>
                                )
                        ))}
                    </TableRow>
                    <TableRow>
                        {weeks.slice(35, 42).map((day) => (
                            day.getDate() === 1 ? (
                                <React.Fragment>
                                    <TableCell style={{ textAlign:'center',border: '1px solid #e0e0e0' }}><p>{dayOfWeekStr[day.getDay()]}</p><p>{day.getMonth() + 1}月{day.getDate()}日</p><CalenderElement></CalenderElement></TableCell>
                                </React.Fragment>
                            ) : (
                                    <React.Fragment>
                                        <TableCell style={{ textAlign:'center',border: '1px solid #e0e0e0' }}><p>{dayOfWeekStr[day.getDay()]}</p><p>{day.getDate()}</p><CalenderElement></CalenderElement></TableCell>
                                    </React.Fragment>
                                )
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CalendarBoard