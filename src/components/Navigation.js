import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navigation = (props) => {
    const classes = useStyles();
    const [startDate, setStartDate] = useState(new Date());
    const handleSelectCalender = (date) => {
        props.onClickChange(date)
        setStartDate(date)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <DatePicker
                            selected={startDate}
                            onChange={handleSelectCalender}
                        />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <ArrowBackIosIcon onClick={props.onClickPrevious}>＜</ArrowBackIosIcon>
                        <ArrowForwardIosIcon onClick={props.onClickNext}>＞</ArrowForwardIosIcon>
                        <span>{props.currentDate.getFullYear()}年{props.currentDate.getMonth() + 1}月</span>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

function calenderStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        onClickPrevious: () => dispatch({ type: "PREVIOUS" }),
        onClickNext: () => dispatch({ type: "NEXT" }),
        onClickChange: (date) => dispatch({ type: "CHANGE_MONTH", date:date }),
    };
}

export default connect(calenderStateToProps, mapDispatchToProps)(Navigation)