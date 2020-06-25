import React from 'react';
import {
    BrowserRouter as Router,
    Link as RouterLink,
    Route,
    Switch
} from "react-router-dom";

// MY components
import LandingPage from "./pages/Landing";
import TeachPage from "./pages/Teach";
import GardenPage from "./pages/Garden";
import AboutMePage from "./pages/AboutMe";
import ProgramPage from "./pages/Program";
// import ContactPage from "./pages/Contact";

//  MUI imports
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// import CssBaseline from '@material-ui/core/CssBaseline';


import theme from "./theme";
import {
    makeStyles, 
    ThemeProvider } from '@material-ui/core/styles';

import './App.css';

const useStyles = makeStyles((theme) => ({
    app: {
        
        minHeight: '100vh',
        minWidth: '100vw',

    },
    

}));


// App.js provides the Theme and Routing between pages

export default function App() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Router basename='/'>
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

                        <Route path="/about_me">
                            <AboutMePage />
                        </Route> 

                        <Route path="/program_portfolio">
                        <ProgramPage />
                        </Route> 

                        {/* <Route path="/contact">
                        <ContactPage />
                        </Route>  */}
                        
                    </Switch>
                </Router>
      
            </ThemeProvider>
        </React.Fragment>
    );
    
}

