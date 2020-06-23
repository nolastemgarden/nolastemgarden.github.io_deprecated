import React from 'react';
import {
    Link as RouterLink,
} from "react-router-dom";

// MY images
import bananas_and_loquat from "../images/bananas_and_loquat.jpg";
import logo from "../images/incomplete_logo.png";
import balancescale from "../images/balance_scale_waldorf.jpg";
import multiple_choice from "../images/multiple_choice_test.jpg";
// import chessclub from "../../images/chessclub2.JPG";
// import classroom from "../../images/classroom.JPG";

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
const useStyles = makeStyles((theme) => ({
    card: {
        height: '600px',
        width: '100%',
        backgroundColor: theme.palette.common.white,
        padding: '0px'

    },


}));

export default function LandingCards(props) {
    const classes = useStyles();

    return (
        <Grid container 
            maxWidth='lg'
            spacing={2}
        >
            {/* TUTORING SERVICES */}
            <Grid item xs={6} lg={3} >
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="100%"
                            width="auto"
                            image={balancescale}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography 
                                gutterBottom 
                                variant="h6" 
                                component="h2"

                            >
                                Tutoring
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Feeling lost in math class? I have helped students from over 15 New Oreleans schools get back on track with K-12 Common Core Math Curriculum
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            {/* TEST PREP */}
            <Grid item xs={6} lg={3} >
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="100%"
                            width="auto"
                            image={multiple_choice}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Test Prep
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Preparing for the ACT or SAT can be stressful. It is very different from preparing for tests in school. I have 4 years experience helping students achieve the results they are after on college entrance exams. 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button 
                        className={classes.button} 
                        variant='contained'
                        component={RouterLink} 
                        to='/garden' 
                        >
                            Learn More
                        </Button>
                        
                    </CardActions>
                </Card>
            </Grid>


            {/* TUTORING SERVICES */}
            <Grid item xs={6} lg={3} >
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="100%"
                            width="auto"
                            image={balancescale}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Tutoring
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Feeling lost in math class? I have helped students from over 15 New Oreleans schools get back on track with K-12 Common Core Math Curriculum
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={6} lg={3} >
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={balancescale}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
           
    )

}