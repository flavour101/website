import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Banner from "./Banner";
import Home from "../routes/Home";
import Reviews from "../routes/Reviews";
import Blog from "../routes/Blog";
import Recipes from "../routes/Recipes";
import Gallery from "../routes/Gallery";

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
                        <Route exact path="/reviews" component={Reviews} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/recipes" component={Recipes} />
                        <Route exact path="/gallery" component={Gallery} />
                    </Switch>
                </Content>
            </div>
        )
    }
}
