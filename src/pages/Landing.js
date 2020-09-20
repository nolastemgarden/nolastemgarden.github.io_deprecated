import React from 'react';

// MY components
import LandingHeader from "../components/LandingHeader";
import MobileLandingCards from "../components/MobileLandingCards";
import DesktopLandingCards from "../components/DesktopLandingCards";
import Navbar from "../components/Navbar";

// MY images
import bananas_and_loquat from "../images/bananas_and_loquat.jpg";
// import logo from "../images/incomplete_logo.png";
import leaves from "../images/leaves_cropped_for_mobile.jpg";
// import leaves from "../images/leaves_edited.jpg";
import turmeric from "../images/turmeric.jpg";

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
    mobileBody: {
        // border: 'solid red 1px',
        // height: 'calc(100% - 3.5rem)',   // 3.5rem is the height of the mobileNavbar 
        height: 'auto',
        width: '100%',
        minHeight: '100vh',
        backgroundImage: `
            linear-gradient(90deg, 
                rgba(58,94,22,0.70) 0%, 
                rgba(58,94,22,0.80) 100%),
            url(${leaves})
        `,
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat-y',
        backgroundSize: '100% auto',
    },
    mobileTitleText: {
        color: theme.palette.common.white,
        padding: '0.7rem',
        paddingTop: '1.0rem',
        textShadow: '0.15rem 0.15rem 0.3rem black',
    },
    mobileSubtitleText: {
        // border: 'solid red 1px',
        color: theme.palette.common.white,
        padding: '1rem',
        textShadow: '0.12rem 0.12rem 0.20rem black',
    },

    

    landingHeader: {
        
        width: '100%',
        height: '3rem',
    },
    cardArea: {
        // border: 'solid red 1px',
        height: 'auto',
        width: '100%',
        padding: '1rem'

    },
}));


// LandingPage is responsible for rendering a Navbar and either the Mobile or Desktop version
// depending on screen width. The Navbar contains its own M.vs.D. rendering logic. 
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
        <Box 
            className={classes.mobileBody}
            display={{ xs: 'block', lg: 'none' }}  
        >
            <Typography
                className={classes.mobileTitleText}
                align='center'
                color='textPrimary'
                component='h1'
                variant='h4'
            >
                Sowing the seeds of life-long learning and DIY-spirit
                through integrated teaching of math, physics, biology,
                chess, and computer programming.
            </Typography>

            <Box
                className={classes.xsText}
                display={{ xs: 'block', sm: 'none' }}
            >
                <Typography
                    className={classes.mobileSubtitleText}
                    align='justify'
                    color='textPrimary'
                    component='h2'
                    variant='body1'
                >
                    The STEM Garden is an off-grid urban teaching garden, rooted in New Orleans,
                    offering private tutoring and small group lessons, both in the garden and online.
                </Typography>
            </Box>

            <Box
                className={classes.smText}
                display={{ xs: 'none', sm: 'block' }}
            >
                <Typography
                    className={classes.mobileSubtitleText}
                    align='justify'
                    color='textPrimary'
                    component='h2'
                    variant='body1'
                >
                    The STEM Garden is an off-grid urban teaching garden, rooted in New Orleans.
                    We offer private tutoring and small group lessons, both in the garden and online.
                    We help students meet all common core math standards but see learning math as 
                    so much more than that! We emphacize the playful side of mathematical thinking and
                    use many puzzles, games, hands-on projects to engage young imaginations.
            </Typography>
            </Box>
            
            <Box
                className={classes.cardArea}
                display={{ xs: 'block', sm: 'none' }}
            >
                <MobileLandingCards />
            </Box>
            
            
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

