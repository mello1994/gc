import React, { useState } from 'react';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';

const Schedule = (props) => {
    const schedules = props.schedules;
    const res = schedules.filter((value, index, array) => {
        return value.date === props.date;
    })

    const [id, setId] = useState("");
    const [open, setOpen] = useState(false);

    const handleClickOpen = (e) => {
        const id = e.target.id;
        setId(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        props.deleteSchedule(id);
        setOpen(false);
    }

    const body = (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">AddSchedule</DialogTitle>
            <DialogContent>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    OK
            </Button>
                <Button onClick={handleSubmit} color="primary">
                    DLETE
            </Button>
            </DialogActions>
        </Dialog>
    );

    return (
        <div>
            {body}
            {res.map((s) => (
                <div>
                    <button onClick={handleClickOpen} id={s.id} style={{ backgroundColor: '#3f51b5', width:'100%' }}>{s.schedule.title}</button>
                </div>
            ))}
        </div>
    );
}

function calenderStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        deleteSchedule: (id) => dispatch({ type: "DELETE_SCHEDULES", id:id })
    };
}

export default connect(calenderStateToProps, mapDispatchToProps)(Schedule)