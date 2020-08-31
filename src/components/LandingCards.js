import React from 'react';
import {
    Link as RouterLink,
} from "react-router-dom";

// MY images
import chessclub from "../images/chess_demo_board.jpg";
// import chessclub from "../images/chess_club_college_track.jpg";
import balance_scale from "../images/balance_scale_waldorf.jpg";
import multiple_choice from "../images/multiple_choice_test.jpg";
import banana_papaya_harvest from "../images/banana-papaya-harvest.JPG";
import profile_pic from "../images/profile-pic.jpg";

// MUI Imports
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';

const cardHeight = '1000px';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    card: {
        height: '100%',
        width: '100%',
        // color: theme.palette.common.white,
        // backgroundColor: theme.palette.common.black,
        // backgroundColor: theme.palette.common.white,
        // backgroundColor: theme.palette.primary.light,
        // backgroundColor: '#444',
        backgroundColor: '#ddd',
        padding: '0px',
        display:  'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    cardImage: {
        height: 0,
        paddingTop: '100%', // 1:1  Sets the "height" in terms of the Width since % units for padding are based on the width
        // paddingTop: '56.25%', // 16:9
        // width: '100%',
    },
    cardButtonArea: {
        height: {cardHeight}, 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    }

}));

// DESCRIPTION:  There will be only 4 cards on the landing page: About the Garden, Teaching Services, Chess Clubs, and Meet Nigel

export default function LandingCards(props) {
    const classes = useStyles();

    
    
    return (
        <Grid container
            className={classes.gridContainer}
            id='grid'
            spacing={4}
        >

            {/* TEACHING SERVICES */}
            <Grid item xs={12} sm={6} md={5} lg={3} >
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.cardImage}
                            image={balance_scale}
                            alt="Student doing an experiment"
                            title="Student doing an experiment"
                        />
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Teaching Services
                            </Typography>
                            
                            {/* SHORTER CARD BODY TEXT */}
                            <Box display={{ xs: 'block', md: 'none' }}>
                                <Typography
                                    // 
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    Whether you have fallen behind in a math class, are seeking to get ahead, or just want 
                                    a to learn with a more hands on approach, I would love to help!
                                </Typography>
                            </Box>

                            {/* LONGER CARD BODY TEXT */}
                            <Box display={{ xs: 'none', md: 'block' }}>
                                <Typography
                                    // display={{ xs: 'none', sm: 'block' }}
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    I offer help to students who have fallen behind in math class, help preparing for the ACT and SAT, 
                                    and enrichment for students who excell at math but find the way it is taught in school uninspiring.
                                    I also work with adults who got turned off of math when they were in school but want to give the 
                                    subject another shot and with teachers who are looking for ideas (or guest lessons) to spice up their classes.
                                </Typography>
                            </Box>
                        </CardContent>
                    </CardActionArea>
                    
                    
                    <CardActions>
                        <Button
                            component={RouterLink}
                            to='/teach'
                            variant='contained'
                            size="medium"
                            color="primary"
                        >
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            


            {/* ABOUT THE GARDEN */}
            <Grid item xs={12} sm={6} md={5} lg={3}  >
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.cardImage}
                            alt="Homegrown Bananas and Papayas"
                            image={banana_papaya_harvest}
                            title="Homegrown Bananas and Papayas"
                        />
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                About the Garden
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Established in 2016, the garden started as a blighted lot and has gradually evolved into an oasis of turmeric and fruit trees.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.cardButtons} >
                        <Button
                            component={RouterLink}
                            to='/garden_story'
                            variant='contained'
                            size="medium"
                            color="primary"
                        >
                            Our Story
                        </Button>
                        <Button
                            component={RouterLink}
                            to='/whats_growing'
                            variant='contained'
                            size="medium"
                            color="primary"
                        >
                            What's Growing
                        </Button>
                        
                    </CardActions>
                </Card>
            </Grid>

            
            {/* CHESS CLUBS and LESSONS */}
            <Grid item xs={12} sm={6} md={5} lg={3} >
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.cardImage}
                            image={chessclub}
                            alt="Student doing an experiment"
                            title="Student doing an experiment"
                        />
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Chess Clubs and Lessons
                            </Typography>

                            {/* SHORTER CARD BODY TEXT */}
                            <Box display={{ xs: 'block', md: 'none' }}>
                                <Typography
                                    // 
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    Chess helps kids develop problem solving and communication skills while having fun.
                                    Playing with a timer is great preparation for fast-paced college entrance exams.
                                    The Stem Garden offers private lessons as well as hosting afterschool clubs.
                                </Typography>
                            </Box>

                            {/* LONGER CARD BODY TEXT */}
                            <Box display={{ xs: 'none', md: 'block' }}>
                                <Typography
                                    // display={{ xs: 'none', sm: 'block' }}
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    Chess makes it fun for kids to learn valuable life-skills and thought-habits.
                                    Kids who play chess learn to see the fun in problem solving and become better at 
                                    commuincating their reasoning. The Stem Garden partners with local schools to offer afterschool chess clubs,
                                    as well as offering private and medium-group lessons.  Discounts are offered for combining chess lessons and math tutoring.
                                </Typography>
                            </Box>
                        </CardContent>
                    </CardActionArea>


                    <CardActions>
                        <Button
                            component={RouterLink}
                            to='/teach'
                            variant='contained'
                            size="medium"
                            color="primary"
                        >
                            Lessons
                        </Button>
                        <Button
                            component={RouterLink}
                            to='/teach/chess_clubs'
                            variant='contained'
                            size="medium"
                            color="primary"
                        >
                            Clubs
                        </Button>
                    </CardActions>
                </Card>
            </Grid>


            {/* MEET NIGEL */}
            <Grid item xs={12} sm={6} md={5} lg={3}  >
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.cardImage}
                            // component="img"
                            alt="founder's profile picture"
                            height="140"
                            image={profile_pic}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Meet Nigel
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                I am a jack of all trades who rejoices in helping kids see the world from new points of view.
                                Get to know me by checking out some of my projects besides gardening and teaching!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button
                            component={RouterLink}
                            to='/about_me'
                            variant='contained'
                            size="medium"
                            color="primary"
                        >
                            About Me
                        </Button>
                        <Button
                            component={RouterLink}
                            to='/my_projects'
                            variant='contained'
                            size="medium"
                            color="primary"
                        >
                            My Projects
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
           
    )

}