import React from 'react';

// Image Imports
import logo from "../images/nsgLogoSnipped.png";

// CUSTOM COMPONENTS


// MATERIAL-UI COMPONENTS
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
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
        height: '3.5rem',
        width: '100vw',
        backgroundColor: theme.palette.primary.main, // Matches Logo Background
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        color: '#fff',
    },
    navbarContainer: {
        
        backgroundColor: theme.palette.primary.main, // Matches Logo Background
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },

    logo: {
        // border: 'solid red 1px',
        height: '100%',
        flex: '0 0 15%',
        backgroundImage: `
            url(${logo})  
        `,
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
    },
    brandName: {
        // border: 'solid blue 1px',
        flex: '2 0 60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    menu: {
        // border: 'solid red 1px',
        height: '100%',
        // paddingLeft: '2rem',
        flex: '0 0 15%',
        display: 'flex',
        justifyContent: 'flex-end'
        
    },
    menuButton: {
        
        color: theme.palette.common.white
    },

}));

export default function Navbar(props) {
    const classes = useStyles();
    return (
        <AppBar 
            position = "sticky" 
            className = {classes.navbar}
            elevation = '3'
        >
            <Container 
                className={classes.navbarContainer} 
                maxWidth='md'
                disableGutters
            >
                <Box className={classes.logo} >

                </Box>
                <Box className={classes.brandName} >
                    <Typography variant='h4'>
                        STEM Garden
                    </Typography>
                    <Typography
                        className={classes.businessType}
                        variant='body2'
                    >
                        Tutoring Services
                </Typography>
                </Box>
                
                
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
