import React from 'react';


//  MUI imports
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
// import CssBaseline from '@material-ui/core/CssBaseline';


import {
    createMuiTheme, 
    makeStyles, 
    ThemeProvider } from '@material-ui/core/styles';

import './App.css';

import bananas_and_loquat from "./images/bananas_and_loquat.jpg";
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { Button, createStyles } from '@material-ui/core';

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

const useStyles = makeStyles((theme) => ({
    app: {
        
        minHeight: '100vh',
        minWidth: '100vw',

    },
    box: {
        // minHeight: '50vh',

    },
    heroImage: {
        
        backgroundImage: `
            linear-gradient(180deg, rgba(58,94,22,0.70) 0%, rgba(58,94,22,0.00) 10%, rgba(58,94,22,0.00) 90%, rgba(58,94,22,0.70) 100%),
            linear-gradient(90deg, rgba(58,94,22,0) 0%, rgba(58,94,22,0.80) 23%, rgba(58,94,22,0.80) 77%, rgba(58,94,22,0) 100%), 
            url(${bananas_and_loquat})  
        `,
        // backgroundColor: 'rgb(58, 94, 22)',
        width: 'min(100vw, 4032px)',
        height: 'min(100vh, 75vw)',
        overflowY: 'hidden',
        // overflowX: 'hidden',
        // minHeight: '520px',
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },



}));



export default function App() {
    const classes = useStyles();

    return (
        
        
        <React.Fragment>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                
                <Box 
                    className={classes.app}
                    
                >
                    <Box
                        className={classes.heroImage}
                       
                    >
                    </Box>
                    
                    
                </Box>

            </ThemeProvider>
        </React.Fragment>
    );
    
}

