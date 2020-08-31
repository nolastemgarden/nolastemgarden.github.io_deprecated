import React from 'react';

// MY components
import LandingHeader from "../components/LandingHeader";
import LandingCards from "../components/LandingCards";
import Navbar from "../components/Navbar";

// MY images
import bananas_and_loquat from "../images/bananas_and_loquat.jpg";
// import logo from "../images/incomplete_logo.png";



// MUI Imports
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100vw',
        // minHeight: '100vh',
        backgroundColor: theme.palette.primary.main,
       
    },
    
    

    container: {
        border: 'solid red 1px',
        height: 'auto',
        width: '100%',
        minHeight: '90vh',
        backgroundColor: theme.palette.primary.main,
        // backgroundColor: theme.palette.primary.light,
        // backgroundColor: theme.palette.common.white
    },
    

    landingHeader: {
        
        width: '100%',
        height: '3rem',
    },
    cardArea: {
        // border: 'solid red 1px',
        height: 'auto',
        width: '100%',
        

    },
}));

export default function LandingPage(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root}  >
            <Navbar />
            
            <Container className={classes.container}
                maxWidth='md' 
            >
                <LandingHeader />
                
            

                <LandingCards /> 
            </Container>
            

            
        </Box>
    )
}


