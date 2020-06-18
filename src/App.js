import React from 'react';



import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
// import CssBaseline from '@material-ui/core/CssBaseline';


import {createMuiTheme, 
        makeStyles, 
        ThemeProvider } from '@material-ui/core/styles';

import './App.css';

import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { Button, createStyles } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: green,
    },
    status: {
        danger: 'orange',
    },
});

const useStyles = makeStyles((theme) => ({
    app: {
        backgroundColor: 'red',
        minHeight: '100vh',

    },
    box: {
        minHeight: '50vh',

    },
}));



export default function App() {
    const classes = useStyles();

    return (
        
        
        <React.Fragment>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                
                <Container 
                    className={classes.app}
                    maxWidth="lg"
                    fixed={true}
                >
                    <Box
                        className={classes.box}
                        maxWidth="lg"
                        bgcolor="primary.light"
                    >
                    </Box>
                    
                </Container>

            </ThemeProvider>
        </React.Fragment>
    );
    
}

