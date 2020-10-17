import React from 'react';

// MY components
// import PhotoGrid from "../components/GardenPhotoGrid";
import Navbar from "../components/Navbar";

// MY images
import bananas_and_loquat from "../images/bananas_and_loquat.jpg";
import leaves from "../images/leaves_cropped_for_mobile.jpg";
// import leaves from "../images/leaves_edited.jpg";
import turmeric from "../images/turmeric.jpg";
import bananaPapayaHarvest from "../images/banana-papaya-harvest.JPG"


// MUI Imports
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import GridListTile from '@material-ui/core/GridListTile';

import { spacing } from '@material-ui/system';


import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        height: 'auto',
        width: '100vw',
        // minHeight: '100vh',
        backgroundColor: theme.palette.common.black,
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center'

    },
    spacerBox: {
        // border: 'solid red 2px'
    },

    text: {
        color: theme.palette.common.white,
        textShadow: '0.15rem 0.15rem 0.3rem black',
        // fontSize: '7vw'
    },
    header: {
        paddingBottom: '1.0rem'
    },
    body: {
        
        paddingBottom: '1.5rem',
        maxWidth: '640px'
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
            <PageBody />
        </Box>
    )
}

function PageBody(props) {
    const classes = useStyles();
    return (
        <Container
            className={classes.root}
            maxWidth='md'
        >
            <Box className={classes.spacerBox}
                py={4}
                display={{ xs: 'block', lg: 'none' }}
            >
                MOBILE SPACER BOX
            </Box>
            <Box className={classes.spacerBox}
                py={8}
                display={{ xs: 'none', lg: 'block' }}
            >
                DESKTOP SPACER BOX
            </Box>
            <Typography
                className={[classes.text, classes.header]}
                align='center'
                color='textPrimary'
                component='h1'
                variant='h1'
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
                I was inspired to garden by my early experiences foraging for wild edibles  
                and my garden is still visibly influenced by this background. We grow a lot of 
                banana, papaya, and turmeric but the real focus is always on bio-diversity.  
                The STEM Garden is home to several dozen species of fruit trees, edible flowers,
                medicinal herbs, and vegetables. While certain crops are planted in neat rows 
                and managed carefully, many other plants are naturalized here and are allowed 
                to grow wherever they volunteer. 
            </Typography>

            <Typography
                className={[classes.text, classes.body]}
                align='justify'
                color='textPrimary'
                component='h2'
                variant='body1'
            >
                The garden is small, only 1/6th of an acre, but look close as you walk around and it always has a surprise!

                Section on Wildlife

                Early Days

                flowers

                Banana Details

                Papaya Details

                
            </Typography>

            <PhotoGrid />

        </Container>
    )
}

function PhotoGrid(props) {
    const classes = useStyles();

    return (
        <Grid container
        >
            {tileData.map((tile) => (
                <GridListTile
                    key={tile.img}
                    cols={tile.wide ? 2 : 1}
                    rows={tile.tall ? 2 : 1}>
                    <img src={tile.img} alt={tile.title} />
                    {/* <GridListTileBar
                        title={tile.title}
                        titlePosition="bottom"
                        actionPosition="left"
                        className={classes.titleBar}
                    /> */}
                </GridListTile>
            ))}
        </Grid>
    );
}

const tileData = [
    {
        img: bananaPapayaHarvest,
        title: 'Banana Papaya Harvest',
        author: 'Nigel',
        wide: true,
        tall: true,
    },
    {
        img: turmeric,
        title: 'turmeric',
        author: 'Nigel',
        wide: false,
        tall: false,
    },
    {
        img: bananas_and_loquat,
        title: 'Bananas and Loquat',
        author: 'Nigel',
        wide: false,
        tall: false,
    },
    {
        img: turmeric,
        title: 'turmeric',
        author: 'Nigel',
        wide: false,
        tall: false,
    },
    {
        img: bananaPapayaHarvest,
        title: 'Banana Papaya Harvest',
        author: 'Nigel',
        wide: false,
        tall: true,
    },
    {
        img: turmeric,
        title: 'turmeric',
        author: 'Nigel',
        wide: true,
        tall: false,
    }];

// Established in 2016, the STEM Garden started as a blighted lot in New Orleans
// St.Claude neighborhood and gradually evolved into an urban food forest.
// We are currently seeking a market for our surplus banana, papaya, and turmeric.
