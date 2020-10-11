import React from 'react';

// React ROUTER
import { Link as RouterLink } from "react-router-dom";



import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

// MATERIAL-UI COMPONENTS

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

// ICONS
import SchoolIcon from '@material-ui/icons/School';
import EcoIcon from '@material-ui/icons/Eco';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles(theme => ({
    list: {
        width: 280,
        backgroundColor: theme.palette.primary.dark
    },
    listItem: {
        color: theme.palette.common.white,
    },
    icon: {
        width: '45px',
        color: theme.palette.common.white,
        alignContent: 'center',
        justifyContent: 'center',
    }
}));

export default function TeachingServicesList() {
    const classes = useStyles();
    
    return (
        <List className={classes.list}>
            <ListItem
                key={'tutoring services'}
                className={classes.listItem}
                button
                component={RouterLink}
                // to='/teach/tutoring_services'
                to='/teach'
            >
                <Icon className={"fas fa-brain fa-2x"}
                    classes={{ root: classes.icon }}
                />
                <ListItemText
                    primary={'Tutoring Services'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>

            <ListItem
                key={'test prep'}
                button
                component={RouterLink}
                // to='/teach/test_prep'
                to='/teach'
            >
                <ListItemIcon className="fas fa-graduation-cap fa-2x" />
                <ListItemText 
                    primary={'Test Prep'}
                    primaryTypographyProps={{ variant: 'h6' }}
                />
            </ListItem>

            {/* <ListItem
                key={'stem enrichment'}
                button
                component={RouterLink}
                to='/teach'
            >
                <ListItemIcon className="fas fa-flask fa-2x" />
                <ListItemText 
                    primary={'Stem Enrichment'} 
                    primaryTypographyProps={{ variant: 'h6' }}
                />
            </ListItem> */}

            <ListItem
                key={'chess lessons'}
                button
                component={RouterLink}
                // to='/chess'
                to='/teach'
            >
                <ListItemIcon className="fas fa-chess-knight fa-2x" />
                {/* <ListItemIcon className="fas fa-chess fa-3x" /> */}
                <ListItemText 
                    primary={'Chess Lessons'}
                    primaryTypographyProps={{ variant: 'h6' }}
                />
            </ListItem>

            <ListItem
                key={'computer science'}
                button
                component={RouterLink}
                // to='/computer_science'
                to='/teach'
            >
                <ListItemIcon className="fas fa-laptop-code fa-2x" />
                <ListItemText 
                    primary={'Computer Science'}
                    primaryTypographyProps={{ variant: 'h6' }}
                />
            </ListItem>



            <ListItem
                key={'math_games'}
                button
                component={RouterLink}
                to='/math_games'
            >
                <ListItemIcon className="fas fa-dice-six fa-2x" />
                <ListItemText 
                    primary={'Math Games'}
                    primaryTypographyProps={{ variant: 'h6' }}
                />
            </ListItem>


            <ListItem
                key={'puzzle_collection'}
                button
                component={RouterLink}
                to='/puzzle_collection'
            >
                <ListItemIcon className="fas fa-puzzle-piece fa-2x" />
                <ListItemText 
                    primary={'Puzzle Collection'}
                    primaryTypographyProps={{ variant: 'h6' }}
                />
            </ListItem>

        </List>
    );
}