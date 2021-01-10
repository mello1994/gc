import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';

const AddScheduleDialog = () => {
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [place, setPlace] = useState("");
    const [explanation, setExplanation] = useState("");

    return (
        <div>
            <form>
                <List>
                    <ListItem>
                        <TextField label="title" onChange={(e) => setTitle(e.target.value)} />
                    </ListItem>
                    <ListItem>
                        <TextField label="time" onChange={(e) => setTime(e.target.value)} />
                    </ListItem>
                    <ListItem>
                        <TextField label="place" onChange={(e) => setPlace(e.target.value)} />
                    </ListItem>
                    <ListItem>
                        <TextField label="explanation" onChange={(e) => setExplanation(e.target.value)} />
                    </ListItem>
                    <ListItem>
                        <Button variant="contained" color="primary" href="#contained-buttons">
                            save
                        </Button>
                    </ListItem>
                </List>
            </form>
        </div>
    );
}

export default AddScheduleDialog