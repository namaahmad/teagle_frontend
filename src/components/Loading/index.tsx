'use client'
import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
// Inspired by the former Facebook spinners.
const useStyles = makeStyles((theme) => ({
    // root: {
    //     position:'fixed',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     color: '#1a90ff',
    //     margin: '0 auto',
    //     animationDuration: '550ms',
    // },

    // circle: {
    //     strokeLinecap: 'round',
    // },
    container: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
    },
    root: {
        color: '#1a90ff',
        animationDuration: '750ms',
    },
    circle: {
        strokeLinecap: 'round',
    },
}));
export default function Loader(props: any) {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <CircularProgress
                variant="indeterminate"
                disableShrink
                className={classes.root}
                classes={{
                    circle: classes.circle,
                }}
                size={40}
                thickness={4}
            />
        </Box>
    )
}