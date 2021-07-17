import React from "react";
import Main from "../views/home";
import Dashboard from "../views/dashboard";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    )

}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

export default Routes;