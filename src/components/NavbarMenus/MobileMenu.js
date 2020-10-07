import React from 'react';

// React ROUTER
import { Link as RouterLink } from "react-router-dom";



import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

// MATERIAL-UI COMPONENTS
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

// ICONS
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { fontSize } from '@material-ui/system';
import SchoolIcon from '@material-ui/icons/School';
import EcoIcon from '@material-ui/icons/Eco'; 
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    menu: {
        // border: 'solid red 1px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    menuButton: {
        color: theme.palette.common.white,
        // fontSize: '5rem',

    }
}));

export default function MobileMenu() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        open: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List> 
              {/* TEACH */}
                <ListItem
                    key={'teach'}
                    button
                    component={RouterLink}
                    to='/teach'
                >
                    <ListItemIcon className="fas fa-graduation-cap fa-lg" />
                    <ListItemText primary={'Teaching Services'} />
                </ListItem>

              {/* GAMES */}
                <ListItem
                    key={'math_games'}
                    button
                    component={RouterLink}
                    to='/math_games'
                >
                    <ListItemIcon className="fas fa-dice-six fa-lg" />
                    <ListItemText primary={'Math Games'} />
                </ListItem>
                

                {/* PUZZLES */}
                <ListItem
                    key={'puzzle_collection'}
                    button
                    component={RouterLink}
                    to='/puzzle_collection'
                >
                    <ListItemIcon className="fas fa-puzzle-piece fa-lg" />
                    <ListItemText primary={'Puzzle Collection'} />
                </ListItem>
                <Divider />

              {/* GARDEN */}
                <ListItem
                    key={'garden'}
                    button
                    component={RouterLink}
                    to='/garden_story'
                >
                    <ListItemIcon>
                        <EcoIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Story of the Garden'} />
                </ListItem>

              {/* GALLERY */}
                <ListItem
                    key={'gallery'}
                    button
                    component={RouterLink}
                    to='/photo_gallery'
                >
                    <ListItemIcon>
                        <PhotoCameraIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Garden Photo Gallery'} />
                </ListItem>

                
            </List>
        </Box>
    );

    return (
        <Box className={classes.menu}>
            <Button 
                onClick={toggleDrawer('open', true)}
                className={classes.menuButton}
                aria-controls="simple-menu"
                aria-haspopup="true"
            >
                <MenuIcon className={classes.menuIcon} fontSize='large' />
            </Button>
                    
            <Drawer anchor={'right'} open={state['open']} onClose={toggleDrawer('open', false)}>
                {list('right')}
            </Drawer>
        </Box>
    );
}