import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import BpFrontend from "../routes/BpFrontend";
import Banner from "./Banner";
import Home from "../routes/Home";

const Content = styled.div`
    margin: 0 auto 50vh auto;
    width: 70%;
`

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Banner />
                <Content>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/bp-frontend" component={BpFrontend} />
                    </Switch>
                </Content>
            </div>
        )
    }
}
