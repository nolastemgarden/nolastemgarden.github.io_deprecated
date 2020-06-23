import React from 'react';

// MY components 
import Navbar from "../components/Navbar";

// MY images
import bananas_and_loquat from "../images/bananas_and_loquat.jpg";
// import chessclub from "../../images/chessclub2.JPG";
// import classroom from "../../images/classroom.JPG";

// MUI Imports
import Container from '@material-ui/core/Container';
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
                rgba(58,94,22,0.95) 53%, 
                rgba(58,94,22,0.00) 95%),
            linear-gradient(180deg, 
                rgba(58,94,22,1.00) 0%,    
                rgba(58,94,22,0.9) 3%,             
                rgba(58,94,22,0.00) 10%, 
                rgba(58,94,22,0.00) 90%, 
                rgba(58,94,22,1.00) 100%),
            url(${bananas_and_loquat})  
        `,

        width: 'min(100vw, 4032px)',
        height: 'min(100vh, 75vw)',
        overflowY: 'hidden',
        // overflowX: 'hidden',
        // minHeight: '520px',
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    pageBody: {
        border: 'solid red 1px',
        height: '100%',
        width: '100%',

        backgroundImage: `
            linear-gradient(90deg, 
                rgba(58,94,22,0.00) 0%, 
                rgba(58,94,22,0.90) 15%, 
                rgba(58,94,22,0.90) 85%, 
                rgba(58,94,22,0.00) 100%) 
        `,
    }

}));

export default function TeachPage(props) {
    const classes = useStyles();

    return (
        <Box
            className={classes.root}

        >
            <Navbar />
        
            <Box
                className={classes.heroImage}

            >
                <Container
                    className={classes.pageBody}
                    maxWidth='md'

                >

                </Container>

            </Box>


        </Box>

    )

}
