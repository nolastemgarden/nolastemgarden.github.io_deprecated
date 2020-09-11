import React from 'react';

// MY COMPONENTS
import MobileMenu from "../components/NavbarMenus/MobileMenu";

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';


// Image Imports
import logo from "../images/nsgLogoSnipped.png";


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
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    navbar: {
        // height: '3.5rem',
        width: '100vw',
        backgroundColor: theme.palette.primary.main, // Matches Logo Background
        display: 'flex',
        color: '#fff',
    },
    mobileNavbar: {
        height: '3.5rem',
        width: '100vw',
        backgroundColor: theme.palette.primary.main, // Matches Logo Background
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        color: '#fff',
    },
    desktopNavbar: {
        height: '7rem',
        width: '100vw',
        backgroundColor: theme.palette.primary.main, // Matches Logo Background
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        color: '#fff',
    },

    navbarContainer: {
        // border: 'solid red 1px',
        height: '100%',
        backgroundColor: theme.palette.primary.main, // Matches Logo Background
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'flex-end'

    },

    logo: {
        // border: 'solid red 1px',
        height: '100%',
        backgroundImage: `
            url(${logo})  
        `,
        backgroundPosition: 'left bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 95%',
    },
    mobileBrand: {
        // border: 'solid blue 1px',
        paddingTop: '0.4rem',
        flex: '2 0 60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },


    desktopLogo: {
        // border: 'solid red 1px',
        height: '100%',
        paddingRight: '6.5rem',
        backgroundImage: `
            url(${logo})  
        `,
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 95%',
    },
    desktopBrand: {
        // border: 'solid blue 1px',
        paddingTop: '1rem',
        flex: '1 0 25%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'stretch',
        // alignItems: 'center',
        fontSize: '2rem'
    },
    desktopLink: {
        border: 'solid yellow 1px',
        fontSize: '1.3rem',
        paddingBottom: '1rem',
        flex: '1 0 12%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        textAlign: 'center'
    },
    desktopMenu: {
        border: 'solid yellow 1px',
        fontSize: '1.3rem',
        paddingBottom: '1rem',
        flex: '1 0 12%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        textAlign: 'center'
    },
    desktopMenuButton: {
        border: 'solid yellow 1px',

        color: theme.palette.common.white,
        textTransform: "none",
        fontSize: '1rem',
        // justifyContent: 'flex-end',
        // paddingBottom: '1rem',
        flex: '1 0 12%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'stretch',
        alignItems: 'center',
        textAlign: 'center'
    },

    businessType: {
        lineHeight: '1.0'
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
        <Box className={classes.root}  >
            <MobileNavbar />
            <DesktopNavbar />
        </Box>
    )
}

function MobileNavbar(props) {
    const classes = useStyles();
    return (
        <Box display={{ xs: 'block', md: 'none' }} >
            <AppBar
                className={[classes.navbar, classes.mobileNavbar]}
                position="sticky"
                elevation='3'
            >
                <Container
                    className={classes.navbarContainer}
                    maxWidth='md'
                    disableGutters
                >
                    <Grid container>
                        <Grid item xs={2} >
                            <Box className={classes.logo} />
                        </Grid>
                        <Grid item xs={8} >
                            <Box className={classes.mobileBrand} >
                                <Typography variant='h4' className={classes.businessName}>
                                    STEM Garden
                                </Typography>
                                <Typography variant='body2' className={classes.businessType} >
                                    Tutoring & Enrichment
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2} >
                            <MobileMenu />
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>
        </Box>
    );
}


function DesktopNavbar(props) {
    const classes = useStyles();
    return (
        <Box display={{ xs: 'none', md: 'block' }} >
            <AppBar
                className={[classes.navbar, classes.desktopNavbar]}
                position="sticky"
                elevation='3'
            >
                <Container
                    className={classes.navbarContainer}
                    maxWidth='md'
                    disableGutters
                >
                    <Box className={classes.desktopLogo} />
                    <Box className={classes.desktopBrand} >
                        STEM <br />Garden
                    </Box>
                    <Box className={classes.desktopLink} >
                        Teaching <br />Services
                    </Box>
                    <Box className={classes.desktopLink} >
                        About the<br />Garden
                    </Box>
                    <ProjectsMenu />
                    <Box className={classes.desktopLink} >
                        Contact
                    </Box>
                </Container>
            </AppBar>
        </Box>
    );
}







function ProjectsMenu() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className={classes.projectMenu}>
            <Button
                className={classes.desktopMenuButton}
                variant="text"
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <Typography variant="h5">
                    Other<br />Projects
                </Typography>
                
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}