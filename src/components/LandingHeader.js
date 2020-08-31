import React from 'react';

// MY components


// MY images
import bananas_and_loquat from "../images/bananas_and_loquat.jpg";
import logo from "../images/incomplete_logo.png";
import leaves from "../images/leaves.jpg";

// MUI Imports
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        border: 'solid  yellow 1px',
        width: '100%',
        height: '75vw',
      
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,

        backgroundImage: `
            
            url(${bananas_and_loquat})  
        `,
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    description: {
        // border: 'solid blue 1px',
        // justifySelf: 'flex-end',
        marginBottom: 0,

        maxWidth: 'min(774px, 75%)',
        textAlign: 'center',
        // flexGrow: '1',
        display: 'flex',
        alignItems: 'center',

    },
}));

export default function LandingHeader(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root}  >
            <Box className={classes.description}  >
                <Typography variant="h5" component="h2">
                    Sowing the seeds of life-long learning and a DIY spirit through hands-on teaching 
                    of math, physics, plant biology, and computer programming. 
                </Typography>

            </Box>

        </Box>
    )
}