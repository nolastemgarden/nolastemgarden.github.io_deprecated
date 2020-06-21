import React from 'react';
import {
    BrowserRouter as Router,
    Link as RouterLink,
    Route,
    Switch
} from "react-router-dom";

// MY Imports
import Navbar from "./components/Navbar";
import LandingPage from "./pages/Landing";
import TeachPage from "./pages/Teach";
import GardenPage from "./pages/Garden";
import ProgramPage from "./pages/Program";
import ContactPage from "./pages/Contact";

//  MUI imports
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// import CssBaseline from '@material-ui/core/CssBaseline';


import {
    createMuiTheme, 
    makeStyles, 
    ThemeProvider } from '@material-ui/core/styles';

import './App.css';


import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
// import { Button, createStyles } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#678b41',
            main: '#3a5e16',
            dark: '#123400',
        },
        secondary: green,
    },
    status: {
        danger: 'orange',
    },
});

const useStyles = makeStyles((theme) => ({
    app: {
        
        minHeight: '100vh',
        minWidth: '100vw',

    },
    

}));


// The app is a router that can lead to the landing page, the contact page, or one of the sub-routers for /teach /garden  /program & /blog
export default function App() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Router basename='/'>
                    <Navbar />
                    
                    <Switch>
                        
                        <Route exact path="/">
                        <LandingPage />
                        </Route>

                        <Route path="/teach">
                        <TeachPage />
                        </Route>

                        <Route path="/garden">
                        <GardenPage />
                        </Route> 

                        <Route path="/program">
                        <ProgramPage />
                        </Route> 

                        <Route path="/contact">
                        <ContactPage />
                        </Route>
                        
                    </Switch>
                </Router>
      
            </ThemeProvider>
        </React.Fragment>
    );
    
}

