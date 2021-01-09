import React, {useState} from 'react';

const Schedule = () => {
    const [schedule, setSchedule] = useState("default");
    return (
        <React.Fragment>
            <div onClick={() => setSchedule("schedule")}>{schedule}</div>
        </React.Fragment>
    );   
}

export default Schedule