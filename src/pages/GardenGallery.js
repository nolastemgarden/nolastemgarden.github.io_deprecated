import React from 'react';

// MY components
import PhotoGrid from "../components/GardenPhotoGrid";
import MobileLandingCards from "../components/MobileLandingCards";
import DesktopLandingCards from "../components/DesktopLandingCards";
import Navbar from "../components/Navbar";

// MY images
import bananas_and_loquat from "../images/bananas_and_loquat.jpg";
// import logo from "../images/incomplete_logo.png";
import leaves from "../images/leaves_cropped_for_mobile.jpg";
// import leaves from "../images/leaves_edited.jpg";
import turmeric from "../images/turmeric.jpg";
import bananaPapayaHarvest from "../images/banana-papaya-harvest.JPG"


// MUI Imports
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';

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
        backgroundColor: '#222',
        backgroundPosition: 'center top',
        backgroundRepeat: 'repeat-y',
        backgroundSize: 'contain',
    },
    desktopBody: {
        height: 'auto',
        width: '100%',
        minHeight: '100vh',
        backgroundImage: `
            linear-gradient(90deg, 
                rgba(58,94,22,0.70) 0%, 
                rgba(58,94,22,0.80) 100%),
            url(${leaves})
        `,
        backgroundPosition: 'center top',
        backgroundRepeat: 'repeat-y',
        backgroundSize: 'cover',
    },
    desktopContainer: {
        backgroundImage: `
            linear-gradient(90deg, 
                rgba(58,94,22,0.00) 0%, 
                rgba(58,94,22,0.50) 5%,
                rgba(58,94,22,0.70) 10%, 
                rgba(58,94,22,0.70) 90%,
                rgba(58,94,22,0.50) 95%,
                rgba(58,94,22,0.00) 100%)
        `,
        backgroundPosition: 'center top',
        // yOffset: '12rem',
        backgroundRepeat: 'repeat-y',
        backgroundSize: 'cover',
    },

    text: {
        color: theme.palette.common.white,
        textShadow: '0.15rem 0.15rem 0.3rem black',
        // fontSize: '7vw'
    },
    header: {
        paddingTop: '5.0rem',
    },
    body: {
        padding: '2.0rem',
    },

    desktopTitleText: {
        color: theme.palette.common.white,
        padding: '2.5rem',
        paddingTop: '12.0rem',
        paddingBottom: '3.0rem',
        textShadow: '0.15rem 0.15rem 0.3rem black',
    },
    desktopSubtitleText: {
        // border: 'solid red 1px',
        color: theme.palette.common.white,
        padding: '1rem 5rem 2rem 5rem',
        // padding: '5rem',
        textShadow: '0.12rem 0.12rem 0.20rem black',
    },

    landingHeader: {
        width: '100%',
        height: '3rem',
    },
    grid: {
        // border: 'solid red 1px',
        height: 'auto',
        width: '100%',
        padding: '1rem'

    },
}));


// LandingPage is responsible for rendering a Navbar and either the Mobile or Desktop version
// depending on screen width. The Navbar contains its own M.vs.D. rendering logic. 
export default function GardenGalleryPage(props) {
    const classes = useStyles();
    return (
        <Box className={classes.root}  >
            <Navbar />
            <MobileBody />
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
                className={[classes.text, classes.header]}
                align='center'
                color='textPrimary'
                component='h1'
                variant='h2'
            >
                What We Grow
            </Typography>
            
            <Typography
                className={[classes.text, classes.body]}
                align='justify'
                color='textPrimary'
                component='h2'
                variant='body1'
            >
                The garden is home to dozens of species of fruit trees, edible flowers,
                medicinal herbs, and vegetables. We are currently seeking buyers for 
                our surplus banana, papaya, and turmeric. 
            </Typography>
        
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
                    Established in 2016, the STEM Garden started as a blighted lot in New Orleans
                    St. Claude neighborhood and gradually evolved into an urban food forest. 
                    We are currently seeking a market for our surplus banana, papaya, and turmeric.
                </Typography>
            </Box>

            <PhotoGridOne />
        </Box>
    )
}



function PhotoGridOne(props) {
    const classes = useStyles();
    return (
        <Box
            className={classes.desktopBody}
            display={{ xs: 'none', lg: 'block' }}
        >
            <Container
                className={classes.desktopContainer}
                maxWidth='md'
                disableGutters
            >
                <Typography
                    className={classes.desktopTitleText}
                    align='center'
                    color='textPrimary'
                    component='h1'
                    variant='h2'
                >
                    COPIED THE LANDING PAGE
                </Typography>

                <Box
                    className={classes.smText}
                    display={{ xs: 'none', sm: 'block' }}
                >
                    <Typography
                        className={classes.desktopSubtitleText}
                        align='justify'
                        color='textPrimary'
                        component='h2'
                        variant='h5'
                    >
                        COPIED THE LANDING PAGE
                    </Typography>
                </Box>

                <Box
                    className={classes.cardArea}
                    display={{ xs: 'block' }}
                >
                    <MobileLandingCards />
                </Box>
            </Container>
        </Box>

    )
}


function DesktopBody(props) {
    const classes = useStyles();
    return (
        <Box
            className={classes.desktopBody}
            display={{ xs: 'none', lg: 'block' }}
        >
            <Container
                className={classes.desktopContainer}
                maxWidth='md'
                disableGutters
            >
                <Typography
                    className={classes.desktopTitleText}
                    align='center'
                    color='textPrimary'
                    component='h1'
                    variant='h2'
                >
                    COPIED THE LANDING PAGE
                </Typography>

                <Box
                    className={classes.smText}
                    display={{ xs: 'none', sm: 'block' }}
                >
                    <Typography
                        className={classes.desktopSubtitleText}
                        align='justify'
                        color='textPrimary'
                        component='h2'
                        variant='h5'
                    >
                        COPIED THE LANDING PAGE
                    </Typography>
                </Box>

                <Box
                    className={classes.cardArea}
                    display={{ xs: 'block' }}
                >
                    <MobileLandingCards />
                </Box>
            </Container>
        </Box>

    )
}

