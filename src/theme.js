import React from 'react';


import {
    createMuiTheme,
    makeStyles,
} from '@material-ui/core/styles';



import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
// import { Button, createStyles } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#678b41',
            main: '#3a5e16',
            dark: '#123400',
        },
        secondary: green,
    },
    status: {
        danger: 'orange',
    },
});

export default theme;

