import React from 'react';

// Image Imports
import logo from "../images/nsgLogo100px.png";

// CUSTOM COMPONENTS


// MATERIAL-UI COMPONENTS
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { Menu,
    ListSubheader,
    Divider,
    } from '@material-ui/core';

// MATERIAL-UI ICONS
import MenuIcon from '@material-ui/icons/Menu';



import { makeStyles } from '@material-ui/core/styles';
import { findAllByPlaceholderText } from '@testing-library/react';

const useStyles = makeStyles((theme) => ({
    navbar: {
        width: '100vw',
        backgroundColor: theme.palette.primary.main, // Matches Logo Background
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        color: '#fff',
    },
    navbarContainer: {
        width: '100vw',
        backgroundColor: theme.palette.primary.main, // Matches Logo Background
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    brandName: {

    },
    menuButton: {
        color: theme.palette.common.white
    }

}));

export default function Navbar(props) {
    const classes = useStyles();
    return (
        <AppBar 
            position = "sticky" 
            className = {classes.navbar}
            elevation = '0'
        >
            <Container className={classes.navbarContainer} maxWidth='md'>
                
                <Typography 
                    className={classes.brandName}
                    variant='h4'
                >
                    Nola Stem Garden
                </Typography>
                
                <SimpleMenu />
            
            </Container>
        </AppBar>
    );
}



function SimpleMenu() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.menu}>
            <Button
                className={classes.menuButton}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MenuIcon className={classes.menuIcon} />
            </Button>


            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClick={handleClose}
                className={classes.menuItems}
            >
                <ListSubheader className={classes.stickySubheader}>
                    Teaching Services
                </ListSubheader>
                {/* <TeachingNavList /> */}

                <Divider />

                <ListSubheader className={classes.stickySubheader}>
                    About the Garden
                </ListSubheader>
                {/* <GardenNavList /> */}

            </Menu>
        </div>
    );
}
