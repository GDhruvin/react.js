import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from './About';
import Contact from './Contact';
import Service from "./Service";
import Home from "./Home"
import Navbar from './Navbar';
import { Redirect, Route, Switch } from "react-router-dom";





const App = () => {

    

    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default App;

