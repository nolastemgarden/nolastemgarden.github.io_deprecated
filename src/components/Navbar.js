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

import { makeStyles } from '@material-ui/core/styles';
import { findAllByPlaceholderText } from '@testing-library/react';

const useStyles = makeStyles((theme) => ({
    navbar: {
        width: '100%',
        backgroundColor: theme.palette.primary.main, // Matches Logo Background
        // position: 'fixed',
        // left: '0',
        // position: handled by the MUI app bar b/c it actualy works with 'sticky'.
    },
}));

export default function Navbar(props) {
    const classes = useStyles();
    return (
        <AppBar position="sticky" className={classes.navbar}>
            <div className={classes.root}>
                <img className={classes.logo} src={logo} alt="Logo" />
                <Typography className={classes.brand}>
                    Nola Stem Garden
                </Typography>
                {/* <div className={classes.spacer}></div> */}
                {/* <MenuDrawer className={classes.menuRoot} /> */}
                {/* <SimpleMenu /> */}
            </div>
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
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.menuButton}
            >
                {/* <MenuIcon className={classes.menuIcon} /> */}
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
