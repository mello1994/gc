import React, { useState } from 'react';

// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import Modal from '@material-ui/core/Modal';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

// const [title, setTitle] = useState("");
// const [time, setTime] = useState("");
// const [place, setPlace] = useState("");
// const [explanation, setExplanation] = useState("");
// const [schedules, setSchedules] = useState([]);

// function createSchedule(title, time, place, explanation) {
//     return { title, time, place, explanation };
// }

// function getModalStyle() {
//     const top = 100;
//     const left = 100;

//     return {
//         top: `${top}%`,
//         left: `${left}%`,
//         transform: `translate(-${top}%, -${left}%)`,
//     };
// }

// /*************modal**************** */
// const [modalStyle] = React.useState(getModalStyle);
// const [open, setOpen] = React.useState(false);

// const handleOpen = () => {
//     setOpen(true);
// };

// const handleClose = () => {
//     setOpen(false);
// };
// /*************modal**************** */

// const onSave = () => {
//     let newSchedules = schedules.slice();
//     newSchedules.push(createSchedule(title, time, place, explanation));
//     setSchedules(newSchedules);
//     setTitle("");
//     setTime("");
//     setPlace("");
//     setExplanation("");
// }

// const body = (
//     <div className={classes.paper}>
//         <form className={classes.root} noValidate autoComplete="off">
//             <TextField label="title" onChange={(e) => setTitle(e.target.value)} />
//             <TextField label="time" onChange={(e) => setTime(e.target.value)} />
//             <TextField label="place" onChange={(e) => setPlace(e.target.value)} />
//             <TextField label="explanation" onChange={(e) => setExplanation(e.target.value)} />
//             <Button onClick={onSave} variant="contained" color="primary" href="#contained-buttons">
//                 save
//             </Button>
//         </form>
//     </div>
// );

const CalendarElement = () => {
    return (
        <div></div>
    );
}

export default CalendarElement