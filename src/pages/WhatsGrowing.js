import React from 'react';

// MY components
import Navbar from "../components/Navbar";
import LandingHeader from "../components/LandingHeader";
import LandingCards from "../components/LandingCards";

// MY images
import bananas_and_loquat from "../images/bananas_and_loquat.jpg";
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
        width: '100%'
    },
    landingHeader: {

        width: '100%',
        height: '75vw',
    },
    cardArea: {
        // border: 'solid red 1px',
        height: 'auto',
        width: '100%',


    },
}));

export default function WhatsGrowingPage(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root}  >
            
            <Navbar />

        </Box>
    )
}