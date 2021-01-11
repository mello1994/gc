import React, { useState } from 'react';
import CalenderElement from './CalendarElement';
import { getCalender, getStringDate } from '../common/dateUtil';
import '../Calender.css';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

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

const CalendarBoard = (props) => {
    const classes = useStyles();
    const weeks = getCalender(props.currentDate);

    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [place, setPlace] = useState("");
    const [explanation, setExplanation] = useState("");
    const [date, setDate] = useState("");

    const [open, setOpen] = useState(false);

    const handleClickOpen = (e) => {
        setDate(e.target.id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        const schedule = {
            title: title,
            time: time,
            place: place,
            explanation, explanation
        }
        setTitle("");
        setTitle("");
        setPlace("");
        setExplanation("");
        props.addSchedule(date, schedule);
        setOpen(false);
    };


    const body = (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">AddSchedule</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="title"
                    type="text"
                    fullWidth
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="time"
                    type="date"
                    fullWidth
                    onChange={(e) => setTime(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="place"
                    label="place"
                    type="text"
                    fullWidth
                    onChange={(e) => setPlace(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="explanation"
                    label="explanation"
                    type="text"
                    fullWidth
                    onChange={(e) => setExplanation(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
            </Button>
                <Button onClick={handleSubmit} color="primary">
                    Submit
            </Button>
            </DialogActions>
        </Dialog>
    );

    return (
        <div>
            {body}
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableBody className={classes.tableBody}>
                        <TableRow>
                            {weeks.slice(0, 7).map((day) => (
                                day.getDate() === 1 ? (
                                    <React.Fragment>
                                        <TableCell id={getStringDate(day)} onClick={handleClickOpen} style={{ textAlign: 'center', border: '1px solid #e0e0e0' }}><p>{dayOfWeekStr[day.getDay()]}</p><p>{day.getMonth() + 1}月{day.getDate()}日</p><CalenderElement date={getStringDate(day)}></CalenderElement></TableCell>
                                    </React.Fragment>
                                ) : (
                                        <React.Fragment>
                                            <TableCell id={getStringDate(day)} onClick={handleClickOpen} style={{ textAlign: 'center', border: '1px solid #e0e0e0' }}><p>{dayOfWeekStr[day.getDay()]}</p><p>{day.getDate()}</p><CalenderElement date={getStringDate(day)}></CalenderElement></TableCell>
                                        </React.Fragment>
                                    )
                            ))}
                        </TableRow>
                        <TableRow>
                            {weeks.slice(7, 14).map((day) => (
                                day.getDate() === 1 ? (
                                    <React.Fragment>
                                        <TableCell id={getStringDate(day)} onClick={handleClickOpen} style={{ textAlign: 'center', border: '1px solid #e0e0e0' }}><p>{dayOfWeekStr[day.getDay()]}</p><p>{day.getMonth() + 1}月{day.getDate()}日</p><CalenderElement date={getStringDate(day)}></CalenderElement></TableCell>
                                    </React.Fragment>
                                ) : (
                                        <React.Fragment>
                                            <TableCell id={getStringDate(day)} onClick={handleClickOpen} style={{ textAlign: 'center', border: '1px solid #e0e0e0' }}><p>{dayOfWeekStr[day.getDay()]}</p><p>{day.getDate()}</p><CalenderElement date={getStringDate(day)}></CalenderElement></TableCell>
                                        </React.Fragment>
                                    )
                            ))}
                        </TableRow>
                        <TableRow>
                            {weeks.slice(14, 21).map((day) => (
                                day.getDate() === 1 ? (
                                    <React.Fragment>
                                        <TableCell id={getStringDate(day)} onClick={handleClickOpen} style={{ textAlign: 'center', border: '1px solid #e0e0e0' }}><p>{dayOfWeekStr[day.getDay()]}</p><p>{day.getMonth() + 1}月{day.getDate()}日</p><CalenderElement date={getStringDate(day)}></CalenderElement></TableCell>
                                    </React.Fragment>
                                ) : (
                                        <React.Fragment>
                                            <TableCell id={getStringDate(day)} onClick={handleClickOpen} style={{ textAlign: 'center', border: '1px solid #e0e0e0' }}><p>{dayOfWeekStr[day.getDay()]}</p><p>{day.getDate()}</p><CalenderElement date={getStringDate(day)}></CalenderElement></TableCell>
                                        </React.Fragment>
                                    )
                            ))}
                        </TableRow>
                        <TableRow>
                            {weeks.slice(21, 28).map((day) => (
                                day.getDate() === 1 ? (
                                    <React.Fragment>
                                        <TableCell id={getStringDate(day)} onClick={handleClickOpen} style={{ textAlign: 'center', border: '1px solid #e0e0e0' }}><p>{dayOfWeekStr[day.getDay()]}</p><p>{day.getMonth() + 1}月{day.getDate()}日</p><CalenderElement date={getStringDate(day)}></CalenderElement></TableCell>
                                    </React.Fragment>
                                ) : (
                                        <React.Fragment>
                                            <TableCell id={getStringDate(day)} onClick={handleClickOpen} style={{ textAlign: 'center', border: '1px solid #e0e0e0' }}><p>{dayOfWeekStr[day.getDay()]}</p><p>{day.getDate()}</p><CalenderElement date={getStringDate(day)}></CalenderElement></TableCell>
                                        </React.Fragment>
                                    )
                            ))}
                        </TableRow>
                        <TableRow>
                            {weeks.slice(28, 35).map((day) => (
                                day.getDate() === 1 ? (
                                    <React.Fragment>
                                        <TableCell id={getStringDate(day)} onClick={handleClickOpen} style={{ textAlign: 'center', border: '1px solid #e0e0e0' }}><p>{dayOfWeekStr[day.getDay()]}</p><p>{day.getMonth() + 1}月{day.getDate()}日</p><CalenderElement date={getStringDate(day)}></CalenderElement></TableCell>
                                    </React.Fragment>
                                ) : (
                                        <React.Fragment>
                                            <TableCell id={getStringDate(day)} onClick={handleClickOpen} style={{ textAlign: 'center', border: '1px solid #e0e0e0' }}><p>{dayOfWeekStr[day.getDay()]}</p><p>{day.getDate()}</p><CalenderElement date={getStringDate(day)}></CalenderElement></TableCell>
                                        </React.Fragment>
                                    )
                            ))}
                        </TableRow>
                        <TableRow>
                            {weeks.slice(35, 42).map((day) => (
                                day.getDate() === 1 ? (
                                    <React.Fragment>
                                        <TableCell id={getStringDate(day)} onClick={handleClickOpen} style={{ textAlign: 'center', border: '1px solid #e0e0e0' }}><p>{dayOfWeekStr[day.getDay()]}</p><p>{day.getMonth() + 1}月{day.getDate()}日</p><CalenderElement date={getStringDate(day)}></CalenderElement></TableCell>
                                    </React.Fragment>
                                ) : (
                                        <React.Fragment>
                                            <TableCell id={getStringDate(day)} onClick={handleClickOpen} style={{ textAlign: 'center', border: '1px solid #e0e0e0' }}><p>{dayOfWeekStr[day.getDay()]}</p><p>{day.getDate()}</p><CalenderElement date={getStringDate(day)}></CalenderElement></TableCell>
                                        </React.Fragment>
                                    )
                            ))}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
function calenderStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        addSchedule: (date, schedule) => dispatch({ type: "ADD_SCHEDULES",date:date, schedule: schedule })
    };
}

export default connect(calenderStateToProps, mapDispatchToProps)(CalendarBoard)