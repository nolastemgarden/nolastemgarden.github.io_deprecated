import React from 'react';

// MY components
import Navbar from "../components/Navbar";
import LandingHeader from "../components/LandingHeader";
import LandingCards from "../components/LandingCards";

// MY images
import bamboo from "../images/bamboo.jpg";
import logo from "../images/incomplete_logo.png";
import street_view_before from "../images/garden_before.jpg";


// MUI Imports
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';



import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        height: 'auto',
        minHeight: '100vh',
        backgroundColor: theme.palette.primary.main,

        width: '100%',


        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,

        backgroundImage: `
            
            url(${bamboo})  
        `,
        backgroundPosition: 'top',
        backgroundRepeat: 'repeat',
        backgroundSize: '40%',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    body: {
        // border: 'solid red 1px',
        maxWidth: theme.breakpoints.values.md,
        margin: 'min(10%, 50px)',
        height: 'auto',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderRadius: '1rem',
        boxShadow: '0px 0px 5px 5px rgba(58,94,22,1)'

    },
    paragraph: {
        textIndent: '2rem',
        paddingBottom: '1rem',
    },
    cardArea: {
        // border: 'solid red 1px',
        height: 'auto',
        width: '100%',


    },
    street_view_before: {
        backgroundImage: `
            url(${street_view_before})  
        `,
        backgroundSize: 'cover',
    }

}));


export default function GardenStoryPage(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root}  >

            <Navbar />

            <Container 
                className={classes.body}
                maxWidth='md'
            >
                <Grid container>
                    <Grid item xs={12}>
                        <Typography component='h1' variant='h2' gutterBottom >
                            Story of the Garden
                        </Typography>
                    </Grid>
                    <Grid item xs={12} gutterBottom className={classes.paragraph}>
                        <Typography component='body1' variant='body1' >
                            I grew up in central Ohio, on the bank of the Scioto River.  The Scioto River is a tributary of the Ohio River, which is a tributary of the mighty Mississippi.  As a kid, I dreamed of taking a gap year before starting college and paddling a canoe from my childhood backyard all the way to New Orleans.  When I got a full-tuition academic scholarship that I could not defer I decided to save my ‘gap year’ until I had finished my undergrad. 
                        </Typography>
                    </Grid>

                    <Grid item xs={12} gutterBottom className={classes.paragraph}>
                        <Typography component='body1' variant='body1' >
                            I completed my degree in Math Education at Ohio University in the Spring of 2015. I stuck around Athens, Ohio for a while in order to direct a Spirit of Kairos retreat, to give back to a community that had made my time in Athens immeasurably better. During that time I worked at <a href='http://cooldigs.biz/' >Cool Digs</a>, a hydroponic gardening supply shop. During my time at Ohio University, I developed passions for gardening and bicycling and it was important to me to be able to enjoy these two pastimes twelve months of the year.  Besides that, winter in Ohio had always been hard on my physical and mental health.  I knew I wanted to move South, and I was curious to see for myself what innovations had come out of the shift to charter schools that New Orleans made post-Katrina. In January 2016, I packed my things and came to establish myself in the Big Easy.
                        </Typography>
                    </Grid>

                    <Grid item xs={7} gutterBottom className={classes.paragraph}>
                        <Typography component='body1' variant='body1'  >
                            One of the first lessons I learned about gardening from my mentor, Professor Art Trese, was that gardening is less about taking care of plants than it is about taking care of the soil.  When the soil is healthy, the plants almost take care of themselves.  During my first three years gardening while I was a student I had to move from place to place every year, and you can’t take care of soil when you are growing in a different place each year.  When I landed in New Orleans one of my top priorities was buying some land so that I could begin to build up healthy soil and put some trees in the ground.  I wanted to experience gardening in the way that one only can when one has committed to gardening in the same place for many years.  Just three months after moving to New Orleans I won an auction for a blighted vacant lot in the upper-ninth ward.  At the time I acquired the lot, it was overgrown with ragweed and covered in trash but the price was right, just $4600.
                        </Typography>
                    </Grid>

                    <Grid item xs={5}  >
                        <img src="../images/garden_before.jpg" >
                            
                        </img>
                    </Grid>

                    <Grid item xs={8} gutterBottom className={classes.paragraph}>
                        <Typography component='body1' variant='body1'  >
                            I had tasted living out of a backpack and out of a vehicle while I was still in Ohio.  I was never homeless per se, as it was always a choice.  I had money in the bank, I just decided to sleep outside rather than spend it all on rent.  I saw living without a house like I see most things, a way of living that one could get better at (more comfortable with) through practice.  Many of the skills that I had practiced while living out of a backpack came in handy when I bought the lot and began transforming it into the garden that it is today.  Before I built the toolshed and the two tiny-houses that I now live in, I worked to clean up the land by day and slept in my van.
                        </Typography>
                    </Grid>




                    <Grid item xs={4}>
                        {/* <Card className={classes.root}>
                            <CardMedia
                                className={classes.media}
                                image={street_view_before}
                                title="Before Cleanup Picture"
                            />
                        </Card> */}
                        <Box
                            className={classes.street_view_before}
                        />
                            
                    </Grid>
                </Grid>
            </Container>

        </Box>
    )
}