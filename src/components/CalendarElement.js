import React, { useState } from 'react';
import Schedule from './Schedule';
import { connect } from 'react-redux';

const CalendarElement = (props, {date}) => {
    const schedules = props.schedules;
    const res = schedules.filter((value, index, array) => {
        return value.date === props.date;
    })
    return (
        <div>
            {res.map((s) => (
                <div>{s.schedule.title}</div>
            ))}
        </div>
    );
}

function calenderStateToProps(state) {
    return state;
}

export default connect(calenderStateToProps)(CalendarElement)