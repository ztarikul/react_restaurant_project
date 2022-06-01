import React from "react";
import Menu from "./Menu";
import Home from "./Home.";
import About from "./About";
import Contact from "./Contact";
import { Route, Redirect, Switch } from "react-router-dom";

const Body = () => {
    return (
        <div>
            <Switch>
            <Route path="/home" exatc component={Home} />
            <Route path="/menu" exatc component={Menu} />
            <Route path="/contact" exatc component={Contact} />
            <Route path="/about" exatc component={About} />
            <Redirect from="/" to="/home" />
            </Switch>
        </div>
    );
}

export default Body;