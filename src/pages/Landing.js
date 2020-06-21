import React from 'react';

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

export default function EnrichmentPage(props) {
    const classes = useStyles();

    return (
        <Box
            className={classes.app}

        >
            <Box
                className={classes.heroImage}

            >
            </Box>


        </Box>
        
    )

}