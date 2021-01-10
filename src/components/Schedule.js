import React, { useState } from 'react';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Schedule = (props) => {
    const schedules = props.schedules;
    const res = schedules.filter((value, index, array) => {
        return value.date === props.date;
    })
    return (
        <div>
            {res.map((s) => (
                <div>
                    <div style={{ backgroundColor: '#3f51b5' }}>{s.schedule.title}</div>
                </div>
            ))}
        </div>
    );
}

function calenderStateToProps(state) {
    return state;
}

export default connect(calenderStateToProps)(Schedule)