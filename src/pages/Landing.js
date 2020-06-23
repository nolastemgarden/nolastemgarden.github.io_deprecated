import React from 'react';

// MY components
import LandingCards from "../components/LandingCards";

// MY images
import bananas_and_loquat from "../images/bananas_and_loquat.jpg";
import logo from "../images/incomplete_logo.png";
// import chessclub from "../../images/chessclub2.JPG";
// import classroom from "../../images/classroom.JPG";

// MUI Imports
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';

import Button from '@material-ui/core/Button';



import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundColor: theme.palette.primary.main,


    },
    heroImage: {
        backgroundColor: 'rgb(58, 94, 22)',
        backgroundImage: `
            radial-gradient(circle, 
                rgba(58,94,22,1.00) 30%, 
                rgba(58,94,22,0.70) 50%,
                rgba(58,94,22,0.00) 90%),
            linear-gradient(0deg, 
                rgba(58,94,22,0.95) 15%, 
                rgba(58,94,22,0) 100%),
            url(${bananas_and_loquat})  
        `,
        
        width: 'min(100vw, 4032px)',
        height: 'min(100vh, 75vw)',
        maxHeight: '600px',
        overflowY: 'hidden',
        // overflowX: 'hidden',
        // minHeight: '520px',
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    logoArea: {
        
        // border: 'solid red 1px',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
        
        height: '50%',
        width: 'auto',
    },
    description: {
        border: 'solid red 1px',
        height: '10px',
        width: '100%',
        

    },
    cardArea: {
        // border: 'solid red 1px',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    pageBody: {
        border: 'solid red 1px',
        height: '100%',
        width: '100%',

        backgroundImage: `
            
        `,
    }

}));

export default function EnrichmentPage(props) {
    const classes = useStyles();

    return (
        <Box
            className={classes.root}

        >
            <Box
                className={classes.heroImage}

            >
                <Container
                    className={classes.logoArea}
                    maxWidth='md'
                >
                    <img className={classes.logo} src={logo} alt="Logo" />
                </Container>
                <Container
                    className={classes.description}
                    maxWidth='md'

                >
                    {/* <img className={classes.logo} src={logo} alt="Logo" /> */}
                </Container>
            </Box>
            <Container
                className={classes.cardArea}
                maxWidth='md'

            >
                <LandingCards />

            </Container>

        </Box>
        
    )

}