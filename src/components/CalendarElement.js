import React, { useState } from 'react';
import Schedule from './Schedule';

const CalendarElement = () => {
    const [schedules, setSchedules] = useState([]);
    return (
        <div>
            {schedules.map((schedule) => (
                <Schedule schedule={schedule}></Schedule>
            ))}
        </div>
    );
}

export default CalendarElement