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
import GardenStoryPage from "./pages/GardenStory";
import WhatsGrowingPage from "./pages/WhatsGrowing";
import AboutMePage from "./pages/AboutMe";
import ProgramPortfolioPage from "./pages/Program";
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

                        <Route path="/whats_growing">
                            <WhatsGrowingPage />
                        </Route> 

                        <Route path="/garden_story">
                            <GardenStoryPage />
                        </Route> 

                        <Route path="/about_me">
                            <AboutMePage />
                        </Route> 

                        <Route path="/program_portfolio">
                            <ProgramPortfolioPage />
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

