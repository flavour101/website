import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import BpFrontend from "../routes/BpFrontend";
import Banner from "./Banner";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Banner />
                <Switch>
                    <Redirect exact from="/" to="/bp-frontend" />
                    <Route path="/bp-frontend" component={BpFrontend} />
                </Switch>
            </div>
        )
    }
}
