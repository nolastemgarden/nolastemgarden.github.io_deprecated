import React from 'react';

// MY components
import LandingHeader from "../components/LandingHeader";
import LandingCards from "../components/LandingCards";
import Navbar from "../components/Navbar";

// MY images
import bananas_and_loquat from "../images/bananas_and_loquat.jpg";
// import logo from "../images/incomplete_logo.png";
import leaves from "../images/leaves.jpg";
// import leaves from "../images/leaves_edited.jpg";

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
        // backgroundColor: theme.palette.common.white,
       
    },
    
    

    container: {
        // border: 'solid red 1px',
        height: 'auto',
        width: '100%',
        minHeight: '100vh',
        // marginTop: '1rem',
        // paddingTop: '1rem',
        // backgroundColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.light,
        // backgroundColor: theme.palette.common.white
    },
    leaves: {
        // border: 'solid  yellow 1px',
        width: '100%',
        paddingTop: '75%',

        // backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,

        // backgroundImage: `
        //     linear-gradient(90deg, 
        //         rgba(58,94,22,0.50) 0%, 
        //         rgba(58,94,22,0.50) 100%),
        //     url(${leaves})  
        // `,
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
            
            <MobileBody  />

            <DesktopBody />
            

            
        </Box>
    )
}

function MobileBody(props) {
    const classes = useStyles();

    return (
        <Box className={classes.mobileBody}
            display={{ xs: 'block', lg: 'none' }}  
        >
            <Container
                className={classes.desktopContainer}
                maxWidth='md'
                disableGutters
            >
                MOBILE Container
            </Container>
        </Box>
    )
}


function DesktopBody(props) {
    const classes = useStyles();

    return (
        <Box className={classes.desktopBody}
            display={{ xs: 'none', lg: 'block' }}
        >
            <Container
                className={classes.desktopContainer}
                maxWidth='md'
                disableGutters
            >
                The Landing Page's Desktop Container
            </Container>
        </Box>
    )
}

