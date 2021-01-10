import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import { nextMonthCalender, previousMonthCalender, changeMonthCalender } from './Store';

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
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <button onClick={props.onClickPrevious}>＜</button>
                        <button onClick={props.onClickNext}>＞</button>
                    </Typography>
                    <Button color="inherit">Login</Button>
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
    };
}

export default connect(calenderStateToProps,mapDispatchToProps)(Navigation)