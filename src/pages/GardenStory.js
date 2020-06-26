import React from 'react';

// MY components
import Navbar from "../components/Navbar";
import LandingHeader from "../components/LandingHeader";
import LandingCards from "../components/LandingCards";

// MY images
import bamboo from "../images/bamboo.jpg";
import logo from "../images/incomplete_logo.png";


// MUI Imports
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        height: 'auto',
        minHeight: '100vh',
        backgroundColor: theme.palette.primary.main,

        width: '100%',


        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,

        backgroundImage: `
            
            url(${bamboo})  
        `,
        backgroundPosition: 'top',
        backgroundRepeat: 'repeat',
        backgroundSize: '40%',
    },
    body: {
        border: 'solid red 1px',
        // width: '80%',
        marginTop: '10%',
        height: '75vw',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,

    },
    cardArea: {
        // border: 'solid red 1px',
        height: 'auto',
        width: '100%',


    },
}));

export default function GardenStoryPage(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root}  >

            <Navbar />

            <Container 
                className={classes.body}
                maxWidth='md'
            >

            </Container>

        </Box>
    )
}