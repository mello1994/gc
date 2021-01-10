import React from 'react';
import Schedule from './Schedule';
import { connect } from 'react-redux';

const CalendarElement = (props) => {
    return (
        <div>
            <Schedule date={props.date}></Schedule>
        </div>
    );
}

function calenderStateToProps(state) {
    return state;
}

export default connect(calenderStateToProps)(CalendarElement)